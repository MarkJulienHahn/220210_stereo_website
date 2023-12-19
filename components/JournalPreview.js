import { useEffect, useRef } from "react";

import { urlFor } from "./Hooks/useImageUrlBuilder";

import { PortableText } from "@portabletext/react";
import transformDateFormat from "./Hooks/dateFormatter";

import JournalButton from "./JournalButton";

import Link from "next/link";

const JournalPreview = ({ entry }) => {
  const transformedDate = transformDateFormat(entry.date);
  const ref = useRef(null);

  const filename = entry.introImage.filename?.current || "stereo-typefaces";

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

      <div className="journalImgWrapper">
        <Link href={`/feed/${entry.slug.current}`} scroll={false}>
          <div
            style={{
              maxHeight: "80vh",
              minHeight: "800px",
              overflow: "hidden",
              width: "100vw",
              objectFit: "cover",
              display: "flex",
              alignItems: "center",
              margin: "20px var(--margin-M)",
            }}
          >
            <img
              src={`${urlFor(entry.introImage.asset.url).url()}/${filename}`}
              alt={
                entry.introImage.alt ||
                "An Image of nice Typography by Berlin based Type Foundry Stereo Typefaces"
              }
              loading="lazy"
              style={{
                // aspectRatio:
                //   entry.introImage.asset.metadata.width /
                //   entry.introImage.asset.metadata.height,
                width: "100%",

                cursor: "pointer",
              }}
            />
          </div>
        </Link>
      </div>

      <div className="journalPreviewBody">
        <PortableText value={entry.preview} />
      </div>

      <div className="journalButtons">
        <JournalButton
          title="Read the Article"
          color={entry.color.hex}
          background={entry.background.hex}
          link={`/feed/${entry.slug.current}`}
        />

        {entry.button && (
          <JournalButton
            title={entry.button.title}
            color="black"
            background="white"
            outline={true}
            link={entry.button.internalLink}
            externalLink={entry.button?.external}
            external={entry.externalBool}
          />
        )}
      </div>
    </div>
  );
};

export default JournalPreview;
