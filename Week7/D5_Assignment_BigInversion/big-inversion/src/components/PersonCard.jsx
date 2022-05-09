// ------------------------IMPORTS------------------------
import React from 'react';


// ------------------------COMPONENTS------------------------
const PersonCard = props => (
        <>
            <h1 className="shadow">{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </>
)

// ------------------------EXPORT------------------------
export default PersonCard;