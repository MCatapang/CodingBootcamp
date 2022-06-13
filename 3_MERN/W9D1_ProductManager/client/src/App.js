// ------------------------------------------------Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDisplay from './components/ProductDisplay';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';
import Form from './components/Form';
import './App.css';


// ------------------------------------------------Render
const App = () => (
    <>
        {/* FORM: CREATE PRODUCT */}
        <Form />
        <Routes>

            {/* PRODUCT LIST */}
            <Route 
                path="/products" 
                element={<ProductList />} 
            />

            {/* PRODUCT DISPLAY */}
            <Route 
                path="/products/show/:id" 
                element={<ProductDisplay />} 
            />

            {/* PRODUCT EDIT */}
            <Route 
                path="/products/edit/:id" 
                element={<ProductEdit />} 
            />

        </Routes>
    </>
)

export default App;