// try, catch, throw

function LancarErro(erro) {
  throw new Error('Mensagem de erro que será impresso no terminal')
}

// throw 'string'
// throw 10
// throw { obj: obj }
// throw true

function funcaoTeste(obj) {
  try {
    console.log(obj.name.toUpperCase()) + '!'
  } catch(e) {
    LancarErro(e)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Biro' }
funcaoTeste(obj)

// finally ~> será chamado de qualquer forma, mesmo sem dar erro