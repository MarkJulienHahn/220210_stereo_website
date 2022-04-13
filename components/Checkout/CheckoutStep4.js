import React from 'react'

import PaymentForm from './PaymentForm';
import Button from '../Button'

import styles from '../../styles/Buy.module.css';


const CheckoutStep4 = ( {setShowCheckout, setShowCheckoutStep2, checkoutToken, products, cart, nextStep, shippingData, onCaptureCheckout} ) => {

  return (
    <>            

      <div>Thx for your Order {shippingData.firstName}</div>

      <div className="buttonsLeftWrapper">
          <Button lable={"Continue Shopping"} subclass={"secondary"} onClick={() => setShowCheckout(false)} />          
      </div> 
    </>
  )
}

export default CheckoutStep4