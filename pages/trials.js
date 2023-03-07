import { useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import Button from "../components/Button";

import ThreeDObject from "../components/ThreeDObject";

import TrialsPreviewSingle from "../components/Storefront/TrialsPreviewSingle";
import TrialsSingle from "../components/TrialsSingle";

const Trials = ({ cart, setShowCheckout, live }) => {
  const [showTrials, setShowTrials] = useState(false);
  const location = useRouter();
  const canvas = { width: "100vw", height: "100vh" };

  return (
    <div>
      <Head>
        <title>Trials | Stereo Typefaces® </title>
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

        <Button onClick={() => setShowTrials(!showTrials)} lable={"Get your Trials"} subclass={"primary"} />
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
          {" "}


            <ThreeDObject />

          {showTrials && <TrialsSingle />}
          {/* <TrialsPreviewSingle setShowTrials={setShowTrials} /> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Trials;
