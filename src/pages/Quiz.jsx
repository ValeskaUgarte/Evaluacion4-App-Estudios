// QUIZ.JSX Página del cuestionario interactivo

import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getPreguntasPorAsignatura, getAsignaturas, crearReporte } from '../services/api';
import { KEYS_IDIOMAS } from '../services/api';
import './Quiz.css';

// FUNCIÓN AUXILIAR Mezcla un array (Fisher-Yates)
function mezclar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Traducción de la dificultad al español para mostrarla en pantalla
// (el valor interno 'easy', 'medium', 'hard' se mantiene igual).
const DIFICULTAD_LABEL = { easy: 'Fácil', medium: 'Media', hard: 'Difícil' };

// HOOKS Parámetros de ruta, navegación y estado de ubicación
export default function Quiz() {
  const { asignaturaId } = useParams();                    // ID de la asignatura desde la URL
  const navigate = useNavigate();                          // Para redirigir
  const location = useLocation();                          // Para recibir el estado (cantidad de preguntas)
  const count = location.state?.count ?? 999;              // Cantidad de preguntas (999 = todas)

  // ESTADOS DEL CUESTIONARIO
  const [preguntas, setPreguntas] = useState([]);          // Lista de preguntas del quiz
  const [asignatura, setAsignatura] = useState(null);      // Datos de la asignatura
  const [actual, setActual] = useState(0);                 // Índice de la pregunta actual
  const [seleccionada, setSeleccionada] = useState(null);  // Opción seleccionada por el usuario
  const [confirmada, setConfirmada] = useState(false);     // Si la respuesta fue confirmada
  const [respuestas, setRespuestas] = useState([]);        // Historial de respuestas
  const [loading, setLoading] = useState(true);            // Estado de carga
  const [error, setError] = useState(null);                // Mensaje de error

  // ESTADOS PARA IDIOMAS Selección de nivel
  const esIdioma = KEYS_IDIOMAS.includes(asignaturaId);    // Detecta si es una asignatura de idioma
  const [nivelElegido, setNivelElegido] = useState(null);  // Nivel seleccionado (basico/intermedio/avanzado/experto)

  // ESTADOS PARA REPORTES Reportar preguntas
  const [reportando, setReportando] = useState(false);     // Muestra opciones de reporte
  const [reporteEnviado, setReporteEnviado] = useState(false);


  // EFECTO Carga preguntas y asignaturas al montar el componente
  useEffect(() => {
    Promise.all([
      getPreguntasPorAsignatura(asignaturaId),
      getAsignaturas(),
    ]).then(([preg, asigs]) => {
      if (!preg.length) {
        setError('Esta asignatura aún no tiene preguntas cargadas.');
        setLoading(false);
        return;
      }

      // Filtrar por nivel si es idioma y hay nivel elegido
      let pregsFiltradas = preg;
      if (esIdioma && nivelElegido && nivelElegido !== 'todos') {
        pregsFiltradas = preg.filter(p => {
          if (nivelElegido === 'basico')     return p.profe === true;
          if (nivelElegido === 'intermedio') return p.intermedio === true;
          if (nivelElegido === 'avanzado')   return p.avanzado === true;
          if (nivelElegido === 'experto')    return p.experto === true;
          return true;
        });
      }

      // Profe primero, resto aleatorio (igual que antes pero sobre pregsFiltradas)
      const delProfe = pregsFiltradas.filter(p => p.profe);
      const resto = mezclar(pregsFiltradas.filter(p => !p.profe));
      const todas = [...delProfe, ...resto];
      const limitadas = count === 999 ? todas : todas.slice(0, count);
      setPreguntas(limitadas);
      setAsignatura(asigs.find(a => a.key === asignaturaId) ?? null);
    }).finally(() => setLoading(false));
  }, [asignaturaId, nivelElegido]);

  // PANTALLA DE CARGA
  if (loading) return (
    <><Navbar /><div className="loading">Cargando preguntas…</div></>
  );

  // PANTALLA DE ERROR Asignatura sin preguntas

  if (error) return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <img 
          src="https://png.pngtree.com/png-clipart/20250501/original/pngtree-3d-cartoon-girl-sleeping-on-bed-png-image_20915456.png" 
          style={{ width: '120px', marginBottom: '1rem' }} 
        />
        <h3 style={{ fontFamily: 'Space Grotesk', marginBottom: '0.8rem' }}>Por flojera 😴</h3>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Esta asignatura aún no tiene preguntas cargadas.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          De a poquito voy poniendo las preguntas...<br/>Porque somos felices, con poco 🌸
        </p>
        <button className="btn btn-ghost" onClick={() => navigate('/cuestionarios')}>
          ← Volver
        </button>
      </div>
    </>
  );

  // PANTALLA DE SELECCIÓN DE NIVEL Para asignaturas de idioma
