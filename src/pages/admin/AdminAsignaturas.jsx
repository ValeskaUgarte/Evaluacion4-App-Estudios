// src/pages/admin/AdminAsignaturas.jsx
// TAB ASIGNATURAS, lista de asignaturas, detalle (preguntas de una
// asignatura en particular) y formulario para crear una asignatura.
// (Mismo comportamiento y clases CSS que estaban en Admin.jsx; solo
// se movió el JSX a un componente propio.)
import { DIFICULTAD_LABEL, MAX_NOMBRE_ASIG, MAX_DESC_ASIG } from './constantes';

export default function AdminAsignaturas({
  asigDetalle, setAsigDetalle,
  setFiltroAsig,
  pregsFiltradas = [],
  ordenPreguntas, setOrdenPreguntas,
  editarP, borrarP,
  setTab, setForm, setErrores,
  asignaturasOrdenadas = [],
  ordenAsignaturas, setOrdenAsignaturas,
  formA, setFormA,
  guardarAsignatura, borrarA,
}) {
  //DETALLE: preguntas de UNA asignatura, con editar/eliminar
  if (asigDetalle) {
    return (
      <div>
        <button className="btn btn-ghost btn-sm" style={{ marginBottom: '1rem' }} onClick={() => { setAsigDetalle(null); setFiltroAsig(''); }}>
          ← Volver a Asignaturas
        </button>

        <div className="admin-list-header">
          <h3>{asigDetalle.icono ? `${asigDetalle.icono} ` : ''}{asigDetalle.nombre} ({pregsFiltradas.length})</h3>
          <div className="select-compact-wrap">
            <label htmlFor="ordenPreguntas" className="select-compact-label">Ordenar:</label>
            <select id="ordenPreguntas" name="ordenPreguntas" className="select-compact" value={ordenPreguntas} onChange={e => setOrdenPreguntas(e.target.value)}>
              <option value="fecha">Recientes</option>
              <option value="nombre">Alfabético</option>
            </select>
          </div>
        </div>

        {pregsFiltradas.length === 0 ? (
          <p style={{ color: 'var(--muted)', padding: '2rem', textAlign: 'center' }}>Esta asignatura todavía no tiene preguntas.</p>
        ) : (
          <div className="preguntas-lista">
            {pregsFiltradas.map(p => (
              <div key={p._id || p.id} className="preg-item">
                <div className="preg-info">
                  <span className={`badge badge-${p.dificultad}`}>{DIFICULTAD_LABEL[p.dificultad] || p.dificultad}</span>
                  {typeof p.esDelProfesor === 'boolean' && (
                    <span className="badge" style={{ background: p.esDelProfesor ? '#e8f0fe' : '#f4f0fa', color: p.esDelProfesor ? '#3a5aa0' : '#7a6a9a' }}>
                      {p.esDelProfesor ? 'Del profesor' : 'Inventada'}
                    </span>
                  )}
                </div>
                {p.caso && <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>Caso: {p.caso.slice(0, 80)}{p.caso.length > 80 ? '…' : ''}</p>}
                <p className="preg-texto">{p.pregunta}</p>
                <div className="preg-actions">
                  <button className="btn btn-ghost btn-sm" onClick={() => { editarP(p); setTab('preguntas'); }}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => borrarP(p._id || p.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  //LISTA: todas las asignaturas (clic entra al detalle)
  return (
    <div>
      <div className="admin-form card">
        <h3>Nueva asignatura</h3>
        <div className="form-row">
          <div className="form-group" style={{ flex: 3 }}>
            <label className="input-label" htmlFor="asig-nombre">Nombre *</label>
            <input id="asig-nombre" name="nombre" className="input" value={formA.nombre} onChange={e => setFormA(f => ({ ...f, nombre: e.target.value }))} placeholder="Ej: Base de Datos" maxLength={MAX_NOMBRE_ASIG} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="input-label" htmlFor="asig-color">Color</label>
            <input id="asig-color" name="color" type="color" className="input" value={formA.color} onChange={e => setFormA(f => ({ ...f, color: e.target.value }))} style={{ height: '42px', padding: '2px' }} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="input-label" htmlFor="asig-icono">Ícono (emoji, opcional)</label>
            <input id="asig-icono" name="icono" className="input" value={formA.icono} onChange={e => setFormA(f => ({ ...f, icono: e.target.value.slice(0, 4) }))} placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label className="input-label" htmlFor="asig-descripcion">Descripción</label>
          <input id="asig-descripcion" name="descripcion" className="input" value={formA.descripcion} onChange={e => setFormA(f => ({ ...f, descripcion: e.target.value }))} placeholder="Descripción breve…" maxLength={MAX_DESC_ASIG} />
        </div>
        <button className="btn btn-primary" onClick={guardarAsignatura}>Crear asignatura</button>
      </div>

      <div className="admin-list-header">
        <h3>Asignaturas ({asignaturasOrdenadas.length})</h3>
        <div className="select-compact-wrap">
          <label htmlFor="ordenAsignaturas" className="select-compact-label">Ordenar:</label>
          <select id="ordenAsignaturas" name="ordenAsignaturas" className="select-compact" value={ordenAsignaturas} onChange={e => setOrdenAsignaturas(e.target.value)}>
            <option value="fecha">Recientes</option>
            <option value="nombre">Alfabético</option>
          </select>
        </div>
      </div>

      <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '-0.5rem', marginBottom: '0.8rem' }}>
        Haz clic en una asignatura para ver, editar o eliminar sus preguntas.
      </p>

      <div className="asig-lista">
        {asignaturasOrdenadas.map(a => (
          <div
            key={a.key || a._id}
            className="asig-item card"
            style={{ cursor: 'pointer' }}
            onClick={() => { setAsigDetalle(a); setFiltroAsig(a.key || a._id); }}
          >
            <div style={{ flex: 1 }}>
              <p className="asig-nombre">{a.icono ? `${a.icono} ` : ''}{a.nombre}</p>
              <p className="asig-desc">{a.descripcion}</p>
            </div>
            <div className="preg-actions" onClick={(e) => e.stopPropagation()}>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => { setForm(f => ({ ...f, asignaturaId: a.key || a._id })); setErrores({}); setTab('preguntas'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                ➕ Crear pregunta
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => borrarA(a._id || a.key)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
