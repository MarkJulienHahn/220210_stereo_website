import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "../styles/Information.module.css";
import { AnimatePresence, motion } from "framer-motion";

import Infocontainer from "../components/Infocontainer";
import Footer from "../components/Footer";
import Button from "../components/Button";
import MouseButton from "../components/MouseButton";

// import { createClient } from "contentful";

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "info" });

//   return {
//     props: {
//       info: res.items,
//     },
//   };
// }

// function isFonts(obj) {
//   return obj.fields.category[0] === "Fonts";
// }

// function isLicensing(obj) {
//   return obj.fields.category[0] === "Licensing";
// }

// function isStereo(obj) {
//   return obj.fields.category[0] === "Stereo";
// }

const About = ({ info }) => {
  const [buttonContent, setButtonContent] = useState(null);

  // const fonts = info.filter(isFonts);
  // const licensing = info.filter(isLicensing);
  // const stereo = info.filter(isStereo);

  const location = useRouter();

  return (
    <>
      <Head>
        <title>About | Stereo Typefaces&#x2122;</title>
      </Head>

      <MouseButton lable={buttonContent} />

      <AnimatePresence exitBeforeEnter>
        <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button lable={"About"} subclass={"quaternaryMuted"} />
        </div>

        <div className="buttonsRightWrapper">
          <Button lable={"Cart (0)"} subclass={"tertiary"} />
        </div>

        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <main className={"infoWrapper"}>
            <div className={"infoText"}>
              <p>
                <span className="infoVar">
                  <span className="infoHeader">STEREO</span> <span className="infoSubheader">Typefaces®</span>
                </span>{" "}
                is a type design agency offering{" "}
                <span className="infoVar1">
                  retail and bespoke typefaces, design software, research, and
                  consultancy
                </span>
                . Founded in Berlin and Stuttgart, we operate via a network of
                satellite members across the globe, oscillating between
                commercial and cultural projects of varying scales. The current
                version of the store was set-up in 2023. Something about
                variable-fonts typographic animations and our approach to
                font-design maybe. I don’t know.
              </p>
            </div>

            <div className={"infoText"}>
              <p>
                Besides our <span className="infoVar0">retail shop</span>, we
                also work on{" "}
                <span className="infoVar2">client-commissions</span>. This is
                what services we have to offer:
                <span
                  style={{
                    fontFamily: "Skyline",
                    fontVariationSettings: `"wdth" 800`,
                  }}
                ></span>
                <br />
                <br />
                <span>
                  —&emsp;Custom Typefaces
                  <br />
                </span>
                <span>
                  —&emsp;Creative direction
                  <br />
                </span>
                <span>
                  —&emsp;Digital Typographic Applications
                  <br />
                </span>
                <span>
                  —&emsp;Logo and word mark consultancy
                  <br />
                </span>
                <span>
                  —&emsp;Type design tools and plugins
                  <br />
                </span>
                <span>
                  —&emsp;Typographic Development
                  <br />
                </span>
                <span>
                  —&emsp;Workshops and lectures
                  <br />
                </span>
              </p>
            </div>

            <div className={"infoText"}>
              <p>
                Want to work with us of have a question about one of our
                products or services? Feel free to write us an email to: &ensp;
                <span className="infoVar3">
                  <a href="mailto:info@stereotypefaces.com">
                    info@stereotypefaces.com
                  </a>
                </span>
                <br />
                <br />
                Or you can give us a call and talk to us personally. We are available from Monday — Friday from 9.00am — 6.00pm (CEST): &ensp;
                <span className="infoVar3">

                    +49&nbsp;152&nbsp;03&nbsp;56&nbsp;93&nbsp;05 

                </span>
                <br />
                <br />
              </p>
            </div>

            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default About;
