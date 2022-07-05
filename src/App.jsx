
import React, { useState } from "react";
import Presentation from './components/Presentations/Presentations';
import PokemonCards from './components/PokemonCards/PokemonCards';
import Card from "./components/Card/Card";
 
const App = () => {

  const [typePokemon, setTypePokemon] = useState('');
  
  const handleChange = (event) => {
    setTypePokemon(event.target.value);
  };

  return (
    <div className="pokedex">
        <Presentation />
        <p> Digite o nome ou o id de um Pokemon para começar! </p>
        <form className="forms" onSubmit={handleChange}>
          <input
          value={typePokemon}
          placeholder="Nome do Pokemon/id"
          onChange={handleChange}
          />
        </form>
        { typePokemon ? <Card pokemonID={typePokemon} key={"typed " + typePokemon}/> : <PokemonCards />}
       
      </div> 
)}
export default App;

