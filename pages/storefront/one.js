import React from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";
import { useEffect } from "react";
import Image from "next/image";

import styles from "../../styles/Storefront.module.css";

import HeaderAnimationProtest from "../../components/HeaderAnimationProtest"

import image from "../../public/images/image_05.png";

const One = ({
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
      <div className="typeface-single-header">
        <HeaderAnimationProtest />
      </div>
    </>
  );
};

export default One;
