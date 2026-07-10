// src/pages/admin/constantes.js
// ══════════════════════════════════════════════════════════
// Constantes compartidas por Admin.jsx y por las pestañas del panel
// (src/pages/admin/*). Se extrajeron tal cual estaban en Admin.jsx,
// sin cambiar ningún valor, para que el comportamiento no cambie.
// ══════════════════════════════════════════════════════════

// CONFIGURACIÓN INICIAL Valores por defecto para formularios
export const DIFFS = ['easy', 'medium', 'hard'];
// Traducción de la dificultad al español para mostrarla en pantalla.
// El valor interno ('easy'/'medium'/'hard') se mantiene igual porque
// es el que se guarda en la API y el que usan las clases CSS de los badges.
export const DIFICULTAD_LABEL = { easy: 'Fácil', medium: 'Media', hard: 'Difícil' };

// LÍMITES DE CARACTERES Evita entradas desproporcionadas en los formularios
export const MAX_PREGUNTA = 300;
export const MAX_OPCION = 120;
export const MAX_EXPLICACION = 500;
export const MAX_UNIDAD = 40;
export const MAX_NOMBRE_ASIG = 60;
export const MAX_DESC_ASIG = 150;
export const MAX_EXTRA = 4000;
export const MAX_CASO = 800;
export const MIN_OPCIONES = 2;
export const MAX_OPCIONES = 6;

// Plantillas listas para pegar y editar en el campo "Contenido extra".
// Reutilizan las mismas clases CSS que ya usan las preguntas del banco
// estático (ver Quiz.css: .terminal-box y .subnet-table), así que se
// ven igual de bien sin tener que escribir el HTML/CSS desde cero.
export const PLANTILLA_TABLA = `<table class="subnet-table">
  <tr><th>Columna 1</th><th>Columna 2</th></tr>
  <tr><td>Dato A</td><td>Dato B</td></tr>
  <tr><td>Dato C</td><td>Dato D</td></tr>
</table>`;

export const PLANTILLA_CONSOLA = `<div class="terminal-box">
$ comando de ejemplo
salida simulada de la consola...
</div>`;

// esDelProfesor: null = todavía no elegido (obligatorio elegir true o false)
export const EMPTY_P = {
  pregunta: '', caso: '', opciones: ['', '', '', ''], respuestaCorrecta: 0,
  dificultad: 'easy', unidad: '', asignaturaId: '', explicacion: '', extra: '',
  esDelProfesor: null,
};
export const EMPTY_A = { nombre: '', color: '#7c6dfa', descripcion: '', icono: '' };
