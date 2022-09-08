function gerarNumeroEntre(min, max) {
  if(min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const aleatorio = parseInt(Math.random() * (max - min + 1))
    resolve(aleatorio)
  })
}

gerarNumeroEntre(1,60)
  .then(num => `O número gerado foi ${num}`)
  .then(console.log)
