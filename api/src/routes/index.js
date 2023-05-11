const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


mainRouter.use("/pokemons", pokemonsRouter);

mainRouter.use("/types", typesRouter);


module.exports = mainRouter;
