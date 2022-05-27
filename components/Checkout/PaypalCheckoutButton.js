import { useEffect, useRef } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = ({
  product,
  checkoutToken,
  handlePaypalSubmit,
  nextStep,
  onCapturePaypalCheckout,
  shippingData,
  getPaypalPaymentId,
}) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            // intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "EUR",
                  value: checkoutToken.live.total.raw,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          await handlePaypalSubmit(checkoutToken.id, order);

          nextStep();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PaypalCheckoutButton;
