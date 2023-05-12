const {Router} = require("express");
const { getPokemonsHandler, getDetailHandler, createPokemonHandler } = require("../handlers/pokemonHandlers");


const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonsHandler);

pokemonsRouter.get("/:id", getDetailHandler);

pokemonsRouter.post("/", createPokemonHandler);

module.exports= pokemonsRouter;