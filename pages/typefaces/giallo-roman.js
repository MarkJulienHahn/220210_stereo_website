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
import WaterfallGialloRoman from "../../components/WaterfallGialloRoman";
import GlyphchartGialloRoman from "../../components/GlyphchartGialloRoman";
import Footer from "../../components/Footer";
import FontPreview from "../../components/FontPreview";
import FontInfo from "../../components/FontInfo";

const Checkout = dynamic(() => import("../../components/Checkout/Checkout"));

const GialloRoman = ({
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
        <title>Giallo Roman | Stereo Typefaces® </title>
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
          font={"Giallo"}
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

        <Button lable={"Giallo Roman"} subclass={"quaternaryActive"} />
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
              name={"Giallo Roman"}
              size={"clamp(20pt, 40vh, 25vw)"}
              sizeMobile={"clamp(20pt, 30vh, 23vw)"}
              lineHeight={"clamp(20pt, 32vh, 18vw)"}
              font={"Giallo"}
              wghtMin={100}
              wghtMax={800}
              letterSpacing={"1px"}
              italic={true}
              color={!darkMode ? "rgb(10,10,10)" : "rgb(255,255,255)"}
              background={!darkMode ? "rgb(255,255,255)" : "rgb(30,30,30)"}
            />
          </div>

          <main
            className="typeface-single-inner typeface-single-giallo"
            style={darkMode ? dark : {}}
            ref={checkoutOverview}
          >
            <p>
              &#8594; <span className="highlight01">A versatile hybrid</span>
            </p>
            <p>
              In 2020 we started off Giallo&#700;s original design as
              non-proportional monospace font, which step by step grew into a
              fully packed Roman type text version. Its features reach out to
              16th century Italian old style serif fonts such as works by Robert
              Granjon (Gros Cicero et al.). Giallo® combines this{" "}
              <span className="highlight02">calligraphic warmth</span> with a{" "}
              <span className="highlight02">digital vector look</span> and a{" "}
              <span className="highlight01">
                modern approach to the letter construction
              </span>{" "}
              as well as proportions. The{" "}
              <span className="highlight02">
                wide range of weights shape different characteristics
              </span>{" "}
              especially when contrasting between Giallo&#700;s Light and Black
              extremes and make the typeface pretty handy for representative
              display purposes as well as a workhorse for text based
              applications. The high grade of details in the letters really
              shine when used in big sizes. During the design process and due to
              Giallo&#700;s vector shaped look, there has been constant
              exploration of how to{" "}
              <span className="highlight01">
                break traditional type design methods
              </span>{" "}
              and to create characters that would normally not be possible or
              thought of, when using traditional tools in regular ways to design
              or cut a typeface. At the same time going this direction, care was
              taken to preserve the appearance of its Roman type roots as much
              as possible to make Giallo® a{" "}
              <span className="highlight02">
                versatile and functional hybrid typeface
              </span>
              .
            </p>

            <div className="typeface-single-opener" ref={weightsRef}>
              <div className="fontOpenerGiallo" ref={weightsScroll}>
                <div style={{ fontVariationSettings: "'wght' 700" }}>
                  Giallo Roman Black
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 700, 'ital' 100" }}
                >
                  Giallo Roman Black Oblique
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 600, 'ital'  00" }}
                >
                  Giallo Roman Heavy
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 600, 'ital' 100" }}
                >
                  Giallo Roman Heavy Oblique
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 500, 'ital'  00" }}
                >
                  Giallo Roman Bold
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 500, 'ital' 100" }}
                >
                  Giallo Roman Bold Oblique
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 400, 'ital'  00" }}
                >
                  Giallo Roman Medium
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 400, 'ital' 100" }}
                >
                  Giallo Roman Medium Oblique
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 300, 'ital'  00" }}
                >
                  Giallo Roman Book
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 300, 'ital' 100" }}
                >
                  Giallo Roman Book Oblique
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 200, 'ital'  00" }}
                >
                  Giallo Roman Regular
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 200, 'ital' 100" }}
                >
                  Giallo Roman Regular Oblique
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 100, 'ital'  00" }}
                >
                  Giallo Roman Light
                </div>
                <div
                  style={{ fontVariationSettings: "'wght' 100, 'ital' 100" }}
                >
                  Giallo Roman Light Oblique
                </div>
              </div>
            </div>

            <p>
              &#8594; <span className="highlight01">7 Weights</span> + Obliques
            </p>
            <p>
              Due to Giallo&#700;s design approach also to be a functional
              variable font (incl. in our »Full Family Bundle«), especially in
              the digital field of static and moving image use cases, we
              designed a »Oblique« axis, which is rather atypical in comparison
              to other Roman type fonts. This comes in handy for steplessly
              interpolation to Giallo&#700;s original straight cuts. Unlike
              sans-serif fonts, however, the difference in line width allowed us
              a{" "}
              <span className="highlight01">
                slight hybridization into the italic style
              </span>
              . Especially with certain (lower case) characters that don&#700;t
              deviate too much from regular styles to italics. Reducing the
              character width also enables a higher contrast to the straight
              cuts. Both, Giallo® Roman and Giallo® Roman Oblique, can be{" "}
              <span className="highlight02">
                seamlessly adjusted as variable font in their weights (100 —
                700)
              </span>{" "}
              and their{" "}
              <span className="highlight02">
                direct connection via the oblique axis (000 — 100)
              </span>
              . Use the sliders down below to check that out.
            </p>

            <div ref={samplesRef}>
              <div ref={samplesScroll}></div>
              <WaterfallGialloRoman darkMode={darkMode} />
            </div>

            <p>
              &#8594;{" "}
              <span className="highlight01">Why that italian name?</span>{" "}
              Why&apos;s that font named »Yellow«?
            </p>
            <p>
              We already named some of Giallo&#700;s stylistic influences above
              and if you&#700;re able to understand or even speak Italian or
              you&#700;re just a smartass, you might already guessed it, why we
              somehow might came up with that name. But what you might not have
              known is that the term »Giallo« also refers to a literature genre,
              coming up in the first half of last century in Italy, as well as a
              movie genre, which first appeared in the 60&#700;s right after the
              so called »Neorealismo« (Italian neorealism). Giallo movies can be
              described as mystery and crime fictions which{" "}
              <span className="highlight02">
                shifted more and more into the psychological thriller and horror
                genre
              </span>
              . During it&#700;s heydays in the 70s and 80s directors like Mario
              Bava or Dario Argento did unique movies, which{" "}
              <span className="highlight02">
                heavily influenced later American slashers
              </span>{" "}
              (take this as advice: There&#700;s still a lot of trash [also fun
              to watch] during that period, but if you wanna dig some, check out
              movies from that specific era). Most Giallo movies can be seen as
              cheap amusement, but there are some masterpieces like »Suspiria«
              (1977), which oscillate between that simple entertainment and an{" "}
              <span className="highlight01">
                artistic, scenographically fetishizing type of film work
              </span>
              , still being worth watched today.
            </p>

            <div className="typeface-single-tester-wrap" ref={testerRef}>
              <div ref={testerScroll}></div>
              <Typetester
                wght={100}
                ital={0}
                letterSpacing={0.002}
                name={"Giallo Roman Ligh"}
                fontFamily="Protest"
                sample="Black-gloved assassins, a writer impotently trapped in Rome, perverse chromosomal make-up, the something-not-quite-right, flashback — combined with flair of outrageous set pieces and jaw-dropping gore. Light and dark, sanity and insanity, fact and fiction, real and unreal, guilt and innocence, life and death. The impulse had become irresistible. There was only one answer to the fury that tortured him. And so he committed his first act of murder. He had broken the most deep-rooted taboo and found not guilt, not anxiety or fear, but freedom. Every humiliation which stood in his way could be swept aside by him simple act of annihilation: Murder."
              />
              <Typetester
                wght={100}
                ital={100}
                letterSpacing={0}
                name={"Giallo Roman Ligh Oblique"}
                fontFamily="Protest"
                sample="The idea behind the video nasties list in the first place was that the public had to be protected against the corrupting influences of sexually explicit or graphically violent films. Even today, horror films may be decried as pandering to the worst in human nature, and even blamed for creating real-life murderers. However horror films can be as conservative and reactionary as any Mary Whitehouse figure. Think of, for example, the Catholic Church’s active contribution to the filming of »The Exorcist« (William Friedkin, 1973). It goes down a different route. Like any genre of film – why should it be different here — there are good Gialli and bad Gialli. "
              />
              <Typetester
                wght={200}
                ital={0}
                letterSpacing={0.001}
                name={"Giallo Roman Regular"}
                fontFamily="Protest"
                sample={
                  "This means that horror films can be curiously inconsistent. Absolutely no pretense is made in Friday the »13th: A New Beginning« (Danny Steinmann, 1985) when a girl reveals her breasts with a cry of “It’s showtime!” — the audience wants its kicks, and if they want MPA-friendly titillation, who are the filmmakers so deny them? But that girl ends up dying. They usually do in horror films. “Have sex and die” is one of the most well-known tropes in horror. Whilst a film may use it innocently, seeing it as an easy way to give the audience sex and horror at the same time, there’s always a danger that the dead girls are being punished specifically because of their sexuality."
                }
              />
              <Typetester
                wght={200}
                ital={100}
                letterSpacing={0.003}
                name={"Giallo Roman Regular Oblique"}
                fontFamily="Protest"
                sample={
                  "There’s telepathic communication and — further — telepathic communication with insects. There are both a psychopathic killer and a mutated monster, conflated into one all-purpose bogeyman. There is the academy full of vicious schoolgirls and the terminally weird staff: Mrs Bruckner — who was raped by a deformed lunatic and bore his dreadful child — and the chic headmistress, who is improbably convinced that Jennifer’s sleepwalking is a sign of incipient insanity or demonic possession, a chamber of horrors and a policeman in chains, a lunatic asylum located somewhere in the ninth circle of hell and a boarding school in the »Swiss Transylvania«."
                }
              />
              <Typetester
                wght={300}
                ital={0}
                letterSpacing={0.002}
                name={"Giallo Roman Book"}
                fontFamily="Protest"
                sample={
                  "Jane shreds the the content of Peter’s bag. Elsa struggles with the store detective, and then she is getting attacked by another man, a tramp. Other scenes include a fight breaking out in a police station, a couple arguing vehemently in public and a struggle in a restaurant. These are background incidents, suggesting that violence is endemic to the entire society. Even the dogs give into the urge to attack and maim. No matter how brightly lit the environment is, no matter what we do to make everything clean and light, we’re always going to face violence in real life, committed by ourselves or others. It doesn’t matter how many streetlamps the local authorities installs, or, more to the point, how many horror films the government bans. Blaming films and books is not the answer because the violence and potential malice is there with or without them."
                }
              />
              <Typetester
                wght={300}
                ital={100}
                letterSpacing={0.003}
                name={"Giallo Roman Book Oblique"}
                fontFamily="Protest"
                sample={
                  "Deliberately theatrical — the opening conference is introduced with a parting of red curtains — a play with the melodrama of telepathy and the ability to see into the future with remarkable dexterity. Triggered by the genuine insights of the ill-fated medium, seen reacting in horror moments before the axe-murderer breaks down her apartment door, the precognitive theme is brilliantly carried through the entire sleight-of-hand narrative as a device foreshadowing each death. It takes its provocative Freudian motifs and visually elevates them into high art. With every voyeuristic nook and cranny explored by the purposeful camera. Even the daylight locations have been rendered as sinister and dangerous as the Edward Hopper-inspired nighttime ones, unlocking primal fears in the spectator they didn’t even know they had."
                }
              />
              <Typetester
                wght={400}
                ital={0}
                letterSpacing={0.002}
                name={"Giallo Roman Medium"}
                fontFamily="Protest"
                sample={
                  "There are more practicing Satanists in Turin than in any other European city and I wanted that superstitious undercurrent unfolding in the background. Turin is actually where the Italian Film industry was originally based in the silent era. During the 1930s Mussolini moved it to Rome, to be nearer out of vanity, but I always preferred Turin. A veritable checklist of the genre’s most salient style motifs and story points. Gialli are often about modernity — the experience of living in the modern age — and the problems such experiences lead to. They are Italian-made murder-mysteries / horror movie hybrids which reached their peak of popularity in the 1970’s."
                }
              />
              <Typetester
                wght={400}
                ital={100}
                letterSpacing={0.003}
                name={"Giallo Roman Medium Oblique"}
                fontFamily="Protest"
                sample={
                  "Its extraordinary style is not there just for style’s sake. If it had been, it would still have made the film memorable. But it becomes all the more striking for its connection with film’s focus on society’s perversities. Representing the »jet set«: independently wealthy, foreign visitors to Italy; a community of leisured cultural migrants no longer bound by nationalist borders. As Carlo compares, Marc represents the bourgeoisie while he (Carlo) is the proletariat. We can take that example farther to propose that the fantasy of the international dolce vita lifestyle is a self-conscious fictional concept reflecting the artificiality of the fiction film we are watching."
                }
              />
              <Typetester
                wght={500}
                ital={0}
                letterSpacing={0.002}
                name={"Giallo Roman Bold"}
                fontFamily="Protest"
                sample={
                  "A film which includes most of the genre’s codes and conventions, like its ambivalence towards modernity, the (imagined) locations which are these films’ settings, the impact of bourgeois detectives, depravity and of course, the over-the-top set pieces. Throughout the classic gialli, we are presented with a variety of imagined locations; imagined in the sense that these are tourist impressions. fantasies and have little bearing on the actual place. While the external location shooting establishes an imagined experience of travel, the preponderance of interior sequences (those scenes shot indoors) in these films suggests an interiority of the mind. The killer’s madness not only comes from inside the family, but also from inside the killer’s mind."
                }
              />
              <Typetester
                wght={500}
                ital={100}
                letterSpacing={0.003}
                name={"Giallo Roman Bold Oblique"}
                fontFamily="Protest"
                sample={
                  "Most police detectives who appear in gialli tend to be fairly useless at solving the murders. Here the detective appears to be more interested in food than solving the crimes. He is always filmed around food; when not eating a sandwich, he is beating up an unresponsive vending machine. For added Comic relief, he conducts his questioning with his mouth full of food. The police are frequently (although not always) presented as buffoons and incompetent. In Italian vernacular cinemas of the day, the Giallo lived happily alongside the Polizioteschi, an Italian crime film, as a separate genre. Gialli and Polizioteschi coexist: one concerning amateur detectives as crime solvers, the other focusing on professional detectives’ investigations."
                }
              />
              <Typetester
                wght={600}
                ital={0}
                letterSpacing={0.001}
                name={"Giallo Roman Heavy"}
                fontFamily="Protest"
                sample={
                  "These sequences — the gory murders and graphic deaths of the killers — are known as »set pieces«. Set pieces are moments the sequences are protracted beyond simply progressing the story. For example, we see (what we assume is) the killer stalking a person in its apartment, the protracted silence emerges, and then the persistent and repeated bashing of the victims mouth and teeth against the corner of its fireplace mantel and the corner of its desk, before finally being stabbed through the back of its head. These moments are moments when narratives stops, and we are asked to experience the sublime beauty of violence (violence made sublime via the agitation of the filmmaker)."
                }
              />
              <Typetester
                wght={600}
                ital={100}
                letterSpacing={0.0025}
                name={"Giallo Roman Heavy Oblique"}
                fontFamily="Protest"
                sample={
                  "Besides the overwhelming qualities of the statue that dominates the piazza, another construction inhabits the expanse: a glass fronted, single-storey building called the Blue Bar. Whilst the bar appears to be a real-life location, it was actually a wooden prop erected in the piazza and modeled on the bar depicted in Edward Hopper’s 1942 painting Nighthawks. The bar was designed in a hyperrealistic, postmodern style which juxtaposes it against the more muted look of the piazza, creating a point interest most notably through its striking use of light in an otherwise grey and dark environment. The bar’s signage is illuminated in a cyan blue, a color that links the bar to Helga Ullman’s apartment with its modernist menorah artwork, lit in the same strikingly unusual color."
                }
              />
              <Typetester
                wght={700}
                ital={0}
                letterSpacing={0.002}
                name={"Giallo Roman Black"}
                fontFamily="Protest"
                sample={
                  "A location that proves to be of great importance in uncovering the secrets of the murderous crimes that, have taken place is the House of the Screaming Child (the real-life location, Villa Scott, was designed by architect Pietro Fenoglio), a vivid yellow Art Nouveau / Liberty-style villa that was once Carlo’s family home. The space proves to be deceptive, revealed as a derelict, crumbling old mansion, the secrets of the house entombed behind walls and hidden beneath plaster. Yet upon leaving the space, another piece of plaster falls to reveal an additional vital clue that alters the scene entirely. The ornamentation present in the house consist of organic, floral shapes of Art Nouveau and Liberty-style windows alongside baroque elements, a stark contrast to the geometric forms of both the fascistic-style piazza and Marcus’ modern apartment."
                }
              />
              <Typetester
                wght={700}
                ital={100}
                letterSpacing={0.002}
                name={"Giallo Roman Black Oblique"}
                fontFamily="Protest"
                sample={
                  "The viewer may interpret the following shots as either revealing Arnò’s thought process (the visual reconstruction within his mind’s eye) or showing what the killer in fact sees at the point in time. The concept of vision is key to the film. In the murder sequence only the eye of the killer is seen and we follow his actions as viewed through that eye. I am aware of the fact that I have influenced a number of film directors: Brian de Palma (especially in Dressed to kill [1980]), John Carpenter and Quentin Tarantino, among others. Horror is everywhere in the culture of the young generation, in cartoons, in music, in films, in pictures (…). It’s fundamental to our modern sensibility."
                }
                spacing={1}
              />
            </div>

            <p>
              &#8594; <span className="highlight02">803 characters</span>
            </p>
            <p>
              Right now the{" "}
              <span className="highlight01">Latin Extended Character Set</span>{" "}
              of Giallo® contains plenty of punctuations, symbols, arrows as
              well as special ligatures beside the regular ones.{" "}
              <span className="highlight01">
                Four alternative stylistic sets are included
              </span>
              .{" "}
              <span className="highlight02">
                Set 01 provides a single-storey lowercase »a«
              </span>
              ,{" "}
              <span className="highlight02">
                Set 02 a single-storey lowercase »g«
              </span>
              , <span className="highlight02">Set 03 an alternative »7«</span>{" "}
              for all kind of numerals and{" "}
              <span className="highlight02">Set 04 an alternative »®«</span>.
              Check down below for a complete listing of all Open Type features,
              which have been so far implemented to Giallo®. We are currently
              working on{" "}
              <span className="highlight02">
                monospace and italic extensions
              </span>
              , which will be added as soon as possible. Future updates of
              Giallo Roman are of course for free, if you already purchased a
              license.
            </p>

            <div ref={glyphsRef}>
              <div ref={glyphsScroll}></div>
              <GlyphchartGialloRoman
                fontFamily="Giallo"
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
                  name: "Giallo Roman",
                  year: "2023",
                  design: "Jan Robert Obst",
                  mastering: "Stereo Typefaces",
                  characters: 856,
                  styles: 14,
                  variable: "2 Axes (Weight & Oblique)",
                }}
                opentype={[
                  "aalt (Access All Alternates)",
                  "ss01 (Alternative a)",
                  "ss02 (Alternative g)",
                  "ss03 (Alternative 7)",
                  "ss04 (Alternative ®)",
                  "subs (Subscript)",
                  "sinf (Scientific Inferiors)",
                  "sups (Superscript)",
                  "frac (Fractions)",
                  "ordn (Ordinals)",
                  "liga (Standard Ligatures)",
                  "dlig (Discretionary Ligatures)",
                  "zero (Slashed Zero)",
                  "calt (Contextual Alternates)",
                  "case (Case-Sensitive Forms)",
                  "ccmp (Glyph Composition / Decomposition)",
                  "locl (Localized Forms)",
                  "c2sc (Small Capitals From Capitals)",
                ]}
                languages={{
                  count: 220,
                  list: "Abenaki, Afaan Oromo, Afar, Afrikaans, Albanian, Alsatian, Amis, Anuta, Aragonese, Aranese, Aromanian, Arrernte, Arvanitic, Asturian, Atayal, Aymara, Azerbaijani, Bashkir, Basque, Belarusian, Bemba, Bikol, Bislama, Bosnian, Breton, Bulgarian Romanization, Cape Verdean, Catalan, Cebuano, Chamorro, Chavacano, Chichewa, Chickasaw, Cimbrian, Cofan, Cornish, Corsican, Creek, Crimean Tatar, Croatian, Czech, Danish, Dawan, Delaware, Dholuo, Drehu, Dutch, English, Esperanto, Estonian, Faroese, Fijian, Filipino, Finnish, Folkspraak, French, Frisian, Friulian, Gagauz, Galician, Ganda, Genoese, German, Gikuyu, Gooniyandi, Greenlandic, Guadeloupean, Gwichin, Haitian Creole, Han, Hawaiian, Hiligaynon, Hopi, Hotcak, Hungarian, Icelandic, Ido, Igbo, Ilocano, Indonesian, Interglossa, Interlingua, Irish, Istroromanian, Italian, Jamaican, Javanese, Jerriais, Kaingang, Kala Lagaw Ya, Kapampangan, Kaqchikel, Karakalpak, Karelian, Kashubian, Kikongo, Kinyarwanda, Kiribati, Kirundi, Klingon, Kurdish, Ladin, Latin, Latino Sine, Latvian, Lithuanian, Lojban, Lombard, Low Saxon, Luxembourgish, Maasai, Makhuwa, Malay, Maltese, Manx, Maori, Marquesan, Meglenoromanian, Meriam Mir, Mirandese, Mohawk, Moldovan, Montagnais, Montenegrin, Murrinhpatha, Nagamese Creole, Nahuatl, Ndebele, Neapolitan, Ngiyambaa, Niuean, Noongar, Norwegian, Novial, Occidental, Occitan, Old Icelandic, Old Norse, Oshiwambo, Ossetian, Palauan, Papiamento, Piedmontese, Polish, Portuguese, Potawatomi, Qeqchi, Quechua, Rarotongan, Romanian, Romansh, Rotokas, Sami Inari, Sami Lule, Sami Northern, Sami Southern, Samoan, Sango, Saramaccan, Sardinian, Scottish Gaelic, Serbian, Seri, Seychellois, Shawnee, Shona, Sicilian, Silesian, Slovak, Slovenian, Slovio, Somali, Sorbian Lower, Sorbian Upper, Sotho Northern, Sotho Southern, Spanish, Sranan, Sundanese, Swahili, Swazi, Swedish, Tagalog, Tahitian, Tetum, Tok Pisin, Tokelauan, Tongan, Tshiluba, Tsonga, Tswana, Tumbuka, Turkish, Turkmen, Tuvaluan, Tzotzil, Ukrainian, Uzbek, Venetian, Vepsian, Volapuk, Voro, Wallisian, Walloon, Waraywaray, Warlpiri, Wayuu, Welsh, Wikmungkan, Wiradjuri, Wolof, Xavante, Xhosa, Yapese, Yindjibarndi, Zapotec, Zarma, Zazaki, Zulu, Zuni",
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
                    name: "Protest Mono",
                    font: "ProtestMono",
                    slug: "protest-grotesk-mono",
                    animation: "protest-animation",
                    reversed: false,
                    styles: 8,
                    letter: "Rr",
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

export default GialloRoman;
