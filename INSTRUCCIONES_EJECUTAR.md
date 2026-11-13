# Cómo echar a andar la app

## 1. Requisitos
- Node.js 18 o superior (https://nodejs.org)

## 2. Instalar dependencias (solo la primera vez)
Abre una terminal dentro de la carpeta del proyecto y ejecuta:

    npm install

## 3. Revisar el archivo .env
Debe contener exactamente:

    VITE_API_URL=http://localhost:3001

## 4. Levantar la app
Opción A (un solo comando, levanta la API y el frontend juntos):

    npm start

Opción B (dos terminales):

    Terminal 1:  npm run api
    Terminal 2:  npm run dev

## 5. Abrir en el navegador
- Frontend: http://localhost:5173
- API (json-server): http://localhost:3001

## Problemas frecuentes
- "vite: Permission denied" (Linux/Mac): ejecuta  chmod +x node_modules/.bin/*  o vuelve a correr npm install.
- Puerto ocupado: cierra la otra terminal o cambia el puerto con  npm run dev -- --port 5174
