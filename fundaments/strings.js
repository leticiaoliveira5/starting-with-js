const escola = "Cod3r"

console.log(escola.charAt(4)) // devolve o caracter que está no índice 4
console.log(escola.charAt(5)) // nada
console.log(escola.charCodeAt(3)) // retorna o codigo Unicode do char
console.log(escola.indexOf('3')) // retorna o índice do char

console.log(escola.substring(1)) // a partir do índice 1...
console.log(escola.substring(1,3)) // entre o 1 e o 3 ...

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace('3', 'e')) // Coder ... vai regex tbm

console.log('Maria,Joaquina,Beth'.split(',')) // gera um array


