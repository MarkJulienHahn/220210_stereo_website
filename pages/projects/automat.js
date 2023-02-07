import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../components/Button";

const elements = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

const Projects = ({ darkMode, dark, setDarkMode }) => {
  const location = useRouter();

  const [alert, showAlert] = useState(false);

  // CREATE / CLEAN

  const [letter01, setLetter01] = useState("");
  const [letter02, setLetter02] = useState("");
  const randomLetter01 = () => {
    setLetter01(elements[Math.floor(Math.random() * elements.length)]);
  };
  const randomLetter02 = () => {
    setLetter02(elements[Math.floor(Math.random() * elements.length)]);
  };
  const clean01 = () => {
    setLetter01("");
  };
  const clean02 = () => {
    setLetter02("");
  };

  // SCALE

  const [size01, setSize01] = useState(1500);
  const [size02, setSize02] = useState(1500);
  const updateSize01 = () => {
    setSize01(Math.random() * 1500 + 1200);
  };
  const updateSize02 = () => {
    setSize02(Math.random() * 1500 + 1200);
  };

  // ROTATE

  const [rotation01, setRotation01] = useState(0);
  const [rotation02, setRotation02] = useState(0);
  const rotate01 = () => {
    setRotation01(rotation01 + 90);
  };
  const rotate02 = () => {
    setRotation02(rotation02 + 90);
  };

  // MANIPULATE

  const [frst01, setFrst01] = useState(0);
  const [scnd01, setScnd01] = useState(0);
  const [frst02, setFrst02] = useState(0);
  const [scnd02, setScnd02] = useState(0);
  const setWeight01 = () => {
    setFrst01(Math.floor(Math.random() * 100)),
      setScnd01(Math.floor(Math.random() * 100));
  };
  const setWeight02 = () => {
    setFrst02(Math.floor(Math.random() * 100)),
      setScnd02(Math.floor(Math.random() * 100));
  };

  // CHANGE STYLE

  const fontStyles = ["AutomatSquare", "AutomatRound", "AutomatSpike"];
  const [indx01, setIndx01] = useState(0);
  const [indx02, setIndx02] = useState(0);
  const updateFontStyle01 = () => {
    indx01 == fontStyles.length - 1 ? setIndx01(0) : setIndx01(indx01 + 1);
  };
  const updateFontStyle02 = () => {
    indx02 == fontStyles.length - 1 ? setIndx02(0) : setIndx02(indx02 + 1);
  };

  // RANDOM

  const random01 = () => {
    randomLetter01(), updateSize01(), setWeight01();
  };
  const random02 = () => {
    randomLetter02(), updateSize02(), setWeight02();
  };

  //   INVERT
  const [dayNight, setDayNight] = useState(false);
  const invert = () => {
    setDayNight(!dayNight);
  };

  const elementStyle01 = {
    fontFamily: fontStyles[indx01],
    fontSize: `${size01}px`,
    fontVariationSettings: `"frst" ${frst01}, "scnd" ${scnd01}`,
    transform: `rotate(${rotation01}deg)`,
  };

  const elementStyle02 = {
    fontFamily: fontStyles[indx02],
    fontSize: `${size02}px`,
    fontVariationSettings: `"frst" ${frst02}, "scnd" ${scnd02}`,
    transform: `rotate(${rotation02}deg)`,
  };

  const day = {
    color: "black",
    background: "#f0f1ec",
  };

  const night = {
    background: "black",
    color: "#f0f1ec",
  };

  return (
    <main style={darkMode ? dark : {}}>
      <Head>
        <title>Automat | Stereo Typefaces&#x2122;</title>
      </Head>

      <div className="buttonsLeftWrapper" scroll={false}>
        <Button
          lable={"Leave Automat"}
          subclass={"tertiary"}
          onClick={showAlert}
        />
      </div>

      <div className="buttonsRightWrapper">
        {/* <div
          className="lightBulb"
          style={{
            fontSize: "17pt",
            paddingRight: "10px",
            cursor: "pointer",
            opacity: darkMode ? 0.5 : 1,
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          💡
        </div>        */}
        <Button
          lable={darkMode ? "Light" : "Dark"}
          subclass={!darkMode ? "secondary" : "quaternary"}
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>

      {alert && (
        <div className="automatAlertWrapper">
          <div className="automatAlertInner">
            <p>You are leaving Automat. All changes will be lost. Continue?</p>
            <div className="automatAlertButtonWrapper">
              <div className="automatAlertButton">
                <Button
                  lable={"Stay"}
                  subclass={"primary"}
                  onClick={() => showAlert(false)}
                />
              </div>
              <div className="automatAlertButton">
                <Link href="/projects" scroll={false}>
                  <a>
                    <Button lable={"Leave Automat"} subclass={"quaternary"} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="automatButtonsWrapper">
        <div>
          <div className="automatButtonsRow">
            <Button
              subclass={letter01 ? "secondary" : "primary"}
              lable={"Create"}
              onClick={randomLetter01}
            />
            <Button
              subclass={letter01 ? "secondary" : "quaternaryMuted"}
              lable={"Scale"}
              onClick={letter01 ? updateSize01 : () => {}}
            />
            <Button
              subclass={letter01 ? "secondary" : "quaternaryMuted"}
              lable={"Rotate"}
              onClick={letter01 ? rotate01 : () => {}}
            />
            <Button
              subclass={letter01 ? "secondary" : "quaternaryMuted"}
              lable={"Manipulate"}
              onClick={letter01 ? setWeight01 : () => {}}
            />
            <Button
              subclass={letter01 ? "secondary" : "quaternaryMuted"}
              lable={"Change Style"}
              onClick={letter01 ? updateFontStyle01 : () => {}}
            />
            <Button
              subclass={letter01 ? "secondary" : "quaternaryMuted"}
              lable={"Random"}
              onClick={letter01 ? random01 : () => {}}
            />
            <Button
              subclass={letter01 ? "quaternary" : "quaternaryMuted"}
              lable={"Clean"}
              onClick={clean01}
            />
          </div>
          <div className="automatButtonsRow" id="automatButtonsRowDesktop">
            <Button
              subclass={dayNight ? "secondary" : "quaternary"}
              lable={"Invert"}
              onClick={invert}
            />
          </div>
        </div>
        <div className="automatButtonsRow">
          <Button
            subclass={letter02 ? "secondary" : "primary"}
            lable={"Create"}
            onClick={randomLetter02}
          />
          <Button
            subclass={letter02 ? "secondary" : "quaternaryMuted"}
            lable={"Scale"}
            onClick={letter02 ? updateSize02 : () => {}}
          />
          <Button
            subclass={letter02 ? "secondary" : "quaternaryMuted"}
            lable={"Rotate"}
            onClick={letter02 ? rotate02 : () => {}}
          />
          <Button
            subclass={letter02 ? "secondary" : "quaternaryMuted"}
            lable={"Manipulate"}
            onClick={letter02 ? setWeight02 : () => {}}
          />
          <Button
            subclass={letter02 ? "secondary" : "quaternaryMuted"}
            lable={"Change Style"}
            onClick={letter02 ? updateFontStyle02 : () => {}}
          />
          <Button
            subclass={letter02 ? "secondary" : "quaternaryMuted"}
            lable={"Random"}
            onClick={letter02 ? random02 : () => {}}
          />
          <Button
            subclass={letter02 ? "quaternary" : "quaternaryMuted"}
            lable={"Clean"}
            onClick={clean02}
          />
          <div className="automatButtonsRow" id="automatButtonsRowMobile">
            <Button
              subclass={dayNight ? "secondary" : "quaternary"}
              lable={"Invert"}
              onClick={invert}
            />
          </div>
        </div>
      </div>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <main className="automatToolWrapper">
            <div className="target" id="capture">
              <div
                className="automatToolContainerhf"
                style={dayNight ? night : day}
              >
                <div className="automatToolContent_01">
                  <p style={elementStyle01}>{letter01}</p>
                </div>

                <div className="automatToolContent_02">
                  <p style={elementStyle02}>{letter02}</p>
                </div>
              </div>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Projects;
