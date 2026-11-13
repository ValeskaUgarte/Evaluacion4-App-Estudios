// Helpers compartidos para los bancos de preguntas (ampliaciones)
// P: crea una pregunta. TABLA: genera una tabla HTML comparativa para el campo extra.
export const P = (unit, diff, q, opts, ans, exp, extra = '') => ({
  profe: false, unit, diff, q, opts, ans, exp, extra,
});

export const TABLA = (filas) => `<table style='width:100%;border-collapse:collapse;margin-top:8px'>${filas.map((f, i) =>
  '<tr>' + f.map(c => i === 0
    ? `<th style='border:1px solid #888;padding:4px;text-align:left'>${c}</th>`
    : `<td style='border:1px solid #888;padding:4px'>${c}</td>`).join('') + '</tr>').join('')}</table>`;
