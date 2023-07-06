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
                    <div
                        className={styles.starRating}
                        style={{ display: 'flex' }}
                    >
                        <Rating rating={7.98} />{' '}
                        <div className={styles.grade}>
                            7.98<div>Good</div>
                        </div>
                    </div>

                    <div style={{ width: 250 }} className={styles.div3}>
                        <div className={styles.title}>STUDIO</div>

                        <img src="https://cdn.myanimelist.net/images/company/4.png" />
                    </div>
                </div>
            </div>
            <div className={styles.div4}>
                <div className={styles.title}>Description</div>
                <div>
                    {`Moments prior to Naruto Uzumaki's birth, a huge demon known
                    as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure,
                    the Hidden Leaf Village, and wreaked havoc. In order to put
                    an end to the Kyuubi's rampage, the leader of the village,
                    the Fourth Hokage, sacrificed his life and sealed the
                    monstrous beast inside the newborn Naruto.\n\nNow, Naruto is
                    a hyperactive and knuckle-headed ninja still living in
                    Konohagakure. Shunned because of the Kyuubi inside him,
                    Naruto struggles to find his place in the village, while his
                    burning desire to become the Hokage of Konohagakure leads
                    him not only to some great new friends, but also some deadly
                    foes.\n\n[Written by MAL Rewrite]`}
                </div>
            </div>
        </div>
    );
};

export default AnimePage;
