import React, { useState, useEffect } from "react";

const HeaderAnimationProtest = ({ scrollUp }) => {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [scrollPosition, setScrollPosition] = useState("");

  const array = [
    "Black²⁵⁰ Heavy²²⁰ Bold¹⁹⁰ Semibold¹⁶⁰",
    "Medium¹³⁰ Regular¹⁰⁰ Light⁷⁰ Thin⁴⁰",
    "Roman Roman Roman Roman",
    "Giallo Roman® Giallo Roman«",
    "Yellow Yellow Yellow Yellow Yellow Yellow Yellow",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * array.length));
      setIndex2(Math.floor(Math.random() * array.length));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const visible = { opacity: "1", pointerEvents: "auto" };
  const invisible = { opacity: "0", pointerEvents: "none" };

  return (
    <>
      <div className={"headerAnimationWrapperGiallo"}>
        <div
          className={"typeface-single-scrolldown"}
          style={scrollPosition < 700 ? visible : invisible}
        >
          <div className={"typeface-single-scrolldown-inner"} onClick={() => scrollUp()}>
            <div>Scroll Down</div>
            <div> &darr;</div>
          </div>
        </div>

        <div className={"headerAnimationSubWrapperGiallo"} style={{fontFamily: "Giallo"}}>
          <div className={"row"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row2"}>
            <p>
              {array[index2]}
              <br />
            </p>
          </div>
          <div className={"row"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row2"}>
            <p>
              {array[index2]}
              <br />
            </p>
          </div>
          <div className={"row"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row2"}>
            <p>
              {array[index2]}
              <br />
            </p>
          </div>
          <div className={"row"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row2"}>
            <p>
              {array[index2]}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAnimationProtest;
