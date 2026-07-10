// src/pages/admin/AdminModeradores.jsx
// TAB MODERADORES (solo admin) - nombrar/revocar moderadores entre
// los usuarios ya registrados (estudiantes o colaboradores).
export default function AdminModeradores({ usuarios = [], handleNombrarModerador, handleRevocarModerador }) {
  return (
    <div>
      <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
        Nombra a un usuario registrado como moderador para que te ayude a aprobar o
        rechazar preguntas y asignaturas pendientes desde el tab "Revisión".
        Un moderador no puede crear/eliminar directamente ni nombrar a otros moderadores.
      </p>
      {usuarios.length === 0 ? (
        <p style={{ color: 'var(--muted)', padding: '2rem', textAlign: 'center' }}>No hay usuarios registrados.</p>
      ) : (
        <div className="asig-lista">
          {usuarios.map(u => (
            <div key={u.id} className="asig-item card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <p className="asig-nombre">{u.nombre}</p>
                <p className="asig-desc">{u.email} · rol actual: <strong>{u.rol}</strong></p>
              </div>
              {u.rol === 'moderador' ? (
                <button className="btn btn-danger btn-sm" onClick={() => handleRevocarModerador(u.id)}>Quitar moderador</button>
              ) : (
                <button className="btn btn-primary btn-sm" onClick={() => handleNombrarModerador(u.id)}>Nombrar moderador</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
