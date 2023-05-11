
export class Mascotas {

    public nombre: string;
    private especie: string;
    private color: string;
   
constructor(nombre: string, especie: string, color: string) {
    this.nombre = nombre;
    this.especie = especie;
    this.color = color;
   }

public miMascota() {
    return `Mi nombre es ${this.nombre} y soy un ${this.especie}`;
}

public colorMascota (): string {
    return this.color;
}
}
 