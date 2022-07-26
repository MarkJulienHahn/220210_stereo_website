import { useState, useEffect } from 'react'
import styles from '../styles/Coupon.module.css'

import Button from '../components/Button'


const Coupon = ( { checkoutToken, setShowCoupon, handleCouponCode, getLiveObject } ) => {

  const [value, setValue] = useState();
  const [result, setResult] = useState(false);

  const updateValue = () => {
    setValue(value);
  }

  const submitCode = async (first, second) => {
    setResult(true)
    await handleCouponCode(first, second)
    await getLiveObject(checkoutToken.id);
    setShowCoupon(false);
    setValue(false);
  }

  useEffect(() => {
      updateValue();
      return () => {
        setValue({})
      }
  }, [value]);


  return (
    <>
      <div className={styles.couponInput}>

        <div className={styles.buttonsRightWrapper}>
            <Button lable={"Back"} subclass={"quaternary"} onClick={() => setShowCoupon(false)} />   
            <Button 
                lable={"Submit"} 
                subclass={!value ? "quaternary" : "primary"} 
                onClick={value ? () => { submitCode(checkoutToken.id, value) } : () => {}}
            />   
        </div>
        { !result
        
        ? 
        
        <input autoFocus placeholder="discount code" value={value} onChange={(e) => setValue(e.target.value)}></input>

        :

        <div className={styles.couponInput}>
          checking...
        </div>

        }
      </div>



    </>
  )
}

export default Coupon