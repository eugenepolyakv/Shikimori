import React from 'react';
import styles from './AnimePage.module.css';
const AnimePage = () => {
    return (
        <div>
            <div className={styles.mainTitle}>Naruto</div>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" />
                </div>
                <div className={styles.div2}>
                    Information
                    <ul>
                        <li>Type: TV</li>
                        <li>Episodes: 220</li>
                        <li>Episode duration: 23 min</li>
                        <li>Status: published in 2002-2007</li>
                        <li>Genres: Action Adventure Fantasy</li>
                        <li>Rating: PG-13 - Teens 13 or older</li>
                    </ul>
                </div>
                <div className={styles.div3}>RATING</div>
                <div className={styles.div4}>STUDIO</div>
            </div>
        </div>
    );
};

export default AnimePage;
