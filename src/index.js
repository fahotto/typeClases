"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./class/Persona");
var Mascotas_1 = require("./class/Mascotas");
console.log('Hola mundo');
console.log(('usando nodemon'));
console.log('otra data');
//Crear un objeto de la clase Persona y le paso los datos
var Pepe = new Persona_1.Persona('Pepe', 'Perez', 30, 'Veterinario');
console.log(Pepe.nombre);
//por su aytibuto publico se le puede reasignar el valor
Pepe.nombre = 'Mario';
console.log(Pepe.nombre);
//que hace pepe
console.log(Pepe.apellido);
console.log(Pepe.presentarse());
console.log("mi edad es: ".concat(Pepe.dameEdad()));
console.log(Pepe.actualizarEdad(35));
console.log("mi edad es: ".concat(Pepe.actualizarEdad()));
//crear un objeto de la clase MASCOTA y le paso los datos
var Gato = new Mascotas_1.Mascotas('Michi', 'Gato', 'Blanco');
console.log(Gato.nombre);
//por su aytibuto publico se le puede reasignar el valor
Gato.nombre = 'Michifuz';

console.log(Gato.nombre);
