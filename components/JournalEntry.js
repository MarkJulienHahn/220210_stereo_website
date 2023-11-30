import { urlFor } from "./Hooks/useImageUrlBuilder";
import { getImageDimensions } from "@sanity/asset-utils";

import { PortableText } from "@portabletext/react";

const SampleImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor(value.asset.url).url()}
      alt={
        value.alt ||
        "An Image of nice Typography by Berlin based Type Foundry Stereo Typefaces"
      }
      loading="lazy"
      //   height={windowHeight * 0.75}
      //   width={600}
      style={{
        aspectRatio: width / height,
        maxHeight: "70vh",
        maxWidth: "calc(100vw - 2 * var(--margin-M))",
        padding: "80px 5px",
      }}
    />
  );
};

const JournalEntry = ({ entry }) => {
  return (
    <div className="journalEntryWrapper">
      <h1>
        A Mono from Stereo? <br />
        Now introducing <em>Protest Grotesk® Mono</em>
      </h1>
      <p className="journalDate">December 01, 2023</p>
      <div className="journalBody">
        <div className="journalImgWrapper">
          <img
            src={urlFor(entry.introImage.asset.url).url()}
            alt={
              entry.introImage.alt ||
              "An Image of nice Typography by Berlin based Type Foundry Stereo Typefaces"
            }
            loading="lazy"
            //   height={windowHeight * 0.75}
            //   width={600}
            style={{
              aspectRatio:
                entry.introImage.asset.metadata.width /
                entry.introImage.asset.metadata.height,
              maxHeight: "70vh",
              maxWidth: "calc(100vw - 2 * var(--margin-M))",
              padding: "40px 5px 80px",
            }}
          />
        </div>
        <PortableText
          value={entry.content}
          components={{
            types: {
              customImage: SampleImageComponent,
            },
          }}
        />
      </div>
    </div>
  );
};

export default JournalEntry;
