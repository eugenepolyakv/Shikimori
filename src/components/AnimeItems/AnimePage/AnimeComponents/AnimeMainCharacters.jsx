import React from 'react';
import styles from '../AnimePage.module.css';
const AnimeMainCharacters = () => {
    return (
        <div className={styles.div5}>
            <div className={styles.title}>Main characters</div>
            <div className={styles.mainCharacters} style={{ display: 'flex' }}>
                <div>
                    <img src="https://cdn.myanimelist.net/images/characters/9/69275.jpg?s=36c4ad9f4440d77918c34c49870e719c" />
                    <div>Haruno, Sakura</div>
                </div>
                <div>
                    <img src="https://cdn.myanimelist.net/images/characters/7/284129.jpg?s=b0a6b941fd427cbfd85657f316c0e309" />
                    <div>Hatake, Kakashi</div>
                </div>
            </div>
        </div>
    );
};

export default AnimeMainCharacters;
