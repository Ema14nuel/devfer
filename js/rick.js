// import fetch from 'fetch';

console.log("Esta esta bien");

const url = 'https://pokeapi.co/api/v2/pokemon/';

const response = fetch(url);

const pokemon = await response.json();

for (const pokemon of pokemon) {
  console.log(`${pokemon.name} - ${pokemon.type}`);
}