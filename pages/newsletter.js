import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../components/Button";
import { useRouter } from "next/router";

import NewsletterSignupForm from "../components/NewsletterSignupForm";

const Newsletter = () => {
  const location = useRouter();
  return (
    <div>
      <Head>
        <title>Newsletter | Stereo Typefaces® </title>
      </Head>

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Newsletter"} subclass={"quaternaryMuted"} />
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
          <div className="betaAccessDownload">
            <div className="premiumRight">
              <NewsletterSignupForm />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Newsletter;
