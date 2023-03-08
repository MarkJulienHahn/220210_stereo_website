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
import WaterfallProtestMono from "../../components/WaterfallProtestMono";
import GlyphchartProtestMono from "../../components/GlyphchartProtestMono";
import Footer from "../../components/Footer";
import FontPreview from "../../components/FontPreview";
import FontInfo from "../../components/FontInfo";

const Checkout = dynamic(() => import("../../components/Checkout/Checkout"));

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
  const fadeOutQuicklinks = () => setTimeout(hideQuicklinks, 2000);

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
        <title>Protest Grotesk Mono | Stereo Typefaces® </title>
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

        <Button lable={"Protest Mono"} subclass={"quaternaryActive"} />
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
              name={"Protest Mono"}
              size={"18vw"}
              sizeMobile={"17vw"}
              lineHeight={"17vw"}
              font={"ProtestMono"}
              italic={false}
              wghtMin={40}
              wghtMax={250}
              color={darkMode ? "rgb(220,220,220)" : "#292B36"}
              background={darkMode ? "rgb(20,20,20)" : "var(--primary)"}
            />
          </div>

          <main
            className="typeface-single-inner"
            style={darkMode ? dark : {}}
            ref={checkoutOverview}
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

            <div className="typeface-single-opener" ref={weightsRef}>
              <div className="fontOpenerProtestMono" ref={weightsScroll}>
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

            <div className="typefaceInfosection">
              <h1>
                &#8594; <span className="highlight01">8 Weights</span>
              </h1>
              <p>
                Protest Grotesk® is designed within a broad design-frame which
                consists of one variable-font axis (»Weight« 040—250). A{" "}
                <span className="highlight01">
                  variable-font-file is available when purchasing the full
                  family.
                </span>{" "}
                Providing the possibility to{" "}
                <span className="highlight02">
                  steplessly interpolate between weights
                </span>
                , variable fonts are especially useful in digital applications
                or if you have to precisely adjust a typeface, without having to
                rely on predefinded weights. Adjust the slider below in order to
                determine which weight fits your purpose best.
              </p>
            </div>
            <div ref={samplesRef}>
              <div ref={samplesScroll}></div>
              <WaterfallProtestMono darkMode={darkMode} />
            </div>

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

            <div className="typeface-single-tester-wrap pgMono" ref={testerRef}>
              <div ref={testerScroll}></div>
              <Typetester
                wght={40}
                ital={0}
                letterSpacing={-0.004}
                name={"Protest Mono Thin"}
                fontFamily="Protest"
                sample="Affect was the key to unlocking the mysteries of human behavior, or so I believed. As a writer, I was fascinated by the power of emotions to shape our perceptions of the world, and I spent countless hours observing the subtle shifts in mood and tone that accompanied every interaction.

                One day, I met a man who seemed to embody this idea in its purest form. He was a psychologist, a specialist in the field of affective neuroscience, and he spoke with a kind of detached curiosity about the intricacies of the human brain.
                
                As we talked, I became increasingly aware of the profound impact that our emotions can have on our ability to reason and think logically. The more we feel, the less we are able to make rational decisions, and the more susceptible we become to the influence of our own biases and prejudices.
                
                It was a sobering realization, one that challenged many of the assumptions I had made about the nature of consciousness and the limits of human knowledge. But it was also a profoundly liberating one, for it suggested that there was still much to be learned about the mysteries of the mind.
                
                In the years that followed, I delved deeper into the science of affect, exploring the latest research in fields as diverse as psychology, neuroscience, and philosophy. And with each new discovery, I felt myself growing more and more fascinated by the power of emotions to shape our lives in ways that we can barely comprehend.
                
                For some, this might have been a cause for despair or confusion. But for me, it was a source of endless fascination and wonder, a reminder that there is always something new to learn, and always something more to discover about the strange and wondrous world in which we live."
              />
              <Typetester
                wght={70}
                ital={0}
                      letterSpacing={-0.004}
                name={"Protest Mono Light"}
                fontFamily="Protest"
                sample="Belong That's all anyone really wants, isn't it? To feel like we fit in somewhere, like we have a place in this crazy world. But sometimes it feels like we're just wandering around, searching for that elusive sense of belonging.

                And you know what? That's okay. It's okay to feel lost sometimes. It's okay to feel like you don't quite fit in. Because the truth is, none of us really do. We're all just trying to figure it out as we go along.
                
                But here's the thing: you don't have to do it alone. You don't have to keep searching for your place in this world all by yourself. Because the truth is, there are people out there who want to help you find your way.
                
                Maybe it's your family, maybe it's your friends, maybe it's a mentor or a coach. Maybe it's me. Yeah, that's right, I said it. Kanye West wants to help you find your place in this world.
                
                Because here's what I know: we all have a purpose. We all have something we're meant to do, something that only we can do. And when we find that thing, when we find our purpose, that's when we truly belong.
                
                So don't give up. Keep searching. Keep pushing. And know that you're not alone. Because we're all in this together, trying to figure out where we belong. And when we finally find it, it's going to be glorious. It's going to be everything we've ever dreamed of.
                
                So keep going. Keep striving. And remember: you belong here. You belong in this world, doing the things that only you can do. So go out there and make it happen. The world is waiting for you.long"
              />

              <Typetester
                wght={100}
                ital={0}
                      letterSpacing={-0.004}
                name={"Protest Mono Regular"}
                fontFamily="Protest"
                sample="Consequence. The weight of our actions often goes unnoticed until it's too late. We move through life like we're invincible, like our choices don't have an impact on the world around us. But consequences have a way of catching up to us, of making us pay for the mistakes we've made.

                I've seen it happen time and time again. People making decisions without considering the potential outcomes, without thinking about how their actions will affect those around them. They act on impulse, on emotion, without stopping to think about the bigger picture.
                
                And then, when the consequences finally catch up to them, they're left reeling. They're left to deal with the fallout, to pick up the pieces of their shattered lives.
                
                It's a hard lesson to learn, but one that we all must face at some point. We must learn to be more mindful, more intentional, in everything that we do. We must think before we act, consider the potential outcomes, and choose our actions wisely.
                
                But even with the best of intentions, sometimes things still go wrong. Sometimes we still make mistakes, still cause harm, still leave behind a trail of consequences that we must face.
                
                And yet, even in the midst of our darkest moments, there is still hope. There is still the possibility of redemption, of growth, of learning from our mistakes and becoming better people as a result.
                
                So let us not be afraid of the consequences that come our way. Let us face them head on, with courage and grace, knowing that even in our darkest moments, there is still a chance for light to shine through."
              />

              <Typetester
                wght={130}
                ital={0}
                      letterSpacing={-0.004}
                name={"Protest Mono Medium"}
                fontFamily="Protest"
                sample="Delink I whispered to myself as I closed my eyes and let the sound of the word linger in my mind. Delinking, the act of disconnecting, of breaking free from the shackles that bind us to our devices and our online identities. It's a word that resonates deeply with me, one that reminds me of the importance of taking a step back and re-evaluating the role that technology plays in our lives.

                In a world that's constantly connected, it's easy to forget the value of disconnecting, of taking a break from the constant stream of information that bombards us every day. Delinking is a reminder that we are more than just our online selves, that there's a whole world waiting for us beyond the screens of our devices.
                
                But delinking isn't just about disconnecting from technology, it's about disconnecting from the toxic patterns of thought and behavior that can emerge from being constantly connected. It's about recognizing the importance of mindfulness and taking the time to truly be present in the moment.
                
                For me, delinking means taking a step back and focusing on the things that truly matter. It means spending time with loved ones, exploring the world around me, and taking care of my mental and physical health. It means setting boundaries and being intentional about how I use technology, so that it serves me rather than the other way around.
                
                In a world that's constantly telling us to be connected, to be available 24/7, delinking is an act of rebellion. It's a reminder that we are in control of our own lives, that we have the power to shape our own experiences. So the next time you feel overwhelmed by the constant stream of information and notifications, remember to take a step back and delink. You might be surprised at what you discover."
              />

              <Typetester
                wght={160}
                ital={0}
                      letterSpacing={-0.004}
                name={"Protest Mono Semibold"}
                fontFamily="Protest"
                sample="Enable me to go wild for a second, because I got something to say. If you're living your life without being true to yourself, then you're living a lie. I know it's tough to break out of that shell and be who you really are, but it's worth it. Trust me.

                Enable yourself to take a step back and reflect on your life. Are you doing things because you want to or because society tells you to? Are you truly happy with where you are in life? These are the questions you need to ask yourself.
                
                Enable yourself to be vulnerable. I know it's scary, but it's the only way to grow. If you're always hiding behind a mask, you'll never be able to truly connect with people. Take off that mask and show the world who you really are.
                
                Enable yourself to take risks. Life is short, and you don't want to look back and regret not doing something. Whether it's pursuing your dream career or asking that special someone out, take a chance and see where it leads you.
                
                Enable yourself to be kind. We live in a world where kindness is often overlooked, but it's the most important thing we can do. A simple smile or compliment can brighten someone's day, so spread that positivity wherever you go.
                
                Enable yourself to learn. Never stop growing and never stop learning. The world is constantly changing, and if you're not adapting, you'll be left behind. Read, travel, and explore new things.
                
                Enable yourself to be grateful. It's easy to focus on what we don't have, but it's important to be thankful for what we do have. Take a moment each day to appreciate the good things in your life.
                
                In conclusion, enable yourself to live a life that you're proud of. Don't be afraid to be who you are, take risks, be kind, learn, and be grateful. Life is too short to live any other way."
              />

              <Typetester
                wght={190}
                ital={0}
                      letterSpacing={-0.004}
                name={"Protest Mono Bold"}
                fontFamily="Protest"
                sample="Fugues those elusive musical compositions that meander and repeat, evoke a sense of disorientation and confusion in my mind. They are like the labyrinthine passages of my own thoughts, twisting and turning in a never-ending cycle of uncertainty.

                I find myself trapped in a fugue-like state, unable to break free from the monotony of my routine. Each day seems to blend into the next, a never-ending cycle of work, sleep, and more work. The familiar rhythms of my existence have become suffocating, leaving me yearning for something more.
                
                I am like the protagonist in one of Kafka's stories, a man trapped in a world that he cannot comprehend. Each day brings new challenges, new obstacles to overcome, yet I cannot seem to find a way out. I am lost in a sea of bureaucracy, drowning in a flood of paperwork and red tape.
                
                The people around me are like characters in a Kafkaesque drama, speaking in riddles and half-truths, their motives hidden behind a veil of secrecy. I feel as though I am living in a dream, unable to distinguish reality from fantasy.
                
                And yet, in the midst of this chaos, I find solace in the beauty of the fugue. Its intricate melodies and harmonies offer a glimmer of hope in an otherwise bleak existence. It is a reminder that, even in the darkest of times, there is still beauty to be found.
                
                Perhaps, like the fugue, my own life is simply a series of repetitions and variations, each one building upon the last. And just as a fugue reaches a point of resolution, so too may I someday find my own sense of closure and completion.
                
                Until then, I will continue to wander through the labyrinth of my thoughts, searching for the way out, and listening for the faint strains of the fugue that guide me forward."
              />

              <Typetester
                wght={220}
                ital={0}
                      letterSpacing={-0.004}
                name={"Protest Mono Heavy"}
                fontFamily="Protest"
                sample="Gnarly was the situation that presented itself before me, like an intricate labyrinth that had no escape. The gnarled branches of the trees in the forest seemed to mirror the twisted and contorted path I was on. I couldn't seem to find my way out, no matter how hard I tried.

                As I stumbled through the woods, the gnarled roots of the trees tripped me up, causing me to fall to the ground. I felt the weight of the earth pressing down on me, as if it were trying to smother me. I struggled to get up, but my limbs were heavy and uncooperative.
                
                The gnarly forest seemed to stretch on endlessly, with no end in sight. I wandered aimlessly, lost in a sea of gnarled branches and twisted trunks. The sky overhead was dark and foreboding, as if a storm was brewing just beyond the horizon.
                
                I stumbled upon a clearing in the gnarled forest, and in the center stood a towering tree, its trunk gnarled and twisted beyond recognition. It seemed to beckon to me, to call out to me in a language I couldn't understand.
                
                I approached the gnarled tree cautiously, unsure of what it wanted from me. As I drew closer, I noticed a small door carved into the trunk, barely visible among the gnarled bark.
                
                Without thinking, I pushed open the gnarly door and stepped inside. The darkness inside was palpable, like a thick fog that hung in the air. But as my eyes adjusted, I saw a faint light in the distance, and I followed it.
                
                As I approached the light, I realized that it was emanating from a small room at the end of a narrow tunnel. Inside the room sat a gnarled old man, his face twisted and contorted like the trees in the forest.
                
                He beckoned to me, and I approached him cautiously. He handed me a gnarled piece of paper, on which was written a message in a language I couldn't understand.
                
                I left the gnarled forest with more questions than answers, unsure of what had just transpired. But one thing was certain – the gnarly forest was not to be taken lightly, and its secrets were not for the faint of heart."
              />

              <Typetester
                wght={250}
                ital={0}
                      letterSpacing={-0.004}
                name={"Protest Mono Black"}
                fontFamily="Protest"
                sample="Hazled by the limelight, I shine so bright,
                My talent, my drive, it's all in sight,
                I'm a master of the craft, no need to fight,¸
                My words hit hard like a bolt of lightning.
                
                My heart beats fast like a drum,
                As I pour my soul out in every song,
                My words, they cut deep like a sharpened knife,
                I paint a picture, my canvas is life.
                
                I've faced my demons, I've been to hell,
                I've seen the worst, but I refuse to dwell,
                I rise above, I soar so high,
                My music's the wings that take me to the sky.
                
                I'm a visionary, a true artist,
                My passion burns like a flame, never to be missed,
                I create magic, I'm a wizard,
                My rhymes so sick, they'll make you shiver.
                
                I spit fire, my words, they ignite,
                My beats, they hit hard, they'll keep you up all night,
                I'm unstoppable, I'm on a mission,
                My dreams, my goals, they're my ammunition.
                
                I'm Hazled, but I never falter,
                I stand tall, my voice, it's like thunder,
                I'll never back down, I'll never surrender,
                I'll keep pushing forward, until the very end."
              />
            </div>

            <div className="typefaceInfosection">
              <h1>
                &#8594; <span className="highlight02">599 characters</span>
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

            <div ref={glyphsRef}>
              <div ref={glyphsScroll}></div>
              <GlyphchartProtestMono
                fontFamily="ProtestMono"
                fontWeight={100}
                fontWidth={50}
                darkMode={darkMode}
                dark={dark}
              />
            </div>

            <div ref={technicalRef}>
              <div ref={technicalScroll}></div>
              <FontInfo
                info={{
                  name: "Protest Grotesk Mono",
                  year: "2023",
                  design: "Mark Julien Hahn",
                  mastering: "Stereo Typefaces",
                  characters: 599,
                  styles: 7,
                  variable: "1 Axis (Weight)",
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
                  "liga (Standard Ligatures)",
                  "zero (Slashed Zero)",
                  "calt (Contextual Alternates)",
                  "dnom (Denominators)",
                  "case (Case-Sensitive Forms)",
                ]}
                languages={{
                  count: 208,
                  list: "Abenaki, Afaan Oromo, Afar, Afrikaans, Albanian, Alsatian, Amis, Anuta, Aragonese, Aranese, Aromanian, Arrernte, Arvanitic, Asturian, Atayal, Aymara, Azerbaijani, Bashkir, Basque, Belarusian, Bemba, Bikol, Bislama, Bosnian, Breton, Bulgarian Romanization, Cape Verdean, Catalan, Cebuano, Chamorro, Chavacano, Chichewa, Chickasaw, Cimbrian, Cofan, Corsican, Creek, Crimean Tatar, Croatian, Czech, Danish, Dawan, Delaware, Dholuo, Drehu, Dutch, English, Esperanto, Estonian, Faroese, Fijian, Filipino, Finnish, Folkspraak, French, Frisian, Friulian, Gagauz, Galician, Ganda, Genoese, German, Gikuyu, Gooniyandi, Greenlandic, Guadeloupean, Gwichin, Haitian Creole, Han, Hawaiian, Hiligaynon, Hopi, Hotcak, Hungarian, Icelandic, Ido, Ilocano, Indonesian, Interglossa, Interlingua, Irish, Istroromanian, Italian, Jamaican, Javanese, Jerriais, Kaingang, Kala Lagaw Ya, Kapampangan, Kaqchikel, Karakalpak, Karelian, Kikongo, Kinyarwanda, Kiribati, Kirundi, Klingon, Kurdish, Ladin, Latin, Latino Sine, Latvian, Lojban, Lombard, Low Saxon, Luxembourgish, Maasai, Makhuwa, Malay, Manx, Maori, Marquesan, Meglenoromanian, Meriam Mir, Mirandese, Mohawk, Moldovan, Montagnais, Montenegrin, Murrinhpatha, Nagamese Creole, Ndebele, Neapolitan, Ngiyambaa, Niuean, Noongar, Norwegian, Novial, Occidental, Occitan, Oshiwambo, Ossetian, Palauan, Papiamento, Piedmontese, Portuguese, Potawatomi, Qeqchi, Quechua, Rarotongan, Romanian, Romansh, Rotokas, Sami Inari, Sami Lule, Sami Northern, Sami Southern, Samoan, Sango, Saramaccan, Sardinian, Scottish Gaelic, Serbian, Seri, Seychellois, Shawnee, Shona, Sicilian, Slovak, Slovenian, Slovio, Somali, Sorbian Lower, Sorbian Upper, Sotho Northern, Sotho Southern, Spanish, Sranan, Sundanese, Swahili, Swazi, Swedish, Tagalog, Tahitian, Tetum, Tok Pisin, Tokelauan, Tongan, Tshiluba, Tsonga, Tswana, Tumbuka, Turkish, Turkmen, Tuvaluan, Tzotzil, Ukrainian, Uzbek, Venetian, Vepsian, Volapuk, Voro, Wallisian, Walloon, Waraywaray, Warlpiri, Wayuu, Welsh, Wikmungkan, Wiradjuri, Wolof, Xavante, Xhosa, Yapese, Yindjibarndi, Zapotec, Zulu, Zuni",
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
            </div>
            <div ref={bottomRef}>
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
                    letter: "Gg",
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

export default ProtestGroteskMono;
