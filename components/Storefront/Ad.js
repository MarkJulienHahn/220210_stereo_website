import React from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";
import { useEffect } from "react";
import Image from "next/image";

import styles from "../../styles/Storefront.module.css";

import image02 from "../../public/images/ad_platzhalter.png";

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
      <div
        style={{
          // width: "50vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "100vh", width: `${1170/1600*100}vh`}}>
          <Image
            // layout="fill"
            object-fit="contain"
            src={image02}
            placeholder="blur"
            width={1170}
            height={1600}
          />
        </div>
      </div>
    </>
  );
};

export default Ad;
