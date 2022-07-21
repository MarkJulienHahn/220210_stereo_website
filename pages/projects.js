import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion";

import Styles from '../styles/Projects.module.css'

import Project from '../components/Project'
import AutomatTypeface from '../components/AutomatTypeface'
import Footer from '../components/Footer'
import Button from '../components/Button'





const Projects = () => {

    const location = useRouter();

    return (
        <main className={Styles.AppInner}>
            <Head>
                <title>Projects</title>
            </Head>

            <div className="buttonsLeftWrapper" scroll={false}>

                <Link href="/" scroll={false}>
                    <a>
                        <Button 
                            lable={"Home"} 
                            subclass={"tertiary"} 
                        /> 
                    </a>
                </Link>

                <Button 
                    lable={"Projects"}
                    subclass={"quaternaryMuted"} 
                />    
            </div> 

            <div className="buttonsRightWrapper">
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


                    <Project 
                        header={"Automat is a modular, grid-based variable typeface system available in three different styles. Influenced by the systematic work of Wim Crouwel and Karl Gerstner in the 1960s and 1970s as well as later digital reinterpretations in the 1990s, Automat complements them by adding the possibility to steplessly manipulate the typeface in a broad design frame."}
                    />

                    <div>
                        <AutomatTypeface 
                            fontFamily= 'AutomatSquare'
                            lable='Automat Square Concept'
                            content={['UBER', 'ÖMALLA', 'TOMPKIN', 'AMARILLO', 'BOBBY']}/>  
                    </div>       

                    <Footer />    

                </motion.div>
            </AnimatePresence>        
        </main>
        )
}   

export default Projects;
