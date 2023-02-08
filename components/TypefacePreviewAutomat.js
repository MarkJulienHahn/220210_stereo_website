import React, { useState, useEffect } from "react";

import MouseButton from "./MouseButton";

const TypefacePreviewAutomat = (props) => {
  const [wdth, updateWdth] = useState(props.default);
  const [nmbr, updateNmbr] = useState(0);
  const [font, updateFont] = useState("AutomatSquare");

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
    fontVariationSettings: `'frst' ${wdth[0]}, 'scnd' ${wdth[1]}`,
    fontFamily: font,
    letterSpacing: props.configuration.letterSpacing,
  };

  return (
    <div className="typefaceWrapper">
      <div
        className="typefaceControl"
        style={
          props.darkMode
            ? { background: "rgba(0,0,0,0.7)" }
            : { background: "rgba(255,255,255,0.6)" }
        }
      >
        <span className="typefaceInfo">
          <div>
            → {props.lable}{" "}
            <span style={{ fontSize: "10pt", color: "var(--fifthSolid)" }}>
              Beta
            </span>
          </div>
          <p>Variable Font Concept</p>
        </span>
        <div onMouseEnter={() => updateFont("AutomatSquare")}>
          {props.weightsSQR.map((item) => (
            <span
              key={item}
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([item[1], item[2]])}
              style={
                wdth[0] === item[1] &&
                wdth[1] === item[2] &&
                font == "AutomatSquare"
                  ? { opacity: "1" }
                  : { opacity: "0.3" }
              }
            >
              {item[0]}
            </span>
          ))}
        </div>
        <div onMouseEnter={() => updateFont("AutomatRound")}>
          {props.weightsRND.map((item) => (
            <span
              key={item}
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([item[1], item[2]])}
              style={
                wdth[0] === item[1] &&
                wdth[1] === item[2] &&
                font == "AutomatRound"
                  ? { opacity: "1" }
                  : { opacity: "0.3" }
              }
            >
              {item[0]}
            </span>
          ))}
        </div>
      </div>

      <MouseButton lable={buttonContent} background={"var(--fifth)"} />

      <div
        className="typefaceDisplay"
        style={style01}
        onMouseEnter={() => updateButtonContent("COMING SOON!")}
        onMouseLeave={() => updateButtonContent("")}
      >
        <div>{props.content[nmbr]}</div>
      </div>
    </div>
  );
};

export default TypefacePreviewAutomat;
