import React, { useState } from 'react';
import AnimeItem from '../AnimeItems/AnimeItemsInGrid/AnimeItem';
import {
    useGetListOfAnimeQuery,
    useGetSearchAnimeByItsNameQuery,
} from '../../redux/api/rootApi';
import s from './HomePage.module.css';
import Paginator from '../Paginator/Paginator';
import SearchBar from '../Other/SearchBar/SearchBar';
import AnimeGridOfLoadingCards from '../AnimeItems/AnimeItemsInGrid/AnimeGridOfLoadingCards';
import { skipToken } from '@reduxjs/toolkit/dist/query';
const HomePage = () => {
    const [currentPage, changeCurrentPage] = useState(1);
    const [animeTitle, setAnimeTitle] = useState('');
    let { data, isFetching } = useGetListOfAnimeQuery(currentPage);
    let { data: dataByTitle, isFetching: isFetchingByTitle } =
        useGetSearchAnimeByItsNameQuery(animeTitle ? animeTitle : skipToken);
    data = dataByTitle ? dataByTitle : data;
    return (
        <div>
            <SearchBar animeTitle={animeTitle} setAnimeTitle={setAnimeTitle} />
            {isFetching || isFetchingByTitle ? (
                <AnimeGridOfLoadingCards />
            ) : (
                <div className={s.parentContainer}>
                    {data.data.map((el) => (
                        <AnimeItem {...el} key={el.mal_id} />
                    ))}
                </div>
            )}
            {/* <Anime /> */}
            {isFetching || isFetchingByTitle ? null : (
                <Paginator
                    paginationInfo={data.pagination}
                    changeCurrentPage={changeCurrentPage}
                />
            )}
        </div>
    );
};

export default HomePage;
