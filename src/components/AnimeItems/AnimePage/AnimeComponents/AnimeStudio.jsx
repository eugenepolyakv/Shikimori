import React from 'react';
import styles from '../AnimePage.module.css';
const AnimeStudio = ({ isLoading, info }) => {
    return (
        <div style={{ width: 250, height: 250 }} className={styles.div3}>
            <div className={styles.title}>STUDIO</div>
            {isLoading ? (
                <div className={styles.animatedLoading}></div>
            ) : (
                // <img src="https://cdn.myanimelist.net/images/company/1.png" />
                <img src={info ? info.data.images.jpg.image_url : null} />
            )}
        </div>
    );
};

export default AnimeStudio;
