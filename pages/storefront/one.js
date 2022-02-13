import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../../components/Button'
import Infobutton from '../../components/Infobutton'

import image01 from '../../public/images/image_01.png';


const One = () => {



  return (
    <>
        <div className="buttonsLeftWrapper">
          <Button lable={"Home"} subclass={"quaternary"}/>   
          <Link href="/typefaces">
            <a>
              <Button lable={"Typefaces"}/>   
            </a>          
          </Link>

          <Link href="/typefaces/protest-grotesk-text">
            <a>
              <Button lable={"Protest Grotesk"} />
            </a>
          </Link>  
        </div> 

        <div className="buttonsRightWrapper">
            <Infobutton lable={"description"} subclass={"tertiary"} content={"Automat is a modular, grid-based variable typeface system available in three different styles. Influenced by the systematic work of Wim Crouwel and Karl Gerstner in the 1960s and 1970s as well as later digital reinterpretations in the 1990s, Automat complements them by adding the possibility to steplessly manipulate the typeface in a broad design frame. With two adjustable axes, unconsidered compositions can be generated, legibility can be dissolved and unpreditermined images can be developed. Access a free-to-use design tool, which helps generate unconventional images and aims to change the designers thought process by adding a factor of generative randomness and unpredictability to the creative approach. Automat is open-source and free to use — generate compositions in the browser application and instantly download them to your computer. Feel free to leave us feedback via Mail — Stereo Typefaces would appreciate being mentioned in the final design result."}/>
        </div> 

         <Image src={image01} placeholder="blur" priority={true}/>   
    </>
  )
};

export default One;
