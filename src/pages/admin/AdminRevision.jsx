// src/pages/admin/AdminRevision.jsx
// TAB REVISIÓN - preguntas y asignaturas pendientes de aprobación.
// Disponible tanto para admin como para moderador.
// (Misma estructura y clases CSS que estaban en Admin.jsx; solo se
// movió el JSX a un componente propio.)
import { DIFICULTAD_LABEL } from './constantes';

export default function AdminRevision({
  asignaturasPend = [],
  preguntasPend = [],
  aprobarAsig,
  rechazarAsig,
  aprobarPreg,
  rechazarPreg,
}) {
  return (
    <div>
      <h3 style={{ marginBottom: '0.6rem' }}>Asignaturas pendientes ({asignaturasPend.length})</h3>
      {asignaturasPend.length === 0 ? (
        <p style={{ color: 'var(--muted)', padding: '1rem 0' }}>No hay asignaturas pendientes.</p>
      ) : (
        <div className="asig-lista" style={{ marginBottom: '1.5rem' }}>
          {asignaturasPend.map(a => (
            <div key={a._id} className="asig-item card">
              <div style={{ flex: 1 }}>
                <p className="asig-nombre">{a.icono ? `${a.icono} ` : ''}{a.nombre}</p>
                <p className="asig-desc">{a.descripcion}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                  Propuesta por: {a.creadoPorNombre || 'desconocido'} ({a.creadoPorRol || '—'})
                </p>
              </div>
              <div className="preg-actions">
                <button className="btn btn-primary btn-sm" onClick={() => aprobarAsig(a._id)}>✓ Aprobar</button>
                <button className="btn btn-danger btn-sm" onClick={() => rechazarAsig(a._id)}>X Rechazar</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ marginBottom: '0.6rem' }}>❓ Preguntas pendientes ({preguntasPend.length})</h3>
      {preguntasPend.length === 0 ? (
        <p style={{ color: 'var(--muted)', padding: '1rem 0' }}>No hay preguntas pendientes.</p>
      ) : (
        <div className="preguntas-lista">
          {preguntasPend.map(p => (
            <div key={p._id} className="preg-item">
              <div className="preg-info">
                <span className={`badge badge-${p.dificultad || 'medium'}`}>{DIFICULTAD_LABEL[p.dificultad] || 'Media'}</span>
                <span className="preg-asig">{p.asignatura}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: 'auto' }}>
                  {p.creadoPorNombre || 'desconocido'} ({p.creadoPorRol || '—'})
                </span>
              </div>
              {p.caso && <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>Caso: {p.caso}</p>}
              <p className="preg-texto">{p.pregunta}</p>
              <div className="colab-opts">
                {p.opciones && p.opciones.map((op, j) => (
                  <div key={j} className={`colab-opt ${j === p.respuestaCorrecta ? 'colab-opt-correcta' : ''}`}>
                    <span className="colab-letra">{String.fromCharCode(65 + j)}</span>
                    <span>{op}</span>
                    {j === p.respuestaCorrecta && <span className="check-mark">✓</span>}
                  </div>
                ))}
              </div>
              {p.explicacion && <p className="colab-exp">💡 {p.explicacion}</p>}
              <div className="preg-actions">
                <button className="btn btn-primary btn-sm" onClick={() => aprobarPreg(p._id)}>✓ Aprobar</button>
                <button className="btn btn-danger btn-sm" onClick={() => rechazarPreg(p._id)}>X Rechazar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
