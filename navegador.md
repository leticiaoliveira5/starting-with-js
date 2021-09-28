Entrei no browser (google chrome)
Mais ferramentas/Ferramentas do desenvolvedor

No console:

` window ` + enter
input: ` window === this ` + enter // `this` pode ser usado para acessar window
output: ` true `

Window é um objeto que guarda muitas informações

input: ` let teste = "teste" `

input: ` window.teste `

output: ` "teste" `

- O `let` guarda informações no ambiente "global" (window)

as outras formas de estabelecer variáveis (var, const) **não**.

input ` var a = "teste" `

input ` window.a `

output: ` undefined `

input: ` a `

output: ` "teste" `

Isso não significa que a variável não estão