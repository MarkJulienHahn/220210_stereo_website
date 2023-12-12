import { useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import Button from "../components/Button";

import Trialpage from "../components/Trialpage";

const Trials = () => {
  const [showTrials, setShowTrials] = useState(false);

  const location = useRouter();

  return (
    <div>
      <Head>
        <title>Trials | Stereo Typefaces® </title>
        <meta
          name="description"
          content="Here you can download free trial versions of all our typefaces, so you can test high quality typography without having to purchase in advance."
        />
      </Head>

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Trials"} subclass={"quaternaryMuted"} />
      </div>

      <div className="buttonsRightWrapper" scroll={false}>
        <Button
          onClick={() => setShowTrials(!showTrials)}
          lable={"Get your Trials"}
          subclass={"primary"}
        />
      </div>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <Trialpage showTrials={showTrials} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Trials;
