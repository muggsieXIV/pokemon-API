import React, { createContext, useState } from 'react';

const Results = () => {
    
    return(
        <div className="container mt-3">
            {pokemon.map((pokemon, i)=> (
                <ul>
                    <li>{ pokemon.name }</li>
                </ul>
            ))}
        </div>
    );
}

