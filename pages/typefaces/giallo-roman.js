import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import image01 from "../../public/images/image_01.png";

import HeaderAnimationGiallo from "../../components/HeaderAnimationGiallo";
import Typetester from "../../components/Typetester";
import Button from "../../components/Button";
import WaterfallGialloRoman from "../../components/WaterfallGialloRoman"
import Glyphchart from "../../components/GlyphchartProtestGrotesk";
import Footer from "../../components/Footer";

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
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const location = useRouter();

  return (
    <>
      <Head>
        <title>Giallo Roman | Stereo Typefaces&#x2122; </title>
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

        <Link href="/typefaces" scroll={false}>
          <a>
            <Button lable={"Typefaces"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Giallo Roman"} subclass={"quaternaryMuted"} />
      </div>

      <div className="buttonsRightWrapper">
        <Button lable={"Trials"} subclass={"tertiary"} />
        <Button
          lable={"Buy"}
          subclass={"primary"}
          onClick={() => setShowCheckout(true)}
        />
        <Button
          lable={`Cart [${cart.total_unique_items}]`}
          subclass={"tertiary"}
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
            <HeaderAnimationGiallo />
          </div>

          <main className="typeface-single-inner typeface-single-giallo">
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

            <WaterfallGialloRoman />

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
              />
              <Typetester
                wght={100}
                ital={100}
                name={"Giallo Roman Thin Oblique"}
                fontFamily="Protest"
              />
              <Typetester
                wght={200}
                ital={0}
                name={"Giallo Roman Light"}
                fontFamily="Protest"
              />
              <Typetester
                wght={200}
                ital={100}
                name={"Giallo Roman Light Oblique"}
                fontFamily="Protest"
              />
              <Typetester
                wght={300}
                ital={0}
                name={"Giallo Roman Regular"}
                fontFamily="Protest"
              />
              <Typetester
                wght={300}
                ital={100}
                name={"Giallo Roman Regular Oblique"}
                fontFamily="Protest"
              />
              <Typetester
                wght={400}
                ital={0}
                name={"Giallo Roman Book"}
                fontFamily="Protest"
              />
              <Typetester
                wght={400}
                ital={100}
                name={"Giallo Roman Book Oblique"}
                fontFamily="Protest"
              />
              <Typetester
                wght={500}
                ital={0}
                name={"Giallo Roman Medium"}
                fontFamily="Protest"
              />
              <Typetester
                wght={500}
                ital={100}
                name={"Giallo Roman Medium Oblique"}
                fontFamily="Protest"
              />
              <Typetester
                wght={600}
                ital={0}
                name={"Giallo Roman Bold"}
                fontFamily="Protest"
              />
              <Typetester
                wght={600}
                ital={100}
                name={"Giallo Roman Bold Oblique"}
                fontFamily="Protest"
              />
              <Typetester
                wght={700}
                ital={0}
                name={"Giallo Roman Black"}
                fontFamily="Protest"
              />
              <Typetester
                wght={700}
                ital={100}
                name={"Giallo Roman Black Oblique"}
                fontFamily="Protest"
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

            <Glyphchart fontFamily="Giallo" fontWeight={100} fontWidth={50} />

            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default GialloRoman;
