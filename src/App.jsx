// App.jsx
// Componente raíz de la aplicación
// Define todas las rutas y envuelve todo en AuthProvider para que
// cualquier componente pueda acceder al usuario logueado

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RutaProtegida from './components/RutaProtegida';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Resultado from './pages/Resultado';
import Admin from './pages/Admin';
import Cuestionario from './pages/cuestionario';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Perfil from './pages/Perfil';
import Colaborador from './pages/Colaborador';
import './App.css';

export default function App() {
  return (
    // AuthProvider envuelve toda la app para que el usuario logueado
    // esté disponible en cualquier componente via useAuth()
   <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuestionarios" element={<Cuestionario />} />
          <Route path="/quiz/:asignaturaId" element={<Quiz />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={
            <RutaProtegida>
              <Perfil />
            </RutaProtegida>
          } />
          {/* 'moderador' también entra al panel de Admin: Admin.jsx internamente
              le muestra solo las pestañas de revisión/reportes, no la gestión
              completa (asignaturas, estado, nombrar moderadores) que es solo
              del 'admin'. Antes 'moderador' no estaba en esta lista y por eso
              quedaba bloqueado aquí mismo, sin llegar nunca a Colaborador.jsx. */}
          <Route path="/admin" element={
            <RutaProtegida roles={['admin', 'moderador']}>
              <Admin />
            </RutaProtegida>
          } />
          <Route path="/colaborador" element={
            <RutaProtegida roles={['colaborador', 'admin', 'moderador']}>
              <Colaborador />
            </RutaProtegida>
          } />
        </Routes>
       
      </BrowserRouter>
    </AuthProvider>
  );
}