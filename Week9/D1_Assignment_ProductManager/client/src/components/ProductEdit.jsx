// ----------------------------------------------------Imports
import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import styles from './Form.module.css';

// ----------------------------------------------------Export
const ProductEdit = (props) => {
    // ------------------------------------------------Declarations
    const [product, setProduct] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();
    let changeCounter = 0;

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedProduct = {title: title, price: price, description: description};
        axios.put(`http://localhost:8000/api/products/udpate/${id}`, updatedProduct)
            .then( res => console.log("Successfully updated your product!", res.data) )
            .catch( err => console.log("Something went wrong! Error:", err ) )
        changeCounter += 1;
    }

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                setProduct(res.data.Product[0]);
                setTitle(res.data.Product[0].title);
                setPrice(res.data.Product[0].price);
                setDescription(res.data.Product[0].description);
            })
            .catch( err => console.log("You have an error: " + err) )
    }, [id, changeCounter])

    // ------------------------------------------------Render
    if(product !== "") {
        return(
            <form className={styles.form} onSubmit={submitHandler}>
                <h1>Update Product Information</h1>
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
                <div>
                    <Link to={`/api/products/show/${id}`}>
                        <button>Back</button>
                    </Link>
                    <button type="submit">Update</button>
                </div>
            </form>
        )
    }
}

export default ProductEdit;