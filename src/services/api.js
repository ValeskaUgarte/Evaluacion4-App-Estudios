// src/services/api.js

// URL de la API (json-server / server.cjs)
// En desarrollo local usa http://localhost:3001.
// En producción (Render) se toma de la variable de entorno
// VITE_API_URL, que debe apuntar al servicio de Render donde
// desplegaste server.cjs (ej: https://aa-cuestionarios-api.onrender.com)

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

import preguntas_seguridad_examen from '../data/preguntas/seguridad_examen.js';
import preguntas_seguridad_informacion from '../data/preguntas/seguridad_informacion.js';
import preguntas_sistemas_operativos from '../data/preguntas/sistemas_operativos.js';
import preguntas_frontend from '../data/preguntas/frontend.js'
import preguntas_bd_estructurados from '../data/preguntas/bd_estructurados.js';
import preguntas_introduccion_programacion_robotica from '../data/preguntas/introduccion_programacion_robotica.js';
import preguntas_linux from '../data/preguntas/linux.js';
import preguntas_hardware_software from '../data/preguntas/hardware_software.js';
import preguntas_ingles_basico from '../data/preguntas/ingles_basico.js';
import preguntas_ingles_intermedio from '../data/preguntas/ingles_intermedio.js';
import preguntas_ingles_avanzado from '../data/preguntas/ingles_avanzado.js';
import preguntas_prog_html from '../data/preguntas/prog_html.js';
import preguntas_japones from '../data/preguntas/japones.js';
import preguntas_chino from '../data/preguntas/chino.js';
import preguntas_coreano from '../data/preguntas/coreano.js';
import preguntas_metodologia_agil from '../data/preguntas/metodologia.agil.js';
import preguntas_algebra from '../data/preguntas/algebra.js';


// Agrega aquí los demás imports según los archivos que tengas en /data/preguntas/

export const KEYS_IDIOMAS = [
  'japones', 'coreano', 'chino', 
  'ingles_inicial', 'ingles_intermedio', 'ingles_avanzado'
];

