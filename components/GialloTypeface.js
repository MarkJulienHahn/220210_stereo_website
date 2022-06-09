import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/Typeface.module.css";

const GialloTypeface = (props) => {
  const [wdth, updateWdth] = useState([700, 0]);
  const [nmbr, updateNmbr] = useState(0);

  function setWdth(i, j) {
    updateWdth(i, j);
  }

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

  const style01 = {
    fontVariationSettings: `'wght' ${wdth[0]}, 'ital' ${wdth[1]},'wdth' 50`,
    fontFamily: `${props.fontFamily}`,
    // letterSpacing: `-0.5vw`,
    fontSize: `12.8vw`,
    // lineHeight: `11vw`,
  };

  return (
    <section className="typefaceWrapper">
      <div className="typefaceControl">
        <span className="typefaceInfo">
          → Giallo Roman <p>14 Weights, from 70 EUR</p>
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([700, 0])}
        >
          Black /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([700, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([600, 0])}
        >
          Bold /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([600, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([500, 0])}
        >
          Semibold /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([500, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([400, 0])}
        >
          Medium /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([400, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([300, 0])}
        >
          Book /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([300, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([200, 0])}
        >
          Regular /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([200, 100])}
        >
          Italic /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([100, 0])}
        >
          Light /{" "}
        </span>
        <span
          className="typefaceControlButton"
          onMouseEnter={() => setWdth([100, 100])}
        >
          Italic{" "}
        </span>
      </div>

      <div className={Styles.typefaceSliderWrapper}>
        <div className={Styles.typefacePrevButton} onClick={prevText}></div>
        <div className={Styles.typefaceNextButton} onClick={nextText}></div>
      </div>

      <Link href="/typefaces/giallo-roman" scroll={false}>
        <div className="typefaceDisplay" style={style01}>
          <div>{props.content[nmbr]}</div>
        </div>
      </Link>
    </section>
  );
};

export default GialloTypeface;
