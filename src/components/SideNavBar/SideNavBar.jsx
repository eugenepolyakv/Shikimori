import React from 'react';
import logoSVG from '../../assets/glyph.svg';
import logoTitle from '../../assets/logo.svg';
import homeLogo from '../../assets/home.png';
import styles from './SideNavBar.module.css';
function SideNavBar(props) {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a>
                        <div className={styles.logo}>
                            <div>
                                <img src={logoSVG} />
                            </div>
                            <div>
                                <img
                                    src={logoTitle}
                                    className={`${styles.logoTitle} ${styles.navItem}`}
                                />
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <img className={styles.fas} src={homeLogo}></img>
                            <span className={styles.navItem}>Home</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavBar;
