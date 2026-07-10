// RutaProtegida.jsx
// Componente que protege rutas según si el usuario está logueado y su rol
// Se usa en App.jsx envolviendo las rutas que requieren autenticación
// Ejemplo de uso: <Route path="/admin" element={<RutaProtegida roles={['admin']}><Admin /></RutaProtegida>} />

import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children, roles }) {
  // Obtenemos el usuario actual y si está cargando desde el contexto
  const { usuario, loading } = useAuth();

  // Mientras verifica si hay sesión, muestra "Cargando..."
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si no hay usuario logueado, redirige al login
  if (!usuario) return <Navigate to="/login" />;
  
  // Si hay roles requeridos y el usuario no tiene el rol correcto,
  // redirige al inicio (ej: un estudiante intentando entrar al admin)
  if (roles && !roles.includes(usuario.rol)) return <Navigate to="/" />;
  
  // Si todo está bien, muestra la página solicitada
  return children;
}