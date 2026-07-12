// ADMIN Panel de administración para gestionar preguntas, asignaturas y reportes
//
// NOTA DE ESTRUCTURA (reorganización sin tocar lógica ni colores):
// Este archivo sigue siendo el "orquestador": guarda TODO el estado y
// TODA la lógica (CRUD, validaciones, moderación, activar/desactivar),
// exactamente igual que antes. Lo único que cambió es que el JSX de
// cada pestaña ahora vive en su propio componente dentro de
// src/pages/admin/, y aquí solo se les pasan los datos y funciones
// que necesitan como props. Mismas clases CSS, mismos textos, mismo
// comportamiento: solo se reordenó el código para que sea más fácil
// de mantener y de explicar.
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ImportarTrivia from '../components/ImportarTrivia';
import { useAuth } from '../context/AuthContext';
// Importa las funciones de API para CRUD de preguntas y asignaturas
import {
  getAsignaturas, getPreguntas,
  crearPregunta, editarPregunta, eliminarPregunta,
  crearAsignatura, eliminarAsignatura,
  getAsignaturasDesactivadas, toggleAsignaturaActiva,
  getReportes, eliminarReporte, registrarActividad,
  // Moderación: pendientes + aprobar/rechazar (ver services/api.js)
  getPreguntasPendientes, aprobarPregunta, rechazarPregunta,
  getAsignaturasPendientes, aprobarAsignatura, rechazarAsignatura,
} from '../services/api';

import { EMPTY_P, EMPTY_A, MAX_PREGUNTA, MAX_OPCION, MAX_EXPLICACION, MAX_EXTRA, MAX_CASO, MAX_NOMBRE_ASIG, MAX_DESC_ASIG, MIN_OPCIONES, MAX_OPCIONES } from './admin/constantes';
import AdminRevision from './admin/AdminRevision';
import AdminModeradores from './admin/AdminModeradores';
import AdminPreguntas from './admin/AdminPreguntas';
import AdminAsignaturas from './admin/AdminAsignaturas';
import AdminReportes from './admin/AdminReportes';
import AdminEstado from './admin/AdminEstado';

