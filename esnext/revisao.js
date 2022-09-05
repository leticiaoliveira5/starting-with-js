// ESNext is a name that always indicates the next version of JavaScript

// let e var
{ 
  let a = 'a'
  var b = 'b'
  console.log(a)
}

console.log(b)
// b
// console.log(a) ==> ReferenceError: a is not defined

// template string
const string = `this is a template string ${b}`
console.log(string)

// destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2,3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)