import React, { useState, useEffect } from "react";

const IntroAnimationGiallo = () => {
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

  return (
    <>
      <div className={"introAnimationWrapperGiallo"}>
        <div
          className={"introAnimationSubWrapperGiallo"}
          style={{ fontFamily: "Giallo" }}
        >
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

export default IntroAnimationGiallo;
