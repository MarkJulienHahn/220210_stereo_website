import { useEffect, useRef } from "react";

const PaypalCheckoutButton = ({ checkoutToken, handlePaypalSubmit, total }) => {
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
                  value: total,
                },
              },
            ],
          });
        },

        onApprove: async (data, actions) => {
          const order = await actions.order.capture();

          // Access payer_id and payment_id from the order object
          const payer_id = order.payer.payer_id;
          const payment_id = order.id; // PayPal's payment ID is the order ID in this context

          await handlePaypalSubmit(payer_id, payment_id);
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
