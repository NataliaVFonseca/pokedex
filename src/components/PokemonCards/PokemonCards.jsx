import React, {useCallback, useEffect, useState, useRef} from "react";
import "./PokemonCards.css"
import Card from '../Card/Card';

function PokemonCards(props){

  const [pokemonID, setPokemonID] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [typePokemon, setTypePokemon] = useState('');

    const genereteCard = () =>{
        if(loading){
          setCards(cards => [...cards, <Card pokemonID={pokemonID} key={pokemonID} />]);
          setPokemonID(pokemonID + 1);
          setLoading(false);
        }
      };

      const observer = useRef()
      const loaderRef = useCallback(node => {
        if(observer.current){
          observer.current.disconnect();
        }
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            setLoading(true)
            genereteCard();
          }
        });
        if(node){
          observer.current.observe(node);
        }
      }, [loading]);

    return(
      <>
        <div className="pokemonCards">
            {cards ? cards : <p> Carregando Pokemons</p>}
        </div>
        <p ref={loaderRef}>Carregando pokemons</p>
      </>
    );
}

export default PokemonCards;