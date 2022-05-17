// ------------------------------------------------Imports
import Form from './components/Form';
import ProductList from './components/ProductList';
import ProductDisplay from './components/ProductDisplay';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
    

// ------------------------------------------------App
const App = () => {
    return (
        <>
            <Form/>
            <Routes>
                <Route path="/api/products/all" element={<ProductList/>} />
                <Route path="/api/products/show/:id" element={<ProductDisplay/>} />
            </Routes>
        </>
    );
}

// ------------------------------------------------Export
export default App;