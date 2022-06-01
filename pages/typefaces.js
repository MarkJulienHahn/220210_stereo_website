import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import ProtestTypeface from "../components/ProtestTypeface";
import GialloTypeface from "../components/GialloTypeface";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cartbutton from "../components/Cartbutton";

import Styles from "../styles/Typefaces.module.css";

const Checkout = dynamic(() => import("../components/Checkout/Checkout"));
const Trials = dynamic(() => import("../components/Trials"));

const Typefaces = ({
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
  refreshCart,
}) => {
  const { ref: gialloRef, inView: gialloIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: protestRef, inView: protestIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: gialloMonoRef, inView: gialloMonoIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: protestMonoRef, inView: protestMonoIsVisible } = useInView({
    threshold: 0.5,
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [showTrials, setShowTrials] = useState(false);
  const location = useRouter();

  const hide = {
    display: "none",
  };

  const show = {
    display: "auto",
  };

  return (
    <main className={Styles.AppInner}>
      <Head>
        <title>Stereo Typefaces&#x2122; </title>
        <meta name="keywords" content="web" />
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
          refreshCart={refreshCart}
        />
      )}

      {showTrials && <Trials setShowTrials={setShowTrials} />}

      <div className="buttonsLeftWrapper">
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} />
          </a>
        </Link>

        <Button lable={"Typefaces"} subclass={"quaternary"} />

        <div
          className={`${Styles.button} ${
            protestIsVisible ? Styles.buttonShow : ""
          }  `}
        >
          <Link href="/typefaces/protest-grotesk-text" scroll={false}>
            <a>
              <Button lable={"Protest Grotesk"} subclass={"tertiary"} />
            </a>
          </Link>
        </div>

        <div
          className={`${Styles.button} ${
            gialloIsVisible ? Styles.buttonShow : ""
          }  `}
        >
          <Link href="/typefaces/protest-grotesk-text" scroll={false}>
            <a>
              <Button lable={"Giallo Roman"} subclass={"tertiary"} />
            </a>
          </Link>
        </div>

        <div
          className={`${Styles.button} ${
            protestMonoIsVisible ? Styles.buttonShow : ""
          }  `}
        >
          <Link href="/typefaces/protest-grotesk-text" scroll={false}>
            <a>
              <Button lable={"Protest Grotesk Mono"} subclass={"tertiary"} />
            </a>
          </Link>
        </div>

        <div
          className={`${Styles.button} ${
            gialloMonoIsVisible ? Styles.buttonShow : ""
          }  `}
        >
          <Link href="/typefaces/protest-grotesk-text" scroll={false}>
            <a>
              <Button lable={"Giallo Mono"} subclass={"tertiary"} />
            </a>
          </Link>
        </div>
      </div>

      <div className="buttonsRightWrapper">
        <Button
          lable={"Trials"}
          subclass={"tertiary"}
          onClick={() => setShowTrials(true)}
        />
        <Button
          lable={"Buy"}
          subclass={"primary"}
          onClick={cart.line_items ? () => setShowCheckout(true) : () => {}}
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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div ref={protestRef}>
            <ProtestTypeface
              fontFamily="Protest"
              lable="Protest Grotesk"
              content={[
                "[ Tone ] Balance* MONO 102KHz 230MHz Kanal ",
                'Model №507 (Source) AC475 ⇆Emergency',
                '↱Pagina LP1 EN 49:2001+A⁷⁴ ¶Mail {Narrow} REAL',
                'Ŋeo: Wilson () { 475‰"FLARED" ↗nexus Inserg',
                "Inspired by Ⅷ {Abloh’s} Original ⑨Meteor Shower ",
              ]}
            />
          </div>

          <div ref={gialloRef}>
            <GialloTypeface
              fontFamily="Giallo"
              lable="Giallo Roman"
              content={[
                "[ Tone ] Balance* MONO 102KHz 230MHz Kanal ",
                'Model №507 (Source) AC475 ⇆Emergency',
                '↱Pagina LP1 EN 49:2001+A⁷⁴ ¶Mail {Narrow} REAL',
                'Ŋeo: Wilson () { 475‰"FLARED" ↗nexus Inserg',
                "Inspired by Ⅷ {Abloh’s} Original ⑨Meteor Shower ",
              ]}
            />
          </div>

          <div ref={protestMonoRef}>
            <ProtestTypeface
              fontFamily="Protest"
              lable="Protest Grotesk"
              content={[
                "[ Mono ] Terpene* UNII 68,9°F 12,23°C (about 7°K) ",
                '<MyComponent somProp= "something" />',
                "specializzandosi soprattutto",
                "Ŋeo: function () {",
                "Inspired by Virgil Abloh’s original “Swiss” and “Meteor Shower” ",
              ]}
            />
          </div>

          <div ref={gialloMonoRef}>
            <ProtestTypeface
              fontFamily="Giallo"
              lable="Giallo Roman"
              content={[
                "[ Mono ] Terpene* UNII 68,9°F 12,23°C (about 7°K) ",
                '<MyComponent somProp= "something" />',
                'var myArray = ["something"]',
                "getDefaultProps: function () {",
                "Inspired by Virgil Abloh’s original “Swiss” and “Meteor Shower” ",
              ]}
            />
          </div>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Typefaces;
