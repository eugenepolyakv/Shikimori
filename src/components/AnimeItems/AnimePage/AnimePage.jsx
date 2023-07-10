import React, { useEffect, useState } from 'react';
import styles from './AnimePage.module.css';
import AnimeInfo from './AnimeComponents/AnimeInfo';
import AnimeRating from './AnimeComponents/AnimeRating';
import AnimeStudio from './AnimeComponents/AnimeStudio';
import AnimeDescription from './AnimeComponents/AnimeDescription';
import AnimeMainCharacters from './AnimeComponents/AnimeMainCharacters';
import AnimeTrailer from './AnimeComponents/AnimeTrailer';
import AnimeImage from './AnimeComponents/AnimeImage';
import { useParams } from 'react-router-dom';
import {
    useGetAnimeByIdQuery,
    useGetProducersByIdQuery,
    useGetCharactersByAnimeIdQuery,
} from '../../../redux/api/rootApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
const AnimePage = () => {
    const params = useParams();
    useEffect(() => window.scrollTo(0, 0), []);

    const [isPhotoZoomed, setZoomed] = useState(false);
    const { data, isFetching } = useGetAnimeByIdQuery(params.animeID);
    const { data: charactersData, isFetching: isCharatersFetching } =
        useGetCharactersByAnimeIdQuery(params.animeID);
    const { data: producer, isFetching: isProducerFetching } =
        useGetProducersByIdQuery(
            isFetching ? skipToken : data.data.studios[0].mal_id
        );

    const parsedData = isFetching ? null : data.data;
    const animeTitle = data
        ? parsedData.title_english || parsedData.title
        : null;

    return isFetching ? (
        <div>LOADING...</div>
    ) : (
        <div
            style={{
                background: 'white',
                margin: '0 auto',
                width: '1300px',
                padding: '20px 20px',
            }}
        >
            <div className={styles.mainTitle}>{animeTitle}</div>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <AnimeImage
                        image={data.data.images.jpg.large_image_url}
                        setZoomed={setZoomed}
                        isZoomed={isPhotoZoomed}
                    />
                    <AnimeInfo
                        info={{
                            type: parsedData.type,
                            episodes: parsedData.episodes,
                            duration: parsedData.duration,
                            status: parsedData.status,
                            aired: parsedData.aired,
                            genres: parsedData.genres,
                            rating: parsedData.rating,
                        }}
                    />
                </div>
                <div className={styles.div2}>
                    <AnimeRating score={parsedData.score} />

                    <AnimeStudio
                        isLoaing={isProducerFetching}
                        info={producer}
                    />
                </div>
            </div>
            <AnimeDescription synopsis={parsedData.synopsis} />
            <AnimeMainCharacters
                characters={charactersData}
                isLoading={isCharatersFetching}
            />
            <AnimeTrailer
                isPhotoZoomed={isPhotoZoomed}
                trailer={parsedData.trailer}
            />
        </div>
    );
};

export default AnimePage;
