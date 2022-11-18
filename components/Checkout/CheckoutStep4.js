import Button from "../Button";
import Styles from "../../styles/Checkout.module.css";

const CheckoutStep4 = ({ refreshCart, setShowCheckout, shippingData }) => {
  const endCheckout = () => {
    refreshCart();
    setShowCheckout(false);
  };

  return (
    <>
      <div className={Styles.confirmation}>
        Thank you, {shippingData.firstName}. Your order was successful. ✨<br />
        Please check your mailbox to download your files!
      </div>

      <div className="buttonsRightWrapper">
        <Button
          lable={"Back to the Shop"}
          subclass={"primary"}
          onClick={() => setShowCheckout()}
        />
      </div>
    </>
  );
};

export default CheckoutStep4;
