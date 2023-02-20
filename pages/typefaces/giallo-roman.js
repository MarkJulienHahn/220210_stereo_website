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
import WaterfallGialloRoman from "../../components/WaterfallGialloRoman";
import GlyphchartGialloRoman from "../../components/GlyphchartGialloRoman";
import Footer from "../../components/Footer";
import FontPreview from "../../components/FontPreview";
import FontInfo from "../../components/FontInfo";

const Checkout = dynamic(() => import("../../components/Checkout/Checkout"));
const Trials = dynamic(() => import("../../components/Trials"));

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

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Giallo Roman"} subclass={"quaternaryActive"} />
      </div>

      <div className="buttonsRightWrapper">
        <Button
          lable={darkMode ? "Light" : "Dark"}
          subclass={!darkMode ? "secondary" : "quaternary"}
          onClick={() => setDarkMode(!darkMode)}
        />
        {/* <Button lable={"Trials"} subclass={"tertiary"} /> */}
        <Button
          lable={"Buy"}
          subclass={"primary"}
          onClick={() => setShowCheckout(true)}
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
              name={"Giallo Roman"}
              size={"clamp(20pt, 40vh, 25vw)"}
              sizeMobile={"clamp(20pt, 30vh, 23vw)"}
              lineHeight={"clamp(20pt, 32vh, 18vw)"}
              font={"Giallo"}
              wghtMin={100}
              wghtMax={800}
              letterSpacing={"1px"}
              italic={true}
              // color={!darkMode ? "#D7DCE0" : "rgb(252,244,221)"}
              // background={darkMode ? "#1d1d1d" : "#FFFDF7"}
              color={!darkMode ? "rgb(10,10,10)" :  "rgb(255,255,255)"}
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
              In 2020 we started off Giallo&#700;s original design as non-proportional monospace font, which step by step grew into a fully packed Roman type text version. Its features reach out to 16th century Italian old style serif fonts such as works by Robert Granjon (et al. Gros Cicero). Giallo® combines this <span className="highlight02">calligraphic warmth</span> with a <span className="highlight02">digital vector look</span> and a  <span className="highlight01">modern approach to the letter construction</span> as well as proportions. The <span className="highlight02">wide range of weights shape different characteristics</span> especially when contrasting between Giallo&#700;s Light and Black extremes and make the typeface pretty handy for representative display purposes as well as a workhorse for text based applications. The high grade of details in the letters really shine when used in big sizes. During the design process and due to Giallo&#700;s vector shaped look, there has been constant exploration of how to <span className="highlight01">break traditional type design methods</span> and to create characters that would normally not be possible or thought of, when using traditional tools in regular ways to design or cut a typeface. At the same time going this direction, care was taken to preserve the appearance of its Roman type roots as much as possible to make Giallo® a <span className="highlight02">versatile and functional hybrid typeface</span>.
            </p>

            <div className="typeface-single-opener">
              <div className="fontOpenerGiallo">
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
            Due to Giallo&#700;s design approach also to be a functional variable font (incl. in our »Full Family Bundle«), especially in the digital field of static and moving image use cases, we designed a »Oblique« axis, which is rather atypical in comparison to other Roman type fonts. This comes in handy for steplessly interpolation to Giallo&#700;s original straight cuts. Unlike sans-serif fonts, however, the difference in line width allowed us a slight hybridization into the italic style. Especially with certain (lower case) characters that don&#700;t deviate too much from regular styles to italics. Reducing the character width also enables a higher contrast to the straight cuts. Both, Giallo® Roman and Giallo® Roman Oblique, can be seamlessly adjusted as variable font in their weights (100 — 700) and their direct connection via the oblique axis (000 — 100). Use the sliders down below to check that out.
            </p>

            <WaterfallGialloRoman darkMode={darkMode} />

            <p>
              &#8594;{" "}
              <span className="highlight01">Why that italian name?</span> Why&apos;s
              that font named »Yellow«?
            </p>
            <p>
            We already named some of Giallo&#700;s stylistic influences above and if you&#700;re able to understand or even speak Italian or you&#700;re just a smartass, you might already guessed it, why we somehow might came up with that name. But what you might not have known is that the term »Giallo« also refers to a literature genre, coming up in the first half of last century in Italy, as well as a movie genre, which first appeared in the 60&#700;s right after the so called »Neorealismo« (Italian neorealism). Giallo movies can be described as mystery and crime fictions which shifted more and more into the psychological thriller and horror genre. During it&#700;s heydays in the 70s and 80s directors like Mario Bava or Dario Argento did unique movies, which heavily influenced later American slashers (take this as advice: There&#700;s still a lot of trash [also fun to watch] during that period, but if you wanna dig some, check out movies from that specific era). Most Giallo movies can be seen as cheap amusement, but there are some masterpieces like »Suspiria« (1977), which oscillate between that simple entertainment and an artistic, scenographically fetishizing type of film work, still being worth watched today.
            </p>

            <div className="typeface-single-tester-wrap">
              <Typetester
                wght={100}
                ital={0}
                lineHeight={0.002}
                name={"Giallo Roman Thin"}
                fontFamily="Protest"
                sample="Looking for funding run `npm fund` for detailsDetected  Next.js version: 12.0.8Running »npm run build«"
              />
              <Typetester
                wght={100}
                ital={100}
                lineHeight={0}
                name={"Giallo Roman Thin Oblique"}
                fontFamily="Protest"
                sample="Attention: Next.js now collects completely anonymous telemetry regarding usage. This information is used to shape Next.js' roadmap and prioritize features.
                You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
                https://nextjs.org/telemetry"
              />
              <Typetester
                wght={200}
                ital={0}
                lineHeight={0.001}
                name={"Giallo Roman Light"}
                fontFamily="Protest"
                sample={
                  "Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={200}
                ital={100}
                lineHeight={0.003}
                name={"Giallo Roman Light Oblique"}
                fontFamily="Protest"
                sample={
                  "This can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={300}
                ital={0}
                lineHeight={0.002}
                name={"Giallo Roman Regular"}
                fontFamily="Protest"
                sample="Attention: Next.js now collects completely anonymous telemetry regarding usage. This information is used to shape Next.js' roadmap and prioritize features.
                You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
                https://nextjs.org/telemetry"
              />
              <Typetester
                wght={300}
                ital={100}
                lineHeight={0.003}
                name={"Giallo Roman Regular Oblique"}
                fontFamily="Protest"
                sample={
                  "Effect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={400}
                ital={0}
                lineHeight={0.002}
                name={"Giallo Roman Book"}
                fontFamily="Protest"
                sample={
                  "List of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={400}
                ital={100}
                lineHeight={0.003}
                name={"Giallo Roman Book Oblique"}
                fontFamily="Protest"
                sample={
                  "Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={500}
                ital={0}
                lineHeight={0.002}
                name={"Giallo Roman Medium"}
                fontFamily="Protest"
                sample={
                  "Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={500}
                ital={100}
                lineHeight={0.003}
                name={"Giallo Roman Medium Oblique"}
                fontFamily="Protest"
                sample={
                  "Warning: React Hook useEffect contains a call to 'setAddFullFamily'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={600}
                ital={0}
                lineHeight={0.001}
                name={"Giallo Roman Bold"}
                fontFamily="Protest"
                sample={
                  "useEffect contains a call to 'setAddFullFamily'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={600}
                ital={100}
                lineHeight={0.0025}
                name={"Giallo Roman Bold Oblique"}
                fontFamily="Protest"
                sample={
                  "missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={700}
                ital={0}
                lineHeight={0.002}
                name={"Giallo Roman Black"}
                fontFamily="Protest"
                sample={
                  "Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={700}
                ital={100}
                lineHeight={0.002}
                name={"Giallo Roman Black Oblique"}
                fontFamily="Protest"
                sample={
                  "CheckoutToken?.id'. Either inc"
                }
                spacing={1}
              />
            </div>

            <p>&#8594; <span className="highlight02">803 characters</span></p>
            <p>
            Right now the Latin Extended Character Set of Giallo® contains plenty of punctuations, symbols, arrows as well as special ligatures beside the regular ones. Four alternative stylistic sets are included. Set 01 provides a single-storey lowercase »a«, Set 02 a single-storey lowercase »g«, Set 03 an alternative »7« for all kind of numerals and Set 04 an alternative »®«. Check down below for a complete listing of all Open Type features, which have been so far implemented to Giallo®. We are currently working on monospace and italic extensions, which will be added as soon as possible. Future updates of Giallo Roman are of course for free, if you already purchased a license. If you want to stay up to date, you can register to our newsletter.
            </p>

            <GlyphchartGialloRoman
              fontFamily="Giallo"
              fontWeight={100}
              fontWidth={50}
              darkMode={darkMode}
              dark={dark}
            />

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
                "ordn (Ordinals",
                "liga (Standard Ligatures",
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

            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default GialloRoman;
