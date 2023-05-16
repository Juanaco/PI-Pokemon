const {Router}= require("express");
const { getTypesHandler } = require("../handlers/typeHandlers");

const typesRouter = Router();


typesRouter.get("/", getTypesHandler);

module.exports= typesRouter;