if (esIdioma && !nivelElegido) {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="quiz-header">
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/cuestionarios')}>← Volver</button>
          <span className="quiz-asignatura">{asignatura?.nombre}</span>
        </div>
        <div className="quiz-card" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Selecciona tu nivel</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Las preguntas están organizadas por nivel de dificultad
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '320px', margin: '0 auto' }}>
            {[
              { key: 'basico',      label: '⭐ Básico',       desc: 'Hiragana, vocabulario y saludos' },
              { key: 'intermedio',  label: '⭐⭐ Intermedio',  desc: 'Gramática y conjugaciones' },
              { key: 'avanzado',    label: '⭐⭐⭐ Avanzado',  desc: 'Keigo y estructuras complejas' },
              { key: 'experto',     label: '⭐⭐⭐⭐ Experto', desc: 'Japonés clásico y dialectos' },
            ].map(n => (
              <button
                key={n.key}
                className="opcion"
                onClick={() => setNivelElegido(n.key)}
              >
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: '600' }}>{n.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{n.desc}</div>
                </div>
              </button>
            ))}
            <button
              className="opcion"
              onClick={() => setNivelElegido('todos')}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '600' }}>📚 Todos los niveles</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Mezcla preguntas de todos los niveles</div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

  // DATOS DE LA PREGUNTA ACTUAL
  const pregunta = preguntas[actual];
  const progreso = ((actual + 1) / preguntas.length) * 100;

  // FUNCIÓN Confirma la respuesta seleccionada
  function confirmar() {
    if (seleccionada === null) return;
    setConfirmada(true);
  }

  // FUNCIÓN Avanza a la siguiente pregunta o va a resultados
  function siguiente() {
    const nuevas = [...respuestas, {
      pregunta: pregunta.pregunta,
      opciones: pregunta.opciones,
      seleccionada,
      correcta: pregunta.respuestaCorrecta,
      explicacion: pregunta.explicacion,
      acertada: seleccionada === pregunta.respuestaCorrecta,
    }];
    if (actual + 1 >= preguntas.length) {
      navigate('/resultado', { state: { respuestas: nuevas, asignatura } });
    } else {
      setRespuestas(nuevas);
      setActual(a => a + 1);
      setSeleccionada(null);
      setConfirmada(false);
    }
  }

  // FUNCIÓN Determina la clase CSS de una opción
  function getOpcionClass(idx) {
    if (!confirmada) return seleccionada === idx ? 'opcion selected' : 'opcion';
    if (idx === pregunta.respuestaCorrecta) return 'opcion correcta';
    if (idx === seleccionada && idx !== pregunta.respuestaCorrecta) return 'opcion incorrecta';
    return 'opcion';
  }
  async function enviarReporte(motivo) {
  // Guarda el reporte en Local Storage (antes iba a json-server, que no existe en producción)
  await crearReporte({
    pregunta: pregunta.pregunta,
    asignatura: asignaturaId,
    motivo,
    fecha: new Date().toISOString(),
    usuario: 'anonimo'
  });
  setReportando(false);
  setReporteEnviado(true);
  setTimeout(() => setReporteEnviado(false), 3000);
}

  // RENDER - Cuestionario

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="quiz-header">
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/cuestionarios')}>← Volver</button>
          <span className="quiz-asignatura">{asignatura?.icon} {asignatura?.nombre}</span>
          <span className="quiz-contador">{actual + 1} / {preguntas.length}</span>
        </div>

        {/* CÍRCULOS DE NAVEGACIÓN */}
        <div className="dots-wrap">
          {preguntas.map((_, i) => {
            const resp = respuestas[i];
            let dotClass = 'dot';
            if (i === actual) dotClass += ' current';
            else if (resp) dotClass += resp.acertada ? ' answered-c' : ' answered-w';
            return (
              <button
                key={i}
                className={dotClass}
                onClick={() => {
                  setActual(i);
                  setSeleccionada(null);
                  setConfirmada(false);
                }}
                title={`Pregunta ${i + 1}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        {/* BARRA DE PROGRESO */}
        <div className="quiz-progress">
          <div className="quiz-progress-bar" style={{ width: `${progreso}%` }} />
        </div>
        {/* BARRA DE ENERGÍA */}
        {respuestas.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            
            {/* Barra de vida */}
            <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>❤️</span>
            <div style={{ flex: 1, height: '6px', background: '#faeaea', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                borderRadius: '99px',
                background: '#6db87a',
                width: `${Math.max(0, 100 - (respuestas.filter(r => !r.acertada).length / respuestas.length) * 100)}%`,
                transition: 'width 0.4s ease'
              }} />
            </div>

            {/* Aciertos vs errores */}
            <span style={{ fontSize: '0.7rem', color: '#6db87a', fontWeight: '600' }}>
              ✓{respuestas.filter(r => r.acertada).length}
            </span>
            <span style={{ fontSize: '0.7rem', color: '#d47a7a', fontWeight: '600' }}>
              ✗{respuestas.filter(r => !r.acertada).length}
            </span>

            {/* Porcentaje */}
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: '700',
              color: respuestas.filter(r => r.acertada).length / respuestas.length >= 0.6 ? '#6db87a' : '#d47a7a'
            }}>
              {Math.round((respuestas.filter(r => r.acertada).length / respuestas.length) * 100)}%
            </span>

          </div>
        )}

        {/* TARJETA DE PREGUNTA */}
        <div className="quiz-card">
          <div className="quiz-meta">
            <span className={`badge badge-${pregunta.dificultad}`}>{DIFICULTAD_LABEL[pregunta.dificultad] || pregunta.dificultad}</span>
            {pregunta.profe && <span className="badge badge-profe">Profe</span>}
            {pregunta.temario && <span className="badge badge-temario">Temario examen</span>}
            <span className="quiz-unidad">{pregunta.unidad}</span>
          </div>

          {/* CASO PRÁCTICO — "case" en las preguntas del banco estático,
              "caso" en las preguntas creadas desde Admin/Colaborador */}
          {(pregunta.case || pregunta.caso) && (
            <div className="quiz-case">
              📖 <strong>Caso práctico:</strong> {pregunta.case || pregunta.caso}
            </div>
          )}

          <h2 className="quiz-pregunta">{pregunta.pregunta}</h2>
          {/* RENDERIZAR TERMINAL, TABLA U OTRO CONTENIDO EXTRA */}
          {pregunta.extra && (
            <div
              className="quiz-extra"
              dangerouslySetInnerHTML={{ __html: pregunta.extra }}
            />
          )}

          {/* OPCIONES DE RESPUESTA */}
          <div className="opciones-grid">
            {pregunta.opciones.map((op, i) => (
              <button key={i} className={getOpcionClass(i)} onClick={() => !confirmada && setSeleccionada(i)}>
                <span className="opcion-letra">{String.fromCharCode(65 + i)}</span>
                <span className="opcion-texto">{op}</span>
              </button>
            ))}
          </div>

          {/* PRIMERO LOS BOTONES DE ACCIÓN */}
          <div className="quiz-actions">
            {!confirmada ? (
              <button className="btn btn-primary" onClick={confirmar} disabled={seleccionada === null}>
                Confirmar
              </button>
            ) : (
              <button className="btn btn-success" onClick={siguiente}>
                {actual + 1 >= preguntas.length ? 'Ver resultado →' : 'Siguiente →'}
              </button>
            )}
          </div>

          {/* DESPUÉS LA EXPLICACIÓN (PARA QUE APAREZCA ABAJO) */}
          {confirmada && (
            <div className={`explicacion ${seleccionada === pregunta.respuestaCorrecta ? 'exp-ok' : 'exp-error'}`}>
              <p className="exp-titulo">
                {seleccionada === pregunta.respuestaCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
              </p>
              <p>{pregunta.explicacion}</p>
            </div>
          )}

          {/* BOTÓN REPORTAR — agrega esto aquí */}
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            {reporteEnviado && (
              <span style={{ fontSize: '0.8rem', color: '#6db87a' }}>Reporte enviado</span>
            )}
            {!reporteEnviado && !reportando && (
              <button className="btn btn-ghost btn-sm" onClick={() => setReportando(true)}>
                Reportar pregunta
              </button>
            )}
            {reportando && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <button className="btn btn-ghost btn-sm" onClick={() => enviarReporte('Error en la pregunta')}>Error en la pregunta</button>
                <button className="btn btn-ghost btn-sm" onClick={() => enviarReporte('Respuesta incorrecta')}>Respuesta incorrecta</button>
                <button className="btn btn-ghost btn-sm" onClick={() => enviarReporte('Contenido inapropiado')}>Contenido inapropiado</button>
                <button className="btn btn-ghost btn-sm" onClick={() => setReportando(false)}>Cancelar</button>
              </div>
            )}
          </div>

        </div> {/* cierra quiz-card */}
      </main>
    </>
  );
}