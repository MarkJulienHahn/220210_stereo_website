import React, { useState, } from 'react';
import Link from 'next/link';
import Styles from '../styles/Typeface.module.css'

const GialloTypeface = ( props ) => {

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

        <section className="typefaceWrapper">

                <div className="typefaceControl">
                    <div className="typefaceInfo">
                        <p>→ 14 Styles / Price per style from 69 EUR</p>
                        <p className="typefaceCount" onClick={nmbr < 4 ? setNmbr : setbackNmbr}>[ Text {nmbr+1} of 5 ]</p>
                    </div>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([150, 0])}>Giallo Roman Black / </span> 
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([150, 100])}>Giallo Roman Black Italic / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([133, 0])}>Giallo Roman Bold / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([133, 100])}>Giallo Roman Bold Italic / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([116, 0])}>Giallo Roman Medium / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([116, 100])}>Giallo Roman Medium Italic / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([100, 0])}>Giallo Roman Book / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([100, 100])}>Giallo Roman Book Italic / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([80, 0])}>Giallo Roman Regular / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([80, 100])}>Giallo Roman Regular Italic / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([60, 0])}>Giallo Roman Light / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([60, 100])}>Giallo Roman Light Italic / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([40, 0])}>Giallo Roman Thin / </span>
                    <span className="typefaceControlButton" onMouseEnter={() => setWdth([40, 100])}>Giallo Roman Thin Italic / </span>
                </div>

            
            <Link href="/typefaces/protest-grotesk-text"  scroll={false}>
                <div className="typefaceDisplay" style={style01}>  
                    <div>{props.content[nmbr]}</div>
                </div>
            </Link>


        </section> 
    )
};

export default GialloTypeface;
