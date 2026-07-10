// REGISTRO.JSX Página de registro de nuevos usuarios
// Importamos los hooks y componentes necesarios
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import './Login.css';

// HOOKS Contexto de autenticación y navegación
export default function Registro() {
  // useAuth nos da la función registro del contexto global
  const { registro } = useAuth();
  const navigate = useNavigate();
  
  // ESTADOS Formulario, errores
  const [form, setForm] = useState({ 
    nombre: '', 
    email: '', 
    password: '', 
    confirmar: '', 
    rol: 'estudiante' 
  });
  
  // error guarda el mensaje de error que se muestra al usuario
  const [error, setError] = useState('');

  // FUNCIÓN Maneja el envío del formulario de registro
  function handleSubmit() {
    // Limpiamos cualquier error anterior
    setError('');
    
    // 1. Verificamos que todos los campos estén llenos (quitando espacios en blanco)
    const nombreLimpio = form.nombre.trim();
    if (!nombreLimpio || !form.email || !form.password || !form.confirmar)
      return setError('Completa todos los campos.');

    // 1.1 Validamos longitud y formato del nombre (solo letras y espacios, 2 a 50 caracteres)
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;
    if (!nombreRegex.test(nombreLimpio))
      return setError('El nombre debe tener entre 2 y 50 letras (sin números ni símbolos).');

    // 2. Verificamos que el email tenga formato válido (algo@algo.algo)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(form.email))
      return setError('Ingresa un email válido.');

    // 3. Lista de dominios de email permitidos
    // Solo se puede registrar con estos proveedores de correo
    const dominiosValidos = [
      'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com',
      'live.com', 'msn.com', 'protonmail.com', 'inacap.cl', 'inacap.com',
      'uc.cl', 'usach.cl', 'utem.cl', 'udp.cl', 'udd.cl', 'uai.cl',
      'uchile.cl', 'puc.cl', 'uv.cl', 'ubb.cl', 'ucn.cl', 'uantof.cl'
    ];

    // Extraemos el dominio del email (lo que va después del @)
    // .trim() elimina espacios en blanco que puedan haberse colado
    const dominio = form.email.split('@')[1]?.toLowerCase().trim();
    
    // Si el dominio no está en la lista, rechazamos el registro
    if (!dominiosValidos.includes(dominio))
      return setError('Usa un email de un proveedor válido (Gmail, Hotmail, Outlook, etc.)');

    // 4. Verificamos que las contraseñas coincidan
    if (form.password !== form.confirmar)
      return setError('Las contraseñas no coinciden.');

    // 5. Verificamos que la contraseña tenga entre 6 y 30 caracteres
    if (form.password.length < 6)
      return setError('La contraseña debe tener al menos 6 caracteres.');
    if (form.password.length > 30)
      return setError('La contraseña no puede tener más de 30 caracteres.');

    // 5.1 Exigencias mínimas de seguridad: al menos una mayúscula,
    // una minúscula y un número (evita contraseñas débiles como "123456")
    if (!/[A-Z]/.test(form.password))
      return setError('La contraseña debe incluir al menos una letra mayúscula.');
    if (!/[a-z]/.test(form.password))
      return setError('La contraseña debe incluir al menos una letra minúscula.');
    if (!/[0-9]/.test(form.password))
      return setError('La contraseña debe incluir al menos un número.');

    // 6. Todo está bien — llamamos a la función registro del contexto
    // Esta función guarda el usuario en localStorage (usamos el nombre ya sin espacios extra)
    const result = registro(nombreLimpio, form.email, form.password, form.rol);
    
    // Si hubo un error (ej: email ya registrado), lo mostramos
    if (!result.ok) return setError(result.error);
    
    // Si todo salió bien, vamos a la página de inicio
    navigate('/');
  }

  // RENDER
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Crear cuenta ✨</h1>
            <p>Únete y empieza a estudiar</p>
          </div>

          {/* Mostramos el error si existe */}
          {error && <div className="auth-error">{error}</div>}

          {/* Campo nombre */}
          <div className="form-group">
            <label className="input-label" htmlFor="registro-nombre">Nombre</label>
            <input 
              id="registro-nombre"
              name="nombre"
              className="input" 
              placeholder="Tu nombre" 
              autoComplete="name"
              value={form.nombre}
              onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} 
              maxLength={50}
            />
          </div>

          {/* Campo email */}
          <div className="form-group">
            <label className="input-label" htmlFor="registro-email">Email</label>
            <input 
              id="registro-email"
              name="email"
              className="input" 
              type="email" 
              placeholder="tucorreo@gmail.com" 
              autoComplete="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))} 
              maxLength={100}
            />
          </div>

          {/* Campo contraseña */}
          <div className="form-group">
            <label className="input-label" htmlFor="registro-password">Contraseña</label>
            <input 
              id="registro-password"
              name="password"
              className="input" 
              type="password" 
              placeholder="Mínimo 6 caracteres" 
              autoComplete="new-password"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))} 
              maxLength={30}
            />
            <p className="input-hint">
              Entre 6 y 30 caracteres, con al menos una mayúscula, una minúscula y un número.
            </p>
          </div>

          {/* Campo confirmar contraseña */}
          <div className="form-group">
            <label className="input-label" htmlFor="registro-confirmar">Confirmar contraseña</label>
            <input 
              id="registro-confirmar"
              name="confirmar"
              className="input" 
              type="password" 
              placeholder="Repite tu contraseña" 
              autoComplete="new-password"
              value={form.confirmar}
              onChange={e => setForm(f => ({ ...f, confirmar: e.target.value }))} 
              maxLength={30}
            />
          </div>

          {/* Selector de rol */}
          <div className="form-group">
            <label className="input-label" htmlFor="registro-rol">Rol</label>
            <select 
              id="registro-rol"
              name="rol"
              className="input" 
              value={form.rol} 
              onChange={e => setForm(f => ({ ...f, rol: e.target.value }))}
            >
              <option value="estudiante">🎓 Estudiante</option>
              <option value="colaborador">📝 Colaborador (subir material)</option>
            </select>
          </div>

          {/* Botón que llama a handleSubmit al hacer clic */}
          <button className="btn btn-primary auth-btn" onClick={handleSubmit}>
            Crear cuenta
          </button>

          {/* Link para ir a login si ya tiene cuenta */}
          <p className="auth-link">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </main>
    </>
  );
}