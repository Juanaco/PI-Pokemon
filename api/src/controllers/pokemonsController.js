const { Pokemon } = require("../db");
const axios = require("axios");

// ***********
// armar esta funcion con el filtro de resultados sin el map de "mapPokemons"
const construirPokemon = (pokemon) => {};

const mapPokemons = (pokemons) => {
  return pokemons.map(
    // Extraer esta funcion a una nueva
    (pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        image: pokemon.data.sprites.other.dream_world.front_default, // url imagen
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[3].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        types: pokemon.data.types.map((t) => {
          return {
            name: t.type.name,
          };
        }),
      }; // return
    }
  ); // map
};

async function getPokemonsApi() {
  let arrayPokemonsApi = [];

  // carga de pokeAPI -----------------------------------------
  await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(async (response) => {
      let arrayResultApi = response.data.results;
      let arrayPromises = [];
      arrayResultApi.map((p) => arrayPromises.push(axios.get(p.url)));
      // se obtiene uno por uno los datos de cada pokemon

      await Promise.all(arrayPromises)
        .then((pokemons) => {
          arrayPokemonsApi = mapPokemons(pokemons);
        })
        .catch((error) => {
          return error;
        });
    })
    .catch((error) => {
      return error;
    });
  // ------------------------------- end - carga de poke API
  return arrayPokemonsApi;
}

const getAllPokemon = async () => {
  const databasePokemon = await Pokemon.findAll();

  const apiPokemons = await getPokemonsApi();

  return [...databasePokemon, ...apiPokemons];
};

const pokemonName = async (name) => {
  try {
    const apiPoke = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    const pokeArray = [];
    pokeArray.push(apiPoke);

    const filteredArray = mapPokemons(pokeArray);

    return filteredArray;
  } catch (error) {
    return [];
  }
};

const searchPokemonsByName = async (name) => {
  const apiPokemons = await pokemonName(name);
  // ***********************************************
  // apiPokemons rompe la búsqueda si busco un nombre de la BDD que no esté en la API
  const databasePokemon = await Pokemon.findAll({ where: { name } });

  return [...databasePokemon, ...apiPokemons];
};

const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight
) =>
  // ************************************
  // Faltan los datos del modelo TYPE en el formulario
  // ****************************************
  await Pokemon.create({
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });

// ********************
// hay que filtrar los resultados , cómo getAllpokemon
const getPokemonById = async (id, source) => {
  // Convertir en IF POSTA POSTA no este formato de mierda (ternario)
  const pok =
    source === "api"
      ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
      : await Pokemon.findByPk(id);

  return pok;
};

module.exports = {
  createPokemon,
  getPokemonById,
  searchPokemonsByName,
  getAllPokemon,
};
