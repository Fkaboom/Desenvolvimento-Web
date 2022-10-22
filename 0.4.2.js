const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

const media = alunos.map((aluno) => {
  aluno.mediaGeral =
    aluno.notas.reduce((acc, _nota) => {
      const { nota } = _nota;
      return acc + nota;
    }, 0) / aluno.notas.length;
  return aluno;
});

console.log(media);
