import React from 'react'
import styles from '../styles/Coupon.module.css'


const Coupon = () => {


  console.log("coupon")

  return (
    <div contentEditable={true} focus={true} className={styles.couponInput}>
        Coupon
    </div>
  )
}

export default Coupon