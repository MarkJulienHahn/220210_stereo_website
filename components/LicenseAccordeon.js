import { useState, useRef, useEffect } from "react";
import { PortableText } from "@portabletext/react";

const LicenseAccordeon = ({ item, i, accIndex, setAccIndex }) => {
  const [active, setActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    i == accIndex ? setActive(true) : setActive(false);
  }, [accIndex]);

  console.log(accIndex, active, ref.current?.clientHeight);

  return (
    <div
      className="licenseSection"
      onClick={active ? () => setAccIndex(null) : () => setAccIndex(i)}
    >
      <h1>{item.title}</h1>
      <div
        className="licenseAccInner"
        style={active ? { height: ref.current?.clientHeight } : { height: 0 }}
      >
        <div ref={ref}>
          <PortableText value={item.text} ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default LicenseAccordeon;
