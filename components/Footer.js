import { useState } from "react";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
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
    <div className={Styles.footer}>
      <div className={Styles.footerInfo}>
        <p>Contact us</p>
        <p>FAQs</p>
        <p>Licensing</p>
        <p>Payment Methods</p>
        <p>
          <br />
        </p>
        <p>Imprint</p>
        <p>Privacy Policy</p>
        <p>
          <br />
        </p>
        <p>
          © {new Date().getFullYear()} Stereo Typefaces™ <br />
          All rights reserved.
        </p>
      </div>

      <div className={Styles.footerNewsletter}>
        {fulfilled ? (
          <p className={Styles.confirmation}>Thank you for your Registration, {name}!</p>
        ) : (
          <>
            <p>
              Sign up to our newsletter to receive information regarding
              exclusive font previews, new releases, special events, and
              seasonal sale offers.
            </p>

            <form
              className={Styles.form}
              method="post"
              onSubmit={handleOnSubmit}
            >
              <p className={Styles.input}>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <hr />
              <p className={Styles.input}>
                <input
                  placeholder="E-Mail Adress"
                  type="email"
                  name="email"
                  onChange={(e) => setMail(e.target.value)}
                />
              </p>
              <hr />
              <p className={Styles.disclaimer}>
                By registering you agree to accept the Terms & Conditions and
                have read the Privacy Policy.
              </p>
              <button>Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
