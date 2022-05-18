// ----------------------------------------------------Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Form.module.css';


// ----------------------------------------------------Export
const Form = (props) => {

    // ------------------------------------------------Export - Declarations
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");

    // ------------------------------------------------Export - Functions
    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        };
        axios.post('http://localhost:8000/api/products/new', newProduct)
            .then((res) => {
                setTitle("");
                setPrice("");
                setDescription("");
                console.log("`.then()` was triggered!")
            })
            .catch(err => {
                const errorObjects = err.response.data.errors;
                const errorArray = [];
                for (const errorKeys in errorObjects) {
                    errorArray.push(errorObjects[errorKeys].message);
                }
                setErrors(errorArray);
            })
    }

    // ------------------------------------------------Export - Render
    return (
        <form className={styles.form} onSubmit={submitHandler}>

            {/* Header */}
            <h1>Product Manager</h1>

            {/* Input: Product Title */}
            <label htmlFor="title">
                Product Title:
                <input
                    type="text"
                    placeholder="My Product"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            {/* Input: Price */}
            <label htmlFor="price">
                Price ($):
                <input
                    type="number"
                    placeholder="20.00"
                    value={price}
                    min="0"
                    onChange={(e) => setPrice(e.target.value)}
                />
            </label>

            {/* Input: Description */}
            <label htmlFor="description">
                Description:
                <textarea
                    placeholder="An amazing product guaranteed to amaze"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>

            {/* [Conditional] Errors */}
            {errors ? errors.map((error) => <li className={styles.error}>{error}</li>) : ""}

            {/* Buttons */}
            <div>
                <button type="submit">Create</button>
                <Link to="/products">
                    <button onClick={(e) => setErrors("")}>Show All</button>
                </Link>
            </div>
        </form>
    )
}

export default Form;