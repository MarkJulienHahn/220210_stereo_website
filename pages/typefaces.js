import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import TypefacePreview from "../components/TypefacePreview";
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
        <title>Typefaces | Stereo Typefaces&#x2122;</title>
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

        <Button lable={"Typefaces"} subclass={"quaternaryMuted"} />

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
          <Link href="/typefaces/protest-grotesk-text" scroll={false}>
            <div ref={protestRef}>
              <TypefacePreview
                key="001"
                fontFamily="Protest"
                lable="Protest Grotesk"
                weights={[
                  ["Thin ", 40, 0],
                  ["Italic / ", 40, 100],
                  ["Light ", 70, 0],
                  ["Italic / ", 70, 100],
                  ["Regular ", 100, 0],
                  ["Italic / ", 100, 100],
                  ["Book ", 130, 0],
                  ["Italic / ", 130, 100],
                  ["Medium ", 160, 0],
                  ["Italic / ", 160, 100],
                  ["Bold ", 190, 0],
                  ["Italic / ", 190, 100],
                  ["Heavy ", 220, 0],
                  ["Italic / ", 220, 100],
                  ["Black ", 250, 0],
                  ["Italic", 250, 100],
                ]}
                content={[
                  "[ Tone ] Balance* MONO 102KHz 230MHz Kanal ",
                  "Model №507 (Source) AC475 ⇆Emergency",
                  "↱Pagina LP1 EN 49:2001+A⁷⁴ ¶Mail {Narrow} REAL",
                  'Ŋeo: Wilson () { 475‰"FLARED" ↗nexus Inserg',
                  "Inspired by Ⅷ {Abloh’s} Original ⑨Meteor Shower ",
                ]}
                configuration={{
                  letterSpacing: "-0.7vw",
                }}
                default={[160, 0]}
              />
            </div>
          </Link>

          <Link href="/typefaces/protest-grotesk-mono" scroll={false}>
            <div ref={protestMonoRef}>
              <TypefacePreview
                key="002"
                fontFamily="ProtestMono"
                lable="Protest Grotesk Mono"
                weights={[
                  ["Thin / ", 40, 0, 1],
                  ["Light / ", 70, 0, 2],
                  ["Regular / ", 100, 0, 3],
                  ["Book / ", 130, 0, 4],
                  ["Medium / ", 160, 0, 5],
                  ["Bold / ", 190, 0, 6],
                  ["Heavy / ", 220, 0, 7],
                  ["Black", 250, 0, 8]
                ]}
                content={[
                  "Graph OP—1™ [around 7°Kelvin] ",
                  "Compiled Successful in 178 ms² ",
                  "[up to 2.4 GHz] Record  KeyBoard",
                  "Filament ↲ Function 82 (Focus)",
                  "Stadelĳk’s SpezSound Color ®",
                ]}
                configuration={{
                  letterSpacing: "-0.9vw",
                }}
                default={[40, 0]}
              />
            </div>
          </Link>

          <Link href="/typefaces/giallo-roman" scroll={false}>
            <div ref={gialloRef}>
              <TypefacePreview
                key="001"
                fontFamily="Giallo"
                lable="Giallo Roman"
                weights={[
                  ["Light / ", 100, 0],
                  ["Regular / ", 200, 0],
                  ["Book / ", 300, 0],
                  ["Medium / ", 400, 0],
                  ["Bold / ", 500, 0],
                  ["Heavy / ", 600, 0],
                  ["Black", 700, 0],
                ]}
                content={[
                  "Graph Tak* (Around 7°Kelvin) ",
                  "Compiled Successful in 178 ms ",
                  "[950 hp Modules] Sopra",
                  "Filament ↗ Function (Focus)",
                  "Stadelĳk’s CENTRAAL Color",
                ]}
                configuration={{
                  letterSpacing: "0",
                }}
                default={[300, 0]}
              />
            </div>
          </Link>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Typefaces;
