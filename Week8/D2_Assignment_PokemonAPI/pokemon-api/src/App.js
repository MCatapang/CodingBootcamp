import React, {useState} from 'react';
import './App.css';

function App() {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then( response => {
            return response.json();
        }).then( producedResponse => {
            setPokemons(producedResponse.results);
            console.log(pokemons);
        }).catch( err => {
            console.log(err);
        })
    };

    return (
        <>
            <button type="submit" onClick={fetchPokemon}>See All Pokemon!</button>
            <ul>
            {pokemons.map( (pokemon, idx) => 
                <li key={idx}>{pokemon.name}</li>
            )}
            </ul>
        </>
    )
    
}

export default App;
