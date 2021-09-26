// ou: ||
// e: &&
// negação: ! 
// ou exclusivo: ^ (um deve ser verdadeiro e o outro falso)

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // !! transforma num boolean
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // devolve um objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))