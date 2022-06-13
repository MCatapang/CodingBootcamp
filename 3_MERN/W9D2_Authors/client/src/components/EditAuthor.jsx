// ----------------------------------------------------------------Imports
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './GeneralUse.module.css';

// ----------------------------------------------------------------Export
const EditAuthor = (props) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        const newAuthor = {
            name: name
        }
        axios.put(`http://localhost:8000/api/authors/update/${id}`, newAuthor)
            .then(res => {
                console.log("Edited information passed server-side validations!", res)
                navigate('/');
            })
            .catch(err => setError(err.response.data.errors))
    }
    useEffect( () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log("Retrieved author information, now going to setState", res);
                setName(res.data.Author.name);
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className={styles.contentContainer}>
            <form onSubmit={submitHandler}>
                <h2>Edit Author</h2>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                {error ? <h3>{error.name.message}</h3> : ""}
                <div>
                    <button onClick={(e) => navigate('/')}>Cancel</button>
                    <button className={styles.buttonSubmit} type="submit">Update</button>
                </div>
            </form>
        </div>
    )

}

export default EditAuthor;