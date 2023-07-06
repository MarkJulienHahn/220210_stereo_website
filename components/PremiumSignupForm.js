import { useState } from "react";

import Link from "next/link";

const PremiumSignupForm = () => {
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
      fetch("/api/premiumConfirmation", {
        method: "post",
        body: JSON.stringify(formData),
      });
      fetch("/api/premium", {
        method: "post",
        body: JSON.stringify(formData),
      });
      setFulfilled(true);
    } else {
      return;
    }
  }

  return (
    <div className={"footerRight"}>
      <div className={"footerNewsletter"}>
        {fulfilled ? (
          <p className={"confirmation"}>
            Thank you for your registration, {name}! You will hear from us soon! 👋
          </p>
        ) : (
          <>
            <p>
              Our <span className="highlight03">exclusive program</span> offers
              selected agencies and designers the opportunity to gain access to{" "}
              <span className="highlight01">complete trial versions</span> of
              our typefaces, allowing them to thoroughly test them for potential
              project applications. If you are interested in applying for the
              exclusive program or would like to test a full version of any of
              our typefaces, simply fill out the following form.
            </p>

            <form className={"form"} method="post" onSubmit={handleOnSubmit}>
              <div className="premiumInputWrapper">
                <p className={"inputPremium"}>
                  <input
                    placeholder="Agency / Designer*"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p className={"inputPremium"}>
                  <input
                    placeholder="E-Mail Adress*"
                    type="email"
                    name="email"
                    onChange={(e) => setMail(e.target.value)}
                  />
                </p>
                <p className={"inputPremium"}>
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

export default PremiumSignupForm;
