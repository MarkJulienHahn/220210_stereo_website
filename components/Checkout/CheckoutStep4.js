import Button from "../Button";
import Styles from "../../styles/Checkout.module.css";

import { useRouter } from "next/router";

const CheckoutStep4 = ({ refreshCart, setShowCheckout, shippingData }) => {
  const endCheckout = () => {
    refreshCart();
    setShowCheckout(false);
  };

  const router = useRouter();

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
          onClick={() => router.push("/")}
        />
      </div>
    </>
  );
};

export default CheckoutStep4;
