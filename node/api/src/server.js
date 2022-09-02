const port = 3003

const { response } = require('express')
const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
  response.send({ nome: 'Notebook', preco: 123.45 }) // convert to json
})

app.listen(port, () => {
  console.log("Servidor executando na porta" + port)
}
)