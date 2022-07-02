
import React, { useState } from "react";
import api from "./services/api";
 
const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState(null);
  const [typePokemon, setTypePokemon] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (event) => {
    setTypePokemon(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefualt();
    if(!typePokemon){
      return;
    }
    setIsLoading(true);
    try{
      const response = await api.get(`/pokemon/${typePokemon}`);
      setTypePokemon(response.data);
      setErro(null);
      setIsLoading(false);
    }
    catch(error){
      setErro('Pokemon não encontrado!');
      setIsLoading(false);
      setPokemon(null);
    }    
  };


  return (
    <div>
      <h1> Seja bem-vindo à Pokedex!</h1>
        <p>
          Digite o nome ou o id de um Pokemon para começar!
        </p>
        <form onSubmit={handleSubmit}>
          <input
          value={typePokemon}
          placeholder="Nome do Pokemon/id"
          onChange={handleChange}
          />
          <button type="submit">
            {isLoading ? (<span>carregando...</span>) : (<>Buscar</>)}
          </button>
        </form>
    </div>
  );
};
export default App;
