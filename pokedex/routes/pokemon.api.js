const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res, next) => {
  //Read data from db.json then parse to JSobject
  try {
    let database = fs.readFileSync("pokemons.json", "utf-8");

    database = JSON.parse(database);

    let result = {
      data: database.map((pokemon, index) => {
        return {
          id: index,
          name: pokemon.Name,
          types: [pokemon.Type1, pokemon.Type2],
          url: `http://localhost:3333/images/${index + 1}.png`,
        };
      }),
      totalPokemon: database.length,
    };
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
