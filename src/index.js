"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./class/Persona");
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
console.log(Pepe.dameEdad);
