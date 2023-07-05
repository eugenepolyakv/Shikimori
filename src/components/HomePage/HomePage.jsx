import React from 'react';
import AnimeItem from '../AnimeItems/Anime/AnimeItem';
import { useGetListOfAnimeQuery } from '../../redux/api/rootApi';
import s from './HomePage.module.css';
import Paginator from '../Paginator/Paginator';
const HomePage = () => {
    const { data, isLoading } = useGetListOfAnimeQuery();
    // console.log(data ? data.data : 'loading');
    const arrOfLoadingCards = new Array();
    for (let i = 0; i < 25; i++) {
        arrOfLoadingCards.push(<AnimeItem key={i} isLoading={isLoading} />);
    }
    // console.log(arrOfLoadingCards);
    return (
        <div className={s.homepage}>
            <div className={s.mainTitle}>List of anime</div>

            {isLoading ? (
                <div className={s.parentContainer}>{arrOfLoadingCards} </div>
            ) : (
                <div className={s.parentContainer}>
                    {data.data.map((el) => (
                        <AnimeItem {...el} key={el.mal_id} />
                    ))}
                </div>
            )}
            {/* <Anime /> */}
            <Paginator />
        </div>
    );
};

export default HomePage;
