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
        <Button lable={"Trials"} subclass={"tertiary"} />
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
              lineHeight={"clamp(20pt, 32vh, 18vw)"}
              font={"Giallo"}
              wghtMin={100}
              wghtMax={800}
              letterSpacing={"1px"}
              italic={true}
              // color={!darkMode ? "#D7DCE0" : "rgb(252,244,221)"}
              // background={darkMode ? "#1d1d1d" : "#FFFDF7"}
              color={darkMode ? "rgb(10,10,10)" : "#FFFDF7"}
              background={darkMode ? "#1d1d1d" : "rgb(220,220,220)"}
            />
          </div>

          <main
            className="typeface-single-inner typeface-single-giallo"
            style={darkMode ? dark : {}}
            ref={checkoutOverview}
          >
            <p>&#8594; FONT-WEIGHT OVERVIEW</p>
            <p>
              Giallo Roman is available in 8 Weights, including the according
              Oblique figures
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

            <p>&#8594; INFORMATION</p>
            <p>
              When the very first sans-serif Typefaces were introduced in the
              Mid 1880s they were regarded as ugly and an insult for the renewed
              graphic designer. The term »Grotesk« was meant to disqualify the
              typefaces. These typefaces were controversial, highly misregarded
              and bad reputed. They were seen as a protest against all
              ornamental and historically coloured typefaces. They were an
              uprising against conservative values. Giallo Roman pays homage to
              these Typefaces. Nowadays quality can not only stem from formal
              design-descisions. A typeface has to rely on a strong technical
              foundation, in order to deliver an advantage to modern-day type
              users. Giallo Roman is placed right into thes field of tension.
            </p>

            <WaterfallGialloRoman darkMode={darkMode} />

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

            <div className="typeface-single-tester-wrap">
              <Typetester
                wght={100}
                ital={0}
                name={"Giallo Roman Thin"}
                fontFamily="Protest"
                sample="85 packages are looking for funding run `npm fund` for detailsDetected  Next.js version: 12.0.8Running »npm run build«"
              />
              <Typetester
                wght={100}
                ital={100}
                name={"Giallo Roman Thin Oblique"}
                fontFamily="Protest"
                sample="Attention: Next.js now collects completely anonymous telemetry regarding usage. This information is used to shape Next.js' roadmap and prioritize features.
                You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
                https://nextjs.org/telemetry"
              />
              <Typetester
                wght={200}
                ital={0}
                name={"Giallo Roman Light"}
                fontFamily="Protest"
                sample={
                  "69:6  Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={200}
                ital={100}
                name={"Giallo Roman Light Oblique"}
                fontFamily="Protest"
                sample={
                  "203:3  Warning: React Hook useEffect contains a call to 'setAddFullFamily'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={300}
                ital={0}
                name={"Giallo Roman Regular"}
                fontFamily="Protest"
                sample="Attention: Next.js now collects completely anonymous telemetry regarding usage. This information is used to shape Next.js' roadmap and prioritize features.
                You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
                https://nextjs.org/telemetry"
              />
              <Typetester
                wght={300}
                ital={100}
                name={"Giallo Roman Regular Oblique"}
                fontFamily="Protest"
                sample={
                  "69:6  Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={400}
                ital={0}
                name={"Giallo Roman Book"}
                fontFamily="Protest"
                sample={
                  "203:3  Warning: React Hook useEffect contains a call to 'setAddFullFamily'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={400}
                ital={100}
                name={"Giallo Roman Book Oblique"}
                fontFamily="Protest"
                sample={
                  "69:6  Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={500}
                ital={0}
                name={"Giallo Roman Medium"}
                fontFamily="Protest"
                sample={
                  "69:6  Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={500}
                ital={100}
                name={"Giallo Roman Medium Oblique"}
                fontFamily="Protest"
                sample={
                  "203:3  Warning: React Hook useEffect contains a call to 'setAddFullFamily'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={600}
                ital={0}
                name={"Giallo Roman Bold"}
                fontFamily="Protest"
                sample={
                  "203:3  Warning: React Hook useEffect contains a call to 'setAddFullFamily'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={600}
                ital={100}
                name={"Giallo Roman Bold Oblique"}
                fontFamily="Protest"
                sample={
                  "69:6  Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
              <Typetester
                wght={700}
                ital={0}
                name={"Giallo Roman Black"}
                fontFamily="Protest"
                sample={
                  "203:3  Warning: React Hook useEffect contains a call to 'setAddFullFamily'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.  react-hooks/exhaustive-deps"
                }
              />
              <Typetester
                wght={700}
                ital={100}
                name={"Giallo Roman Black Oblique"}
                fontFamily="Protest"
                sample={
                  "69:6  Warning: React Hook useEffect has a missing dependency: 'checkoutToken?.id'. Either inc"
                }
              />
            </div>

            <p>&#8594; INFORMATION</p>
            <p>
              When the very first sans-serif Typefaces were introduced in the
              Mid 1880s they were regarded as ugly and an insult for the renewed
              graphic designer. The term »Grotesk« was meant to disqualify the
              typefaces. These typefaces were controversial, highly misregarded
              and bad reputed. They were seen as a protest against all
              ornamental and historically coloured typefaces. They were an
              uprising against conservative values. Giallo Roman pays homage to
              these Typefaces. Nowadays quality can not only stem from formal
              design-descisions. A typeface has to rely on a strong technical
              foundation, in order to deliver an advantage to modern-day type
              users. Giallo Roman is placed right into thes field of tension.
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
                "subs (Subscript)",
                "sinf (Scientific Inferiors)",
                "sups (Superscript)",
                "c2sc (Small Capitals From Capitals)",
                "liga (Standard Ligatures)",
                "dlig (Discretionary Ligatures)",
                "zero (Slashed Zero)",
                "calt (Contextual Alternates)",
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
