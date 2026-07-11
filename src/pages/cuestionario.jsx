// CUESTIONARIO.JSX Página principal de selección de cuestionarios

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAsignaturas, getAsignaturasDesactivadas } from '../services/api';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import './cuestionario.css';

// Keys de las asignaturas que ya tienen su tarjeta escrita a mano más
// abajo en este archivo. Cualquier asignatura que llegue desde
// getAsignaturas() y NO esté en esta lista fue creada dinámicamente
// desde el panel de administración, así que se renderiza aparte
// (ver bloque "ASIGNATURAS CREADAS POR EL ADMINISTRADOR").
const KEYS_ESTATICAS = [
  'administracion', 'algebra', 'backend', 'bd_estructurados', 'bd_no_estructurados', 'introduccion_programacion_robotica',
  'chino', 'coreano', 'frontend', 'funciones_matrices', 'fundamentos_bd',
  'hardware_software', 'ingenieria_software', 'ingles_avanzado', 'ingles_basico',
  'ingles_intermedio', 'japones', 'lenguaje_css', 'lenguaje_javascript',
  'lenguaje_python', 'linux', 'metodologia_agil', 'mobile_iot',
  'modelamiento_informaticas', 'prog_html', 'seguridad-examen',
  'seguridad_informacion', 'sistemas_operativos',
];

