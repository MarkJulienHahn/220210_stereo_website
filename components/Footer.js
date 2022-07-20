import { useState } from "react";

const Contact = () => {
  return (
    <>
      CONTACT US
      <br />
      <br />
      <br />
      <br />
      Customer service support, inquiries related to: prices and currency, order
      and preorder payment, custom inquiries or collaborations.
      <br />
      <br />
      <br />
      <br />
      CALL <br />
      +49 1520 3569305
      <br />
      <br />
      EMAIL
      <br />
      Send us a message{" "}
      <a href="mailto::info@stereotypefaces.com">info@stereotypefaces.com</a>.
      We’ll reply within 24 hours. <br />
      <br />
      WORKING HOURS
      <br />
      Available Mon-Fri 9am-6.00pm (GMT+2)
    </>
  );
};

const LegalNotice = () => {
  return (
    <>
      LEGAL NOTICE
      <br />
      <br />
      <br />
      <br />
      Stereo Typefaces GbR
      <br />
      <br />
      Groninger Straße 48
      <br />
      13347 Berlin
      <br />
      Germany
      <br />
      <br />
      <br />
      <br />
      Managing directors: <br></br>Mark Julien Hahn, Jan Robert Obst
      <br />
      <br />
      Company register + VAT number: <br />
      CHE-382.487.408 <br></br>Company headquarters: <br />
      Berlin, Germany
      <br />
      <br />
      <br />
      <br />
      Designed and developed by:
      <br />
      Stereo Typefaces
      <br />
      <br />
      Typeface used on this website:
      <br />
      Protest Grotesk Variable
      <br />
      Giallo Roman Variable
      <br />
      Giallo Mono Variable
      <br />
      <br />
      <br />© {new Date().getFullYear()} Stereo Typefaces™. The content of this
      website is protected by copyright. All rights are reserved to Stereo
      Typefaces GbR or its partner companies (suppliers, providers,
      manufacturers, etc.). Any use of the content of this site is only
      permitted with the express permission of Dinamo GmbH.
    </>
  );
};

const Footer = () => {
  const [contact, showContact] = useState(false);
  const [legalNotice, showLegalNotice] = useState(false);

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
      // console.log("nothing");
      return;
    }
  }

  return (
    <div className={"footer"}>
      <div className={"footerTop"}>
        {contact ? <Contact /> : ""}
        {legalNotice ? <LegalNotice /> : ""}
      </div>

      <div className={"footerBottom"}>
        <div className={"footerInfo"}>
          <p
            onClick={() => {
              showContact(!contact);
              showLegalNotice(false);
            }}
          >
            Contact us
          </p>
          <p>FAQs</p>
          <p>Licensing</p>
          <p>Payment Methods</p>
          <p>
            <br />
          </p>
          <p
            onClick={() => {
              showLegalNotice(!legalNotice);
              showContact(false);
            }}
          >
            Legal Notice
          </p>
          <p>Privacy Policy</p>
          <p>
            <br />
            <br />
            <br />
          </p>
          <p className={"copyright"}>
            © {new Date().getFullYear()} Stereo Typefaces™ <br />
            All rights reserved.
          </p>
        </div>

        <div className={"footerNewsletter"}>
          {fulfilled ? (
            <p className={"confirmation"}>
              Thank you for your Registration, {name}!
            </p>
          ) : (
            <>
              <p>
                Sign up to our newsletter to receive information regarding
                exclusive font previews, new releases, special events, and
                seasonal sale offers.
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
                  By registering you agree to accept the Terms & Conditions and
                  have read the Privacy Policy.
                </p>
                <button>Submit</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
