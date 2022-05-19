// ----------------------------------------------------------------Imports
import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './GeneralUse.module.css';


// ----------------------------------------------------------------Export
const NavBar = (props) => {
    const navigate = useNavigate();
    
    return (
        <div className={styles.navBar}>
            <h1>Favorite Authors</h1>
            <button onClick={(e) => navigate('/')}>Home</button>
        </div>
    )

}

export default NavBar;