import { useState } from "react";

import Link from "next/link";

const BetaSignupForm = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [project, setProject] = useState();
  const [fulfilled, setFulfilled] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    if (name && mail) {
      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    //   fetch("/api/newsletter", {
    //     method: "post",
    //     body: JSON.stringify(formData),
    //   });
      fetch("/api/betaConfirmation", {
        method: "post",
        body: JSON.stringify(formData),
      });
      fetch("/api/beta", {
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
            Thank you for your registration, {name}! You will hear from us soon! 👋
          </p>
        ) : (
          <>
            <p>
              In our <span className="highlight03">beta program</span> we grant access to{" "}
              <span className="highlight01">fully functional versions of yet unreleased fonts</span> before their official release. If you are interested in applying for the beta program, simply fill out the following form.
            </p>

            <form className={"form"} method="post" onSubmit={handleOnSubmit}>
              <div className="premiumInputWrapper">
                <p className={"inputBeta"}>
                  <input
                    placeholder="Agency / Designer*"
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
                <p className={"inputBeta"}>
                  <input
                    placeholder="Specific Project?"
                    type="text"
                    name="project"
                    onChange={(e) => setProject(e.target.value)}
                  />
                </p>
              </div>
              <p className={"disclaimer"}>
                By pressing »Apply« you agree to our{" "}
                <Link href="/general-terms">general terms & conditions</Link>{" "}
                and have understood our trial use agreement.
              </p>
              <button>Apply</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BetaSignupForm;
