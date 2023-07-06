import React from 'react';
import styles from './AnimePage.module.css';
import Rating from '../../Other/StarRateComponent/Rating';
const AnimePage = () => {
    return (
        <div>
            <div className={styles.mainTitle}>Naruto</div>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <div>
                        <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" />
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.title}>Information</div>
                        <ul className={styles.ul}>
                            <li>
                                <span>Type:</span> TV
                            </li>
                            <li>
                                <span>Episodes:</span> 220
                            </li>
                            <li>
                                <span>Episode duration:</span> 23 min
                            </li>
                            <li>
                                <span>Status:</span> published in 2002-2007
                            </li>
                            <li>
                                <span>Genres:</span> Action Adventure Fantasy
                            </li>
                            <li>
                                <span>Rating:</span> PG-13 - Teens 13 or older
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.div2}>
                    <div className={styles.title}>Rating</div>
                    <Rating rating={7.98} />{' '}
                    <div>
                        7.98<div>Good</div>
                    </div>
                </div>
                <div className={styles.div3}>
                    <div className={styles.title}>STUDIO</div>
                    <img src="https://cdn.myanimelist.net/images/company/4.png" />
                </div>
            </div>
        </div>
    );
};

export default AnimePage;
