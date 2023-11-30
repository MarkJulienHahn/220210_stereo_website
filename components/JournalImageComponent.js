import { urlFor } from "./Hooks/useImageUrlBuilder";
import { getImageDimensions } from "@sanity/asset-utils";

const JournalImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor(value.asset.url).url()}
      alt={
        value.alt ||
        "An Image of nice Typography by Berlin based Type Foundry Stereo Typefaces"
      }
      loading="lazy"
      style={{
        aspectRatio: width / height,
        maxHeight: "800px",
        maxWidth: "calc(100vw - 2 * var(--margin-M))",
        padding: "80px 5px",
      }}
    />
  );
};

export default JournalImageComponent;
