import React from 'react';
import c from './AnimeItem.module.css';
const Anime = () => {
    return (
        <div className={c.container}>
            <div className={c.overlay}>
                <div className={c.items}></div>
                <div className={`${c.items} ${c.head}`}>
                    <p>Cowboy Bebop</p>
                </div>
                <div className={`${c.items} ${c.price}`}>
                    <p className={c.new}>Episodes: 26</p>
                    {/* <p className={c.new}>Episode duration: 24 min</p> */}
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
