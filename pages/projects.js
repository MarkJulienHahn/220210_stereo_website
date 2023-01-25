import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Styles from "../styles/Projects.module.css";

import Project from "../components/Project";
import AutomatTypeface from "../components/AutomatTypeface";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cartbutton from "../components/Cartbutton";

const Projects = ({
  cart,
  live,
  showCheckout,
  setShowCheckout,
  products,
  cart,
  checkoutToken,
  handleAddToCart,
  handleEmptyCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleUpdateCartPrice,
  onCaptureCheckout,
  setCart,
  handleCouponCode,
  loading,
  getLiveObject,
  live,
  getPaypalPaymentId,
  refreshCart,
  darkMode,
  setDarkMode,
  dark
}) => {
  const location = useRouter();

  return (
    <main className={Styles.AppInner} style={darkMode ? dark : {}}>
      <Head>
        <title>Projects | Stereo Typefaces&#x2122;</title>
      </Head>

      {showCheckout && (
        <Checkout
          products={products}
          cart={cart}
          live={live}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleUpdateCartPrice={handleUpdateCartPrice}
          onCaptureCheckout={onCaptureCheckout}
          handleCouponCode={handleCouponCode}
          getLiveObject={getLiveObject}
          setCart={setCart}
          setShowCheckout={setShowCheckout}
          showCheckout={showCheckout}
          loading={loading}
          checkoutToken={checkoutToken}
          getPaypalPaymentId={getPaypalPaymentId}
          refreshCart={refreshCart}
          font={"Giallo"}
        />
      )}

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Projects"} subclass={"quaternaryMuted"} />
      </div>

      <div className="buttonsRightWrapper">
        <div
          className="lightBulb"
          style={{
            fontSize: "17pt",
            paddingRight: "10px",
            cursor: "pointer",
            opacity: darkMode ? 0.5 : 1,
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          💡
        </div>
        <Cartbutton
          lable={
            cart.line_items ? `Cart [${cart.total_unique_items}]` : `Cart [0]`
          }
          subclass={"tertiary"}
          setShowCheckout={setShowCheckout}
          live={live}
          cart={cart}
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
          <Project
            header={
              "Automat is a composition-synthesizer. A modular, grid-based variable typeface system  is the basis of the application. Influenced by the systematic work of Wim Crouwel and Karl Gerstner in the 1960s and 1970s as well as later digital reinterpretations in the 1990s, Automat complements them by adding the possibility to steplessly manipulate the typeface in a broad design frame."
            }
          />

          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Projects;
