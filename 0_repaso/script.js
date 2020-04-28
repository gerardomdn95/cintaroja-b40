// Variables primitivas
var string = "Gerardo";
var number = 24;
var boolean = true;

// Variables compuestas
var array = [1, 2, 3, 4, 5, 6, 7, 8];

// JSON
// JavaScript
// Object
// Notation
var auto = { 
    // Atributos
    color: "Rojo",
    velocidad: 180,
    ruedas: 4,
    motor: "V10",
    deportivo: true,
    // Métodos
    arranca: function() {
        alert("🚗 Auto arranca");
    },
    frena: function() {
        alert("🚗 El auto frena");
    },
    dobla: function() {
        alert("🚗 El auto ha frenado");
    }
}

console.log(auto);
console.log(auto.color);
console.log(auto.ruedas);
console.log(auto.velocidad);

var perro = {
    nombre: "Ayudante de santa",
    raza: "Galgo",
    color: "Marrón",
    ladrar: function() {
        return this.nombre + " ha ladrado";
    }
}

console.log(perro);
perro.ladrar();

var perroLadra = perro.ladrar();
console.log(perroLadra);

console.log(this);