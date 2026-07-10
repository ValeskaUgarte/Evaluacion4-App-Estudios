
// LOGIN.JSX Página de inicio de sesión


import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import './Login.css';


// HOOKS Contexto de autenticación y navegación
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  //ESTADOS Formulario, errores y carga
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // FUNCIÓN Maneja el envío del formulario de login
  async function handleSubmit() {
    const emailLimpio = form.email.trim();
    if (!emailLimpio || !form.password) return setError('Completa todos los campos.');
    setLoading(true);
    const result = login(emailLimpio, form.password);
    setLoading(false);
    if (!result.ok) return setError(result.error);
    navigate('/');
  }

  //RENDER
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Bienvenida</h1>
            <p>Inicia sesión para continuar estudiando</p>
          </div>

          {error && <div className="auth-error">{error}</div>}

          {/* CAMPO EMAIL */}
          <div className="form-group">
            <label className="input-label" htmlFor="login-email">Email</label>
            <input
              id="login-email"
              name="email"
              className="input"
              type="email"
              autoComplete="email"
              placeholder="tucorreo@email.com"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              maxLength={100}
            />
          </div>


          {/* CAMPO CONTRASEÑA */}
          <div className="form-group">
            <label className="input-label" htmlFor="login-password">Contraseña</label>
            <input
              id="login-password"
              name="password"
              className="input"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              maxLength={30}
            />
          </div>

          {/* BOTÓN DE ENVÍO */}
          <button className="btn btn-primary auth-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Ingresando…' : 'Iniciar sesión'}
          </button>

           {/* ENLACE A REGISTRO */}
          <p className="auth-link">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </div>
      </main>
    </>
  );
}