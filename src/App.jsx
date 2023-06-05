import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Personagem from './Components/Personagem';
import PersonagemBuscado from './Components/PersonagemBuscado';

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [busca, setBusca] = useState('');
  const [personagemBuscado, setPersonagemBuscado] = useState({});
  const API_PERSONAGENS = 'https://rickandmortyapi.com/api/character';
  const API_BUSCA = 'https://rickandmortyapi.com/api/character/?name=';

  useEffect(() => {
    axios.get(API_PERSONAGENS).then(({ data }) => {
      setPersonagens(data.results);
    });
  }, []);

  const buscar = () => {
    if (personagemBuscado.name) {
      // Já existe um personagem buscado, não fazer nova requisição
      return;
    }

    axios.get(API_BUSCA + busca).then(({ data }) => {
      setPersonagemBuscado(data.results[0]);
    });
  };

  const exibirListaPersonagens = () => {
    setPersonagemBuscado({});
  };

  return (
    <div className='container'>
      <input type='text' placeholder='Buscar personagem' onChange={e => setBusca(e.target.value)} />
      <button onClick={buscar}>Buscar</button>
      {personagemBuscado.name ? (
        <div>
          <PersonagemBuscado personagem={personagemBuscado} />
          <button onClick={exibirListaPersonagens}>Exibir lista</button>
        </div>
      ) : (
        <ul>
          {personagens.map(personagem => (
            <li key={personagem.id}>
              <Personagem nome={personagem.name} status={personagem.status} foto={personagem.image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;