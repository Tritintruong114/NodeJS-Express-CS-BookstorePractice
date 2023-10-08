const fs = require('fs')

const csv = require('csvtojson')

const createPokedex = async () => {
  let newDate = await csv().fromFile('pokemon.csv')
  console.log(newDate)
}

createPokedex()