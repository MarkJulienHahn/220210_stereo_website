import Head from "next/head";
import { useRouter } from "next/router";

import Button from "../components/Button";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

const licensing = () => {

    const location = useRouter();
  return (
    <main>
      <Head>
        <title>Typefaces | Stereo Typefaces&#x2122;</title>
        <meta name="keywords" content="web" />
      </Head>

      <AnimatePresence exitBeforeEnter>

      <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button lable={"Legals / Privacy"} subclass={"quaternaryMuted"} />
        </div>

      <div className="legalsWrapper">
      <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
        
        </motion.div>
      </div>

      </AnimatePresence>
    </main>
  );
};

export default licensing;
