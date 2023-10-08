var express = require("express");
var router = express.Router();

/* GET home page. */

const pokemonRouter = require("./pokemon.api.js");
const imageRouter = require("./image.api.js");

router.use("/pokemons", pokemonRouter);
router.use("/images", imageRouter);

module.exports = router;
