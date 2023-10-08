const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req.path);
  res.sendFile("1.png", { root: "./public/pokemon" });
});

router.get("/:path", (req, res, next) => {
  let pokemonMonImg = req.params.path;
  res.sendFile(`${pokemonMonImg}`, { root: "./public/pokemon" });
});

module.exports = router;
