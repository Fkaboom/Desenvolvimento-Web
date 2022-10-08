const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];
const resultado = filmes.map((filme) => {
  return {
    titulo: filme.nome,
    lancamento: filme.lancamento,
  };
});
console.log(resultado);

let id = 0;

const contador = filmes.map((filme) => {
  id++;
  return {
    titulo: filme.nome,
    lancamento: filme.lancamento,
    id,
  };
});
console.log(contador);
