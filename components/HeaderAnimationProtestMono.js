import React, { useState, useEffect } from "react";

// import HeaderAnimationProtestMonoLetter from "./HeaderAnimationProtestMonoLetter";

const HeaderAnimationProtestMono = ({ scrollUp }) => {
  const [index, setIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState("");

  const array = [
    "StereoStereoStereoStereo",
    "MonoMonoMonoMonoMonoMono",
    "MMMMMMMMMMMMMMMMMMMMMMMM",
    "ProProProProProProProPro",
    "TestTestTestTestTestTest",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * array.length));
    }, 700);
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
    <div>
      <div
        className={"typeface-single-scrolldown"}
        style={scrollPosition < 700 ? visible : invisible}
      >
        <div
          className={"typeface-single-scrolldown-inner"}
          onClick={() => scrollUp()}
        >
          <div>Scroll Down</div>
          <div> &darr;</div>
        </div>
      </div>

      <div
        className={"headerAnimationWrapperPGMono"}
        style={{ background: "var(--primary)" }}
      >
        <div
          className={"headerAnimationSubWrapperPGMono"}
          style={{ fontFamily: "ProtestMono", color: "#292b36" }}
        >
          <div className={"row"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row2"}>
            <p>
              {array[index]}
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
              {array[index]}
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
              {array[index]}
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
              {array[index]}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimationProtestMono;
