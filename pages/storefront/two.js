import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import image02 from '../../public/images/image_02.jpeg';

import Button from '../../components/Button'
import Infobutton from '../../components/Infobutton'



const two = () => {



  return (

    <div class="storefrontWrapper">
      <Link  href="/">
          <div class="backButton"></div>
      </Link>

      <div className="buttonsLeftWrapper">
        <Link href="/projects">
          <a>
            <Button lable={"Projects"}/> 
          </a>
        </Link>

        <Link href="/projects">
          <a>        
            <Button lable={"Automat"} />  
          </a>
        </Link>

        </div> 

        <div className="buttonsRightWrapper">
            <Infobutton lable={"description"} subclass={"quaternary"} content={"Automat is a modular, grid-based variable typeface system available in three different styles. Influenced by the systematic work of Wim Crouwel and Karl Gerstner in the 1960s and 1970s as well as later digital reinterpretations in the 1990s, Automat complements them by adding the possibility to steplessly manipulate the typeface in a broad design frame. With two adjustable axes, unconsidered compositions can be generated, legibility can be dissolved and unpreditermined images can be developed. Access a free-to-use design tool, which helps generate unconventional images and aims to change the designers thought process by adding a factor of generative randomness and unpredictability to the creative approach. Automat is open-source and free to use — generate compositions in the browser application and instantly download them to your computer. Feel free to leave us feedback via Mail — Stereo Typefaces would appreciate being mentioned in the final design result."}/>
        </div> 

  <Image src={image02} placeholder="blur"/> 
</div>
  )
};

export default two;
