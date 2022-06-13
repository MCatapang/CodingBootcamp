// ----------------------------------------------------------------Imports
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import EditAuthor from './components/EditAuthor';
import AddAuthor from './components/AddAuthor';
import NavBar from './components/Navbar';
import Home from './components/Home';

// ----------------------------------------------------------------Export
function App() {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/new' element={<AddAuthor/>} />
            <Route path='/edit/:id' element={<EditAuthor/>} />
        </Routes>
    </>
  )
}

export default App;
