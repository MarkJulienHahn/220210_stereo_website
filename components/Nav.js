import Link from "next/link";
import styles from "../styles/Nav.module.css";
import React, { useState } from "react";

const Nav = () => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className={styles.menuContainer}>
      <div className={styles.logoTypo}>
        {isActive ? (
          <>
            STEREO
            <span
              style={{
                fontFamily: "Protest",
                fontSize: "15px",
                fontVariationSettings: `"wght" 150`,
                transform: "translateY(-50px)"
              }}
            >
              ®
            </span>
          </>
        ) : (
          "CLOSE"
        )}
      </div>
      <div
        id={styles.menuBar}
        className={isActive ? "menuBarClosed" : "menuBarOpen"}
        onClick={ToggleClass}
      >
        <div className={isActive ? "menuLinkClosed" : "menuLinkOpen"}>
          <ul>
            <li>
              <Link href="/" scroll={false}>
                <h2 className={styles.menuTypo}>STOREFRONT</h2>
              </Link>
            </li>
            <li>
              <Link href="/typefaces" scroll={false}>
                <h2 className={styles.menuTypo}>TYPEFACES</h2>
              </Link>
            </li>
            <li>
              <Link href="/research" scroll={false}>
                <h2 className={styles.menuTypo}>RESEARCH</h2>
              </Link>
            </li>
            {/* <li>
                            <Link href="/products" scroll={false}>
                                <h2 className={styles.menuTypo}>MERCHANDISE</h2>
                            </Link>
                        </li> */}
            <li>
              <Link href="/about" scroll={false}>
                <h2 className={styles.menuTypo}>ABOUT</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
