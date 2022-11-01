import { useSwiperSlide, useSwiper } from "swiper/react";
import { useEffect, useState } from "react";

import Link from "next/link";

import styles from "../../styles/Storefront.module.css";

const TrialsPreview = ({
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
  const [indx, setIndx] = useState(0);
  const [content, setContent] = useState("Trial Fonts");

  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  const array = ["Giallo", "Protest", "Giallo-Mono", "ProtestMono"];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndx(Math.floor(Math.random() * array.length));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
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
        <Link href="/typefaces/trials">
          <div
            className={styles.trialsWrapper}
            style={{ fontFamily: array[indx], zIndex: "999999999999" }}
          >
            <p
              style={{ zIndex: "999999999999", whiteSpace: "nowrap" }}
              onMouseEnter={() => setContent("Trials or Error!")}
              onMouseLeave={() => setContent("Trial Fonts")}
            >
              {content}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TrialsPreview;
