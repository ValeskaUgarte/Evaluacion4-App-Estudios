// src/pages/admin/AdminEstado.jsx
// TAB ESTADO - Activar/desactivar cuestionarios (solo admin).
export default function AdminEstado({ asignaturas = [], desactivadas = [], manejarToggleAsignatura }) {
  return (
    <div>
      <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
        Desactiva temporalmente un cuestionario para ocultarlo de la página de Cuestionarios,
        sin perder sus preguntas. Puedes reactivarlo cuando quieras.
      </p>
      <div className="asig-lista">
        {asignaturas.map(a => {
          const activa = !desactivadas.includes(a.key);
          return (
            <div key={a.key} className="asig-item card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <p className="asig-nombre">{a.icono ? `${a.icono} ` : ''}{a.nombre}</p>
                <p className="asig-desc" style={{ color: activa ? 'var(--accent2, #00d4a0)' : 'var(--danger, #ff4f6a)' }}>
                  {activa ? '🟢 Activo (visible para estudiantes)' : '🔴 Desactivado (oculto)'}
                </p>
              </div>
              <button
                className={`btn btn-sm ${activa ? 'btn-danger' : 'btn-primary'}`}
                onClick={() => manejarToggleAsignatura(a.key)}
              >
                {activa ? 'Desactivar' : 'Activar'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
