import React, { useState } from 'react';
import styles from '../AnimePage.module.css';
import addIcon from '../../../../assets/addIcon.svg';
import downArrow from '../../../../assets/downArrow.svg';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Fade from '@mui/material/Fade';

const AnimeAddButton = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={
                open
                    ? `${styles.open} ${styles.listOfOptions}`
                    : styles.listOfOptions
            }
        >
            <div className={styles.addButton} onClick={() => setOpen(!open)}>
                <img src={addIcon} />
                <span>Add to the list</span>
                <img src={downArrow} />
            </div>
            <ul>
                <li>watched</li>
                <li>abandoned</li>
                <li>delayed</li>
                <li>planned</li>
                <li>rewatching</li>
                <li>watching</li>
            </ul>
            {/* <div>
                <div></div>
            </div> */}
        </div>
    );
};

export default AnimeAddButton;
