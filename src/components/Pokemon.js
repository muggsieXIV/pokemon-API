import React, { useEffect, createContext, useState } from 'react';

export const PokemonContext = createContext();

const Pokemon = () =>{

    const fetchData = e => {
        console.log("button pressed");
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response=> {
            console.log(response.pokemon);
        <ul>{
            useState.map((pokemon, index)=>
                <li key={index}>{ pokemon.name }</li>
            )   
        }</ul>
        }).catch(err => {
            console.log(err);
        });

    }


    return(
        <div>
            <button className="btn btn-secondary mt-3" onClick={fetchData}>Fetch Pokemon</button>
            {PokemonContext.length > 0 && PokemonContext.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default Pokemon;

