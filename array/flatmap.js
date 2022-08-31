const escola = [{
  nome: 'turma 1',
  alunos: [{ nome: 'Gustavo', nota: 7.1 },
           { nome: 'Poliana', nota: 5.0 }
]
},
{ nome: 'turma 2',
alunos: [{ nome: 'Leticia', nota: 5 }]}
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}
// concatena os arrays em um só

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)