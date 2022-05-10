import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [pokemons, setPokemons] = useState([]);

    // // FETCH FUNCTION
    // const fetchPokemon = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    //     .then( response => {
    //         return response.json();
    //     }).then( producedResponse => {
    //         setPokemons(producedResponse.results);
    //         console.log(pokemons);
    //     }).catch( err => {
    //         console.log(err);
    //     })
    // };

    // // AXIOS FUNCTION
    const axiosFetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then( response => setPokemons(response.data.results) )
        .catch( err => console.log(err) ); 
    };

    return (
        <>
            <button type="submit" onClick={axiosFetchPokemon}>See All Pokemon!</button>
            <ul>
                {pokemons.map( (pokemon, idx) => 
                    <li key={idx}>{pokemon.name}</li>
                )}
            </ul>
        </>
    )
    
}

export default App;
