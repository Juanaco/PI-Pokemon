const { createPokemon } = require("../controllers/pokemonsController");

const getPokemonsHandler =  (req, res) =>{
    const {name} = req.query;

    if(name)    res.status(200).send(`NIY: Buscar todos los Pokemon con nombre:${name}`);
    else   res.status(200).send("NIY: Todos los Pokemones");


};
const getDetailHandler = (req, res) =>{
    const {id} = req.params;

    res.status(200).send(`Va a mandar el detalle del pokemon de id: ${id}`);
};

const createPokemonHandler = async (req, res) =>{

    const {name, image, hp, attack, defense, speed, height, weight} = req.body;

    try {
        const newPokemon = await createPokemon(name, image, hp, attack, defense, speed, height, weight);
        res.status(202).json(newPokemon);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }


};

module.exports={
    getPokemonsHandler,
    getDetailHandler,
    createPokemonHandler
}