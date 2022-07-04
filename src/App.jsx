
import React, { useState } from "react";
import api from "./services/api";
import Presentation from './components/Presentations/Presentations';
import PokemonCards from './components/PokemonCards/PokemonCards';
import UIInfiniteScroll from "./components/infiniteScroll/infiniteScroll";
 
const App = () => {

  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState(null);
  const [typePokemon, setTypePokemon] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (event) => {
    setTypePokemon(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!typePokemon){
      return;
    }
    setIsLoading(true);
    try{
      const response = await api.get(`/pokemon/${typePokemon}`);
      setPokemon(response.data);
      setErro(null);
    }
    catch(error){
      setErro('Pokemon não encontrado!');
      setPokemon(null);
    } 
    finally{
      setIsLoading(false);
    }   
  };

  return (
    <div>
        <Presentation />
        
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
  
        <PokemonCards />
        {<PokemonCards/> && (
        <UIInfiniteScroll fetchMore={() => console.log("Apareceu na tela")}/>
        )}
      </div> 
)}
export default App;

