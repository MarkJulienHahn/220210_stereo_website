import React, { useState } from "react";
import { Slider } from "@material-ui/core";

import styles from "../styles/Glyphchart.module.css";
import Glyphchartletter from "./Glyphchartletter";

function Glyphchart(props) {
  const [glyph, setGlyph] = useState("A");
  const [wght, updateWght] = useState(400);
  const [ital, updateItal] = useState(0);
  const [styleset, updateStyleset] = useState("normal");

  const glyphStyle = {
    fontFamily: props.fontFamily,
    fontVariationSettings: `'wght' 100, 'wdth' ${props.fontWidth}, 'ital' 0`,
  };

  const glyphDisplay = {
    fontFeatureSettings: `${styleset}`,
    fontVariationSettings: `'wght' ${wght}, 'wdth' ${props.fontWidth}, 'ital' ${ital}`,
    background: props.darkMode && props.dark.background,
    color: props.darkMode && props.dark.color
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
                min={100}
                max={800}
                step={1}
                defaultValue={400}
                onChange={changeWght}
              />
            </div>
            <div>
              <p>&#8594; Oblique</p>
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

            <div className="glyphchartSliderMobile"  style={glyphDisplay}>
              <div className="glyphchartSliderSingle">
                <p>&#8594; Weight</p>
                <Slider
                  min={100}
                  max={800}
                  step={1}
                  defaultValue={400}
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
              wght={400}
            />
            <Glyphchartletter
              lable={"B"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"C"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"D"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"E"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"F"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"G"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"H"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"I"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"J"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"K"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"L"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"M"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"N"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"O"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"P"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Q"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"R"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"S"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"T"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"U"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"V"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"W"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"X"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Y"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Z"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
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
              wght={400}
            />
            <Glyphchartletter
              lable={"b"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"c"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"d"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"e"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"f"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"g"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"h"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"i"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"j"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"k"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"l"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"m"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"n"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"o"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"p"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"q"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"r"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"s"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"t"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"u"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"v"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"w"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"x"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"y"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"z"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Latin Extended Uppercase </p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"Á"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ă"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"Ắ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ằ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ẵ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"Ă"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Â"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"Ấ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ầ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ẫ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"Ä"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"À"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ā"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ą"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Å"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ã"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Æ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ć"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Č"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ç"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ċ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ð"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ď"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Đ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"É"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ě"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ê"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"Ế"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ề"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ễ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"Ë"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ė"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"È"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ē"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ę"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ẽ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ğ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ģ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ġ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ħ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Í"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Î"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ï"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"İ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ì"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ī"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Į"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ĩ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ķ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ĺ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ľ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ļ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ł"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ń"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ň"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ņ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ŋ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ñ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ó"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ô"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"Ố"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ồ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ỗ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"Ö"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ò"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ő"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ō"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ø"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Õ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Œ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Þ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ŕ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ř"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ŗ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ś"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Š"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ş"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ș"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ẞ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ŧ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ť"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ţ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ț"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ú"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Û"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ü"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ù"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ű"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ū"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ų"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ů"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ũ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ẃ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ŵ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ẅ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ẁ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ý"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ŷ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ÿ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ỳ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ỹ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ź"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ž"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ż"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Latin Extended Lowercase </p>
          <div
            className="glyphchartLetterWrapper"
            onMouseEnter={() => changeStyleset("normal")}
          >
            <Glyphchartletter
              lable={"á"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ă"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"ắ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ằ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ẵ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"â"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"ấ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ầ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ẫ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"ä"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"à"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ā"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ą"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"å"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ã"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"æ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ć"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"č"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ç"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ċ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ð"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ď"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"đ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"é"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ě"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ê"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"ế"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ề"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ễ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"ë"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ė"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"è"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ē"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ę"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ẽ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ğ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ĝ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ģ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ġ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ḡ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ħ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ı"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"í"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"î"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ï"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ì"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ī"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"į"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ĩ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ķ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ĺ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ľ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ļ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ł"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ń"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ň"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ņ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ŋ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ñ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ó"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ô"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            {/* <Glyphchartletter
              lable={"ố"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ồ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ỗ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            /> */}
            <Glyphchartletter
              lable={"ö"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ò"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ő"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ō"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ø"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"õ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"œ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"þ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ŕ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ř"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ŗ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ś"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"š"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ş"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ș"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ß"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ŧ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ť"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ţ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ț"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ú"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"û"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ü"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ù"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ű"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ū"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ų"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ů"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ũ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ẃ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ŵ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ẅ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ẁ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ý"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ŷ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ÿ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ỳ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ỹ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ź"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ž"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ż"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
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
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"á"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ă"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            {/* <Glyphchartletter
              lable={"ắ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ằ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ẵ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            /> */}
            <Glyphchartletter
              lable={"â"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            {/* <Glyphchartletter
              lable={"ấ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ầ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ẫ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            /> */}
            <Glyphchartletter
              lable={"ä"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"à"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ā"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ą"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"å"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ã"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss01"}
            />
            <Glyphchartletter
              lable={"ª"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
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
              wght={400}
              ss={"ss02"}
            />
            <Glyphchartletter
              lable={"ğ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss02"}
            />
            <Glyphchartletter
              lable={"ģ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss02"}
            />
            <Glyphchartletter
              lable={"ġ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
              ss={"ss02"}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Figures</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"0"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"1"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"2"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"3"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"4"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"5"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"6"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"7"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"8"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"9"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❶"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❷"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❸"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❹"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❺"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❻"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❼"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❽"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"❾"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"①"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"②"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"③"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"④"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⑤"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⑥"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⑦"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⑧"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⑨"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₀"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₁"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₂"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₃"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₄"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₅"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₆"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₇"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₈"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₉"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁰"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¹"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"²"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"³"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁴"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁵"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁶"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁷"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁸"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁹"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"½"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⅓"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¼"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¾"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⅕"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⅛"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⅜"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⅝"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⅞"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅰ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅱ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅲ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅳ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅴ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅵ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅶ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅷ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅸ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅹ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅼ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅽ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅾ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ⅿ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Punctuation</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"."}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={","}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={":"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={";"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"…"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"!"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¡"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"?"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¿"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"·"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"•"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"*"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁂"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⁑"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"#"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"/"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={`(`}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={")"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"{"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"}"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"["}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"]"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"-"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"–"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"—"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"_"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"/"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={`‚`}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"„"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"“"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"«"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"»"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"‹"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"›"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={`"`}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Currency</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"€"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"₿"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¢"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¤"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"$"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ƒ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"£"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¥"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Symbols</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"+"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"−"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"×"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"÷"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"="}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"≠"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={">"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"<"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"≥"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"≤"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"±"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"≈"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"~"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¬"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"^"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"∞"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"∫"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"Ω"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"∆"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"∏"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"∑"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"√"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"∂"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"µ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"%"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"‰"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"●"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"○"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"◊"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"@"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"&"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¶"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"§"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"©"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"®"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"™"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"°"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"|"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"¦"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"†"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"‡"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"ℓ"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"№"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
          </div>
          <p className="glyphchartHeading">&#8594; Arrows</p>
          <div className="glyphchartLetterWrapper">
            <Glyphchartletter
              lable={"↑"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↗"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"→"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↘"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↓"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↙"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"←"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↖"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↩"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↰"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↱"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↲"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↳"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"↴"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
            <Glyphchartletter
              lable={"⇆"}
              changeGlyph={(glyph) => setGlyph(glyph)}
              wght={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glyphchart;
