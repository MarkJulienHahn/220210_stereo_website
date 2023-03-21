function Glyphchartletter(props) {
  const glyphstyle = {
    fontVariationSettings: `"wght" ${props.wght}`,
    fontFeatureSettings: `"${props.ss}"`,
    fontVariant: props.smallCaps && "small-caps",
    fontVariant: props.fontVariantNumeric
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
