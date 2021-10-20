// CLOSURE - conceito:
// escopo criado quando a função é definida

const x = 'Global'

function fora() {
  const x = 'Local'
  function dentro() {
    console.log(x)
  }
  return dentro()
}

fora() // Local