import Button from "../Button";

const CheckoutStep4 = ({ setShowCheckout, shippingData }) => {
  return (
    <>
      <div>Thx for your Order {shippingData.firstName}</div>

      <div className="buttonsLeftWrapper">
        <Button
          lable={"Continue Shopping"}
          subclass={"secondary"}
          onClick={() => setShowCheckout(false)}
        />
      </div>
    </>
  );
};

export default CheckoutStep4;
