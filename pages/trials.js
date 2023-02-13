import { useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import Button from "../components/Button";
import TrialsPreviewSingle from "../components/Storefront/TrialsPreviewSingle";
import TrialsSingle from "../components/TrialsSingle";


const Trials = ({ cart, setShowCheckout, live }) => {
  const [showTrials, setShowTrials] = useState(false);
  const location = useRouter();
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


      <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          {showTrials && <TrialsSingle />}
          <TrialsPreviewSingle setShowTrials={setShowTrials} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Trials;
