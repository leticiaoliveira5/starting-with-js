console.log(typeof console) // OBJECT

const obj = {}
obj.nome = 'Nome'

console.log(obj.nome)
// Nome

function Obj(nome) {
  this.nome = nome
}

const obj2 = new Obj('Bola')
const obj3 = new Obj('Faca')

console.log(obj2.nome)
console.log(obj3.nome)