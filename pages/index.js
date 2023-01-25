import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import TypefacePreview from "../components/TypefacePreview";
import TypefacePreviewAutomat from "../components/TypefacePreviewAutomat";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cartbutton from "../components/Cartbutton";

import Styles from "../styles/Typefaces.module.css";

const Checkout = dynamic(() => import("../components/Checkout/Checkout"));
const Trials = dynamic(() => import("../components/Trials"));

const Home = ({
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
  getPaypalPaymentId,
  darkMode, 
  setDarkMode,
  dark
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
  const { ref: automatRef, inView: automatIsVisible } = useInView({
    threshold: 0.5,
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [showTrials, setShowTrials] = useState(false);

  const location = useRouter();

  return (
    <>
    <Head>
      <title>Stereo Typefaces&#x2122;</title>
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
        getPaypalPaymentId={getPaypalPaymentId}
        refreshCart={refreshCart}
        font={"Protest"}
      />
    )}

    {showTrials && <Trials setShowTrials={setShowTrials} />}

    <div className="buttonsLeftWrapper">
      <Link href="/" scroll={false}>
        <a>
          <Button lable={"Home"}subclass={"quaternaryMuted"} />
        </a>
      </Link>

      {/* <Button lable={"Typefaces"} subclass={"quaternaryMuted"} /> */}

      <div
        className={`${Styles.button} ${
          protestIsVisible ? Styles.buttonShow : ""
        }  `}
      >
        <Link href="/typefaces/protest-grotesk" scroll={false}>
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
        <Link href="/typefaces/protest-grotesk" scroll={false}>
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
        <Link href="/typefaces/protest-grotesk" scroll={false}>
          <a>
            <Button lable={"Protest Mono"} subclass={"tertiary"} />
          </a>
        </Link>
      </div>

      <div
        className={`${Styles.button} ${
          gialloMonoIsVisible ? Styles.buttonShow : ""
        }  `}
      >
        <Link href="/typefaces/protest-grotesk" scroll={false}>
          <a>
            <Button lable={"Giallo Mono"} subclass={"tertiary"} />
          </a>
        </Link>
      </div>

      <div
          className={`${Styles.button} ${
            automatIsVisible ? Styles.buttonShow : ""
          }  `}
        >
            <a>
              <Button lable={"Automat"} subclass={"quaternaryMuted"} />
            </a>
        </div>

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
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 3, ease: [0.19, 1, 0.22, 1] }}
      >
        {" "}
        <main className={Styles.AppInner} style={darkMode ? dark : {}}>
          <div ref={protestRef} id="protest-grotesk">
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
                <>
                  [ Tone ] Balance*
                  <br />
                  MONO 102KHz
                  <br />
                  230MHz Kanal
                </>,
                <>
                  Model №507 <br />
                  (Source) AC475
                  <br /> ⇆Emergency
                </>,
                <>
                  ↱Pagina LP1 <br />
                  EN 49:2001+A⁷⁴
                  <br /> ¶Mail &#123;Narrow&#125;
                </>,
                <>
                  Ŋeo: Wilson () <br /> 475‰&quot;FLARED&quot;
                  <br /> ↗nexus Inserg
                </>,
                <>
                  Inspired by Ⅷ <br /> &#123;Abloh’s&#125; Original
                  <br /> ⑨Meteor Shower{" "}
                </>,
              ]}
              configuration={{
                letterSpacing: "-0.7vw",
              }}
              default={[160, 0]}
              slug={"protest-grotesk"}
            />
          </div>


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
                  ["Black", 250, 0, 8],
                ]}
                content={[
                  <>
                    Graph OP—1™
                    <br /> [around
                    <br /> 7°Kelvin]
                  </>,
                  <>
                    Compiled
                    <br /> Successful
                    <br /> in 178 ms²
                  </>,
                  <>
                    [up to 2.4
                    <br /> GHz] Record
                    <br /> KeyBoard
                  </>,
                  <>
                    Filament ↲<br /> Function 82
                    <br /> (Focus)
                  </>,
                  <>
                    Stadelĳk’s
                    <br /> SpezSound
                    <br /> Color ®
                  </>,
                ]}
                configuration={{
                  letterSpacing: "-0.9vw",
                }}
                default={[40, 0]}
                slug={"protest-grotesk-mono"}
              />
            </div>



            <div ref={gialloRef} id="giallo-roman">
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
                  <>
                    Graph OP—1™
                    <br /> [around
                    <br /> 7°Kelvin]
                  </>,
                  <>
                    Compiled
                    <br /> Successful
                    <br /> in 178 ms²
                  </>,
                  <>
                    [up to 2.4
                    <br /> GHz] Record
                    <br /> KeyBoard
                  </>,
                  <>
                    Filament ↲<br /> Function 82
                    <br /> (Focus)
                  </>,
                  <>
                    Stadelĳk’s
                    <br /> SpezSound
                    <br /> Color ®
                  </>,
                ]}
                configuration={{
                  letterSpacing: "0",
                }}
                default={[300, 0]}
                slug={"giallo-roman"}
              />
            </div>


          <div id="automat-square" ref={automatRef}>
            <TypefacePreviewAutomat
              key="004"
              fontFamily="AutomatSquare"
              lable="Automat"
              weightsSQR={[
                ["SQR 000—005 / ", 0, 5],
                ["SQR 000—100 / ", 0, 100],
                ["SQR 050—012 / ", 50, 12],
                ["SQR 100—080 / ", 100, 80],
                ["SQR 000—030 / ", 0, 30],
                ["SQR 070—005 / ", 70, 5],
                ["SQR 090—090 / ", 90, 90],
                ["SQR 000—065   ", 0, 65],
              ]}
              weightsRND={[
                ["SQR 000—005 / ", 0, 5],
                ["SQR 000—100 / ", 0, 100],
                ["SQR 050—012 / ", 50, 12],
                ["SQR 100—080 / ", 100, 80],
                ["SQR 000—030 / ", 0, 30],
                ["SQR 070—005 / ", 70, 5],
                ["SQR 090—090 / ", 90, 90],
                ["SQR 000—065   ", 0, 65],
              ]}
              content={[
                <>
                  TOMPKIN
                  <br /> SQUARE PARK{" "}
                </>,
                <>
                  RIVERSIDE
                  <br /> DR. 107TH
                  <br /> STREET
                </>,
                <>
                  BROOKLYN
                  <br /> BANKS, NYC
                </>,
                <>
                  190 BOWERY
                  <br /> NEW YORK, NY
                </>,
                <>
                  RIVERSIDE
                  <br /> DR. 108TH
                  <br /> STREET
                </>,
              ]}
              configuration={{
                letterSpacing: "20px",
              }}
              default={[90, 90]}
            />
          </div>

          {/* <div ref={gialloRef} id="giallo-roman">
          <TypefacePreviewAutomat
            key="004"
            fontFamily="AutomatRound"
            lable="Automat"
            weights={[
              ["RND 000—005 / ", 0, 5],
              ["RND 000—100 / ", 0, 101],
              ["RND 050—012 / ", 50, 12],
              ["RND 100—080 / ", 100, 80],
              ["RND 000—030 / ", 0, 30],
              ["RND 090—002 / ", 90, 2],
              ["RND 090—090 / ", 90, 90],
              ["RND 000—065   ", 0, 65],
            ]}
            content={[
              "BELMONT HIGH SCHOOL",
              "HOLLYWOOD HIGH 12 OR 16",
              "3RD AND ARMY",
              "3700 WILSHIRE BLVD, LA",
              "CLIPPER 12 STAIR HUBBA",
            ]}
            configuration={{
              letterSpacing: "20px",
            }}
            default={[90, 2]}
          />
        </div> */}

          <Footer />
        </main>
      </motion.div>
    </AnimatePresence>
  </>
  );
}

export default Home;