// ESTADOS
export default function Cuestionario() {
  const [asignaturas, setAsignaturas] = useState([]);  // Lista de asignaturas
  const [loading, setLoading] = useState(true);        // Estado de carga
  const [count, setCount] = useState(999);             // Cantidad de preguntas (999 = todas)
  const [modo, setModo] = useState('normal');          // Modo: 'normal' o 'levels'
  const navigate = useNavigate();                      // Para redirigir al quiz
  const { usuario, toggleFavorita } = useAuth();       // Usuario y función de favoritos
  const [modalSinPreguntas, setModalSinPreguntas] = useState(false);
  const [modalDesactivado, setModalDesactivado] = useState(false); // Modal: asignatura desactivada por el admin
  const [desactivadas, setDesactivadas] = useState([]);            // Keys de asignaturas desactivadas (estado)
  const [orden, setOrden] = useState('fecha');                      // Orden de TODAS las asignaturas del cuestionario: 'fecha' o 'nombre'

  // FUNCIÓN Navega al cuestionario de la asignatura seleccionada
  const irAlQuiz = (key) => {
  if (!key || key.trim() === '') return;

  // Si el administrador desactivó esta asignatura, bloqueamos el acceso
  if (desactivadas.includes(key)) {
    setModalDesactivado(true);
    return;
  }

  const asig = asignaturas.find(a => a.key === key);
  if (!asig || asig.totalPreguntas === 0) {
    setModalSinPreguntas(true);
    return;
  }
  navigate(`/quiz/${key}`, { state: { count, modo } });
};

  // EFECTO INICIAL Carga las asignaturas y el estado activo/inactivo al montar el componente
  useEffect(() => {
    getAsignaturas().then(setAsignaturas).finally(() => setLoading(false));
    setDesactivadas(getAsignaturasDesactivadas());
  }, []);

  // RENDER
  return (
    <>
      <Navbar /> 
      <header>
        {/* Versión escritorio/tablet: imágenes a los costados del texto.
            IMPORTANTE: sin style inline aquí — un estilo inline siempre
            gana sobre la regla @media de cuestionario.css que oculta
            este bloque en celular (display:none), así que si volviera
            a agregarse un style inline con display:flex, este bloque
            se mostraría duplicado junto al header-mobile de abajo. */}
        <div className="header-desktop">
          <img src="/img/app002.jpg" style={{ width: '130px', objectFit: 'contain' }} alt="estudiante" />
          <div>
            <h1>Cuestionarios</h1>
            <p>Selecciona asignatura, cantidad de preguntas y comienza</p>
          </div>
          <img src="/img/app001.jpg" style={{ width: '130px', objectFit: 'contain' }} alt="estudiante" />
        </div>

        {/* Versión móvil: ambas imágenes juntas y centradas, título simple debajo */}
        <div className="header-mobile">
          <div className="header-mobile-images">
            <img src="/img/app002.jpg" alt="estudiante" />
            <img src="/img/app001.jpg" alt="estudiante" />
          </div>
          <h1>Cuestionario</h1>
        </div>
      </header>

      <main className="cuestionario-page">
        <div id="screen-start">
          <p className="start-title">¿Qué quieres estudiar hoy?</p>
          <p className="start-sub">
            Las preguntas del profe siempre aparecen primero
          </p>
             {/* Panel de configuración */}
          <div className="config-panel">
            <h3>Selección de Cantidad de Preguntas</h3>
            <div className="config-row">
              <span className="config-label">
                Número de preguntas (las primeras siempre son en base al material entregados por la asignatura):
              </span>
              <div className="count-btns" id="count-btns">
                {[10, 20, 30, 32, 50, 55].map(n => (
                  <button key={n} className={`count-btn${count === n ? ' selected' : ''}`} onClick={() => setCount(n)}>{n}</button>
                ))}
                <button className={`count-btn${count === 999 ? ' selected' : ''}`} onClick={() => setCount(999)}>Todas</button>
              </div>
            </div>

          {/* ORDEN Mismo select que antes, pero ahora aplica a TODO el
              cuestionario (estáticas + creadas por el admin), no solo a
              las asignaturas nuevas */}
          <div className="orden-row">
            <label htmlFor="orden-cuestionarios" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
              Ordenar asignaturas
            </label>
            <select id="orden-cuestionarios" name="orden" className="input orden-select" value={orden} onChange={e => setOrden(e.target.value)}>
              <option value="fecha">Más recientes primero</option>
              <option value="nombre">Orden alfabético</option>
            </select>
          </div>

          <div className="subject-grid" id="subject-grid">
            {/* GRID DE ASIGNATURAS Tarjetas con imagen y datos.
                Se arman dos listas (estáticas y creadas por el admin) y se
                combinan en una sola, para que el orden elegido abajo
                (recientes / alfabético) aplique a TODO el cuestionario,
                no solo a las asignaturas nuevas. */}
                        {(() => {
                const estaticas = [
                  { key: 'seguridad_informacion', nombre: 'Seguridad de la Información', el: (
                    <div className={`subject-card${desactivadas.includes('seguridad_informacion') ? ' subject-disabled' : ''}`} key="static-seguridad_informacion" id="card-seguridad_informacion" onClick={() => irAlQuiz('seguridad_informacion')}>
                      <img src="img/Seguridad de la Información01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Seguridad de la Información</div>
                      <div className="subject-meta">Prueba 1 · Solo las 32 primeras preguntas son de la prueba</div>
                      <div><span className="coming-badge">Material - 140 Preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('seguridad_informacion') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('seguridad_informacion'); }}
                        >
                          {usuario.favoritas?.includes('seguridad_informacion') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'sistemas_operativos', nombre: 'Sistemas Operativos', el: (
                    <div className={`subject-card${desactivadas.includes('sistemas_operativos') ? ' subject-disabled' : ''}`} key="static-sistemas_operativos" id="card-sistemas_operativos" onClick={() => irAlQuiz('sistemas_operativos')}>
                      <img src="img/Sistemas Operativos02.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Sistemas Operativos</div>
                      <div className="subject-meta">Prueba 1 · Subnetting, Las primeras 38 preguntas son los cuestionarios del profesor y una prueba</div>
                      <div><span className="coming-badge">Material de Clases - 131 Preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('sistemas_operativos') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('sistemas_operativos'); }}
                        >
                          {usuario.favoritas?.includes('sistemas_operativos') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'seguridad-examen', nombre: 'Fundamentos de Seguridad de la Información', el: (
                    <div className={`subject-card${desactivadas.includes('seguridad-examen') ? ' subject-disabled' : ''}`} key="static-seguridad-examen" id="card-seguridad-examen" onClick={() => irAlQuiz('seguridad-examen')}>
                      <img src="img/Seguridad de la Información02.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Fundamentos de Seguridad de la Información</div>
                      <div className="subject-meta">Cuestionario Examen Final otorgado por el profesor</div>
                      <div><span className="coming-badge">Cuestionario Examen - 55 Preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('seguridad-examen') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('seguridad-examen'); }}
                        >
                          {usuario.favoritas?.includes('seguridad-examen') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'algebra', nombre: 'Resolución de Problemas de Álgebra', el: (
                    <div className={`subject-card${desactivadas.includes('algebra') ? ' subject-disabled' : ''}`} key="static-algebra" id="card-algebra" onClick={() => irAlQuiz('algebra')}>
                      <img src="img/Algebra01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Resolución de Problemas de Álgebra</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('algebra') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('algebra'); }}
                        >
                          {usuario.favoritas?.includes('algebra') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'funciones_matrices', nombre: 'Funciones y Matrices', el: (
                    <div className={`subject-card${desactivadas.includes('funciones_matrices') ? ' subject-disabled' : ''}`} key="static-funciones_matrices" id="card-funciones_matrices" onClick={() => irAlQuiz('funciones_matrices')}>
                      <img src="img/FuncionesMatrices01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Funciones y Matrices</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('funciones_matrices') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('funciones_matrices'); }}
                        >
                          {usuario.favoritas?.includes('funciones_matrices') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'metodologia_agil', nombre: 'Metodología de Desarrollo Ágil', el: (
                    <div className={`subject-card${desactivadas.includes('metodologia_agil') ? ' subject-disabled' : ''}`} key="static-metodologia_agil" id="card-metodologia_agil" onClick={() => irAlQuiz('metodologia_agil')}>
                      <img src="img/Desarrollo Agil01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Metodología de Desarrollo Ágil</div>
                      <div className="subject-meta">Rol del Scrum Master y características del equipo (T-shaped, cross-functional), Gobernanza mínima y gestión de exclusiones en el Acta, Cálculo de capacidad y reserva para deuda técnica, Técnicas de elicitación (shadowing, 5 Whys), Métricas ágiles (Velocidad, Burndown)</div>
                      <div><span className="coming-badge">Material - 91 preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('metodologia_agil') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('metodologia_agil'); }}
                        >
                          {usuario.favoritas?.includes('metodologia_agil') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'frontend', nombre: 'Programación Front End', el: (
                    <div className={`subject-card${desactivadas.includes('frontend') ? ' subject-disabled' : ''}`} key="static-frontend" id="card-frontend" onClick={() => irAlQuiz('frontend')}>
                      <img src="img/Programación FrontEnd01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Programación Front End</div>
                      <div className="subject-meta">Pendiente: FrontEnd HTML, CSS, JavaScript, React, Vue, TypeScript, Angular, etc. </div>
                      <div><span className="coming-badge">Material - 121 preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('frontend') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('frontend'); }}
                        >
                          {usuario.favoritas?.includes('frontend') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'backend', nombre: 'Programación Back End', el: (
                    <div className={`subject-card${desactivadas.includes('backend') ? ' subject-disabled' : ''}`} key="static-backend" id="card-backend" onClick={() => irAlQuiz('backend')}>
                      <img src="img/Programación BackEnd01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Programación Back End</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('backend') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('backend'); }}
                        >
                          {usuario.favoritas?.includes('backend') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'bd_estructurados', nombre: 'Base de Datos Estructurados', el: (
                    <div className={`subject-card${desactivadas.includes('bd_estructurados') ? ' subject-disabled' : ''}`} key="static-bd_estructurados" id="card-bd_estructurados" onClick={() => irAlQuiz('bd_estructurados')}>
                      <img src="img/bdestructuradas01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Base de Datos Estructurados</div>
                      <div className="subject-meta">preguntas prácticas de diferentes lenguajes/tecnologías, incluyendo campos interactivos para que el usuario complete</div>
                      <div><span className="coming-badge">Material - En desarrollo 15 preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('bd_estructurados') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('bd_estructurados'); }}
                        >
                          {usuario.favoritas?.includes('bd_estructurados') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>

                      ) },
                    { key: 'introduccion_programacion_robotica', nombre: 'Introducción a la Programación y Robótica Aplicada', el: (
                    <div className={`subject-card${desactivadas.includes('introduccion_programacion_robotica') ? ' subject-disabled' : ''}`} key="static-introduccion_programacion_robotica" id="card-introduccion_programacion_robotica" onClick={() => irAlQuiz('introduccion_programacion_robotica')}>
                      <img src="img/inRobotica01.jpg" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Introducción a la Programación y Robótica Aplicada</div>
                      <div className="subject-meta">Material de la asignatura</div>
                      <div><span className="coming-badge">Material - Elaborando cuestionario</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('introduccion_programacion_robotica') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('introduccion_programacion_robotica'); }}
                        >
                          {usuario.favoritas?.includes('introduccion_programacion_robotica') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                      
                    ) },
                    { key: 'bd_no_estructurados', nombre: 'Base de Datos No Estructurados', el: (
                    <div className={`subject-card${desactivadas.includes('bd_no_estructurados') ? ' subject-disabled' : ''}`} key="static-bd_no_estructurados" id="card-bd_no_estructurados" onClick={() => irAlQuiz('bd_no_estructurados')}>
                      <img src="img/bdnoestructuradas01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Base de Datos No Estructurados</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>           
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('bd_no_estructurados') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('bd_no_estructurados'); }}
                        >
                          {usuario.favoritas?.includes('bd_no_estructurados') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'fundamentos_bd', nombre: 'Fundamentos de Base de Datos', el: (
                    <div className={`subject-card${desactivadas.includes('fundamentos_bd') ? ' subject-disabled' : ''}`} key="static-fundamentos_bd" id="card-fundamentos_bd" onClick={() => irAlQuiz('fundamentos_bd')}>
                      <img src="img/Base de datos01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Fundamentos de Base de Datos</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('fundamentos_bd') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('fundamentos_bd'); }}
                        >
                          {usuario.favoritas?.includes('fundamentos_bd') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                      ) },
                      { key: 'administracion', nombre: 'Administración', el: (
                      <div className={`subject-card${desactivadas.includes('administracion') ? ' subject-disabled' : ''}`} key="static-administracion" id="card-administracion" onClick={() => irAlQuiz('administracion')}>
                      <img src="img/Administración01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Administración</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('administracion') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('administracion'); }}
                        >
                          {usuario.favoritas?.includes('administracion') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'ingenieria_software', nombre: 'Ingeniería de Software', el: (
                    <div className={`subject-card${desactivadas.includes('ingenieria_software') ? ' subject-disabled' : ''}`} key="static-ingenieria_software" id="card-ingenieria_software" onClick={() => irAlQuiz('ingenieria_software')}>
                      <img src="img/Inhgenieriasoftware01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Ingeniería de Software</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('ingenieria_software') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('ingenieria_software'); }}
                        >
                          {usuario.favoritas?.includes('ingenieria_software') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'hardware_software', nombre: 'Fundamentos de Hardware y Software', el: (
                    <div className={`subject-card${desactivadas.includes('hardware_software') ? ' subject-disabled' : ''}`} key="static-hardware_software" id="card-hardware_software" onClick={() => irAlQuiz('hardware_software')}>
                      <img src="img/Hardware y Software01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Fundamentos de Hardware y Software</div>
                      <div className="subject-meta">Hardware, redes, sistemas operativos, impresoras, seguridad y ética para técnicos de TI.</div>
                      <div><span className="coming-badge">Material - 164 Preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('hardware_software') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('hardware_software'); }}
                        >
                          {usuario.favoritas?.includes('hardware_software') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'modelamiento_informaticas', nombre: 'Modelamiento de Soluciones Informáticas', el: (
                    <div className={`subject-card${desactivadas.includes('modelamiento_informaticas') ? ' subject-disabled' : ''}`} key="static-modelamiento_informaticas" id="card-modelamiento_informaticas" onClick={() => irAlQuiz('modelamiento_informaticas')}>
                      <img src="img/Modelamiento01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Modelamiento de Soluciones Informáticas</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('modelamiento_informaticas') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('modelamiento_informaticas'); }}
                        >
                          {usuario.favoritas?.includes('modelamiento_informaticas') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'mobile_iot', nombre: 'Aplicaciones Móviles IoT', el: (
                    <div className={`subject-card${desactivadas.includes('mobile_iot') ? ' subject-disabled' : ''}`} key="static-mobile_iot" id="card-mobile_iot" onClick={() => irAlQuiz('mobile_iot')}>
                      <img src="img/Apps Móviles para IoT02.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Aplicaciones Móviles IoT</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('mobile_iot') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('mobile_iot'); }}
                        >
                          {usuario.favoritas?.includes('mobile_iot') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'ingles_basico', nombre: 'Inglés Inicial', el: (
                    <div className={`subject-card${desactivadas.includes('ingles_basico') ? ' subject-disabled' : ''}`} key="static-ingles_basico" id="card-ingles_basico" onClick={() => irAlQuiz('ingles_basico')}>
                      <img src="img/Ingles Imicial01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Inglés Inicial</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('ingles_basico') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('ingles_basico'); }}
                        >
                          {usuario.favoritas?.includes('ingles_basico') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'ingles_intermedio', nombre: 'Inglés Intermedio', el: (
                    <div className={`subject-card${desactivadas.includes('ingles_intermedio') ? ' subject-disabled' : ''}`} key="static-ingles_intermedio" id="card-ingles_intermedio" onClick={() => irAlQuiz('ingles_intermedio')}>
                      <img src="img/InglesIntermedio01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Inglés Intermedio</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('ingles_intermedio') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('ingles_intermedio'); }}
                        >
                          {usuario.favoritas?.includes('ingles_intermedio') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'ingles_avanzado', nombre: 'Inglés Avanzado', el: (
                    <div className={`subject-card${desactivadas.includes('ingles_avanzado') ? ' subject-disabled' : ''}`} key="static-ingles_avanzado" id="card-ingles_avanzado" onClick={() => irAlQuiz('ingles_avanzado')}>
                      <img src="img/Inglesavanzado01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Inglés Avanzado</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('ingles_avanzado') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('ingles_avanzado'); }}
                        >
                          {usuario.favoritas?.includes('ingles_avanzado') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'lenguaje_python', nombre: 'Lenguaje de Programación Python', el: (
                    <div className={`subject-card${desactivadas.includes('lenguaje_python') ? ' subject-disabled' : ''}`} key="static-lenguaje_python" id="card-lenguaje_python" onClick={() => irAlQuiz('lenguaje_python')}>
                      <img src="img/lenguaje_python.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Lenguaje de Programación Python</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('lenguaje_python') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('lenguaje_python'); }}
                        >
                          {usuario.favoritas?.includes('lenguaje_python') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'lenguaje_javascript', nombre: 'Lenguaje de Programación JavaScript', el: (
                    <div className={`subject-card${desactivadas.includes('lenguaje_javascript') ? ' subject-disabled' : ''}`} key="static-lenguaje_javascript" id="card-lenguaje_javascript" onClick={() => irAlQuiz('lenguaje_javascript')}>
                      <img src="img/lenguaje_java01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Lenguaje de Programación JavaScript</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('lenguaje_javascript') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('lenguaje_javascript'); }}
                        >
                          {usuario.favoritas?.includes('lenguaje_javascript') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'prog_html', nombre: 'Programación HTML', el: (
                    <div className={`subject-card${desactivadas.includes('prog_html') ? ' subject-disabled' : ''}`} key="static-prog_html" id="card-prog__html" onClick={() => irAlQuiz('prog_html')}>
                      <img src="img/lenguaje_html01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Programación HTML</div>
                      <div className="subject-meta">Ejercicios prácticos de HTML (estructura, formularios, tablas), CSS (Flexbox, modelo de caja, media queries) y JavaScript (DOM, eventos, validación, localStorage).</div>
                      <div><span className="coming-badge">Material - 143 preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('prog__html') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('prog__html'); }}
                        >
                          {usuario.favoritas?.includes('prog__html') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'lenguaje_css', nombre: 'Lenguaje de Programación CSS', el: (
                    <div className={`subject-card${desactivadas.includes('lenguaje_css') ? ' subject-disabled' : ''}`} key="static-lenguaje_css" id="card-lenguaje_css" onClick={() => irAlQuiz('lenguaje_css')}>
                      <img src="img/lenguaje_css01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Lenguaje de Programación CSS</div>
                      <div className="subject-meta">Pendiente: agregar preguntas</div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('lenguaje_css') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('lenguaje_css'); }}
                        >
                          {usuario.favoritas?.includes('lenguaje_css') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>


                    ) },
                    { key: 'linux', nombre: 'Linux', el: (
                    <div className={`subject-card${desactivadas.includes('linux') ? ' subject-disabled' : ''}`} key="static-linux" id="card-linux" onClick={() => irAlQuiz('linux')}>
                      <img src="img/linux002.jpg" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Linux</div>
                      <div className="subject-meta">Contiene cuestionario desarrollado a partir de las PPt para la instalación y desarrollo de RedHat en maquina virtual VirtualBox</div>
                      <div><span className="coming-badge">Aun de darrollo</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('linux') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('linux'); }}
                        >
                          {usuario.favoritas?.includes('linux') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'japones', nombre: 'Japonés', el: (
                    <div className={`subject-card${desactivadas.includes('japones') ? ' subject-disabled' : ''}`} key="static-japones" id="card-japones" onClick={() => irAlQuiz('japones')}>
                      <img src="img/japones01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Japonés</div>
                      <div className="subject-meta">hiragana, katakana, saludos, números, kanji básico, keigo honorífico/humilde, pasiva de sufrimiento, causativa-pasiva, yojijukugo, expresiones, onomatopeyas, lecturas especiales,  japonés clásico, dialectos regionales, keigo ultraformal</div>
                      <div><span className="coming-badge">Material - 300 preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('japones') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('japones'); }}
                        >
                          {usuario.favoritas?.includes('japones') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'chino', nombre: 'Chino', el: (
                    <div className={`subject-card${desactivadas.includes('chino') ? ' subject-disabled' : ''}`} key="static-chino" id="card-chino" onClick={() => irAlQuiz('chino')}>
                      <img src="img/Chino01.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Chino</div>
                      <div className="subject-meta">tonos, pinyin, saludos, pronombres, verbos, preguntas,contadores, tiempo, familia, direcciones, adjetivos, gramática con 了 y 把, expresiones, chengyu, expresiones avanzadas, proverbios clásicos, textos clásicos, keigo chino formal, dialectos cantonés </div>
                      <div><span className="coming-badge">Material - Aun sin preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('chino') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('chino'); }}
                        >
                          {usuario.favoritas?.includes('chino') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                    { key: 'coreano', nombre: 'Coreano', el: (
                    <div className={`subject-card${desactivadas.includes('coreano') ? ' subject-disabled' : ''}`} key="static-coreano" id="card-coreano" onClick={() => irAlQuiz('coreano')}>
                      <img src="img/Coreano03.JPG" width="20%" height="20%" style={{ display: 'block', margin: '0 auto' }} />
                      <div className="subject-name">Coreano</div>
                      <div className="subject-meta">Hangul vocales/consonantes, saludos, números sino/nativos, hanja básico, verbos básicos, partículas, tiempos verbales, adjetivos, adverbios, contadores, familia, comparaciones, comida, dialectos regionales, proverbios coreanos, keigo ultraformal</div>
                      <div><span className="coming-badge">Material - 210 Preguntas</span></div>
                      {/* Solo aparece si hay sesión iniciada */}
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes('coreano') ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita('coreano'); }}
                        >
                          {usuario.favoritas?.includes('coreano') ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                      </div>
                    ) },
                  ];

              const dinamicas = asignaturas
                .filter(a => !KEYS_ESTATICAS.includes(a.key))
                .map(a => ({
                  key: a.key,
                  nombre: a.nombre,
                  createdAt: a.createdAt,
                  el: (
                    <div
                      key={a.key}
                      className={`subject-card${desactivadas.includes(a.key) ? ' subject-disabled' : ''}`}
                      id={`card-${a.key}`}
                      style={{ '--card-accent': a.color || undefined }}
                      onClick={() => irAlQuiz(a.key)}
                    >
                      {/* Avatar: como estas asignaturas no tienen una imagen
                          subida, usamos el ícono (emoji) que puso el admin, o
                          si no puso ninguno, la primera letra del nombre sobre
                          un círculo de color — así igual se ve algo visual,
                          no una tarjeta vacía. */}
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '50%',
                        background: a.color || 'var(--accent)', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: a.icono ? '1.4rem' : '1.2rem', fontWeight: 700,
                        marginBottom: '0.5rem'
                      }}>
                        {a.icono || (a.nombre || '?').charAt(0).toUpperCase()}
                      </div>
                      <div className="subject-name">{a.nombre}</div>
                      <div className="subject-meta">{a.descripcion}</div>
                      <div><span className="coming-badge">
                        {a.totalPreguntas > 0 ? `${a.totalPreguntas} preguntas` : 'Aún sin preguntas'}
                      </span></div>
                      {usuario && (
                        <button
                          className={`fav-btn ${usuario.favoritas?.includes(a.key) ? 'fav-activa' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavorita(a.key); }}
                        >
                          {usuario.favoritas?.includes(a.key) ? 'Guardada' : 'Guardar'}
                        </button>
                      )}
                    </div>
                  )
                }));

              // Orden aplicado a TODAS las asignaturas juntas (estáticas + admin)
              return [...estaticas, ...dinamicas]
                .sort((a, b) => orden === 'nombre'
                  ? (a.nombre || '').localeCompare(b.nombre || '')
                  : (b.createdAt || 0) - (a.createdAt || 0))
                .map(t => t.el);
            })()}

          </div>

            {/* CONFIGURACIÓN ADICIONAL - Modo de estudio y orden */}

            <div className="config-row" style={{ marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '0.8rem' }}>
              <span className="config-label">Modo de estudio:</span>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <input type="radio" name="studyMode" value="normal" checked={modo === 'normal'} onChange={() => setModo('normal')} />
                  Cuestionario normal
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <input type="radio" name="studyMode" value="levels" checked={modo === 'levels'} onChange={() => setModo('levels')} />
                  Por niveles
                </label>
              </div>
            </div>

            <div className="config-row">
              <span className="config-label">Orden:</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-soft)' }}>
                Preguntas del profe primero · 🔀 Aleatorio · 🔤 Opciones mezcladas
              </span>
            </div>
          </div>

          {/* INFO ROW - Información resumida del cuestionario */}

          <div className="info-row" id="info-row">
            <div className="info-pill"><strong>{count === 999 ? 'Todas' : count}</strong> preguntas</div>
            <div className="info-pill"><strong>incluye</strong> cuestionario del profe</div>
            <div className="info-pill">Escala 1.0 – 7.0</div>
          </div>

          {/* MODAL, sin proguntas aun */}

          {modalSinPreguntas && (
            <div style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 9999
            }}>
              <div style={{
                background: 'white', borderRadius: '20px', padding: '2rem',
                textAlign: 'center', maxWidth: '380px', margin: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                <img
                  src="https://png.pngtree.com/png-clipart/20250501/original/pngtree-3d-cartoon-girl-sleeping-on-bed-png-image_20915456.png"
                  style={{ width: '100px', marginBottom: '1rem' }}
                />
                <h3 style={{ marginBottom: '0.8rem', fontFamily: 'Space Grotesk' }}>Por flojera 😴</h3>
                <p style={{ color: '#8a7e9a', marginBottom: '0.5rem' }}>
                  Esta asignatura aún no tiene preguntas cargadas.
                </p>
                <p style={{ color: '#8a7e9a', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  De a poquito voy poniendo las preguntas...<br />Porque somos felices, con poco 🌸
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setModalSinPreguntas(false)}
                >
                  Entendido
                </button>
              </div>
            </div>
          )}

          {/* MODAL, asignatura desactivada por el administrador */}

          {modalDesactivado && (
            <div style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 9999
            }}>
              <div style={{
                background: 'white', borderRadius: '20px', padding: '2rem',
                textAlign: 'center', maxWidth: '380px', margin: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                <h3 style={{ marginBottom: '0.8rem', fontFamily: 'Space Grotesk' }}>Cuestionario desactivado 🔒</h3>
                <p style={{ color: '#8a7e9a', marginBottom: '1.5rem' }}>
                  Esta asignatura fue desactivada temporalmente por el administrador. Vuelve a intentarlo más tarde.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setModalDesactivado(false)}
                >
                  Entendido
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      
    </>
  );
}