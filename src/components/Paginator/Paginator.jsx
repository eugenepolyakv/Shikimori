import React from 'react';
import styles from './Paginator.module.scss';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';
const Paginator = () => {
    return (
        // <div className={styles.mainDiv}>
        <div className={styles.container}>
            <span className={`${styles.number} ${styles.arrowText}`}>
                <img
                    width={15}
                    height={18}
                    src={leftArrow}
                    className={styles.arrowMargin}
                />
                Previous
            </span>
            <div className={styles.number}>1</div>
            <div className={styles.number}>2</div>
            <div className={styles.number}>3</div>
            <div className={styles.number}>4</div>
            <div className={styles.number}>5</div>
            <div className={styles.number}>...</div>
            <div className={styles.number}>992</div>
            <span className={`${styles.number} ${styles.arrowText}`}>
                <img width={15} height={18} src={rightArrow} />
            </span>
        </div>
        // </div>
    );
};

export default Paginator;
