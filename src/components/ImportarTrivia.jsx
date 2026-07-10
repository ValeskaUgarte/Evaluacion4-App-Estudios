// src/components/ImportarTrivia.jsx
// ══════════════════════════════════════════════════════════
// EVALUACIÓN 4 · Componente que consume la API externa Open Trivia DB
// (src/services/opentdb.js) y permite importar las preguntas obtenidas
// hacia el banco de preguntas propio de la app (LocalStorage, vía
// crearPregunta de services/api.js).
//
// Se usa tanto desde Admin.jsx (rol admin, quedan aprobadas al
// instante) como desde Colaborador.jsx (rol colaborador/moderador,
// quedan "pendientes" y deben pasar por el tab Revisión del Admin,
// igual que cualquier otra pregunta creada manualmente). Así el
// consumo de la API se integra con el CRUD y el flujo de moderación
// que ya existían, en vez de solo "mostrar" datos externos.
//
// Maneja explícitamente los 5 estados pedidos por la pauta:
//   cargando · éxito · error · sin resultados · actualización de datos
// ══════════════════════════════════════════════════════════

import { useState, useEffect } from 'react';
import { fetchCategoriasTrivia, fetchPreguntasTrivia } from '../services/opentdb';
import { crearPregunta, estadoSegunRol, registrarActividad } from '../services/api';
import './ImportarTrivia.css';

const DIFICULTAD_LABEL = { easy: '🟢 Fácil', medium: '🟡 Media', hard: '🔴 Difícil' };

