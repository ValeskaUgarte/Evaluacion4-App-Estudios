const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.get('/', (req, res) => {
  res.send(`<h1>API Cuestionarios</h1><a href="/asignaturas">/asignaturas</a><br><a href="/reportes">/reportes</a>`);
});

server.use(middlewares);
server.use(router);

// Render (y otros hosts) asignan el puerto dinámicamente mediante la
// variable de entorno PORT. En local no existe esa variable, así que
// usamos 3001 como antes para no romper el flujo de desarrollo.
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`API en el puerto ${PORT}`));