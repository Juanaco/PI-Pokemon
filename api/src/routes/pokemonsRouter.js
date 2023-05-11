const {Router} = require("express");
const { getPokemonsHandler, getDetailHandler, createPokemonHandler } = require("../handlers/pokemonHandlers");


const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonsHandler);

pokemonsRouter.get("/:idPokemon", getDetailHandler);

pokemonsRouter.post("/", createPokemonHandler);

pokemonsRouter.get("pokemons/name?=", (req, res) =>{
    res.status(200).send("NIY: filtrar POKEMON por nombre")
});

module.exports= pokemonsRouter;