import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "../components/Footer";
import Button from "../components/Button";
import MouseButton from "../components/MouseButton";

const Checkout = dynamic(() => import("../components/Checkout/Checkout"));
const Trials = dynamic(() => import("../components/Trials"));

const About = ({
  cart,
  showCheckout,
  setShowCheckout,
  products,
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
  dark,
}) => {
  const [buttonContent, setButtonContent] = useState(null);

  const location = useRouter();

  return (
    <>
      <Head>
        <title>About | Stereo Typefaces®</title>
      </Head>

      <MouseButton lable={buttonContent} />

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

      <AnimatePresence exitBeforeEnter>
        <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button lable={"About"} subclass={"quaternaryMuted"} />
        </div>

        <div className="buttonsRightWrapper">
          {/* <div
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
          </div> */}
          <Button
            lable={darkMode ? "Light" : "Dark"}
            subclass={!darkMode ? "secondary" : "quaternary"}
            onClick={() => setDarkMode(!darkMode)}
          />
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
          <main className={"infoWrapper"} style={darkMode ? dark : {}}>
            <div className={"infoText"}>
              <p>
                <span className="infoVar">
                  <span className="infoHeader">STEREO</span>{" "}
                  <span className="infoSubheader">Typefaces®</span>
                </span>{" "}
                is a type design practice offering{" "}
                <span className="infoVar1">
                  retail typefaces, custom fonts and typography-related services
                </span>
                . Inspired by modern-day culture, as well as traditional graphic design, we produce high quality
                typefaces with designers’ demands in mind. From local designers to international agencies we are happy work on all sorts of typography-related tasks and support designers all over the world.
              </p>
            </div>

            <div className={"infoText"}>
              <p>
                Besides our <span className="infoVar0">retail shop</span>, we
                also work on{" "}
                <span className="infoVar2">client-commissions</span>. This is
                what services we have to offer:
                <span
                  style={{
                    fontFamily: "Skyline",
                    fontVariationSettings: `"wdth" 800`,
                  }}
                ></span>
                <br />
                <br />
                <span>
                  —&emsp;Custom typefaces
                  <br />
                </span>
                <span>
                  —&emsp;Creative direction
                  <br />
                </span>
                <span>
                  —&emsp;Typographic Animations
                  <br />
                </span>
                <span>
                  —&emsp;(Typographic) logo design
                  <br />
                </span>
                <span>
                  —&emsp;Typographic development
                  <br />
                </span>
                <span>
                  —&emsp;Workshops and lectures
                  <br />
                </span>
              </p>
            </div>

            <div className={"infoText"}>
              <p>
                Want to work with us of have a question about one of our
                products or services? Feel free to write us an email to: &ensp;
                <span className="infoVar3">
                  <a href="mailto:info@stereotypefaces.com">
                    info@stereotypefaces.com
                  </a>
                </span>
                <br />
                <br />
                Or you can give us a call and talk to us personally. We are
                available from Monday — Friday from 9.00am — 6.00pm (CEST):
                &ensp;
                <span className="infoVar3">
                  +49&nbsp;152&nbsp;03&nbsp;56&nbsp;93&nbsp;05
                </span>
                <br />
                <br />
              </p>
            </div>

            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default About;
