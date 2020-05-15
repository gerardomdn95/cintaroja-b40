const objeto = {
    // Atributo/Key/Llave
    // Llave: valor
    uno: {
        title: 'Titulo uno',
        priority: 1
    },
    dos: {
        title: 'Titulo dos',
        priority: 2
    },
    tres: {
        title: 'Titulo tres',
        priority: 3
    },
};

// console.log(objeto);
// console.log(objeto.tres);

const arregloDeKeys = Object.keys(objeto); // {} => [keys]
console.log('🐶', arregloDeKeys);

arregloDeKeys.map(element => console.log('🐱', element));
arregloDeKeys.map(element => console.log('🐭', objeto[element]));
arregloDeKeys.map(element => console.log('🦊', objeto[element].title));
