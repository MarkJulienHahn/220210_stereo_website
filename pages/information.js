import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Styles from '../styles/Information.module.css'
import { AnimatePresence, motion } from 'framer-motion'

import Infocontainer from '../components/Infocontainer'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Information = () => {

  const location = useRouter();

  return (
    <>
    <Head>
        <title>Stereo Typefaces&#x2122; </title>
    </Head>

    <AnimatePresence exitBeforeEnter>

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
                lable={"Information"}
                subclass={"quaternary"} 
            />    
        </div> 

        <div className="buttonsRightWrapper">
            <Button 
                lable={"Cart (0)"}
                subclass={"tertiary"} 
            />    
        </div> 

        <motion.div 
            location={location} key={location.pathname}
            initial={{ y: 300, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}>
            <main className={Styles.infoWrapper}>
                <Infocontainer 
                head={"Information"}
                body={"Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "}
                big={""}/>
                <Infocontainer 
                head={"Contact"}
                body={"Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "}
                big={"true"}/>
                <Infocontainer 
                head={"Variable Font Format"}
                body={"Our fonts are priced based solely on the company size of the font’s license owner. Not the number of people working with the font files.Company size is the only number you need to know about your client in order to calculate the price for our fonts. You don’t have to gather any information about their web traffic or app downloads."}
                big={"false"}/>
                <Infocontainer 
                head={"Trials"}
                body={"Our fonts are priced based solely on the company size of the font’s license owner. Not the number of people working with the font files.Company size is the only number you need to know about your client in order to calculate the price for our fonts. You don’t have to gather any information about their web traffic or app downloads."}
                big={"false"}/>
                <Infocontainer 
                head={"Discounts"}
                body={"Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "}
                big={"false"}/>                
                <Infocontainer 
                head={"Licensing"}
                body={"Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "}
                big={"false"}/>
                <Infocontainer 
                head={"Collaborations"}
                body={"Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "}
                big={"false"}/>
                <Infocontainer 
                head={"Contanct"}
                body={<><a href="mailto:fonts@stereotypefaces.com">fonts@stereotypefaces.com</a><br/>+49 1520 3569305</>}
                big={null}/>
            <Footer />
        </main>
    </motion.div>
</AnimatePresence>

    </>
    )
}   

export default Information;
