import React from 'react';
import styles from '../AnimePage.module.css';
import Rating from '../../../Other/StarRateComponent/Rating';
const AnimeRating = () => {
    return (
        <div>
            <div className={styles.title}>Rating</div>
            <div className={styles.starRating} style={{ display: 'flex' }}>
                <Rating rating={7.98} />{' '}
                <div className={styles.grade}>
                    7.98<div>Good</div>
                </div>
            </div>
        </div>
    );
};

export default AnimeRating;
