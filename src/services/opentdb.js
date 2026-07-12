// src/services/opentdb.js
// EVALUACIÓN 4 Consumo de API externa (Open Trivia DB)
// https://opentdb.com
//
// Se eligió esta API porque:
//   1) Es pública y gratuita, no requiere API Key ni backend propio.
//   2) Es temáticamente afín: es un banco de preguntas de trivia con
//      alternativas, exactamente el mismo formato que ya usa esta app
//      (pregunta + opciones + respuesta correcta + dificultad).
//   3) Sus valores de "difficulty" (easy, medium,hard) calzan de forma
//      exacta con los que ya usa el resto de la aplicación, evitando
//      un mapeo forzado.
//
// Se usa FETCH (API nativa del navegador), igual que el resto de
// services/api.js (getReportes, crearReporte, etc.), para mantener
// una sola forma de consumir APIs en todo el proyecto. Como fetch NO
// trae timeout de fábrica ni rechaza la promesa ante errores HTTP
// (4xx/5xx), aquí se arma manualmente con:
//   AbortController + setTimeout - cancela la petición si tarda
//   más de TIMEOUT_MS y se detecta como "tiempo de espera agotado".
//   Revisión explícita de response.ok - si es false, se lanza un
//   error con el status HTTP para poder mostrarlo al usuario.


const BASE_URL = 'https://opentdb.com';
const TIMEOUT_MS = 8000; // 8s: tiempo prudente antes de considerar "tiempo de espera agotado"

// Helper central: hace un fetch con timeout y devuelve el JSON ya
// parseado, o lanza un error clasificado (timeout / http / red).
async function fetchConTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let response;
  try {
    response = await fetch(url, { signal: controller.signal });
  } catch (error) {
    // fetch rechaza la promesa en errores de RED (sin conexión, DNS,
    // CORS, API caída) y también cuando el AbortController cancela.
    if (error.name === 'AbortError') {
      const timeoutError = new Error('TIMEOUT');
      timeoutError.tipo = 'timeout';
      throw timeoutError;
    }
    const redError = new Error('NETWORK');
    redError.tipo = 'red';
    throw redError;
  } finally {
    clearTimeout(timer);
  }

  // A diferencia de axios, fetch NO rechaza la promesa ante un
  // status HTTP de error: hay que revisarlo a mano con response.ok.
  if (!response.ok) {
    const httpError = new Error('HTTP');
    httpError.tipo = 'http';
    httpError.status = response.status;
    throw httpError;
  }

  try {
    return await response.json();
  } catch {
    const parseError = new Error('PARSE');
    parseError.tipo = 'parse';
    throw parseError;
  }
}

// Decodifica entidades HTML (&quot; &#039; &amp;...) que Open Trivia
// DB devuelve dentro de los textos de pregunta/opciones/categoría. 
function decodeHTML(texto) {
  if (typeof texto !== 'string') return '';
  const el = document.createElement('textarea');
  el.innerHTML = texto;
  return el.value;
}

// Mezcla un arreglo sin mutar el original (Fisher-Yates) 
function mezclar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Traduce cualquier error clasificado por fetchConTimeout a un
// mensaje claro y comprensible para el usuario final.
function traducirError(error) {
  switch (error.tipo) {
    case 'timeout':
      return ' La API tardó demasiado en responder (tiempo de espera agotado). Intenta nuevamente.';
    case 'http':
      if (error.status === 429) return '🚦 Demasiadas solicitudes seguidas a la API. Espera unos segundos y vuelve a intentar.';
      return `La API respondió con un error HTTP ${error.status}.`;
    case 'red':
      return '🔌 No se pudo contactar la API externa (sin conexión o API no disponible).';
    case 'parse':
      return ' La API respondió con datos que no se pudieron interpretar (JSON inválido).';
    default:
      return 'Error inesperado al consumir la API externa.';
  }
}

// TRADUCCIÓN AUTOMÁTICA (EN ES)
// Open Trivia DB solo entrega contenido en inglés, como la app y el
// resto de las asignaturas están en español, cada texto (pregunta,
// opciones, categoría) se traduce con la API pública y gratuita de
// MyMemory antes de mostrarse o importarse, no requiere API Key.
// Si la traducción falla (o se agota el tiempo), se conserva el
// texto original en inglés en vez de bloquear la importación: es
// una mejora de presentación, no un dato crítico para la app.

const TRANSLATE_URL = 'https://api.mymemory.translated.net/get';
const TRANSLATE_TIMEOUT_MS = 6000;
const cacheTraduccion = new Map(); // evita traducir 2 veces el mismo texto (ej. opciones repetidas)

async function traducirTexto(texto) {
  if (!texto || typeof texto !== 'string' || !texto.trim()) return texto;
  if (cacheTraduccion.has(texto)) return cacheTraduccion.get(texto);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TRANSLATE_TIMEOUT_MS);
  try {
    const url = `${TRANSLATE_URL}?q=${encodeURIComponent(texto)}&langpair=en|es`;
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error('HTTP');
    const data = await res.json();
    const traducido = data?.responseData?.translatedText;
    // MyMemory a veces devuelve el mismo texto o un mensaje de cuota agotada;
    // en ese caso nos quedamos con el original en vez de mostrar basura.
    const resultado = (typeof traducido === 'string' && traducido.trim()) ? traducido : texto;
    cacheTraduccion.set(texto, resultado);
    return resultado;
  } catch {
    cacheTraduccion.set(texto, texto); // no reintentar el mismo texto si ya falló
    return texto;
  } finally {
    clearTimeout(timer);
  }
}

