const express = require("express");
const router = express.Router();
const fs = require("fs");

let database = fs.readFileSync("pokemons.json", "utf-8");
database = JSON.parse(database);

let newArray = database.slice(0, 721);
router.get("/", (req, res, next) => {
  //Read data from db.json then parse to JSobject
  try {
    let result = {
      data: newArray.map((pokemon, index) => {
        return {
          id: index,
          name: pokemon.Name,
          types: [pokemon.Type1, pokemon.Type2],
          url: `http://localhost:3333/images/${index + 1}.png`,
        };
      }),
      totalPokemon: newArray.length,
    };
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", (req, res, next) => {
  try {
    let pokemon = newArray.filter(
      (pokemon) => pokemon.Name === req.params.name
    );

    let index = newArray.indexOf(pokemon[0]);

    let previous = index === 0 ? newArray.length - 1 : index - 1;

    let next = index === newArray.length - 1 ? 0 : index + 1;

    let result = {
      previous: {
        id: previous,
        name: newArray[previous].Name,
        types: [newArray[previous].Type1, newArray[previous].Type2],
        url: `http://localhost:3333/images/${previous}.png`,
      },
      next: {
        id: next,
        name: newArray[next].Name,
        types: [newArray[next].Type1, newArray[next].Type2],
        url: `http://localhost:3333/images/${next}.png`,
      },
      id: index,
      name: pokemon[0].Name,
      types: [pokemon[0].Type1, pokemon[0].Type2],
      url: `http://localhost:3333/images/${index}.png`,
    };

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

router.get("/type/:type", (req, res, next) => {
  try {
    let pokemon = database.filter(
      (pokemon) =>
        pokemon.Type1 === req.params.type || pokemon.Type2 === req.params.type
    );
    let result = {
      data: pokemon.map((pokemon) => {
        return {
          id: database.indexOf(pokemon),
          name: pokemon.Name,
          types: [pokemon.Type1, pokemon.Type2],
          url: `http://localhost:3333/images/${
            database.indexOf(pokemon) + 1
          }.png`,
        };
      }),
    };

    // res.status(200).send(result);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
