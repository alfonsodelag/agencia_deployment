// ! En index.js configuramos el servidor
// importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({ path: 'variables.env' })
// configurar express
const app = express();

// habilitar pug en el server
app.set('view engine', 'pug');

// donde va a encontrar los templates: añadir las vistas
app.set('views', path.join(__dirname, './views'));

// cargar una carpeta estática llamada public
app.use(express.static('public'));

// Validar si estamos en desarrollo o producción
const config = configs[app.get('env')];


// db.authenticate()
//     .then(() => console.log('DB Conectada'))
//     .catch(error => console.log(error));

// Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

// Muestra el año actual y genera la ruta
app.use((req, res, next) => {
    // Crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    console.log(res.locals);
    return next();
})

// ! la diferencia entre app.use vs app.get es que use responde a todos los "verbos" HTTP
// cargar rutas
app.use(bodyParser.urlencoded({ extend: true }))

app.use('/', routes());

// Puerto y host para la app y en caso de que no exista, dejamos el host libre con 0.0.0.0 para que HEROKU lo asigne
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Escuchando en localhost:3000
app.listen(port, host, () => {
    console.log('El servidor está funcionando');
});

