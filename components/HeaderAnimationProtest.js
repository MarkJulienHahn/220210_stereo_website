import React, { useState, useEffect } from "react";

const HeaderAnimationProtest = () => {
  const [index, setIndex] = useState(0);

  const array = ["testProtestPro", "teskGroteskGro", "reoStereoSter", "typeTypeType"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * array.length));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={"headerAnimationWrapper"}>
        <div className={"headerAnimationSubWrapper"}>
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

export default HeaderAnimationProtest;
