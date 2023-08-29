import { useState, useRef, useEffect } from "react";
import { PortableText } from "@portabletext/react";

const LicenseAccordeon = ({ item, i, accIndex, setAccIndex }) => {
  const [active, setActive] = useState(false);
  const ref = useRef();
  const ref2 = useRef();

  const activate = () => {
    setAccIndex(i), setTimeout(scroll, 300);
  };

  const scroll = () =>
    ref2.current.scrollIntoView({
      behavior: "smooth",
    });

  useEffect(() => {
    i == accIndex ? setActive(true) : setActive(false);
  }, [accIndex]);

  console.log(accIndex, active, ref.current?.clientHeight);

  return (
    <div
      className="licenseSection"
      onClick={active ? () => setAccIndex(null) : activate}
    >
      <h1 style={{ scrollMarginTop: "100px" }} ref={ref2}>{item.title}</h1>
      <div
        className="licenseAccInner"
        style={active ? { height: ref.current?.clientHeight } : { height: 0 }}
      >
        <div ref={ref} >
          <PortableText value={item.text} />
        </div>
      </div>
    </div>
  );
};

export default LicenseAccordeon;
