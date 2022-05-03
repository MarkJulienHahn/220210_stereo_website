import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import styles from "../../styles/Forms.module.css";
import { render } from "react-dom";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
);

const PaymentForm = ({
  checkoutToken,
  shippingData,
  live,
  onCaptureCheckout,
  getPaypalPaymentId,
  nextStep,
}) => {
  const [AccCreditCard, setAccCreditCard] = useState(false);
  const [AccPayPal, setAccPayPal] = useState(false);
  const [Processing, setProcessing] = useState(false);

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    console.log(Processing);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "International",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);
      setProcessing(false);
      nextStep();
    }
  };

  function renderPaypalButton(paypalAuth) {
    paypal.Button.render(
      {
        env: "sandbox", // Or 'sandbox',
        commit: true, // Show a 'Pay Now' button
        payment: function () {
          return paypalAuth.payment_id; // The payment ID from earlier
        },
        onAuthorize: function (data, actions) {
          // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
          captureOrder(data);
        },
        onCancel: function (data, actions) {
          // Handler if customer does not authorize payment
        },
      },
      "#paypal-button-container"
    );
  }

  const handlePaypal = () => {
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: "International",
        street: shippingData.address1,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubdivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.shippingCountry,
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
      payment: {
        gateway: "paypal",
        paypal: {
          action: 'authorize',
        },
      },
    };
    getPaypalPaymentId(checkoutToken.id, orderData);
  };

  useEffect(() => {
    renderPaypalButton();
  }, []);

  const inactive = {
    height: "0px",
    opacity: "0",
    padding: "0 20px 10px 20px",
  };

  const active = {
    height: "auto",
    opacity: "1",
    padding: "20px",
  };

  const visible = {
    display: "flex",
  };

  const invisible = {
    display: "none",
  };

  return (
    <>
      <div
        style={Processing ? visible : invisible}
        className={styles.loadingWrapper}
      >
        processing...
      </div>

      <div
        onClick={
          AccCreditCard
            ? () => setAccCreditCard(false)
            : () => {
                setAccCreditCard(true), setAccPayPal(false);
              }
        }
        className={styles.paymentInfo}
      >
        <hr />
        <div className={styles.paymentHeader}>CREDIT CARD</div>

        <div
          className={styles.paymentWrapper}
          style={AccCreditCard ? active : inactive}
        >
          <div
            style={
              AccCreditCard
                ? { pointerEvents: "auto" }
                : { pointerEvents: "none" }
            }
          >
            <Elements stripe={stripePromise}>
              <ElementsConsumer>
                {({ elements, stripe }) => (
                  <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                    <CardElement />
                    <button
                      className={styles.payButton}
                      type="submit"
                      disabled={!stripe}
                    >
                      Pay EUR {live.total.formatted}
                    </button>
                  </form>
                )}
              </ElementsConsumer>
            </Elements>
          </div>
        </div>
      </div>

      <div
        onClick={
          AccPayPal
            ? () => setAccPayPal(false)
            : () => {
                setAccPayPal(true), setAccCreditCard(false), handlePaypal();
              }
        }
        className={styles.paymentInfo}
      >
        <hr />

        <div className={styles.paymentHeader}>PAYPAL</div>

        <div
          className={styles.paymentWrapper}
          style={AccPayPal ? active : inactive}
        >
          <div id="paypal-button-container"></div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default PaymentForm;
