// exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
  console.log('O evento ocorreu')
}

// o evento é o click do mouse.
// quando o corpo(body) é clicado, ele imprime
// no console do browser "O evento ocorreu"