import React, { useState } from 'react';
import AnimeItem from '../AnimeItems/Anime/AnimeItem';
import { useGetListOfAnimeQuery } from '../../redux/api/rootApi';
import s from './HomePage.module.css';
import Paginator from '../Paginator/Paginator';
import AnimeGridOfLoadingCards from '../AnimeItems/Anime/AnimeGridOfLoadingCards';
const HomePage = () => {
    const [currentPage, changeCurrentPage] = useState(1);
    const { data, isFetching } = useGetListOfAnimeQuery(currentPage);
    // console.log(currentPage);
    // console.log('RENDER OF HOME PAGE ' + data + ' ' + isFetching);
    // const arrOfLoadingCards = new Array();
    // for (let i = 0; i < 25; i++) {
    //     arrOfLoadingCards.push(<AnimeItem key={i} isFetching={isFetching} />);
    // }
    return (
        <div>
            <div className={s.mainTitle}>List of anime</div>

            {isFetching ? (
                <AnimeGridOfLoadingCards />
            ) : (
                // <div className={s.parentContainer}>{arrOfLoadingCards} </div>
                <div className={s.parentContainer}>
                    {data.data.map((el) => (
                        <AnimeItem {...el} key={el.mal_id} />
                    ))}
                </div>
            )}
            {/* <Anime /> */}
            <Paginator changeCurrentPage={changeCurrentPage} />
        </div>
    );
};

export default HomePage;
