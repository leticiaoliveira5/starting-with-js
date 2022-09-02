const fs = require('fs')

const path = __dirname + '/file.json'

// sync
const content = fs.readFileSync(path, 'utf-8')

console.log(content)

// async
fs.readFile(path, 'utf-8', (err, content) => {
  const config = JSON.parse(content)
  console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./file.json')
console.log(config.db)

fs.readdir(__dirname, (err, files) => {
  console.log('Conteúdo da pasta...')
  console.log(files)
})

// __dirname é uma constante que está disponível em todos os arquivos no node