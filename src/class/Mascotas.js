"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascotas = void 0;
var Mascotas = /** @class */ (function () {
    //CONSTRUCTOR: es una funcion que crea objetos
    function Mascotas(nombre, especie, color) {
        this.nombre = nombre;
        this.especie = especie;
        this.color = color;
    }
    Mascotas.prototype.miMascota = function () {
        return "Mi nombre es ".concat(this.nombre, " y soy un ").concat(this.especie);
    };
    Mascotas.prototype.colorMascota = function () {
        return this.color;
    };
    return Mascotas;
}());
exports.Mascotas = Mascotas;
