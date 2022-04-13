import React from 'react'

import AddressForm from './AddressForm';
import Button from '../Button'

import styles from '../../styles/Buy.module.css';


const CheckoutStep2 = ( {setShowCheckoutStep1, setShowCheckoutStep2, checkoutToken, products, cart, next} ) => {

  return (
    <>            

      <div className="buttonsLeftWrapper">
        <Button 
            lable={"Back to Overview"} 
            onClick={cart.line_items.length  || "" ? () => {setShowCheckoutStep2(false), setShowCheckoutStep1(true)} : () => {}}
            subclass={"secondary"} 
        />     
      </div> 

      <p className={styles.buyHead}> [ 3 ] ORDER REVIEW</p>

      <div className={styles.formsWrapper}>
        <div className={styles.overviewTable}>
          <div className={styles.overviewWrapper}>

            {cart.line_items.map((item) => (
              <>
                <div className={styles.productWrapperOverview}>

                  <span className={styles.cartItem}>
                  —   {item.name}<br/>
                    <span className={styles.licenceType}>
                      {products.find(el => el.name === item.name).licence}
                    </span>
                  </span>

                  <span className={styles.productPrice}>
                    EUR {item.line_total.raw}
                  </span>
                </div>

              </>
            ))}

            <div className={styles.total}>
              <span>{ cart.line_items.length || "" ? "Total (incl. Tax)" : ""}</span>
              <span>{ cart.line_items.length  || "" ? `EUR ${cart.subtotal.raw}` : ""}</span>
            </div>

          </div>
        </div>

        <div className={styles.formTable}>

          <p className={styles.buyHead}> [ 4 ] BILLING INFORMATION</p>

          <div className={styles.buyTableContent}>
                  
            <AddressForm checkoutToken={checkoutToken} next={next}/>

          </div>

        </div>
      </div>
    </>
  )
}

export default CheckoutStep2