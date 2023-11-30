import { useState, useEffect } from "react";

import ThreeDObject from "../components/ThreeDObject";
import TrialsSingle from "../components/TrialsSingle";

import useWindowDimensions from "../components/Hooks/useWindowDimensions";

const Trialpage = ({ showTrials }) => {
  const [show3Dobject, setShow3Dobject] = useState(false);
  const { windowHeight, windowWidth } = useWindowDimensions();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow3Dobject(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{ width: "100vw", height: windowHeight, background: "black" }}
      onClick={() => setShow3Dobject(true)}
    >
      {show3Dobject && <ThreeDObject windowWidth={windowWidth} />}

      {showTrials && <TrialsSingle />}
    </div>
  );
};

export default Trialpage;