const ASIGNATURAS = [
  {
    key: 'seguridad_informacion',
    nombre: 'Seguridad de la Información',
    meta: 'Prueba 1 · Solo las 32 primeras preguntas son de la prueba',
    badge: 'Material - 140 Preguntas',
    preguntas: preguntas_seguridad_informacion,
  },
  {
    key: 'sistemas_operativos',
    nombre: 'Sistemas Operativos',
    meta: 'Prueba 1 · Subnetting, Las primeras 38 preguntas son los cuestionarios del profesor',
    badge: 'Material de Clases - 131 Preguntas',
    preguntas: preguntas_sistemas_operativos,
  },
  {
    key: 'seguridad-examen',
    nombre: 'Fundamentos de Seguridad de la Información',
    meta: 'Cuestionario Examen Final otorgado por el profesor',
    badge: 'Cuestionario Examen - 55 Preguntas',
    preguntas: preguntas_seguridad_examen,
  },

   {
    key: 'linux',
    nombre: 'Linux',
    meta: 'Estudio de comandos en Lix RedHat',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_linux,
  },
  
  { 
    key: 'algebra', 
    nombre: 'Resolución de Problemas de Álgebra', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - Aun sin preguntas', 
    preguntas: preguntas_algebra, 
  },
  { key: 'funciones_matrices', nombre: 'Funciones y Matrices', icon: '📐', meta: 'Pendiente: agregar preguntas', badge: 'Material - Aun sin preguntas', preguntas: [] },
  { 
    key: 'metodologia_agil', 
    nombre: 'Metodología de Desarrollo Ágil', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - Aun en desarrollo', 
    preguntas: preguntas_metodologia_agil, 
  },
  { 
    key: 'frontend', 
    nombre: 'Programación Front End', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - Aun sin preguntas', 
    preguntas: preguntas_frontend
  },

  { key: 'backend', nombre: 'Programación Back End', icon: '⚙️', meta: 'Pendiente: agregar preguntas', badge: 'Material - Aun sin preguntas', preguntas: [] },
  
  { key: 'bd_estructurados', 
    nombre: 'Base de Datos Estructuradas', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - En desarrollo', 
    preguntas: preguntas_bd_estructurados, 
  },

  { key: 'bd_no_estructurados', nombre: 'Base de Datos No Estructurados', icon: '🍃', meta: 'Pendiente: agregar preguntas', badge: 'Material - Aun sin preguntas', preguntas: [] },
   
  { 
    key: 'introduccion_programacion_robotica', 
    nombre: 'Introducción a la Programación y Robótica Aplicada', 
    meta: 'Pendiente: en desarrollo', 
    badge: 'Material - en desarrollo', 
    preguntas: preguntas_introduccion_programacion_robotica,
  },

  {
    key: 'hardware_software',
    nombre: 'Fundamentos de Hardware y Software',
    meta: 'Estudio',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_hardware_software,
  },
  {
    key: 'prog_html',
    nombre: 'Programación HTML',
    meta: 'Estudio',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_prog_html,
  },
  {
    key: 'ingles_basico',
    nombre: 'Ingles Básico',
    meta: 'Estudio de Ingles',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_ingles_basico,
  },
  {
    key: 'ingles_intermedio',
    nombre: 'Ingles Intermedio',
    meta: 'Estudio de Inglés',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_ingles_intermedio,
  },
  {
    key: 'ingles_avanzado',
    nombre: 'Inglés Avanzado',
    meta: 'Estudio de Inglés',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_ingles_avanzado,
  },
  {
    key: 'japones',
    nombre: 'Japones',
    meta: 'Estudio de Hiragana Katakana Kanji',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_japones,
  },
  {
    key: 'chino',
    nombre: 'Chino',
    meta: 'Estudio de Chino mandarín',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_chino,
  },
  {
    key: 'coreano',
    nombre: 'Coreano',
    meta: 'Estudio ',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_coreano,
  },
];

// Normaliza el formato {q, opts, ans, exp} → {pregunta, opciones, respuestaCorrecta, explicacion}
function normalizar(p) {
  return {
    pregunta: p.q ?? p.pregunta,
    opciones: p.opts ?? p.opciones,
    respuestaCorrecta: p.ans ?? p.respuestaCorrecta,
    explicacion: p.exp ?? p.explicacion,
    dificultad: p.diff ?? p.dificultad ?? 'medium',
    unidad: p.unit ?? p.unidad ?? '',
    profe: p.profe ?? false,
    case: p.case ?? '',
    extra: p.extra ?? '',
    intermedio: p.intermedio ?? false,
    avanzado: p.avanzado ?? false,
    experto: p.experto ?? false,
  };
}

// ── LOCALSTORAGE PREGUNTAS ──
const LS_KEY = 'preguntas_admin';

function getPreguntasLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } 
  catch { return []; }
}

function setPreguntasLS(preguntas) {
  localStorage.setItem(LS_KEY, JSON.stringify(preguntas));
}


// MODERACIÓN (aprobación de contenido)
// Regla: si quien crea la pregunta o asignatura es 'admin', queda
// "aprobado" de inmediato (se confía en el admin), si es 'colaborador'
// o 'moderador', queda "pendiente" hasta que un admin la apruebe desde
// el panel de Admin (tab "Revisión"). Esto evita que un colaborador
// tenga, en la práctica, los mismos privilegios que un administrador.

export function estadoSegunRol(rol) {
  return rol === 'admin' ? 'aprobado' : 'pendiente';
}

