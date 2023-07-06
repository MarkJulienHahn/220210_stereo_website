import { useState } from "react";
import useWindowDimensions from "./Hooks/useWindowDimensions";

import Link from "next/link";
import styles from "../styles/Nav.module.css";

import { router } from "next/router";

import { useRouter } from "next/router";

const Nav = ({ darkMode }) => {
  const [isActive, setActive] = useState("false");
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const { windowWidth } = useWindowDimensions();

  const darkBG = {
    background: "rgba(255,255,255,0.5)",
  };
  const dark = {
    color: "black",
  };

  return (
    router.pathname != "/premium-access/download" && router.pathname != "/early-access/download" && (
      <nav
        className={styles.menuContainer}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.logoTypo} style={darkMode ? dark : {}}>
          {isActive ? (
            <div
            // style={{ transform: "translateX(5px)" }}
            >
              {windowWidth > 1000 ? (hover ? "OPEN" : "MENU") : "MENU"}
              {/* 
            <span
              style={{
                fontFamily: "Protest",
                fontSize: "15px",
                fontVariationSettings: `"wght" 150`,
                transform: "translateY(-50px)",
              }}
            >
               {windowWidth > 1000 ? (hover ? "" : "®") : ""}
            </span> */}
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
                {router.pathname == "/" ? (
                  <h2
                    className={styles.menuTypo}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    TYPEFACES
                  </h2>
                ) : (
                  <Link href="/" scroll={false}>
                    <h2 className={styles.menuTypo}>TYPEFACES</h2>
                  </Link>
                )}
              </li>

              <li>
                <Link href="/trials" scroll={false}>
                  <h2 className={styles.menuTypo}>TRIALS</h2>
                </Link>
              </li>

              <li>
                {router.pathname == "/projects" ? (
                  <h2
                    className={styles.menuTypo}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    PROJECTS
                  </h2>
                ) : (
                  <Link href="/projects" scroll={false}>
                    <h2 className={styles.menuTypo}>PROJECTS</h2>
                  </Link>
                )}
              </li>

              <li>
                {router.pathname == "/licensing" ? (
                  <h2
                    className={styles.menuTypo}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    LICENSING
                  </h2>
                ) : (
                  <Link href="/licensing" scroll={false}>
                    <h2 className={styles.menuTypo}>LICENSING</h2>
                  </Link>
                )}
              </li>

              <li>
                {router.pathname == "/about" ? (
                  <h2
                    className={styles.menuTypo}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    ABOUT
                  </h2>
                ) : (
                  <Link href="/about" scroll={false}>
                    <h2 className={styles.menuTypo}>ABOUT</h2>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  );
};

export default Nav;
