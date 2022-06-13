import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';


const App = () => {
    

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='*' element={<Home />} />
            </Routes>
        </>
    );  
}

export default App;