import React, { useState, useEffect } from "react";
import styles from "../styles/Button.module.css";

const MouseButton = (props) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  const mouseElement = {
    position: "fixed",
    top: y,
    left: x,
    visibility: props.lable ? "visible" : "hidden",
    background: props.background ? props.background : "var(--tertiary)"
  };

  const mouseElementAnimated = {
    position: "fixed",
    top: y,
    left: x,
    visibility: props.lable ? "visible" : "hidden",
    // animation: "fontAnimation 0.3s infinite alternate",
    background: "var(--primary)",

  };

  return (
    <>
      {!props.animated ? (
        <div
          className={styles.hoverButton}
          style={mouseElement}
        >
          {props.lable}
        </div>
      ) : (
        <div
          className={styles.hoverButton}
          style={mouseElementAnimated}
        >
          <span>C</span>
          <span>A</span>
          <span>L</span>
          <span>C</span>
          <span>U</span>
          <span>L</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      )}
    </>
  );
};

export default MouseButton;
