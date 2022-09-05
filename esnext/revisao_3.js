// ES8: Object.values e Objects.entries

const object = { a: 1, b: 2 }
const values = Object.values(object)
console.log(values)

const entries = Object.entries(object)
console.log(entries)

// Notação Literal
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    return 'Ola!'
  }
}

console.log(pessoa)
console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au au'
  }
}

console.log(new Cachorro().falar())
