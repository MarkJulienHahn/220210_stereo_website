import { useState } from "react";
import Link from "next/link";
import LicenseAccordeon from "./LicenseAccordeon";

import Footer from "../components/Footer";

import { PortableText } from "@portabletext/react";

const LicensingContent = ({
  licensing,
  licensingIntrotext,
  dark,
  darkMode,
}) => {
  const [accIndex, setAccIndex] = useState(null);

  return (
    <div style={darkMode ? dark : {}}>
      <div className="licenseWrapper">
        <h1 className="licenseHeadline">
          How does the&nbsp;<span className="infoHeader">STEREO TYPEFACES</span>®&nbsp;
          <span className="bg02"> licensing model</span>&nbsp;work?
        </h1>

        <div className="licenseIntro">
          <PortableText value={licensingIntrotext.text} />
        </div>

        <div className="licenseBody">
          {licensing.map((item, i) => (
            <LicenseAccordeon
              key={i}
              i={i}
              item={item}
              accIndex={accIndex}
              setAccIndex={setAccIndex}
              darkMode={darkMode}
            />
          ))}
        </div>

        <div className="licenseBottom">
          <h1>
            For more details see our
            <br />
            <Link href="/general-terms">
              <span className="bg01" style={{ cursor: "pointer" }}>
                General Terms and Conditions (GTC)
                <br />
              </span>
            </Link>
            &nbsp;or&nbsp;
            <a href="mailto:info@stereotypefaces.com" className="bg02">
              contact us directly
            </a>
            .
          </h1>
        </div>
      </div>
      <div style={{ paddingLeft: "var(--margin-M)", paddingRight: "var(--margin-M)" }}>
        <Footer />
      </div>
    </div>
  );
};

export default LicensingContent;