// Traduce una pregunta ya normalizada (pregunta + opciones + categoría).
// Se traduce en paralelo para no encadenar tiempos de espera.
async function traducirPregunta(p) {
  const [pregunta, categoria, ...opciones] = await Promise.all([
    traducirTexto(p.pregunta),
    traducirTexto(p.categoria),
    ...p.opciones.map(traducirTexto),
  ]);
  return {
    ...p,
    pregunta,
    categoria,
    opciones,
    explicacion: `Pregunta importada automáticamente desde Open Trivia DB (categoría: ${categoria}) y traducida al español.`,
  };
}

// Códigos de respuesta propios de Open Trivia DB (documentados en su API)
const RESPONSE_CODE_MSG = {
  1: 'No hay suficientes preguntas para esa combinación de categoría/dificultad. Prueba con otros filtros.',
  2: 'Parámetros inválidos enviados a la API.',
  3: 'Token de sesión no encontrado.',
  4: 'Ya se obtuvieron todas las preguntas disponibles para estos filtros. Prueba otros filtros.',
  5: 'Demasiadas solicitudes seguidas. Espera unos segundos y reintenta.',
};

// Obtiene el listado de categorías disponibles en Open Trivia DB.
export async function fetchCategoriasTrivia() {
  try {
    const data = await fetchConTimeout(`${BASE_URL}/api_category.php`);
    // Validación de existencia y tipo de los datos recibidos
    if (!data || !Array.isArray(data.trivia_categories)) {
      return { ok: false, error: 'La API de categorías devolvió un formato inesperado.' };
    }
    return { ok: true, categorias: data.trivia_categories };
  } catch (error) {
    return { ok: false, error: traducirError(error) };
  }
}

// Descarga preguntas de trivia y las normaliza al formato interno de
// la app: { pregunta, opciones, respuestaCorrecta, dificultad, ... }
export async function fetchPreguntasTrivia({ categoria = '', dificultad = '', cantidad = 10 } = {}) {
  try {
    const params = new URLSearchParams({ amount: String(cantidad), type: 'multiple' });
    if (categoria) params.set('category', categoria);
    if (dificultad) params.set('difficulty', dificultad);

    const data = await fetchConTimeout(`${BASE_URL}/api.php?${params.toString()}`);

    // VALIDACIÓN DE DATOS RECIBIDOS (existencia y tipo) 
    if (!data || typeof data.response_code !== 'number') {
      return { ok: false, error: 'La API devolvió una respuesta con formato inesperado.' };
    }
    if (data.response_code !== 0) {
      return { ok: false, error: RESPONSE_CODE_MSG[data.response_code] || `La API devolvió un código de error (${data.response_code}).` };
    }
    if (!Array.isArray(data.results)) {
      return { ok: false, error: 'La API no devolvió un listado de preguntas válido.' };
    }
    if (data.results.length === 0) {
      return { ok: true, preguntas: [], descartadas: 0 }; // "sin resultados" no es un error
    }

    // Valida cada pregunta (existencia, tipo, valores nulos,
    // objetos incompletos) y descarta silenciosamente las inválidas,
    // informando cuántas se descartaron.
    let descartadas = 0;
    const preguntas = data.results
      .filter(r => {
        const valido = r
          && typeof r.question === 'string' && r.question.trim() !== ''
          && typeof r.correct_answer === 'string' && r.correct_answer.trim() !== ''
          && Array.isArray(r.incorrect_answers) && r.incorrect_answers.length > 0
          && r.incorrect_answers.every(o => typeof o === 'string');
        if (!valido) descartadas++;
        return valido;
      })
      .map(r => {
        const opciones = mezclar([r.correct_answer, ...r.incorrect_answers]).map(decodeHTML);
        const correctaDecoded = decodeHTML(r.correct_answer);
        const respuestaCorrecta = Math.max(0, opciones.indexOf(correctaDecoded));
        const dificultadValida = ['easy', 'medium', 'hard'].includes(r.difficulty) ? r.difficulty : 'medium';
        return {
          pregunta: decodeHTML(r.question),
          opciones,
          respuestaCorrecta,
          categoria: decodeHTML(r.category || 'General'),
          dificultad: dificultadValida,
          explicacion: `Pregunta importada automáticamente desde Open Trivia DB (categoría: ${decodeHTML(r.category || 'General')}).`,
        };
      });

    // Traducción EN, ES de cada pregunta (en paralelo)
    // Si por algún motivo la API de traducción no responde, cada
    // pregunta individual conserva su texto en inglés en vez de que
    // fallen todas, es más importante no perder la pregunta que
    // bloquear la importación completa por un servicio externo caído.
    const preguntasTraducidas = await Promise.all(preguntas.map(traducirPregunta));

    return { ok: true, preguntas: preguntasTraducidas, descartadas };
  } catch (error) {
    return { ok: false, error: traducirError(error) };
  }
}
