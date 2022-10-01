const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costana',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];

const generoMedicos = medicos.forEach((tratamento) => {
  if (tratamento.genero === 'masculino') {
    console.log('Dr ' + tratamento.nome + ' ' + tratamento.sobrenome);
  } else if (tratamento.genero === 'feminino') {
    console.log('Dr(a) ' + tratamento.nome + ' ' + tratamento.sobrenome);
  } else {
    console.log('Dr(e) ' + tratamento.nome + ' ' + tratamento.sobrenome);
  }
});

console.log(generoMedicos);
