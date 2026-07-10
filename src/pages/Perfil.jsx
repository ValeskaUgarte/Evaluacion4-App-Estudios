// PERFIL.JSX Página de perfil del usuario

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { getActividad } from '../services/api';
import './Perfil.css';

// HOOKS Contexto de autenticación y navegación
export default function Perfil() {
  const { usuario, logout, toggleFavorita } = useAuth();
  const navigate = useNavigate();

  // EFECTO Redirige al login si no hay usuario logueado
  useEffect(() => {
    if (!usuario) navigate('/login');
  }, [usuario]);

  // PROTECCIÓN Si no hay usuario, no renderiza nada
  if (!usuario) return null;

  // DATOS DEL USUARIO Extrae historial y favoritas
  const historial = usuario.historial || [];
  const favoritas = usuario.favoritas || [];

  // CÁLCULOS Promedio y cantidad de aprobados
  const promedioNota = historial.length
    ? (historial.reduce((acc, h) => acc + h.nota, 0) / historial.length).toFixed(1)
    : null;

  const aprobados = historial.filter(h => h.nota >= 4.0).length;

  // ACTIVIDAD DEL ADMIN: registro de sus acciones en el panel (crear/
  // editar/eliminar preguntas y asignaturas), guardado en Local Storage.
  // Solo se muestra si el usuario es administrador, a modo de demo.
  const actividadAdmin = usuario.rol === 'admin' ? getActividad() : [];

  // RENDER
  return (
    <>
      <Navbar />
      <main className="page">

        {/*  HERO Encabezado del perfil con avatar y datos del usuario */}

        <div className="perfil-hero">
          <img
            src={usuario.rol === 'admin' ? '/img/app001admin.jpg' : '/img/app001.jpg'}
            alt="perfil"
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <h1 className="perfil-nombre">{usuario.nombre}</h1>
            <p className="perfil-rol">
              {usuario.rol === 'estudiante' ? 'Estudiante' :
              usuario.rol === 'colaborador' ? 'Colaborador' :
              usuario.rol === 'admin' ? 'Administrador' : 'Moderador'}
            </p>
            <p className="perfil-email">{usuario.email}</p>
          </div>
        </div>

        
        {/* STATS Estadísticas del usuario (4 tarjetas) */}

        <div className="perfil-stats">
          <div className="perfil-stat">
            <div className="stat-val">{historial.length}</div>
            <div className="stat-lbl">Quizzes realizados</div>
          </div>
          <div className="perfil-stat">
            <div className="stat-val">{promedioNota ?? '—'}</div>
            <div className="stat-lbl">Promedio general</div>
          </div>
          <div className="perfil-stat">
            <div className="stat-val">{aprobados}</div>
            <div className="stat-lbl">Aprobados</div>
          </div>
          <div className="perfil-stat">
            <div className="stat-val">{favoritas.length}</div>
            <div className="stat-lbl">Favoritas</div>
          </div>
        </div>

        {/* FAVORITAS Lista de asignaturas guardadas*/}

        {favoritas.length > 0 && (
        <div className="perfil-section">
          <h3>Asignaturas guardadas</h3>
          <div className="perfil-favoritas">
            {favoritas.map(key => (
              <div key={key} className="favorita-item">
                <span className="favorita-badge">{key.replace(/_/g, ' ')}</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate(`/quiz/${key}`)}>
                    Ingresar
                  </button>
                  <button className="btn btn-ghost btn-sm" onClick={() => toggleFavorita(key)}>
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

        {/*HISTORIAL Lista de resultados de quizzes*/}

        <div className="perfil-section">
          <h3>Historial de quizzes</h3>
          {historial.length === 0 ? (
            <p className="perfil-empty">Aún no has realizado ningún quiz.</p>
          ) : (
            <div className="historial-lista">
              {[...historial].reverse().map((h, i) => (
                <div key={i} className={`historial-item ${h.nota >= 4.0 ? 'item-ok' : 'item-mal'}`}>
                  <div className="historial-info">
                    <p className="historial-asig">{h.asignatura?.nombre ?? h.asignatura}</p>
                    <p className="historial-fecha">{new Date(h.fecha).toLocaleDateString('es-CL')}</p>
                  </div>
                  <div className="historial-resultado">
                    <span className="historial-nota">{(h.nota ?? 0).toFixed(1)}</span>
                    <span className="historial-detalle">{h.correctas}/{h.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ACTIVIDAD DEL ADMINISTRADOR, solo visible para el rol admin,
            muestra sus últimas acciones en el panel como demostración
            de la funcionalidad para la evaluación. */}
        {usuario.rol === 'admin' && (
          <div className="perfil-section">
            <h3>Actividad reciente en el panel</h3>
            {actividadAdmin.length === 0 ? (
              <p className="perfil-empty">Aún no has hecho cambios en el panel de administración.</p>
            ) : (
              <div className="historial-lista">
                {actividadAdmin.map((a, i) => (
                  <div key={i} className="historial-item">
                    <div className="historial-info">
                      <p className="historial-asig">{a.texto}</p>
                      <p className="historial-fecha">{new Date(a.fecha).toLocaleString('es-CL')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/*ACCIONES Botón para cerrar sesión */}

        <div className="perfil-actions">
          <button className="btn btn-danger" onClick={() => { logout(); navigate('/'); }}>
            Cerrar sesión
          </button>
        </div>

      </main>
    </>
  );
}