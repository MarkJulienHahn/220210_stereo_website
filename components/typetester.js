import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import styles from '../styles/Typetester.module.css'


function Typetester ( props ) {

  const [val, updateVal] = useState(200);
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
    lineHeight: `${val+5}pt`,
    height: `clamp(300px, ${val+100}px, ${val+100}px)`,
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
      <div className={styles.typetesterWrapper}>
        <div className={styles.controlsWrapper}>
          <div className={styles.controlsColumn}>
            <div className={styles.sliderWrapper}>
              <p>&#8594; {props.name}</p>
              <p>
                <span onClick={makeSS01} style={ss01Style} >SS01 </span> / <span onClick={makeSS02} style={ss02Style}>SS02</span></p>
            </div>
          </div>
          <div className={styles.sliderWrapper}>
            <p>&#8594; Click the Field to Type</p>
          </div>
          <div className={styles.controlsColumn}>
            <div className={styles.sliderWrapper}><p>&#8594; Font Size {val}pt </p>
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
            <div className={styles.controlsColumn}>
              <div className={styles.sliderWrapper}><p>&#8594; Tracking </p>
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

        <div className={styles.inputWrapper}>
          <div contentEditable="true" className={styles.input} style={testerStyle} type="text" name="lname">Round your city, round the clock
Everybody needs you
No, you can&apos;t make everybody equal
Although you got beaucoup family
You don&apos;t even got nobody bein&apos; honest with you
Breathe &apos;til I evaporated
My whole body see through
Transportation, handmade (G)
And I know it better than most people
I don&apos;t trust &apos;em anyways
You can&apos;t break the law with them
Get some gushy, have a calm night
Shooters killin&apos; left and right
Workin&apos; through your worst night
If I get my money right
You know I won&apos;t need you
And I tell you (Bitch)
I hope the sack is full up
I'm fuckin&apos;, no, I&apos;m fucked up
Spend it when I get that
I ain&apos;t tryna keep you
Can&apos;t keep up a conversation
Can&apos;t nobody reach you
Why your eyes well up?
Did you call me from a séance?
You are from my past life
Hope you&apos;re doin&apos; well, bruh
I been out here head first
Always like the head first
Signal comin&apos; in and out
Hope you&apos;re doin&apos; well, bruh
Everybody needs you
Everybody needs you
Ooh, nani nani
This feel like a Quaalude
No sleep in my body
Ain&apos;t no bitch in my body, ah

          </div>
        </div>
      </div>
    </>
  )
}

export default Typetester; 