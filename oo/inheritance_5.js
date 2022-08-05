console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function 

// toda function tem um atributo prototype
// adicionando  funções para os tipos de dados!

String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
  return this[0]
}

console.log(['A', 'B'].first())