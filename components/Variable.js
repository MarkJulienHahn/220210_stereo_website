import React, { useState, useEffect, useRef } from "react";



const Variable = () => {


    const testRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState("");

    const handleScroll = () => {
    setScrollPosition(window.scrollY );
    };

    const pos = testRef.current.offsetTop;

    useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);    
    });

    const [wght, setWght] = useState(150);

    useEffect(() => {
        let wghtVar = Math.floor((pos - scrollPosition) * -0.1);
        setWght(wghtVar)
    })

    console.log(wght);
    

    const style = {
        fontVariationSettings: `'wght' ${wght}`,
    }

    return (

        <div className="lettersVariableWrapper" ref={testRef} >

            <div className="lettersVariable" style={style}>
            <p className="letterIndicator">{wght}</p>
            gA
            </div>
        </div>
    )
}

export default Variable