// ESTADOS DEL COMPONENTE
export default function Admin() {
  const { usuario, listarUsuarios, nombrarModerador, revocarModerador } = useAuth();
  // esAdmin: solo el rol 'admin' ve la gestión completa (crear/eliminar
  // asignaturas y preguntas ya aprobadas, activar/desactivar, nombrar
  // moderadores). Un 'moderador' solo debe ver "Revisión" y "Reportes":
  // así se cumple que no tenga los mismos privilegios que el admin.
  const esAdmin = usuario?.rol === 'admin';

  const [tab, setTab] = useState(esAdmin ? 'preguntas' : 'revision'); // Pestaña activa
  const [preguntas, setPreguntas] = useState([]);     // Lista de preguntas (ya aprobadas)
  const [asignaturas, setAsignaturas] = useState([]); // Lista de asignaturas (ya aprobadas)
  const [loading, setLoading] = useState(true);       // Estado de carga
  const [form, setForm] = useState(EMPTY_P);          // Formulario de pregunta (nueva/edición)
  const [editId, setEditId] = useState(null);         // ID de la pregunta que se está editando
  const [filtroAsig, setFiltroAsig] = useState('');   // Filtro por asignatura
  const [formA, setFormA] = useState(EMPTY_A);        // Formulario de asignatura
  const [msg, setMsg] = useState('');                 // Mensajes de feedback
  const [msgTipo, setMsgTipo] = useState('success');  // 'success' (verde) o 'error' (rojo)
  const [errores, setErrores] = useState({});         // Errores por campo del formulario de pregunta (para mostrar debajo de cada uno)
  const [reportes, setReportes] = useState([]);       // Lista de reportes de errores
  const [desactivadas, setDesactivadas] = useState([]); // Keys de cuestionarios desactivados
  const [ordenPreguntas, setOrdenPreguntas] = useState('fecha'); // 'fecha' o 'nombre'
  const [ordenAsignaturas, setOrdenAsignaturas] = useState('fecha'); // 'fecha' o 'nombre'
  const [asigDetalle, setAsigDetalle] = useState(null); // Asignatura cuyo detalle (preguntas) se está viendo, o null

  //MODERACIÓN: preguntas y asignaturas pendientes de aprobación
  const [preguntasPend, setPreguntasPend] = useState([]);
  const [asignaturasPend, setAsignaturasPend] = useState([]);

  //MODERADORES: lista de usuarios registrados (solo admin la usa)
  const [usuarios, setUsuarios] = useState([]);

  // FUNCIONES AUXILIARES
  // Muestra un mensaje temporal (2.5 segundos). tipo: 'success' | 'error'
  // (mismo esquema de colores que usan Colaborador/Moderador).
  function flash(txt, tipo = 'success') { setMsg(txt); setMsgTipo(tipo); setTimeout(() => setMsg(''), 3200); }

  // CARGA DE DATOS Obtiene preguntas, asignaturas, reportes y lo pendiente de revisión
  function cargar() {
  return Promise.all([
    getPreguntas(),
    getAsignaturas(),
    getReportes(), // viene de Local Storage, no depende de json-server
    getPreguntasPendientes(),
    getAsignaturasPendientes(),
  ])
    .then(([p, a, r, pp, ap]) => {
      setPreguntas(p);
      setAsignaturas(a);
      setReportes(r);
      setPreguntasPend(pp);
      setAsignaturasPend(ap);
      // La lista de usuarios (para nombrar moderadores) solo la necesita
      // el admin; se recarga aquí para que se mantenga sincronizada.
      if (esAdmin) setUsuarios(listarUsuarios());
    })
    .finally(() => setLoading(false));
}

  // ACTIVAR/DESACTIVAR Cambia el estado de una asignatura y refresca la lista
  function manejarToggleAsignatura(key) {
    toggleAsignaturaActiva(key);
    setDesactivadas(getAsignaturasDesactivadas());
    registrarActividad(`Cambió el estado (activo/inactivo) de la asignatura "${key}"`, 'asignatura');
  }


  // EFECTO INICIAL Carga los datos al montar el componente
  useEffect(() => { cargar(); setDesactivadas(getAsignaturasDesactivadas()); }, []);

  // CRUD DE PREGUNTAS Guardar, editar y eliminar
  async function guardarPregunta() {
    const preguntaLimpia = form.pregunta.trim();

    // Reunimos TODOS los errores por campo en un objeto, para poder
    // mostrar la advertencia específica debajo de cada campo (en vez
    // de un solo mensaje genérico que obliga a adivinar cuál falta).
    const nuevosErrores = {};
    if (!form.asignaturaId) nuevosErrores.asignaturaId = 'Selecciona una asignatura.';
    if (!preguntaLimpia) nuevosErrores.pregunta = 'Escribe la pregunta.';
    else if (preguntaLimpia.length > MAX_PREGUNTA) nuevosErrores.pregunta = `La pregunta no puede superar los ${MAX_PREGUNTA} caracteres.`;

    // Una entrada por cada opción vacía o demasiado larga, indexada por posición
    const opcionesErr = {};
    form.opciones.forEach((o, i) => {
      if (!o.trim()) opcionesErr[i] = 'Completa esta opción.';
      else if (o.length > MAX_OPCION) opcionesErr[i] = `Máximo ${MAX_OPCION} caracteres.`;
    });
    if (Object.keys(opcionesErr).length) nuevosErrores.opciones = opcionesErr;

    if (!form.explicacion.trim()) nuevosErrores.explicacion = 'Escribe la explicación de la respuesta correcta.';
    else if (form.explicacion.length > MAX_EXPLICACION) nuevosErrores.explicacion = `La explicación no puede superar los ${MAX_EXPLICACION} caracteres.`;

    if (form.esDelProfesor === null) nuevosErrores.esDelProfesor = 'Indica si es de una prueba del profesor o inventada.';

    if (form.extra.length > MAX_EXTRA) nuevosErrores.extra = `El contenido extra no puede superar los ${MAX_EXTRA} caracteres.`;
    if (form.caso.length > MAX_CASO) nuevosErrores.caso = `El caso no puede superar los ${MAX_CASO} caracteres.`;

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length) return flash('Revisa los campos marcados en rojo.', 'error');

    try {
      const asig = asignaturas.find(a => a.key === form.asignaturaId || a._id === form.asignaturaId);
      if (!asig) return flash('Asignatura no encontrada.', 'error');
      const payload = {
        ...form,
        pregunta: preguntaLimpia,
        asignatura: asig.nombre || asig.key,
        asignaturaId: asig.key || asig._id,
        respuestaCorrecta: parseInt(form.respuestaCorrecta) || 0,
        // El admin publica directo: no pasa por revisión (a diferencia
        // de lo que crea un colaborador/moderador desde su propio panel).
        estado: 'aprobado',
      };
      if (editId) {
        await editarPregunta(editId, payload);
        flash('Pregunta actualizada ✓');
        registrarActividad(`Editó la pregunta "${preguntaLimpia.slice(0, 60)}"`, 'pregunta');
      } else {
        await crearPregunta(payload);
        flash('Pregunta creada ✓');
        registrarActividad(`Creó la pregunta "${preguntaLimpia.slice(0, 60)}"`, 'pregunta');
      }
      setForm(EMPTY_P);
      setEditId(null);
      setErrores({});
      cargar();
    } catch (error) {
      flash('Error al guardar la pregunta', 'error');
    }
  }

  // Agrega una opción de respuesta más (hasta MAX_OPCIONES)
  function agregarOpcion() {
    if (form.opciones.length >= MAX_OPCIONES) return flash(`Máximo ${MAX_OPCIONES} opciones.`, 'error');
    setForm(f => ({ ...f, opciones: [...f.opciones, ''] }));
  }

  // Quita la última opción de respuesta (hasta MIN_OPCIONES)
  function quitarOpcion() {
    if (form.opciones.length <= MIN_OPCIONES) return flash(`Mínimo ${MIN_OPCIONES} opciones.`, 'error');
    setForm(f => {
      const opciones = f.opciones.slice(0, -1);
      // Si la respuesta correcta apuntaba a la opción que quitamos, la reseteamos a la primera
      const respuestaCorrecta = f.respuestaCorrecta >= opciones.length ? 0 : f.respuestaCorrecta;
      return { ...f, opciones, respuestaCorrecta };
    });
  }

  // Carga los datos de una pregunta en el formulario para editarla
  function editarP(p) {
    setForm({
      pregunta: p.pregunta,
      caso: p.caso || '',
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      dificultad: p.dificultad,
      unidad: p.unidad || '',
      asignaturaId: p.asignaturaId,
      explicacion: p.explicacion || '',
      extra: p.extra || '',
      esDelProfesor: typeof p.esDelProfesor === 'boolean' ? p.esDelProfesor : null
    });
    setEditId(p._id || p.id);
    setErrores({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Elimina una pregunta previa confirmación
  async function borrarP(id) {
    if (!confirm('¿Eliminar esta pregunta?')) return;
    await eliminarPregunta(id);
    flash('Eliminada ✓');
    registrarActividad('Eliminó una pregunta del banco', 'pregunta');
    cargar();
  }

  // CRUD DE ASIGNATURAS Guardar y eliminar
  async function guardarAsignatura() {
    const nombreLimpio = formA.nombre.trim();
    const faltantes = [];
    if (!nombreLimpio) faltantes.push('Nombre');
    if (faltantes.length) return flash(`Faltan campos obligatorios: ${faltantes.join(', ')}.`, 'error');
    if (nombreLimpio.length > MAX_NOMBRE_ASIG) return flash(`El nombre no puede superar los ${MAX_NOMBRE_ASIG} caracteres.`, 'error');
    if (formA.descripcion.length > MAX_DESC_ASIG) return flash(`La descripción no puede superar los ${MAX_DESC_ASIG} caracteres.`, 'error');
    // El admin publica directo (estado 'aprobado'); un colaborador que
    // propone una asignatura desde su panel siempre queda 'pendiente'.
    const payload = { ...formA, nombre: nombreLimpio, key: nombreLimpio.toLowerCase().replace(/\s+/g, '_'), estado: 'aprobado' };
    await crearAsignatura(payload);
    flash('Asignatura creada ✓');
    registrarActividad(`Creó la asignatura "${nombreLimpio}"`, 'asignatura');
    setFormA(EMPTY_A);
    cargar();
  }

  // Elimina una asignatura previa confirmación
  async function borrarA(id) {
    if (!confirm('¿Eliminar esta asignatura?')) return;
    await eliminarAsignatura(id);
    flash('Eliminada ✓');
    registrarActividad('Eliminó una asignatura', 'asignatura');
    cargar();
  }


  // ACCIONES DEL TAB "REVISIÓN" - aprobar/rechazar lo que enviaron
  // colaboradores y moderadores. Disponibles tanto para admin como
  // para moderador (por eso NO se filtran por esAdmin).
 
  async function aprobarPreg(id) {
    await aprobarPregunta(id);
    flash('Pregunta aprobada ✓');
    registrarActividad('Aprobó una pregunta pendiente', 'pregunta');
    cargar();
  }

  async function rechazarPreg(id) {
    if (!confirm('¿Rechazar (eliminar) esta pregunta pendiente?')) return;
    await rechazarPregunta(id);
    flash('Pregunta rechazada');
    registrarActividad('Rechazó una pregunta pendiente', 'pregunta');
    cargar();
  }

  async function aprobarAsig(id) {
    await aprobarAsignatura(id);
    flash('Asignatura aprobada ✓');
    registrarActividad('Aprobó una asignatura pendiente', 'asignatura');
    cargar();
  }

  async function rechazarAsig(id) {
    if (!confirm('¿Rechazar (eliminar) esta asignatura pendiente?')) return;
    await rechazarAsignatura(id);
    flash('Asignatura rechazada');
    registrarActividad('Rechazó una asignatura pendiente', 'asignatura');
    cargar();
  }

 
  // ACCIONES DEL TAB "MODERADORES" (solo admin)
  
  function handleNombrarModerador(id) {
    nombrarModerador(id);
    setUsuarios(listarUsuarios());
    flash('Usuario nombrado moderador ✓');
    registrarActividad('Nombró a un usuario como moderador', 'moderador');
  }

  function handleRevocarModerador(id) {
    if (!confirm('¿Quitar el rol de moderador a este usuario?')) return;
    revocarModerador(id);
    setUsuarios(listarUsuarios());
    flash('Rol de moderador revocado');
    registrarActividad('Revocó el rol de moderador a un usuario', 'moderador');
  }


  // ACCIONES DEL TAB "REPORTES"

  function manejarIrAPregunta(r) {
    const preg = preguntas.find(p => p.pregunta === r.pregunta);
    if (preg) { editarP(preg); setTab('preguntas'); }
    else flash('Pregunta no encontrada en el banco.', 'error');
  }

  async function manejarEliminarPreguntaReportada(r) {
    const preg = preguntas.find(p => p.pregunta === r.pregunta);
    if (preg && confirm('¿Eliminar la pregunta reportada?')) {
      await eliminarPregunta(preg._id || preg.id);
      flash('Pregunta eliminada ✓');
    }
    await eliminarReporte(r.id);
    registrarActividad(`Resolvió un reporte eliminando la pregunta "${(r.pregunta || '').slice(0, 60)}"`, 'reporte');
    cargar();
  }

  async function manejarDescartarReporte(r) {
    await eliminarReporte(r.id);
    registrarActividad(`Descartó un reporte sobre la pregunta "${(r.pregunta || '').slice(0, 60)}"`, 'reporte');
    cargar();
  }

  // FILTRADO Filtra preguntas por asignatura seleccionada
  const pregsFiltradas = (filtroAsig
    ? preguntas.filter(p => p.asignaturaId === filtroAsig || p.asignatura === filtroAsig)
    : preguntas
  ).slice().sort((a, b) => {
    if (ordenPreguntas === 'nombre') return (a.pregunta || '').localeCompare(b.pregunta || '');
    // Por fecha: más nuevas primero. Las preguntas del banco estático no
    // tienen createdAt, así que quedan al final (se tratan como fecha 0).
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  // Asignaturas ordenadas por fecha (más nuevas primero) o por nombre
  const asignaturasOrdenadas = asignaturas.slice().sort((a, b) => {
    if (ordenAsignaturas === 'nombre') return (a.nombre || '').localeCompare(b.nombre || '');
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  // PANTALLA DE CARGA
  if (loading) return <><Navbar /><div className="loading">Cargando…</div></>;

  // RENDER Interface del panel de administración
  return (
    <>
      <Navbar />
      <main className="page admin-page">

        <div className="admin-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src="/img/app001admin.jpg"
            alt="administrador"
            style={{ width: '80px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <h1>Panel de administración</h1>
            <p className="admin-sub">Gestiona asignaturas y preguntas</p>
          </div>
        </div>

        {msg && <div className={`admin-flash ${msgTipo}`}>{msg}</div>}

        <div className="admin-tabs">
          {/* "Revisión" es lo primero que ve un moderador: preguntas y
              asignaturas pendientes de aprobación. Disponible para admin
              y moderador. Los demás tabs de gestión completa (crear/
              eliminar directamente, activar/desactivar, moderadores)
              son SOLO para 'admin': así el moderador ayuda a revisar
              pero no tiene los mismos privilegios que el administrador. */}
          <button className={`tab ${tab === 'revision' ? 'tab-active' : ''}`} onClick={() => setTab('revision')}>
            Revisión <span className="tab-count">{preguntasPend.length + asignaturasPend.length}</span>
          </button>
          {esAdmin && (
            <button className={`tab ${tab === 'preguntas' ? 'tab-active' : ''}`} onClick={() => setTab('preguntas')}>
              Preguntas <span className="tab-count">{preguntas.length}</span>
            </button>
          )}
          {esAdmin && (
            <button className={`tab ${tab === 'asignaturas' ? 'tab-active' : ''}`} onClick={() => setTab('asignaturas')}>
              Asignaturas <span className="tab-count">{asignaturas.length}</span>
            </button>
          )}
          {esAdmin && (
            <button className={`tab ${tab === 'importar' ? 'tab-active' : ''}`} onClick={() => setTab('importar')}>
              Importar API
            </button>
          )}
          <button className={`tab ${tab === 'reportes' ? 'tab-active' : ''}`} onClick={() => setTab('reportes')}>
            Reportes <span className="tab-count">{reportes.length}</span>
          </button>
          {esAdmin && (
            <button className={`tab ${tab === 'estado' ? 'tab-active' : ''}`} onClick={() => setTab('estado')}>
              Estado <span className="tab-count">{desactivadas.length}</span>
            </button>
          )}
          {esAdmin && (
            <button className={`tab ${tab === 'moderadores' ? 'tab-active' : ''}`} onClick={() => setTab('moderadores')}>
              Moderadores
            </button>
          )}
        </div>

        {/* TAB REVISIÓN - preguntas y asignaturas pendientes de aprobación */}
        {tab === 'revision' && (
          <AdminRevision
            asignaturasPend={asignaturasPend}
            preguntasPend={preguntasPend}
            aprobarAsig={aprobarAsig}
            rechazarAsig={rechazarAsig}
            aprobarPreg={aprobarPreg}
            rechazarPreg={rechazarPreg}
          />
        )}

        {/* TAB MODERADORES (solo admin) - nombrar/revocar moderadores entre
            los usuarios ya registrados (estudiantes o colaboradores) */}
        {esAdmin && tab === 'moderadores' && (
          <AdminModeradores
            usuarios={usuarios}
            handleNombrarModerador={handleNombrarModerador}
            handleRevocarModerador={handleRevocarModerador}
          />
        )}

        {/* TAB PREGUNTAS */}
        {esAdmin && tab === 'preguntas' && (
          <AdminPreguntas
            form={form} setForm={setForm}
            errores={errores} setErrores={setErrores}
            editId={editId} setEditId={setEditId}
            asignaturas={asignaturas}
            agregarOpcion={agregarOpcion}
            quitarOpcion={quitarOpcion}
            guardarPregunta={guardarPregunta}
            setTab={setTab}
          />
        )}

        {/* TAB IMPORTAR API - trae preguntas desde Open Trivia DB (API
            externa pública) y las agrega al banco propio, integradas
            con el mismo flujo de creación/moderación que ya existía
            (ver src/components/ImportarTrivia.jsx y src/services/opentdb.js) */}
        {esAdmin && tab === 'importar' && (
          <ImportarTrivia usuario={usuario} asignaturas={asignaturas} onImportado={cargar} />
        )}

        {/* TAB ASIGNATURAS */}
        {esAdmin && tab === 'asignaturas' && (
          <AdminAsignaturas
            asigDetalle={asigDetalle} setAsigDetalle={setAsigDetalle}
            setFiltroAsig={setFiltroAsig}
            pregsFiltradas={pregsFiltradas}
            ordenPreguntas={ordenPreguntas} setOrdenPreguntas={setOrdenPreguntas}
            editarP={editarP} borrarP={borrarP}
            setTab={setTab} setForm={setForm} setErrores={setErrores}
            asignaturasOrdenadas={asignaturasOrdenadas}
            ordenAsignaturas={ordenAsignaturas} setOrdenAsignaturas={setOrdenAsignaturas}
            formA={formA} setFormA={setFormA}
            guardarAsignatura={guardarAsignatura} borrarA={borrarA}
          />
        )}

        {tab === 'reportes' && (
          <AdminReportes
            reportes={reportes}
            onIrAPregunta={manejarIrAPregunta}
            onEliminarPreguntaReportada={manejarEliminarPreguntaReportada}
            onDescartarReporte={manejarDescartarReporte}
          />
        )}

        {/* TAB ESTADO - Activar/desactivar cuestionarios */}
        {esAdmin && tab === 'estado' && (
          <AdminEstado
            asignaturas={asignaturas}
            desactivadas={desactivadas}
            manejarToggleAsignatura={manejarToggleAsignatura}
          />
        )}

      </main>
    </>
  );
}
