import { useState } from "react";
import Button from "../components/Button";

const Newsletter = ({ newsletterResponse }) => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [fulfilled, setFulfilled] = useState(false);

  const hide = () => setTimeout(() => newsletterResponse(), 10000)

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
      hide();
    } else {
      return;
    }
  }

  return (
    <div className="newsletterWrapper">
      {!fulfilled ? (
        <>
          <p>
            Want to stay up-to-date about new releases, special offers or other
            fun stuff? Sign up for our monthly newsletter!
          </p>
          <div>
            <form className={"form"} method="post" onSubmit={handleOnSubmit}>
              <p className={"input"}>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p className={"input"}>
                <input
                  placeholder="E-Mail Adress"
                  type="email"
                  name="email"
                  onChange={(e) => setMail(e.target.value)}
                />
              </p>
              <div className="newsletterButtonWrapper">
                <button
                  className={
                    !mail || !name
                      ? "newsletterSubmitButtonMuted"
                      : "newsletterSubmitButtonActive"
                  }
                >
                  Submit
                </button>
                <div style={{ width: "50%" }}>
                  <Button
                    lable={"No, thanks"}
                    subclass={"quaternary"}
                    onClick={newsletterResponse}
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <p style={{ marginBottom: "var(--margin-M)" }}>
          Thanks for your registration, {name}!
        </p>
      )}
    </div>
  );
};

export default Newsletter;
