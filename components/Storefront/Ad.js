import React from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";
import { useEffect } from "react";
import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Storefront.module.css";

import image02 from "../../public/images/stereo-typefaces_protest-grotesk_overview_02.gif";

const Ad = ({
  setCategory,
  setPage,
  setLinkCategory,
  setLinkPage,
  setDescription,
  category,
  page,
  linkCategory,
  linkPage,
  description,
}) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    {
      swiperSlide.isActive ? setCategory(category) : "";
    }
    {
      swiperSlide.isActive ? setPage(page) : "";
    }
    {
      swiperSlide.isActive ? setLinkCategory(linkCategory) : "";
    }
    {
      swiperSlide.isActive ? setLinkPage(linkPage) : "";
    }
    {
      swiperSlide.isActive ? setDescription(description) : "";
    }
  });

  return (
    <>
      <div className={styles.swiperNav}>
        <div
          className={styles.swiperPrev}
          onClick={() => swiper.slidePrev()}
        ></div>
        <div
          className={styles.swiperNext}
          onClick={() => swiper.slideNext()}
        ></div>
      </div>
      {/* <div className={"storefrontLinkWrapper"}>
        <Link href="/typefaces/protest-grotesk">
          <div className={"storefrontLink"}>
            <a>
              Protest Grotesk® Family
              <br />8 Weights{" "}
              <span className={"storefrontItalic"}>+ Italics</span>
            </a>
          </div>
        </Link>
      </div> */}
      <div
        style={{
          // width: "50vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "100vh" }}>
          {/* <Image
            // layout="fill"
            object-fit="contain"
            src={image02}
            placeholder="blur"
            width={10000}
            height={10000}
          /> */}
                    <Image src={image02} layout="fill" objectFit="cover" />
        </div>
      </div>
    </>
  );
};

export default Ad;
