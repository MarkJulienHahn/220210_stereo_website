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

import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "info" });

  return {
    props: {
      info: res.items,
    },
  };
}

function isFonts(obj) {
  return obj.fields.category[0] === "Fonts";
}

function isLicensing(obj) {
  return obj.fields.category[0] === "Licensing";
}

function isStereo(obj) {
  return obj.fields.category[0] === "Stereo";
}

const Information = ({ info }) => {
  const [buttonContent, setButtonContent] = useState(null);

  const fonts = info.filter(isFonts);
  const licensing = info.filter(isLicensing);
  const stereo = info.filter(isStereo);

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

          <Button lable={"Information"} subclass={"quaternaryMuted"} />
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
          <main className={Styles.infoWrapper}>
            <h1>→ About Stereo Typefaces</h1>

            <div className={Styles.infoContainer}>
              {stereo.map((item) => (
                <div
                  key={item.sys.id}
                  onMouseEnter={() => setButtonContent("Resize")}
                  onMouseLeave={() => setButtonContent("")}
                >
                  <Infocontainer
                    head={item.fields.title}
                    body={item.fields.text}
                    big={"false"}
                  />
                </div>
              ))}
              <hr />
            </div>

            <h1>→ About our Fonts</h1>

            <div className={Styles.infoContainer}>
              {fonts.map((item) => (
                <div
                  key={item.sys.id}
                  onMouseEnter={() => setButtonContent("Resize")}
                  onMouseLeave={() => setButtonContent("")}
                >
                  <Infocontainer
                    head={item.fields.title}
                    body={item.fields.text}
                    big={"false"}
                  />
                </div>
              ))}
              <hr />
            </div>

            <h1>→ About our Licensing Model</h1>

            <div className={Styles.infoContainer}>
              {licensing.map((item) => (
                <div
                  key={item.sys.id}
                  onMouseEnter={() => setButtonContent("Resize")}
                  onMouseLeave={() => setButtonContent("")}
                >
                  <Infocontainer
                    head={item.fields.title}
                    body={item.fields.text}
                    big={"false"}
                  />
                </div>
              ))}
              <hr />
            </div>

            {/* <Infocontainer
              head={"Information"}
              body={
                "Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "
              }
              big={""}
            />
            <Infocontainer
              head={"Contact"}
              body={
                "Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "
              }
              big={"true"}
            />
            <Infocontainer
              head={"Variable Font Format"}
              body={
                "Our fonts are priced based solely on the company size of the font’s license owner. Not the number of people working with the font files.Company size is the only number you need to know about your client in order to calculate the price for our fonts. You don’t have to gather any information about their web traffic or app downloads."
              }
              big={"false"}
            />
            <Infocontainer
              head={"Trials"}
              body={
                "Our fonts are priced based solely on the company size of the font’s license owner. Not the number of people working with the font files.Company size is the only number you need to know about your client in order to calculate the price for our fonts. You don’t have to gather any information about their web traffic or app downloads."
              }
              big={"false"}
            />
            <Infocontainer
              head={"Discounts"}
              body={
                "Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "
              }
              big={"false"}
            />
            <Infocontainer
              head={"Licensing"}
              body={
                "Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "
              }
              big={"false"}
            />
            <Infocontainer
              head={"Collaborations"}
              body={
                "Stereo Typefaces TM is an online platform focusing on variable font research, generative design tools and contemporary type design. Non-digitally based in Berlin and Stuttgart, constant works on text and display typefaces for flexible usage is on the agenda. Three type families, Protest Grotesk, Giallo and Skyline, will be released for retail in the course of 2021. "
              }
              big={"false"}
            />
            <Infocontainer
              head={"Contanct"}
              body={
                <>
                  <a href="mailto:fonts@stereotypefaces.com">
                    fonts@stereotypefaces.com
                  </a>
                  <br />
                  +49 1520 3569305
                </>
              }
              big={null}
            /> */}
            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Information;
