import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../components/Button";
import Infobutton from "../components/Infobutton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import One from "./storefront/one";
import Two from "./storefront/two";

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
        <title>Stereo Typefaces&#x2122;</title>
        <meta name="keywords" content="web" />
      </Head>

      <div className="buttonsLeftWrapper">
        <Button lable={"Home"} subclass={"quaternaryMuted"} />
        <Link href={linkCategory}>
          <a>
            <Button lable={category} />
          </a>
        </Link>

        <Link href={linkPage}>
          <a>
            <Button lable={page} />
          </a>
        </Link>
      </div>

      <div className="buttonsRightWrapper">
        <Infobutton
          lable={"?"}
          subclass={"secondary"}
          content={description}
        />

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
            // slidesPerView={1}
            loop={true}
            speed={300}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: true,
            // }}
            // modules={[Autoplay]}
          >
            <SwiperSlide>
              <One
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Typefaces"}
                linkCategory={"/typefaces"}
                page={"Protest Grotesk"}
                linkPage={"/typefaces/protest-grotesk-text"}
                description={
                  "When the very first sans-serif Typefaces were introduced in the Mid 1880s they were regarded as ugly and an insult for the renewed graphic designer. The term »Grotesk« was meant to disqualify the typefaces. These typefaces were controversial, highly misregarded and bad reputed. They were seen as a protest against all ornamental and historically coloured typefaces. They were an uprising against conservative values. Protest Grotesk pays homage to these Typefaces. Nowadays quality can not only stem from formal design-descisions. A typeface has to rely on a strong technical foundation, in order to deliver an advantage to modern-day type users. Protest Grotesk is placed right into thes field of tension."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Two
                setCategory={setCategory}
                setPage={setPage}
                setLinkCategory={setLinkCategory}
                setLinkPage={setLinkPage}
                setDescription={setDescription}
                category={"Projects"}
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
