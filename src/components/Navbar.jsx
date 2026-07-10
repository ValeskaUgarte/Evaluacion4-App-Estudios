// Import de los componentes de react y
// el hook personalizado de autenticacion para acceder al usuario y funciones de auth

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Navbar barra de navegación con autenticación y rutas según rol
export default function Navbar() {
  const { pathname } = useLocation();        // Ruta actual para enlaces activos
  const { usuario, logout } = useAuth();     // Datos del usuario y logout
  const navigate = useNavigate();            // Redirigir después de logout

  // Controla si el menú (hamburguesa) está abierto en celular.
  // En escritorio esto no se usa: los links siempre se ven en una fila.
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Cierra sesión y va al inicio
  function handleLogout() {
    logout();
    navigate('/');
    setMenuAbierto(false);
  }

  // Cierra el menú al tocar cualquier link (para que no quede abierto
  // tapando la pantalla después de navegar a otra página)
  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* Logo de la app - siempre visible, link al inicio */}
        <Link to="/" className="navbar-brand" onClick={cerrarMenu}>
          <span></span>
        </Link>

        {/* Botón hamburguesa - solo se muestra en celular (ver CSS) */}
        <button
          className={`navbar-toggle ${menuAbierto ? 'abierto' : ''}`}
          onClick={() => setMenuAbierto(prev => !prev)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Links: en escritorio siempre visibles; en celular se muestran
          u ocultan según menuAbierto (clase "abierto") */}
      <div className={`navbar-links ${menuAbierto ? 'abierto' : ''}`}>
        {/* Enlaces públicos - los ve cualquier usuario */}
        <Link to="/" className={pathname === '/' ? 'active' : ''} onClick={cerrarMenu}>Inicio</Link>
        <Link to="/cuestionarios" className={pathname === '/cuestionarios' ? 'active' : ''} onClick={cerrarMenu}>Cuestionarios</Link>

        {/* Admin - solo visible si el usuario es administrador */}
        {usuario?.rol === 'admin' && (
          <Link to="/admin" className={pathname === '/admin' ? 'active' : ''} onClick={cerrarMenu}>Admin</Link>
        )}

        {/* Panel - solo visible si es colaborador o moderador */}
        {(usuario?.rol === 'colaborador' || usuario?.rol === 'moderador') && (
          <Link to="/colaborador" className={pathname === '/colaborador' ? 'active' : ''} onClick={cerrarMenu}>Panel</Link>
        )}

        {/* Si el usuario está logueado: muestra su nombre y botón Salir */}
        {usuario ? (
          <>
            <Link to="/perfil" className={pathname === '/perfil' ? 'active' : ''} onClick={cerrarMenu}>👤 {usuario.nombre}</Link>
            <button className="btn btn-sm btn-ghost" onClick={handleLogout}>Salir</button>
          </>
        ) : (
          /* Si no está logueado: muestra Iniciar sesión y Registrarse */
          <>
            <Link to="/login" className={pathname === '/login' ? 'active' : ''} onClick={cerrarMenu}>Iniciar sesión</Link>
            <Link to="/registro" className={`${pathname === '/registro' ? 'active' : ''} btn btn-sm btn-primary`} onClick={cerrarMenu}>Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}
