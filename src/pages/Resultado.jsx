// Resultado.jsx
// Esta página se muestra cuando el usuario termina un quiz
// Muestra la nota final, cuántas correctas y la revisión de cada pregunta

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Resultado.css';
import { useAuth } from '../context/AuthContext';

export default function Resultado() {
  // useLocation lee los datos que Quiz.jsx envió al navegar aquí
  // contiene: respuestas, asignatura
  const { state } = useLocation();
  const navigate = useNavigate();
  
  // useAuth nos da el usuario actual y la función para guardar en su historial
  const { usuario, guardarResultado } = useAuth();

  // useEffect se ejecuta una sola vez cuando carga la página
  // Guarda el resultado en el historial del usuario si está logueado
  useEffect(() => {
    if (!state) return; // si no hay datos no hace nada
    if (!usuario) return; // si no hay usuario logueado no guarda
    const { respuestas, asignatura } = state;
    const correctas = respuestas.filter(r => r.acertada).length;
    const total = respuestas.length;
    // Fórmula de nota chilena: entre 1.0 y 7.0
    const nota = correctas === 0 ? 1.0 : parseFloat((1 + (correctas / total) * 6).toFixed(1));
    // Guarda en el perfil del usuario via AuthContext → localStorage
    guardarResultado({ asignatura, nota, correctas, total, fecha: new Date().toISOString() });
  }, []);

  // Si no hay datos (alguien entró directo a /resultado) muestra nada
  if (!state) return <></>;

  // Calcula los datos para mostrar en pantalla
  const { respuestas, asignatura } = state;
  const correctas = respuestas.filter(r => r.acertada).length;
  const total = respuestas.length;
  const nota = correctas === 0 ? 1.0 : parseFloat((1 + (correctas / total) * 6).toFixed(1));
  const aprobado = nota >= 4.0; // en Chile se aprueba con 4.0

  return (
    <>
      <Navbar />
      <main className="page">
        {/* Sección hero con la nota grande */}
        <div className="resultado-hero">
          <p className="resultado-eyebrow">{asignatura?.nombre}</p>
          {/* La nota cambia de color según si aprobó o reprobó */}
          <div className={`resultado-nota ${aprobado ? 'aprobado' : 'reprobado'}`}>{nota.toFixed(1)}</div>
          <p className="resultado-detalle">{correctas} de {total} correctas</p>
          <p className={`resultado-estado ${aprobado ? 'estado-ok' : 'estado-mal'}`}>
            {aprobado ? 'Aprobado' : 'Reprobado'}
          </p>
        </div>

        {/* Revisión pregunta por pregunta */}
        <div className="resultado-review">
          <h3>Revisión</h3>
          {respuestas.map((r, i) => (
            <div key={i} className={`review-item ${r.acertada ? 'item-ok' : 'item-mal'}`}>
              <p className="review-num">Pregunta {i + 1} · {r.acertada ? '✅' : '❌'}</p>
              <p className="review-pregunta">{r.pregunta}</p>
              <p className="review-tu">Tu respuesta: <strong>{r.opciones[r.seleccionada]}</strong></p>
              {/* Solo muestra la correcta si se equivocó */}
              {!r.acertada && <p className="review-correcta">Correcta: <strong>{r.opciones[r.correcta]}</strong></p>}
              {r.explicacion && <p className="review-exp">{r.explicacion}</p>}
            </div>
          ))}
        </div>

        {/* Botones para volver o reintentar */}
        <div className="resultado-actions">
          <button className="btn btn-ghost" onClick={() => navigate('/')}>← Inicio</button>
          <button className="btn btn-primary" onClick={() => navigate(`/quiz/${asignatura?.key}`)}>Reintentar</button>
        </div>
      </main>
    </>
  );
}