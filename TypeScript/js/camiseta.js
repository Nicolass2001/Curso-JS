"use strict";
exports.__esModule = true;
exports.Camiseta = void 0;
var Camiseta = /** @class */ (function () {
    function Camiseta(color, marca, precio) {
        if (color === void 0) { color = ""; }
        if (marca === void 0) { marca = ""; }
        if (precio === void 0) { precio = 0; }
        this.color = color;
        this.marca = marca;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
