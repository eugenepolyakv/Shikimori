import React from 'react';
import AnimeItem from './AnimeItem';
import s from '../../HomePage/HomePage.module.css';
const AnimeGridOfLoadingCards = () => {
    const arrOfLoadingCards = new Array();
    for (let i = 0; i < 25; i++) {
        arrOfLoadingCards.push(<AnimeItem key={i} isFetching={true} />);
    }
    return <div className={s.parentContainer}>{arrOfLoadingCards}</div>;
};

export default AnimeGridOfLoadingCards;