// Generador de IDs únicos
// Antes se usaba solo Date.now().toString(), eso funciona para acciones
// aisladas, pero al crear varias preguntas muy seguido (ej. al importar
// 10-30 preguntas desde la API externa en el mismo instante), varias
// caían en el mismo milisegundo y terminaban con el _id repetido, lo
// que React detecta como "keys" duplicadas en las listas (warning en
// consola y riesgo de que se dupliquen/omitan filas), se agrega un
// sufijo aleatorio para que cada llamada sea única sin importar cuántas
// ocurran en el mismo milisegundo.
function generarId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export const crearPregunta = (data) => {
  const preguntas = getPreguntasLS();
  // Si quien llama no especificó "estado" explícitamente, se asume
  // pendiente por seguridad (mejor pedir aprobación de más que de menos).
  const nueva = {
    ...data,
    estado: data.estado || 'pendiente',
    _id: generarId(),
    createdAt: Date.now(),
  };
  setPreguntasLS([...preguntas, nueva]);
  return Promise.resolve(nueva);
};

// Aprueba una pregunta pendiente (usado por el admin en el panel de Revisión)
export const aprobarPregunta = (id) => {
  const preguntas = getPreguntasLS();
  const actualizadas = preguntas.map(p => p._id === id ? { ...p, estado: 'aprobado' } : p);
  setPreguntasLS(actualizadas);
  return Promise.resolve({ id, estado: 'aprobado' });
};

// Rechaza (elimina) una pregunta pendiente
export const rechazarPregunta = (id) => eliminarPregunta(id);

// Devuelve solo las preguntas creadas por colaboradores o moderadores que
// están esperando revisión del admin (para el tab "Revisión" del Admin)
export const getPreguntasPendientes = () => {
  return Promise.resolve(getPreguntasLS().filter(p => p.estado === 'pendiente'));
};

export const editarPregunta = (id, data) => {
  const preguntas = getPreguntasLS();
  const original = preguntas.find(p => p._id === id);
  const actualizadas = preguntas.map(p => p._id === id ? { ...data, _id: id, createdAt: original?.createdAt ?? Date.now() } : p);
  setPreguntasLS(actualizadas);
  return Promise.resolve({ ...data, _id: id });
};

export const eliminarPregunta = (id) => {
  const preguntas = getPreguntasLS();
  setPreguntasLS(preguntas.filter(p => p._id !== id));
  return Promise.resolve({ deleted: id });
};

export const getPreguntas = () => {
  // Solo preguntas ya aprobadas (o creadas por el admin, sin campo estado).
  // Las pendientes de colaboradores omoderadores se ven aparte, en el tab
  // "Revisión" del Admin (ver getPreguntasPendientes).
  const delAdmin = getPreguntasLS().filter(p => p.estado !== 'pendiente');
  const delArchivo = ASIGNATURAS.flatMap(a =>
  a.preguntas.map((p, index) => ({
    ...normalizar(p),
    _id: `archivo_${a.key}_${index}`, // ← ID estable
    asignatura: a.key,
    asignaturaId: a.key,
  }))
);
  return Promise.resolve([...delArchivo, ...delAdmin]);
};

//LOCALSTORAGE ASIGNATURAS
const LS_KEY_ASIG = 'asignaturas_admin';

function getAsignaturasLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY_ASIG) || '[]'); }
  catch { return []; }
}

function setAsignaturasLS(asigs) {
  localStorage.setItem(LS_KEY_ASIG, JSON.stringify(asigs));
}

export const crearAsignatura = (data) => {
  const asigs = getAsignaturasLS();
  // Igual que crearPregunta: si no viene "estado" explícito, pendiente
  // por defecto (así una asignatura propuesta por un colaborador no
  // aparece de inmediato en la lista pública de Cuestionarios).
  const nueva = {
    ...data,
    estado: data.estado || 'pendiente',
    _id: generarId(),
    createdAt: Date.now(),
  };
  setAsignaturasLS([...asigs, nueva]);
  return Promise.resolve(nueva);
};

// Aprueba una asignatura pendiente (la hace visible para todos)
export const aprobarAsignatura = (id) => {
  const asigs = getAsignaturasLS();
  const actualizadas = asigs.map(a => a._id === id ? { ...a, estado: 'aprobado' } : a);
  setAsignaturasLS(actualizadas);
  return Promise.resolve({ id, estado: 'aprobado' });
};

