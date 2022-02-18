import React, { useState, useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Variable = () => {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
          element.querySelector("#gsap-logo"),
          {
            opacity: 1,
            scale: 0.2,
            y: -20
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element.querySelector(".first"),
              start: "top center",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }, []);

    return (

        <div className="lettersVariableWrapper" ref={ref}>
            <div className="lettersVariable" id="gsap-logo">
            gA
            </div>
        </div>
    )
}

export default Variable


    // const [clientWindowHeight, setClientWindowHeight] = useState("");

    // const handleScroll = () => {
    // setClientWindowHeight(window.scrollY);
    // };




    // useEffect(() => {
    // window.addEventListener("scroll", handleScroll); 
    // return () => window.removeEventListener("scroll", handleScroll);    
    // });

    // const [wght, setWght] = useState(150);

    // useEffect(() => {
    //     let wghtVar = clientWindowHeight * 0.0004;
    //     wghtVar = Math.pow(wghtVar, wghtVar)/10000
    //     setWght(wghtVar)
    // })

    // console.log(wght)

    // const style = {
    //     fontVariationSettings: `'wght' ${wght}, 'ital' ${wght}`,
    // }



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