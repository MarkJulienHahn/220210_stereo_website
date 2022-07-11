import React, { useState } from "react";
import styles from "../styles/HeaderAnimation.module.css";

const HeaderAnimationProtestMonoLetter = (props) => {
  const [wght, setWeight] = useState("40");

  const updateWeight = (v) => {
    setWeight(v);
  };

  const style = {
    fontVariationSettings: `'wght' ${wght}`,
  };

  return (
    <>
      <div
        className={styles.PGMonoLetter}
        onMouseEnter={() => updateWeight("250")}
        style={style}
      >
        {props.glyph}
      </div>
    </>
  );
};

export default HeaderAnimationProtestMonoLetter;
