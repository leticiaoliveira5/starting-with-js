isActive = true

console.log(isActive) // true
console.log(!isActive) // false

isActive = 1

console.log(!isActive) // false
console.log(!!isActive) // true

console.log(!!1) // true
console.log(!!Infinity) //true
console.log(!!' ') // true
// string vazia se comporta como false
// string com espaço se comporta com true

console.log(!!NaN) // false
console.log(!!undefined) // false
console.log(!!null) // false
console.log(!!0) // false

console.log('' || 0 || 'true' || null) // retorna o valor verdadeiro