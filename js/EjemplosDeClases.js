console.log("%c##################### Ejemplos de Clases ##################### ", 'color:#0F0;');
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    ImprimirNombreCompletoEnConsola = () => console.log(`${this.nombre} ${this.apellido}`);
}

let persona1 = new Persona("Fulano", "Perez");
persona1.ImprimirNombreCompletoEnConsola();

let persona2 = new Persona("Pepe", "Gomez");
persona2.ImprimirNombreCompletoEnConsola();
