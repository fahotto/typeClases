import { Persona } from "./class/Persona";

import { Mascotas } from "./class/Mascotas";


 console.log('Hola mundo');
console.log(('usando nodemon'));
console.log('otra data');

// //Crear un objeto de la clase Persona y le paso los datos

const Pepe = new Persona('Pepe', 'Perez', 30, 'Veterinario');
console.log(Pepe.nombre);

// //por su aytibuto publico se le puede reasignar el valor

 Pepe.nombre = 'Mario';
 console.log(Pepe.nombre);

// //que hace pepe

 console.log(Pepe.apellido);
console.log(Pepe.presentarse())
console.log(`mi edad es: ${Pepe.dameEdad()}`);
console.log(Pepe.actualizarEdad(35))
console.log(`mi edad es: ${Pepe.actualizarEdad()}`);


//crear un objeto de la clase MASCOTA y le paso los datos

const Gato = new Mascotas ('Michi', 'Gato', 'Blanco');
console.log(Gato.miMascota);

//por su aytibuto publico se le puede reasignar el valor

Gato.nombre = 'Michifuz';

console.log(Gato.nombre);