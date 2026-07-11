// HOME.JSX - Página principal de la aplicación

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAsignaturas, getReportes, API_URL } from '../services/api';
import './Home.css';


function OdsBadge({ num, titulo, detalle, url }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div>
      <div className={`ods-badge ods-${num}`} onClick={() => setAbierto(!abierto)} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <span>{num}</span>
        <p>{titulo}</p>
        <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}>{abierto ? '▲' : '▼'}</span>
      </div>
      {abierto && (
        <div style={{
          background: '#fffaf6',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '0.8rem 1rem',
          marginTop: '0.4rem',
          fontSize: '0.82rem',
          color: 'var(--muted)',
          lineHeight: '1.6',
          maxWidth: '320px'
        }}>
          <p style={{ margin: 0 }}>{detalle}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '0.6rem', fontWeight: 600, color: 'var(--accent)' }}
              onClick={(e) => e.stopPropagation()}
            >
              Ver ODS {num} en la ONU →
            </a>
          )}
        </div>
      )}
    </div>
  );
}


function Carrusel({ nuevas = [] }) {
  const [actual, setActual] = useState(0);
  const navigate = useNavigate();
  // Cada item puede llevar a un cuestionario específico (key) o, si no
  // corresponde a una sola asignatura (como "Últimos subidos" u "ODS"),
  // a la página general de Cuestionarios.
  const itemsFijos = [
    { img: '/img/ultimas001.jpg', nombre: 'Ultimos cuestionarios subidos', meta: '140 Preguntas', key: null },
    { img: '/img/ODS.jpg', nombre: 'ODS presentes', meta: 'Cumplimiento ODS', key: null, esOds: true },
    { img: '/img/carrusel001.jpg', nombre: 'Sistemas Operativos', meta: 'En desarrollo', key: 'sistemas_operativos' },
    { img: '/img/carrusel002.jpg', nombre: 'Seguridad de la Información', meta: 'En desarrollo', key: 'seguridad_informacion' },
  ];

  // Asignaturas creadas desde el panel de administración: no tienen
  // una imagen subida, así que se muestran con un fondo de color y su
  // ícono/inicial (igual que en la página de Cuestionarios), en vez de
  // dejarlas fuera del carrusel.
  const itemsNuevas = nuevas.map(a => ({
    nombre: a.nombre,
    meta: a.totalPreguntas > 0 ? `${a.totalPreguntas} preguntas` : 'Aún sin preguntas',
    key: a.key,
    color: a.color,
    icono: a.icono,
  }));

  const items = [...itemsFijos, ...itemsNuevas];

  function irASeccion(item) {
    if (item.esOds) {
      document.querySelector('.ods-section')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(item.key ? `/quiz/${item.key}` : '/cuestionarios');
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(-${actual * 100}%)` }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{ minWidth: '100%', position: 'relative', cursor: 'pointer' }}
            onClick={() => irASeccion(item)}
          >
            {item.img ? (
              <img src={item.img} alt={item.nombre} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px' }} />
            ) : (
              <div style={{
                width: '100%', height: '200px', borderRadius: '16px',
                background: item.color || 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem', color: '#fff', fontWeight: 700
              }}>
                {item.icono || (item.nombre || '?').charAt(0).toUpperCase()}
              </div>
            )}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '1rem', borderRadius: '0 0 16px 16px' }}>
              <p style={{ fontWeight: '700', fontSize: '1rem' }}>{item.nombre}</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>{item.meta}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setActual(a => Math.max(0, a - 1))} style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontSize: '1rem' }}>‹</button>
      <button onClick={() => setActual(a => Math.min(items.length - 1, a + 1))} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontSize: '1rem' }}>›</button>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
        {items.map((_, i) => (
          <button key={i} onClick={() => setActual(i)} style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', background: i === actual ? 'var(--accent)' : 'var(--border)', cursor: 'pointer', padding: 0 }} />
        ))}
      </div>
    </div>
  );
}


// ESTADOS
export default function Home() {
  // Estado de asignaturas (no se usa en esta página pero viene del api)
  const [asignaturas, setAsignaturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // EFECTO 1 Carga las asignaturas desde la API al montar el componente
  useEffect(() => {
    getAsignaturas().then(setAsignaturas).finally(() => setLoading(false));
  }, []);

  // ESTADO PARA ESTADÍSTICAS Datos desde la API externa (json-server)
  const [stats, setStats] = useState({ asignaturas: 0, preguntas: 0, reportes: 0 });

  // Estado del carrusel — índice de la asignatura que se muestra
  const [carruselIdx, setCarruselIdx] = useState(0);

  // EFECTO 2 Obtiene estadísticas desde Local Storage
  // (antes venían de json-server en localhost:3001, que no existe en producción)
  useEffect(() => {
    Promise.all([
      getAsignaturas(),
      getReportes(),
    ]).then(([asigs, reps]) => {
      const totalPreguntas = asigs.reduce((acc, a) => acc + (a.totalPreguntas || 0), 0);
      setStats({ asignaturas: asigs.length, preguntas: totalPreguntas, reportes: reps.length });
    });
  }, []);

  // RENDER
  return (
    <>
      <Navbar />
      <main className="page">

         {/* HERO Sección principal con imagen y título*/}
        <div className="home-hero">
          <div className="hero-layout">
            <img src="/img/app002a.jpg" className="hero-img hero-img-left" alt="estudiante" />
            <div className="hero-content">
              <p className="home-eyebrow">APP de Estudios</p>
              <h1 className="home-title">Cuestionarios de<br />Estudios</h1>
              <p className="home-sub">Selecciona una asignatura, cantidad de preguntas y comienza a estudiar.</p>
            </div>
            <img src="/img/app001a.jpg" className="hero-img hero-img-right" alt="estudiante" />
          </div>
        </div>

        {/* BOTÓN principal para ir a cuestionarios */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn btn-primary" onClick={() => navigate('/cuestionarios')}>
          Comenzar a estudiar →
        </button>
      </div>

        {/* ESTADÍSTICAS datos en tiempo real desde la API externa */}
        <div className="home-stats">
          <div className="home-stat">
            <div className="stat-numero">{stats.asignaturas}</div>
            <div className="stat-texto">Asignaturas disponibles</div>
          </div>
          <div className="home-stat">
            <div className="stat-numero">{stats.preguntas.toLocaleString()}</div>
            <div className="stat-texto">Preguntas en el banco</div>
          </div>
          <div className="home-stat">
            <div className="stat-numero">{stats.reportes}</div>
            <div className="stat-texto">Reportes recibidos</div>
          </div>
        </div>

        {/* API SECTION — links directos a los endpoints de la API externa */}
        <Carrusel nuevas={asignaturas.filter(a => a.createdAt)} />
        <div className="api-section">
          <p className="api-titulo">API disponible</p>
          <div className="api-links">
            <a href={`${API_URL}/asignaturas`} target="_blank" className="api-link">
              GET /asignaturas
            </a>
            <a href={`${API_URL}/reportes`} target="_blank" className="api-link">
              GET /reportes
            </a>
            <a href={API_URL} target="_blank" className="api-link">
              Ver API completa
            </a>
          </div>
        </div>

        {/* ODS Objetivos de Desarrollo Sostenible que cumple la app */}
        <div className="ods-section">
          <p className="ods-label">Objetivos de Desarrollo Sostenible</p>
          <div className="ods-badges">
            {[
              { num: 4, titulo: 'Educación de Calidad', detalle: 'Esta app garantiza una educación inclusiva y equitativa, promoviendo oportunidades de aprendizaje para todos los estudiantes mediante cuestionarios interactivos y material de estudio accesible.', url: 'https://www.un.org/sustainabledevelopment/es/education/' },
              { num: 17, titulo: 'Alianzas para los Objetivos', detalle: 'La plataforma fomenta la colaboración entre estudiantes, colaboradores y docentes para crear y compartir material educativo de calidad, fortaleciendo las alianzas en favor del aprendizaje.', url: 'https://www.un.org/sustainabledevelopment/es/globalpartnerships/' },
            ].map(ods => (
              <OdsBadge key={ods.num} {...ods} />
            ))}
          </div> 

          <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
            <img
              src="/img/app000.jpg"
              alt="estudiantes"
              style={{ width: '600px', maxWidth: '100%', borderRadius: '16px' }}
            />
          </div>
        </div>

      </main>

      {/* FOOTER ESTADÍSTICAS Datos en tiempo real desde la API externa*/}
      <footer className="home-footer">
        <div className="footer-content">

          {/* Columna 1: descripción de la app */}
          <div className="footer-col">
            <h4 className="footer-titulo">App de Estudios</h4>
            <p className="footer-texto">
              Plataforma de cuestionarios interactivos para estudiantes de INACAP. 
              Estudia, practica y mejora tu rendimiento académico.
            </p>
          </div>

          {/* Columna 2: links de navegación (Link de react-router: navegación
              interna sin recargar la página, evita el "Not Found" en producción) */}
          <div className="footer-col">
            <h4 className="footer-titulo">Navegación</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/cuestionarios">Cuestionarios</Link></li>
              <li><Link to="/login">Iniciar sesión</Link></li>
              <li><Link to="/registro">Registrarse</Link></li>
            </ul>
          </div>

          {/* Columna 3: links de la API (enlaces externos reales, sí deben
              ser <a> normales porque salen de la app) */}
          <div className="footer-col">
            <h4 className="footer-titulo">API</h4>
            <ul className="footer-links">
              <li><a href={API_URL} target="_blank" rel="noopener noreferrer">API Principal</a></li>
              <li><a href={`${API_URL}/asignaturas`} target="_blank" rel="noopener noreferrer">GET /asignaturas</a></li>
              <li><a href={`${API_URL}/reportes`} target="_blank" rel="noopener noreferrer">GET /reportes</a></li>
            </ul>
          </div>

          {/* Columna 4: ODS — antes tenía <link rel="stylesheet"> (una
              etiqueta inválida para esto, no generaba ningún enlace
              visible/clickeable). Ahora son <a> reales hacia la página
              oficial de cada ODS en la ONU. */}
          <div className="footer-col">
            <h4 className="footer-titulo">ODS</h4>
            <ul className="footer-links">
              <li><a href="https://www.un.org/sustainabledevelopment/es/education/" target="_blank" rel="noopener noreferrer">ODS 4 · Educación de Calidad</a></li>
              <li><a href="https://www.un.org/sustainabledevelopment/es/globalpartnerships/" target="_blank" rel="noopener noreferrer">ODS 17 · Alianzas para los Objetivos</a></li>
            </ul>
          </div>

        </div>

        {/* Línea inferior con créditos */}
        <div className="footer-bottom">
          <p>Creado por <strong>Valeska Ugarte</strong> · INACAP 2026 · Programación Front End</p>
        </div>
      </footer>
    </>
  );
}