import React, { useState, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import HeaderAnimation from "../../components/HeaderAnimation";

import Typetester from "../../components/Typetester";
import Button from "../../components/Button";
import Cartbutton from "../../components/Cartbutton";
import WaterfallProtest from "../../components/WaterfallProtest";
import GlyphchartProtestGrotesk from "../../components/GlyphchartProtestGrotesk";
import Footer from "../../components/Footer";
import FontPreview from "../../components/FontPreview";
import FontInfo from "../../components/FontInfo";

const Checkout = dynamic(() => import("../../components/Checkout/Checkout"));
const Trials = dynamic(() => import("../../components/Trials"));

const ProtestGroteskText = ({
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
  dark,
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showTrials, setShowTrials] = useState(false);
  const location = useRouter();

  const checkoutOverview = useRef(null);

  const sampleText = [
    "You basically can say anything to someone on an email or text as long as you put LOL at the end. ",
    "I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. ",
    "We’re going to move the entire music industry into the 21st Century. ",
    "I’d like to meet with Tim Cook, I got some Ideas. ",
    "My memories are from the future. ",
    "Sometimes you have to get rid of everything.",
    "I watch Bladerunner on repeat. ",
    "People only get jealous when they care. ",
    "I’m nice at ping pong. ",
    "I make awesome decisions in bike stores!!! ",
    "Manga all day. ",
    "Who made up the term major label in the first place??? ",
    "Ma$e is one of my favorite rappers and I based a lot of my flows off of him. ",
    "I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. ",
    "My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. ",
    "There’s so many lonely emojis man. ",
    "Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. ",
    "You can’t look at a glass half full or empty if it's overflowing. ",
    "Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. ",
    "People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! ",
    "I really love my Tesla. I'm in the future. Thank you Elon. ",
    "I leave my emojis bart Simpson color. ",
    "Let’s be like Water. ",
    "Fur pillows are hard to actually sleep on. ",
    "I don’t expect to be understood at all. ",
    "Burn that excel spread sheet. ",
    "Style is genderless. ",
    "My dad got me a drone for Christmas. ",
    "Believe in your flyness...conquer your shyness. ",
  ];

  const sample = `${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
    sampleText[Math.floor(Math.random() * sampleText.length)]
  }`;

  const scrollUp = () => {
    checkoutOverview.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Head>
        <title>Protest Grotesk | Stereo Typefaces® </title>
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

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        {/* <Link href="/typefaces" scroll={false}>
          <a>
            <Button lable={"Typefaces"} subclass={"tertiary"} />
          </a>
        </Link> */}

        <Button lable={"Protest Grotesk"} subclass={"quaternaryActive"} />
      </div>

      <div className="buttonsRightWrapper">
        <Button
          lable={darkMode ? "Light" : "Dark"}
          subclass={!darkMode ? "secondary" : "quaternary"}
          onClick={() => setDarkMode(!darkMode)}
        />
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
          <div className="typeface-single-header">
            <HeaderAnimation
              scrollUp={scrollUp}
              name={"Protest Grotesk"}
              size={"clamp(20pt, 40vh, 25vw)"}
              lineHeight={"clamp(20pt, 35vh, 20vw)"}
              font={"Protest"}
              wghtMin={40}
              wghtMax={251}
              italic={true}
              color={!darkMode ? "#EBEBEB" : "var(--fifth)"}
              background={darkMode ? "black" : "var(--fifth)"}
            />
          </div>

          <main
            className="typeface-single-inner"
            ref={checkoutOverview}
            style={darkMode ? dark : {}}
          >
            <div className="typefaceInfosection">
              <h1>
                &#8594;{" "}
                <span className="highlight01">A geometric Workhorse</span>
              </h1>
              <p>
                When we first started designing Protest Grotesk in 2015, the
                intention was to{" "}
                <span className="highlight02">
                  build the font upon a geometrical skeleton
                </span>
                , that referred strongly to designs from pre-war Germany, such
                as Futura (Paul Renner, 1928) or Kabel (Rudolf Koch, 1929). We
                soon realised, that such strict formal restrictions didn’t fit{" "}
                <span className="highlight01">modern use-cases</span>, so we
                modified Protest Grotesk® in a formally more balanced fashion,
                and built a{" "}
                <span className="highlight02">well-rounded typeface</span>,{" "}
                <span className="highlight01">
                  optimized for small running-text applications
                </span>
                , still keeping special characteristics of the afore mentioned
                constructivist era.
              </p>
            </div>

            <div className="typeface-single-opener">
              <div className="fontOpener">
                <div style={{ fontVariationSettings: "'wght' 250, 'wdth' 50" }}>
                  Protest Grotesk Black
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 250, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Black Italic
                </div>
                <div style={{ fontVariationSettings: "'wght' 220, 'wdth' 50" }}>
                  Protest Grotesk Heavy
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 220, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Heavy Italic
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 190, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Bold
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 190, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Bold Italic
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 160, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Medium
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 160, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Medium Italic
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Book
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Book Italic
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  100, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Regular
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  100, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Regular Italic
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  70, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Light
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  70, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Light Italic
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Thin
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Thin Italic
                </div>
              </div>
            </div>

            <div className="typefaceInfosection">
              <h1>
                &#8594; <span className="highlight01">8 Weights</span> + Italics
              </h1>
              <p>
                Protest Grotesk® is designed within a broad design-frame which
                consists of two variable-font axes (»Weight« 040—250 and
                »Italic« 000—100). A{" "}
                <span className="highlight01">
                  variable-font-file is available when purchasing the full
                  family.
                </span>{" "}
                Providing the possibility to{" "}
                <span className="highlight02">
                  steplessly interpolate between weights and italic-angles
                </span>
                , variable fonts are especially useful in digital applications
                or if you have to precisely adjust a typeface, without having to
                rely on predefinded weights. Adjust the slider below in order to
                determine which weight fits your purpose best. If you would like
                to use a weight, which is not defined you can make a special
                request via{" "}
                <a href="mailto:request@stereotypefaces.com">mail.</a>
              </p>
            </div>

            <WaterfallProtest darkMode={darkMode} />

            <div className="typefaceInfosection">
              <h1>
                &#8594; <span className="highlight01">A »Grotesk«</span> Protest
              </h1>
              <p>
                When the very first sans-serif Typefaces were introduced in the
                Mid 1880s they were regarded as{" "}
                <span className="highlight02">
                  ugly and an insult for the renewed graphic designer.
                </span>{" "}
                The term »Grotesk« was meant to disqualify the typefaces. These
                typefaces were{" "}
                <span className="highlight01">
                  controversial, highly misregarded and bad reputed.
                </span>{" "}
                They were seen as a{" "}
                <span className="highlight02">
                  protest against all ornamental and historically coloured
                  typefaces.
                </span>{" "}
                They were an uprising against conservative values. Protest
                Grotesk pays homage to these Typefaces. Nowadays quality can not
                only stem from formal design-descisions. A typeface has to rely
                on a strong technical foundation, in order to deliver an
                advantage to modern-day type users. Protest Grotesk is placed
                right into thes field of tension.
              </p>
            </div>

            <div className="typeface-single-tester-wrap">
              <Typetester
                wght={40}
                ital={0}
                name={"Protest Grotesk Thin"}
                fontFamily="Protest"
                sample={sample}
              />

              <Typetester
                wght={40}
                ital={100}
                name={"Protest Grotesk Thin Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={70}
                ital={0}
                name={"Protest Grotesk Light"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={70}
                ital={100}
                name={"Protest Grotesk Light Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={100}
                ital={0}
                name={"Protest Grotesk Regular"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={100}
                ital={100}
                name={"Protest Grotesk Regular Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />

              <Typetester
                wght={130}
                ital={0}
                name={"Protest Grotesk Book"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={130}
                ital={100}
                name={"Protest Grotesk Book Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={160}
                ital={0}
                name={"Protest Grotesk Medium"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={160}
                ital={100}
                name={"Protest Grotesk Medium Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={190}
                ital={0}
                name={"Protest Grotesk Bold"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={190}
                ital={100}
                name={"Protest Grotesk Bold Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={220}
                ital={0}
                name={"Protest Grotesk Heavy"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={220}
                ital={100}
                name={"Protest Grotesk Heavy Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={250}
                ital={0}
                name={"Protest Grotesk Black"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
              <Typetester
                wght={250}
                ital={100}
                name={"Protest Grotesk Black Italic"}
                fontFamily="Protest"
                sample={`${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}${
                  sampleText[Math.floor(Math.random() * sampleText.length)]
                }${sampleText[Math.floor(Math.random() * sampleText.length)]}`}
              />
            </div>

            <div className="typefaceInfosection">
              <h1>
                &#8594; <span className="highlight02">573 characters</span>
              </h1>
              <p>
                Right now the{" "}
                <span className="highlight01">
                  Latin Extended Character Set
                </span>{" "}
                of Protest Grotesk®, including an extended set of punctuations,
                symbols and arrows is available. There are{" "}
                <span className="highlight01">
                  two stylistic alternative-sets included
                </span>
                .
                <span className="highlight02">
                  Set 01 provides a single-storey lowercase »a«
                </span>{" "}
                and{" "}
                <span className="highlight02">
                  Set 02 has a double-storey lowercase »g«
                </span>
                . We are currently working on a{" "}
                <span className="highlight02">cyrillic extension</span>, which
                will be added soon. You will of course get an updated version
                for free, if you purchase a license now. If you want to stay up
                to date, you can register to our newsletter.
              </p>
            </div>

            <GlyphchartProtestGrotesk
              fontFamily="Protest"
              fontWeight={80}
              fontWidth={50}
              darkMode={darkMode}
              dark={dark}
            />

            <FontInfo
              info={{
                name: "Protest Grotesk",
                year: "2023",
                design: "Mark Julien Hahn",
                mastering: "Stereo Typefaces",
                characters: 685,
                styles: 16,
                variable: "2 Axes (Weight & Italic)",
              }}
              opentype={[
                "aalt (Access All Alternates)",
                "ss01 (Alternative a)",
                "ss02 (Alternative g)",
                "ss03 (Alternative ® and ©)",
                "subs (Subscript)",
                "sinf (Scientific Inferiors)",
                "sups (Superscript)",
                "frac (Fractions)",
                "ordn (Ordinals)",
                "pnum (Proportional Figures)",
                "tnum (Tabular Figures)",
                "liga (Standard Ligatures)",
                "zero (Slashed Zero)",
                "calt (Contextual Alternates)",
                "dnom (Denominators)",
                "case (Case-Sensitive Forms)",
              ]}
              languages={{
                count: 213,
                list: "Abenaki, Afaan Oromo, Afar, Afrikaans, Albanian, Alsatian, Amis, Anuta, Aragonese, Aranese, Aromanian, Arrernte, Arvanitic, Asturian, Atayal, Aymara, Azerbaijani, Bashkir, Basque, Belarusian, Bemba, Bikol, Bislama, Bosnian, Breton, Bulgarian Romanization, Cape Verdean, Catalan, Cebuano, Chamorro, Chavacano, Chichewa, Chickasaw, Cimbrian, Cofan, Corsican, Creek, Crimean Tatar, Croatian, Czech, Danish, Dawan, Delaware, Dholuo, Drehu, Dutch, English, Esperanto, Estonian, Faroese, Fijian, Filipino, Finnish, Folkspraak, French, Frisian, Friulian, Gagauz, Galician, Ganda, Genoese, German, Gikuyu, Gooniyandi, Greenlandic, Guadeloupean, Gwichin, Haitian Creole, Han, Hawaiian, Hiligaynon, Hopi, Hotcak, Hungarian, Icelandic, Ido, Ilocano, Indonesian, Interglossa, Interlingua, Irish, Istroromanian, Italian, Jamaican, Javanese, Jerriais, Kaingang, Kala Lagaw Ya, Kapampangan, Kaqchikel, Karakalpak, Karelian, Kashubian, Kikongo, Kinyarwanda, Kiribati, Kirundi, Klingon, Kurdish, Ladin, Latin, Latino Sine, Latvian, Lithuanian, Lojban, Lombard, Low Saxon, Luxembourgish, Maasai, Makhuwa, Malay, Maltese, Manx, Maori, Marquesan, Meglenoromanian, Meriam Mir, Mirandese, Mohawk, Moldovan, Montagnais, Montenegrin, Murrinhpatha, Nagamese Creole, Ndebele, Neapolitan, Ngiyambaa, Niuean, Noongar, Norwegian, Novial, Occidental, Occitan, Oshiwambo, Ossetian, Palauan, Papiamento, Piedmontese, Polish, Portuguese, Potawatomi, Qeqchi, Quechua, Rarotongan, Romanian, Romansh, Rotokas, Sami Inari, Sami Lule, Sami Northern, Sami Southern, Samoan, Sango, Saramaccan, Sardinian, Scottish Gaelic, Serbian, Seri, Seychellois, Shawnee, Shona, Sicilian, Silesian, Slovak, Slovenian, Slovio, Somali, Sorbian Lower, Sorbian Upper, Sotho Northern, Sotho Southern, Spanish, Sranan, Sundanese, Swahili, Swazi, Swedish, Tagalog, Tahitian, Tetum, Tok Pisin, Tokelauan, Tongan, Tshiluba, Tsonga, Tswana, Tumbuka, Turkish, Turkmen, Tuvaluan, Tzotzil, Ukrainian, Uzbek, Venetian, Vepsian, Volapuk, Voro, Wallisian, Walloon, Waraywaray, Warlpiri, Wayuu, Welsh, Wikmungkan, Wiradjuri, Wolof, Xavante, Xhosa, Yapese, Yindjibarndi, Zapotec, Zulu, Zuni",
              }}
              adobe={["Adobe Latin-1"]}
              appleMacintosh={[
                "MacOS Roman (Standard Latin)",
                "MacOS Central European Latin",
                "MacOS Croatian",
                "MacOS Iceland",
                "MacOS Romanian",
                "MacOS Turkish",
              ]}
              microsoftWindows={[
                "MS Windows 1250 Central European Latin",
                "MS Windows 1252 Western (Standard Latin)",
                "MS Windows 1254 Turkish Latin",
                "MS Windows 1257 Baltic Latin",
              ]}
              iso8859={[
                "8859-1 Latin-1 Western European",
                "8859-2 Latin-2 Central European",
                "8859-3 Latin-3 South European",
                "8859-4 Latin-4 North European",
                "8859-9 Latin-5 Turkish",
                "8859-13 Latin-7 Baltic Rim",
                "8859-15 Latin-9",
                "8859-16 Latin-10 South-Eastern European",
              ]}
            />

            <FontPreview
              fonts={[
                {
                  name: "Protest Mono",
                  font: "ProtestMono",
                  slug: "protest-grotesk-mono",
                  animation: "protest-animation",
                  reversed: true,
                  styles: 8,
                  letter: "Rr",
                },
                {
                  name: "Giallo Roman",
                  font: "Giallo",
                  slug: "giallo-roman",
                  animation: "giallo-animation",
                  styles: 7,
                  oblique: true,
                  letter: "Aa",
                },
              ]}
            />

            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProtestGroteskText;
