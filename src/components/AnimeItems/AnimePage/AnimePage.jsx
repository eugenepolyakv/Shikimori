import React from 'react';
import styles from './AnimePage.module.css';
import AnimeInfo from './AnimeComponents/AnimeInfo';
import AnimeRating from './AnimeComponents/AnimeRating';
import AnimeStudio from './AnimeComponents/AnimeStudio';
import AnimeDescription from './AnimeComponents/AnimeDescription';
import AnimeMainCharacters from './AnimeComponents/AnimeMainCharacters';
import AnimeTrailer from './AnimeComponents/AnimeTrailer';
const AnimePage = () => {
    return (
        <div>
            <div className={styles.mainTitle}>Naruto</div>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <div>
                        <img
                            style={{ borderRadius: '5px' }}
                            src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg"
                        />
                    </div>
                    <AnimeInfo />
                </div>
                <div className={styles.div2}>
                    <AnimeRating />
                    <AnimeStudio />
                </div>
            </div>
            <AnimeDescription />
            <AnimeMainCharacters />
            <AnimeTrailer />
        </div>
    );
};

export default AnimePage;
