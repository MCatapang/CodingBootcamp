import React from 'react';
import styles from "./styles.module.css";

const NavBar = (props) => {

    const scrollFunction = () => {
        const navBarStyle = document.getElementById("navBar").style;
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            navBarStyle.transition = "0.25s";
            navBarStyle.height = "75px";
        } else {
            navBarStyle.transition = "0.25s";
            navBarStyle.height = "90px";
        }
    }
    window.onscroll = scrollFunction;
    
    return (
        <div id="navBar" className={styles.navBar}>
            <div id="navBarTitle" className={styles.navBarTitle}>
                <h1>
                    <a href="/" className={styles.navBarLink}>Probopub</a>
                </h1>
            </div>
            <div className={styles.navBarButtonContainer}>
                <button className={styles.navBarButton}>Home</button>
                <button className={styles.navBarButton}>About</button>
                <button className={styles.navBarButton}>Log-in</button>
            </div>
        </div>
    )


}

export default NavBar;