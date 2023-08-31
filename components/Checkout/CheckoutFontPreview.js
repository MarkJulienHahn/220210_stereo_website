import MouseButton from "../MouseButton";
import styles from "../../styles/Buy.module.css";

const CheckoutFontPreview = ({ fontPreview, setFontPreview }) => {
  console.log(fontPreview);

  return fontPreview !== null ? (
    <>
      <MouseButton lable={"Back"} />
      <div
        className={styles.fontPreviewWrapper}
        style={{
          fontFamily: fontPreview.fontFamily,
        }}
        onClick={() => setFontPreview(null)}
      >
        {/* SINGLE STYLES REG + ITAL */}

        {!fontPreview.ital && !fontPreview.obli && (
          <span
            style={{
              fontVariationSettings: `"wght" ${fontPreview.wght}`,
            }}
          >
            {fontPreview.lable}
            {fontPreview.italBundle && (
              <span
                style={{
                  fontVariationSettings: `"wght" ${fontPreview.wght}, "ital" 100`,
                }}
              >
                <br />
                {fontPreview.lable} Italic
              </span>
            )}
            {fontPreview.oblBundle && (
              <span
                style={{
                  fontVariationSettings: `"wght" ${fontPreview.wght}, "ital" 100`,
                }}
              >
                <br />
                {fontPreview.lable} Oblique
              </span>
            )}
          </span>
        )}

        {/* BUNDLES REG + ITAL */}

        {fontPreview[0]?.bundle && (
          <div className={styles.fontPreviewBundleWrapper}>
            {fontPreview[0].styles.map((item, i) => (
              <div
                style={{
                  fontVariationSettings: `"wght" ${item.wght}, "ital" ${item?.ital}`,
                  fontFamily: item.fontFamily,
                }}
                key={i}
              >
                {item.lable}
              </div>
            ))}
          </div>
        )}

        <>
          {/* {fontPreview.ital && (
          <span
            style={{
              fontVariationSettings: `"wght" ${fontPreview.wght}, "ital" ${fontPreview.ital}`,
            }}
          >
            {fontPreview.lable} Italic
          </span>
        )}

        {fontPreview.obli && (
          <span
            style={{
              fontVariationSettings: `"wght" ${fontPreview.wght}, "ital" ${fontPreview.obli}`,
            }}
          >
            {fontPreview.lable} Oblique
          </span>
        )} */}
        </>
      </div>
    </>
  ) : (
    <></>
  );
};

export default CheckoutFontPreview;
