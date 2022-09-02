const port = 3003

const express = require('express')
const app = express()
const db = require('./db.js')

app.get('/produtos', (req, res, next) => {
  res.send({ nome: 'Notebook', preco: 123.45 }) // convert to json
})

app.get('/produtos', (req, res, next) => {
  res.send(db.getProducts) // convert to json
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(db.getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const product = db.saveProduct({
    name: req.body.name,
    price: req.body.price
  })
  res.send(product)
})

app.use((req, res, next) => {
  res.send({ nome: 'Notebook', preco: 123.45 }) // convert to json
}) // use any URL

app.listen(port, () => {
  console.log("Servidor executando na porta" + port)
})
