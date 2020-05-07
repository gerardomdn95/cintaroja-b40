const request = require('request');
const { Banda } = require('./Banda');

const obtenerBanda = (nombre) => {
    const URL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;

    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            const respuesta = JSON.parse(body);

            if(respuesta.artists != null) {
                // Promesa se cumple
                const { strArtist, intFormedYear, strGenre, strWebsite, strCountry } = respuesta.artists[0];
                const banda = new Banda(strArtist, intFormedYear, strGenre, strWebsite, strCountry);
                resolve(banda);
            } else {
                // La promesa no se cumple
                reject(new Error(`No encontré a ${nombre} ${error}`));
            }
        })
    });
}

obtenerBanda('jose jose')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// const objeto = { nombre: "Gerardo", edad: 24 }

// const { nombre, edad } = objeto;
// console.log(nombre);
// console.log(edad);