// ------------------------------------------------Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';


// ------------------------------------------------Declarations
const root = ReactDOM.createRoot(document.getElementById('root'));


// ------------------------------------------------Render
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);


// ------------------------------------------------[Optional] WebVitals
reportWebVitals();