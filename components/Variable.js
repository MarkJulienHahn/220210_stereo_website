import React, { useState, useEffect, useRef } from "react";


const Variable = ( props ) => {


    const testRef = useRef(null);

    const [scrollPosition, setScrollPosition] = useState("");
    const [refPosition, setRefPosition] = useState(0);


    const [variableFontValue, setVariableFontValue] = useState(40);



    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            }
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);    
    })

    useEffect(() => {
        setRefPosition(testRef.current.offsetTop)
        let wghtVar = Math.floor((refPosition - scrollPosition) * -0.1);
        (wghtVar >= 40 && wghtVar <= 150 ? setVariableFontValue(wghtVar) : "")
    })


    const style = {
        fontVariationSettings: `'wght' ${variableFontValue}`,
    }


    return (

        <div className="lettersVariableWrapper" ref={testRef} >

            <div className="lettersVariable" style={style}>
                <p className="letterIndicator">&#8594; Weight: {variableFontValue}</p>
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

