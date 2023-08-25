import Button from "../Button";
import styles from "../../styles/Checkout.module.css";

const CheckoutStep5 = ({ fadeOutCheckout }) => {
  

  return (
    <div style={{paddingTop: "86px"}}>
      <div className={styles.confirmation}>
        Thanks, your request has been sent. ✨<br />
        We will get back to you as soon as possible.
      </div>

      <div className="buttonsRightWrapper">
        <Button
          lable={"Back to the Shop"}
          subclass={"primary"}
          onClick={() => fadeOutCheckout()}
        />
      </div>
    </div>
  );
};

export default CheckoutStep5;
