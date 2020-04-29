// 2000 => Internet Explorer Microsoft -> 2011

// Navegadores
// Chrome, Firefox, Safari, Opera
// ES6 => EcmaScript 6 (JS Moderno) "2015"

// JS
var nombre = "Gerardo";

// ES6
let x = 24; // Es permitido cambiar el valor
const y = 3.1416; // No es permitido reemplazar su valor

// String template
console.log(`Hola mi nombre es ${nombre} y mi edad es ${x}`);
// console.log("Hola mi nombre es " + nombre + " y mi edad es " + x);

// function MiFuncion() {
//     return "Mi función se ejecutó";
// }

// var valor = MiFuncion();
// console.log(valor);

// Arrow Functions
const suma = (a, b) => a + b;

const evaluar = (x) => {
    if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ) {
        return "Vocal"
    } else {
        return "Consonante"
    }
}

console.log(evaluar("h"));

console.log(evaluar);

const resultado = suma(5, 9);
console.log(resultado);

//           0  1  2  3  4
let array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    console.log(`array en el índice ${i} = ${array[i]}`);
}

// Propiedades => llave: valor (string, número, booleano, arreglos, objetos)
// Método => Acciones que puede hacer nuestro objeto

// Objeto literal
let computadora = {
    color: "plateda",
    marca: "Apple",
    encendida: true,

    // Método
    // Scope => El alcance de una variable
    obtenerInfo: () => {
        return `Esta computadora es ${this.color}, marca ${this.marca}`
    },
}

console.log(computadora.obtenerInfo());

// Definición primaria objeto literal
let myPenguin = {
    character: "Duke",
    origin: "Boner's Ark",
    creator: "Mort Walker",
    notes: "The pet penguin of the title characters. The Angoulême International Comics Festival named the Prix Alfred award after the character",
}

// Modificar mi objeto
console.log(myPenguin.character);
myPenguin.character = "Juan";
console.log(myPenguin.character);
myPenguin.puedeVolar = false;
// myPenguin.graznar = () => console.log("kaww kaww!!");

// console.log(myPenguin);
// myPenguin.graznar();
