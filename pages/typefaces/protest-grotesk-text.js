import React, { useState} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

import image01 from '../../public/images/image_01.png';

import Typetester from '../../components/Typetester'
import Button from '../../components/Button'
import Variable from '../../components/Variable'
import Glyphchart from '../../components/Glyphchart'
import Footer from '../../components/Footer'


const Checkout = dynamic(() => import("../../components/Checkout/Checkout"))

const ProtestGroteskText = ( { products, cart, checkoutToken, handleAddToCart, handleEmptyCart, handleUpdateCartQty, handleRemoveFromCart, handleUpdateCartPrice, onCaptureCheckout, loading }) => {

  const [showCheckout, setShowCheckout] = useState(false);
  const location = useRouter();

  console.log(cart)

  return (
    <>   

        <Head>
            <title>Protest Grotesk | Stereo Typefaces&#x2122; </title>
        </Head>


        {showCheckout && <Checkout 
            products={products} 
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleUpdateCartPrice={handleUpdateCartPrice}
            onCaptureCheckout={onCaptureCheckout}
            setShowCheckout={setShowCheckout}
            showCheckout={showCheckout}
            loading={loading}
            checkoutToken={checkoutToken}   
            />}


        <div className="buttonsLeftWrapper" scroll={false}>

            <Link href="/" scroll={false}>
                <a>
                    <Button 
                        lable={"Home"} 
                        subclass={"tertiary"} 
                    /> 
                </a>
            </Link>

            <Link href="/typefaces" scroll={false}>
                <a>
                    <Button 
                        lable={"Typefaces"} 
                        subclass={"tertiary"} 
                    /> 
                </a>
            </Link>

            <Button 
                lable={"Protest Grotesk"}
                subclass={"quaternary"} 
            />    
        </div> 

        <div className="buttonsRightWrapper">
            <Button 
                lable={"Trials"}
                subclass={"tertiary"} 
            /> 
            <Button 
                lable={"Buy"} 
                subclass={"primary"}
                onClick={cart.line_items ? () => setShowCheckout(true) : () => {}} 
            /> 
            <Button 
                lable={cart.line_items ? `Cart [${cart.total_unique_items}]` : `Cart [0]`}
                subclass={"tertiary"} 
            />    
        </div> 

        <AnimatePresence exitBeforeEnter>
            <motion.div 
                  location={location} key={location.pathname}
                  initial={{ y: 300, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}>
    
                <div className="typeface-single-header">
                    <Image src={image01} placeholder="blur"/> 
                </div>

                <main className="typeface-single-inner">

                    <p>&#8594; FONT-WEIGHT OVERVIEW</p>
                    <p>Protest Grotesk is available in 7 Weights, including the according Italic figures</p>

                    <div className="typeface-single-opener">
                        <div className="fontOpener">
                            <div style={{fontVariationSettings: "'wght' 150, 'wdth' 50"}}>Protest Grotesk Black</div> 
                            <div style={{fontVariationSettings: "'wght' 150, 'wdth' 50, 'ital' 100"}}>Protest Grotesk Black Italic</div> 
                            <div style={{fontVariationSettings: "'wght' 133, 'wdth' 50, 'ital'  00"}}>Protest Grotesk Bold</div> 
                            <div style={{fontVariationSettings: "'wght' 133, 'wdth' 50, 'ital' 100"}}>Protest Grotesk Bold Italic</div> 
                            <div style={{fontVariationSettings: "'wght' 116, 'wdth' 50, 'ital'  00"}}>Protest Grotesk Medium</div> 
                            <div style={{fontVariationSettings: "'wght' 116, 'wdth' 50, 'ital' 100"}}>Protest Grotesk Medium Italic</div> 
                            <div style={{fontVariationSettings: "'wght' 100, 'wdth' 50, 'ital'  00"}}>Protest Grotesk Book</div> 
                            <div style={{fontVariationSettings: "'wght' 100, 'wdth' 50, 'ital' 100"}}>Protest Grotesk Book Italic</div>
                            <div style={{fontVariationSettings: "'wght'  80, 'wdth' 50, 'ital'  00"}}>Protest Grotesk Regular</div>
                            <div style={{fontVariationSettings: "'wght'  80, 'wdth' 50, 'ital' 100"}}>Protest Grotesk Regular Italic</div>
                            <div style={{fontVariationSettings: "'wght'  60, 'wdth' 50, 'ital'  00"}}>Protest Grotesk Light</div>
                            <div style={{fontVariationSettings: "'wght'  60, 'wdth' 50, 'ital' 100"}}>Protest Grotesk Light Italic</div>
                            <div style={{fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital'  00"}}>Protest Grotesk Thin</div>
                            <div style={{fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital' 100"}}>Protest Grotesk Thin Italic</div>
                        </div>
                    </div>



                    <p>&#8594;  INFORMATION</p>
                    <p>When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension.</p>

                    <div className="typeface-single-tester-wrap">
                        <Typetester 
                            wght={40} 
                            ital={0} 
                            name={"Protest Grotesk Thin"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={40} 
                            ital={100} 
                            name={"Protest Grotesk Thin Italic"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={60} 
                            ital={0} 
                            name={"Protest Grotesk Light"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={60} 
                            ital={100} 
                            name={"Protest Grotesk Light Italic"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={80} 
                            ital={0} 
                            name={"Protest Grotesk Regular"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={80} 
                            ital={100} 
                            name={"Protest Grotesk Regular Italic"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={100} 
                            ital={0} 
                            name={"Protest Grotesk Book"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={100} 
                            ital={100} 
                            name={"Protest Grotesk Book Italic"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={116} 
                            ital={0} 
                            name={"Protest Grotesk Medium"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={116} 
                            ital={100} 
                            name={"Protest Grotesk Medium Italic"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={133} 
                            ital={0} 
                            name={"Protest Grotesk Bold"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={133} 
                            ital={100} 
                            name={"Protest Grotesk Bold Italic"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={150} 
                            ital={0} 
                            name={"Protest Grotesk Black"} 
                            fontFamily="Protest"/>
                        <Typetester 
                            wght={150} 
                            ital={100} 
                            name={"Protest Grotesk Black Italic"} 
                            fontFamily="Protest"/>
                    </div>

                    <p>&#8594;  INFORMATION</p>
                    <p>When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension.</p>

                    <Variable 
                        letters={"Kk"}/>
                    <Variable 
                        letters={"sS"}/>
                    <Variable 
                        letters={"Bb"}/>

                    <p>&#8594;  INFORMATION</p>
                    <p>When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension.</p>


                    <Glyphchart 
                        fontFamily="Protest"
                        fontWeight={100}
                        fontWidth={50}
                    />


                    {/* <div class="features-wrapper">
                        <Features 
                            state1={"alternative"}
                            state2={"alternative"}
                            wght={100} 
                            ital={0} 
                            style="ss01"
                        />   
                        <Features 
                            state1={"g"}
                            state2={"g"}
                            wght={100} 
                            ital={0} 
                            style="ss02"
                        />    
                        <Features 
                            state1={"g"}
                            state2={"g"}
                            wght={100} 
                            ital={0} 
                            style="ss02"
                        />  
                    </div> */}

                    <Footer />

                </main>

            </motion.div>   
        </AnimatePresence>

    </>
    )
}   

export default ProtestGroteskText;
