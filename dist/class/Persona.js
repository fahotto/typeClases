"use strict";
// Clases en Type Script
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    //CONSTRUCTOR: es una funcion que crea objetos
    constructor(nombre, apellido, edad, cargo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cargo = cargo;
    }
    presentarse() {
        return `Mi nombre es ${this.nombre} y mi cargo es ${this.cargo}`;
    }
    dameEdad() {
        return this.edad;
    }
    actualizarEdad(edad) {
        this.edad = edad;
    }
}
exports.Persona = Persona;
