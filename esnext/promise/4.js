function gerarNumeroEntre(min, max, tempo) {
  if(min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout( function() {
      const aleatorio = parseInt(Math.random() * (max - min + 1))
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroEntre(1, 60, 4000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 1000)
  ])
}

console.time('tempo') // seta a label do temporizador

gerarVariosNumeros()
  .then(numeros => console.log(numeros))
  .then(() => {
    console.timeEnd('tempo')
  })
