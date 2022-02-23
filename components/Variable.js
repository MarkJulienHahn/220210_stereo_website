import React, { useState, useEffect, useRef } from "react";


const Variable = ( props ) => {


    const testRef = useRef(null);

    const [scrollPosition, setScrollPosition] = useState("");
    const [refPosition, setRefPosition] = useState(0);


    const [vfWeightValue, setVfWeightValue] = useState(40);
    const [vfItalValue, setVfItalValue] = useState(0);



    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            }
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);    
    })

    useEffect(() => {
        setRefPosition(testRef.current.offsetTop)
        let vfVar = Math.floor((refPosition - scrollPosition) * -0.1);
        (vfVar >= 40 && vfVar <= 150 ? setVfWeightValue(vfVar) : "");
        (vfVar >= 0 && vfVar <= 100 ? setVfItalValue(vfVar) : "")
    })


    const style = {
        fontVariationSettings: `'wght' ${vfWeightValue}, 'ital' ${vfItalValue}`,
    }


    return (

        <div className="lettersVariableWrapper" ref={testRef} >

            <div className="lettersVariable" style={style}>
                <p className="letterIndicator">&#8594; Weight: {vfWeightValue} Italic: {vfItalValue}</p>
                {props.letters}   
                <hr className="upperHeight"/>  
                <hr className="versal"/>   
                <hr className="xHeight"/>   
                <hr className="baseline"/>   
                <hr className="underShoot"/>   
      
            </div>

        </div>
    )
}

export default Variable

