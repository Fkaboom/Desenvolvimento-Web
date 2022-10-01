const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
];

const tarefasFinalizadas = tarefas.filter(
  (tarefa) => tarefa.concluida === true
);

const tarefasNaoFinalizadas = tarefas.filter(
  (tarefa) => tarefa.concluida === false
).length;

const tarefasMenos30 = tarefas.filter((tarefa) => tarefa.dias < 30);

console.log(tarefasFinalizadas);
console.log(tarefasNaoFinalizadas);
console.log(tarefasMenos30);
