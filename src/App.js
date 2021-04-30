import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, [])

  const fetchData = async e => {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=1050")
    //   .then(httpResponse => httpResponse.json())
    //   .then(jsonResponse => {
    //     console.log("data received and decoded");
    //     setPokemon(jsonResponse.results);
    //     setDataFetched(true);
    //   })
    //   .catch(err => console.log(err));

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1050") 
      .then(response => { 
        console.log(response);
        setPokemon(response.data.results)
        console.log("data recieved and decoded")
        setDataFetched(true); 
      })
      .catch(err => console.log(err)); 
  }

  return (
    <div className="container form-group">
      <button className="btn btn-secondary mt-3 form-group" onClick={ fetchData }>Fetch Pokemon</button>
      {
        dataFetched ?
        <ul>  
          {
            pokemon.map((pokemon, index)=>{
              return <li key={index}>{pokemon.name}</li>
            })
          }
        </ul>
        :
        '' 
      }
    </div>
  );
}

export default App;

