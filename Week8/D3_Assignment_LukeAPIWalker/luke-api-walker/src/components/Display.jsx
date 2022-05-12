import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Results = (props) => {

    const [neededInfo, setNeededInfo] = useState(null)

    const {category, id} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then( result => setNeededInfo(result.data))
            .then( console.log(neededInfo) )
            .catch( error => console.log(error));
    }, [neededInfo]);

    if(neededInfo !== null) { 
        return(
            <>
                <h1>{neededInfo.name}</h1>
                <ul>
                    <li>{neededInfo.gender}</li>
                    <li>{neededInfo.mass}</li>
                    <li>{neededInfo.hair_color}</li>
                </ul>
            </>
        )
    } else {
        <h1>Loading!</h1>
    }
}

export default Results;