export default function ImportarTrivia({ usuario, asignaturas, onImportado }) {
  // ── Categorías de la API (se cargan una vez, al montar) ──
  const [categorias, setCategorias] = useState([]);
  const [estadoCategorias, setEstadoCategorias] = useState('cargando'); // cargando | exito | error

  // ── Filtros de búsqueda ──
  const [asignaturaId, setAsignaturaId] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [cantidad, setCantidad] = useState(10);

  // ── Resultado de la búsqueda ──
  // estado: idle | cargando | exito | error | vacio
  const [estado, setEstado] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [descartadas, setDescartadas] = useState(0);
  const [resultados, setResultados] = useState([]); // [{ ...pregunta, seleccionada, _localId }]

  // ── Importación hacia el banco propio ──
  const [importando, setImportando] = useState(false);
  const [msgImport, setMsgImport] = useState(null); // { texto, tipo: 'success' | 'error' }

  // EFECTO INICIAL - Carga categorías de la API externa al montar el componente
  useEffect(() => {
    let activo = true;
    setEstadoCategorias('cargando');
    fetchCategoriasTrivia().then(res => {
      if (!activo) return;
      if (res.ok) {
        setCategorias(res.categorias);
        setEstadoCategorias('exito');
      } else {
        setEstadoCategorias('error');
      }
    });
    return () => { activo = false; }; // evita setState si el componente se desmonta antes de responder
  }, []);

  async function buscar() {
    setEstado('cargando');
    setErrorMsg('');
    setMsgImport(null);
    const res = await fetchPreguntasTrivia({ categoria, dificultad, cantidad });
    if (!res.ok) {
      setEstado('error');
      setErrorMsg(res.error);
      setResultados([]);
      return;
    }
    if (res.preguntas.length === 0) {
      setEstado('vacio');
      setResultados([]);
      return;
    }
    setDescartadas(res.descartadas || 0);
    setResultados(res.preguntas.map((p, i) => ({ ...p, seleccionada: true, _localId: `${Date.now()}_${i}` })));
    setEstado('exito');
  }

  // "Actualización de datos": repite la misma búsqueda con los mismos filtros
  function actualizar() {
    buscar();
  }

  function toggleSeleccion(localId) {
    setResultados(rs => rs.map(r => r._localId === localId ? { ...r, seleccionada: !r.seleccionada } : r));
  }

  function seleccionarTodas(valor) {
    setResultados(rs => rs.map(r => ({ ...r, seleccionada: valor })));
  }

  async function importarSeleccionadas() {
    const asig = asignaturas.find(a => (a.key ?? a._id) === asignaturaId);
    if (!asig) {
      setMsgImport({ texto: 'Selecciona una asignatura de destino antes de importar.', tipo: 'error' });
      return;
    }
    const seleccionadas = resultados.filter(r => r.seleccionada);
    if (seleccionadas.length === 0) {
      setMsgImport({ texto: 'No hay preguntas seleccionadas para importar.', tipo: 'error' });
      return;
    }

    setImportando(true);
    setMsgImport(null);
    const estadoNuevo = estadoSegunRol(usuario?.rol);

    try {
      // Se crean en paralelo; si alguna falla, no detiene a las demás.
      const resultadosImport = await Promise.allSettled(
        seleccionadas.map(p => crearPregunta({
          pregunta: p.pregunta,
          opciones: p.opciones,
          respuestaCorrecta: p.respuestaCorrecta,
          dificultad: p.dificultad,
          unidad: p.categoria,
          caso: '',
          extra: '',
          explicacion: p.explicacion,
          esDelProfesor: false,
          asignatura: asig.nombre || asig.key,
          asignaturaId: asig.key || asig._id,
          estado: estadoNuevo,
          creadoPorNombre: usuario?.nombre || 'desconocido',
          creadoPorRol: usuario?.rol || '—',
          origen: 'opentdb', // trazabilidad: distingue preguntas importadas de la API vs. manuales
        }))
      );

      const exitosas = resultadosImport.filter(r => r.status === 'fulfilled').length;
      const fallidas = resultadosImport.length - exitosas;

      registrarActividad(
        `Importó ${exitosas} pregunta(s) desde Open Trivia DB hacia "${asig.nombre || asig.key}"` +
        (estadoNuevo === 'pendiente' ? ' (quedaron pendientes de revisión)' : '')
      );

      // Quita del listado las que sí se importaron; deja las fallidas para reintentar
      const idsFallidos = new Set(
        resultadosImport
          .map((r, i) => (r.status === 'rejected' ? seleccionadas[i]._localId : null))
          .filter(Boolean)
      );
      setResultados(rs => rs.filter(r => !r.seleccionada || idsFallidos.has(r._localId)));

      setMsgImport({
        texto: fallidas === 0
          ? `✅ Se importaron ${exitosas} pregunta(s)${estadoNuevo === 'pendiente' ? ' — quedaron pendientes de aprobación en el tab Revisión.' : ' correctamente.'}`
          : `⚠️ Se importaron ${exitosas}, pero ${fallidas} fallaron. Puedes reintentar con las que quedaron en la lista.`,
        tipo: fallidas === 0 ? 'success' : 'error',
      });

      onImportado?.();
    } catch {
      setMsgImport({ texto: 'Ocurrió un error inesperado al importar las preguntas.', tipo: 'error' });
    } finally {
      setImportando(false);
    }
  }

  const seleccionadasCount = resultados.filter(r => r.seleccionada).length;

  return (
    <div className="importar-trivia">
      <div className="card importar-intro">
        <h3>🌐 Importar preguntas desde una API externa</h3>
        <p className="importar-desc">
          Trae preguntas listas desde <strong>Open Trivia DB</strong> (API pública de trivia) y
          agrégalas al banco de preguntas de una asignatura. Como esa API solo entrega contenido en
          inglés, cada pregunta y sus opciones se <strong>traducen automáticamente al español</strong> antes
          de mostrarse. {usuario?.rol === 'admin'
            ? 'Como administrador, quedarán aprobadas de inmediato.'
            : 'Quedarán en estado "pendiente" hasta que un administrador o moderador las apruebe.'}
        </p>
      </div>

      {/* FILTROS DE BÚSQUEDA */}
      <div className="card">
        <div className="form-row">
          <div className="form-group" style={{ flex: 2 }}>
            <label className="input-label" htmlFor="trivia-asignatura">📚 Asignatura de destino *</label>
            <select
              id="trivia-asignatura"
              className="input"
              value={asignaturaId}
              onChange={e => setAsignaturaId(e.target.value)}
            >
              <option value="">Selecciona una asignatura</option>
              {asignaturas.map(a => (
                <option key={a.key ?? a._id} value={a.key ?? a._id}>{a.nombre}</option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ flex: 2 }}>
            <label className="input-label" htmlFor="trivia-categoria">🏷️ Categoría (Open Trivia DB)</label>
            {estadoCategorias === 'cargando' && <p className="importar-hint">Cargando categorías…</p>}
            {estadoCategorias === 'error' && (
              <p className="importar-hint importar-hint-error">No se pudieron cargar las categorías. Puedes buscar sin filtrar por categoría.</p>
            )}
            <select
              id="trivia-categoria"
              className="input"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
              disabled={estadoCategorias === 'cargando'}
            >
              <option value="">Todas las categorías</option>
              {categorias.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ flex: 1 }}>
            <label className="input-label" htmlFor="trivia-dificultad">📊 Dificultad</label>
            <select id="trivia-dificultad" className="input" value={dificultad} onChange={e => setDificultad(e.target.value)}>
              <option value="">Cualquiera</option>
              <option value="easy">🟢 Fácil</option>
              <option value="medium">🟡 Media</option>
              <option value="hard">🔴 Difícil</option>
            </select>
          </div>

          <div className="form-group" style={{ flex: 1 }}>
            <label className="input-label" htmlFor="trivia-cantidad">🔢 Cantidad</label>
            <input
              id="trivia-cantidad"
              type="number"
              className="input"
              min={1}
              max={30}
              value={cantidad}
              onChange={e => setCantidad(Math.min(30, Math.max(1, Number(e.target.value) || 1)))}
            />
          </div>
        </div>

        <div className="importar-acciones">
          <button className="btn btn-primary" onClick={buscar} disabled={estado === 'cargando'}>
            {estado === 'cargando' ? 'Buscando…' : '🔍 Buscar preguntas'}
          </button>
          {estado !== 'idle' && estado !== 'cargando' && (
            <button className="btn btn-sm" onClick={actualizar}>🔄 Actualizar resultados</button>
          )}
        </div>
      </div>

      {/* ── ESTADO: CARGANDO ── */}
      {estado === 'cargando' && (
        <div className="loading importar-loading">
          <span className="importar-spinner" aria-hidden="true" /> Consultando Open Trivia DB y traduciendo al español…
        </div>
      )}

      {/* ── ESTADO: ERROR ── */}
      {estado === 'error' && (
        <div className="admin-flash-inline error">
          {errorMsg}
        </div>
      )}

      {/* ── ESTADO: SIN RESULTADOS ── */}
      {estado === 'vacio' && (
        <div className="admin-flash-inline warn">
          No se encontraron preguntas para esos filtros. Prueba cambiando la categoría, dificultad o cantidad.
        </div>
      )}

      {/* ── ESTADO: ÉXITO — listado de preguntas obtenidas ── */}
      {estado === 'exito' && resultados.length > 0 && (
        <div className="card">
          <div className="admin-list-header">
            <h3>{resultados.length} pregunta(s) encontradas {descartadas > 0 && <span className="importar-hint">({descartadas} descartadas por datos incompletos)</span>}</h3>
            <div className="importar-acciones">
              <button className="btn btn-sm" onClick={() => seleccionarTodas(true)}>Seleccionar todas</button>
              <button className="btn btn-sm" onClick={() => seleccionarTodas(false)}>Ninguna</button>
            </div>
          </div>

          <div className="preguntas-lista">
            {resultados.map(p => (
              <label key={p._localId} className={`preg-item importar-item ${p.seleccionada ? 'importar-item-sel' : ''}`}>
                <input
                  type="checkbox"
                  checked={p.seleccionada}
                  onChange={() => toggleSeleccion(p._localId)}
                  className="importar-checkbox"
                />
                <div style={{ flex: 1 }}>
                  <div className="preg-info">
                    <span className={`badge badge-${p.dificultad}`}>{DIFICULTAD_LABEL[p.dificultad]}</span>
                    <span className="preg-asig">{p.categoria}</span>
                  </div>
                  <p className="preg-texto">{p.pregunta}</p>
                  <div className="colab-opts">
                    {p.opciones.map((op, j) => (
                      <div key={j} className={`colab-opt ${j === p.respuestaCorrecta ? 'colab-opt-correcta' : ''}`}>
                        <span className="colab-letra">{String.fromCharCode(65 + j)}</span>
                        <span>{op}</span>
                        {j === p.respuestaCorrecta && <span className="check-mark">✓</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </label>
            ))}
          </div>

          {msgImport && (
            <div className={`admin-flash-inline ${msgImport.tipo}`}>{msgImport.texto}</div>
          )}

          <button
            className="btn btn-primary"
            onClick={importarSeleccionadas}
            disabled={importando || seleccionadasCount === 0 || !asignaturaId}
            style={{ marginTop: '1rem' }}
          >
            {importando ? 'Importando…' : `⬇️ Importar ${seleccionadasCount} seleccionada(s)`}
          </button>
          {!asignaturaId && <p className="importar-hint importar-hint-error">Elige una asignatura de destino para poder importar.</p>}
        </div>
      )}
    </div>
  );
}
