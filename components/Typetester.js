import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import styles from "../styles/Typetester.module.css";

import Button from "./Button";

function Typetester(props) {
  const [val, updateVal] = useState(200);
  const [val2, updateVal2] = useState(-3);
  const [val3, setVal3] = useState("ss00");
  const [val4, setVal4] = useState("ss00");
  const [ss01Color, setColor01] = useState("quaternary");
  const [ss02Color, setColor02] = useState("quaternary");

  const [buttonContent, setButtonContent] = useState(null);

  const updateButtonContent = (input1) => {
    setButtonContent(input1);
  };

  function changeVal(e, val) {
    updateVal((prevValue) => val);
  }

  function changeVal2(e, val2) {
    updateVal2((prevValue) => val2);
  }

  function makeSS01() {
    if (val3 === "ss01") {
      setVal3("ss00"), setColor01("quaternary");
    } else {
      setVal3("ss01"), setColor01("primary");
    }
  }

  function makeSS02() {
    if (val4 === "ss02") {
      setVal4("ss00");
      setColor02("quaternary");
    } else {
      setVal4("ss02"), setColor02("primary");
    }
  }

  const testerStyle = {
    fontSize: `calc(0.1*${val}vw)`,
    lineHeight: `calc(0.12*${val}vw)`,
    height: `clamp(190px, calc(0.115*${val}vw), calc(0.115*${val}vw))`,
    letterSpacing: `${((val2 * val) / 1500)+(props.letterSpacing*val)}vw`,
    fontVariationSettings: `'wght' ${props.wght}, 'ital' ${props.ital}, 'wdth' 50`,
    fontFeatureSettings: `"${val3}", "${val4}"`,
  };

  return (
    <>
      <div
        className="typetesterWrapper"

      >
        <div className="controlsWrapper">
          <div className="controlsColumn">
            <div className="column01Wrapper">
              <p>&#8594; {props.name}</p>
              <div className="ssButtons">
                <span onClick={makeSS01}>
                  <Button lable="Stylistic Set #1" subclass={ss01Color} hoverclass={"secondary"}/>
                </span>

                <span onClick={makeSS02}>
                  <Button lable="Stylistic Set #2" subclass={ss02Color}/>
                </span>
              </div>
            </div>
          </div>

          <div className="controlsColumn">
            <div className="column02Wrapper">
              <p>&#8594; Font Size {val}pt </p>
              <Slider
                className={styles.slider}
                min={15}
                max={700}
                step={1}
                defaultValue={200}
                onChange={changeVal}
              />
            </div>
          </div>
          <div className="controlsColumn">
            <div className="column02Wrapper">
              <p>&#8594; Tracking </p>
              <Slider
                className={styles.slider}
                min={-10}
                max={5}
                step={0.1}
                defaultValue={-3}
                onChange={changeVal2}
              />
            </div>
          </div>
        </div>

        <div className="inputWrapper">
          <div
            contentEditable="true"
            suppressContentEditableWarning="true"
            className={styles.input}
            style={testerStyle}
            type="text"
            name="lname"
            spellCheck="false"
            onMouseEnter={() => updateButtonContent("Click To Type")}
            onMouseLeave={() => updateButtonContent("")}
            onClick={() => updateButtonContent("")}
          >
            {props.sample}
          </div>
        </div>
      </div>

      {/* <MouseButton lable={buttonContent} /> */}
    </>
  );
}

export default Typetester;
