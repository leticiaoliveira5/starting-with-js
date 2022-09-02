const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const db = require('./db.js')

app.use(bodyParser.urlencoded({ extended: true })) 
// middleware chamado body parser faz o trabalho de decodificar a requisição

app.get('/produtos', (req, res, next) => {
  res.send(db.getProducts()) // convert resp to json
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

app.delete('/produtos/:id', (req, res, next) => {
  const product = db.deleteProduct(req.params.id)
  res.send(product)
})

app.use((req, res, next) => {
  res.send({ nome: 'Notebook', preco: 123.45 }) // convert to json
}) // use any URL

app.listen(port, () => {
  console.log("Servidor executando na porta" + port)
})
