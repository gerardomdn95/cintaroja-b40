console.log(1);
// Callback

// Cuello de Botella
for(let i = 0; i <= 9999999999; i++);

setTimeout(() => {
    console.log(2);
}, 5000);

setTimeout(() => {
    console.log(3);
}, 3000);

console.log(4);
