import React from 'react';
import styles from './Paginator.module.scss';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

const Paginator = ({ changeCurrentPage, paginationInfo }) => {
    const currentBlock = Math.ceil(paginationInfo.current_page / 5);
    const lastPage = paginationInfo.last_visible_page;
    const countOfBlocks = Math.ceil(lastPage / 5);
    const rangeStart = currentBlock * 5 - 4;
    const rangeEnd = currentBlock * 5;

    const arrOfPages = new Array();
    for (let i = rangeStart; i < rangeEnd + 1; i++) {
        if (i <= lastPage) {
            arrOfPages.push(
                <div
                    onClick={(e) => changeCurrentPage(i)}
                    className={
                        i == paginationInfo.current_page
                            ? styles.active
                            : styles.number
                    }
                    key={i}
                >
                    {i}
                </div>
            );
        }
    }
    return (
        <div className={styles.container}>
            {currentBlock != 1 ? (
                <div className={styles.displayFlex}>
                    <span
                        onClick={() => changeCurrentPage(rangeStart - 5)}
                        className={`${styles.number} ${styles.arrowText}`}
                    >
                        <img
                            width={15}
                            height={18}
                            src={leftArrow}
                            className={styles.arrowMargin}
                        />
                        Previous
                    </span>
                    <div
                        onClick={() => changeCurrentPage(1)}
                        className={styles.number}
                    >
                        1
                    </div>
                    <div className={styles.number}>...</div>
                </div>
            ) : null}
            {arrOfPages}
            {currentBlock != countOfBlocks ? (
                <div className={styles.displayFlex}>
                    <div className={styles.number}>...</div>
                    <div
                        onClick={() => changeCurrentPage(lastPage)}
                        className={styles.number}
                    >
                        {lastPage}
                    </div>
                    <span
                        onClick={() => changeCurrentPage(rangeEnd + 1)}
                        className={`${styles.number} ${styles.arrowText}`}
                    >
                        <img width={15} height={18} src={rightArrow} />
                    </span>
                </div>
            ) : null}
        </div>
    );
};

export default Paginator;
