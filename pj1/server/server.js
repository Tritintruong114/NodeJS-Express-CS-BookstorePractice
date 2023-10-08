const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9999;

app.use(cors())

app.get('/api/home', (req, res) => {
  res.json({ message: "Hello Bruno", people: ['Herry', "Jack", "Berry", "Four"] })
})

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`)
})