import React from 'react';
import c from './AnimeItem.module.scss';
import { NavLink } from 'react-router-dom';
const AnimeItem = ({
    title: japaneseTitle,
    title_english,
    episodes,
    images,
    isFetching,
    mal_id,
}) => {
    const title = title_english || japaneseTitle;
    return (
        <div
            className={isFetching ? c.animatedLoading : c.container}
            style={
                isFetching
                    ? null
                    : {
                          backgroundImage: `url(${images.jpg.large_image_url})`,
                          backgroundSize: '100% 100%',
                          backgroundRepeat: 'no-repeat',
                      }
            }
        >
            {isFetching ? null : (
                <NavLink className={c.overlay} to={`anime/${mal_id}`}>
                    {/* <div className={c.overlay}> */}
                    <div className={c.items}></div>
                    <div className={`${c.items} ${c.head}`}>
                        {/* <p>Cowboy Bebop</p> */}
                        <p style={title.length > 18 ? { fontSize: 15 } : null}>
                            {title}
                        </p>
                    </div>
                    <div className={`${c.items} ${c.price}`}>
                        {/* <p className={c.new}>Episodes: 26</p> */}
                        <p className={c.new}>
                            {episodes ? 'Episodes: ' + episodes : 'Ongoing'}
                        </p>
                    </div>
                    <div className={`${c.items} ${c.cart}`}>
                        {/* <i className={`${c.fa}`}></i> */}
                        <span>CLICK FOR MORE INFO</span>
                    </div>
                    {/* </div> */}
                </NavLink>
            )}
        </div>
    );
};

export default AnimeItem;
