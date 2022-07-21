import { ToggleOff } from "@material-ui/icons";
import { dataCollector } from "braintree-web";
import { useState, useRef, useEffect } from "react";

const Contact = () => {
  return (
    <div className={"footerContent"}>
      Customer service support, inquiries related to: prices and currency, order
      and preorder payment, custom inquiries or collaborations.
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
    </div>
  );
};

const LegalNotice = () => {
  return (
    <div className={"footerContent"}>
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
      <br />© {new Date().getFullYear()} Stereo Typefaces™. The content of this
      website is protected by copyright. All rights are reserved to Stereo
      Typefaces GbR or its partner companies (suppliers, providers,
      manufacturers, etc.). Any use of the content of this site is only
      permitted with the express permission of Dinamo GmbH.
    </div>
  );
};

const Footer = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    
    setSelected(i)
  }

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

  return (
    <>
      <div className={"footer"}>
        <div className={"footerLeft"}>
          <div className={"footerBottom"}>
            <div className={"footerInfo"}>
                <div className={"accordion"}>
                  {data.map((item, i) => (
                    <div className={"item"} onClick={() => toggle(i)}>
                      <div className={"title"} >
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
                © {new Date().getFullYear()} Stereo Typefaces™ <br />
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
                    By registering you agree to accept the Terms & Conditions
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

const data = [
  {
    title: "Contact Us",
    content:
      "Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.<br/>CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2)",
  },
  {
    title: "Licensing",
    content:
      "Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2) Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2)",
  },
  {
    title: "FAQs",
    content:
      "Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2) Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2)Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2) Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2) Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2) Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2)",
  },
  {
    title: "Payment Methods",
    content:
      "Customer service support, inquiries related to: prices and currency, order and preorder payment, custom inquiries or collaborations.CALL +49 1520 3569305 EMAIL Send us a message info@stereotypefaces.com. We’ll reply within 24 hours. WORKING HOURS Available Mon-Fri 9am-6.00pm (GMT+2)",
  },
  {
    title: "Legal Notice",
    content:
      "© 2022 Stereo Typefaces™. The content of this website is protected by copyright. All rights are reserved to Stereo Typefaces GbR or its partner companies (suppliers, providers, manufacturers, etc.). Any use of the content of this site is only permitted with the express permission of Stereo Typefaces Gbr.",
  },
  {
    title: "Privacy Policy",
    content:
      "© 2022 Stereo Typefaces™. The content of this website is protected by copyright. All rights are reserved to Stereo Typefaces GbR or its partner companies (suppliers, providers, manufacturers, etc.). Any use of the content of this site is only permitted with the express permission of Stereo .",
  },
];

export default Footer;
