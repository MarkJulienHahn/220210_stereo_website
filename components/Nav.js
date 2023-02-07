import Link from "next/link";
import styles from "../styles/Nav.module.css";
import React, { useState } from "react";

const Nav = ({ darkMode }) => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const darkBG = {
    background: "rgba(255,255,255,0.5)",
  };
  const dark = {
    color: "black"
  }

  return (
    <nav className={styles.menuContainer}>
      <div className={styles.logoTypo} style={darkMode ? dark : {}}>
        {isActive ? (
          <div style={{ transform: "translateX(5px)" }}>
            STEREO
            <span
              style={{
                fontFamily: "Protest",
                fontSize: "15px",
                fontVariationSettings: `"wght" 150`,
                transform: "translateY(-50px)",
              }}
            >
              ®
            </span>
          </div>
        ) : (
          "CLOSE"
        )}
      </div>
      <div
        id={styles.menuBar}
        className={isActive ? "menuBarClosed" : "menuBarOpen"}
        onClick={ToggleClass}
        style={darkMode ? darkBG : {}}
      >
        <div
          className={isActive ? "menuLinkClosed" : "menuLinkOpen"}
          style={darkMode ? dark : {}}
        >
          <ul>
            {/* <li>
              <Link href="/" scroll={false}>
                <h2 className={styles.menuTypo}>STOREFRONT</h2>
              </Link>
            </li> */}
            <li>
              <Link href="/" scroll={false}>
                <h2 className={styles.menuTypo}>TYPEFACES</h2>
              </Link>
            </li>
            <li>
              <Link href="/trials" scroll={false}>
                <h2 className={styles.menuTypo}>TRIALS</h2>
              </Link>
            </li>
            <li>
              <Link href="/projects" scroll={false}>
                <h2 className={styles.menuTypo}>PROJECTS</h2>
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
