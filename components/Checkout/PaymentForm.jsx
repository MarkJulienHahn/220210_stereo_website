import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { commerce } from "../../lib/commerce";

import PaypalCheckoutButton from "./PaypalCheckoutButton";

import styles from "../../styles/Forms.module.css";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
);

const PaymentForm = ({
  checkoutToken,
  shippingData,
  live,
  onCaptureCheckout,
  nextStep,
  setProcessing,
  Processing,
}) => {
  const [AccCreditCard, setAccCreditCard] = useState(false);
  const [AccPayPal, setAccPayPal] = useState(false);

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
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
    }
  };

  const handlePaypalSubmit = async (event, elements, stripe) => {
    setProcessing(true);

    const checkout = await commerce.checkout.generateTokenFrom(
      "cart",
      checkoutToken.cart_id
    );

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
        gateway: "manual",
        manual: {
          id: "gway_Mo1p2z129QLMwN",
        },
      },
    };

    onCaptureCheckout(checkoutToken.id, orderData);
  };

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
                setAccPayPal(true), setAccCreditCard(false);
                // handlePaypal();
              }
        }
        className={styles.paymentInfo}
      >
        <hr />

        <div className={styles.paymentHeader}>PAYPAL</div>

        {AccPayPal ? (
          <PaypalCheckoutButton
            checkoutToken={checkoutToken}
            handlePaypalSubmit={handlePaypalSubmit}
            nextStep={nextStep}
          />
        ) : (
          ""
        )}
        <hr />
      </div>
    </>
  );
};

export default PaymentForm;
