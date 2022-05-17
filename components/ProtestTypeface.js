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
        <div className="typefaceInfo">
          <p>→ 14 Styles / Price per style from 69 EUR</p>
        </div>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([40, 0])}
        >
          Protest Grotesk Thin /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([40, 100])}
        >
          Protest Grotesk Thin Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([60, 0])}
        >
          Protest Grotesk Light /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([60, 100])}
        >
          Protest Grotesk Light Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([80, 0])}
        >
          Protest Grotesk Regular /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([80, 100])}
        >
          Protest Grotesk Regular Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([100, 0])}
        >
          Protest Grotesk Book /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([100, 100])}
        >
          Protest Grotesk Book Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([116, 0])}
        >
          Protest Grotesk Medium /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([116, 100])}
        >
          Protest Grotesk Medium Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([133, 0])}
        >
          Protest Grotesk Bold /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([133, 100])}
        >
          Protest Grotesk Bold Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([150, 0])}
        >
          Protest Grotesk Black /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([150, 100])}
        >
          Protest Grotesk Black Italic /{" "}
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
