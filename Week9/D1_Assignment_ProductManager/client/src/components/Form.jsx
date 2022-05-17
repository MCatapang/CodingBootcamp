// ----------------------------------------------------Imports
import React, {useState} from 'react';
import axios from 'axios';
import styles from './Form.module.css';


// ----------------------------------------------------Export
const Form = (props) => {
    // ------------------------------------------------Declarations
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {title: title, price: price, description: description};
        console.log(newProduct);
        axios.post('http://localhost:8000/api/products/new', newProduct)
            .then( res => console.log("Successfully created a product!", res.data) )
            .catch( err => console.log("Something went wrong! Error:", err ) )
    }

    // ------------------------------------------------Conditional Render
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <h1>Product Manager</h1>
            {/* {JSON.stringify(title)} // {JSON.stringify(price)} // {JSON.stringify(description)} */}
            <label htmlFor="title">
                Product Title:
                <input type="text" placeholder="My Product" value={title} onChange={ (e) => setTitle(e.target.value)} />
            </label>
            <label htmlFor="price">
                Price ($):
                <input type="number" placeholder="20.00" value={price} min="0" onChange={ (e) => setPrice(e.target.value)} />
            </label>
            <label htmlFor="description">
                Description:
                <textarea placeholder="An amazing product guaranteed to amaze" value={description} onChange={ (e) => setDescription(e.target.value)} />
            </label>
            <button type="submit">Create</button>
        </form>
    )
}

export default Form;