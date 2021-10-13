//Função em Javascript é um First Class Object Citizen
// ou High Order Function

// criar de forma literal
function fun1() {}

// armanezar em uma variável
const fun2 = function () {}

// armazenar em um array
const array = [function (a,b) { return (a + b) }, fun1, fun2]

// passar função como param

function run(fun) {
  fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função

function soma(a, b) {
  return function (c) {
    return (a + b + c)
  }
}

console.log( soma(1,1)(1) )

const DoisMais = soma(1,1)
console.log( DoisMais(1) )