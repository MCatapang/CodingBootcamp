// ----------------------------------------------------Imports
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


// ----------------------------------------------------Export
const Results = (props) => {
    // ------------------------------------------------Constants
    const [neededInfo, setNeededInfo] = useState(null);
    const {category, id} = useParams();
    const navigate = useNavigate();

    // ------------------------------------------------API
    useEffect( () => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then( result => setNeededInfo(result.data))
            .catch( err => {
                console.log(err);
                navigate("/error")
            });
    }, [neededInfo]);

    // ------------------------------------------------Conditional Render
    if(neededInfo !== null) { 
        if(category == 'people') {
            return(
                <>
                    <h1>Name: {neededInfo.name}</h1>
                    <ul>
                        <li>Gender: {neededInfo.gender}</li>
                        <li>Mass: {neededInfo.mass}</li>
                        <li>Hair Color: {neededInfo.hair_color}</li>
                    </ul>
                </>
            )
        } 
        else if(category == 'planets') {
            return(
                <>
                    <h1>Name: {neededInfo.name}</h1>
                    <ul>
                        <li>Climate: {neededInfo.climate}</li>
                        <li>Terrain: {neededInfo.terrain}</li>
                        <li>Surface Water: {neededInfo.surface_water}</li>
                    </ul>
                </>
            )
        }
    }
    if(neededInfo == null) {
        return(<h1>Loading... uwu</h1>);
    }
}

export default Results;