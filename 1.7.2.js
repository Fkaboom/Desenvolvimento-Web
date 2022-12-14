


const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];
  
    const personagensFiltrados = personagens.filter((personagem) => {
   

      const Familia = personagem.toLowerCase().includes(props.familia);
      

      return Familia;
    });
  
    return (
      <div>
        <h3>Personagens de Resident Evil com esse nome</h3>
        <ul>
          {personagensFiltrados.map((personagem) => (
            <li>{personagem}</li>
          ))}
        </ul>
      </div>
    );
  };


export default function App() {
  return (
    <div className="App">
      <div>
        <Personagens familia="redfield" />;
      </div>
    </div>
  );
}
