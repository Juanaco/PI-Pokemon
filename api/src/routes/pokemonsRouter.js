const {Router} = require("express");

const pokemonsRouter = Router();

pokemonsRouter.get("/",  (req, res) =>{
    res.status(200).send("NIY: TODOS los POKEMON");
});

pokemonsRouter.get("/:idPokemon", (req, res) =>{
        res.status(200).send("NIY: El detalle del pokemon buscado");
    });

pokemonsRouter.post("/", (req, res) =>{
    res.status(202).send("NIY: Pokemon creado");
});

pokemonsRouter.get("pokemons/name?=", (req, res) =>{
    res.status(200).send("NIY: filtrar POKEMON por nombre")
});

module.exports= pokemonsRouter;