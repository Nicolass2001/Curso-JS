'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
    .then(() => {
        console.log("Successful connection to DB");

        // creacion del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en la url: localhost:"+port);
        });
    })
    .catch(err => console.log(err));