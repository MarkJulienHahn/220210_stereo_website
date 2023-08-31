import { useState } from "react";
import useDownloader from "react-use-downloader";
import Link from "next/link";

const Footer = ({}) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [fulfilled, setFulfilled] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    if (name && mail) {
      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

      fetch("/api/newsletter", {
        method: "post",
        body: JSON.stringify(formData),
      });
      fetch("/api/newsletterConfirmation", {
        method: "post",
        body: JSON.stringify(formData),
      });
      fetch("/api/mailinglist", {
        method: "post",
        body: JSON.stringify(formData),
      });
      setFulfilled(true);
    } else {
      return;
    }
  }

  const { download } = useDownloader();

  const fileUrl = "/STEREO_TYPEFACES_GTC-AGB_V2.0.pdf";
  const filename = "STEREO_TYPEFACES_GTC-AGB_V2.0.pdf";

  const data = [
    {
      title: "Contact Us",
      content: (
        <>
          <p>
            Customer service support, inquiries related to: prices and currency,
            order and preorder payment, custom inquiries or collaborations.
            <br />
          </p>
          <p className="footerInfoHead">Phone</p>
          <p>+49 152 03 56 93 05</p>
          <p className="footerInfoHead">Email</p>
          <p>
            Send us a message via&nbsp;
            <a href="mailto:info@stereotypefaces.com">
              info@stereotypefaces.com
            </a>
            .&nbsp;We’ll reply within 24 hours.
          </p>
          <p className="footerInfoHead">Working Hours</p>
          <p> Available Mon — Fri 10 am — 6 pm (CEST)</p>
        </>
      ),
    },
    {
      title: "Licensing",
      content: (
        <p>
          Our licensing model is based on company size of the end user. You can
          either buy a license for yourself as a designer to use, for example
          your portfolio website, or (more commonly) for your client.
          <br />
          <br />
          On top of that there are these use-specific licenses:
          <br />
          <br />
          <Link href="/licensing#desktop">DESKTOP LICENSE</Link> &#8594; for
          print products and signage
          <br />
          <Link href="/licensing#web">WEB LICENSE</Link> &#8594; for an embedded
          font on a website
          <br />
          <Link href="/licensing#app">APP/GAME LICENSE</Link> &#8594; for an
          embedded font in an interactive game or application
          <br />
          <br />
          For bigger projects there are more specific licenses:
          <br />
          <Link href="/licensing#social">SOCIAL MEDIA LICENSE</Link> &#8594; for
          use in a social network
          <br />
          <Link href="/licensing#logo">LOGO LICENSE</Link> &#8594; for use as a
          brand logo or wordmark
          <br />
          <Link href="/licensing#video">VIDEO LICENSE</Link> &#8594; for use in
          a movie, streaming platform or video billboard
          <br />
          <br />
          Click here for&nbsp;
          <Link href="/licensing">MORE SPECIFIC LICENSING-INFORMATION</Link>
        </p>
      ),
    },
    {
      title: "Payment Methods",
      content: (
        <>
          <p>
            Stereo Typefaces® has the following payment methods available:
            <p />
            <p className="footerInfoHead">CREDIT CARDS</p>
            <p>
              (we accept Visa, Mastercard, American Express, Diners, Discover,
              JCB and Union Pay)
            </p>
            <p className="footerInfoHead">PAYPAL</p>
            <p>
              (to register a paypal account, please visit their website at&nbsp;
              <a href="https://paypal.com" target="_blank" rel="noreferrer">
                paypal.com
              </a>
              ).
            </p>
          </p>
          <p className="footerInfoHead">
            Please note that all payment transactions are subject to
            verification with the card issuer. Your credit card will be charged
            only when the order is finalized, and we will not be held
            responsible for any refusal of a card issuer to authorize the
            transaction. Furthermore, we conduct standard pre-authorization on
            the card; Products shall not be shipped until such checks have been
            performed. Please note that the card issuer may charge a fee or
            administrative-processing charge; we are not responsible for such
            expenses.
          </p>
        </>
      ),
    },
    {
      title: "General Terms and Conditions",
      content: (
        <>
          <p>
            We offer a detailed general terms ans conditions (GTC) for for our
            webshop. <br />
            <br />
            Click here for the <Link href="/general-terms">Online Version</Link>
            <br />
            and here for a{" "}
            <a
              style={{ cursor: "pointer" }}
              onClick={() => download(fileUrl, filename)}
            >
              PDF-Download
            </a>
            .
          </p>
        </>
      ),
    },
    {
      title: (
        <Link href="/legals">
          <span style={{ textDecoration: "none" }}>
            Legal Notice / Privacy Policy
          </span>
        </Link>
      ),
      content: <></>,
    },
  ];

  return (
    <>
      <div className={"footer"}>
        <div className={"footerLeft"}>
          <div className={"footerBottom"}>
            <div className={"footerInfo"}>
              <div className={"accordion"}>
                {data.map((item, i) => (
                  <div className={"item"} onClick={() => toggle(i)} key={i}>
                    <div className={"title"}>
                      <p>{item.title}</p>
                    </div>
                    <div
                      className={selected === i ? "content show" : "content"}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              <p className={"copyright"}>
                © {new Date().getFullYear()} Stereo Typefaces® <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className={"footerRight"}>
          <div className={"footerNewsletter"}>
            {fulfilled ? (
              <p className={"confirmation"}>
                Thank you for your Registration, {name}!
              </p>
            ) : (
              <>
                <p>
                  Sign up to our newsletter to receive information regarding
                  exclusive font previews, new releases and special events.
                </p>

                <form
                  className={"form"}
                  method="post"
                  onSubmit={handleOnSubmit}
                >
                  <p className={"input"}>
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </p>
                  <hr />
                  <p className={"input"}>
                    <input
                      placeholder="E-Mail Adress"
                      type="email"
                      name="email"
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </p>
                  <hr />
                  <p className={"disclaimer"}>
                    By registering you agree to accept the{" "}
                    <Link href="/general-terms">
                      general terms & conditions
                    </Link>{" "}
                    and have read the Privacy Policy.
                  </p>
                  <button>Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
