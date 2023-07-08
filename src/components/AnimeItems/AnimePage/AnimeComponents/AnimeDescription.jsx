import React from 'react';
import styles from '../AnimePage.module.css';
const AnimeDescription = ({ synopsis }) => {
    return (
        <div className={styles.div4}>
            <div className={styles.title}>Description</div>
            <div style={{ textAlign: 'justify' }}>
                {synopsis}
                {/* {`Moments prior to Naruto Uzumaki's birth, a huge demon known
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
                    foes.\n\n[Written by MAL Rewrite]`} */}
            </div>
        </div>
    );
};

export default AnimeDescription;
