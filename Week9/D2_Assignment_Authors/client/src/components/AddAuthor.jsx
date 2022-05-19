// ----------------------------------------------------------------Imports
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import styles from './GeneralUse.module.css';

// ----------------------------------------------------------------Export
const AddAuthor = (props) => {
    const [name, setName] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const newAuthor = {
            name: name
        }
        axios.post('http://localhost:8000/api/authors/new', newAuthor)
            .then( res => {
                console.log('Successfully created an author!', res);
                navigate('/');
            })
            .catch( err => setError(err.response.data.errors.name));
    }

    return (
        <div className={styles.contentContainer}>
            <form onSubmit={submitHandler}>
                <h2>Add a New Author</h2>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                {(error !== []) ? <h3>{error.message}</h3> : ""}
                <div>
                    <button onClick={(e) => navigate('/')}>Cancel</button>
                    <button className={styles.buttonSubmit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default AddAuthor;