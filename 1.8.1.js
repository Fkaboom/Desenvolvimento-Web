import React from "react";

const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
		'Jack Baker',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
		'Lucas Baker',
  ];
   const personagensFiltrados = personagens.filter((personagem) => {
  const Familia = personagem.toLowerCase().includes(props.familia);
  return Familia;
});

  return (
    <div>
      
      <ul>
        {personagensFiltrados.map(personagem => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const [show,setShow] = React.useState('Todos');

  const handleOnClick = (value) => setShow(value);

  return (
    <div className="App">
      <div>
        <h3>Mostrar Personagens de Resident Evil</h3>
        <button onClick={()=>handleOnClick('Baker')}>Baker</button>
        <button onClick={()=>handleOnClick('Todos')}>Todos</button>
        <button onClick={()=>handleOnClick('Redfield')}>Redfield</button>
        
        {show === 'Baker' && (
        <div>
          <Personagens familia="baker" />
        </div>
      )}
      {show === 'Redfield' && (
        <div>
          <Personagens familia="redfield"/>
        </div>
      )}
      {show === 'Todos' && (
        <div>
          <Personagens familia=""/>
        </div>
      )}
      </div>
    </div>
  );
}
