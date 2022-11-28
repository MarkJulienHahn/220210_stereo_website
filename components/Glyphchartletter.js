import React, { useState } from "react";
import styles from "../styles/Glyphchart.module.css";

function Glyphchartletter(props) {
  const glyphstyle = {
    fontVariationSettings: `"wght" ${props.wght}`,
    fontFeatureSettings: `"${props.ss}"`,
  };

  return (
    <>
      <div
        className="glyphchartLetter"
        onMouseEnter={() => props.changeGlyph(props.lable)}
        style={glyphstyle}
      >
        {props.lable}
      </div>
    </>
  );
}

export default Glyphchartletter;
