import React from "react";
import styles from "../styles/Waterfall.module.css";

const WaterfallProtest = () => {
  return (
    <div className={styles.waterfallWrapper}>
      <div className={styles.waterfallSingle}>TEST</div>
      <div className={styles.waterfallRow}>
        <div className={styles.waterfallElement}>TEST</div>
        <div className={styles.waterfallElement}>TEST</div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={styles.waterfallElement}>TEST</div>
        <div className={styles.waterfallElement}>TEST</div>
      </div>
    </div>
  );
};

export default WaterfallProtest;
