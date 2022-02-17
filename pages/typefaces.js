import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion";

import ProtestTypeface from '../components/ProtestTypeface'
import GialloTypeface from '../components/GialloTypeface'
import Footer from '../components/Footer'
import Button from '../components/Button'

import Styles from '../styles/Typefaces.module.css'

const Buy = dynamic(() => import("../components/Buy"))



const Typefaces = () => {

    const { ref: gialloRef, inView: gialloIsVisible} = useInView({
        threshold: 0.5,
    });
    const { ref: protestRef, inView: protestIsVisible} = useInView({
        threshold: 0.5,
    });
    const { ref: gialloMonoRef, inView: gialloMonoIsVisible} = useInView({
        threshold: 0.5,
    });
    const { ref: protestMonoRef, inView: protestMonoIsVisible} =useInView({
        threshold: 0.5,
    });



    const [showBuy, setShowBuy] = useState(false);
    const location = useRouter();

    const hide = {
        display: 'none'
    }

    const show = {
        display: "auto",
    }


  return (
    <main className={Styles.AppInner}>
        <Head>
            <title>Stereo Typefaces&#x2122; </title>
            <meta name='keywords' content='web' />
        </Head>

        {showBuy && <Button lable={"Continue Shopping"} subclass={"closeButton"}  onClick={() => setShowBuy(false)} />}
        {showBuy && <Buy />}


        <div className="buttonsLeftWrapper" >
            <Link href="/" scroll={false}>
                <a>
                    <Button 
                        lable={"Home"} 
                    /> 
                </a>
            </Link>

            <Button 
                lable={"Typefaces"} 
                subclass={"quaternary"} 
            /> 

            <div className={`${Styles.button} ${protestIsVisible ? Styles.buttonShow : ''}  `} >
            <Link href="/typefaces/protest-grotesk-text" scroll={false}>
                <a>
                    <Button 
                        lable={'Protest Grotesk'}
                        subclass={"tertiary"}
                    /> 
                </a>
            </Link>
            </div>


            <div className={`${Styles.button} ${gialloIsVisible ? Styles.buttonShow : ''}  `} >
            <Link href="/typefaces/protest-grotesk-text" scroll={false}>
                <a>
                    <Button 
                        lable={'Giallo Roman'}
                        subclass={"tertiary"}
                    /> 
                </a>
            </Link>
            </div>

            <div className={`${Styles.button} ${protestMonoIsVisible ? Styles.buttonShow : ''}  `} >
            <Link href="/typefaces/protest-grotesk-text" scroll={false}>
                <a>
                    <Button 
                        lable={'Protest Grotesk Mono'}
                        subclass={"tertiary"}
                    /> 
                </a>
            </Link>
            </div>

            <div className={`${Styles.button} ${gialloMonoIsVisible ? Styles.buttonShow : ''}  `} >
            <Link href="/typefaces/protest-grotesk-text" scroll={false}>
                <a>
                    <Button 
                        lable={'Giallo Mono'}
                        subclass={"tertiary"}
                    /> 
                </a>
            </Link>
            </div>

        </div> 

        <div className="buttonsRightWrapper">
            <Button 
                lable={"Trials"}
            /> 
            <Button 
                lable={"Buy"} 
                subclass={"primary"} 
                onClick={() => setShowBuy(true)} 
            /> 
            <Button 
                lable={"Cart (0)"}
            />    
        </div> 
        <AnimatePresence exitBeforeEnter>
            <motion.div 
                  location={location} key={location.pathname}
                  initial={{ y: 300, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}>


                <div ref={protestRef}> 
                    <ProtestTypeface 
                        fontFamily= 'Protest'
                        lable='Protest Grotesk'
                        content={
                            ['[ Mono ] Terpene* UNII 68,9°F 12,23°C (about 7°K) ', 
                            '<MyComponent somProp= "something" />', 
                            'var myArray = ["something"]', 
                            'getDefaultProps: function () {', 
                            'Inspired by Virgil Abloh’s original “Swiss” and “Meteor Shower” ']}/>  
                </div>      

                <div ref={gialloRef}>  
                    <GialloTypeface 
                        fontFamily= 'Giallo'
                        lable='Giallo Roman'
                        content={['[ Mono ] Terpene* UNII 68,9°F 12,23°C (about 7°K) ', '<MyComponent somProp= "something" />', 'var myArray = ["something"]', 'getDefaultProps: function () {', 'Inspired by Virgil Abloh’s original “Swiss” and “Meteor Shower” ']}/>  
                </div>     
    
                <div ref={protestMonoRef}>
                    <ProtestTypeface 
                        fontFamily= 'Protest'
                        lable='Protest Grotesk'
                        content={['[ Mono ] Terpene* UNII 68,9°F 12,23°C (about 7°K) ', '<MyComponent somProp= "something" />', 'var myArray = ["something"]', 'getDefaultProps: function () {', 'Inspired by Virgil Abloh’s original “Swiss” and “Meteor Shower” ']}/>  
                </div>     
    
                 <div ref={gialloMonoRef}>
                    <ProtestTypeface 
                        fontFamily= 'Giallo'
                        lable='Giallo Roman'
                        content={['[ Mono ] Terpene* UNII 68,9°F 12,23°C (about 7°K) ', '<MyComponent somProp= "something" />', 'var myArray = ["something"]', 'getDefaultProps: function () {', 'Inspired by Virgil Abloh’s original “Swiss” and “Meteor Shower” ']}/>  
                </div>      
       

                <Footer/>
            </motion.div>   
        </AnimatePresence>

    </main>
    )
}   

export default Typefaces;
