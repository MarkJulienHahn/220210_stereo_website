import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import styles from '../styles/Typetester.module.css'


function Typetester ( props ) {

  const [val, updateVal] = useState(257);
  const [val2, updateVal2] = useState(-10);
  const [val3, setVal3] = useState("ss00");
  const [val4, setVal4] = useState("ss00");
  const [ss01Color, setColor01] = useState("lightgrey");
  const [ss02Color, setColor02] = useState("lightgrey");

  function changeVal(e,val) {
    updateVal(prevValue => val)
  }

  function changeVal2(e,val2) {
    updateVal2(prevValue => val2)
  }

  function makeSS01() {
    if(val3 === "ss01") {
      setVal3("ss00"),
      setColor01("lightgrey")
    } else {
      setVal3("ss01"),
      setColor01("var(--secondary)")
    }
  }  

  function makeSS02() {
    if(val4 === "ss02") {
      setVal4("ss00");
      setColor02("lightgrey")
    } else {
      setVal4("ss02"),
      setColor02("var(--secondary)")
    }
  }  

  const testerStyle = {
    fontSize: `${val}pt`,
    lineHeight: `${val*1.2}pt`,
    height: `clamp(300px, ${val+150}px, ${val+150}px)`,
    letterSpacing: `${val2*val/200}px`,
    fontVariationSettings: `'wght' ${props.wght}, 'ital' ${props.ital}, 'wdth' 50`,
    fontFeatureSettings: `"${val3}", "${val4}"`
  }

  const ss01Style = {
    color: ss01Color,
    cursor: "pointer"
  }

  const ss02Style = {
    color: ss02Color,
    cursor: "pointer"
  }


  return  (

    <>
      <div className="typetesterWrapper">
        <div className="controlsWrapper">
          <div className="controlsColumn">
            <div className="sliderWrapper">
              <p>&#8594; {props.name}</p>
              <p>
                <span onClick={makeSS01} style={ss01Style} >SS01 </span> / <span onClick={makeSS02} style={ss02Style}>SS02</span></p>
            </div>
          </div>
          <div className="sliderWrapper" id="click2type">
            <p>&#8594; Click the Field to Type</p>
          </div>
          <div className="controlsColumn">
            <div className="sliderWrapper"><p>&#8594; Font Size {val}pt </p>
              <Slider
                className={styles.slider}
                min={15}
                max={800}
                step={1}
                defaultValue={200}
                onChange={changeVal}
              />
            </div>
            </div>
            <div className="controlsColumn">
              <div className="sliderWrapper"><p>&#8594; Tracking </p>
                <Slider
                  className={styles.slider}
                  min={-20}
                  max={20}
                  step={0.1}
                  defaultValue={-10}
                  onChange={changeVal2}
                />
              </div>
            </div>
        </div>

        <div className="inputWrapper">
          <div contentEditable="true" className={styles.input} style={testerStyle} type="text" name="lname" spellCheck="false">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </>
  )
}

export default Typetester; 