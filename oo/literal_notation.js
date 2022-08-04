const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }

console.log(obj1, obj2) // obj1 e obj2 são iguais

//

nomeAttr = 'a'
valorAttr = 'b'
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//

const obj4 = {
  funcao1: function() {},
  funcao2: function() {}
}
console.log(obj4)