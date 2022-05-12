// ----------------------------------------------------Imports
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


// ----------------------------------------------------Export
const Form = (props) => {
    // ------------------------------------------------Constants
    const [category, setCategory] = useState('people');
    const [id, setID] = useState(null);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }

    // ------------------------------------------------Conditional Render
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="people">
                <select type="select" name="category" onChange={ (e) => setCategory(e.target.value) }>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
            </label>
            <label htmlFor="id">
                <input type="number" min="1" onChange={ (e) => setID(e.target.value)}/>
            </label>
            <button type="submit">Search</button>
        </form>
    )
}

export default Form;