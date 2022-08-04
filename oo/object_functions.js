const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 12
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)  
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // objeto não é writable, ou seja, não pode ser modificado
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const obj = Object.assign(dest, o1)
console.log(obj)
// { a:1, b:2 }