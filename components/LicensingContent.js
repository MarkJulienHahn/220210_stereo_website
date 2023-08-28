import Link from "next/link";
import { PortableText } from "@portabletext/react";
const LicensingContent = ({ licensing }) => {
  // const Licensing = getLicensing();

  return (
    <div className="licenseWrapper">
      <h1 className="licenseHeadline">
        How does the&nbsp;<span className="infoHeader">STEREO</span>®&nbsp;
        <span className="bg02"> licensing system </span>&nbsp;work?
      </h1>

      <div className="licenseIntro">
        <p>
          Our primary focus is to maintain simplicity and transparency: with
          just <span className="bg01">three purchasable license types</span> –{" "}
          <span className="bg01">lifetime licenses</span>, and convenient access
          to <span className="bg01">full trial versions</span> of our font
          products. To determine the suitable license, we use company size based
          on the <span className="bg02">number of employees</span>. We find this
          metric easy to ascertain and well comparable, unlike metrics such as
          the permitted number of font installations across workstations,
          monthly website views or the amount of app downloads.
        </p>
      </div>

      <div className="licenseBody">
        {licensing.map((item, i) => (
          <div key={i} className="licenseSection">
            <h1>{item.title}</h1>
            <PortableText value={item.text} />
          </div>
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
  );
};

export default LicensingContent;
