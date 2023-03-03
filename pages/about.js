import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "../components/Footer";
import Button from "../components/Button";
import Cartbutton from "../components/Cartbutton";
import MouseButton from "../components/MouseButton";

const Checkout = dynamic(() => import("../components/Checkout/Checkout"));
const Trials = dynamic(() => import("../components/Trials"));

const About = ({
  cart,
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
  const [showCheckout, setShowCheckout] = useState(false);

  const location = useRouter();

  return (
    <>
      <Head>
        <title>About | Stereo Typefaces®</title>
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
          font={"Protest"}
        />
      )}

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
                is a Berlin based type design agency and typography label that
                offers&nbsp;
                <span className="infoVar1">
                  font software for retail customers
                </span>{" "}
                as well as <span className="infoVar1">corporate typefaces</span>
                &nbsp; for specific areas of application and other typographic
                services on request. Incorporating current culture and design
                trends as well as traditional graphic design, high-quality,
                contemporary typefaces with extensive and flexible character
                sets are produced. These are adapted to the current tasks of
                designers and the needs of their customers with regard to all
                sorts of media (digital and print).
              </p>
            </div>

            <div className={"infoText"}>
              <p>
                In addition to <span className="infoVar0">retail</span> there is
                also work on&nbsp;
                <span className="infoVar2">customer request</span>. Feel free to
                get in touch for the following services:
                <span
                  style={{
                    fontFamily: "Skyline",
                    fontVariationSettings: `"wdth" 800`,
                  }}
                ></span>
                <br />
                <br />
                <span>
                  —&emsp;Custom typefaces (static and variable)
                  <br />
                </span>
                <span>
                  —&emsp;Art direction and consulting for typographic concepts
                  <br />
                </span>
                <span>
                  —&emsp;Design and redesign of logos and wordmarks
                  <br />
                </span>
                <span>
                  —&emsp;Typographic animations (2D + 3D)
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
                Questions on products / licensing / services, interests in
                collaboration or if you just want to say »hi«, send an email
                to:&ensp;
                <span className="infoVar3">
                  <a href="mailto:info@stereotypefaces.com">
                    info@stereotypefaces.com
                  </a>
                </span>
                <br />
                <br />
                For faster reply, call:&nbsp;{" "}
                <span className="infoVar3">
                  +49&nbsp;152&nbsp;03&nbsp;56&nbsp;93&nbsp;05
                </span>
                <br />
                Working hours: Monday — Friday from 10 am — 6 pm (CEST)
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
