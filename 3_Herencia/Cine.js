const { hitler } = require('./Documental');
const { mulan, spiderman } = require('./Pelicula');

class Cine {
    constructor(nombre, butacas, pantallas, cadena) {
        this.nombre = nombre;
        this.butacas = butacas;
        this.pantallas = pantallas;
        this.cadena = cadena;
    }

    reproducirLargometraje(contenido) {
        return `Se está reproduciendo ${contenido.titulo}`;
    }
}

// Necesito crear un cine
const pandemic = new Cine('Pandemic', 20, 4, 'Cinemark');

console.log(pandemic.reproducirLargometraje(mulan));