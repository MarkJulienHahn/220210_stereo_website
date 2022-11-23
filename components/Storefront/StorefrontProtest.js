
import { useSwiperSlide, useSwiper } from "swiper/react";
import { useEffect } from "react";

import Link from "next/link";

import styles from "../../styles/Storefront.module.css";
import IntroAnimationProtest from "../IntroAnimationProtest";

const StorefrontProtest = ({
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
    swiperSlide.isActive ? setCategory(category) : "";
    swiperSlide.isActive ? setPage(page) : "";
    swiperSlide.isActive ? setLinkCategory(linkCategory) : "";
    swiperSlide.isActive ? setLinkPage(linkPage) : "";
    swiperSlide.isActive ? setDescription(description) : "";
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
      <div className="typeface-single-header">
      <IntroAnimationProtest />
      </div>
    </>
  );
};

export default StorefrontProtest;
