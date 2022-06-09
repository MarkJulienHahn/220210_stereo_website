import React, { useState, useEffect } from "react";
import Link from "next/link";
import Styles from "../styles/Typeface.module.css";

import MouseButton from "../components/MouseButton";

const ProtestTypeface = (props) => {
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
      console.log(nmbr)
    }, MINUTE_MS);

    return () => clearInterval(interval);
  });

  const style01 = {
    fontVariationSettings: `'wght' ${wdth[0]}, 'ital' ${wdth[1]},'wdth' 50`,
    fontFamily: `${props.fontFamily}`,
  };

  return (
    <div className="typefaceWrapper">
      <div className="typefaceControl">
        <span className="typefaceInfo">
          → Protest Grotesk <p>14 Weights, from 70 EUR</p>
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([40, 0])}
        >
          Thin /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([40, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([60, 0])}
        >
          Light /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([60, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([80, 0])}
        >
          Regular /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([80, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([100, 0])}
        >
          Book /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([100, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([116, 0])}
        >
          Medium /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([116, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([133, 0])}
        >
          Bold /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([133, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([150, 0])}
        >
          Black /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([150, 100])}
        >
          Italic{" "}
        </span>
      </div>

      <MouseButton lable={buttonContent} />

      {/* <div className={Styles.typefaceSliderWrapper}>
        <div
          className={Styles.typefacePrevButton}
          onClick={prevText}
        ></div>
        <div
          className={Styles.typefaceNextButton}
          onClick={nextText}
        ></div>
      </div> */}

      <Link href="/typefaces/protest-grotesk-text" scroll={false}>
        <div
          className="typefaceDisplay"
          style={style01}
          onMouseEnter={() => updateButtonContent("SHOW SPECIMEN")}
          onMouseLeave={() => updateButtonContent("")}
        >
          <div>{props.content[nmbr]}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProtestTypeface;
