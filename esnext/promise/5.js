function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject('ocorreu um erro')
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('deu certo', 0.5)
  .then(console.log)
  .catch(err => console.log(err))

