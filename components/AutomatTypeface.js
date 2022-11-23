import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/Typeface.module.css";

const AutomatTypeface = (props) => {
  const [wdth, updateWdth] = useState([0, 10]);
  const [nmbr, updateNmbr] = useState(0);

  function setWdth(i, j) {
    updateWdth(i, j);
  }

  function setNmbr() {
    updateNmbr((prevNmbr) => prevNmbr + 1);
  }

  function setbackNmbr() {
    updateNmbr((nmbr) => 0);
  }

  const style01 = {
    fontVariationSettings: `'frst' ${wdth[0]}, 'scnd' ${wdth[1]}`,
    fontFamily: `${props.fontFamily}`,
    letterSpacing: "40px",
    fontSize: "30vw",
  };

  return (
    <section className="typefaceWrapper">
      <Link href="/typefaces/protest-grotesk" scroll={false}>
        <a>
          <div className="typefaceControl">
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([5, 20])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([100, 40])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([70, 2])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([2, 60])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([14, 100])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([100, 100])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([30, 10])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([40, 100])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([50, 3])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([60, 100])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([80, 30])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([100, 50])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([40, 2])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([2, 100])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([5, 20])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([100, 40])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([70, 2])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([2, 60])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([2, 20])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([100, 2])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([70, 2])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([40, 50])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([50, 3])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([60, 20])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([2, 100])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([90, 50])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([40, 2])}
            >
              Automat Square 000 030 /{" "}
            </span>
            <span
              className="typefaceControlButton"
              onMouseEnter={() => setWdth([100, 2])}
            >
              Automat Square 000 030 /{" "}
            </span>
          </div>
        </a>
      </Link>

      <div
        className="typefaceDisplay"
        style={style01}
        onClick={nmbr < 4 ? setNmbr : setbackNmbr}
      >
        {props.content[nmbr]}
      </div>
    </section>
  );
};

export default AutomatTypeface;
