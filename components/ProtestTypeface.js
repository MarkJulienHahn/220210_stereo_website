import React, { useState, } from 'react';
import Link from 'next/link';
import Styles from '../styles/Typeface.module.css'

const ProtestTypeface = ( props ) => {

const [wdth, updateWdth] = useState([150, 0]);
const [nmbr, updateNmbr] = useState(0)

function setWdth(i, j) {
    updateWdth(i, j)
}  

function setNmbr() {
    updateNmbr(prevNmbr => prevNmbr +1)
}

function setbackNmbr() {
    updateNmbr(nmbr => 0)
}


const style01 = {
    fontVariationSettings: `'wght' ${wdth[0]}, 'ital' ${wdth[1]},'wdth' 50`,
    fontFamily: `${props.fontFamily}`
}

  return (

        <section className={Styles.typefaceWrapper}>
            <Link href="/typefaces/protest-grotesk-text"  scroll={false}>
                <div className={Styles.typefaceControl}>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([150, 0])}>Protest Grotesk Black / </span> 
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([150, 100])}>Protest Grotesk Black Italic / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([133, 0])}>Protest Grotesk Bold / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([133, 100])}>Protest Grotesk Bold Italic / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([116, 0])}>Protest Grotesk Medium / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([116, 100])}>Protest Grotesk Medium Italic / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([100, 0])}>Protest Grotesk Book / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([100, 100])}>Protest Grotesk Book Italic / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([80, 0])}>Protest Grotesk Regular / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([80, 100])}>Protest Grotesk Regular Italic / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([60, 0])}>Protest Grotesk Light / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([60, 100])}>Protest Grotesk Light Italic / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([40, 0])}>Protest Grotesk Thin / </span>
                    <span className={Styles.typefaceControlButton} onMouseEnter={() => setWdth([40, 100])}>Protest Grotesk Thin Italic / </span>
                </div>
            </Link>
            

            <div className={Styles.typefaceDisplay} style={style01} onClick={nmbr < 4 ? setNmbr : setbackNmbr}>  
                <p>{props.content[nmbr]}</p>
            </div>


        </section> 
    )
};

export default ProtestTypeface;
