import React, { useState, useEffect } from "react";

// import HeaderAnimationProtestMonoLetter from "./HeaderAnimationProtestMonoLetter";

const HeaderAnimationProtestMono = () => {
  const [index, setIndex] = useState(0);

  const array = [
    // "VideogameVideogameVideog",
    // "FW25FW25FW25FW25FW25FW25",
    // "TaylorSwiftTaylorSwiftTa",
    // "RawArchitectureRawArchit",
    // "RunwayAwayRunwayAwayRunw",
    // "DemnaDemnaDemnaDemnaDemn",
    // "useStateUseEffectUseStat",
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
      <div className={"headerAnimationWrapperPGMono"} style={{background: "black"}}>
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

export default HeaderAnimationProtestMono;
