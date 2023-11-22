import styles from "../../styles/Checkout.module.css";

const StatusBar = ({
  showCheckoutStep2,
  showCheckoutStep3,
  showCheckoutStep4,
  showCheckoutStep5,
  showCheckoutCustomForm,
  showFontList,
}) => {

  return (
    <div
      className={styles.statusBarWrapper}
      style={showCheckoutStep4 ? { display: "none" } : { display: "block" }}
    >
      <div className={styles.statusBarTopRow}>
        <p
          className={styles.statusBarStep}
          style={{
            opacity:
              showCheckoutStep2 ||
              showCheckoutStep3 ||
              showCheckoutStep4 ||
              showCheckoutStep5 ||
              showCheckoutCustomForm
                ? 0.3
                : 1,
          }}
        >
          Step 1 → License Configuration
        </p>
        <p
          className={styles.statusBarStep}
          style={{
            opacity:
              showFontList &&
              !showCheckoutStep2 &&
              !showCheckoutCustomForm &&
              !showCheckoutStep5
                ? 1
                : 0.3,
          }}
        >
          Step 2 → Typeface Choice
        </p>
        <p
          className={styles.statusBarStep}
          style={{
            opacity: showCheckoutStep2 || showCheckoutCustomForm ? 1 : 0.3,
          }}
        >
          {!showCheckoutCustomForm
            ? "Step 3 → Billing"
            : "Step3 → Custom Licensing"}
        </p>
        <p
          className={styles.statusBarStep}
          style={{
            opacity:
              showCheckoutStep5 || showCheckoutCustomForm || showCheckoutStep3
                ? 1
                : 0.3,
          }}
        >
          {showCheckoutStep5 || showCheckoutCustomForm
            ? "Step 4 → Send Request"
            : "Step 4 → Payment"}
        </p>
      </div>
      <div className={styles.statusBarBG}>
        <div
          className={styles.statusBarInner}
          style={{
            width:
              showFontList &&
              !showCheckoutStep2 &&
              !showCheckoutStep3 &&
              !showCheckoutStep4 &&
              !showCheckoutStep5 &&
              !showCheckoutCustomForm
                ? "25%"
                : showCheckoutStep2 || showCheckoutCustomForm
                ? "50%"
                : showCheckoutStep3
                ? "75%"
                : showCheckoutStep4 || showCheckoutStep5
                ? "calc(100% - 60px)"
                : "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default StatusBar;
