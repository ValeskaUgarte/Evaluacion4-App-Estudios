// src/pages/admin/AdminPreguntas.jsx
// TAB PREGUNTAS - formulario para crear/editar una pregunta.
// (Mismo formulario y mismas clases CSS que estaban en Admin.jsx;
// solo se movió el JSX a un componente propio. La lógica de guardado,
// validación y las opciones dinámicas siguen viviendo en Admin.jsx
// y llegan aquí como props/funciones.)
import {
  DIFFS, MAX_UNIDAD, MAX_CASO, MAX_PREGUNTA, MAX_OPCION,
  MAX_EXPLICACION, MAX_EXTRA, DIFICULTAD_LABEL,
  PLANTILLA_TABLA, PLANTILLA_CONSOLA, EMPTY_P,
} from './constantes';
import CampoError from './CampoError';

export default function AdminPreguntas({
  form, setForm,
  errores, setErrores,
  editId, setEditId,
  asignaturas,
  agregarOpcion, quitarOpcion,
  guardarPregunta,
  setTab,
}) {
  return (
    <div>
      {/* Formulario nueva/editar pregunta */}
      <div className="admin-form card">
        <h3>{editId ? 'Editar pregunta' : 'Nueva pregunta'}</h3>
        <div className="form-row">
          <div className="form-group" style={{ flex: 2 }}>
            <label htmlFor="asignaturaId" className="input-label">Asignatura *</label>
            <select id="asignaturaId" className="input" value={form.asignaturaId} onChange={e => { setForm(f => ({ ...f, asignaturaId: e.target.value })); setErrores(er => ({ ...er, asignaturaId: null })); }}>
              <option value="">Selecciona</option>
              {asignaturas.map(a => (
                <option key={a.key || a._id} value={a.key || a._id}>{a.nombre}</option>
              ))}
            </select>
            <CampoError mensaje={errores.asignaturaId} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="dificultad" className="input-label">Dificultad</label>
            <select id="dificultad" name="dificultad" className="input" value={form.dificultad} onChange={e => setForm(f => ({ ...f, dificultad: e.target.value }))}>
              {DIFFS.map(d => <option key={d} value={d}>{DIFICULTAD_LABEL[d]}</option>)}
            </select>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="unidad" className="input-label">Unidad</label>
            <input id="unidad" className="input" value={form.unidad} onChange={e => setForm(f => ({ ...f, unidad: e.target.value }))} placeholder="Ej: Unidad 1" maxLength={MAX_UNIDAD} />
          </div>
        </div>

        {/* Caso: contexto/escenario opcional que se muestra antes de
            la pregunta (ej: un caso de estudio para leer primero) */}
        <div className="form-group">
          <label htmlFor="caso" className="input-label">Caso (opcional)</label>
          <textarea id="caso" className="input" rows={2} value={form.caso} onChange={e => { setForm(f => ({ ...f, caso: e.target.value })); setErrores(er => ({ ...er, caso: null })); }} placeholder="Contexto o escenario que se muestra antes de la pregunta…" maxLength={MAX_CASO} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.caso.length}/{MAX_CASO}</span>
          <CampoError mensaje={errores.caso} />
        </div>

        <div className="form-group">
          <label htmlFor="pregunta" className="input-label">Pregunta *</label>
          <textarea id="pregunta" className="input" rows={2} value={form.pregunta} onChange={e => { setForm(f => ({ ...f, pregunta: e.target.value })); setErrores(er => ({ ...er, pregunta: null })); }} placeholder="Escribe la pregunta…" maxLength={MAX_PREGUNTA} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.pregunta.length}/{MAX_PREGUNTA}</span>
          <CampoError mensaje={errores.pregunta} />
        </div>

        <label className="input-label" id="opciones-label">Opciones de respuesta * ({form.opciones.length})</label>
        {form.opciones.map((op, i) => (
          <div className="form-group" key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <input
                id={`correcta${i}`}
                type="radio"
                name="correcta"
                aria-label={`Marcar opción ${String.fromCharCode(65 + i)} como correcta`}
                checked={form.respuestaCorrecta === i}
                onChange={() => setForm(f => ({ ...f, respuestaCorrecta: i }))}
              />
              <input
                id={`opcion${i}`}
                name={`opcion${i}`}
                aria-label={`Opción ${String.fromCharCode(65 + i)}`}
                className="input"
                value={op}
                onChange={e => {
                  const opts = [...form.opciones];
                  opts[i] = e.target.value;
                  setForm(f => ({ ...f, opciones: opts }));
                  setErrores(er => {
                    if (!er.opciones) return er;
                    const opcionesErr = { ...er.opciones };
                    delete opcionesErr[i];
                    const resto = { ...er };
                    if (Object.keys(opcionesErr).length) resto.opciones = opcionesErr; else delete resto.opciones;
                    return resto;
                  });
                }}
                placeholder={`Opción ${String.fromCharCode(65 + i)}`}
                maxLength={MAX_OPCION}
              />
            </div>
            <CampoError mensaje={errores.opciones?.[i]} />
          </div>
        ))}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}>
          <button type="button" className="btn btn-ghost btn-sm" onClick={agregarOpcion}>+ Agregar opción</button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={quitarOpcion}>- Quitar opción</button>
        </div>

        <div className="form-group">
          <label htmlFor="explicacion" className="input-label">Explicación *</label>
          <textarea id="explicacion" className="input" rows={2} value={form.explicacion} onChange={e => { setForm(f => ({ ...f, explicacion: e.target.value })); setErrores(er => ({ ...er, explicacion: null })); }} placeholder="Explicación de la respuesta correcta…" maxLength={MAX_EXPLICACION} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.explicacion.length}/{MAX_EXPLICACION}</span>
          <CampoError mensaje={errores.explicacion} />
        </div>

        {/* Contenido extra: para preguntas que necesitan mostrar una
            tabla (ej: subnetting) o una simulación de consola.
            Se guarda como HTML y se muestra tal cual en el cuestionario. */}
        <div className="form-group">
          <label htmlFor="extra" className="input-label">Contenido extra (tabla o consola, opcional)</label>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setForm(f => ({ ...f, extra: (f.extra ? f.extra + '\n' : '') + PLANTILLA_TABLA }))}
            >
              + Insertar tabla
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setForm(f => ({ ...f, extra: (f.extra ? f.extra + '\n' : '') + PLANTILLA_CONSOLA }))}
            >
              + Insertar consola
            </button>
          </div>
          <textarea
            id="extra"
            className="input"
            rows={4}
            value={form.extra}
            onChange={e => { setForm(f => ({ ...f, extra: e.target.value })); setErrores(er => ({ ...er, extra: null })); }}
            placeholder="Usa los botones de arriba para insertar una plantilla, o pega tu propio HTML…"
            maxLength={MAX_EXTRA}
            style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
          />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.extra.length}/{MAX_EXTRA}</span>
          <CampoError mensaje={errores.extra} />

          {/* Vista previa: así se va a ver dentro del cuestionario */}
          {form.extra && (
            <div style={{ marginTop: '0.6rem' }}>
              <span className="input-label" style={{ marginBottom: '0.3rem' }}>Vista previa</span>
              <div className="quiz-extra" dangerouslySetInnerHTML={{ __html: form.extra }} />
            </div>
          )}
        </div>

        {/* Origen de la pregunta: obligatorio elegir explícitamente,
            para distinguir preguntas de una prueba/archivo real del
            profesor vs. preguntas inventadas para estudiar. */}
        <div className="form-group">
          <label htmlFor="esDelProfesor" className="input-label">¿Es de una prueba o archivo del profesor? *</label>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
              <input id="esDelProfesor" type="radio" name="esDelProfesor" checked={form.esDelProfesor === true} onChange={() => { setForm(f => ({ ...f, esDelProfesor: true })); setErrores(er => ({ ...er, esDelProfesor: null })); }} />
              Sí, viene de una prueba/archivo real
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
              <input id="esDelProfesorNo" type="radio" name="esDelProfesor" checked={form.esDelProfesor === false} onChange={() => { setForm(f => ({ ...f, esDelProfesor: false })); setErrores(er => ({ ...er, esDelProfesor: null })); }} />
              No, es inventada para estudiar
            </label>
          </div>
          <CampoError mensaje={errores.esDelProfesor} />
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button className="btn btn-primary" onClick={guardarPregunta}>{editId ? 'Actualizar' : 'Crear pregunta'}</button>
          {editId && <button className="btn btn-ghost" onClick={() => { setForm(EMPTY_P); setEditId(null); setErrores({}); }}>Cancelar</button>}
        </div>
      </div>

      {/* Entra a la asignatura
          correspondiente desde la pestaña "Asignaturas". Así este
          formulario queda solo para crear, sin preguntas de fondo. */}
      <p style={{ color: 'var(--muted)', fontSize: '0.85rem', textAlign: 'center', padding: '0.5rem' }}>
        ¿Buscas revisar, editar o eliminar preguntas ya creadas? Entra a la pestaña{' '}
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setTab('asignaturas')}>Asignaturas</button>{' '}
        y selecciona la asignatura correspondiente.
      </p>
    </div>
  );
}
