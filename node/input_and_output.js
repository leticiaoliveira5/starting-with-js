const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

// No terminal...

// node input_and_output.js -a
// true

// node input_and_output.js -b
// false

if(anonimo) {
  process.stdout.write('Fala Anonimo\n')
  process.exit()
} else {
  process.stdout.write('Informa o seu nome: ')
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')
    process.stdout.write(`fala ${nome}\n`)
    process.exit()
  })
}
