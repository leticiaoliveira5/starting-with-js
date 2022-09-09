// setTimeout(function() {
//   console.log('executando callback')

//   setTimeout(function() {
//     console.log('executando callback')

//     setTimeout(function() {
//       console.log('executando callback')
//     }, 2000)
//   }, 2000)
// }, 2000)

// refatorando com promise...

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      // console.log('Executando...')
      resolve()
    }, tempo)
  })
}

esperarPor(3000)
  .then(esperarPor())
  .then(esperarPor())

// com async function

async function executar() {
  await esperarPor(1500)
  console.log('Async/Await 1')

  await esperarPor(1500)
  console.log('Async/Await 2')

  await esperarPor(1500)
  console.log('Async/Await 3')
}

executar()