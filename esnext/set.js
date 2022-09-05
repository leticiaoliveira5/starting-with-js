// nao aceita repetição/ não indexado

const { time } = require("console")

const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Fluminense')
times.add('Fluminense') // ignora repetições

console.log(times)
console.log(times.has('Vasco'))

times.delete('Flamengo')

console.log(times.has('Flamengo'))

const nomes = [ 'Ana', 'Carla', 'Joaquim' ]
nomesSet = new Set(nomes)
console.log(nomesSet)