// Rechaza (elimina) una asignatura pendiente
export const rechazarAsignatura = (id) => eliminarAsignatura(id);

// Asignaturas propuestas por colaboradores o moderadores que esperan
// revisión del admin (para el tab "Revisión")
export const getAsignaturasPendientes = () => {
  return Promise.resolve(getAsignaturasLS().filter(a => a.estado === 'pendiente'));
};

export const editarAsignatura = (id, data) => {
  const asigs = getAsignaturasLS();
  const actualizadas = asigs.map(a => a._id === id ? { ...data, _id: id } : a);
  setAsignaturasLS(actualizadas);
  return Promise.resolve({ ...data, _id: id });
};

export const eliminarAsignatura = (id) => {
  const asigs = getAsignaturasLS();
  setAsignaturasLS(asigs.filter(a => a._id !== id));
  return Promise.resolve({ deleted: id });
};

// IMPORTANTE: a diferencia de los reportes, crearAsignatura/editarAsignatura/
// eliminarAsignatura NUNCA escriben en la API real (solo en Local Storage).
// Por eso esta función NO debe intentar leer de la API: si lo hiciera y
// esa API respondiera cualquier cosa (aunque fuera vieja o vacía), las
// asignaturas recién creadas por el admin desaparecerían de la vista,
// porque nunca llegaron a esa API. Se usa siempre Local Storage + banco
// estático, que es donde realmente vive esta información.
export function getAsignaturas() {
  // Solo asignaturas aprobadas (o del banco estático, sin campo estado).
  // Las propuestas pendientes de colaboradores/moderadores no deben
  // aparecer todavía en Cuestionarios/Home ni en los selects normales.
  const delAdmin = getAsignaturasLS().filter(a => a.estado !== 'pendiente');

  // Preguntas ya aprobadas guardadas en Local Storage (incluye tanto las
  // creadas manualmente en el panel de Admin como las importadas desde
  // la API externa vía ImportarTrivia). Se suman al conteo de TODAS las
  // asignaturas, no solo de las creadas dinámicamente por el Admin, para
  // que una asignatura del banco estático que nace "cerrada" (0 preguntas)
  // se reactive automáticamente apenas se le agregue o importe una pregunta,
  // y vuelva a quedar cerrada si esas preguntas se eliminan después.
  const preguntasAdmin = getPreguntasLS().filter(p => p.estado !== 'pendiente');

  const delArchivo = ASIGNATURAS.map(({ preguntas, ...rest }) => ({
    ...rest,
    totalPreguntas:
      preguntas.length +
      preguntasAdmin.filter(p => p.asignaturaId === rest.key || p.asignatura === rest.key).length,
  }));

  // Las asignaturas creadas desde el Admin no traen totalPreguntas de
  // fábrica: lo calculamos contando cuántas preguntas guardadas en
  // Local Storage apuntan a esa asignatura (por asignaturaId), sin
  // contar las preguntas que todavía están pendientes de aprobación.
  const delAdminConTotal = delAdmin.map(a => ({
    ...a,
    totalPreguntas: preguntasAdmin.filter(
      p => p.asignaturaId === a.key || p.asignatura === a.key
    ).length,
  }));

  const combinadasLocal = [...delArchivo, ...delAdminConTotal];

  // EVALUACIÓN 4 · Requisito "Integración con CRUD existente": las
  // asignaturas creadas u obtenidas directamente desde la API externa
  // (server.cjs / db.json, colección "asignaturas") también deben
  // aparecer aquí, no solo las locales. Se agregan SOLO las que no
  // existan ya con esa key (para no duplicar ni pisar las locales),
  // y si la API no responde (apagada, URL mal configurada, sin
  // conexión) se ignora en silencio y la app sigue funcionando con
  // el banco local + estático de siempre.
  const keysExistentes = new Set(combinadasLocal.map(a => a.key));
  return fetch(`${API_URL}/asignaturas`)
    .then(r => (r.ok ? r.json() : []))
    .catch(() => [])
    .then(desdeApi => {
      const nuevasDeApi = (Array.isArray(desdeApi) ? desdeApi : [])
        .filter(a => a?.key && !keysExistentes.has(a.key))
        .map(a => ({
          key: a.key,
          nombre: a.nombre || a.key,
          totalPreguntas: a.totalPreguntas || 0,
          origenAPI: true, // trazabilidad: para distinguirlas en la UI si hace falta
        }));
      return [...combinadasLocal, ...nuevasDeApi];
    });
}

