import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import './App.css';
import axios from 'axios';


const App = () => {

    const axiosGet = () => {
        axios.get('https://www.courtlistener.com/api/rest/v3/search/')
            .then(res => console.log(res.data.results))
            .catch(err => console.log(err))

    }

    useEffect( () => {
        axiosGet();
    }, [])

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='*' element={<Home/>} />
            </Routes>
        </>
    );  
}

export default App;