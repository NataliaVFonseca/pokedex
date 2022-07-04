import React, {useEffect, useState} from "react";
import api from "../../services/api";
import "./Card.css"

function Card(props){

    const [pokemon, setPokemon] = useState(null);
    const [erro, setErro] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getPokemon(id){
        if(!id){
          return;
        }
        setIsLoading(true);
        try{
          const response = await api.get(`/pokemon/${id}`);
          setPokemon(response.data);
          setErro(null);
          console.log(response.headers);
        }
        catch(error){
          setErro('Pokemon não encontrado!');
          setPokemon(null);
        } 
        finally{
          setIsLoading(false);
        }   
      };

    useEffect(()=> {
        getPokemon(props.pokemonID);

    }, []);

    return(
        <>
         {pokemon && (  
        <div className="card" key={pokemon.id}>
          {isLoading ? (<p> Carregando...</p>) : (<> 
            <div>
              <h2> {pokemon.name}</h2>
              <img src= { pokemon.sprites['front_default']}
                   alt={pokemon.name} />
            </div>
            <div>
              <span>
                <strong> Altura </strong> : {pokemon.height *10} cm
              </span>
              <br></br>
              <span>
                <strong> Peso </strong> : {pokemon.weight / 10} kg
              </span>
              <br></br>
              <span>
                <strong> Tipo </strong> : {pokemon.types[0].type.name}
              </span>
            </div>
           
            </>)}
          </div>  
      )}
        </>
    )
}

export default Card;