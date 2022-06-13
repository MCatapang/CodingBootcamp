import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import Input from "./components/Input";
import './App.css';

function App() {

    return (
        <div className="App">
            
            {/* NAVIGATION BAR */}
            <h1>
                <Link to="/home">
                    Home Page
                </Link>
                \\
                <Link to="/whale">
                    Whale
                </Link>
                \\
                <Link to="/whale/blue">
                    Blue Whale
                </Link>
                \\
                <Link to="/whale/blue/lightblue">
                    Blue Whale in Light Blue
                </Link>
            </h1>
            
            <Routes>
                {/* HOME */}
                <Route path="/home" element={ <h1>Welcome</h1> } />
                {/* INPUT PAGE */}
                <Route path="/:input" element={<Input/>} />
                <Route path="/:input/:color" element={<Input/>} />
                <Route path="/:input/:color/:backgroundColor" element={<Input/>} />
            </Routes>
        </div>
    );
}

export default App;
