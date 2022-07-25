import React, { useState } from "react";

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
        className={"PGMonoLetter"}
        onMouseEnter={() => updateWeight("250")}
        style={style}
      >
        {props.glyph}
      </div>
    </>
  );
};

export default HeaderAnimationProtestMonoLetter;
