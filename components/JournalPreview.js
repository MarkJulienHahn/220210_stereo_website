import { useEffect, useRef } from "react";

import { urlFor } from "./Hooks/useImageUrlBuilder";

import { PortableText } from "@portabletext/react";
import transformDateFormat from "./Hooks/dateFormatter";

import JournalButton from "./JournalButton";

import Link from "next/link";

const JournalPreview = ({ entry }) => {
  const transformedDate = transformDateFormat(entry.date);
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
    <div className="journalEntryWrapper" ref={ref}>
      <PortableText value={entry.headline} />
      <p className="journalDate">{transformedDate}</p>
      <div className="journalBody">
        <div className="journalImgWrapper">
          <Link href={`/journal/${entry.slug.current}`} scroll={false}>
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
                maxHeight: "800px",
                maxWidth: "calc(100vw - 2 * var(--margin-M))",
                padding: "40px 5px 80px",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
        <PortableText value={entry.preview} />
      </div>
      <div className="journalButtons">
        <JournalButton
          title="Read the Article"
          color={entry.color.hex}
          background={entry.background.hex}
          link={`/journal/${entry.slug.current}`}
          external={entry.externalBool}
        />

        {entry.button && (
          <JournalButton
            title={entry.button.title}
            color="black"
            background="white"
            outline={true}
            link={"/typefaces/protest-grotesk-mono"}
            external={entry.externalBool}
          />
        )}
      </div>
    </div>
  );
};

export default JournalPreview;
