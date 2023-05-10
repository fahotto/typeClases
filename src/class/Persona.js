"use strict";
// Clases en Type Script
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //CONSTRUCTOR: es una funcion que crea objetos
    function Persona(nombre, apellido, edad, cargo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cargo = cargo;
    }
    Persona.prototype.presentarse = function () {
        return "Mi nombre es ".concat(this.nombre, " y mi cargo es ").concat(this.cargo);
    };
    Persona.prototype.dameEdad = function () {
        return this.edad;
    };
    return Persona;
}());
exports.Persona = Persona;
