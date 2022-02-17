import React, { useState, useEffect, useRef } from "react";

const Variable = () => {

    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    };




    useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);    
    });

    const [wght, setWght] = useState(150);

    useEffect(() => {
        let wghtVar = clientWindowHeight * 0.0004;
        wghtVar = Math.pow(wghtVar, wghtVar)/10000
        setWght(wghtVar)
    })

    console.log(wght)

    const style = {
        fontVariationSettings: `'wght' ${wght}`,
    }



    // const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    // const [padding, setPadding] = useState(30);
    // const [boxShadow, setBoxShadow] = useState(0);
    
    
    // useEffect(() => {
    //   let backgroundTransparacyVar = clientWindowHeight / 600;
    
    //   if (backgroundTransparacyVar < 1) {
    //       let paddingVar = 30 - backgroundTransparacyVar * 20;
    //       let boxShadowVar = backgroundTransparacyVar * 0.1;
    //       setBackgroundTransparacy(backgroundTransparacyVar);
    //       setPadding(paddingVar);
    //       setBoxShadow(boxShadowVar);
    //   }
    // }, [clientWindowHeight]);




  return (
    <div className="lettersVariableWrapper">
        <div className="lettersVariable" style={style}>
        gA
        </div>
    </div>
  )
}

export default Variable