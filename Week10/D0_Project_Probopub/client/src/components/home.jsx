import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import searchIcon from "../assets/search.png";

const Home = (props) => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        axios.get('https://www.courtlistener.com/api/rest/v3/search/')
            .then(res => setCases(res.data.results))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            {/* HOME */}
            <div className={styles.homeTitleContainer}>
                <h2 className={styles.homeTitle}>
                    Learning about Supreme Court cases
                    isn't just for legal professionals
                </h2>
                <div className={styles.colorOverlay}></div>
                <form className={styles.searchBar}>
                    <input className={styles.searchInput} type="search" placeholder="search by case name" />
                    <input type="image" alt="Search Icon" src={searchIcon} className={styles.searchButton} />
                </form>
                <p className={styles.pickCardMessage}>or pick a random <span className={styles.emphasis}>'case card'</span> below</p>
            </div>

            {/* CASE CARDS */}
            <div className={styles.caseCardArea}>
                {cases.map(oneCase => {
                    return (
                        <div key={oneCase.id} className={styles.caseCard}>
                            <h3><a href={`http://www.courtlistener.com${oneCase.absolute_url}`}>{oneCase.caseName}</a></h3>
                            <li>Citation: {oneCase.lexisCite}</li>
                            <li>Snippet: {oneCase.snippet}...</li>
                        </div>
                    )
                })}
            </div>
        </>
    )


}

export default Home;