function Glyphchartletter(props) {
  const glyphstyle = props.fontVariantNumeric
    ? {
        fontVariationSettings: `"wght" ${props.wght}`,
        fontFeatureSettings: `"${props.ss}"`,
        fontVariant: props.fontVariantNumeric && props.fontVariantNumeric,
      }
    : {
        fontVariationSettings: `"wght" ${props.wght}`,
        fontFeatureSettings: `"${props.ss}"`,
        fontVariant: props.smallCaps && "small-caps",
      };

  return (
    <>
      <div
        className="glyphchartLetter"
        onMouseEnter={() => props.changeGlyph(props.lable)}
        style={glyphstyle}
      >
        {props.lable}
      </div>
    </>
  );
}

export default Glyphchartletter;
