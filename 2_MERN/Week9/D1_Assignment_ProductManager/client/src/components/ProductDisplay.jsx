// ----------------------------------------------------Imports
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from './ProductDisplay.module.css';


// ----------------------------------------------------Export
const ProductDisplay = (props) => {

    // ------------------------------------------------Export - Declarations
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // ------------------------------------------------Export - Functions
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.Product[0]))
            .catch(err => console.log(`You have an error: ${err}`))
    }, [id])

    // ------------------------------------------------Export - Render
    if (product !== null) {
        return (
            <>
                {/* Product Information */}
                <h1>{product.title}</h1>
                <h3>Price: ${product.price}</h3>
                <h3>{product.description}</h3>

                {/* Buttons */}
                <Link to='/products'>
                    <button className={styles.btn}>Back to Product List</button>
                </Link>
                <Link to={`/products/edit/${id}`}>
                    <button className={styles.btn}>Edit Product Information</button>
                </Link>
            </>
        )
    }

}

export default ProductDisplay;