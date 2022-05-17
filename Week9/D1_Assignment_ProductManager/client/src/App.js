// ------------------------------------------------Imports
import Form from './components/Form';
import ProductList from './components/ProductList';
import ProductDisplay from './components/ProductDisplay';
import ProductEdit from './components/ProductEdit';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
    

// ------------------------------------------------App
const App = () => {
    return (
        <>
            <Form/>
            <Routes>
                <Route path="/api/products/" element={<ProductList/>} />
                <Route path="/api/products/show/:id" element={<ProductDisplay/>} />
                <Route path="/api/products/edit/:id" element={<ProductEdit/>} />
            </Routes>
        </>
    );
}

// ------------------------------------------------Export
export default App;