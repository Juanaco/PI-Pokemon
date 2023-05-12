const {Pokemon} = require("../db");
const axios = require("axios");



async function getPokemonsApi() 
{
    let arrayPokemonsApi = [];

      // carga de pokeAPI -----------------------------------------
    await axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(async (response) => {
          let arrayResultApi = response.data.results;
          let arrayPromises = [];
          arrayResultApi.map((p) => arrayPromises.push(axios.get(p.url))); 
          // se obtiene uno por uno los datos de cada pokemon
        
          await Promise.all(arrayPromises)
          .then((pokemons) => {
              arrayPokemonsApi = pokemons.map((p) => {
                  return {
                      id: p.data.id,
                      name: p.data.name,
                      image: p.data.sprites.other.dream_world.front_default,  // url imagen
                      hp: p.data.stats[0].base_stat,
                      attack: p.data.stats[1].base_stat,
                      defense: p.data.stats[2].base_stat,
                      speed: p.data.stats[3].base_stat,
                      height: p.data.height,
                      weight: p.data.weight,
                      types: p.data.types.map((t) => {
                          return {
                              name: t.type.name
                          }
                      })
                  };  // return 
              }); // map
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
};

const getAllPokemon = async () =>{
    
    const databasePokemon = await Pokemon.findAll();
    
    const apiPokemons = await getPokemonsApi();
    console.log(apiPokemons)

    return [...databasePokemon, ...apiPokemons];


};

const searchPokemonsByName = (name) =>{

};

const createPokemon = async (name, image, hp, attack, defense, speed, height, weight) =>
    await Pokemon.create({name, image, hp, attack, defense, speed, height, weight});


const getPokemonById = async (id, source) =>{
    const pok = source === "api" ? 
    (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
    : await Pokemon.findByPk(id);
    console.log(pok)

    return pok;
}



module.exports= {createPokemon, getPokemonById, searchPokemonsByName, getAllPokemon};