const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'rua abc',
    numero: 1000
  }
}

// operador destructuring:

const { nome, idade } = pessoa

// retira da estrutura (objeto pessoa) os atributos

console.log(nome, idade)

// coloca os valores numa constante

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, personalidade = true } = pessoa
console.log(sobrenome, personalidade) // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // rua abc 1000 undefined

const { dados: { agencia, conta} } = pessoa // dá erro, tomar cuidado com desestruturar um dado aninhado (dentro de chaves)