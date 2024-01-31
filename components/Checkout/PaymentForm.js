import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { commerce } from "../../lib/commerce";

import PaypalCheckoutButton from "./PaypalCheckoutButton";
import Button from "../Button";

import styles from "../../styles/Forms.module.css";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
);

const appearance = {
  theme: "stripe",

  variables: {
    colorPrimary: "#0570de",
    colorBackground: "#ffffff",
    colorText: "#30313d",
    colorDanger: "#df1b41",
    fontFamily: "Ideal Sans, system-ui, sans-serif",
    spacingUnit: "2px",
    borderRadius: "4px",
    // See all possible variables below
  },
};

// Pass the appearance object to the Elements instance

const PaymentForm = ({
  checkoutToken,
  shippingData,
  live,
  onCaptureCheckout,
  nextStep,
  setProcessing,
  Processing,
  taxable,
}) => {
  const [AccCreditCard, setAccCreditCard] = useState(false);
  const [AccPayPal, setAccPayPal] = useState(false);
  const [total, setTotal] = useState(null);

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);



    // await fetch("/api/tax", {
    //   method: "post",
    //   body: JSON.stringify(checkoutToken.id),
    // });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          company: shippingData.company,
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
          // vatID: shippingData.
        },
        shipping: {
          name: "International",
          street: shippingData.address1,
          town_city: shippingData.city,
          // county_state: taxable ? shippingData.shippingSubdivision : "CH-ZH",
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          // country: taxable ? shippingData.shippingCountry : "CH",
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
        company: shippingData.company,
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
    padding: "0 20px 1px 20px",
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

      <div className={styles.paymentInfo}>
        <div className={styles.paymentButtonsWrapper}>
          <div className={styles.paymentButton}>
            <Button
              lable="Credit Card"
              onClick={
                AccCreditCard
                  ? () => setAccCreditCard(false)
                  : () => {
                      setAccCreditCard(true), setAccPayPal(false);
                    }
              }
              subclass={AccCreditCard ? "secondary" : "quaternary"}
            />
          </div>
          <div className={styles.paymentButton}>
            <Button
              lable="PayPal"
              onClick={
                AccPayPal
                  ? () => {
                      setAccPayPal(false), setAccCreditCard(false);
                    }
                  : () => {
                      setAccPayPal(true), setAccCreditCard(false);
                      // handlePaypal();
                    }
              }
              subclass={AccPayPal ? "secondary" : "quaternary"}
            />
          </div>
        </div>

        {/* STRIPE */}

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

        {/* PAYPAL */}

        <div
          onClick={
            AccPayPal
              ? () => setAccPayPal(false)
              : () => {
                  setAccPayPal(true), setAccCreditCard(false);
                  // handlePaypal();
                }
          }
          className={styles.payPalWrapper}
        >
          {AccPayPal ? (
            <PaypalCheckoutButton
              checkoutToken={checkoutToken}
              handlePaypalSubmit={handlePaypalSubmit}
              nextStep={nextStep}
              total={total}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
