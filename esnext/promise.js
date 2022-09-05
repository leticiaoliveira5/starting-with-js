
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    // resolve - quando a promessa é cumprida
    // reject - quando ocorre algum erro
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que legal')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e))

