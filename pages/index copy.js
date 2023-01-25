import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../components/Button";
import Infobutton from "../components/Infobutton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import StorefrontProtest from "../components/Storefront/StorefrontProtest";
import StorefrontProtestMono from "../components/Storefront/StorefrontProtestMono";
import StorefrontGiallo from "../components/Storefront/StorefrontGiallo";
import Two from "../components/Storefront/Two";
import Ad from "../components/Storefront/Ad";
import TrialsPreview from "../components/Storefront/TrialsPreview";

// import ad_test from "../public/images/ad_test_02.png";
import automat_test from "../public/images/automat_test.gif";

export default function Home(router) {
  const location = useRouter();

  const [category, setCategory] = useState("");
  const [linkCategory, setLinkCategory] = useState("");
  const [page, setPage] = useState("");
  const [linkPage, setLinkPage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="storefrontWrapper">
      <Head>
        <meta name="keywords" content="web" />
        <title>Stereo Typefaces®</title>
        <meta
          name="description"
          content="Stereo Typefaces® is an independent type lable, based in Berlin."
        />
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/manifest.webmanifest"></link>
      </Head>

      <div className="buttonsLeftWrapper">
        <Button lable={"Home"} subclass={"quaternaryMuted"} />
        <Link href={linkCategory}>
          <a>
            <Button lable={category} />
          </a>
        </Link>

        {linkPage && (
          <Link href={linkPage}>
            <a>
              <Button lable={page} />
            </a>
          </Link>
        )}
      </div>

      <div className="buttonsRightWrapper">
        <Infobutton lable={"?"} subclass={"quaternary"} content={description} />
      </div>

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <Swiper
            spaceBetween={0}
            loop={true}
            speed={300}
            // centeredSlides={true}
            // slidesPerView={"auto"}
            className="mySwiper"
          >
            <SwiperSlide>
            <SwiperSlide>
              <Ad
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Typefaces"}
                linkCategory={"/typefaces"}
                page={""}
                linkPage={"/typefaces/protest-grotesk"}
                description={
                  "When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension."
                }
              ></Ad>
            </SwiperSlide>
              <StorefrontProtest
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Typefaces"}
                linkCategory={"/typefaces"}
                page={"Protest Grotesk"}
                linkPage={"/typefaces/protest-grotesk"}
                description={
                  "When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension."
                }
              />
            </SwiperSlide>

            {/* <SwiperSlide>
              <div
                style={{
                  // width: "50vw",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ height: "100vh", width: `${(1170 / 1600) * 100}vh` }}
                >
                  <Image
                    // layout="fill"
                    object-fit="contain"
                    src={ad_test}
                    placeholder="blur"
                    width={1170}
                    height={1600}
                  />
                </div>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <StorefrontGiallo
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Typefaces"}
                linkCategory={"/typefaces"}
                page={"Protest Grotesk"}
                linkPage={"/typefaces/giallo-roman"}
                description={
                  "When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension."
                }
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <TrialsPreview
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Typefaces"}
                linkCategory={"/projects"}
                description={"They are free!"}
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <StorefrontProtestMono
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Typefaces"}
                linkCategory={"/typefaces"}
                page={"Protest Mono"}
                linkPage={"/typefaces/protest-grotesk-mono"}
                description={
                  "When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension."
                }
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ height: "100vh", width: `${166}vh` }}>
                  <Image
                    // layout="fill"
                    object-fit="contain"
                    src={automat_test}
                    width={2000}
                    height={1200}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Two
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Research"}
                linkCategory={"/projects"}
                page={"Automat"}
                linkPage={"/projects"}
                description={
                  "Automat is a modular, grid-based variable typeface system available in three different styles. Influenced by the systematic work of Wim Crouwel and Karl Gerstner in the 1960s and 1970s as well as later digital reinterpretations in the 1990s, Automat complements them by adding the possibility to steplessly manipulate the typeface in a broad design frame. With two adjustable axes, unconsidered compositions can be generated, legibility can be dissolved and unpreditermined images can be developed. Access a free-to-use design tool, which helps generate unconventional images and aims to change the designers thought process by adding a factor of generative randomness and unpredictability to the creative approach. Automat is open-source and free to use — generate compositions in the browser application and instantly download them to your computer. Feel free to leave us feedback via Mail — Stereo Typefaces would appreciate being mentioned in the final design result."
                }
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
