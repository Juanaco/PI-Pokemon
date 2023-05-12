const {Pokemon} = require("../db");

const createPokemon = async (name, image, hp, attack, defense, speed, height, weight) =>
    await Pokemon.create({name, image, hp, attack, defense, speed, height, weight});


module.exports= {createPokemon};