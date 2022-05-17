import { useState } from "react";
import styles from "../styles/Trials.module.css";

import Button from "../components/Button";

const Trials = ({ setShowTrials }) => {
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

      fetch("/api/trials", {
        method: "post",
        body: JSON.stringify(formData),
      });
      setFulfilled(true);
      setTimeout(function () {
        setShowTrials(false);
      }, 2500);
    } else {
      // console.log("nothing");
      return;
    }
  }

  return (
    <>
      <div className={styles.trialsWrapper}>
        <div className={styles.form} onClick={() => {}}>
          {!fulfilled ? (
            <>
              <h1>Trials</h1>
              <form
                method="post"
                className={styles.formWrapper}
                onSubmit={handleOnSubmit}
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
                      placeholder="E-Mail Adress"
                      type="email"
                      name="email"
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </p>
                  <hr />
                </div>

                <div className={styles.formLower}>
                  <p className={styles.disclaimer}>
                    Submit your email above to request free trials of all STEREO
                    Typefaces — perfect for trying out and experimenting before
                    purchasing a full license.
                    <br />
                    <br />
                    By downloading and/or installing KOMETA Trial Fonts, you
                    acknowledge that you have read and accepted the terms of our
                    EULA.
                  </p>
                  <div className={styles.buttonWrapper}>
                    <button>Download Trials</button>
                    <div></div>
                  </div>
                </div>
              </form>
              <div className="buttonsLeftWrapper">
                <Button
                  lable={"back"}
                  subclass={"secondary"}
                  onClick={() => setShowTrials(false)}
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.confirmation}>
                <p>Thank you for your Interest, <br/>{name}<br/>{`<3`}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Trials;
