import React, { useState, useRef, useLayoutEffect } from "react";
import { urlFor } from "./Hooks/useImageUrlBuilder";
import { getImageDimensions } from "@sanity/asset-utils";

const JournalImageComponent = ({ value }) => {
  const [captionWidth, setCaptionWidth] = useState(null);
  const { width, height } = getImageDimensions(value);
  const ref = useRef();


  const filename = value.filename?.current || "stereo-typefaces"

  useLayoutEffect(() => {
    const updateCaptionWidth = () => {
      if (ref.current) {
        setCaptionWidth(ref.current.clientWidth);
      }
    };

    // Update width on initial render
    updateCaptionWidth();

    // Update width if image dimensions change after load
    const image = ref.current;
    if (image && image.complete) {
      updateCaptionWidth();
    } else if (image) {
      image.addEventListener("load", updateCaptionWidth);
    }

    return () => {
      if (image) {
        image.removeEventListener("load", updateCaptionWidth);
      }
    };
  }, [value]);

  return (
    <figure
      className="journalImage"
    >
      <img
        src={`${urlFor(value.asset.url).url()}/${filename}`}
        alt={
          value.alt ||
          "An Image of nice Typography by Berlin based Type Foundry Stereo Typefaces"
        }
        loading="lazy"
        style={{
          aspectRatio: width / height,
          maxHeight: value.small ? "400px" : "800px",
          maxWidth: "calc(100vw - 2 * var(--margin-M))",
        }}
        ref={ref}
      />
      {value.subtitle ? (
        <figcaption style={{ width: captionWidth }}>
          {value.subtitle}
        </figcaption>
      ) : (
        ""
      )}
    </figure>
  );
};

export default JournalImageComponent;
