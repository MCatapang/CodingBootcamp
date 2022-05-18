// ----------------------------------------------------Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// ----------------------------------------------------Export
const ProductList = (props) => {

    // ------------------------------------------------Export - Declaration
    const [ProductList, setProductList] = useState(null);

    // ------------------------------------------------Export - Functions
    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/products/delete/${id}`,)
            .then(console.log(`Successfully deleted the product with an id of ${id}!`))
            .catch(err => console.log(`The product wasn't deleted! Err: ${err}`))
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProductList(res.data.Products))
            .catch(err => console.log("You have an error: " + err))
    }, [ProductList]);

    // ------------------------------------------------Export - Render
    if (ProductList !== null) {
        return (
            <>
                {/* Header */}
                <h1>Product List</h1>

                {/* List */}
                {ProductList.map(oneProduct => {
                    return (
                        <li key={oneProduct._id}>
                            <Link to={`/products/show/${oneProduct._id}`}>
                                {oneProduct.title}
                            </Link>
                            &nbsp;
                            <button onClick={(e) => deleteHandler(oneProduct._id)}>
                                Delete
                            </button>
                        </li>
                    )
                })}
            </>
        )
    }

}

export default ProductList;