import React from 'react';
import styles from './testCard.module.scss';
const TestCard = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="https://assets.codepen.io/43365/bulldog.jpeg" />
                </div>
                <div className={styles.content}>
                    <h2>Sleepiest Doggo!</h2>
                    <p>Look at this sleepiest pupper!</p>
                </div>
            </div>

            <div className={`${styles.card} ${styles.isLoading}`}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default TestCard;
