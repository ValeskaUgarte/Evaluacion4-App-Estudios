// src/pages/admin/AdminReportes.jsx
// TAB REPORTES - reportes de errores enviados sobre preguntas.
// (Mismo comportamiento que estaba en Admin.jsx; las acciones
// -ir a la pregunta, eliminar pregunta reportada, descartar reporte-
// siguen resolviéndose en Admin.jsx y llegan aquí como funciones.)
export default function AdminReportes({
  reportes = [],
  onIrAPregunta,
  onEliminarPreguntaReportada,
  onDescartarReporte,
}) {
  if (reportes.length === 0) {
    return <p style={{ color: 'var(--muted)', padding: '2rem', textAlign: 'center' }}>No hay reportes pendientes.</p>;
  }

  return (
    <div className="preguntas-lista">
      {reportes.map(r => (
        <div key={r.id} className="preg-item">
          <div className="preg-info">
            <span className="badge badge-medium">{r.motivo}</span>
            <span className="preg-asig">{r.asignatura}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: 'auto' }}>
              {new Date(r.fecha).toLocaleDateString('es-CL')}
            </span>
          </div>
          <p className="preg-texto">{r.pregunta}</p>

          {/* ACCIONES DEL REPORTE: ir a pregunta, eliminar pregunta, descartar reporte */}
          <div className="preg-actions">
            <button className="btn btn-ghost btn-sm" onClick={() => onIrAPregunta(r)}>
              ✏️ Ir a la pregunta
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => onEliminarPreguntaReportada(r)}>
              🗑️ Eliminar pregunta
            </button>
            <button className="btn btn-ghost btn-sm" onClick={() => onDescartarReporte(r)}>
              Descartar reporte
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
