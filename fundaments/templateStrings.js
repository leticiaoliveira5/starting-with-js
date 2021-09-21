const nome = 'Rebeca'
const concatenacao = 'Olá,' + nome + '!'
const template = `
   Olá,
   ${nome}!` 
  //  ` permite quebrar linha

console.log(concatenacao, template)

// expressao
console.log(`1 + 1 = ${1 + 1}`)

// ${} colocar código dentro da string

const up = text => text.toUpperCase()
console.log(`Ei...${up('cuidado')}! `)