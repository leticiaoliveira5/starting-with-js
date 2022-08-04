const pessoa = { nome: 'Ana' }
pessoa.nome = "Pedro"
console.log(pessoa)

// congela o objeto, não permite edição do objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua Acre'
delete pessoa.nome

console.log(pessoa)