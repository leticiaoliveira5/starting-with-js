let comparaThis = function(param) {
  console.log(this === param)
}

comparaThis(global)

const object = {}

comparaThis = comparaThis.bind(object)
comparaThis(global) //false
comparaThis(object) //true

let comparaThisArrow = param => console.log(this === param)
comparaThisArrow(global) // false
comparaThisArrow(module.exports) // true
comparaThisArrow(this) // true

// this numa função arrow sempre será o this na escrita da função.