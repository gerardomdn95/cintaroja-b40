// Promesas (3)
// Promesa => Pending (Esperar al día del cumple de Alba)
// Promesa => resolve (📞)
// Promesa => rejected (Razón)

// Callbacks

// Determinar si un número es mayor a 5
const promesa = new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random() * 10);

    setTimeout(() => {
        // ? :
        numero > 5
            ? resolve(`${numero} es mayor a 5`)
            : reject(new Error(`${numero} no es mayor a 5`));
    }, 3000);
});

promesa
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    