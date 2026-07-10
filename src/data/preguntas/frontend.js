const preguntas_frontend = [

    //  HTML - ESTRUCTURA BÁSICA 
    {
        "profe": false,
        "unit": "HTML - Estructura y Etiquetas",
        "diff": "easy",
        "q": "Completa el siguiente código HTML para crear una página con: título 'Mi Página', un encabezado h1 con 'Bienvenidos', y un párrafo con texto de ejemplo.",
        "extra": `
            <div class="extra-content">
            <div style="background:#0a0a0a;color:#33ff33;font-family:'Courier New',monospace;padding:1rem;border-radius:8px;border:1px solid #333;box-shadow:0 0 15px rgba(0,255,0,0.1);">
                <div style="display:flex;align-items:center;gap:8px;border-bottom:1px solid #333;padding-bottom:6px;margin-bottom:10px;">
                <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:#ff5f56;"></span>
                <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:#ffbd2e;"></span>
                <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:#27c93f;"></span>
                <span style="color:#888;font-size:12px;font-family:sans-serif;margin-left:8px;">Terminal - Estructura HTML</span>
                </div>
                <strong style="color:#33ff33;">Estructura incompleta:</strong><br>
                &lt;!DOCTYPE html&gt;<br>
                &lt;html&gt;<br>
                &nbsp;&nbsp;&lt;head&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;[completar]&lt;/title&gt;<br>
                &nbsp;&nbsp;&lt;/head&gt;<br>
                &nbsp;&nbsp;&lt;body&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;[completar]&lt;/h1&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;[completar]&lt;/p&gt;<br>
                &nbsp;&nbsp;&lt;/body&gt;<br>
                &lt;/html&gt;
            </div>
            </div>`,
        "opts": [
            "<title>Mi Página</title>\n<h1>Bienvenidos</h1>\n<p>Este es un párrafo de ejemplo</p>",
            "<title>Mi Página</title>\n<h1>Bienvenidos</h1>\n<div>Este es un párrafo de ejemplo</div>",
            "<title>Mi Página</title>\n<header>Bienvenidos</header>\n<p>Este es un párrafo de ejemplo</p>",
            "<title>Mi Página</title>\n<h1>Bienvenidos</h1>\n<span>Este es un párrafo de ejemplo</span>"
        ],
        "ans": 0,
        "exp": "La estructura correcta es: 1) <title> para el título de la pestaña, 2) <h1> para el encabezado principal, 3) <p> para el párrafo. Las otras opciones usan <div>, <header> o <span>, que no son semánticamente correctos para un párrafo."
    },

    // HTML - FORMULARIOS 
    {
        "profe": false,
        "unit": "HTML - Formularios",
        "diff": "medium",
        "q": "Crea un formulario HTML que incluya: 1) Campo de texto para nombre, 2) Campo de email, 3) Selector de país (Chile, Argentina, Perú), 4) Botón de envío.",
        "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Requisitos</div>• Formulario con method: POST, action: /enviar\n• Input: nombre (text, required)\n• Input: email (email, required)\n• Select: país (Chile, Argentina, Perú)\n• Botón: submit</div>",
        "opts": [
            "<form method='POST' action='/enviar'>\n  <label>Nombre: <input type='text' name='nombre' required></label>\n  <br>\n  <label>Email: <input type='email' name='email' required></label>\n  <br>\n  <label>País:\n    <select name='pais'>\n      <option value='CL'>Chile</option>\n      <option value='AR'>Argentina</option>\n      <option value='PE'>Perú</option>\n    </select>\n  </label>\n  <br>\n  <button type='submit'>Enviar</button>\n</form>",

            "<form method='POST' action='/enviar'>\n  <input type='text' name='nombre' required>\n  <input type='email' name='email' required>\n  <select name='pais'>\n    <option>Chile</option>\n    <option>Argentina</option>\n    <option>Perú</option>\n  </select>\n  <input type='submit'>\n</form>",

            "<form method='POST'>\n  <label>Nombre: <input type='text' name='nombre'></label>\n  <label>Email: <input type='text' name='email'></label>\n  <label>País:\n    <select name='pais'>\n      <option value='Chile'>Chile</option>\n      <option value='Argentina'>Argentina</option>\n      <option value='Perú'>Perú</option>\n    </select>\n  </label>\n  <button>Enviar</button>\n</form>",

            "<form action='/enviar' method='POST'>\n  <input type='text' placeholder='Nombre' name='nombre'>\n  <input type='email' placeholder='Email' name='email'>\n  <select name='pais'>\n    <option value='CL'>Chile</option>\n    <option value='AR'>Argentina</option>\n    <option value='PE'>Perú</option>\n  </select>\n  <button type='submit'>Enviar</button>\n</form>"
        ],
        "ans": 0,
        "exp": "La opción A es la más completa y accesible: 1) method y action correctos, 2) type='text' y type='email' con required, 3) <select> con options con value, 4) button type='submit'. La B no tiene labels. La C no tiene action y usa type='text' para email. La D es válida pero menos semántica que A."
    },

    // CSS - SELECTORES Y PROPIEDADES 
    {
        "profe": false,
        "unit": "CSS - Selectores y Propiedades",
        "diff": "easy",
        "q": "Escribe el CSS para: 1) Centrar un div horizontalmente, 2) Darle un fondo azul, 3) Texto blanco, 4) Padding de 20px.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">HTML de referencia:</strong><br>
            &lt;div class="caja"&gt;Contenido&lt;/div&gt;
            </div>
            </div>`,
        "opts": [
            ".caja {\n  margin: 0 auto;\n  background: blue;\n  color: white;\n  padding: 20px;\n}",
            ".caja {\n  text-align: center;\n  background: blue;\n  color: white;\n  padding: 20px;\n}",
            ".caja {\n  display: flex;\n  justify-content: center;\n  background: blue;\n  color: white;\n  padding: 20px;\n}",
            "div {\n  margin: auto;\n  background: #0000FF;\n  color: #FFFFFF;\n  padding: 20px;\n}"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) margin: 0 auto centra horizontalmente (requiere que el div tenga un ancho definido o sea block), 2) background: blue, 3) color: white, 4) padding: 20px. La B usa text-align (centra texto, no el div). La C usa flex (válido pero más complejo). La D usa selector div (muy genérico) y hex colors (válido pero menos claro)."
    },

    // CSS - FLEXBOX 
    {
        "profe": false,
        "unit": "CSS - Flexbox",
        "diff": "medium",
        "q": "Escribe el CSS para crear un contenedor flex que: 1) Distribuya 3 elementos horizontalmente, 2) Con espacio igual entre ellos, 3) Centrados verticalmente, 4) Con altura de 200px.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">HTML de referencia:</strong><br>
            &lt;div class="contenedor"&gt;<br>
            &nbsp;&nbsp;&lt;div&gt;1&lt;/div&gt;<br>
            &nbsp;&nbsp;&lt;div&gt;2&lt;/div&gt;<br>
            &nbsp;&nbsp;&lt;div&gt;3&lt;/div&gt;<br>
            &lt;/div&gt;
            </div>
            </div>`,
        "opts": [
            ".contenedor {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 200px;\n}",
            ".contenedor {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}",
            ".contenedor {\n  display: flex;\n  justify-content: space-around;\n  align-items: stretch;\n  height: 200px;\n}",
            ".contenedor {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  height: 200px;\n}"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) display: flex, 2) justify-content: space-between (espacio igual entre elementos), 3) align-items: center (centrado vertical), 4) height: 200px. La B centra todo (no distribuye). La C usa space-around (espacio alrededor). La D usa space-evenly y align-items: flex-start (no centra verticalmente)."
    },

    //  CSS - GRID 
    {
        "profe": false,
        "unit": "CSS - Grid",
        "diff": "hard",
        "q": "Crea un grid de 3 columnas iguales y 2 filas, con un gap de 10px entre celdas, usando CSS Grid.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • 3 columnas de igual tamaño (1fr cada una)<br>
            • 2 filas automáticas<br>
            • gap: 10px entre celdas
            </div>
            </div>`,
        "opts": [
            ".grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 10px;\n}",
            ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}",
            ".grid {\n  display: grid;\n  grid-template: auto auto / 1fr 1fr 1fr;\n  gap: 10px;\n}",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son correctas: 1) Opción A: grid-template-columns y grid-template-rows explícitos, 2) Opción B: grid-template-columns con repeat (más conciso), 3) Opción C: grid-template abreviado (rows / columns). Todas crean el mismo grid de 3x2 con gap de 10px."
    },

    //  CSS - POSITIONING
    {
        "profe": false,
        "unit": "CSS - Position y Layout",
        "diff": "medium",
        "q": "Escribe el CSS para que un elemento hijo: 1) Esté posicionado en la esquina superior derecha de su contenedor, 2) Con un margen de 20px desde el borde.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">HTML de referencia:</strong><br>
            &lt;div class="padre" style="position:relative;"&gt;<br>
            &nbsp;&nbsp;&lt;div class="hijo"&gt;Esquina&lt;/div&gt;<br>
            &lt;/div&gt;
            </div>
            </div>`,
        "opts": [
            ".hijo {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}",
            ".hijo {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n}",
            ".hijo {\n  position: relative;\n  top: 20px;\n  right: 20px;\n}",
            ".hijo {\n  float: right;\n  margin-top: 20px;\n  margin-right: 20px;\n}"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) position: absolute (relativo al padre con position:relative), 2) top: 20px y right: 20px para posicionar en esquina superior derecha. La B usa fixed (relativo a la ventana). La C usa relative (desplaza desde su posición normal). La D usa float (método antiguo, menos preciso)."
    },

    //  CSS - MEDIA QUERIES 
    {
        "profe": false,
        "unit": "CSS - Media Queries (Responsive)",
        "diff": "medium",
        "q": "Escribe un media query que: 1) Cambie el fondo a verde, 2) El texto a blanco, 3) Oculte un elemento con clase 'ocultar', cuando la pantalla sea menor a 600px.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • @media (max-width: 600px)<br>
            • body: background: green, color: white<br>
            • .ocultar: display: none
            </div>
            </div>`,
        "opts": [
            "@media (max-width: 600px) {\n  body {\n    background: green;\n    color: white;\n  }\n  .ocultar {\n    display: none;\n  }\n}",
            "@media screen and (max-width: 600px) {\n  body {\n    background: green;\n    color: white;\n  }\n  .ocultar {\n    visibility: hidden;\n  }\n}",
            "@media (max-width: 600px) {\n  body { background: green; color: white; }\n  .ocultar { opacity: 0; }\n}",
            "@media only screen and (max-width: 600px) {\n  body {\n    background-color: green;\n    color: #fff;\n  }\n  .ocultar {\n    display: none !important;\n  }\n}"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta y más limpia: 1) @media (max-width: 600px), 2) body con background y color, 3) .ocultar con display: none. La B usa visibility: hidden (oculta visualmente pero ocupa espacio). La C usa opacity: 0 (transparente pero aún interactuable). La D usa !important (mala práctica)."
    },

    //  CSS - ANIMACIONES 
    {
        "profe": false,
        "unit": "CSS - Animaciones y Transiciones",
        "diff": "hard",
        "q": "Crea una animación CSS que haga que un elemento: 1) Gire 360 grados, 2) Cambie de color de rojo a azul, 3) Con duración de 2 segundos, 4) Repita infinitamente.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • @keyframes miAnimacion<br>
            • 0%: transform: rotate(0deg), background: red<br>
            • 100%: transform: rotate(360deg), background: blue<br>
            • animation: 2s infinite
            </div>
            </div>`,
        "opts": [
            "@keyframes miAnimacion {\n  0% { transform: rotate(0deg); background: red; }\n  100% { transform: rotate(360deg); background: blue; }\n}\n.elemento {\n  animation: miAnimacion 2s infinite;\n}",
            "@keyframes miAnimacion {\n  0% { rotate: 0deg; background: red; }\n  100% { rotate: 360deg; background: blue; }\n}\n.elemento {\n  animation: miAnimacion 2s infinite;\n}",
            "@keyframes miAnimacion {\n  from { transform: rotate(0); background: #FF0000; }\n  to { transform: rotate(360); background: #0000FF; }\n}\n.elemento {\n  animation-name: miAnimacion;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}",
            "Todas las anteriores son correctas."
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) @keyframes con 0% y 100%, 2) transform: rotate(360deg) (con deg), 3) background: red y blue, 4) animation: miAnimacion 2s infinite. La B usa rotate sin deg (sintaxis incorrecta). La C usa from/to en lugar de %, y animation-name separado (válido pero menos compacto). La A es la más clara y estándar."
    },

    //  JAVASCRIPT - DOM MANIPULATION 
    {
        "profe": false,
        "unit": "JavaScript - Manipulación del DOM",
        "diff": "medium",
        "q": "Escribe JavaScript para: 1) Seleccionar un elemento con id 'miBoton', 2) Agregar un evento 'click', 3) Cambiar el texto de un elemento con id 'miTexto' a '¡Clickeado!'.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">HTML de referencia:</strong><br>
            &lt;button id="miBoton"&gt;Click me&lt;/button&gt;<br>
            &lt;p id="miTexto"&gt;Texto inicial&lt;/p&gt;
            </div>
            </div>`,
        "opts": [
            "const boton = document.getElementById('miBoton');\nconst texto = document.getElementById('miTexto');\nboton.addEventListener('click', function() {\n  texto.textContent = '¡Clickeado!';\n});",
            "const boton = document.querySelector('#miBoton');\nconst texto = document.querySelector('#miTexto');\nboton.onclick = function() {\n  texto.innerHTML = '¡Clickeado!';\n};",
            "document.getElementById('miBoton').addEventListener('click', () => {\n  document.getElementById('miTexto').innerText = '¡Clickeado!';\n});",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son correctas: 1) Opción A: getElementById + addEventListener + textContent, 2) Opción B: querySelector + onclick (más antiguo) + innerHTML, 3) Opción C: versión más concisa con arrow function y innerText. Todas funcionan correctamente. La A es la más recomendada por usar addEventListener."
    },

    // JAVASCRIPT - FETCH API 
    {
        "profe": false,
        "unit": "JavaScript - Fetch API y Promesas",
        "diff": "hard",
        "q": "Escribe una función asíncrona que: 1) Realice una petición GET a 'https://api.example.com/data', 2) Convierta la respuesta a JSON, 3) Muestre los datos en consola, 4) Maneje errores con try/catch.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • async function obtenerDatos()<br>
            • fetch con URL 'https://api.example.com/data'<br>
            • await para convertir a JSON<br>
            • console.log(data)<br>
            • try/catch para errores
            </div>
            </div>`,
        "opts": [
            "async function obtenerDatos() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}",
            "function obtenerDatos() {\n  fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error('Error:', error));\n}",
            "async function obtenerDatos() {\n  const response = await fetch('https://api.example.com/data');\n  const data = await response.json();\n  console.log(data);\n}",
            "const obtenerDatos = async () => {\n  try {\n    const res = await fetch('https://api.example.com/data');\n    const json = await res.json();\n    console.log(json);\n  } catch (e) {\n    console.error(e);\n  }\n};"
        ],
        "ans": 0,
        "exp": "La opción A es correcta y completa: 1) async function, 2) try/catch para manejo de errores, 3) await fetch, 4) await response.json(), 5) console.log(data). La B es una función normal con promesas (válida pero no usa async/await). La C no tiene manejo de errores. La D es válida pero usa arrow function (más moderna). La A es la más clara para principiantes."
    },

    // JAVASCRIPT - LOCAL STORAGE
    {
        "profe": false,
        "unit": "JavaScript - Local Storage",
        "diff": "medium",
        "q": "Escribe funciones para: 1) Guardar un objeto 'usuario' en localStorage, 2) Recuperarlo y mostrarlo, 3) Eliminarlo.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • Objeto: { nombre: 'Juan', edad: 30 }<br>
            • Guardar con clave 'usuario'<br>
            • Usar JSON.stringify y JSON.parse<br>
            • Función eliminar con localStorage.removeItem
            </div>
            </div>`,
        "opts": [
            "const usuario = { nombre: 'Juan', edad: 30 };\n\nfunction guardarUsuario() {\n  localStorage.setItem('usuario', JSON.stringify(usuario));\n}\n\nfunction obtenerUsuario() {\n  const data = localStorage.getItem('usuario');\n  return JSON.parse(data);\n}\n\nfunction eliminarUsuario() {\n  localStorage.removeItem('usuario');\n}",
            "const usuario = { nombre: 'Juan', edad: 30 };\nlocalStorage.setItem('usuario', usuario);\nconst data = localStorage.getItem('usuario');",
            "function guardarUsuario(usuario) {\n  localStorage.save('usuario', JSON.stringify(usuario));\n}\nfunction obtenerUsuario() {\n  return JSON.parse(localStorage.load('usuario'));\n}",
            "const usuario = { nombre: 'Juan', edad: 30 };\nlocalStorage['usuario'] = JSON.stringify(usuario);\nconst data = JSON.parse(localStorage['usuario']);\ndelete localStorage['usuario'];"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) setItem con JSON.stringify para guardar, 2) getItem con JSON.parse para recuperar, 3) removeItem para eliminar. La B guarda el objeto directamente (guardaría '[object Object]'). La C usa save/load (no existen). La D usa notación de corchetes (válida pero menos recomendada que setItem)."
    },

    //  JAVASCRIPT - EVENTOS 
    {
        "profe": false,
        "unit": "JavaScript - Eventos del DOM",
        "diff": "easy",
        "q": "Escribe el código para: 1) Escuchar el evento 'submit' de un formulario, 2) Prevenir su comportamiento por defecto, 3) Mostrar en consola los valores de los campos 'nombre' y 'email'.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">HTML de referencia:</strong><br>
            &lt;form id="miForm"&gt;<br>
            &nbsp;&nbsp;&lt;input name="nombre" placeholder="Nombre"&gt;<br>
            &nbsp;&nbsp;&lt;input name="email" placeholder="Email"&gt;<br>
            &nbsp;&nbsp;&lt;button type="submit"&gt;Enviar&lt;/button&gt;<br>
            &lt;/form&gt;
            </div>
            </div>`,
        "opts": [
            "document.getElementById('miForm').addEventListener('submit', function(e) {\n  e.preventDefault();\n  const nombre = this.querySelector('[name=\"nombre\"]').value;\n  const email = this.querySelector('[name=\"email\"]').value;\n  console.log('Nombre:', nombre, 'Email:', email);\n});",
            "document.querySelector('#miForm').onsubmit = (e) => {\n  e.preventDefault();\n  const form = e.target;\n  console.log(form.nombre.value, form.email.value);\n};",
            "const form = document.getElementById('miForm');\nform.addEventListener('submit', function(event) {\n  event.preventDefault();\n  const data = new FormData(form);\n  console.log(data.get('nombre'), data.get('email'));\n});",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son correctas: 1) Opción A: addEventListener con querySelector para acceder a los inputs, 2) Opción B: onsubmit (válido) y acceso directo a form.nombre, 3) Opción C: FormData API (la más moderna). Todas previenen el submit y muestran los valores en consola."
    },

    //  REACT - COMPONENTE FUNCIONAL 
    {
        "profe": false,
        "unit": "React - Componentes Funcionales y Hooks",
        "diff": "hard",
        "q": "Crea un componente funcional React llamado 'Contador' que: 1) Muestre un número, 2) Tenga botones '+' y '-' para incrementar/decrementar, 3) Use el hook useState.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • Importar React y useState<br>
            • Estado: contador (inicial 0)<br>
            • Botón '+' → incrementa<br>
            • Botón '-' → decrementa<br>
            • Mostrar el valor en un &lt;h1&gt;
            </div>
            </div>`,
        "opts": [
            "import React, { useState } from 'react';\n\nfunction Contador() {\n  const [contador, setContador] = useState(0);\n\n  return (\n    <div>\n      <h1>{contador}</h1>\n      <button onClick={() => setContador(contador + 1)}>+</button>\n      <button onClick={() => setContador(contador - 1)}>-</button>\n    </div>\n  );\n}\n\nexport default Contador;",
            "import React from 'react';\n\nclass Contador extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { contador: 0 };\n  }\n  render() {\n    return (\n      <div>\n        <h1>{this.state.contador}</h1>\n        <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>+</button>\n        <button onClick={() => this.setState({ contador: this.state.contador - 1 })}>-</button>\n      </div>\n    );\n  }\n}",
            "function Contador() {\n  let contador = 0;\n  const incrementar = () => contador++;\n  const decrementar = () => contador--;\n  return (\n    <div>\n      <h1>{contador}</h1>\n      <button onClick={incrementar}>+</button>\n      <button onClick={decrementar}>-</button>\n    </div>\n  );\n}",
            "const Contador = () => {\n  const [contador, setContador] = React.useState(0);\n  return <div><h1>{contador}</h1><button onClick={() => setContador(contador + 1)}>+</button><button onClick={() => setContador(contador - 1)}>-</button></div>;\n};"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta y más completa: 1) import React, { useState }, 2) función Contador, 3) useState(0), 4) Botones con onClick usando setContador, 5) export default. La B es un componente de clase (válido pero más antiguo). La C no usa useState (el contador no actualizaría el DOM). La D es válida pero menos legible que A."
    },

    // REACT - PROPS 
    {
        "profe": false,
        "unit": "React - Props y Comunicación",
        "diff": "medium",
        "q": "Crea un componente 'Saludo' que reciba 'nombre' y 'apellido' como props, y muestre un mensaje de bienvenida.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • Componente Saludo<br>
            • Props: nombre, apellido<br>
            • Muestra: "Bienvenido, [nombre] [apellido]"
            </div>
            </div>`,
        "opts": [
            "function Saludo({ nombre, apellido }) {\n  return <h1>Bienvenido, {nombre} {apellido}</h1>;\n}",
            "function Saludo(props) {\n  return <h1>Bienvenido, {props.nombre} {props.apellido}</h1>;\n}",
            "const Saludo = ({ nombre, apellido }) => <h1>Bienvenido, {nombre} {apellido}</h1>;",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son correctas: 1) Opción A: desestructuración directa en los parámetros, 2) Opción B: props con notación de punto, 3) Opción C: arrow function con desestructuración. Todas reciben nombre y apellido y muestran el mensaje de bienvenida."
    },

    //  REACT - useEffect
    {
        "profe": false,
        "unit": "React - useEffect",
        "diff": "hard",
        "q": "Escribe un componente que: 1) Use useEffect para realizar una petición fetch al montar, 2) Guarde los datos en el estado, 3) Muestre una lista de elementos.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • useState para datos (inicial: [])\n• useEffect con dependencia vacía ([])\n• fetch a 'https://jsonplaceholder.typicode.com/posts'\n• Guardar en estado\n• Mostrar como lista (<ul>)
            </div>
            </div>`,
        "opts": [
            "import React, { useState, useEffect } from 'react';\n\nfunction ListaPosts() {\n  const [posts, setPosts] = useState([]);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/posts')\n      .then(res => res.json())\n      .then(data => setPosts(data));\n  }, []);\n\n  return (\n    <ul>\n      {posts.map(post => <li key={post.id}>{post.title}</li>)}\n    </ul>\n  );\n}\n\nexport default ListaPosts;",
            "function ListaPosts() {\n  const [posts, setPosts] = useState([]);\n  fetch('https://jsonplaceholder.typicode.com/posts')\n    .then(res => res.json())\n    .then(data => setPosts(data));\n  return <ul>{posts.map(p => <li>{p.title}</li>)}</ul>;\n}",
            "import React, { useState } from 'react';\n\nfunction ListaPosts() {\n  const [posts, setPosts] = useState([]);\n  \n  const cargarDatos = async () => {\n    const res = await fetch('https://jsonplaceholder.typicode.com/posts');\n    const data = await res.json();\n    setPosts(data);\n  };\n  \n  cargarDatos();\n\n  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;\n}",
            "import React, { useEffect } from 'react';\n\nfunction ListaPosts() {\n  let posts = [];\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/posts')\n      .then(res => res.json())\n      .then(data => posts = data);\n  }, []);\n  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;\n}"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) useState para posts, 2) useEffect con dependencia vacía [], 3) fetch con then, 4) setPosts para guardar, 5) map con key. La B hace fetch directamente en el cuerpo (se ejecutaría en cada render). La C llama a cargarDatos en el cuerpo (mismo problema). La D usa let en lugar de estado (no actualiza el DOM)."
    },

    //  VUE.JS - COMPONENTE BÁSICO 
    {
        "profe": false,
        "unit": "Vue.js - Componentes Básicos",
        "diff": "medium",
        "q": "Crea un componente Vue.js simple que: 1) Muestre un mensaje, 2) Tenga un botón que cambie el mensaje, 3) Use la opción 'data'.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • Componente con template\n• data: mensaje: 'Hola Mundo'\n• Método: cambiarMensaje()\n• Botón con @click
            </div>
            </div>`,
        "opts": [
            "<template>\n  <div>\n    <p>{{ mensaje }}</p>\n    <button @click=\"cambiarMensaje\">Cambiar</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      mensaje: 'Hola Mundo'\n    };\n  },\n  methods: {\n    cambiarMensaje() {\n      this.mensaje = '¡Mensaje cambiado!';\n    }\n  }\n};\n</script>",
            "<template>\n  <div>\n    <p>{ mensaje }</p>\n    <button v-on:click=\"cambiarMensaje\">Cambiar</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data: {\n    mensaje: 'Hola Mundo'\n  },\n  methods: {\n    cambiarMensaje() {\n      this.mensaje = '¡Mensaje cambiado!';\n    }\n  }\n};\n</script>",
            "<template>\n  <div>\n    <p>{{ mensaje }}</p>\n    <button onclick=\"cambiarMensaje()\">Cambiar</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return { mensaje: 'Hola Mundo' };\n  }\n};\n</script>",
            "<template>\n  <div>\n    <p>{{ mensaje }}</p>\n    <button @click=\"mensaje = '¡Nuevo mensaje!'\">Cambiar</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return { mensaje: 'Hola Mundo' };\n  }\n};\n</script>"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) template con {{ mensaje }} para interpolar, 2) @click para el evento, 3) data() como función, 4) methods con cambiarMensaje(). La B usa data como objeto (en Vue 2 es válido pero no recomendado en Vue 3). La C usa onclick nativo (no reactivo). La D es válida pero el método es más reutilizable."
    },

    //  VUE.JS - DIRECTIVAS 
    {
        "profe": false,
        "unit": "Vue.js - Directivas v-for y v-if",
        "diff": "medium",
        "q": "Escribe un template Vue que: 1) Use v-for para iterar una lista de usuarios, 2) Use v-if para mostrar solo usuarios activos, 3) Muestre el nombre de cada uno.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Datos:</strong><br>
            users: [<br>
            { id: 1, name: 'Ana', active: true },<br>
            { id: 2, name: 'Luis', active: false },<br>
            { id: 3, name: 'Carlos', active: true }<br>
            ]
            </div>
            </div>`,
        "opts": [
            "<ul>\n  <li v-for=\"user in users\" :key=\"user.id\" v-if=\"user.active\">\n    {{ user.name }}\n  </li>\n</ul>",
            "<ul>\n  <li v-for=\"user in users\" :key=\"user.id\" v-show=\"user.active\">\n    {{ user.name }}\n  </li>\n</ul>",
            "<ul>\n  <li v-for=\"user in users\" :key=\"user.id\">\n    <span v-if=\"user.active\">{{ user.name }}</span>\n  </li>\n</ul>",
            "<ul>\n  <li v-for=\"(user, index) in users\" :key=\"index\" v-if=\"user.active\">\n    {{ user.name }}\n  </li>\n</ul>"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) v-for=\"user in users\" para iterar, 2) :key=\"user.id\" para identificar cada elemento, 3) v-if=\"user.active\" para filtrar usuarios activos. La B usa v-show (oculta pero no elimina del DOM, no es lo que pide el enunciado). La C tiene la lógica dentro del li. La D usa index como key (no recomendado cuando hay filtros)."
    },

    //  VUE.JS - COMPUTED PROPERTIES 
    {
        "profe": false,
        "unit": "Vue.js - Propiedades Computadas",
        "diff": "hard",
        "q": "Crea una propiedad computada en Vue que: 1) Filtre una lista de productos, 2) Muestre solo los que tengan precio menor a 100, 3) Ordene por precio ascendente.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Datos:</strong><br>
            productos: [<br>
            { nombre: 'Mouse', precio: 25 },<br>
            { nombre: 'Teclado', precio: 120 },<br>
            { nombre: 'Monitor', precio: 300 },<br>
            { nombre: 'USB', precio: 15 }<br>
            ]
            </div>
            </div>`,
        "opts": [
            "computed: {\n  productosBaratos() {\n    return this.productos\n      .filter(p => p.precio < 100)\n      .sort((a, b) => a.precio - b.precio);\n  }\n}",
            "computed: {\n  productosBaratos() {\n    return this.productos.filter(p => p.precio <= 100).sort();\n  }\n}",
            "methods: {\n  productosBaratos() {\n    return this.productos.filter(p => p.precio < 100);\n  }\n}",
            "data() {\n  return {\n    productosBaratos: this.productos.filter(p => p.precio < 100)\n  };\n}"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) Propiedad computada, 2) filter con precio < 100, 3) sort con (a, b) => a.precio - b.precio (ascendente). La B usa <= en lugar de < y sort sin comparador (ordenaría por string). La C usa methods (no es computada). La D usa data (no se actualiza automáticamente)."
    },

    // TYPESCRIPT - TIPOS BÁSICOS 
    {
        "profe": false,
        "unit": "TypeScript - Tipos Básicos",
        "diff": "easy",
        "q": "Define un tipo o interfaz en TypeScript para un objeto 'Usuario' con: id (number), nombre (string), email (string), y edad (number opcional).",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • id: number (obligatorio)<br>
            • nombre: string (obligatorio)<br>
            • email: string (obligatorio)<br>
            • edad: number (opcional)
            </div>
            </div>`,
        "opts": [
            "interface Usuario {\n  id: number;\n  nombre: string;\n  email: string;\n  edad?: number;\n}",
            "type Usuario = {\n  id: number;\n  nombre: string;\n  email: string;\n  edad: number | undefined;\n}",
            "type Usuario = {\n  id: number,\n  nombre: string,\n  email: string,\n  edad?: number\n}",
            "interface Usuario {\n  id: Number;\n  nombre: String;\n  email: String;\n  edad?: Number;\n}"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) interface Usuario, 2) id: number, nombre: string, email: string, 3) edad?: number (opcional). La B usa type (válido) pero edad: number | undefined (no es lo mismo que opcional). La C tiene sintaxis de objeto (debe usar ; o ,). La D usa Number/String (mayúsculas, que son objetos wrapper, no tipos primitivos)."
    },

    //  TYPESCRIPT - FUNCIONES 
    {
        "profe": false,
        "unit": "TypeScript - Funciones con Tipos",
        "diff": "medium",
        "q": "Escribe una función TypeScript que: 1) Reciba dos números, 2) Retorne la suma, 3) Tipifique correctamente los parámetros y el retorno.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • Función sumar(a, b)<br>
            • a: number<br>
            • b: number<br>
            • Retorno: number
            </div>
            </div>`,
        "opts": [
            "function sumar(a: number, b: number): number {\n  return a + b;\n}",
            "const sumar = (a: number, b: number): number => a + b;",
            "function sumar(a, b) {\n  return a + b;\n}",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las opciones A y B son correctas: 1) Función con parámetros tipados (a: number, b: number), 2) Retorno tipado (: number). La opción C es JavaScript puro (sin tipos). Las opciones A y B son TypeScript válido. La A usa function tradicional, la B usa arrow function."
    },

    //  TYPESCRIPT - INTERFACES AVANZADAS 
    {
        "profe": false,
        "unit": "TypeScript - Interfaces y Tipos Avanzados",
        "diff": "hard",
        "q": "Define una interfaz 'RespuestaAPI' que tenga: 1) status (string), 2) data (genérico T), 3) error (opcional), 4) timestamp (Date). Luego usa el tipo genérico.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • Interfaz RespuestaAPI<T><br>
            • status: string<br>
            • data: T<br>
            • error?: string<br>
            • timestamp: Date
            </div>
            </div>`,
        "opts": [
            "interface RespuestaAPI<T> {\n  status: string;\n  data: T;\n  error?: string;\n  timestamp: Date;\n}",
            "type RespuestaAPI<T> = {\n  status: string;\n  data: T;\n  error?: string;\n  timestamp: Date;\n};",
            "interface RespuestaAPI<T> {\n  status: string;\n  data: T;\n  error: string;\n  timestamp: Date;\n}",
            "Todas las anteriores son correctas."
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) interface RespuestaAPI<T>, 2) status: string, 3) data: T, 4) error?: string, 5) timestamp: Date. La B usa type (válido también). La C no tiene error opcional (obligatorio). La A es la más estándar para este caso."
    },

    //  HTML - SEMÁNTICA 
    {
        "profe": false,
        "unit": "HTML - Etiquetas Semánticas",
        "diff": "easy",
        "q": "¿Cuál de las siguientes NO es una etiqueta semántica de HTML5?",
        "opts": [
            "<article>",
            "<section>",
            "<div>",
            "<header>"
        ],
        "ans": 2,
        "exp": "Las etiquetas semánticas tienen significado estructural: <header>, <article>, <section>, <nav>, <aside>, <footer>. <div> es un contenedor genérico sin significado semántico."
    },
    {
        "profe": false,
        "unit": "HTML - Accesibilidad",
        "diff": "medium",
        "q": "¿Qué atributo se usa para proporcionar una descripción alternativa a una imagen?",
        "opts": [
            "title",
            "alt",
            "desc",
            "label"
        ],
        "ans": 1,
        "exp": "El atributo 'alt' (texto alternativo) es esencial para accesibilidad: describe la imagen para lectores de pantalla y se muestra si la imagen no carga."
    },

    //  CSS - MODELO DE CAJA 
    {
        "profe": false,
        "unit": "CSS - Box Model",
        "diff": "easy",
        "q": "¿Cuál es el orden correcto del modelo de caja en CSS (de adentro hacia afuera)?",
        "opts": [
            "content → padding → border → margin",
            "margin → border → padding → content",
            "content → border → padding → margin",
            "padding → content → border → margin"
        ],
        "ans": 0,
        "exp": "El modelo de caja es: 1) content (contenido), 2) padding (relleno), 3) border (borde), 4) margin (margen). De adentro hacia afuera: content → padding → border → margin."
    },
    {
        "profe": false,
        "unit": "CSS - Box Model",
        "diff": "hard",
        "q": "¿Qué propiedad cambia el comportamiento del box model para que el width incluya padding y border?",
        "opts": [
            "box-sizing: border-box",
            "box-model: border-box",
            "box-sizing: content-box",
            "box-model: content-box"
        ],
        "ans": 0,
        "exp": "box-sizing: border-box hace que el width total incluya padding y border. Es muy usado para layouts responsive. content-box es el valor por defecto."
    },

    //  CSS - PSEUDOCLASES 
    {
        "profe": false,
        "unit": "CSS - Pseudoclases",
        "diff": "medium",
        "q": "¿Qué pseudoclase CSS se usa para seleccionar el primer hijo de un elemento?",
        "opts": [
            ":first-child",
            ":first-of-type",
            ":nth-child(1)",
            ":nth-of-type(1)"
        ],
        "ans": 0,
        "exp": ":first-child selecciona el primer hijo de cualquier tipo. :first-of-type selecciona el primer hijo de un tipo específico. Ambos pueden ser correctos según el contexto."
    },
    {
        "profe": false,
        "unit": "CSS - Pseudoclases",
        "diff": "hard",
        "q": "¿Qué pseudoclase se usa para estilizar un elemento cuando el mouse pasa sobre él?",
        "opts": [
            ":hover",
            ":active",
            ":focus",
            ":target"
        ],
        "ans": 0,
        "exp": ":hover se activa cuando el mouse está sobre el elemento. :active es al hacer clic. :focus es al tener el foco (ej. inputs). :target es para anclas en URL."
    },

    //  CSS - TRANSICIONES 
    {
        "profe": false,
        "unit": "CSS - Transiciones",
        "diff": "medium",
        "q": "Escribe el CSS para que un botón cambie su color de fondo de azul a rojo en 0.5 segundos al hacer hover.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color:#569cd6;">Requisitos:</strong><br>
            • Selector: .boton<br>
            • Color inicial: blue<br>
            • Hover: red<br>
            • Duración: 0.5s
            </div>
            </div>`,
        "opts": [
            ".boton {\n  background: blue;\n  transition: background 0.5s;\n}\n.boton:hover {\n  background: red;\n}",
            ".boton {\n  background: blue;\n}\n.boton:hover {\n  background: red;\n  transition: background 0.5s;\n}",
            ".boton {\n  background: blue;\n  transition: all 0.5s;\n}\n.boton:hover {\n  background: red;\n}",
            ".boton {\n  background: blue;\n  transition: background 0.5s ease;\n}\n.boton:hover {\n  background: red;\n}"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) background inicial, 2) transition en el estado normal (no en hover), 3) hover con el nuevo color. La B tiene transition en hover (se aplica solo al salir). La C usa all (válido pero menos específico)."
    },

    //  CSS - VARIABLES 
    {
        "profe": false,
        "unit": "CSS - Variables (Custom Properties)",
        "diff": "medium",
        "q": "Escribe el CSS para definir una variable '--color-principal' con valor '#3498db' y usarla en el fondo de un elemento .caja.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • :root { --color-principal: #3498db; }<br>
            • .caja { background: var(--color-principal); }
            </div>
            </div>`,
        "opts": [
            ":root { --color-principal: #3498db; }\n.caja { background: var(--color-principal); }",
            ":root { color-principal: #3498db; }\n.caja { background: var(--color-principal); }",
            "$color-principal: #3498db;\n.caja { background: $color-principal; }",
            "@color-principal: #3498db;\n.caja { background: @color-principal; }"
        ],
        "ans": 0,
        "exp": "CSS usa --nombre-variable y var(--nombre). Las opciones C y D son de preprocesadores (Sass/Less), no CSS nativo."
    },

    //  JAVASCRIPT - FUNCIONES 
    {
        "profe": false,
        "unit": "JavaScript - Funciones y Ámbito",
        "diff": "medium",
        "q": "¿Cuál es la salida del siguiente código? var x = 10; function test() { console.log(x); var x = 20; } test();",
        "opts": [
            "10",
            "20",
            "undefined",
            "Error"
        ],
        "ans": 2,
        "exp": "Por hoisting, var x se declara dentro de la función pero no se asigna hasta después del console.log. La variable existe pero es undefined en ese momento. Se conoce como 'Temporal Dead Zone' para let/const."
    },
    {
        "profe": false,
        "unit": "JavaScript - Funciones Flecha",
        "diff": "easy",
        "q": "¿Cuál es la diferencia principal entre una función normal y una función flecha (arrow function)?",
        "opts": [
            "Las arrow functions no tienen su propio 'this'",
            "Las arrow functions no pueden tener parámetros",
            "Las arrow functions no pueden retornar valores",
            "No hay diferencia"
        ],
        "ans": 0,
        "exp": "Las arrow functions heredan el 'this' del contexto donde son definidas. Las funciones normales tienen su propio 'this' (dinámico)."
    },

    //  JAVASCRIPT - DESTRUCTURING 
    {
        "profe": false,
        "unit": "JavaScript - Destructuring",
        "diff": "easy",
        "q": "Dado el objeto 'user = { nombre: \"Ana\", edad: 25 }', usa destructuring para extraer nombre y edad en variables.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Objeto:</strong><br>
            const user = { nombre: "Ana", edad: 25 };
            </div>
            </div>`,
        "opts": [
            "const { nombre, edad } = user;",
            "const nombre = user.nombre; const edad = user.edad;",
            "const [nombre, edad] = user;",
            "const { nombre: nombre, edad: edad } = user;"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta de object destructuring es const { nombre, edad } = user;. Las opciones A y D son correctas, pero A es la más concisa."
    },
    {
        "profe": false,
        "unit": "JavaScript - Spread Operator",
        "diff": "medium",
        "q": "Dado el array 'arr1 = [1, 2, 3]', usa spread operator para crear un nuevo array 'arr2' que contenga [1, 2, 3, 4, 5].",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Array:</strong><br>
            const arr1 = [1, 2, 3];
            </div>
            </div>`,
        "opts": [
            "const arr2 = [...arr1, 4, 5];",
            "const arr2 = [arr1, 4, 5];",
            "const arr2 = arr1.concat([4, 5]);",
            "const arr2 = [4, 5, ...arr1];"
        ],
        "ans": 0,
        "exp": "Spread operator (...) expande el array arr1 dentro del nuevo array. La opción C es válida pero no usa spread. La opción D crearía [4, 5, 1, 2, 3]."
    },

    //  JAVASCRIPT - PROMESAS 
    {
        "profe": false,
        "unit": "JavaScript - Promesas y Async/Await",
        "diff": "hard",
        "q": "Escribe una función async que: 1) Espere 1 segundo, 2) Retorne '¡Listo!', 3) Maneje errores.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • async function miFuncion()<br>
            • await setTimeout (usar promesa)<br>
            • Retornar '¡Listo!'<br>
            • try/catch
            </div>
            </div>`,
        "opts": [
            "function esperar(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\nasync function miFuncion() {\n  try {\n    await esperar(1000);\n    return '¡Listo!';\n  } catch (error) {\n    console.error(error);\n  }\n}",
            "async function miFuncion() {\n  setTimeout(() => {\n    return '¡Listo!';\n  }, 1000);\n}",
            "function miFuncion() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve('¡Listo!'), 1000);\n  });\n}",
            "async function miFuncion() {\n  await new Promise(resolve => setTimeout(resolve, 1000));\n  return '¡Listo!';\n}"
        ],
        "ans": 0,
        "exp": "La opción A es correcta y completa: 1) función esperar que retorna una promesa, 2) async function con try/catch, 3) await esperar(1000), 4) return '¡Listo!'. La D también funciona pero no maneja errores."
    },

    //  JAVASCRIPT - CLASES 
    {
        "profe": false,
        "unit": "JavaScript - Clases y Herencia",
        "diff": "hard",
        "q": "Crea una clase 'Perro' que herede de 'Animal'. Perro debe tener: 1) Método 'ladrar()', 2) Sobrescribir el método 'sonido()'.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Clase base:</strong><br>
            class Animal {\n  constructor(nombre) {\n    this.nombre = nombre;\n  }\n  sonido() {\n    return 'Hace un sonido';\n  }\n}
            </div>
            </div>`,
        "opts": [
            "class Perro extends Animal {\n  ladrar() {\n    return '¡Guau!';\n  }\n  sonido() {\n    return '¡Guau guau!';\n  }\n}",
            "class Perro extends Animal {\n  constructor(nombre) {\n    super(nombre);\n  }\n  ladrar() {\n    return '¡Guau!';\n  }\n  sonido() {\n    return super.sonido() + ' ¡Guau!';\n  }\n}",
            "class Perro {\n  constructor(nombre) {\n    this.nombre = nombre;\n  }\n  ladrar() {\n    return '¡Guau!';\n  }\n}",
            "Perro.prototype = Object.create(Animal.prototype);\nPerro.prototype.ladrar = function() { return '¡Guau!'; };"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) extends Animal, 2) ladrar() método propio, 3) sonido() sobrescribe. La B usa super.sonido() (válido pero no requerido). La C no extiende Animal. La D es herencia prototipal (válida pero no usa class)."
    },

    //  REACT - HOOKS AVANZADOS 
    {
        "profe": false,
        "unit": "React - Hooks Avanzados (useEffect)",
        "diff": "hard",
        "q": "¿Cuál es el propósito del array de dependencias en useEffect?",
        "opts": [
            "Indica cuándo debe ejecutarse el efecto",
            "Define el orden de ejecución de los efectos",
            "Configura el tiempo de espera del efecto",
            "No tiene propósito, es opcional"
        ],
        "ans": 0,
        "exp": "El array de dependencias controla cuándo se ejecuta useEffect. Si está vacío [], solo se ejecuta al montar. Si tiene variables, se ejecuta cuando cambian."
    },
    {
        "profe": false,
        "unit": "React - useMemo y useCallback",
        "diff": "hard",
        "q": "¿Cuál es la diferencia entre useMemo y useCallback?",
        "opts": [
            "useMemo memoiza valores, useCallback memoiza funciones",
            "useCallback memoiza valores, useMemo memoiza funciones",
            "Son exactamente iguales",
            "useMemo se usa para props, useCallback para state"
        ],
        "ans": 0,
        "exp": "useMemo retorna un valor memoizado (ej. resultado de cálculo pesado). useCallback retorna una función memoizada (evita recrearla en cada render)."
    },
    {
        "profe": false,
        "unit": "React - Context API",
        "diff": "hard",
        "q": "Escribe el código para crear un Context en React que provea un tema (claro/oscuro) a componentes hijos.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • Crear contexto con createContext<br>
            • Valor inicial: 'light'<br>
            • Provider en App<br>
            • Consumir en componente hijo
            </div>
            </div>`,
        "opts": [
            "const TemaContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <TemaContext.Provider value=\"dark\">\n      <ComponenteHijo />\n    </TemaContext.Provider>\n  );\n}\n\nfunction ComponenteHijo() {\n  const tema = React.useContext(TemaContext);\n  return <div>{tema}</div>;\n}",
            "const TemaContext = React.createContext();\n\nfunction App() {\n  return (\n    <TemaContext value=\"dark\">\n      <ComponenteHijo />\n    </TemaContext>\n  );\n}\n\nfunction ComponenteHijo() {\n  const tema = React.useContext(TemaContext);\n  return <div>{tema}</div>;\n}",
            "const TemaContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <TemaContext.Provider value=\"dark\">\n      <ComponenteHijo />\n    </TemaContext.Provider>\n  );\n}\n\nfunction ComponenteHijo() {\n  return <TemaContext.Consumer>\n    {tema => <div>{tema}</div>}\n  </TemaContext.Consumer>;\n}",
            "const { Provider, Consumer } = React.createContext('light');"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) createContext, 2) Provider con value, 3) useContext en el hijo. La C también es válida pero usa Consumer (más antiguo). La A es la más moderna y común."
    },

    //  REACT - RENDER CONDICIONAL 
    {
        "profe": false,
        "unit": "React - Render Condicional",
        "diff": "easy",
        "q": "¿Cuál es la forma correcta de renderizar condicionalmente un componente en React?",
        "opts": [
            "{ condicion && <Componente /> }",
            "{ if(condicion) <Componente /> }",
            "{ condicion ? <Componente /> : null }",
            "Las opciones A y C son correctas"
        ],
        "ans": 3,
        "exp": "Ambas son válidas: A) short-circuit (condicion && <Componente />) para mostrar u ocultar, C) operador ternario para mostrar uno u otro (o null)."
    },

    //  REACT - LISTAS Y KEYS 
    {
        "profe": false,
        "unit": "React - Listas y Keys",
        "diff": "medium",
        "q": "¿Por qué es importante la prop 'key' al renderizar listas en React?",
        "opts": [
            "Ayuda a React a identificar qué elementos cambiaron",
            "Es requerida para estilos CSS",
            "Define el orden de renderizado",
            "No es importante, es solo una buena práctica"
        ],
        "ans": 0,
        "exp": "La 'key' ayuda a React a identificar elementos únicos en la lista. Permite optimizar el renderizado (reconcilación) y evitar errores con el estado interno de componentes."
    },

    //  VUE.JS - CICLO DE VIDA 
    {
        "profe": false,
        "unit": "Vue.js - Ciclo de Vida",
        "diff": "medium",
        "q": "¿Cuál es el orden correcto de los hooks del ciclo de vida en Vue.js?",
        "opts": [
            "created → mounted → updated → destroyed",
            "mounted → created → updated → destroyed",
            "created → updated → mounted → destroyed",
            "mounted → updated → created → destroyed"
        ],
        "ans": 0,
        "exp": "El orden correcto es: beforeCreate → created → beforeMount → mounted → beforeUpdate → updated → beforeDestroy → destroyed."
    },

    //  VUE.JS - COMPONENTES 
    {
        "profe": false,
        "unit": "Vue.js - Comunicación entre Componentes",
        "diff": "hard",
        "q": "¿Cómo se emite un evento desde un componente hijo al padre en Vue.js?",
        "opts": [
            "this.$emit('evento', dato)",
            "this.emit('evento', dato)",
            "this.send('evento', dato)",
            "this.$dispatch('evento', dato)"
        ],
        "ans": 0,
        "exp": "this.$emit('evento', dato) es el método correcto. El padre escucha con @evento=\"metodo\"."
    },

    //  ANGULAR - COMPONENTES 
    {
        "profe": false,
        "unit": "Angular - Componentes y Decoradores",
        "diff": "medium",
        "q": "¿Qué decorador se usa para definir un componente en Angular?",
        "opts": [
            "@Component",
            "@Directive",
            "@NgModule",
            "@Injectable"
        ],
        "ans": 0,
        "exp": "@Component es el decorador que convierte una clase en un componente de Angular. @Directive es para directivas, @NgModule para módulos, @Injectable para servicios."
    },

    {
        "profe": false,
        "unit": "Angular - Data Binding",
        "diff": "medium",
        "q": "¿Cuál es la sintaxis correcta para el two-way data binding en Angular?",
        "opts": [
            "[(ngModel)]",
            "[ngModel]",
            "(ngModel)",
            "{{ ngModel }}"
        ],
        "ans": 0,
        "exp": "[(ngModel)] es la sintaxis 'banana in a box' para two-way data binding. [ ] es property binding, ( ) es event binding."
    },

    {
        "profe": false,
        "unit": "Angular - Directivas",
        "diff": "easy",
        "q": "¿Qué directiva se usa para iterar listas en Angular?",
        "opts": [
            "*ngFor",
            "ngFor",
            "ng-repeat",
            "v-for"
        ],
        "ans": 0,
        "exp": "*ngFor es la directiva estructural para iterar listas. ng-repeat es de AngularJS (v1). v-for es de Vue.js."
    },

    //  TYPESCRIPT - ENUMS 
    {
        "profe": false,
        "unit": "TypeScript - Enums",
        "diff": "easy",
        "q": "Define un enum 'Color' con los valores: Rojo, Verde, Azul.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • enum Color { Rojo, Verde, Azul }
            </div>
            </div>`,
        "opts": [
            "enum Color { Rojo, Verde, Azul }",
            "enum Color = { Rojo, Verde, Azul }",
            "const Color = { Rojo, Verde, Azul }",
            "type Color = 'Rojo' | 'Verde' | 'Azul'"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta es 'enum Color { Rojo, Verde, Azul }'. La D es un union type (válido pero no es enum)."
    },

    //  TYPESCRIPT - GENERICS 
    {
        "profe": false,
        "unit": "TypeScript - Genéricos",
        "diff": "hard",
        "q": "Escribe una función genérica 'identidad' que reciba un argumento y lo retorne, preservando el tipo.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • function identidad<T>(arg: T): T
            </div>
            </div>`,
        "opts": [
            "function identidad<T>(arg: T): T { return arg; }",
            "function identidad(arg: any): any { return arg; }",
            "function identidad<T>(arg: T) { return arg; }",
            "function identidad<T>(arg: T): any { return arg; }"
        ],
        "ans": 0,
        "exp": "La función genérica correcta es 'function identidad<T>(arg: T): T { return arg; }'. La A preserva el tipo en el retorno, las otras no."
    },

    //  SASS - VARIABLES 
    {
        "profe": false,
        "unit": "Sass - Variables y Anidamiento",
        "diff": "easy",
        "q": "¿Cuál es la sintaxis correcta para definir una variable en Sass?",
        "opts": [
            "$color: blue;",
            "@color: blue;",
            "--color: blue;",
            "var(--color): blue;"
        ],
        "ans": 0,
        "exp": "Sass usa $ para variables. @color es Less. --color es CSS nativo. var(--color) es para usar variables CSS."
    },

    {
        "profe": false,
        "unit": "Sass - Anidamiento",
        "diff": "medium",
        "q": "Convierte este CSS anidado a Sass: .menu { .item { color: red; } }",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Escribe en Sass:</strong>
            </div>
            </div>`,
        "opts": [
            ".menu {\n  .item {\n    color: red;\n  }\n}",
            ".menu .item {\n  color: red;\n}",
            ".menu { .item { color: red; } }",
            ".menu .item { color: red; }"
        ],
        "ans": 0,
        "exp": "La opción A es la sintaxis de anidamiento en Sass. La B y D son CSS plano. La A es la respuesta correcta por usar anidamiento."
    },

    //  TAILWIND CSS 
    {
        "profe": false,
        "unit": "Tailwind CSS - Utility Classes",
        "diff": "easy",
        "q": "¿Qué clase de Tailwind CSS se usa para centrar texto?",
        "opts": [
            "text-center",
            "text-align-center",
            "center",
            "text-middle"
        ],
        "ans": 0,
        "exp": "Tailwind usa 'text-center' para centrar texto horizontalmente. Las clases son utilitarias y prefijadas (text-, bg-, p-, m-, etc.)."
    },

    {
        "profe": false,
        "unit": "Tailwind CSS - Responsive",
        "diff": "medium",
        "q": "¿Cuál es la sintaxis correcta para aplicar un estilo solo en pantallas pequeñas (sm) en Tailwind?",
        "opts": [
            "sm:text-center",
            "text-center:sm",
            "text-sm-center",
            "center-sm"
        ],
        "ans": 0,
        "exp": "Tailwind usa prefijos de breakpoint: sm: para small (640px), md: (768px), lg: (1024px), xl: (1280px)."
    },

    //  WEBPACK - BUNDLING 
    {
        "profe": false,
        "unit": "Webpack - Configuración Básica",
        "diff": "hard",
        "q": "¿Qué loader se usa en Webpack para procesar archivos CSS?",
        "opts": [
            "css-loader y style-loader",
            "file-loader y url-loader",
            "babel-loader",
            "sass-loader"
        ],
        "ans": 0,
        "exp": "css-loader interpreta importaciones en CSS, style-loader inyecta CSS en el DOM. babel-loader es para JS, sass-loader para Sass."
    },

    //  NPM - DEPENDENCIAS 
    {
        "profe": false,
        "unit": "NPM - Gestión de Paquetes",
        "diff": "easy",
        "q": "¿Cuál es el comando para instalar una dependencia de desarrollo en NPM?",
        "opts": [
            "npm install --save-dev [paquete]",
            "npm install [paquete]",
            "npm install --global [paquete]",
            "npm install --prod [paquete]"
        ],
        "ans": 0,
        "exp": "--save-dev instala en devDependencies (para desarrollo). --global instala globalmente. --prod instala solo dependencias de producción."
    },

    {
        "profe": false,
        "unit": "NPM - Scripts",
        "diff": "medium",
        "q": "¿Cómo se ejecuta un script definido en package.json?",
        "opts": [
            "npm run [nombre]",
            "npm start [nombre]",
            "npm exec [nombre]",
            "npm script [nombre]"
        ],
        "ans": 0,
        "exp": "npm run [nombre] es el comando estándar. 'npm start' es un atajo para 'npm run start'. 'npm test' es otro atajo."
    },

    //  JEST - TESTING 
    {
        "profe": false,
        "unit": "Jest - Pruebas Unitarias",
        "diff": "medium",
        "q": "Escribe un test en Jest para una función 'sumar(a, b)' que retorna a + b.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Función:</strong><br>
            function sumar(a, b) { return a + b; }
            </div>
            </div>`,
        "opts": [
            "test('sumar 2 + 3 = 5', () => {\n  expect(sumar(2, 3)).toBe(5);\n});",
            "test('sumar', () => {\n  expect(sumar(2, 3)).toEqual(5);\n});",
            "describe('sumar', () => {\n  it('suma 2 + 3 = 5', () => {\n    expect(sumar(2, 3)).toBe(5);\n  });\n});",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son válidas en Jest: 1) test() con toBe(), 2) toEqual() (también funciona para números), 3) describe() con it(). toBe() vs toEqual(): toBe es para valores primitivos, toEqual para objetos."
    },

    //  CYPRESS - E2E TESTING 
    {
        "profe": false,
        "unit": "Cypress - Testing E2E",
        "diff": "hard",
        "q": "Escribe un test en Cypress que: 1) Visite una página, 2) Encuentre un input con id 'email', 3) Escriba 'test@mail.com', 4) Haga clic en un botón 'Enviar'.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • cy.visit('/')\n• cy.get('#email').type('test@mail.com')\n• cy.get('button').click()
            </div>
            </div>`,
        "opts": [
            "describe('Formulario', () => {\n  it('envía email', () => {\n    cy.visit('/');\n    cy.get('#email').type('test@mail.com');\n    cy.get('button').click();\n  });\n});",
            "cy.visit('/');\ncy.get('#email').type('test@mail.com');\ncy.get('button').click();",
            "test('Formulario', () => {\n  cy.visit('/');\n  cy.get('#email').type('test@mail.com');\n  cy.get('button').click();\n});",
            "describe('Formulario', () => {\n  cy.visit('/');\n  cy.get('#email').type('test@mail.com');\n  cy.get('button').click();\n});"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) describe() e it() para estructura, 2) cy.visit() para navegar, 3) cy.get() con selector, 4) type() y click(). La opción B es válida pero sin estructura describe/it. La D usa describe sin it (sintaxis incorrecta)."
    },

    //  NEXt.js - RENDERING 
    {
        "profe": false,
        "unit": "Next.js - SSR y SSG",
        "diff": "medium",
        "q": "¿Cuál es la diferencia entre getStaticProps y getServerSideProps en Next.js?",
        "opts": [
            "getStaticProps genera en build, getServerSideProps genera en cada request",
            "getServerSideProps genera en build, getStaticProps genera en cada request",
            "Ambos generan en cada request",
            "Ambos generan en build"
        ],
        "ans": 0,
        "exp": "getStaticProps genera HTML en tiempo de build (Static Site Generation), getServerSideProps genera en cada request (Server Side Rendering)."
    },
    {
        "profe": false,
        "unit": "Next.js - Rutas",
        "diff": "easy",
        "q": "¿Qué archivo se usa para crear una ruta dinámica en Next.js (ej. /post/123)?",
        "opts": [
            "[id].js o [slug].js",
            "post/[id].js",
            "post-id.js",
            "post.js"
        ],
        "ans": 0,
        "exp": "Next.js usa corchetes para rutas dinámicas: [id].js, [slug].js, etc. También se puede anidar: post/[id].js"
    },

    //  GIT - COMANDOS AVANZADOS 
    {
        "profe": false,
        "unit": "Git - Rebase y Merge",
        "diff": "hard",
        "q": "¿Cuál es la diferencia entre 'git merge' y 'git rebase'?",
        "opts": [
            "merge crea un commit de fusión, rebase reescribe el historial",
            "rebase crea un commit de fusión, merge reescribe el historial",
            "Ambos hacen lo mismo",
            "merge solo funciona con ramas remotas"
        ],
        "ans": 0,
        "exp": "merge preserva el historial con un commit de fusión. rebase reescribe el historial, moviendo commits para que parezca lineal. rebase es más limpio pero peligroso en ramas compartidas."
    },
    {
        "profe": false,
        "unit": "Git - Stash",
        "diff": "medium",
        "q": "¿Qué comando se usa para guardar cambios sin commitear y cambiar de rama?",
        "opts": [
            "git stash",
            "git save",
            "git store",
            "git temporary"
        ],
        "ans": 0,
        "exp": "git stash guarda cambios no commiteados para luego recuperarlos. Útil para cambios de rama sin perder trabajo."
    },

    //  GITHUB ACTIONS - CI/CD 
    {
        "profe": false,
        "unit": "GitHub Actions - CI/CD",
        "diff": "hard",
        "q": "Escribe un workflow de GitHub Actions que ejecute tests en cada push a la rama main.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • on: push a main<br>
            • jobs: test<br>
            • steps: checkout, setup-node, npm install, npm test
            </div>
            </div>`,
        "opts": [
            "name: CI\non:\n  push:\n    branches: [ main ]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v2\n      with:\n        node-version: '18'\n    - run: npm install\n    - run: npm test",
            "name: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - run: npm test",
            "on: push to main\njobs:\n  test:\n    steps:\n    - checkout\n    - npm install\n    - npm test",
            "workflow:\n  name: CI\n  on: push\n  jobs:\n    test:\n      steps:\n      - uses: actions/checkout@v2"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) name, 2) on: push: branches: [main], 3) jobs con runs-on, 4) steps con checkout, setup-node, npm install y npm test."
    },

    //  PERFORMANCE - WEB VITALS 
    {
        "profe": false,
        "unit": "Performance - Core Web Vitals",
        "diff": "medium",
        "q": "¿Cuáles son las Core Web Vitals de Google?",
        "opts": [
            "LCP, FID, CLS",
            "TTI, TBT, FCP",
            "LCP, TTI, CLS",
            "FCP, FID, TBT"
        ],
        "ans": 0,
        "exp": "Core Web Vitals son: LCP (Largest Contentful Paint - carga), FID (First Input Delay - interactividad), CLS (Cumulative Layout Shift - estabilidad visual)."
    },

    //  SEO - METADATOS 
    {
        "profe": false,
        "unit": "SEO - Metadatos Básicos",
        "diff": "easy",
        "q": "¿Qué etiqueta HTML se usa para la descripción de una página para SEO?",
        "opts": [
            "<meta name='description' content='...'>",
            "<meta name='keywords' content='...'>",
            "<meta property='og:description' content='...'>",
            "<meta name='title' content='...'>"
        ],
        "ans": 0,
        "exp": "<meta name='description' content='...'> es la etiqueta principal de descripción para SEO. og:description es para Open Graph (redes sociales)."
    },

    //  HTTP - MÉTODOS Y CÓDIGOS 
    {
        "profe": false,
        "unit": "HTTP - Métodos y Códigos",
        "diff": "medium",
        "q": "¿Qué código HTTP indica que la solicitud fue exitosa (GET/POST)?",
        "opts": [
            "200 OK",
            "201 Created",
            "204 No Content",
            "Todos los anteriores son códigos de éxito"
        ],
        "ans": 3,
        "exp": "200 OK (GET), 201 Created (POST), 204 No Content (DELETE) son todos códigos de éxito (2xx)."
    },
    {
        "profe": false,
        "unit": "HTTP - Métodos y Códigos",
        "diff": "easy",
        "q": "¿Qué método HTTP se usa para actualizar un recurso existente?",
        "opts": [
            "PUT",
            "POST",
            "GET",
            "DELETE"
        ],
        "ans": 0,
        "exp": "PUT actualiza un recurso existente (o lo crea si no existe). POST crea un nuevo recurso. GET obtiene. DELETE elimina."
    },

    //  RENDIMIENTO - LAZY LOADING 
    {
        "profe": false,
        "unit": "Rendimiento - Lazy Loading",
        "diff": "medium",
        "q": "¿Qué atributo se usa en HTML para cargar imágenes solo cuando son visibles en el viewport?",
        "opts": [
            "loading='lazy'",
            "defer",
            "async",
            "lazy"
        ],
        "ans": 0,
        "exp": "loading='lazy' es el atributo HTML5 para carga diferida de imágenes. async y defer son para scripts."
    },

    //  WEB COMPONENTS 
    {
        "profe": false,
        "unit": "Web Components - Custom Elements",
        "diff": "hard",
        "q": "Escribe un Custom Element llamado 'mi-boton' que muestre un botón con texto 'Click me'.",
        "extra": `
            <div class="extra-content">
            <div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
            <strong style="color="#569cd6;">Requisitos:</strong><br>
            • class MiBoton extends HTMLElement<br>
            • connectedCallback()<br>
            • innerHTML = '<button>Click me</button>'<br>
            • customElements.define('mi-boton', MiBoton)
            </div>
            </div>`,
        "opts": [
            "class MiBoton extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = '<button>Click me</button>';\n  }\n}\ncustomElements.define('mi-boton', MiBoton);",
            "class MiBoton {\n  constructor() {\n    this.innerHTML = '<button>Click me</button>';\n  }\n}\ncustomElements.define('mi-boton', MiBoton);",
            "customElements.define('mi-boton', class extends HTMLElement {\n  connectedCallback() {\n    this.textContent = 'Click me';\n  }\n});",
            "HTMLElement.extend('mi-boton', {\n  connectedCallback() {\n    this.innerHTML = '<button>Click me</button>';\n  }\n});"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: 1) class MiBoton extends HTMLElement, 2) connectedCallback(), 3) this.innerHTML, 4) customElements.define(). La C también es válida pero usa clase anónima."
    },

    //  SERVICE WORKERS 
    {
        "profe": false,
        "unit": "Service Workers - PWA",
        "diff": "hard",
        "q": "¿Qué evento se usa para instalar un Service Worker?",
        "opts": [
            "install",
            "activate",
            "fetch",
            "message"
        ],
        "ans": 0,
        "exp": "El evento 'install' se dispara cuando el Service Worker se instala. 'activate' se dispara después de instalar. 'fetch' maneja solicitudes de red."
    },



    // 
    // BLOQUE: FRONTEND - HTML, CSS, JAVASCRIPT, REACT, VUE, ETC.
    // 



    //  HTML - BÁSICO 
    {
        "profe": false,
        "unit": "HTML - Estructura",
        "diff": "easy",
        "q": "¿Cuál es la etiqueta correcta para el título de una página web que aparece en la pestaña del navegador?",
        "opts": [
            "<title>",
            "<head>",
            "<header>",
            "<h1>"
        ],
        "ans": 0,
        "exp": "<title> define el título de la página en la pestaña del navegador. <head> contiene metadatos, <header> es el encabezado de la página, <h1> es el encabezado principal visible."
    },
    {
        "profe": false,
        "unit": "HTML - Enlaces",
        "diff": "easy",
        "q": "¿Qué atributo se usa en <a> para abrir un enlace en una nueva pestaña?",
        "opts": [
            "target='_blank'",
            "target='_new'",
            "rel='external'",
            "open='new'"
        ],
        "ans": 0,
        "exp": "target='_blank' abre el enlace en una nueva pestaña. target='_self' es el valor por defecto (misma pestaña)."
    },
    {
        "profe": false,
        "unit": "HTML - Listas",
        "diff": "easy",
        "q": "¿Qué etiqueta se usa para crear una lista ordenada (numerada)?",
        "opts": [
            "<ol>",
            "<ul>",
            "<li>",
            "<dl>"
        ],
        "ans": 0,
        "exp": "<ol> = Ordered List (numerada). <ul> = Unordered List (con viñetas). <li> = List Item. <dl> = Description List."
    },
    {
        "profe": false,
        "unit": "HTML - Tablas",
        "diff": "medium",
        "q": "¿Qué etiqueta se usa para el encabezado de una tabla en HTML?",
        "opts": [
            "<th>",
            "<td>",
            "<thead>",
            "<tr>"
        ],
        "ans": 0,
        "exp": "<th> = Table Header (celda de encabezado). <td> = Table Data (celda normal). <thead> = agrupa filas de encabezado. <tr> = Table Row (fila)."
    },

    //  CSS - BÁSICO 
    {
        "profe": false,
        "unit": "CSS - Sintaxis",
        "diff": "easy",
        "q": "¿Cuál es la forma correcta de aplicar un color de fondo azul a un elemento con clase 'caja'?",
        "opts": [
            ".caja { background-color: blue; }",
            "#caja { background-color: blue; }",
            "caja { background: blue; }",
            ".caja { background: blue; }"
        ],
        "ans": 0,
        "exp": "Las opciones A y D son correctas (background-color y background son válidos). La más específica es background-color."
    },
    {
        "profe": false,
        "unit": "CSS - Unidades",
        "diff": "medium",
        "q": "¿Cuál es la diferencia entre px, em y rem en CSS?",
        "opts": [
            "px es absoluto, em es relativo al padre, rem es relativo al root",
            "px es relativo, em es absoluto, rem es relativo al padre",
            "px es relativo al root, em es absoluto, rem es relativo al padre",
            "Todos son unidades absolutas"
        ],
        "ans": 0,
        "exp": "px = fijo (píxeles). em = relativo al tamaño de fuente del elemento padre. rem = relativo al tamaño de fuente del root (html)."
    },

    {
        "profe": false,
        "unit": "CSS - Display",
        "diff": "easy",
        "q": "¿Qué valor de display hace que un elemento ocupe todo el ancho disponible?",
        "opts": [
            "block",
            "inline",
            "inline-block",
            "flex"
        ],
        "ans": 0,
        "exp": "display: block ocupa todo el ancho disponible. inline solo ocupa el espacio del contenido. inline-block ocupa el contenido pero permite width/height."
    },
    {
        "profe": false,
        "unit": "CSS - Position",
        "diff": "medium",
        "q": "¿Qué valor de position posiciona un elemento relativo a su contenedor más cercano con position no-static?",
        "opts": [
            "absolute",
            "fixed",
            "relative",
            "sticky"
        ],
        "ans": 0,
        "exp": "position: absolute se posiciona relativo al contenedor más cercano con position diferente de static. fixed relativo al viewport. relative relativo a su posición normal."
    },

    //  CSS - RESPONSIVE 
    {
        "profe": false,
        "unit": "CSS - Media Queries",
        "diff": "medium",
        "q": "¿Cuál es la sintaxis correcta para una media query que aplica en pantallas de hasta 768px?",
        "opts": [
            "@media (max-width: 768px)",
            "@media (min-width: 768px)",
            "@media (width: 768px)",
            "@media (max-device-width: 768px)"
        ],
        "ans": 0,
        "exp": "max-width: 768px significa 'hasta 768px' (móviles/tablets). min-width es 'desde 768px' (desktop)."
    },
    {
        "profe": false,
        "unit": "CSS - Flexbox",
        "diff": "hard",
        "q": "¿Qué propiedad de Flexbox se usa para alinear elementos en el eje transversal (vertical en row)?",
        "opts": [
            "align-items",
            "justify-content",
            "align-content",
            "flex-direction"
        ],
        "ans": 0,
        "exp": "align-items alinea en el eje transversal (vertical en row, horizontal en column). justify-content alinea en el eje principal."
    },
    {
        "profe": false,
        "unit": "CSS - Grid",
        "diff": "hard",
        "q": "¿Qué propiedad de CSS Grid define el tamaño de las filas?",
        "opts": [
            "grid-template-rows",
            "grid-template-columns",
            "grid-auto-rows",
            "row-gap"
        ],
        "ans": 0,
        "exp": "grid-template-rows define el tamaño de las filas explícitas. grid-auto-rows define el tamaño de filas automáticas (implícitas)."
    },

    //  JAVASCRIPT - BÁSICO 
    {
        "profe": false,
        "unit": "JavaScript - Variables",
        "diff": "easy",
        "q": "¿Cuál es la diferencia principal entre let, const y var?",
        "opts": [
            "let y const tienen ámbito de bloque, var tiene ámbito de función",
            "var y let tienen ámbito de bloque, const tiene ámbito global",
            "Todos tienen ámbito de bloque",
            "const no se puede reasignar, var y let sí"
        ],
        "ans": 0,
        "exp": "let y const tienen scope de bloque (dentro de {}). var tiene scope de función. const no se puede reasignar."
    },
    {
        "profe": false,
        "unit": "JavaScript - Tipos de Datos",
        "diff": "easy",
        "q": "¿Cuál es el resultado de typeof null en JavaScript?",
        "opts": [
            "'object'",
            "'null'",
            "'undefined'",
            "'number'"
        ],
        "ans": 0,
        "exp": "typeof null retorna 'object' debido a un bug histórico de JavaScript que no se puede corregir por compatibilidad."
    },
    {
        "profe": false,
        "unit": "JavaScript - Comparaciones",
        "diff": "medium",
        "q": "¿Cuál es la diferencia entre == y === en JavaScript?",
        "opts": [
            "== compara valor con coerción de tipos, === compara valor y tipo",
            "== compara valor y tipo, === compara solo valor",
            "Son iguales",
            "=== compara con coerción, == compara sin coerción"
        ],
        "ans": 0,
        "exp": "== (igualdad abstracta) convierte los tipos antes de comparar. === (igualdad estricta) compara valor y tipo sin coerción."
    },
    {
        "profe": false,
        "unit": "JavaScript - Arrays",
        "diff": "medium",
        "q": "¿Qué método de array agrega uno o más elementos al final y retorna la nueva longitud?",
        "opts": [
            "push()",
            "pop()",
            "unshift()",
            "concat()"
        ],
        "ans": 0,
        "exp": "push() agrega al final y retorna la nueva longitud. pop() elimina y retorna el último. unshift() agrega al inicio. concat() une arrays."
    },
    {
        "profe": false,
        "unit": "JavaScript - Objetos",
        "diff": "medium",
        "q": "¿Cómo se accede a la propiedad 'nombre' del objeto 'persona'?",
        "opts": [
            "persona.nombre o persona['nombre']",
            "persona->nombre",
            "persona[0]",
            "persona.nombre()"
        ],
        "ans": 0,
        "exp": "Se accede con notación de punto (persona.nombre) o con corchetes (persona['nombre'])."
    },
    {
        "profe": false,
        "unit": "JavaScript - Funciones",
        "diff": "easy",
        "q": "¿Qué es una función de callback en JavaScript?",
        "opts": [
            "Una función pasada como argumento a otra función",
            "Una función que se ejecuta automáticamente",
            "Una función que retorna otra función",
            "Una función que no tiene nombre"
        ],
        "ans": 0,
        "exp": "Una callback es una función que se pasa como argumento a otra función y se ejecuta después de completar una operación."
    },

    //  JAVASCRIPT - AVANZADO 
    {
        "profe": false,
        "unit": "JavaScript - Closure",
        "diff": "hard",
        "q": "¿Qué es un closure en JavaScript?",
        "opts": [
            "Una función que recuerda el ámbito donde fue creada",
            "Una función que se ejecuta inmediatamente",
            "Una función que no retorna nada",
            "Un tipo de variable global"
        ],
        "ans": 0,
        "exp": "Un closure es una función que tiene acceso al ámbito léxico (variables) de la función externa incluso después de que esta haya terminado de ejecutarse."
    },
    {
        "profe": false,
        "unit": "JavaScript - This",
        "diff": "hard",
        "q": "¿A qué se refiere 'this' en el contexto de una función flecha (arrow function)?",
        "opts": [
            "Al 'this' del contexto donde fue definida",
            "Al objeto global",
            "Al objeto que llama la función",
            "A undefined"
        ],
        "ans": 0,
        "exp": "Las arrow functions no tienen su propio 'this'. Heredan el 'this' del contexto padre (léxico)."
    },
    {
        "profe": false,
        "unit": "JavaScript - Event Loop",
        "diff": "hard",
        "q": "¿Cuál es el orden de ejecución de: console.log('1'), setTimeout(() => console.log('2'), 0), Promise.resolve().then(() => console.log('3'))?",
        "opts": [
            "1, 3, 2",
            "1, 2, 3",
            "3, 1, 2",
            "2, 1, 3"
        ],
        "ans": 0,
        "exp": "El orden es: 1) console.log sincrónico, 2) Promise (microtask) antes que setTimeout (macrotask), 3) setTimeout. Resultado: 1, 3, 2."
    },

    //  DOM MANIPULATION 
    {
        "profe": false,
        "unit": "DOM - Selección",
        "diff": "easy",
        "q": "¿Qué método selecciona el primer elemento que coincida con un selector CSS?",
        "opts": [
            "document.querySelector()",
            "document.querySelectorAll()",
            "document.getElementById()",
            "document.getElementsByClassName()"
        ],
        "ans": 0,
        "exp": "querySelector() retorna el primer elemento que coincida. querySelectorAll() retorna todos. getElementById() busca por id."
    },
    {
        "profe": false,
        "unit": "DOM - Eventos",
        "diff": "medium",
        "q": "¿Qué método se usa para agregar un evento a un elemento?",
        "opts": [
            "addEventListener()",
            "on()",
            "bind()",
            "attachEvent()"
        ],
        "ans": 0,
        "exp": "addEventListener() es el método estándar. on() es de jQuery. attachEvent() es obsoleto (IE)."
    },
    {
        "profe": false,
        "unit": "DOM - Eventos",
        "diff": "hard",
        "q": "¿Qué hace event.preventDefault() en JavaScript?",
        "opts": [
            "Previene el comportamiento por defecto del evento",
            "Detiene la propagación del evento",
            "Previene que otros eventos se ejecuten",
            "Elimina el evento"
        ],
        "ans": 0,
        "exp": "preventDefault() previene la acción por defecto (ej. evitar que un enlace navegue o un formulario se envíe). stopPropagation() detiene la burbuja."
    },

    //  REACT - COMPONENTES 
    {
        "profe": false,
        "unit": "React - Componentes",
        "diff": "easy",
        "q": "¿Cuál es la diferencia entre un componente funcional y uno de clase en React?",
        "opts": [
            "Funcional usa hooks, de clase usa state y lifecycle con this",
            "No hay diferencia",
            "De clase es más rápido",
            "Funcional no puede tener estado"
        ],
        "ans": 0,
        "exp": "Los componentes funcionales usan hooks (useState, useEffect). Los de clase usan this.state y métodos como componentDidMount."
    },
    {
        "profe": false,
        "unit": "React - State",
        "diff": "medium",
        "q": "¿Cómo se actualiza el estado en un componente funcional con useState?",
        "opts": [
            "setEstado(nuevoValor)",
            "this.setState({ estado: nuevoValor })",
            "estado = nuevoValor",
            "updateState(estado, nuevoValor)"
        ],
        "ans": 0,
        "exp": "useState retorna [estado, setEstado]. setEstado(nuevoValor) actualiza el estado y provoca el re-render."
    },
    {
        "profe": false,
        "unit": "React - Props",
        "diff": "easy",
        "q": "¿Qué son las props en React?",
        "opts": [
            "Datos pasados de padre a hijo",
            "Estado interno del componente",
            "Variables globales",
            "Eventos del DOM"
        ],
        "ans": 0,
        "exp": "Props (properties) son datos de solo lectura que se pasan de un componente padre a un hijo."
    },
    {
        "profe": false,
        "unit": "React - Hooks",
        "diff": "hard",
        "q": "¿Cuál es la regla principal de los Hooks en React?",
        "opts": [
            "Solo se llaman en el nivel superior y solo desde componentes funcionales",
            "Pueden llamarse en cualquier lugar",
            "Solo en componentes de clase",
            "No se pueden usar condicionales"
        ],
        "ans": 0,
        "exp": "Los hooks deben llamarse siempre en el nivel superior (no dentro de loops/condiciones) y solo desde componentes funcionales o hooks personalizados."
    },
    {
        "profe": false,
        "unit": "React - Estado Global",
        "diff": "hard",
        "q": "¿Qué herramienta de React se usa para compartir estado entre componentes sin prop drilling?",
        "opts": [
            "Context API o Redux",
            "useState",
            "useEffect",
            "useRef"
        ],
        "ans": 0,
        "exp": "Context API y Redux son soluciones para estado global. useState es para estado local. useEffect para efectos secundarios."
    },

    //  VUE.JS 
    {
        "profe": false,
        "unit": "Vue.js - Directivas",
        "diff": "easy",
        "q": "¿Qué directiva de Vue.js se usa para el enlace de datos bidireccional (two-way binding)?",
        "opts": [
            "v-model",
            "v-bind",
            "v-on",
            "v-for"
        ],
        "ans": 0,
        "exp": "v-model es para two-way binding en inputs. v-bind es one-way (prop). v-on es eventos. v-for es iteración."
    },
    {
        "profe": false,
        "unit": "Vue.js - Directivas",
        "diff": "easy",
        "q": "¿Qué directiva de Vue.js se usa para renderizar una lista?",
        "opts": [
            "v-for",
            "v-if",
            "v-show",
            "v-else"
        ],
        "ans": 0,
        "exp": "v-for itera sobre un array u objeto. v-if es condicional. v-show oculta/muestra (CSS)."
    },
    {
        "profe": false,
        "unit": "Vue.js - Ciclo de Vida",
        "diff": "hard",
        "q": "¿Cuál es el hook de ciclo de vida en Vue.js que se ejecuta después de que el componente es montado en el DOM?",
        "opts": [
            "mounted",
            "created",
            "updated",
            "beforeMount"
        ],
        "ans": 0,
        "exp": "mounted se ejecuta después de que el componente está en el DOM. created es antes de montar. updated es después de actualizar."
    },

    //  ANGULAR 
    {
        "profe": false,
        "unit": "Angular - Decoradores",
        "diff": "easy",
        "q": "¿Qué decorador se usa para crear un componente en Angular?",
        "opts": [
            "@Component",
            "@Directive",
            "@Injectable",
            "@NgModule"
        ],
        "ans": 0,
        "exp": "@Component define un componente. @Directive es para directivas. @Injectable es para servicios. @NgModule es para módulos."
    },
    {
        "profe": false,
        "unit": "Angular - Data Binding",
        "diff": "medium",
        "q": "¿Cuál es la sintaxis correcta para property binding en Angular?",
        "opts": [
            "[propiedad]",
            "(propiedad)",
            "{{ propiedad }}",
            "[(propiedad)]"
        ],
        "ans": 0,
        "exp": "[propiedad] = property binding (de componente a vista). (evento) = event binding. {{}} = interpolación. [()] = two-way binding."
    },
    {
        "profe": false,
        "unit": "Angular - Directivas",
        "diff": "easy",
        "q": "¿Qué directiva se usa en Angular para iterar listas?",
        "opts": [
            "*ngFor",
            "ngFor",
            "v-for",
            "ng-repeat"
        ],
        "ans": 0,
        "exp": "*ngFor es la directiva estructural. *ngIf es condicional. ng-repeat es de AngularJS (v1)."
    },

    //  TYPESCRIPT 
    {
        "profe": false,
        "unit": "TypeScript - Tipos",
        "diff": "easy",
        "q": "¿Qué se usa en TypeScript para definir el tipo de una variable que puede ser de varios tipos?",
        "opts": [
            "union type (|)",
            "intersection type (&)",
            "generic (<T>)",
            "any"
        ],
        "ans": 0,
        "exp": "Union type usa | (ej: string | number). Intersection type usa & (ej: A & B). Generics son <T>. any desactiva la verificación de tipos."
    },
    {
        "profe": false,
        "unit": "TypeScript - Interfaces",
        "diff": "medium",
        "q": "¿Cuál es la diferencia entre 'interface' y 'type' en TypeScript?",
        "opts": [
            "Las interfaces pueden extenderse, los types pueden ser union/intersection",
            "Son lo mismo",
            "Las interfaces son para clases, types para variables",
            "Types son más restrictivos"
        ],
        "ans": 0,
        "exp": "interface se extiende con extends, type puede usar union (|) e intersection (&). En la práctica son muy similares."
    },
    {
        "profe": false,
        "unit": "TypeScript - Genéricos",
        "diff": "hard",
        "q": "¿Qué símbolo se usa comúnmente para representar un tipo genérico en TypeScript?",
        "opts": [
            "<T>",
            "{T}",
            "[T]",
            "(T)"
        ],
        "ans": 0,
        "exp": "<T> es la convención estándar para genéricos. También se usan <U>, <K>, <V> según el contexto."
    },

    //  SASS 
    {
        "profe": false,
        "unit": "Sass - Sintaxis",
        "diff": "easy",
        "q": "¿Qué símbolo se usa en Sass para definir una variable?",
        "opts": [
            "$",
            "@",
            "--",
            "#"
        ],
        "ans": 0,
        "exp": "Sass usa $variable. @ se usa para mixins, funciones, imports. -- es para variables CSS nativas."
    },
    {
        "profe": false,
        "unit": "Sass - Anidamiento",
        "diff": "medium",
        "q": "¿Qué símbolo se usa en Sass para hacer referencia al selector padre en un anidamiento?",
        "opts": [
            "&",
            "$",
            "@",
            "%"
        ],
        "ans": 0,
        "exp": "& se usa para referirse al selector padre. Ej: .caja { &:hover { color: red; } } → .caja:hover { color: red; }"
    },

    //  TAILWIND CSS 
    {
        "profe": false,
        "unit": "Tailwind - Utility Classes",
        "diff": "easy",
        "q": "¿Qué clase de Tailwind se usa para padding de 4 unidades (1rem)?",
        "opts": [
            "p-4",
            "p-1",
            "p-2",
            "padding-4"
        ],
        "ans": 0,
        "exp": "p-4 = padding: 1rem (4 unidades). p-2 = 0.5rem. p-1 = 0.25rem. La escala es p-{tamaño}."
    },
    {
        "profe": false,
        "unit": "Tailwind - Responsive",
        "diff": "medium",
        "q": "¿Qué prefijo de Tailwind se usa para aplicar estilos en pantallas medianas (tablets)?",
        "opts": [
            "md:",
            "sm:",
            "lg:",
            "xl:"
        ],
        "ans": 0,
        "exp": "sm: (640px), md: (768px), lg: (1024px), xl: (1280px), 2xl: (1536px)."
    },

    //  NPM 
    {
        "profe": false,
        "unit": "NPM - Comandos",
        "diff": "easy",
        "q": "¿Qué comando se usa para instalar todas las dependencias de un proyecto desde package.json?",
        "opts": [
            "npm install",
            "npm install --save",
            "npm init",
            "npm update"
        ],
        "ans": 0,
        "exp": "npm install instala todas las dependencias listadas en package.json. npm init crea un nuevo package.json."
    },
    {
        "profe": false,
        "unit": "NPM - package.json",
        "diff": "medium",
        "q": "¿En qué sección de package.json se listan las dependencias de desarrollo?",
        "opts": [
            "devDependencies",
            "dependencies",
            "scripts",
            "peerDependencies"
        ],
        "ans": 0,
        "exp": "devDependencies son para herramientas de desarrollo (testing, linters, bundlers). dependencies son para producción."
    },

    //  GIT 
    {
        "profe": false,
        "unit": "Git - Básico",
        "diff": "easy",
        "q": "¿Qué comando se usa para inicializar un repositorio Git en un directorio?",
        "opts": [
            "git init",
            "git start",
            "git create",
            "git new"
        ],
        "ans": 0,
        "exp": "git init inicializa un repositorio local. git clone clona un repositorio remoto."
    },
    {
        "profe": false,
        "unit": "Git - Ramas",
        "diff": "medium",
        "q": "¿Qué comando se usa para crear y cambiar a una nueva rama en Git?",
        "opts": [
            "git checkout -b [nombre]",
            "git branch [nombre]",
            "git checkout [nombre]",
            "git switch -c [nombre]"
        ],
        "ans": 0,
        "exp": "git checkout -b crea y cambia a la nueva rama. git switch -c es la nueva sintaxis. git branch solo crea."
    },
    {
        "profe": false,
        "unit": "Git - Historial",
        "diff": "easy",
        "q": "¿Qué comando muestra el historial de commits en Git?",
        "opts": [
            "git log",
            "git status",
            "git show",
            "git diff"
        ],
        "ans": 0,
        "exp": "git log muestra el historial de commits. git status muestra cambios no commiteados. git diff muestra diferencias."
    },

    //  WEBPACK / VITE 
    {
        "profe": false,
        "unit": "Build Tools - Vite vs Webpack",
        "diff": "medium",
        "q": "¿Cuál es la principal ventaja de Vite sobre Webpack en desarrollo?",
        "opts": [
            "Vite es más rápido por usar ESM nativo en desarrollo",
            "Webpack es más rápido",
            "Vite no requiere configuración",
            "Webpack tiene mejor soporte para React"
        ],
        "ans": 0,
        "exp": "Vite usa ES Modules nativos en el navegador, lo que hace que el servidor de desarrollo sea mucho más rápido que Webpack (que empaqueta todo)."
    },

    //  JEST / TESTING 
    {
        "profe": false,
        "unit": "Jest - Testing",
        "diff": "medium",
        "q": "¿Qué función de Jest se usa para describir un grupo de pruebas relacionadas?",
        "opts": [
            "describe()",
            "test()",
            "it()",
            "expect()"
        ],
        "ans": 0,
        "exp": "describe() agrupa pruebas. test() e it() definen pruebas individuales. expect() hace afirmaciones."
    },

    //  HTTP 
    {
        "profe": false,
        "unit": "HTTP - Métodos",
        "diff": "easy",
        "q": "¿Qué método HTTP se usa para obtener datos de un servidor?",
        "opts": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "ans": 0,
        "exp": "GET obtiene datos. POST crea. PUT actualiza. DELETE elimina."
    },
    {
        "profe": false,
        "unit": "HTTP - Códigos de Estado",
        "diff": "medium",
        "q": "¿Qué código HTTP indica 'No encontrado'?",
        "opts": [
            "404",
            "403",
            "500",
            "400"
        ],
        "ans": 0,
        "exp": "404 = Not Found. 403 = Prohibido. 500 = Error del servidor. 400 = Bad Request."
    },

    //  RENDIMIENTO 
    {
        "profe": false,
        "unit": "Rendimiento - Optimización",
        "diff": "hard",
        "q": "¿Qué técnica se usa para cargar imágenes solo cuando son visibles en el viewport?",
        "opts": [
            "Lazy Loading",
            "Preloading",
            "Eager Loading",
            "Prefetching"
        ],
        "ans": 0,
        "exp": "Lazy loading carga imágenes solo cuando están a punto de ser visibles (viewport). Mejora el rendimiento inicial."
    },

    //  SEO 
    {
        "profe": false,
        "unit": "SEO - Metadatos",
        "diff": "easy",
        "q": "¿Qué etiqueta HTML se usa para el título de la página en los resultados de búsqueda?",
        "opts": [
            "<title>",
            "<h1>",
            "<meta name='title'>",
            "<header>"
        ],
        "ans": 0,
        "exp": "<title> es la etiqueta principal para SEO. <h1> es el encabezado visible en la página."
    },

    //  WEB COMPONENTS 
    {
        "profe": false,
        "unit": "Web Components",
        "diff": "hard",
        "q": "¿Qué método se usa para definir un Custom Element?",
        "opts": [
            "customElements.define()",
            "document.registerElement()",
            "HTMLElement.create()",
            "CustomElement.define()"
        ],
        "ans": 0,
        "exp": "customElements.define('nombre', Clase) es la API estándar. document.registerElement() es obsoleto."
    }

];



export default preguntas_frontend;