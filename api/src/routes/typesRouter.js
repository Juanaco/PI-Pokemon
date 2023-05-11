const {Router}= require("express");

const typesRouter = Router();


typesRouter.get("/", (req, res) => {
    res.status(200).send("NIY: acá se traen los TYPES de la API y se guardan en BDD")
});

module.exports= typesRouter;
