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
import WaterfallProtestMono from "../../components/WaterfallProtestMono";
import GlyphchartProtestMono from "../../components/GlyphchartProtestMono";
import Footer from "../../components/Footer";
import FontPreview from "../../components/FontPreview";

const Checkout = dynamic(() => import("../../components/Checkout/Checkout"));
const Trials = dynamic(() => import("../../components/Trials"));

const ProtestGroteskMono = ({
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
  const [showCheckout, setShowCheckout] = useState(false);
  const [showTrials, setShowTrials] = useState(false);
  const location = useRouter();

  const checkoutOverview = useRef(null);

  const scrollUp = () => {
    checkoutOverview.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
          font={"Protest Mono"}
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

        <Button lable={"Protest Mono"} subclass={"quaternaryMuted"} />
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
              name={"Protest Mono"}
              size={"18vw"}
              lineHeight={"17vw"}
              font={"ProtestMono"}
              italic={false}
              wghtMin={40}
              wghtMax={250}
              color={"#292B36"}
              background={"var(--primary)"}
            />
          </div>

          <main
            className="typeface-single-inner"
            style={darkMode ? dark : {}}
            ref={checkoutOverview}
          >
            <p>&#8594; FONT-WEIGHT OVERVIEW</p>
            <p>
              Protest Grotesk is available in 8 Weights, including the according
              Italic figures
            </p>

            <div className="typeface-single-opener">
              <div className="fontOpenerProtestMono">
                <div style={{ fontVariationSettings: "'wght' 250, 'wdth' 50" }}>
                  Protest Mono Black
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght' 250, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Black Italic
                </div> */}
                <div style={{ fontVariationSettings: "'wght' 220, 'wdth' 50" }}>
                  Protest Mono Heavy
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght' 220, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Heavy Italic
                </div> */}
                <div
                  style={{
                    fontVariationSettings: "'wght' 190, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Mono Bold
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght' 190, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Bold Italic
                </div> */}
                <div
                  style={{
                    fontVariationSettings: "'wght' 160, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Mono Medium
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght' 160, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Semibold Italic
                </div> */}
                <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Mono Book
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght' 130, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Medium Italic
                </div> */}
                <div
                  style={{
                    fontVariationSettings: "'wght'  100, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Mono Regular
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght'  100, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Regular Italic
                </div> */}
                <div
                  style={{
                    fontVariationSettings: "'wght'  70, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Mono Light
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght'  70, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Light Italic
                </div> */}
                <div
                  style={{
                    fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital'  00",
                  }}
                >
                  Protest Mono Thin
                </div>
                {/* <div
                  style={{
                    fontVariationSettings: "'wght'  40, 'wdth' 50, 'ital' 100",
                  }}
                >
                  Protest Grotesk Thin Italic
                </div> */}
              </div>
            </div>

            <p>&#8594; INFORMATION</p>
            <p>
              When the very first sans-serif Typefaces were introduced in the
              Mid 1880s they were regarded as ugly and an insult for the renewed
              graphic designer. The term »Grotesk« was meant to disqualify the
              typefaces. These typefaces were controversial, highly misregarded
              and bad reputed. They were seen as a protest against all
              ornamental and historically coloured typefaces. They were an
              uprising against conservative values. Protest Grotesk pays homage
              to these Typefaces. Nowadays quality can not only stem from formal
              design-descisions. A typeface has to rely on a strong technical
              foundation, in order to deliver an advantage to modern-day type
              users. Protest Grotesk is placed right into thes field of tension.
            </p>

            <WaterfallProtestMono />

            <p>&#8594; INFORMATION</p>
            <p>
              When the very first sans-serif Typefaces were introduced in the
              Mid 1880s they were regarded as ugly and an insult for the renewed
              graphic designer. The term »Grotesk« was meant to disqualify the
              typefaces. These typefaces were controversial, highly misregarded
              and bad reputed. They were seen as a protest against all
              ornamental and historically coloured typefaces. They were an
              uprising against conservative values. Protest Grotesk pays homage
              to these Typefaces. Nowadays quality can not only stem from formal
              design-descisions. A typeface has to rely on a strong technical
              foundation, in order to deliver an advantage to modern-day type
              users. Protest Grotesk is placed right into thes field of tension.
            </p>

            <div className="typeface-single-tester-wrap pgMono">
              <Typetester
                wght={40}
                ital={0}
                name={"Protest Mono Thin"}
                fontFamily="Protest"
                sample="Affect"
              />
              {/* <Typetester
                wght={40}
                ital={100}
                name={"Protest Mono Thin Italic"}
                fontFamily="Protest"
                sample="e a towel, I'm dirty dancing by myself
                Gone off tabs of that acid
                Form me a circle, watch my Jagger
                Might lose my jacket and hit a solo
                One time
                We too loud in public then police turned down the function
                Now we outside and the timing's perfect
                Forgot to tell you, gotta tell you how much I vibe with you
                And we don't gotta be solo
                Now stay away from highways
                My eyes like them red lights
                Right now I prefer yellow
                Redbone, so mellow
                Fuck 'round, be cutting you
                Think we were better off solo
                I got that act right in the Windy city that night
                No trees to blow through
                But blow me and I owe you
                Two grams when the sun rise
                Smoking good, rolling solo
                Solo (solo)
                Solo (solo)
                S-solo (solo)
                S-solo (solo)
                It's hell on Earth and the city's on fire
                Inhale, in hell there's heaven
                There's a bull and a matador dueling in the sky
                Inhale, in hell there's heaven
                Oh, oh, oh, oh
                Oh, oh, oh, oh
                Solo, solo
                Solo, solo
                I'm skipping showers and switching socks, sleeping good and long
                Bones feeling dense as fuck, wish a nigga would cross
                And catch a solo, on time
                White leaf on my boxers, green leaf turn to vapors for the low
                And that mean cheap, cause ain't shit free and I know it
                Even love ain't, 'cause this nut cost, that clinic killed my soul
                But you gotta hit the pussy raw though
                Now your baby momma ain't so vicious, all she want is her picket fence
                And you protest and you picket sign, but them courts won't side with you
                Won't let you fly solo
                I wanted that act right in Colorado that night
                I brought trees to blow through, but it's just me and no you
                Stayed up 'til my phone died
                Smoking big, rolling solo"
              /> */}
              <Typetester
                wght={70}
                ital={0}
                name={"Protest Mono Light"}
                fontFamily="Protest"
                sample="Belong"
              />
              {/* <Typetester
                wght={70}
                ital={100}
                name={"Protest Mono Light Italic"}
                fontFamily="Protest"
                sample="'m dirty dancing by myself
                Gone off tabs of that acid
                Form me a circle, watch my Jagger
                Might lose my jacket and hit a solo
                One time
                We too loud in public then police turned down the function
                Now we outside and the timing's perfect
                Forgot to tell you, gotta tell you how much I vibe with you
                And we don't gotta be solo
                Now stay away from highways
                My eyes like them red lights
                Right now I prefer yellow
                Redbone, so mellow
                Fuck 'round, be cutting you
                Think we were better off solo
                I got that act right in the Windy city that night
                No trees to blow through
                But blow me and I owe you
                Two grams when the sun rise
                Smoking good, rolling solo
                Solo (solo)
                Solo (solo)
                S-solo (solo)
                S-solo (solo)
                It's hell on Earth and the city's on fire
                Inhale, in hell there's heaven
                There's a bull and a matador dueling in the sky
                Inhale, in hell there's heaven
                Oh, oh, oh, oh
                Oh, oh, oh, oh
                Solo, solo
                Solo, solo
                I'm skipping showers and switching socks, sleeping good and long
                Bones feeling dense as fuck, wish a nigga would cross
                And catch a solo, on time
                White leaf on my boxers, green leaf turn to vapors for the low
                And that mean cheap, cause ain't shit free and I know it
                Even love ain't, 'cause this nut cost, that clinic killed my soul
                But you gotta hit the pussy raw though
                Now your baby momma ain't so vicious, all she want is her picket fence
                And you protest and you picket sign, but them courts won't side with you
                Won't let you fly solo
                I wanted that act right in Colorado that night
                I brought trees to blow through, but it's just me and no you
                Stayed up 'til my phone died
                Smoking big, rolling solo"
              /> */}
              <Typetester
                wght={100}
                ital={0}
                name={"Protest Mono Regular"}
                fontFamily="Protest"
                sample="Conseq"
              />
              {/* <Typetester
                wght={100}
                ital={100}
                name={"Protest Mono Regular Italic"}
                fontFamily="Protest"
                sample="cing by myself
                Gone off tabs of that acid
                Form me a circle, watch my Jagger
                Might lose my jacket and hit a solo
                One time
                We too loud in public then police turned down the function
                Now we outside and the timing's perfect
                Forgot to tell you, gotta tell you how much I vibe with you
                And we don't gotta be solo
                Now stay away from highways
                My eyes like them red lights
                Right now I prefer yellow
                Redbone, so mellow
                Fuck 'round, be cutting you
                Think we were better off solo
                I got that act right in the Windy city that night
                No trees to blow through
                But blow me and I owe you
                Two grams when the sun rise
                Smoking good, rolling solo
                Solo (solo)
                Solo (solo)
                S-solo (solo)
                S-solo (solo)
                It's hell on Earth and the city's on fire
                Inhale, in hell there's heaven
                There's a bull and a matador dueling in the sky
                Inhale, in hell there's heaven
                Oh, oh, oh, oh
                Oh, oh, oh, oh
                Solo, solo
                Solo, solo
                I'm skipping showers and switching socks, sleeping good and long
                Bones feeling dense as fuck, wish a nigga would cross
                And catch a solo, on time
                White leaf on my boxers, green leaf turn to vapors for the low
                And that mean cheap, cause ain't shit free and I know it
                Even love ain't, 'cause this nut cost, that clinic killed my soul
                But you gotta hit the pussy raw though
                Now your baby momma ain't so vicious, all she want is her picket fence
                And you protest and you picket sign, but them courts won't side with you
                Won't let you fly solo
                I wanted that act right in Colorado that night
                I brought trees to blow through, but it's just me and no you
                Stayed up 'til my phone died
                Smoking big, rolling solo"
              /> */}

              <Typetester
                wght={130}
                ital={0}
                name={"Protest Mono Medium"}
                fontFamily="Protest"
                sample="Delink"
              />
              {/* <Typetester
                wght={130}
                ital={100}
                name={"Protest Mono Medium Italic"}
                fontFamily="Protest"
              /> */}
              <Typetester
                wght={160}
                ital={0}
                name={"Protest Mono Semibold"}
                fontFamily="Protest"
                sample="Enable"
              />
              {/* <Typetester
                wght={160}
                ital={100}
                name={"Protest Mono Semibold Italic"}
                fontFamily="Protest"
              /> */}
              <Typetester
                wght={190}
                ital={0}
                name={"Protest Mono Bold"}
                fontFamily="Protest"
                sample="Fugues"
              />
              {/* <Typetester
                wght={190}
                ital={100}
                name={"Protest Mono Bold Italic"}
                fontFamily="Protest"
              /> */}
              <Typetester
                wght={220}
                ital={0}
                name={"Protest Mono Heavy"}
                fontFamily="Protest"
                sample="Gnarly"
              />
              {/* <Typetester
                wght={220}
                ital={100}
                name={"Protest Mono Heavy Italic"}
                fontFamily="Protest"
              /> */}
              <Typetester
                wght={250}
                ital={0}
                name={"Protest Mono Black"}
                fontFamily="Protest"
                sample="Hazled"
              />
              {/* <Typetester
                wght={250}
                ital={100}
                name={"Protest Mono Black Italic"}
                fontFamily="Protest"
              /> */}
            </div>

            <p>&#8594; INFORMATION</p>
            <p>
              When the very first sans-serif Typefaces were introduced in the
              Mid 1880s they were regarded as ugly and an insult for the renewed
              graphic designer. The term »Grotesk« was meant to disqualify the
              typefaces. These typefaces were controversial, highly misregarded
              and bad reputed. They were seen as a protest against all
              ornamental and historically coloured typefaces. They were an
              uprising against conservative values. Protest Grotesk pays homage
              to these Typefaces. Nowadays quality can not only stem from formal
              design-descisions. A typeface has to rely on a strong technical
              foundation, in order to deliver an advantage to modern-day type
              users. Protest Grotesk is placed right into thes field of tension.
            </p>

            <GlyphchartProtestMono
              fontFamily="ProtestMono"
              fontWeight={100}
              fontWidth={50}
            />

            <FontPreview
              fonts={[
                {
                  name: "Protest Grotesk",
                  font: "Protest",
                  slug: "protest-grotesk",
                  animation: "protest-animation",
                  reversed: true,
                  styles: 8,
                  italic: true,
                  letter: "Gg"
                },
                {
                  name: "Giallo Roman",
                  font: "Giallo",
                  slug: "giallo-roman",
                  animation: "giallo-animation",
                  styles: 7,
                  oblique: true,
                  letter: "Aa"
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

export default ProtestGroteskMono;
