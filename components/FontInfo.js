const FontInfo = ({
  info,
  opentype,
  languages,
  adobe,
  appleMacintosh,
  microsoftWindows,
  iso8859,
}) => {
  console.log(opentype);

  return (
    <div className="typefaceInfosection">
      <div className="typefaceInfosectionList">
        <p>
          &#8594; <span class="highlight01">Information</span>
          <br />
          Name: {info.name}
          <br />
          Year: {info.year}
          <br />
          Design: {info.design}
          <br />
          Mastering: {info.mastering}
          <br />
          Characters: {info.characters}
          <br />
          Styles: {info.styles}
          <br />
          Variable: {info.variable}
        </p>
        <p>
          &#8594; <span class="highlight01">OpenType</span>
          <br />
          {/* {opentype.map((entry, i) => (
            <span key={i}>
              {entry} <br />
            </span>
          ))} */}
        </p>
      </div>
      <p>
        &#8594;
        <span class="highlight02">{languages.count} Languages supported</span>
        <br />
        {languages.list}
      </p>

      <div className="typefaceInfosectionList">
        <p>
          &#8594; <span class="highlight02">Adobe</span>
          <br />
          {adobe.map((entry, i) => (
            <span key={i}>
              {entry} <br />
            </span>
          ))}
        </p>
        {/* <p>
          &#8594; <span class="highlight02">Apple Macintosh</span>
          <br />
          {appleMacintosh.map((entry, i) => (
            <span key={i}>
              {entry} <br />
            </span>
          ))}
        </p>
        <p>
          &#8594; <span class="highlight02">Microsoft Windows</span>
          <br />
          {microsoftWindows.map((entry, i) => (
            <span key={i}>
              {entry} <br />
            </span>
          ))}
        </p>
        <p>
          &#8594; <span class="highlight02">ISO 8859</span>
          <br />
          {iso8859.map((entry, i) => (
            <span key={i}>
              {entry} <br />
            </span>
          ))}
        </p> */}
      </div>
    </div>
  );
};

export default FontInfo;
