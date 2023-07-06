import React from 'react';
import styles from '../AnimePage.module.css';
const AnimeTrailer = () => {
    return (
        <div>
            <div className={styles.title}>TRAILER</div>
            <iframe
                width="80%"
                height="600px"
                src="https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1"
                style={{ margin: '0 10%' }}
            ></iframe>
        </div>
    );
};

export default AnimeTrailer;
