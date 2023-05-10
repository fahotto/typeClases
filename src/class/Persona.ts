// Clases en Type Script

export class Persona {

    // atributos : private -- public --- protected
    // atributos privados y metodos publicos

    public nombre: string;
    private apellido: string;
    private edad: number;
    private cargo: string;

//CONSTRUCTOR: es una funcion que crea objetos

constructor(nombre: string, apellido: string, edad: number, cargo: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo

}

public presentarse() {
    return `Mi nombre es ${this.nombre} y mi cargo es ${this.cargo}`;
}

public dameEdad (): number {
    return this.edad;
}

public actualizarEdad (edad: number): void {
    this.edad = edad
}