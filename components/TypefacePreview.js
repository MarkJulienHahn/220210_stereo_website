import React, { useState, useEffect } from "react";

import MouseButton from "./MouseButton";

const TypefacePreview = (props) => {
  const [wdth, updateWdth] = useState(props.default);
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
    console.log(nmbr)
    return () => clearInterval(interval);
  });

  const style01 = {
    fontVariationSettings: `'wght' ${wdth[0]}, 'ital' ${wdth[1]},'wdth' 50`,
    fontFamily: `${props.fontFamily}`,
    letterSpacing: props.configuration.letterSpacing,
  };

  // console.log(wdth)

  return (
    <div className="typefaceWrapper">
      <div className="typefaceControl">
        <span className="typefaceInfo">
          → {props.lable} <p>{props.weights.length} Weights, from 70 EUR</p>
        </span>

        {props.weights.map((item) => (
          <span
            key={item}
            className="typefaceControlButton"
            onMouseEnter={() => setWdth([item[1], item[2]])}
            style={(wdth[0] === item[1] && wdth[1] === item[2] || wdth[0] === item[1] && wdth[1] === 100 ? { opacity: "1" } : { opacity: "0.3" })}
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
