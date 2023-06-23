import React from 'react';
import logoSVG from '../../assets/glyph.svg';
import logoTitle from '../../assets/logo.svg';
import homeLogo from '../../assets/home.png';
import styles from './SideNavBar.module.css';
function SideNavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" className={styles.logo}>
                        <img src={logoSVG}></img>
                        <span className={styles.navItem}>SHIKIMORI</span>
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.logo}>
                        <img className={styles.fas} src={homeLogo}></img>
                        <span className={styles.navItem}>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.logIn}>
                        {' '}
                        <img className={styles.fas} src={homeLogo}></img>
                        <span className={styles.navItem}>Log in</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavBar;
