import Display from './components/Display';
import Error from './components/Error';
import Form from './components/Form';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
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