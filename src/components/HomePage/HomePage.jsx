import React, { useState } from 'react';
import AnimeItem from '../AnimeItems/AnimeItemsInGrid/AnimeItem';
import { useGetListOfAnimeQuery } from '../../redux/api/rootApi';
import s from './HomePage.module.css';
import Paginator from '../Paginator/Paginator';
import AnimeGridOfLoadingCards from '../AnimeItems/AnimeItemsInGrid/AnimeGridOfLoadingCards';
const HomePage = () => {
    const [currentPage, changeCurrentPage] = useState(1);
    const { data, isFetching } = useGetListOfAnimeQuery(currentPage);
    return (
        <div>
            <div className={s.mainTitle}>List of anime</div>

            {isFetching ? (
                <AnimeGridOfLoadingCards />
            ) : (
                <div className={s.parentContainer}>
                    {data.data.map((el) => (
                        <AnimeItem {...el} key={el.mal_id} />
                    ))}
                </div>
            )}
            {/* <Anime /> */}
            {isFetching ? null : (
                <Paginator
                    paginationInfo={data.pagination}
                    changeCurrentPage={changeCurrentPage}
                />
            )}
        </div>
    );
};

export default HomePage;
