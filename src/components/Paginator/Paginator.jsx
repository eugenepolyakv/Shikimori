import React from 'react';
import styles from './Paginator.module.scss';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

const Paginator = ({ changeCurrentPage }) => {
    const arrOfPages = new Array();
    for (let i = 1; i < 6; i++) {
        arrOfPages.push(
            <div
                onClick={(e) => changeCurrentPage(i)}
                className={styles.number}
                key={i}
            >
                {i}
            </div>
        );
    }
    return (
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
            {arrOfPages}
            <div className={styles.number}>...</div>
            <div className={styles.number}>992</div>
            <span className={`${styles.number} ${styles.arrowText}`}>
                <img width={15} height={18} src={rightArrow} />
            </span>
        </div>
    );
};

export default Paginator;
