// ----------------------------------------------------------------Imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GeneralUse.module.css';
import axios from 'axios';


// ----------------------------------------------------------------Export
const Home = (props) => {
    // ------------------------------------------------------------Export: Declarations
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    const getAllAuthors = () => (
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log('Successfully retrieved information for all authors', res.data.Authors);
                setAuthors(res.data.Authors);
            })
            .catch(err => console.log(`Was not able to retrieve all the authors due to an error: ${err}`))
    )

    useEffect(() => getAllAuthors, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => {
                console.log("Sucessfully deleted author", res);
                setAuthors(authors.filter( (author) => author._id !== id ));
            })
            .catch(err => console.log(`Failed to delete author`))
    }

    return (
        <>
            <h2>We have quotes by:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx) => {
                        return (
                            <tr key={idx}>
                                <td className={styles.authorContainer}>{author.name}</td>
                                <td className={styles.buttonContainer}>
                                    <button className={styles.buttonEdit} onClick={(e) => navigate(`/edit/${author._id}`)}>Edit</button>
                                    <button className={styles.buttonDelete} onClick={(e) => deleteHandler(`${author._id}`)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className={styles.buttonAdd} onClick={(e) => navigate('/new')}>Add Author</button>
        </>
    )

}

export default Home;