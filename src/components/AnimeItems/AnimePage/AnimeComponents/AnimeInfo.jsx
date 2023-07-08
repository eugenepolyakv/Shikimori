import React from 'react';
import styles from '../AnimePage.module.css';
const AnimeInfo = ({ info }) => {
    return (
        <div className={styles.infoBlock}>
            <div className={styles.title}>Information</div>
            <ul className={styles.ul}>
                <li>
                    <span>Type: </span>
                    {info.type}
                </li>
                <li>
                    <span>Episodes: </span>
                    {info.episodes}
                </li>
                <li>
                    <span>Episode duration: </span>
                    {info.duration}
                </li>
                <li>
                    <span>Status: </span> {info.status + ' in '}{' '}
                    {info.aired.prop.from.year + '-' + info.aired.prop.to.year}
                </li>
                <li>
                    <span>Genres: </span>{' '}
                    {info.genres.map((el) => el.name + ' ')}
                </li>
                <li>
                    <span>Rating: </span> {info.rating}
                </li>
            </ul>
        </div>
    );
};

export default AnimeInfo;
