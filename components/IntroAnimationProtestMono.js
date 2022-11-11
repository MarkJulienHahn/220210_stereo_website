import React, { useState, useEffect } from "react";

const IntroAnimationProtestMono = () => {
  const [index, setIndex] = useState(0);

  const array = [
    "StereoStereoStereoStereo",
    "MonoMonoMonoMonoMonoMono",
    "MMMMMMMMMMMMMMMMMMMMMMMM",
    "ProProProProProProProPro",
    "TestTestTestTestTestTest"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * array.length));
    }, 700);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className={"headerAnimationWrapperPGMono"} style={{background: "rgb(30, 30, 30)"}}>
        <div className={"headerAnimationSubWrapperPGMono"} style={{fontFamily: "ProtestMono"}}>
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

export default IntroAnimationProtestMono;
