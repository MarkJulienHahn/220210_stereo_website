import React from "react";
import styles from "../styles/HeaderAnimation.module.css";

const HeaderAnimationProtest = () => {
  return (
    <>
      <div className={styles.headerAnimationWrapper}>
        <div>
          <div className={styles.row}>
            <p>You Gotta Fight For Your Right To Party You Gotta Fight For Your Right To Party<br/></p>
          </div>
          <div className={styles.row2}>
            <p>For Your Right To Party You Gotta Fight For Your Right To Party You Gotta Fight <br/></p>
          </div>
          <div className={styles.row}>
            <p>You Gotta Fight For Your Right To Party You Gotta Fight For Your Right To Party<br/></p>
          </div>
          <div className={styles.row2}>
            <p>For Your Right To Party You Gotta Fight For Your Right To Party You Gotta Fight<br/></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAnimationProtest;
