const getPokemonsHandler =  (req, res) =>{
    res.status(200).send("NIY: TODOS los POKEMON");
};
const getDetailHandler = (req, res) =>{
    res.status(200).send("NIY: El detalle del pokemon buscado");
};
const createPokemonHandler = (req, res) =>{
    res.status(202).send("NIY: Pokemon creado");
};

module.exports={
    getPokemonsHandler,
    getDetailHandler,
    createPokemonHandler
}