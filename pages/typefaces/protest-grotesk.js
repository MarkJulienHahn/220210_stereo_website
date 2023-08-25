import React, { useEffect, useState, useRef } from "react";
import useWindowDimensions from "../../components/Hooks/useWindowDimensions";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
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

const specimenUrl = "/specimen/specimen_protest-grotesk.pdf";
const specimenThumbnail = "/specimen/specimen_protest-grotesk_thumbnail.png";

const Checkout = dynamic(() => import("../../components/Checkout/Checkout"));

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
  const [showQuicklinks, setShowQuicklinks] = useState(false);
  const [buttonContent, setButtonContent] = useState("...");

  const location = useRouter();

  const { windowWidth } = useWindowDimensions();

  const { ref: headerRef, inView: headerIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: weightsRef, inView: weightsIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: samplesRef, inView: samplesIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: testerRef, inView: testerIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: glyphsRef, inView: glyphsIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: technicalRef, inView: technicalIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: bottomRef, inView: bottomIsVisible } = useInView({
    threshold: 0,
  });

  const checkoutOverview = useRef(null);
  const weightsScroll = useRef(null);
  const samplesScroll = useRef(null);
  const testerScroll = useRef(null);
  const glyphsScroll = useRef(null);
  const technicalScroll = useRef(null);

  const hideQuicklinks = () => setShowQuicklinks(false);

  const scrollUp = () => {
    checkoutOverview.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollTo = (dest) =>
    dest.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    headerIsVisible && setButtonContent("...");
    weightsIsVisible && setButtonContent("Weights");
    samplesIsVisible && setButtonContent("Samples");
    testerIsVisible && setButtonContent("Tester");
    glyphsIsVisible && setButtonContent("Glyphs");
    technicalIsVisible && setButtonContent("Technical");
    bottomIsVisible && setButtonContent("...");
  }, [
    weightsIsVisible,
    samplesIsVisible,
    testerIsVisible,
    glyphsIsVisible,
    technicalIsVisible,
    bottomIsVisible,
  ]);

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
          font={""}
        />
      )}

      <div
        className="shortcutButtonsWrapper"
        style={
          showQuicklinks
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-600px)" }
        }
      >
        <Button
          lable="Weights"
          subclass={weightsIsVisible ? "quaternaryMuted" : "tertiary"}
          onClick={() => scrollTo(weightsScroll)}
        />
        <Button
          lable="Samples"
          subclass={samplesIsVisible ? "quaternaryMuted" : "tertiary"}
          onClick={() => scrollTo(samplesScroll)}
        />
        <Button
          lable="Tester"
          subclass={testerIsVisible ? "quaternaryMuted" : "tertiary"}
          onClick={() => scrollTo(testerScroll)}
        />
        <Button
          lable="Glyphs"
          subclass={glyphsIsVisible ? "quaternaryMuted" : "tertiary"}
          onClick={() => scrollTo(glyphsScroll)}
        />
        <Button
          lable="Technical"
          subclass={technicalIsVisible ? "quaternaryMuted" : "tertiary"}
          onClick={() => scrollTo(technicalScroll)}
        />
      </div>

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Protest Grotesk"} subclass={"quaternaryActive"} />
        {windowWidth > 1000 && (
          <Button
            lable={buttonContent}
            subclass={"tertiary"}
            onClick={() => setShowQuicklinks(!showQuicklinks)}
          />
        )}
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
          <div className="typeface-single-header" ref={headerRef}>
            <HeaderAnimation
              scrollUp={scrollUp}
              name={"Protest Grotesk"}
              size={"clamp(20pt, 40vh, 25vw)"}
              sizeMobile={"clamp(20pt, 30vh, 23vw)"}
              lineHeight={"clamp(20pt, 35vh, 20vw)"}
              font={"Protest"}
              wghtMin={40}
              wghtMax={251}
              italic={true}
              color={"rgb(220,220,220)"}
              background={darkMode ? "rgb(20,20,20)" : "rgb(10,10,10)"}
            />
          </div>

          <main
            className="typeface-single-inner"
            ref={checkoutOverview}
            style={darkMode ? dark : {}}
          >
            <div className="typefaceInfosection">
              <h1>
                &#8594;
                <span className="highlight01">A geometric Workhorse</span>
              </h1>
              <p>
                When we began creating Protest Grotesk in 2015, our aim was to
                base the font on&nbsp;
                <span className="highlight02">a geometrical skeleton</span> that
                drew inspiration from designs from pre-war Germany, like Futura
                (Paul Renner, 1928) or Kabel (Rudolf Koch, 1929). However, we
                quickly realized that adhering strictly to these formal
                restrictions was not suitable for{" "}
                <span className="highlight01">modern use-cases</span>. As a
                result, we made adjustments to Protest Grotesk, achieving a{" "}
                <span className="highlight01">
                  {" "}
                  more balanced form while retaining the distinct features of
                  the constructivist era
                </span>
                . The result is a well-rounded typeface that is optimized for{" "}
                <span className="highlight02">small text applications</span> as
                well as <span className="highlight02">eye-catching usages</span>
                .
                {/* ., so we
                modified Protest Grotesk® in a formally more balanced fashion,
                and built a{" "}
                <span className="highlight02">well-rounded typeface</span>,{" "}
                <span className="highlight01">
                  optimized for small running-text applications
                </span>
                , still keeping special characteristics of the afore mentioned
                constructivist era. */}
              </p>
            </div>
            <div className="typeface-single-opener" ref={weightsRef}>
              <div className="fontOpener" ref={weightsScroll}>
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
                Protest Grotesk® is designed with two variable font axes
                (»Weight« 040—250 and »Italic« 000—100) within a broad
                design-frame. If you purchase the full family, you can access a{" "}
                <span class="highlight01">variable-font-file</span> that allows
                you to{" "}
                <span class="highlight02">
                  steplessly interpolate between weights and italic angles
                </span>
                . This feature is particularly useful for digital applications
                or when you need to precisely adjust a typeface without relying
                on predefined weights. You can use the slider below to determine
                which weight best suits your needs.
              </p>
            </div>

            <div ref={samplesRef}>
              <div ref={samplesScroll}></div>
              <WaterfallProtest darkMode={darkMode} />
            </div>

            <div className="typefaceInfosection">
              <h1>
                &#8594; <span className="highlight01">A »Grotesk«</span> Protest
              </h1>
              <p>
                In the mid-1880s, when the first sans-serif typefaces were
                introduced, they were considered{" "}
                <span className="highlight02">
                  unattractive and an insult to the then-renewed graphic design
                  profession
                </span>{" "}
                The term »Grotesk« was used to criticize these typefaces. They
                were{" "}
                <span className="highlight01">
                  controversial, highly disrespected, and had a bad reputation
                </span>{" "}
                They represented a protest against all ornamental and
                historically colored typefaces, and were an uprising against
                conservative values. Protest Grotesk pays homage to these
                typefaces. Nowadays, quality in typeface design cannot only be
                based on formal design decisions. A typeface must rely on a{" "}
                <span className="highlight02">
                  strong technical foundation to provide an advantage to
                  modern-day type users
                </span>
                . Protest Grotesk is positioned within this tension field.
              </p>
            </div>
            <div className="typeface-single-tester-wrap" ref={testerRef}>
              <div ref={testerScroll}></div>
              <Typetester
                wght={40}
                ital={0}
                letterSpacing={0}
                name={"Protest Grotesk Thin"}
                fontFamily="Protest"
                sample={
                  "You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness."
                }
              />

              <Typetester
                wght={40}
                ital={100}
                letterSpacing={-0.002}
                name={"Protest Grotesk Thin Italic"}
                fontFamily="Protest"
                sample={
                  "My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. "
                }
              />
              <Typetester
                wght={70}
                ital={0}
                letterSpacing={-0.002}
                name={"Protest Grotesk Light"}
                fontFamily="Protest"
                sample={
                  "Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! "
                }
              />
              <Typetester
                wght={70}
                ital={100}
                letterSpacing={0}
                name={"Protest Grotesk Light Italic"}
                fontFamily="Protest"
                sample={
                  "There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. "
                }
              />
              <Typetester
                wght={100}
                ital={0}
                letterSpacing={-0.0}
                name={"Protest Grotesk Regular"}
                fontFamily="Protest"
                sample={
                  "I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. "
                }
              />
              <Typetester
                wght={100}
                ital={100}
                letterSpacing={-0.002}
                name={"Protest Grotesk Regular Italic"}
                fontFamily="Protest"
                sample={
                  "We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. "
                }
              />

              <Typetester
                wght={130}
                ital={0}
                letterSpacing={0}
                name={"Protest Grotesk Book"}
                fontFamily="Protest"
                sample={
                  "You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness."
                }
              />
              <Typetester
                wght={130}
                ital={100}
                letterSpacing={0}
                name={"Protest Grotesk Book Italic"}
                fontFamily="Protest"
                sample={
                  "People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. "
                }
              />
              <Typetester
                wght={160}
                ital={0}
                letterSpacing={0}
                name={"Protest Grotesk Medium"}
                fontFamily="Protest"
                sample={
                  "I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. "
                }
              />
              <Typetester
                wght={160}
                ital={100}
                letterSpacing={0}
                name={"Protest Grotesk Medium Italic"}
                fontFamily="Protest"
                sample={
                  "Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. "
                }
              />
              <Typetester
                wght={190}
                ital={0}
                letterSpacing={0}
                name={"Protest Grotesk Bold"}
                fontFamily="Protest"
                sample={
                  "Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. "
                }
              />
              <Typetester
                wght={190}
                ital={100}
                letterSpacing={-0.002}
                name={"Protest Grotesk Bold Italic"}
                fontFamily="Protest"
                sample={
                  "Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. "
                }
              />
              <Typetester
                wght={220}
                ital={0}
                letterSpacing={-0.001}
                name={"Protest Grotesk Heavy"}
                fontFamily="Protest"
                sample={
                  "Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. "
                }
              />
              <Typetester
                wght={220}
                ital={100}
                letterSpacing={-0.001}
                name={"Protest Grotesk Heavy Italic"}
                fontFamily="Protest"
                sample={
                  "You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. "
                }
              />
              <Typetester
                wght={250}
                ital={0}
                letterSpacing={0}
                name={"Protest Grotesk Black"}
                fontFamily="Protest"
                sample={
                  "Awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. "
                }
              />
              <Typetester
                wght={250}
                ital={100}
                letterSpacing={-0.0024}
                name={"Protest Grotesk Black Italic"}
                fontFamily="Protest"
                sample={
                  "Believe in your flyness...conquer your shyness. You basically can say anything to someone on an email or text as long as you put LOL at the end. I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. We’re going to move the entire music industry into the 21st Century. I’d like to meet with Tim Cook, I got some Ideas. My memories are from the future. Sometimes you have to get rid of everything. I watch Bladerunner on repeat. People only get jealous when they care. I’m nice at ping pong. I make awesome decisions in bike stores!!! Manga all day. Who made up the term major label in the first place??? Ma$e is one of my favorite rappers and I based a lot of my flows off of him. I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying. My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth. There’s so many lonely emojis man. Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth. You can’t look at a glass half full or empty if it's overflowing. Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary. People always tell you »Be humble. Be humble.« When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome! I really love my Tesla. I'm in the future. Thank you Elon. I leave my emojis bart Simpson color. Let’s be like Water. Fur pillows are hard to actually sleep on. I don’t expect to be understood at all. Burn that excel spread sheet. Style is genderless. My dad got me a drone for Christmas. "
                }
              />
            </div>
            <div className="typefaceInfosection">
              <h1>
                &#8594; <span className="highlight02">685 characters</span>
              </h1>
              <p>
                Right now the{" "}
                <span className="highlight01">
                  Latin Extended Character Set
                </span>{" "}
                of Protest Grotesk® is available in our shop, which includes an
                expanded set of punctuations, symbols and arrows as well as
                plenty of OpenType font features. Those also contain{" "}
                <span className="highlight01">
                  two alternative stylistic sets
                </span>
                .
                <span className="highlight02">
                  Set 01 provides a single-storey lowercase »a«
                </span>{" "}
                and{" "}
                <span className="highlight02">
                  Set 02 has a single-storey lowercase »g«
                </span>
                . We also offer a monospaced variation of Protest Grotesk,
                called{" "}
                <span className="highlight01">
                  <Link href="/typefaces/protest-grotesk-mono">
                    Protest Grotesk Mono
                  </Link>
                </span>{" "}
                as a separate family with 8 weights in our shop.
              </p>
            </div>

            <div ref={glyphsRef}>
              <div ref={glyphsScroll}></div>
              <GlyphchartProtestGrotesk
                fontFamily="Protest"
                fontWeight={80}
                fontWidth={50}
                darkMode={darkMode}
                dark={dark}
              />
            </div>

            <div ref={technicalRef}>
              <div ref={technicalScroll}></div>
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
                specimen={{
                  url: specimenUrl,
                  thumbnail: specimenThumbnail,
                  filename: "specimen_protest-grotesk.pdf",
                }}
              />
            </div>
            <div ref={bottomRef}>
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
            </div>
            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProtestGroteskText;
