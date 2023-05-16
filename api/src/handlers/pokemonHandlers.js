const { createPokemon, getPokemonById, getAllPokemon, searchPokemonsByName} = require("../controllers/pokemonsController");

const getPokemonsHandler = async (req, res) =>{
    const {name} = req.query;
    
    try {
        const results = name ? await searchPokemonsByName(name) : await getAllPokemon() 
        res.status(200).json(results);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }


};

const getDetailHandler = async (req, res) =>{
    const {id} = req.params;
    
    const source = isNaN(id) ? "bdd" : "api";
    
    try {
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({error: error.message})   
    }


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