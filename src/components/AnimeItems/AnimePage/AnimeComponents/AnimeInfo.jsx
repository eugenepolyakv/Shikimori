import React from 'react';
import styles from '../AnimePage.module.css';
const AnimeInfo = () => {
    return (
        <div className={styles.infoBlock}>
            <div className={styles.title}>Information</div>
            <ul className={styles.ul}>
                <li>
                    <span>Type:</span> TV
                </li>
                <li>
                    <span>Episodes:</span> 220
                </li>
                <li>
                    <span>Episode duration:</span> 23 min
                </li>
                <li>
                    <span>Status:</span> published in 2002-2007
                </li>
                <li>
                    <span>Genres:</span> Action Adventure Fantasy
                </li>
                <li>
                    <span>Rating:</span> PG-13 - Teens 13 or older
                </li>
            </ul>
        </div>
    );
};

export default AnimeInfo;
