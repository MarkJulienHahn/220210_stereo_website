import React, {useState} from 'react';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import styles from '../../styles/Forms.module.css';

import Button from '../../components/Button'

import Review from './Review';

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);

const PaymentForm = ( { products, cart, checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep } ) => {

  const [CreditCard, setCreditCard] = useState(false);

  const handleCreditCard = (val) => {
    setCreditCard(val)
  }

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });


        if(error) {
            console.log(error);
        } else {
            const orderData = {
              line_items: checkoutToken.live.line_items,
              customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
              shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
              fulfillment: { shipping_method: shippingData.shippingOption },
              payment: {
                gateway: 'stripe',
                stripe: {
                  payment_method_id: paymentMethod.id,
                },
              },
            };
      
            onCaptureCheckout(checkoutToken.id, orderData);
      
            nextStep();
            console.log(orderData, shippingData); 
          }
        };

      const inactive = {
        height: "0px",
        opacity: "0",
        padding: "0 20px 10px 20px"
      }

      const active = {
        height: "auto",
        opacity: "1",
        padding: "20px"
      }


    return (
        <>
          <div className={styles.paymentInfo}>
            <hr/>
            <div className={styles.paymentHeader} onClick={CreditCard ? () => handleCreditCard(false) : () => handleCreditCard(true)}>CREDIT CARD</div>

            <div className={styles.paymentWrapper} style={CreditCard ? active : inactive}>
              <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => (
                          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <button className={styles.payButton} type="submit" disabled={!stripe} >
                                Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                            </button>
                          </form>
                        )}
                    </ElementsConsumer>
              </Elements>
            </div>

            <hr/>
           </div>
           <div className={styles.paymentHeader}>PAY PAL</div>

            <div className={styles.paymentWrapper} style={inactive}>
              <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => (
                          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <button className={styles.payButton} type="submit" disabled={!stripe} >
                                Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                            </button>
                          </form>
                        )}
                    </ElementsConsumer>
              </Elements>
              <hr/>
            </div>



           
        </>
    )
}

export default PaymentForm
