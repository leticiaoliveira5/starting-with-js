const ferrari = {
  modelo: 'F48',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ == Object.prototype) // true
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto) // function, function
console.log(Object.prototype, meuObjeto.prototype)

// Cadeia de prototipos (Prototype Chain)

Object.prototype.attr0 = '0'
const grandfather = { attr1: 'A' }
const father = { __proto__: grandfather, attr2: 'B' }
const son = { __proto__: father, attr3: 'C' }
console.log(son.attr1, son.attr0, son.attr2)

// o objeto filho herda do pai, que herda do avô


