import React from "react";
import "./PokemonCards.css"
import Card from '../Card/Card';

function PokemonCards(){

    const genereteCard = () =>{
        let cards=[];
          for(var i = 1; i<=5; i++){
            cards.push(<Card pokemonID={i} key={i}/>)
          }
        return (cards);
       }

    return(
        <div className="pokemonCards">
            {genereteCard()}
        </div>
     )
}

export default PokemonCards;