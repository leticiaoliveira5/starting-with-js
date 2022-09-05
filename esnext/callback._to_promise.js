const http = require('http')


// callback

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  http.get(url, res => {
    let resultado = ''

    res.on('data', dados => {
      resultado += dados
    })

    res.on('end', () => {
      callback(JSON.parse(resultado))
    })
  })
}

let nomes = []
getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
    console.log(nomes)
  })
})


// refatorando com Promise

const getTurma2 = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''
  
      res.on('data', dados => {
        resultado += dados
      })
  
      res.on('end', () => {
        try { 
          resolve(JSON.parse(resultado))
        } catch(e) {
          reject(e)
        }
      })
    })
  })
}

let nomes2 = []
getTurma2('A'). then(alunos => {
  nomes2 = nomes2.concat(alunos.map(a => `A: ${a.nome}`))
  getTurma2('B').then(alunos => {
    nomes2 = nomes2.concat(alunos.map(b => `B: ${b.nome}`))
    console.log(nomes2)
  })
})

Promise.all([getTurma2('A'), getTurma2('B'), getTurma2('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes2 => console.log(nomes2))
  