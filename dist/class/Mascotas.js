"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascotas = void 0;
class Mascotas {
    constructor(nombre, especie, color) {
        this.nombre = nombre;
        this.especie = especie;
        this.color = color;
    }
    miMascota() {
        return `Mi nombre es ${this.nombre} y soy un ${this.especie}`;
    }
    colorMascota() {
        return this.color;
    }
}
exports.Mascotas = Mascotas;
