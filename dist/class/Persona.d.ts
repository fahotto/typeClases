export declare class Persona {
    nombre: string;
    private apellido;
    private edad;
    private cargo;
    constructor(nombre: string, apellido: string, edad: number, cargo: string);
    presentarse(): string;
    dameEdad(): number;
    actualizarEdad(edad: number): void;
}
