import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';
import magnifyingGlass from '../../../assets/magnifyingGlass.svg';
import list from '../../../assets/list.svg';
const SearchBar = ({ animeTitle, setAnimeTitle }) => {
    const [isClickedOnBar, setClickBar] = useState(false);
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
    const handleClick = (e) => {
        nodesChildren(e.target, ref.current)
            ? setClickBar(true)
            : setClickBar(false);
    };
    const nodesChildren = (node, ref) => {
        if (ref === node) {
            return true;
        }
        if (ref.hasChildNodes()) {
            for (let child of ref.childNodes) {
                if (nodesChildren(node, child)) {
                    return true;
                }
            }
        }
    };
    const ref = useRef();
    return (
        <div
            ref={ref}
            className={styles.container}
            style={{ margin: '20px auto' }}
            onClick={() => setClickBar(true)}
        >
            <div className={styles.searchBox}>
                <button
                    className={styles.btnSearch}
                    // onClick={() => setClickBar(true)}
                >
                    {isClickedOnBar ? (
                        <img
                            src={list}
                            style={{
                                height: '50%',
                                width: '50%',
                                margin: 'auto auto',
                            }}
                        />
                    ) : (
                        <img
                            // onClick={() => setClickBar(true)}
                            style={{
                                height: '50%',
                                width: '50%',
                                margin: 'auto auto',
                            }}
                            src={magnifyingGlass}
                        />
                    )}
                    {/* <i class="fas fa-search"></i> */}
                </button>
                <input
                    value={animeTitle}
                    onChange={(e) => setAnimeTitle(e.currentTarget.value)}
                    style={{ WebkitBoxShadow: '0 0 5px #000' }}
                    type="text"
                    className={styles.inputSearch}
                    // placeholder="Type to Search..."
                    placeholder="Looking for anything specific?"
                />
            </div>
        </div>
    );
};

export default SearchBar;
