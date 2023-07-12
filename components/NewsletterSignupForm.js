import { useState } from "react";

import Link from "next/link";

const NewsletterSignupForm = () => {
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
    <div className={"footerCentered"}>
      <div className={"footerNewsletter"}>
        {fulfilled ? (
          <p className={"confirmation"}>
            Thank you for your Registration, {name}!
          </p>
        ) : (
          <>
            <p>
              Sign up to our <span className="highlight01">newsletter</span> to receive information regarding{" "}
              <span className="highlight03">exclusive font previews</span>,{" "}
              <span className="highlight03">new releases</span> and{" "}
              <span className="highlight03">special events</span>.
            </p>

            <form className={"form"} method="post" onSubmit={handleOnSubmit}>
              <div className="premiumInputWrapper">
                <p className={"inputBeta"}>
                  <input
                    placeholder="Name*"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p className={"inputBeta"}>
                  <input
                    placeholder="E-Mail Adress*"
                    type="email"
                    name="email"
                    onChange={(e) => setMail(e.target.value)}
                  />
                </p>
              </div>
              <p className={"disclaimer"}>
                By registering you agree to accept the{" "}
                <Link href="/general-terms">general terms & conditions</Link>{" "}
                and have read the Privacy Policy.
              </p>
              <button>Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignupForm;
