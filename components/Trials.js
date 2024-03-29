import { useState } from "react";
import styles from "../styles/Trials.module.css";

import Button from "../components/Button";

const Trials = ({ setShowTrials }) => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [fulfilled, setFulfilled] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [check, setCheck] = useState(true);

  const [fadeTrials, setFadeTrials] = useState(false)

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    if (name && mail && checkbox1) {
      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

      fetch("/api/trials", {
        method: "post",
        body: JSON.stringify(formData),
      });
      setFulfilled(true);
      setTimeout(function () {
        setShowTrials(false);
      }, 2500);

      if (checkbox2) {
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
      } else {
        return;
      }
    } else {
      setCheck(false);
      setTimeout(function () {
        setCheck(true);
      }, 100);
      setCheckbox1(true);
      setTimeout(function () {
        setCheckbox1(false);
      }, 100);
      return;
    }
  }

  const clicked = {
    background: "black",
  };

  const unclicked = {
    background: "inherit",
  };

  const checked = {
    letterSpacing: "1px",
  };

  const unchecked = {
    letterSpacing: "3px",
  };

  const fade = {
    opacity: 0
  }

  const notFade = {
    opacity: 1
  }

  const fadeOutTrials = async () => {
    setFadeTrials(true),
    await setTimeout(function(){ setShowTrials(false) }, 300)
  }

  return (
    <>
      <div className={styles.trialsWrapper} style={fadeTrials ? fade : notFade}>
        <div className="buttonsLeftWrapper">
          <Button
            lable={"back"}
            subclass={"secondary"}
            onClick={() => fadeOutTrials(false)}
          />
        </div>
        <div className={styles.form} onClick={() => {}}>
          {!fulfilled ? (
            <>
              <h1>Trials</h1>
              <form
                method="post"
                className={styles.formWrapper}
                onSubmit={(e) => handleOnSubmit(e)}
              >
                <div className={styles.formUpper}>
                  <p className={styles.input}>
                    <input
                      autoFocus="true"
                      placeholder="Name"
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </p>
                  <hr />
                  <p className={styles.input}>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </p>
                  <hr />
                </div>

                <div>
                  <div className={styles.checkboxes}>
                    <span
                      className={styles.checkbox}
                      onClick={() => setCheckbox1(!checkbox1)}
                      style={checkbox1 ? clicked : unclicked}
                    ></span>
                    <p
                      style={!check ? unchecked : checked}
                      onClick={() => setCheckbox1(!checkbox1)}
                    >
                      I agree to Stereo Typefaces’ <a href="">terms of service</a>
                    </p>
                  </div>
                  <div className={styles.checkboxes}>
                    <span
                      className={styles.checkbox}
                      onClick={() => setCheckbox2(!checkbox2)}
                      style={checkbox2 ? clicked : unclicked}
                    ></span>
                    <p onClick={() => setCheckbox2(!checkbox2)}>
                      I would like to stay informed about updates, future
                      releases and special discounts
                    </p>
                  </div>

                  <div className={styles.formLower}>
                    <p className={styles.disclaimer}>
                      Submit your email above to request free trials of all
                      Stereo Typefaces — perfect for trying out and
                      experimenting before purchasing a full license.
                    </p>
                    <div className={styles.buttonWrapper}>
                      <button>Download Trials</button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className={styles.confirmation}>
                <p>
                  Thank you for your Interest, <br />
                  {name}
                  <br />
                  🦄
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Trials;
