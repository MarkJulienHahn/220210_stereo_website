import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import HeaderAnimationProtest from "../../components/HeaderAnimationProtest";
import Typetester from "../../components/Typetester";
import Button from "../../components/Button";
import Cartbutton from "../../components/Cartbutton";
import WaterfallProtest from "../../components/WaterfallProtest";
import GlyphchartProtestGrotesk from "../../components/GlyphchartProtestGrotesk";
import Footer from "../../components/Footer";

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
  const location = useRouter();

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

        <Button lable={"Protest Grotesk"} subclass={"quaternary"} />
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
          <div className="typeface-single-header">
            <HeaderAnimationProtest />
          </div>

          <main className="typeface-single-inner">
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
                  Protest Grotesk Semibold
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 160, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Semibold Italic
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Grotesk Medium
                </div>
                <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Medium Italic
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
                sample="These bitches want Nikes
                They looking for a check
                Tell 'em it ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={40}
                ital={100}
                name={"Protest Grotesk Thin Italic"}
                fontFamily="Protest"
                sample="tches want Nikes
                They looking for a check
                Tell 'em it ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={70}
                ital={0}
                name={"Protest Grotesk Light"}
                fontFamily="Protest"
                sample="nt Nikes
                They looking for a check
                Tell 'em it ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={70}
                ital={100}
                name={"Protest Grotesk Light Italic"}
                fontFamily="Protest"
                sample="
                They looking for a check
                Tell 'em it ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={100}
                ital={0}
                name={"Protest Grotesk Regular"}
                fontFamily="Protest"
                sample="king for a check
                Tell 'em it ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={100}
                ital={100}
                name={"Protest Grotesk Regular Italic"}
                fontFamily="Protest"
                sample="a check
                Tell 'em it ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              ≈
              <Typetester
                wght={130}
                ital={0}
                name={"Protest Grotesk Medium"}
                fontFamily="Protest"
                sample="Tell 'em it ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={130}
                ital={100}
                name={"Protest Grotesk Medium Italic"}
                fontFamily="Protest"
                sample="t ain't likely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={160}
                ital={0}
                name={"Protest Grotesk Semibold"}
                fontFamily="Protest"
                sample="ely 
                Said she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={160}
                ital={100}
                name={"Protest Grotesk Semibold Italic"}
                fontFamily="Protest"
                sample="she need a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={190}
                ital={0}
                name={"Protest Grotesk Bold"}
                fontFamily="Protest"
                sample="d a ring like Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={190}
                ital={100}
                name={"Protest Grotesk Bold Italic"}
                fontFamily="Protest"
                sample="ike Carmelo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={220}
                ital={0}
                name={"Protest Grotesk Heavy"}
                fontFamily="Protest"
                sample="melo 
                Must be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={220}
                ital={100}
                name={"Protest Grotesk Heavy Italic"}
                fontFamily="Protest"
                sample="ust be on that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={250}
                ital={0}
                name={"Protest Grotesk Black"}
                fontFamily="Protest"
                sample="  n that white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
              />
              <Typetester
                wght={250}
                ital={100}
                name={"Protest Grotesk Black Italic"}
                fontFamily="Protest"
                sample="white like Othello 
                All you want is Nikes
                But the real ones just like you
                Just like me
                I don't play, I don't make time
                But if you need dick I got you and I yam from the line
                Pour up for A$AP
                RIP Pimp C
                RIP Trayvon, that nigga look just like me
                Woo, fuckin' buzzin', woo!
                That my lil cousin, he got a lil trade
                His girl keep the scales, a lil mermaid
                We out by the pool, some lil mermaids
                Me and them gel
                Like twigs with them bangs
                Now that's a real mermaid
                You been holding your breath
                Weighted down
                Punk madre, punk papa
                He don't care for me
                But he cares for me
                And that's good enough
                We don't talk much or nothin'
                But when we talkin' about somethin'
                We have good discussion
                I met his friends last week, feels like they're up to somethin'
                That's good for us"
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
              <p>&#8594; Languages<br />
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
