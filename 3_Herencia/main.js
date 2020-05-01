//Super-clase / Clase padre
class Mascota{
    constructor(nombre, patas){
    this.nombre = nombre;
    this.cerebro = true;
    this.patas = patas;
    }
}

//Sub-clase / Clase hija
class Perro extends Mascota{
    constructor(nombre, patas, ladra, cola){
        super(nombre, patas);
        this.ladra = ladra;
        this.comida = "Croqeutas para perros";
        this.cola = cola;
    }
}

class Serpiente extends Mascota{
    constructor(nombre, patas, color, venenosa){
        super(nombre, patas);
        this.color = color;
        this.venenosa = venenosa;
    }
}

const pluto = new Perro('Pluto', 4, true, true);
const kaa = new Serpiente('Kaa', 0, 'cafe', false);


console.log(pluto);
console.log(kaa);


// Destructuración de objetos
const { nombre, cerebro, patas, ladra, comida, cola } = pluto;

console.log(nombre);
console.log(cerebro);
console.log(patas);
