import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    // --------------------------------------------------------Declarations
    const [ProductList, setProductList] = useState(null);
    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/products/delete/${id}`,)
            .then( console.log(`Successfully deleted the product with an id of ${id}!`) )
            .catch( err => console.log("The product wasn't deleted! Err: " + err ) )
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then( res => setProductList(res.data.Products) )
            .catch( err => console.log("You have an error: " + err) )
    }, [ProductList]);

    if(ProductList !== null) {
        return (
            <>
                <h1>Product List</h1>
                {ProductList.map( oneProduct => { 
                    return(
                        <li key={oneProduct._id}>
                            <Link to={`/api/products/show/${oneProduct._id}`}>
                                {oneProduct.title}
                            </Link>
                            &nbsp;
                            <button onClick={ (e) => deleteHandler(oneProduct._id) }>Delete</button>
                        </li>
                    )
                })}
            </>
            
        )
    }
}

export default ProductList;