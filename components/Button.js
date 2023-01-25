import React from "react";
import styles from "../styles/Button.module.css";

function Button(props) {
  return (
    props.lable ? (
      <div
        id={props.subclass}
        className={styles.button}
        onClick={props.onClick}
      >
        {props.lable}
      </div>
    ) : ""
  );
}

export default Button;
