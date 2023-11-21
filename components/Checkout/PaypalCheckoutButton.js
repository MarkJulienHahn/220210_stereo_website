import { useEffect, useRef } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = ({
  checkoutToken,
  handlePaypalSubmit,
  taxable,
  vatRate,
}) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          color: "blue",
          label: "paypal",
          height: 55,
          disableMaxWidth: true,
          tagline: false,
        },
        createOrder: (data, actions, err) => {
          return actions.order.create({
            // intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "EUR",
                  value: taxable
                    ? checkoutToken.live.total.raw +
                      checkoutToken.live.total.raw * vatRate
                    : checkoutToken.live.total.raw,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          await handlePaypalSubmit(checkoutToken.id, order);
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
