import React, { useState, useEffect } from "react";

const IntroAnimationProtest = () => {
  const [index, setIndex] = useState(0);

  const array = ["Original } Or", "Range 102KHz", "Model №507", "Tone/Bal*"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * array.length));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={"introAnimationWrapper"}>
        <div className={"introAnimationSubWrapper"}>
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
    </>
  );
};

export default IntroAnimationProtest;
