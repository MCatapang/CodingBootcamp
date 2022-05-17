import axios from "axios";
import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import styles from './ProductDisplay.module.css';

const ProductDisplay = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => setProduct(res.data.Product[0]) )
            .catch( err => console.log("You have an error: " + err) )
    }, [id])

    if(product !== null) {
        return (
            <>
                <h1>{product.title}</h1>
                <h3>Price: ${product.price}</h3>
                <h3>{product.description}</h3>
                <Link to='/api/products'>
                    <button className={styles.btn}>Back to Product List</button>
                </Link>
                <Link to={`/api/products/edit/${id}`}>
                    <button className={styles.btn}>Edit Product Information</button>
                </Link>
            </>
        )
    }

}

export default ProductDisplay;