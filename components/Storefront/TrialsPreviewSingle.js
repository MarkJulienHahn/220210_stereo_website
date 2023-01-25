import { useSwiperSlide, useSwiper } from "swiper/react";
import { useEffect, useState } from "react";

import Link from "next/link";

import styles from "../../styles/Storefront.module.css";

const TrialsPreviewSingle = ({
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
  setShowTrials
}) => {
  const [indx, setIndx] = useState(0);
  const [content, setContent] = useState("Trial Fonts");


  const array = ["Giallo", "Protest", "Giallo-Mono", "ProtestMono"];


  useEffect(() => {
    const timer = setInterval(() => {
      setIndx(Math.floor(Math.random() * array.length));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>

          <div
            className="storefrontTrialsWrapper"
            style={{
              fontFamily: array[indx],
            }}
          >
            <p
              style={{whiteSpace: "nowrap" }}
              onMouseEnter={() => setContent("Trials or Error!")}
              onMouseLeave={() => setContent("Trial Fonts")}
              onClick={() => setShowTrials(true)}
            >
              {content}
            </p>
          </div>

      </div>
    </>
  );
};

export default TrialsPreviewSingle;
