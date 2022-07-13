import React, { useState } from "react";
import styles from "../styles/HeaderAnimation.module.css";

const HeaderAnimationProtestMonoLetter = (props) => {
  const [wght, setWeight] = useState(Math.floor(Math.random()*600+100));

  const updateWeight = () => {
    setWeight(Math.floor(Math.random()*600+100));
  };

  const style = {
    fontVariationSettings: `'wght' ${wght}`,
  };



  return (
    <>
      <span
        className={"GialloWord"}
        onMouseEnter={() => updateWeight()}
        style={style}
      >
       &nbsp;{props.word}
      </span>
      <span className={"GialloIndex"}>{wght}</span>
      </>
  );
};

export default HeaderAnimationProtestMonoLetter;
