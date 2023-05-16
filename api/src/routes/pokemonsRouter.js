const {Router} = require("express");
const { getPokemonsHandler, getDetailHandler, createPokemonHandler } = require("../handlers/pokemonHandlers");


const pokemonsRouter = Router();

// ¨*****************************
// middleware VALIDADOR ((hacer carpeta de middlewares))
// **********
const validate = (req, res, next)=>{
    const {name, image, hp, attack, defense, speed, height, weight} = req.body;
    if(!name) return res.status(400).json({error: "Missing Name"});
    if(!image) return res.status(400).json({error: "Missing Image"});
    if(!hp) return res.status(400).json({error: "Missing HP"});
    if(!attack) return res.status(400).json({error: "Missing Attack"});
    if(!defense) return res.status(400).json({error: "Missing Defense"});
    if(!speed) return res.status(400).json({error: "Missing Speed"});
    if(!height) return res.status(400).json({error: "Missing Height"});
    if(!weight) return res.status(400).json({error: "Missing Weight"});
// ************************************
// Faltan los datos del modelo TYPE en el formulario 
// ****************************************
    next();
};

pokemonsRouter.get("/", getPokemonsHandler);

pokemonsRouter.get("/:id", getDetailHandler);

pokemonsRouter.post("/", validate, createPokemonHandler);

module.exports= pokemonsRouter;