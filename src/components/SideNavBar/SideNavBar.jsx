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
                        <span>SHIKIMORI</span>
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navItem}>
                        <img src={homeLogo}></img>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className={`${styles.navItem} ${styles.guest}`}>
                        <img src={homeLogo}></img>
                        <span>Sign up</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavBar;
