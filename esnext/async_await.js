const http = require('http')

const getTurma = (letra) => {
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
};

// recurso do ES8
// objetivo: simplificar o uso de promise
// await só funciona em função async

const obterAlunos = async () => {
  const turmaA = await getTurma('A');
  const turmaB = await getTurma('B');
  const turmaC = await getTurma('C');
  return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

obterAlunos() // async function
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))
