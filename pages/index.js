import React, { useEffect, useState } from "react";
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
  dark,
}) => {
  const { ref: gialloRef, inView: gialloIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: protestRef, inView: protestIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: protestMonoRef, inView: protestMonoIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: automatRef, inView: automatIsVisible } = useInView({
    threshold: 0.5,
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [buttonContent, setButtonContent] = useState("");

  const location = useRouter();

  useEffect(() => {
    protestIsVisible &&
      setButtonContent({
        name: "Protest Grotesk",
        slug: "protest-grotesk",
        available: true,
      });
    protestMonoIsVisible &&
      setButtonContent({
        name: "Protest Mono",
        slug: "protest-grotesk-mono",
        available: true,
      });
    gialloIsVisible &&
      setButtonContent({
        name: "Giallo Roman",
        slug: "giallo-roman",
        available: true,
      });
    automatIsVisible &&
      setButtonContent({ name: "Automat", slug: "", available: false });
    !automatIsVisible &&
      !gialloIsVisible &&
      !protestMonoIsVisible &&
      !protestIsVisible &&
      setButtonContent({ name: "", slug: "", available: false });
  }, [
    protestIsVisible,
    protestMonoIsVisible,
    gialloIsVisible,
    automatIsVisible,
  ]);

  return (
    <>
      <Head>
        <meta name="keywords" content="web" />
        <title>Stereo Typefaces®</title>
        <meta
          name="description"
          content="Stereo Typefaces® is an independent type-design lable, based in Berlin. As a foundry it is specialized in retail typefaces, custom typography and variable fonts."
        />
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
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
          font={""}
        />
      )}

      <div className="buttonsLeftWrapper">
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"quaternaryMuted"} />
          </a>
        </Link>

        <div
          className={`${Styles.button} ${Styles.buttonShow}  `}
          style={
            !buttonContent.available
              ? { pointerEvents: "none" }
              : { pointerEvents: "auto" }
          }
        >
          <Link href={`/typefaces/${buttonContent.slug}`} scroll={false}>
            <a>
              <Button
                lable={buttonContent.name}
                subclass={
                  buttonContent.available ? "tertiary" : "quaternaryMuted"
                }
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="buttonsRightWrapper">
        <Button
          lable={darkMode ? "Light" : "Dark"}
          subclass={!darkMode ? "secondary" : "quaternary"}
          onClick={() => setDarkMode(!darkMode)}
        />
        <Link href="/trials" scroll={false}>
          <a>
            <Button lable={"Trials"} subclass={"tertiary"} />
          </a>
        </Link>
        <Button
          lable={"Buy"}
          subclass={"primary"}
          onClick={cart.line_items ? () => setShowCheckout(true) : () => {}}
        />
        {cart.line_items?.length ? (
          <Cartbutton
            lable={`Cart [${cart.total_unique_items}]`}
            subclass={"tertiary"}
            setShowCheckout={setShowCheckout}
            live={live}
            cart={cart}
          />
        ) : (
          ""
        )}
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
          <main className={Styles.TypefacesInner} style={darkMode ? dark : {}}>
            <div ref={protestRef} id="protest-grotesk">
              <TypefacePreview
                key="001"
                fontFamily="Protest"
                lable="Protest Grotesk"
                price="90"
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
                    MONO ↩ 102KHz
                    <br />
                    230MHz Kanal
                  </>,
                  <>
                    Model №507 <br />
                    (Source) AV 475
                    <br /> ⇆Emergency
                  </>,
                  <>
                    ↱Pagina LCD <br />
                    (EN 49:2001) +ÆL
                    <br /> Mail &#123;Narrow&#125;
                  </>,
                  <>
                    Ŋeo: Wilson™ <br /> remain &quot;GIPSER&quot;
                    <br />
                    Jackson® Type–1
                  </>,
                  <>
                    Inspired by Ⅷ <br /> &#123;Abloh’s&#125; Original
                    <br /> ©Meteor Show
                  </>,
                ]}
                configuration={{
                  letterSpacing: "-0.7vw",
                }}
                default={[160, 0]}
                slug={"protest-grotesk"}
                darkMode={darkMode}
                fontSize="11vw"
                lineHeight="10.9vw"
                letterSpacing="-0.4vw"
              />
            </div>

            <div ref={gialloRef} id="giallo-roman">
              <TypefacePreview
                key="001"
                fontFamily="Giallo"
                lable="Giallo Roman"
                price="90"
                weights={[
                  ["Light ", 100, 0],
                  ["Oblique / ", 100, 100],
                  ["Regular ", 200, 0],
                  ["Oblique / ", 200, 100],
                  ["Book ", 300, 0],
                  ["Oblique / ", 300, 100],
                  ["Medium ", 400, 0],
                  ["Oblique / ", 400, 100],
                  ["Bold ", 500, 0],
                  ["Oblique / ", 500, 100],
                  ["Heavy ", 600, 0],
                  ["Oblique / ", 600, 100],
                  ["Black ", 700, 0],
                  ["Oblique", 700, 100],
                ]}
                content={[
                  <>
                    [ Sound ] Trebel*
                    <br />
                    STÉRÈO ↻ KHz
                    <br />
                    a–Buck50 onOne
                  </>,
                  <>
                    Modus $399,–
                    <br /> (coPressión) 36˚C
                    <br /> ♳ inBetween
                  </>,
                  <>
                    Tertiãra TdI ×3
                    <br /> (K8/G48)⬚EJC
                    <br /> Marģot &#123;Class–5&#125;
                  </>,
                  <>
                    Robiɲ: E–ﬁles⁴⁴
                    <br /> Re–cal &quot;MOLTO&quot;
                    <br /> Parļiměnt® STF
                  </>,
                  <>
                    “H2Odio”—2006
                    <br /> &#123;Perotti’s&#125; ELT,
                    <br /> ©ColorTheory
                  </>,
                ]}
                configuration={{
                  letterSpacing: "0",
                }}
                default={[400, 0]}
                slug={"giallo-roman"}
                darkMode={darkMode}
                fontSize="11.3vw"
                lineHeight="11.5vw"
                letterSpacing="-0.1vw"
              />
            </div>

            <div ref={protestMonoRef}>
              <TypefacePreview
                key="002"
                fontFamily="ProtestMono"
                lable="Protest Grotesk Mono"
                price="72"
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
                    Graph OP—1
                    <br /> »bec« 1/e
                    <br /> ↲ BERALD
                  </>,
                  <>
                    MVP N400
                    <br /> (Ty)ayanté
                    <br /> emerg–To
                  </>,
                  <>
                    ↱BLUR TFT
                    <br /> (GB£) +ÆG
                    <br /> Post &#123;Naw&#125;
                  </>,
                  <>
                    FõlD:Dubs™
                    <br /> Demain®
                    <br /> &quot; Brong &quot;
                  </>,
                  <>
                    inSPORT ↙
                    <br /> &#123;dasPinćh&#125;
                    <br /> RN_hallo
                  </>,
                ]}
                configuration={{
                  letterSpacing: "-0.9vw",
                }}
                default={[40, 0]}
                slug={"protest-grotesk-mono"}
                darkMode={darkMode}
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
                  ["RND 000—005 / ", 0, 5],
                  ["RND 000—100 / ", 0, 100],
                  ["RND 050—012 / ", 50, 12],
                  ["RND 100—080 / ", 100, 80],
                  ["RND 000—030 / ", 0, 30],
                  ["RND 070—005 / ", 70, 5],
                  ["RND 090—090 / ", 90, 90],
                  ["RND 000—065   ", 0, 65],
                ]}
                content={[
                  <>
                    TOMPKIN
                    <br /> SQUARE PARK
                    <br /> 142B
                  </>,
                  <>
                    RIVERSIDE
                    <br /> DR. 107TH
                    <br /> STREET
                  </>,
                  <>
                    BROOKLYN
                    <br /> BANKS, NYC
                    <br /> US OF A
                  </>,
                  <>
                    190 BOVERY
                    <br /> NEW YRK, NY
                    <br /> STEREO
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
                default={[0, 30]}
                darkMode={darkMode}
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
            <div className="typefaceFooterWrapper">
              <Footer />
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
