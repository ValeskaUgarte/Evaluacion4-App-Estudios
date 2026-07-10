// CONTEXTO DE AUTENTICACIÓN - Maneja usuarios, login, registro y datos


import { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto para compartir datos de autenticación en toda la app
const AuthContext = createContext(null);

// AUTH PROVIDER - Componente que envuelve la app y provee los datos
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  // EFECTO INICIAL - Verifica si hay sesión guardada en localStorage
  useEffect(() => {
  const guardado = localStorage.getItem('usuario_actual');
    if (guardado) setUsuario(JSON.parse(guardado));
    setLoading(false); 
  }, []);

   // LOGIN - Inicia sesión (admin fijo o usuario registrado)
  function login(email, password) {
  const emailLimpio = (email || '').trim().toLowerCase();
  // Admin fijo — no está en localStorage
  if (emailLimpio === 'admin@appestudios.cl' && password === 'admin2026') {
    const adminUser = {
      id: 'admin',
      nombre: 'Administrador',
      email: 'admin@appestudios.cl',
      rol: 'admin',
      favoritas: [],
      historial: [],
    };
    localStorage.setItem('usuario_actual', JSON.stringify(adminUser));
    setUsuario(adminUser);
    return { ok: true };
  }

  // Login normal: busca en la lista de usuarios registrados
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  const encontrado = usuarios.find(u => u.email.toLowerCase() === emailLimpio && u.password === password);
  if (!encontrado) return { ok: false, error: 'Email o contraseña incorrectos' };
  localStorage.setItem('usuario_actual', JSON.stringify(encontrado));
  setUsuario(encontrado);
  return { ok: true };
}

  // REGISTRO - Crea un nuevo usuario y lo loguea automáticamente
  function registro(nombre, email, password, rol = 'estudiante') {
    // VALIDACIÓN DE SEGURIDAD (defensa en profundidad, además de la del formulario)
    const nombreLimpio = (nombre || '').trim();
    const emailLimpio = (email || '').trim().toLowerCase();
    if (nombreLimpio.length < 2 || nombreLimpio.length > 50)
      return { ok: false, error: 'El nombre debe tener entre 2 y 50 caracteres.' };
    if (!password || password.length < 6 || password.length > 30)
      return { ok: false, error: 'La contraseña debe tener entre 6 y 30 caracteres.' };
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password))
      return { ok: false, error: 'La contraseña debe incluir mayúscula, minúscula y número.' };

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    // Verifica si el email ya está registrado (sin distinguir mayúsculas/minúsculas)
    if (usuarios.find(u => u.email.toLowerCase() === emailLimpio)) 
      return { ok: false, error: 'Este email ya está registrado' };
    const nuevo = {
      id: Date.now().toString(),
      nombre: nombreLimpio,
      email: emailLimpio,
      password,
      rol,
      favoritas: [],
      historial: [],
      fechaRegistro: new Date().toISOString(),
    };
    usuarios.push(nuevo);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuario_actual', JSON.stringify(nuevo));
    setUsuario(nuevo);
    return { ok: true };
  }

  // LOGOUT - Cierra sesión y elimina los datos del localStorage
  function logout() {
    localStorage.removeItem('usuario_actual');
    setUsuario(null);
  }

  // ACTUALIZAR USUARIO - Modifica los datos del usuario logueado
  function actualizarUsuario(datos) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const idx = usuarios.findIndex(u => u.id === usuario.id);
    if (idx === -1) return;
    const actualizado = { ...usuarios[idx], ...datos };
    usuarios[idx] = actualizado;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuario_actual', JSON.stringify(actualizado));
    setUsuario(actualizado);
  }

  // FAVORITOS - Agrega o quita un elemento de la lista de favoritos
  function toggleFavorita(key) {
    const favoritas = usuario?.favoritas || [];
    const nuevas = favoritas.includes(key)
      ? favoritas.filter(k => k !== key)
      : [...favoritas, key];

    // Actualizamos el objeto local del usuario
    const usuarioActualizado = { ...usuario, favoritas: nuevas };
    
    // Guardamos en localStorage
    localStorage.setItem('usuario_actual', JSON.stringify(usuarioActualizado));
    
    // Forzamos el cambio de estado para que React redibuje el botón
    setUsuario(usuarioActualizado);
  }

  // GUARDAR RESULTADO - Agrega un resultado al historial del usuario
  function guardarResultado(resultado) {
    const historial = usuario?.historial || [];
    actualizarUsuario({ historial: [...historial, resultado] });
  }

  // ══════════════════════════════════════════════════════════
  // MODERADORES - El administrador puede nombrar a un usuario
  // registrado (estudiante o colaborador) como "moderador", para que
  // lo ayude a aprobar/rechazar preguntas y asignaturas pendientes.
  // Un moderador NO tiene los permisos completos de admin (no puede
  // nombrar a otros moderadores, ni activar/desactivar cuestionarios).
  // ══════════════════════════════════════════════════════════

  // Devuelve la lista de usuarios registrados (sin la contraseña, para
  // no exponerla en el panel de Admin) — no incluye al admin fijo,
  // que no vive en localStorage.
  function listarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.map(({ password, ...resto }) => resto);
  }

  // Cambia el rol de un usuario por su id (ej: 'estudiante' -> 'moderador').
  // Si el usuario cuyo rol se cambia es el que está logueado en ESTE
  // navegador, también actualizamos su sesión para que el cambio se
  // refleje al instante (sin tener que cerrar sesión y volver a entrar).
  function cambiarRolUsuario(id, nuevoRol) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const actualizados = usuarios.map(u => u.id === id ? { ...u, rol: nuevoRol } : u);
    localStorage.setItem('usuarios', JSON.stringify(actualizados));
    if (usuario && usuario.id === id) {
      const actualizado = { ...usuario, rol: nuevoRol };
      localStorage.setItem('usuario_actual', JSON.stringify(actualizado));
      setUsuario(actualizado);
    }
  }

  // Nombra moderador (atajo sobre cambiarRolUsuario)
  function nombrarModerador(id) { cambiarRolUsuario(id, 'moderador'); }

  // Quita el rol de moderador y deja al usuario como 'estudiante'
  function revocarModerador(id) { cambiarRolUsuario(id, 'estudiante'); }

  // PROVIDER - Expone todos los datos y funciones a los hijos
  return (
    <AuthContext.Provider value={{ 
      usuario, 
      loading, 
      login, 
      logout, 
      registro, 
      toggleFavorita, 
      guardarResultado, 
      actualizarUsuario,
      listarUsuarios,
      cambiarRolUsuario,
      nombrarModerador,
      revocarModerador
    }}>
      {children}
    </AuthContext.Provider>
  );
}
// HOOK PERSONALIZADO - Para usar el contexto fácilmente en cualquier componente

export function useAuth() {
  return useContext(AuthContext);
}