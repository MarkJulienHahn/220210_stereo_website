import MouseButton from "../MouseButton";
import styles from "../../styles/Buy.module.css";

const CheckoutFontPreview = ({ fontPreview, setFontPreview }) => {
  return fontPreview !== null ? (
    <>
    <MouseButton lable={"Back"}/>
      <div
        className={styles.fontPreviewWrapper}
        style={{
          fontFamily: fontPreview.fontFamily,
        }}
        onClick={() => setFontPreview(null)}
      >
        {!fontPreview.ital && !fontPreview.obli && (
          <span
            style={{
              fontVariationSettings: `"wght" ${fontPreview.wght}`,
            }}
          >
            {fontPreview.lable}
          </span>
        )}

        {fontPreview.ital && (
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
        )}
      </div>
    </>
  ) : (
    <></>
  );
};

export default CheckoutFontPreview;
