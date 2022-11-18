import React, { useState, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import HeaderAnimation from "../../components/HeaderAnimation";

import Typetester from "../../components/Typetester";
import Button from "../../components/Button";
import Cartbutton from "../../components/Cartbutton";
import WaterfallProtest from "../../components/WaterfallProtest";
import GlyphchartProtestGrotesk from "../../components/GlyphchartProtestGrotesk";
import Footer from "../../components/Footer";
import { withTheme } from "@material-ui/core";

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
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showTrials, setShowTrials] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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

  const dark = {
    color: "white",
    background: "black",
  };

  return (
    <>
      <Head>
        <title>Protest Grotesk | Stereo Typefaces&#x2122; </title>
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

        <Link href="/typefaces" scroll={false}>
          <a>
            <Button lable={"Typefaces"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Protest Grotesk"} subclass={"quaternaryMuted"} />
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
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="typeface-single-header">
            <HeaderAnimation
              scrollUp={scrollUp}
              name={"Protest Grotesk"}
              size={"23vw"}
              lineHeight={"20vw"}
              font={"Protest Grotesk"}
              wghtMin={40}
              wghtMax={251}
              italic={true}
              color={"#EBEBEB"}
              background={"var(--fifth)"}
            />
          </div>

          <main
            className="typeface-single-inner"
            ref={checkoutOverview}
            style={darkMode ? dark : {}}
          >
            <div className="typefaceInfosection">
              <h1>
                <span className="highlight01">&#8594; 16 Weights</span> —
                Variable for all Purposes
              </h1>
              <p>
                When the very first sans-serif Typefaces were introduced in the
                Mid 1880s they were regarded as{" "}
                <span className="highlight01">ugly</span>{" "}
                <span className="highlight02">
                  and an insult for the renewed graphic designer.
                </span>
              </p>
            </div>

            <div className="typeface-single-opener">
              <div className="fontOpener">
                <div style={{ fontVariationSettings: "'wght' 250, 'wdth' 50" }}>
                  Protest Grotesk Black²⁵⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 250, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Black Italic²⁵⁰
                </div>
                <div style={{ fontVariationSettings: "'wght' 220, 'wdth' 50" }}>
                  Protest Grotesk Heavy²²⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 220, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Heavy Italic²²⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 190, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Bold¹⁹⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 190, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Bold Italic¹⁹⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 160, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Semibold¹⁶⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 160, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Semibold Italic¹⁶⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Medium¹³⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Medium Italic¹³⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  100, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Regular¹⁰⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  100, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Regular Italic¹⁰⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  70, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Light⁰⁷⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  70, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Light Italic⁰⁷⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Thin⁰⁴⁰
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Thin Italic⁰⁴⁰
                </div>
              </div>
            </div>

            <div className="typefaceInfosection">
              <h1>&#8594; Reworked, Refined, Reborn.</h1>
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

            <WaterfallProtest />

            <div className="typefaceInfosection">
              <h1>&#8594; Reworked, Refined, Reborn.</h1>
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
              <h1>&#8594; Reworked, Refined, Reborn.</h1>
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

            <GlyphchartProtestGrotesk
              fontFamily="Protest"
              fontWeight={100}
              fontWidth={50}
            />

            <div className="typefaceInfosection">
              <h1>
                &#8594; Character Set
                <br />
                <br />
              </h1>

              <div className="typefaceInfosectionList">
                <p>
                  &#8594; Adobe
                  <br />
                  Adobe Latin-1
                  <br />
                </p>
                <p>
                  &#8594; Apple Macintosh
                  <br />
                  MacOS Roman (Standard Latin)
                  <br />
                  MacOS Central European Latin
                  <br />
                  MacOS Croatian
                  <br />
                  MacOS Iceland
                  <br />
                  MacOS Romanian
                  <br />
                  MacOS Turkish
                </p>
                <p>
                  &#8594; Microsoft Windows
                  <br />
                  MS Windows 1250 Central European Latin <br />
                  MS Windows 1252 Western (Standard Latin) <br />
                  MS Windows 1254 Turkish Latin <br />
                  MS Windows 1257 Baltic Latin
                </p>
                <p>
                  &#8594; ISO 8859
                  <br />
                  8859-1 Latin-1 Western European <br />
                  8859-2 Latin-2 Central European <br />
                  8859-3 Latin-3 South European <br />
                  8859-4 Latin-4 North European <br />
                  8859-9 Latin-5 Turkish <br />
                  8859-13 Latin-7 Baltic Rim <br />
                  8859-15 Latin-9 <br />
                  8859-16 Latin-10 South-Eastern European
                  <br />
                  <br />
                </p>
              </div>
              <p>
                &#8594; Languages
                <br />
                Afrikaans Albanian Asu Basque Bemba Bena Breton Catalan Chiga
                Colognian Cornish Croatian Czech Danish Dutch Embu English
                Esperanto Estonian Faroese Filipino Finnish French Friulian
                Galician Ganda German Gusii Hungarian Icelandic Inari Sami
                Indonesian Irish Italian Jola-Fonyi Kabuverdianu Kalaallisut
                Kalenjin Kamba Kikuyu Kinyarwanda Latvian Lithuanian Lower
                Sorbian Luo Luxembourgish Luyia Machame Makhuwa-Meetto Makonde
                Malagasy Maltese Manx Meru Morisyen North Ndebele Northern Sami
                Norwegian Bokmål Norwegian Nynorsk Nyankole Oromo Polish
                Portuguese Quechua Romanian Romansh Rombo Rundi Rwa Samburu
                Sango Sangu Scottish Gaelic Sena Serbian Shambala Shona Slovak
                Slovenian Soga Somali Spanish Swahili Swedish Swiss German Taita
                Teso Turkish Upper Sorbian Uzbek Volapük Vunjo Walser Welsh
                Western Frisian Zulu
              </p>
            </div>

            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProtestGroteskText;
