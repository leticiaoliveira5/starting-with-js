const fs = require('fs')

function readThisFile(path) {
  const file_path = __dirname  + path
  
  return new Promise(resolve => {
    const content = fs.readFileSync(file_path, 'utf-8')
    resolve(content.toString())
  })
}

readThisFile('/promise.txt')
  .then(content => content.split('\n'))
  .then(linhas => linhas.join(','))
  .then(console.log)