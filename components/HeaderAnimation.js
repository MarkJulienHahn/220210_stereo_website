import React, { useState, useEffect } from "react";
import useWindowDimensions from "./Hooks/useWindowDimensions";

const HeaderAnimation = ({
  scrollUp,
  name,
  font,
  wghtMin,
  wghtMax,
  background,
  color,
  size,
  italic,
  lineHeight,
}) => {
  // SCROLL FÜR »SCROLL DOWN«

  const [scrollPosition, setScrollPosition] = useState("");
  const [wght, setWght] = useState(40);
  const [ital, setItal] = useState(100);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // WINDOWBREITE HERAUSFINDEN + MAUSPOSITION HERAUSFINDEN

  if (typeof window !== "undefined") {
    const { windowHeight, windowWidth } = useWindowDimensions();

    const updateWght = (i) => {
      setWght(Math.floor(i * (wghtMax - wghtMin)) + wghtMin);
    };

    const updateItal = (i) => {
      setItal(Math.floor(i * 101));
    };

    useEffect(() => {
      updateItal(x / windowWidth);
      updateWght(y / windowHeight);
    });
  }

  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  const visible = { opacity: "1", pointerEvents: "auto" };
  const invisible = { opacity: "0", pointerEvents: "none" };

  const headerStyle = {
    fontSize: size,
    lineHeight: lineHeight,
    marginTop: "2vw",
    fontVariationSettings: `"wght" ${wght}
    , "ital" ${ital}`,
  };
  const headerIndexStyle = {
    fontVariationSettings: `"wght" ${wght}, "ital" ${ital}`,
  };

  const threeDigits = (i) => {
    return i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
  };

  return (
    <>
      <div
        className={"headerAnimationWrapper"}
        style={{ background: background, color: color }}
        onClick={() => scrollUp()}
      >
        {/* <div
          className={"typeface-single-scrolldown"}
          style={scrollPosition < 700 ? visible : invisible}
        >
          <div className={"typeface-single-scrolldown-inner"}>
            <div>Scroll Down</div>
            <div> &darr;</div>
          </div>
        </div> */}

        <div
          className={"headerMouseAnimation"}
          style={{ fontFamily: font, pointerEvents: "none" }}
        >
          <div>
            <span style={headerStyle}>{name}</span>
            <span className={"smallR"}>®</span>
          </div>

          <div style={headerIndexStyle} className={"headerMouseIndex"}>
            <span>
              {threeDigits(wght)} {italic && threeDigits(ital)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAnimation;
