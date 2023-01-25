import React, { useState, useEffect } from "react";
import useWindowDimensions from "./Hooks/useWindowDimensions";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

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
letterSpacing
}) => {
  const { ref: ref1, inView: isVisible } = useInView();

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
  }, [x, y]);

  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };

    {
      isVisible
        ? window.addEventListener("mousemove", update)
        : window.removeEventListener("mousemove", update);
    }

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [isVisible]);

  const headerStyle = {
    fontSize: size,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
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
        ref={ref1}
      >
        <div
          className={"headerMouseAnimation"}
          style={{ fontFamily: font, pointerEvents: "none" }}
        >
          <motion.div
            className="container"
            initial={{ y: -3000 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              bounce: 0.15,
            }}
          >
            <div>
              <span style={headerStyle}>{name}</span>
              <span className={"smallR"}>®</span>
            </div>
          </motion.div>
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
