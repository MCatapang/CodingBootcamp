// ----------------------------------------------------Imports
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Form.module.css';

// ----------------------------------------------------Export
const ProductEdit = (props) => {
    // ------------------------------------------------Declarations
    const [product, setProduct] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedProduct = {
            title: title,
            price: price,
            description: description
        };
        axios.put(`http://localhost:8000/api/products/udpate/${id}`, updatedProduct)
            .then(res => console.log(`Successfully updated your product: ${res.data}`))
            .catch(err => console.log(`Something went wrong! Error: ${err}`))
        navigate(`/products/show/${id}`);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data.Product[0]);
                setTitle(res.data.Product[0].title);
                setPrice(res.data.Product[0].price);
                setDescription(res.data.Product[0].description);
            })
            .catch(err => console.log(`You have an error: ${err}`))
    }, [id])

    // ------------------------------------------------Render
    if (product !== "") {
        return (
            <form className={styles.form} onSubmit={submitHandler}>
                {/* Header */}
                <h1>Update Product Information</h1>
                
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

                {/* Buttons */}
                <div>
                    <Link to={`/products/show/${id}`}>
                        <button>Back</button>
                    </Link>
                    <button type="submit">Update</button>
                </div>
            </form>
        )
    }
}

export default ProductEdit;