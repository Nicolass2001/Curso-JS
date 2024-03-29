'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const { before } = require('node:test');

var app = express();

// cargar archivos rutas
var project_routes = require('./routes/project')

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', project_routes);

// exportar
module.exports = app;