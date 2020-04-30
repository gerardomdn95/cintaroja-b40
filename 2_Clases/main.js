// Palabra reservada => Palabra exclusiva del lenguaje, no podemos usarlo en variables (let, const, if, for, var)

// Vamos a declarar una clase
class perro {
    // Método constructor
    constructor(raza, tamanio, nombre) {
        // console.log("Se ejecutó el constructor");
        this.raza = raza;
        this.tamanio = tamanio;
        this.nombre = nombre;
    }

    comer(comida) {
        // Colocar comparacione estrictas
        if(comida === "croquetas") {
            return "🐶❤️";
        } else {
            return "🐶💔";
        }
    }

    saludo() {
        return `Hola mi nombre es ${this.nombre}`;
    }

    getNombre() {
        return this.nombre;
    }

    getRaza() {
        return this.raza;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
}

// Instancia de mi clase perro
const snoopy = new perro("Beagle", "pequeño", "Snoopy");
const scooby = new perro("Gran Danés", "grande", "Scooby");

console.log(snoopy);
console.log(scooby);

console.log(snoopy.comer("croquetas"));
console.log(scooby.comer("tacos"));

console.log(snoopy.saludo());

console.log(scooby.getNombre());
console.log(scooby.getRaza());