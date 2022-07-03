import React, { useState, useEffect } from "react";
import Link from "next/link";
import Styles from "../styles/Typeface.module.css";

import MouseButton from "./MouseButton";

const TypefacePreview = (props) => {
  const [wdth, updateWdth] = useState([150, 0]);
  const [nmbr, updateNmbr] = useState(0);

  const [buttonContent, setButtonContent] = useState(null);

  function setWdth(i, j) {
    updateWdth(i, j);
  }

  const updateButtonContent = (input1) => {
    setButtonContent(input1);
  };

  function nextNmbr() {
    updateNmbr((prevNmbr) => prevNmbr + 1);
  }

  function prevNmbr() {
    updateNmbr((prevNmbr) => prevNmbr - 1);
  }

  function setbackNmbr() {
    updateNmbr((nmbr) => 0);
  }

  function setfrwrdNmbr() {
    updateNmbr((nmbr) => 4);
  }

  function nextText() {
    if (nmbr < 4) {
      nextNmbr();
      return;
    } else {
      setbackNmbr();
    }
    return;
  }

  function prevText() {
    if (nmbr > 0) {
      prevNmbr();
      return;
    } else {
      setfrwrdNmbr();
    }
    return;
  }

  const MINUTE_MS = 1500;

  useEffect(() => {
    const interval = setInterval(() => {
      prevText();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  });

  const style01 = {
    fontVariationSettings: `'wght' ${wdth[0]}, 'ital' ${wdth[1]},'wdth' 50`,
    fontFamily: `${props.fontFamily}`,
    letterSpacing: props.configuration.letterSpacing
  };

  return (
    <div className="typefaceWrapper">

      <div className="typefaceControl">
        <span className="typefaceInfo">
          → {props.lable} <p>{props.weights.length} Weights, from 70 EUR</p>
        </span>


        {props.weights.map((item) => (
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([item[1], item[2]])}
        >
          {item[0]}
        </span>
      ))}

      </div> 

      <MouseButton lable={buttonContent} />

        <div
          className="typefaceDisplay"
          style={style01}
          onMouseEnter={() => updateButtonContent("SHOW SPECIMEN")}
          onMouseLeave={() => updateButtonContent("")}
        >
          <div>{props.content[nmbr]}</div>
        </div>
    </div>
  );
};

export default TypefacePreview;
