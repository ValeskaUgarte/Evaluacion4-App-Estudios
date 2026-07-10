// src/pages/admin/CampoError.jsx
// Pequeño mensaje de advertencia que se muestra debajo de un campo
// cuando ese campo específico tiene un error de validación.
// (Extraído de Admin.jsx sin cambios de lógica ni de estilo.)
export default function CampoError({ mensaje }) {
  if (!mensaje) return null;
  return (
    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--danger, #ff4f6a)', marginTop: '0.25rem' }}>
       {mensaje}
    </span>
  );
}
