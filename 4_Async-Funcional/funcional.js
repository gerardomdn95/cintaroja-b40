//             0, 1, 2, 3, 4, 5
const array = [1, 4, 6, 5, 3, 8];

// Imperativa
//      i = 0; i < 6 ; i = 0 + 1;
//      i = 1; 1 < 6 ; i = 1 + 1;
//      i = 2; 2 < 6 ; i = 2 + 1;
//      ...
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Funcional
// forEach
// array.forEach((element) => {
//     console.log(element);
// });

// map
// Generar un nuevo arreglo a partir de uno previamente definido

// let arrayNuevo = [];

// for(let i = 0; i < array.length; i++) {
//     arrayNuevo[i] = array[i] * 2;
// }

// array.map((a,b,c) => console.log(`valor: ${a} indice: ${b} arreglo: ${c}`)) 

// const arrayNuevo = array.map((x, y) => `Índice ${y}: ${x} * 2 = ${x * 2}`);

// console.log(arrayNuevo);

// filter

// Semi Imperativa
// Necesito crear un nuevo arreglo que contenga los número pares dentro de array
// let arrayNuevo = [];

// for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0) {
//         // push
//         arrayNuevo.push(array[i]);
//     }
// }

// Funcional
// const arrayNuevo = array.filter(element => element % 2 === 0);

// console.log(arrayNuevo);

// Reduce

// let sumatoria = 0;

// for(let i = 0; i < array.length; i++) {
//     sumatoria += array[i];
// }

// const promedio = sumatoria / array.length;

// console.log(promedio);

const promedio = array.reduce((a, b) => a + b) / array.length;

console.log(promedio);