import React, {useState} from 'react';
import { Slider } from '@material-ui/core';

import styles from '../styles/Glyphchart.module.css'
import Glyphchartletter from './Glyphchartletter'


function Glyphchart( props ) {
    const [ glyph, setGlyph] = useState('g');
    const [wght, updateWght] = useState(100);
    const [ital, updateItal] = useState(0);
    const [styleset, updateStyleset] = useState('normal');

    

const glyphStyle = {
    fontFamily: props.fontFamily,
    fontVariationSettings: `'wght' 100, 'wdth' ${props.fontWidth}, 'ital' 0`
    }

const glyphDisplay = {
    fontFeatureSettings: `${styleset}`,
    fontVariationSettings: `'wght' ${wght}, 'wdth' ${props.fontWidth}, 'ital' ${ital}`
}    

function changeWght(e,wght) {
    updateWght(prevValue => wght)
    }  

function changeItal(e,ital) {
    updateItal(prevValue => ital)
    }  

function changeStyleset(styleset) {
    updateStyleset(prevValue => styleset), console.log(styleset)
    }     
    

    return (
        <div className={styles.glyphchartWrapper} style={glyphStyle}>

        <div className={styles.glyphchartDisplayWrapper}>
            <div className={styles.slider}>
                <div className={styles.sliderWrapper}>
                    <p>&#8594;  Weight</p>
                    <Slider
                        className={styles.slider}
                        min={40}
                        max={150}
                        step={0.1}
                        defaultValue={100}
                        onChange={changeWght}
                        />
                </div>    
                <div className={styles.sliderWrapper}>
                    <p>&#8594;  Italic</p>
                    <Slider
                        className={styles.slider}
                        min={0}
                        max={100}
                        step={0.1}
                        defaultValue={0}
                        onChange={changeItal}
                        />   
                </div>        
            </div>
            <div className={styles.glyphchartDisplay} style={glyphDisplay}>{glyph}</div>
        </div>
        <div className={styles.glyphchartTable}>
            <p className={styles.glyphchartHeading}>&#8594;  Uppercase</p>
            <div className={styles.glyphchartLetterWrapper}>
                <Glyphchartletter 
                    lable={"A"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"B"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"C"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"D"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"E"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"F"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"G"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"H"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"I"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"J"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"K"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"L"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"M"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"N"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"O"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"P"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Q"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"R"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"S"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"T"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"U"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"V"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"W"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"X"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Y"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Z"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
            </div>     
            <p className={styles.glyphchartHeading}>&#8594;  Lowercase</p>
            <div className={styles.glyphchartLetterWrapper}  onMouseEnter={() => changeStyleset('normal')}>
                <Glyphchartletter 
                    lable={"a"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"b"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"c"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"d"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"e"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"f"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"g"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"h"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"i"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"j"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"k"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"l"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"m"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"n"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"o"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"p"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"q"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"r"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"s"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"t"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"u"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"v"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"w"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"x"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"y"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"z"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
            </div>   
            <p className={styles.glyphchartHeading}>&#8594;  Latin Extended Uppercase </p>
            <div className={styles.glyphchartLetterWrapper}>
                <Glyphchartletter 
                    lable={"Á"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Ă"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Ắ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Ằ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>   
                <Glyphchartletter 
                    lable={"Ẵ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Ă"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Â"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Ấ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>                   
                <Glyphchartletter 
                    lable={"Ầ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ẫ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ä"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"À"}
                    changeGlyph={glyph => setGlyph(glyph)}/>     
                <Glyphchartletter 
                    lable={"Ā"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ą"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Å"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ã"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Æ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ć"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Č"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ç"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ċ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ð"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ď"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Đ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"É"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ě"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ê"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ế"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ề"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ễ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ë"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ė"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"È"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ē"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ę"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ẽ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ğ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ģ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ġ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Ħ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Í"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Î"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ï"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"İ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ì"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ī"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Į"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ĩ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ķ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ĺ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ľ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ļ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ł"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Ń"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ň"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ņ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ŋ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ñ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ó"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ô"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Ố"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ồ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ỗ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ö"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ò"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ő"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ō"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Ø"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Õ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Œ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Þ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ŕ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ř"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ŗ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>   
                <Glyphchartletter 
                    lable={"Ś"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Š"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Ş"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ș"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ẞ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ŧ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ť"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ţ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ț"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Ú"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Û"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ü"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ù"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ű"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ū"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ų"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ů"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ũ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ẃ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ŵ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"Ẅ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ẁ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ý"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"Ŷ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ÿ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ỳ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ỹ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ź"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ž"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"Ż"}
                    changeGlyph={glyph => setGlyph(glyph)}/>              
            </div>  
            <p className={styles.glyphchartHeading}>&#8594;  Latin Extended Lowercase </p>
            <div className={styles.glyphchartLetterWrapper} onMouseEnter={() => changeStyleset('normal')}>
                <Glyphchartletter 
                    lable={"á"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"ă"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"ắ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"ằ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>   
                <Glyphchartletter 
                    lable={"ẵ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"â"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"ấ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"ầ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>                   
                <Glyphchartletter 
                    lable={"ẫ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ä"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"à"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ā"}
                    changeGlyph={glyph => setGlyph(glyph)}/>     
                <Glyphchartletter 
                    lable={"ą"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"å"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ã"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"æ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ć"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"č"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ç"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ċ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ð"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ď"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"đ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"é"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ě"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ê"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ế"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ề"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ễ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ë"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ė"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"è"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"ē"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ę"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ẽ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ğ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ģ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ġ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ħ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"ı"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"í"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"î"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ï"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ì"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ī"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"į"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"ĩ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ķ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ĺ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ľ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ļ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ł"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ń"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"ň"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ņ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ŋ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ñ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ó"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ô"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ố"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"ồ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ỗ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ö"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ò"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ő"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ō"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ø"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"õ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"œ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"þ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ŕ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ř"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ŗ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ś"}
                    changeGlyph={glyph => setGlyph(glyph)}/>   
                <Glyphchartletter 
                    lable={"š"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ş"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"ș"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ß"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ŧ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ť"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ţ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ț"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ú"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"û"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ü"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ù"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ű"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ū"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ų"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ů"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ũ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ẃ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ŵ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ẅ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>          
                <Glyphchartletter 
                    lable={"ẁ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ý"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ŷ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"ÿ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ỳ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ỹ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ź"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ž"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"ż"}
                    changeGlyph={glyph => setGlyph(glyph)}/>               
            </div>                     
            <p className={styles.glyphchartHeading}>&#8594;  Stylistic Set 01</p>
            <div className={styles.glyphchartLetterWrapper} onMouseEnter={() => changeStyleset('"ss01"')}>
                <Glyphchartletter 
                    lable={"a"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>
                <Glyphchartletter 
                    lable={"á"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>
                <Glyphchartletter 
                    lable={"ă"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>
                <Glyphchartletter 
                    lable={"ắ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>    
                <Glyphchartletter 
                    lable={"ằ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>
                <Glyphchartletter 
                    lable={"ẵ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>    
                <Glyphchartletter 
                    lable={"â"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/> 
                <Glyphchartletter 
                    lable={"ấ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/> 
                <Glyphchartletter 
                    lable={"ầ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/> 
                <Glyphchartletter 
                    lable={"ẫ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>     
                <Glyphchartletter 
                    lable={"ä"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>
                <Glyphchartletter 
                    lable={"à"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>
                <Glyphchartletter 
                    lable={"ā"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>
                <Glyphchartletter 
                    lable={"ą"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>    
                <Glyphchartletter 
                    lable={"å"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/> 
                <Glyphchartletter 
                    lable={"ã"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>  
                <Glyphchartletter 
                    lable={"ª"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss01"}/>                             
            </div>  
            <p className={styles.glyphchartHeading}>&#8594;  Stylistic Set 02</p>
            <div className={styles.glyphchartLetterWrapper}  onMouseEnter={() => changeStyleset('"ss02"')}>
                <Glyphchartletter 
                    lable={"g"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss02"}/>
                <Glyphchartletter 
                    lable={"ğ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss02"}/>
                <Glyphchartletter 
                    lable={"ģ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss02"}/>
                <Glyphchartletter 
                    lable={"ġ"}
                    changeGlyph={glyph => setGlyph(glyph)}
                    ss={"ss02"}/>    
            </div> 
            <p className={styles.glyphchartHeading}>&#8594;  Figures</p>
            <div className={styles.glyphchartLetterWrapper}>
                <Glyphchartletter 
                    lable={"0"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"1"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"2"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"3"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"4"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"5"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"6"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"7"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"8"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"9"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={'❶'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❷'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❸'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❹'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❺'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❻'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❼'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❽'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'❾'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'①'}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={'②'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'③'}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={'④'}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={'⑤'}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={'⑥'}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={'⑦'}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={'⑧'}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={'⑨'}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"₀"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₁"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₂"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₃"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₄"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₅"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₆"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₇"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₈"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"₉"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"⁰"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"¹"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"²"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"³"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⁴"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⁵"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⁶"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⁷"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⁸"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⁹"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"½"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⅓"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"¼"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"¾"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⅕"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⅛"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⅜"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⅝"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⅞"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅰ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅱ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅲ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅳ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅴ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅵ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅶ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅷ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅸ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅹ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅼ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅽ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅾ"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"Ⅿ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>                                                                                                             
            </div>          
            <p className={styles.glyphchartHeading}>&#8594;  Punctuation</p>
            <div className={styles.glyphchartLetterWrapper}>
                <Glyphchartletter 
                    lable={"."}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={","}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={":"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={";"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"…"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"!"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¡"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"?"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¿"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"·"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"•"}
                    changeGlyph={glyph => setGlyph(glyph)}/>                    
                <Glyphchartletter 
                    lable={"*"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"⁂"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
                <Glyphchartletter 
                    lable={"⁑"}
                    changeGlyph={glyph => setGlyph(glyph)}/>                                        
                <Glyphchartletter 
                    lable={"#"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"/"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={`(`}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={")"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"{"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"}"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"["}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"]"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"-"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"–"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"—"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"_"}
                    changeGlyph={glyph => setGlyph(glyph)}/>   
                <Glyphchartletter 
                    lable={"/"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={`‚`}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"„"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"“"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"«"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"»"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"‹"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"›"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={`"`}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
            </div>          
            <p className={styles.glyphchartHeading}>&#8594;  Currency</p>
            <div className={styles.glyphchartLetterWrapper}>
                <Glyphchartletter 
                    lable={"€"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"₿"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¢"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¤"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"$"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"ƒ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"£"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¥"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
            </div>          
            <p className={styles.glyphchartHeading}>&#8594;  Symbols</p>
            <div className={styles.glyphchartLetterWrapper}>
                <Glyphchartletter 
                    lable={"+"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"−"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"×"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"÷"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"="}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"≠"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={">"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"<"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"≥"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"≤"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"±"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"≈"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"~"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¬"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"^"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"∞"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"∫"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"Ω"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"∆"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"∏"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"∑"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"√"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"∂"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"µ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"%"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"‰"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"●"}
                    changeGlyph={glyph => setGlyph(glyph)}/>    
                <Glyphchartletter 
                    lable={"○"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"◊"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"@"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"&"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¶"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"§"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"©"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"®"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"™"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"°"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"|"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"¦"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"†"}
                    changeGlyph={glyph => setGlyph(glyph)}/>  
                <Glyphchartletter 
                    lable={"‡"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"ℓ"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"№"}
                    changeGlyph={glyph => setGlyph(glyph)}/> 
            </div>                     
            <p className={styles.glyphchartHeading}>&#8594;  Arrows</p>
            <div className={styles.glyphchartLetterWrapper}>
                <Glyphchartletter 
                    lable={"↑"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↗"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"→"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↘"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↓"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↙"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"←"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↖"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↩"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↰"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↱"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↲"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↳"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"↴"}
                    changeGlyph={glyph => setGlyph(glyph)}/>
                <Glyphchartletter 
                    lable={"⇆"}
                    changeGlyph={glyph => setGlyph(glyph)}/>     
            </div>          
     

        </div>

    </div>
  )
};

export default Glyphchart;