// getPreguntasPorAsignatura
export function getPreguntasPorAsignatura(key) {
  const asig = ASIGNATURAS.find(a => a.key === key);
  const delArchivo = asig ? asig.preguntas.map(normalizar) : [];
  const delAdmin = getPreguntasLS()
    // Excluye pendientes: un estudiante no debe ver (ni rendir) preguntas
    // que un colaborador subió y que todavía no aprueba el administrador.
    .filter(p => (p.asignatura === key || p.asignaturaId === key) && p.estado !== 'pendiente')
    .map(p => ({
      pregunta: p.pregunta,
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      explicacion: p.explicacion ?? '',
      dificultad: p.dificultad ?? 'medium',
      unidad: p.unidad ?? '',
      profe: p.esDelProfesor === true,
      case: p.caso ?? '',
      extra: p.extra ?? '',
      intermedio: false,
      avanzado: false,
      experto: false,
    }));
  return Promise.resolve([...delArchivo, ...delAdmin]);
}

export const getPreguntasByKey = (key) => getPreguntasPorAsignatura(key);


// ACTIVAR / DESACTIVAR CUESTIONARIOS
// Permite que un administrador oculte temporalmente una
// asignatura sin eliminarla, se guarda solo la lista de
// keys desactivadas en Local Storage.


const LS_KEY_DESACTIVADAS = 'asignaturas_desactivadas';

// Lista maestra de asignaturas que aparecen como tarjetas en
// Cuestionario.jsx. Se usa en el panel de administración para
// mostrar el switch de activar/desactivar de cada una.
export const LISTA_ASIGNATURAS_ADMIN = [
  { key: 'seguridad_informacion', nombre: 'Seguridad de la Información' },
  { key: 'sistemas_operativos', nombre: 'Sistemas Operativos' },
  { key: 'seguridad-examen', nombre: 'Fundamentos de Seguridad de la Información' },
  { key: 'algebra', nombre: 'Resolución de Problemas de Álgebra' },
  { key: 'funciones_matrices', nombre: 'Funciones y Matrices' },
  { key: 'metodologia_agil', nombre: 'Metodología de Desarrollo Ágil' },
  { key: 'frontend', nombre: 'Programación Front End' },
  { key: 'backend', nombre: 'Programación Back End' },
  { key: 'bd_estructurados', nombre: 'Base de Datos Estructurados' },
  { key: 'bd_no_estructurados', nombre: 'Base de Datos No Estructurados' },
  { key: 'introduccion_programacion_robotica', nombre: 'Introducción a la Programación y Robótica Aplicada' },
  { key: 'fundamentos_bd', nombre: 'Fundamentos de Base de Datos' },
  { key: 'administracion', nombre: 'Administración' },
  { key: 'ingenieria_software', nombre: 'Ingeniería de Software' },
  { key: 'hardware_software', nombre: 'Fundamentos de Hardware y Software' },
  { key: 'modelamiento_informaticas', nombre: 'Modelamiento de Soluciones Informáticas' },
  { key: 'mobile_iot', nombre: 'Aplicaciones Móviles IoT' },
  { key: 'ingles_basico', nombre: 'Inglés Inicial' },
  { key: 'ingles_intermedio', nombre: 'Inglés Intermedio' },
  { key: 'ingles_avanzado', nombre: 'Inglés Avanzado' },
  { key: 'lenguaje_python', nombre: 'Lenguaje de Programación Python' },
  { key: 'lenguaje_javascript', nombre: 'Lenguaje de Programación JavaScript' },
  { key: 'prog_html', nombre: 'Programación HTML' },
  { key: 'lenguaje_css', nombre: 'Lenguaje de Programación CSS' },
  { key: 'linux', nombre: 'Linux' },
  { key: 'japones', nombre: 'Japonés' },
  { key: 'chino', nombre: 'Chino' },
  { key: 'coreano', nombre: 'Coreano' },
];

function getAsignaturasDesactivadasLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY_DESACTIVADAS) || '[]'); }
  catch { return []; }
}

// Devuelve el arreglo de keys actualmente desactivadas
export function getAsignaturasDesactivadas() {
  return getAsignaturasDesactivadasLS();
}

// Devuelve true si la asignatura está activa (visible para estudiar)
export function isAsignaturaActiva(key) {
  return !getAsignaturasDesactivadasLS().includes(key);
}

// Activa o desactiva una asignatura. Devuelve el nuevo estado (true = quedó activa)
export function toggleAsignaturaActiva(key) {
  const desactivadas = getAsignaturasDesactivadasLS();
  const estabaDesactivada = desactivadas.includes(key);
  const actualizadas = estabaDesactivada
    ? desactivadas.filter(k => k !== key)   // estaba desactivada → la reactivamos
    : [...desactivadas, key];               // estaba activa → la desactivamos
  localStorage.setItem(LS_KEY_DESACTIVADAS, JSON.stringify(actualizadas));
  return estabaDesactivada;
}


// REPORTES (json-server / server.cjs)
// Igual que getAsignaturas: primero intenta la API real; si no
// responde, usa un respaldo en Local Storage para no perder el
// reporte (ese respaldo NO se ve en el Admin de la API real,
// solo evita que la app falle).


const LS_KEY_REPORTES = 'reportes_admin_fallback';

function getReportesLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY_REPORTES) || '[]'); }
  catch { return []; }
}

function setReportesLS(reportes) {
  localStorage.setItem(LS_KEY_REPORTES, JSON.stringify(reportes));
}

// Devuelve todos los reportes guardados (usado en el panel de Admin)
export function getReportes() {
  return fetch(`${API_URL}/reportes`)
    .then(r => r.json())
    .catch(() => getReportesLS());
}

// Crea un nuevo reporte (usado cuando un estudiante reporta una pregunta)
export function crearReporte(data) {
  return fetch(`${API_URL}/reportes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .catch(() => {
      const nuevo = { ...data, id: generarId() };
      setReportesLS([...getReportesLS(), nuevo]);
      return nuevo;
    });
}

// Elimina un reporte por id (usado al descartar o resolver un reporte)
export function eliminarReporte(id) {
  return fetch(`${API_URL}/reportes/${id}`, { method: 'DELETE' })
    .catch(() => {
      setReportesLS(getReportesLS().filter(r => r.id !== id));
    });
}


// REGISTRO DE ACTIVIDAD DEL ADMINISTRADOR
// Guarda un historial simple de las acciones del admin (crear/editar/
// eliminar preguntas y asignaturas, activar/desactivar) para mostrarlo
// en su Perfil, a modo de demostración de la funcionalidad del panel.
// Solo guarda las últimas 50 acciones para no llenar Local Storage.


const LS_KEY_ACTIVIDAD = 'admin_actividad';
const MAX_ACTIVIDAD = 50;

export function registrarActividad(texto) {
  const actual = getActividadLS();
  const nueva = { texto, fecha: Date.now() };
  const actualizada = [nueva, ...actual].slice(0, MAX_ACTIVIDAD);
  localStorage.setItem(LS_KEY_ACTIVIDAD, JSON.stringify(actualizada));
}

function getActividadLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY_ACTIVIDAD) || '[]'); }
  catch { return []; }
}

export function getActividad() {
  return getActividadLS();
}