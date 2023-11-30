import { useEffect, useRef } from "react";
import { urlFor } from "./Hooks/useImageUrlBuilder";
import JournalImageComponent from "./JournalImageComponent";
import { useRouter } from "next/router";
import { PortableText } from "@portabletext/react";
import transformDateFormat from "./Hooks/dateFormatter";

import { motion, AnimatePresence } from "framer-motion";

const JournalEntry = ({ entry }) => {
  const transformedDate = transformDateFormat(entry.date);
  const location = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const strongTags = ref.current.querySelectorAll("p strong");

      strongTags.forEach((strongTag) => {
        strongTag.style.background = `${entry.background?.hex}`;
        strongTag.style.color = `${entry.color?.hex}`;
      });
    }
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: 300, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="journalEntryWrapper" ref={ref}>
          <PortableText value={entry.headline} />
          <p className="journalDate">{transformedDate}</p>
          <div className="journalBody">
            <div className="journalImgWrapper">
              <img
                src={urlFor(entry.introImage.asset.url).url()}
                alt={
                  entry.introImage.alt ||
                  "An Image of nice Typography by Berlin based Type Foundry Stereo Typefaces"
                }
                loading="lazy"
                style={{
                  aspectRatio:
                    entry.introImage.asset.metadata.width /
                    entry.introImage.asset.metadata.height,
                  maxHeight: "1000px",
                  maxWidth: "calc(100vw - 2 * var(--margin-M))",
                  padding: "40px 5px 80px",
                }}
              />
            </div>
            <PortableText
              value={entry.content}
              components={{
                types: {
                  customImage: JournalImageComponent,
                },
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JournalEntry;
