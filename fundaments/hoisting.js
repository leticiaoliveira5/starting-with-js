// hoisting = içamento
// com var, ocorre o içamento da variável (não o valor) para o início do código
// com let, o mesmo código geraria um erro pois let não gera o içamento

console.log('a =', a) // a = underfined
var a = 2
console.log('a =', a) // a = 2
