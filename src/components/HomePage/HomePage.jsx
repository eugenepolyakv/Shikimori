import React, { useState, useEffect, useRef } from 'react';
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
import NoResult from '../Other/NoResult';
const HomePage = () => {
    const [currentPage, changeCurrentPage] = useState(1);
    const [animeTitle, setAnimeTitle] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        if (currentPage != 1) {
            changeCurrentPage(1);
        }
        setTimeout(() => {
            if (inputValue.current.value === animeTitle) {
                setLoading(false);
                // console.log(animeTitle);
            }
        }, 600);
    }, [animeTitle]);
    let { data, isFetching } = useGetListOfAnimeQuery(currentPage);
    let { data: dataByTitle, isFetching: isFetchingByTitle } =
        useGetSearchAnimeByItsNameQuery(
            animeTitle && !isLoading ? [animeTitle, currentPage] : skipToken
        );
    const inputValue = useRef();

    data = dataByTitle && animeTitle !== '' ? dataByTitle : data;
    return (
        <div>
            <SearchBar
                inputValue={inputValue}
                animeTitle={animeTitle}
                setAnimeTitle={setAnimeTitle}
            />
            {isFetching || isFetchingByTitle || isLoading ? (
                <AnimeGridOfLoadingCards />
            ) : data.data.length ? (
                <div className={s.parentContainer}>
                    {data.data.map((el) => (
                        <AnimeItem {...el} key={el.mal_id} />
                    ))}
                </div>
            ) : (
                <NoResult />
            )}
            {/* <Anime /> */}
            {isFetching || isFetchingByTitle || isLoading ? null : data.data
                  .length ? (
                <Paginator
                    paginationInfo={data.pagination}
                    changeCurrentPage={changeCurrentPage}
                />
            ) : null}
        </div>
    );
};

export default HomePage;
