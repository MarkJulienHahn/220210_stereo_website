import React, { useState } from "react";
import { Slider } from "@material-ui/core";

import styles from "../styles/Glyphchart.module.css";
import Glyphchartletter from "./Glyphchartletter";

function Glyphchart(props) {
  const [glyph, setGlyph] = useState("A");
  const [wght, updateWght] = useState(100);
  const [ital, updateItal] = useState(0);
  const [styleset, updateStyleset] = useState("normal");

  const glyphStyle = {
    fontFamily: props.fontFamily,
    fontVariationSettings: `'wght' 100, 'wdth' ${props.fontWidth}, 'ital' 0`,
  };

  const glyphDisplay = {
    fontFeatureSettings: `${styleset}`,
    fontVariationSettings: `'wght' ${wght}, 'wdth' ${props.fontWidth}, 'ital' ${ital}`,
  };

  function changeWght(e, wght) {
    updateWght((prevValue) => wght);
  }

  function changeItal(e, ital) {
    updateItal((prevValue) => ital);
  }

  function changeStyleset(styleset) {
    updateStyleset((prevValue) => styleset);
  }

  return (
    <div>
      <div className="glyphchartWrapper" style={glyphStyle}>
        <div className="glyphchartDisplayWrapper">
          <div className="glyphchartSlider">
            <div>
              <p>&#8594; Weight</p>
              <Slider
                className="glyphchartSlider"
                min={40}
                max={250}
                step={0.1}
                defaultValue={100}
                onChange={changeWght}
              />
            </div>
            <div>
              <p>&#8594; Italic</p>
              <Slider
                className="glyphchartSlider"
                min={0}
                max={100}
                step={0.1}
                defaultValue={0}
                onChange={changeItal}
              />
            </div>
          </div>
          <div className="glyphchartDisplay" style={glyphDisplay}>
            <div>{glyph}</div>
          </div>
        </div>
        <div className="glyphchartTable">
          <div className="glyphchartDisplayMobile" style={glyphDisplay}>
            {glyph}

            <div className="glyphchartSliderMobile">
              <div className="glyphchartSliderSingle">
                <p>&#8594; Weight</p>
                <Slider
                  min={40}
                  max={250}
                  step={0.1}
                  defaultValue={100}
                  onChange={changeWght}
                />
              </div>
              <div className="glyphchartSliderSingle">
                <p>&#8594; Italic</p>
                <Slider
                  min={0}
                  max={100}
                  step={0.1}
                  defaultValue={0}
                  onChange={changeItal}
                />
              </div>
            </div>
          </div>

          <p className="glyphchartHeading">&#8594; Uppercase</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"A"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"B"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"C"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"D"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"E"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"F"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"G"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"H"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"I"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"J"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"K"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"L"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"M"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"N"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"O"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"P"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"Q"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"R"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"S"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"T"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"U"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"V"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"W"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"X"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"Y"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"Z"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Lowercase</p>
          <div
            className="glyphchartLetterWrapper"
            onMouseEnter={() => changeStyleset("normal")}
          >
            <Glyphchartletter
              lable={"a"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"b"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"c"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"d"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"e"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"f"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"g"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"h"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"i"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"j"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"k"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"l"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"m"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"n"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"o"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"p"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"q"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"r"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"s"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"t"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"u"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"v"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"w"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"x"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"y"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"z"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Latin Extended Uppercase </p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Latin Extended Lowercase </p>
          <div
            className="glyphchartLetterWrapper"
            onMouseEnter={() => changeStyleset("normal")}
          >
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Stylistic Set 01</p>
          <div
            className="glyphchartLetterWrapper"
            onMouseEnter={() => changeStyleset('"ss01"')}
          >
            <Glyphchartletter
              lable={"a"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            {/* <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            /> */}
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss01"}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Stylistic Set 02</p>
          <div
            className="glyphchartLetterWrapper"
            onMouseEnter={() => changeStyleset('"ss02"')}
          >
            <Glyphchartletter
              lable={"g"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss02"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss02"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss02"}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              ss={"ss02"}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Figures</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"0"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"1"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"2"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"3"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"4"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"5"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"6"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"7"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"8"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"9"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Punctuation</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"."}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={","}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={":"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={";"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"!"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"?"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"*"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"#"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"/"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={`(`}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={")"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"{"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"}"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"["}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"]"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"-"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"_"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"/"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={`???`}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={`"`}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Currency</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"$"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Symbols</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"+"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"="}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={">"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"<"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"~"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"^"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"%"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"@"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"&"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"|"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"??"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Arrows</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
            <Glyphchartletter
              lable={"???"}
              changeGlyph={(glyph) => setGlyph(glyph)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glyphchart;
