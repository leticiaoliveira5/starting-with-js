// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'Fala' // contexto léxico 2
  return saudacao
}

// objetos são grupos de pares nome/valor

const Cliente = {
 nome: 'Leticia',
 idade: '26',
 peso: 45,
 endereco: {
   logradouro: 'Av Chopin',
   numero: 123
 }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)