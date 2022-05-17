import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  console.log(props.product.total.raw);
  //   const price = checkoutToken.products.live.total.raw

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    // Call backendfunction to fulfill order

    // if respnse is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if the response is error
    // setError("Description of the Error")
  };

  if (paidFor) {
    const orderData = {
      line_items: props.checkoutToken.live.line_items,
      customer: {
        firstname: props.shippingData.firstName,
        lastname: props.shippingData.lastName,
        email: props.shippingData.email,
      },
      shipping: {
        name: "International",
        street: props.shippingData.address1,
        town_city: props.shippingData.city,
        county_state: props.shippingData.shippingSubdivision,
        postal_zip_code: props.shippingData.zip,
        country: props.shippingData.shippingCountry,
      },
      fulfillment: { shipping_method: props.shippingData.shippingOption },
      payment: {
        gateway: "paypal",
        paypal: {
          action: "authorize",
        },
      },
    };

    props.onCaptureCheckout(props.checkoutToken.id, orderData);
    props.nextStep();
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 25,
        tagline: false,
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: props.product.total.raw,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onCancel={() => {}}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout Error");
      }}
    />
  );
};

export default PaypalCheckoutButton;
