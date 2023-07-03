import React from 'react';
import c from './AnimeItem.module.css';
const Anime = ({ title: japaneseTitle, title_english, episodes, images }) => {
    const title = title_english || japaneseTitle;
    return (
        <div
            className={c.container}
            style={{
                backgroundImage: `url(${images.jpg.large_image_url})`,
            }}
        >
            <div className={c.overlay}>
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
            </div>
        </div>
    );
};

export default Anime;
