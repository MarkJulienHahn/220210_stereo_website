import { useEffect, useRef } from "react";
import { urlFor } from "./Hooks/useImageUrlBuilder";
import JournalImageComponent from "./JournalImageComponent";
import { useRouter } from "next/router";
import { PortableText } from "@portabletext/react";
import transformDateFormat from "./Hooks/dateFormatter";

import { motion, AnimatePresence } from "framer-motion";
import JournalButton from "./JournalButton";
import Button from "./Button";
import Link from "next/link";

const JournalEntry = ({
  entry,
  cart,
  dark,
  darkMode,
  setDarkMode,
  setShowCheckout,
}) => {
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
      <div className="buttonsLeftWrapper">
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>
        <Link href={`/news`} scroll={false}>
          <Button lable={"News"} subclass={"quaternary"} />
        </Link>
        <Button lable={entry.title} subclass={"quaternaryMuted"} />
      </div>
      <div className="buttonsRightWrapper">
        <Button
          lable={darkMode ? "Light" : "Dark"}
          subclass={!darkMode ? "secondary" : "quaternary"}
          onClick={() => setDarkMode(!darkMode)}
        />
        <Link href="/trials" scroll={false}>
          <a>
            <Button lable={"Trials"} subclass={"tertiary"} />
          </a>
        </Link>

        <Link href="/checkout" scroll={false}>
          <Button lable={"Buy"} subclass={"primary"} />
        </Link>
        {cart.line_items?.length ? (
          <Cartbutton
            lable={`Cart [${cart.total_unique_items}]`}
            subclass={"tertiary"}
            setShowCheckout={setShowCheckout}
            live={live}
            cart={cart}
          />
        ) : (
          ""
        )}
      </div>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: 300, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div
          className="journalEntryWrapper"
          ref={ref}
          style={darkMode ? dark : {}}
        >
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
          <div className="journalButtonsEntry">
            <JournalButton
              title="Back to News"
              color="black"
              background="white"
              outline={true}
              link={`/news`}
            />
            {entry.button && (
              <JournalButton
                title={entry.button.title}
                color={entry.color.hex}
                background={entry.background.hex}
                link={entry.button.internalLink}
                external={entry.externalBool}
              />
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JournalEntry;
