"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log('Hola mundo!!');
        var aux = 'nico';
        var cualquiera = 0;
        console.log(aux, cualquiera);
        // Funciones
        function getNumero(numero) {
            if (numero === void 0) { numero = 0; }
            return 'El numero es: ' + numero;
        }
        console.log(getNumero());
        var camiseta = new camiseta_1.Camiseta();
        camiseta.setColor("Rojo");
        console.log(camiseta);
    }
    return Main;
}());
var main = new Main();
