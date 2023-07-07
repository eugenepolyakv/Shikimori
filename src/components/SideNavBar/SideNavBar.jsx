import React from 'react';
import logoSVG from '../../assets/glyph.svg';
import logoTitle from '../../assets/logo.svg';
import homeLogo from '../../assets/home.png';
import community from '../../assets/community.png';
import styles from './SideNavBar.module.css';
import guest from '../../assets/guest.png';
import gitHub from '../../assets/gitHub.png';
import { NavLink } from 'react-router-dom';
function SideNavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={styles.logo}>
                        {/* <a href="#" className={styles.logo}> */}
                        <img className={styles.logoIMG} src={logoSVG}></img>

                        <img
                            className={styles.logoTitleIMG}
                            src={logoTitle}
                        ></img>
                        {/* </a> */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={styles.navItem}>
                        {/* <a href="#" className={styles.navItem}> */}
                        <img src={homeLogo}></img>
                        <span>Home</span>
                        {/* </a> */}
                    </NavLink>
                </li>
                <li>
                    <a href="#" className={styles.navItem}>
                        <img src={community}></img>
                        <span>Clubs</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/eugenepolyakv/Shikimori"
                        className={styles.navItem}
                    >
                        <img src={gitHub}></img>
                        <span>Git repository</span>
                    </a>
                </li>
                <li>
                    <a href="#" className={`${styles.navItem} ${styles.guest}`}>
                        <img src={guest}></img>
                        <span>Guest</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavBar;
