import React, {useState} from 'react';
import styles from '../styles/Glyphchart.module.css'


function Glyphchartletter(props) {

    const glyphstyle = {
        fontFeatureSettings: `"${props.ss}"`
    }

  return (
    <>
        <div className={styles.glyphchartLetter} onMouseEnter={() => props.changeGlyph(props.lable)} style={glyphstyle}>
            {props.lable}
        </div>
    </>
  )
};

export default Glyphchartletter;