import React from 'react';
import styles from '../styles/Buy.module.css';
import Button from '../components/Button'


const Buy = () => {
  return (
      <div className={styles.buyWrapper}>

        <div className="buttonsLeftWrapper">


        </div> 

        <div className="buttonsRightWrapper">
            <Button 
                lable={"Checkout"} 
                subclass={"primary"} 
            /> 
            <Button lable={"Cart (0)"}/>    
        </div> 

      </div>
  )
};

export default Buy;
