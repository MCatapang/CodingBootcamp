import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Form from './components/Form';
import Display from './components/Display';
import Error from './components/Error';
import './App.css';

const App = () => {
return (
    <>
        <Form/>
        <Routes>
            <Route path="/:category/:id" element={<Display/>} />
            <Route path="/error" element={<Error/>} />
        </Routes>
    </>
);
}

export default App;
