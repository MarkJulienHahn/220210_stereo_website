import React, { useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion";

import One from './storefront/one';

export default function Home( router ) {

  const [showTwo, setShowTwo] = useState(false);
  const location = useRouter();

  return (
    <>
      <Head>
        <title>Stereo Typefaces</title>
        <meta name='keywords' content='web' />
      </Head>

      <div class="storefrontWrapper">
        <Link  href="/storefront/two">
            <div class="nextButton"></div>
        </Link>
        <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div 
                  location={location} key={location.pathname}
                  initial={{ opacity: 0 }}
                  animate={{ y: 0,opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  >
              <One />
            </motion.div>
        </AnimatePresence>

      </div>
    </>
  )
}
