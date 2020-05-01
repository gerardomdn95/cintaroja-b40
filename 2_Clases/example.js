// switch (mes) {
//     case 1:
//         return '01';
//         break;
//     case 2:
//         return '02';
//         break;
//     case 12:
//         return '12';
//         break;
//     default:

//         break;
// }

// Operadores ternarios
let mes = 10;

mes = mes.toString(); // 1

let mesRFC = mes.length > 1 
    ? mes 
    : `0${mes}`;

console.log(mesRFC);