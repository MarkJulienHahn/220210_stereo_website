import { AnimatePresence, motion } from 'framer-motion'
import Layout from '../components/Layout'
import Nav from '../components/nav'
import { useRouter } from 'next/router'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const location = useRouter();

  return (
<>
    <Nav /> 
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div 
                  location={location} key={location.pathname}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>

        </motion.div>
      </AnimatePresence>


    </>
  
  )
}

export default MyApp
