import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import client from "../client";

import Button from "../components/Button";
import { PortableText } from "@portabletext/react";

import { AnimatePresence, motion } from "framer-motion";

import img01 from "../public/images/stereo-typefaces_happyface.png";

const GeneralTerms = ({ dark, darkMode, setDarkMode, generalTerms }) => {
  const location = useRouter();
  const data = generalTerms[0];

  const dateFormattedDE = (date) =>
    new Date(date).toLocaleString("de-de", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const dateFormattedEN = (date) =>
    new Date(date).toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <main className="licensingMain" style={darkMode ? dark : {}}>
      <Head>
        <title>General Terms | Stereo Typefaces®</title>
        <meta name="keywords" content="web" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button
            lable={"General Terms and Conditions"}
            subclass={"quaternaryMuted"}
          />
        </div>

        <div className="buttonsRightWrapper">
          <Button
            lable={darkMode ? "Light" : "Dark"}
            subclass={!darkMode ? "secondary" : "quaternary"}
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>

        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="licensingWrapper">
            <div className="licensingColumn">
              <h1>
                GTC Version {data.version} – <br />
                {dateFormattedEN(data.date)}
              </h1>

              <PortableText value={data.textEnglish} />

              <h1>
                Version {data.version} – Berlin
                <br /> {dateFormattedEN(data.date)}
              </h1>
            </div>

            <div className="licensingColumn">
              <h1>
                GTC Version {data.version} – <br />
                {dateFormattedDE(data.date)}
              </h1>

              <PortableText value={data.textGerman} />

              <h1>
                Version {data.version} – Berlin
                <br />
                {dateFormattedDE(data.date)}
              </h1>
            </div>

            <p className="logoSmallWrapper">
              <Image src={img01} width={200} height={200} />
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default GeneralTerms;

export async function getServerSideProps() {
  const generalTerms = await client.fetch(`
  *[_type == "generalTerms"]`);

  return {
    props: {
      generalTerms,
    },
  };
}
