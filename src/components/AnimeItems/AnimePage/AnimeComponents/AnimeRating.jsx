import React from 'react';
import styles from '../AnimePage.module.css';
import Rating from '../../../Other/StarRateComponent/Rating';
const AnimeRating = ({ score }) => {
    return (
        <div>
            <div className={styles.title}>Rating</div>
            <div className={styles.starRating} style={{ display: 'flex' }}>
                <Rating rating={score} />{' '}
                <div className={styles.grade}>
                    {score}
                    <div>Good</div>
                </div>
            </div>
        </div>
    );
};

export default AnimeRating;
