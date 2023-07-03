import React from 'react';
import Anime from '../AnimeItems/Anime/AnimeItem';
import { useGetListOfAnimeQuery } from '../../redux/api/rootApi';
import s from './HomePage.module.css';
const HomePage = () => {
    const { data, isLoading } = useGetListOfAnimeQuery();
    // console.log(data ? data.data : 'loading');
    return (
        <div className={s.homepage}>
            <div className={s.mainTitle}>List of anime</div>

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className={s.parentContainer}>
                    {data.data.map((el) => (
                        <Anime {...el} />
                    ))}
                </div>
            )}
            {/* <Anime /> */}
        </div>
    );
};

export default HomePage;
