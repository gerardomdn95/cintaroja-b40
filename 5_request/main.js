const request = require('request');
const { Pokemon } = require('./Pokemon');

const buscaPokemon = (nombre) => {
    const URL = 'https://pokeapi.co/api/v2/pokemon'
    nombre = nombre.toLowerCase();

    request(`${URL}/${nombre}`, (error, response, body) => {
        if(response.statusCode === 200) {
            // console.log('Hay un Pokémon');
            const respuesta = JSON.parse(body);
            // const a = "{ name: pikachu }";
            // console.log(a.name);
            // console.log(`Encontré a ${respuesta.name} es un Pokémon tipo ${respuesta.types[0].type.name}`);
            const pokemon = new Pokemon(
                respuesta.name, 
                respuesta.types[0].type.name, 
                respuesta.weight, 
                respuesta.height,
                respuesta.abilities[0].ability.name);
            console.log(pokemon);
        } else {
            return `No encontré al Pokémon - HTTP status: ${response.statusCode} ${response.statusMessage}.`;
            // console.log(`No encontré al Pokémon - HTTP status: ${response.statusCode} ${response.statusMessage}.`)
            // console.log(error);
        }
    });
}

buscaPokemon('Charmander');
buscaPokemon('Pikachu');
buscaPokemon('Eevee');
buscaPokemon('Bulbasaur');