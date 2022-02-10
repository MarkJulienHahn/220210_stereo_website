import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import React, { useState} from 'react';

const Nav = () => {

    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (
        <nav className={styles.menuContainer}>
            <div className={styles.logoTypo}>{isActive ? "STEREO" : "OLOSE"}</div>
            <div id={styles.menuBar} className={isActive ? "menuBarClosed" : "menuBarOpen"} onClick={ToggleClass}>
                <div className={isActive ? "menuLinkClosed" : "menuLinkOpen"}>
                    <ul>
                        <li>
                            <Link href="/" scroll={false}>
                                <h2 className={styles.menuTypo}>STOREFRONT</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="/typefaces" scroll={false}>
                                <h2 className={styles.menuTypo}>TIREFOES</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" scroll={false}>
                                <h2 className={styles.menuTypo}>RROIEOTS</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" scroll={false}>
                                <h2 className={styles.menuTypo}>INDEF</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="/information" scroll={false}>
                                <h2 className={styles.menuTypo}>INFORNETION</h2>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>   
        </nav>
    )
}

export default Nav;