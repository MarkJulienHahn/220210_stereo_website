import React from 'react';
import styles from '../styles/Buy.module.css';
import Button from '../components/Button'


const Buy = () => {
  return (
      <div className={styles.buyWrapper}>


        <div className="buttonsRightWrapper">
            <Button 
                lable={"Save as PDF"} 
                subclass={"quaternary"} 
            /> 
            <Button 
                lable={"Add coupon Code"} 
                subclass={"quaternary"} 
            /> 
            <Button 
                lable={"Continue to Checkout"} 
                subclass={"primary"} 
            />   
        </div> 

        <div className={styles.buyTableWrapper}>

          <ul className={styles.buyConfiguration}>
            <li className={styles.buyConfigurationHead}>License End User</li>
            <li>Designer</li>
            <li>Client</li>
            <li className={styles.buyConfigurationHead}>License Type</li>
            <li>Desktop / Print Licence</li>
            <li>Web Licence</li>
            <li>App Licence</li>
            <li>Video Licence</li>
            <li>Logo Licence</li>
            <li className={styles.buyConfigurationHead}>Company Size</li>
            <li>Up to 5 employees</li>
            <li>Up to 10 employees</li>
            <li>Up to 25 employees</li>
            <li>Up to 100 employees</li>
            <li>Up to 500 employees</li>
            <li>Up to 1500 employees</li>
          </ul>

          <ul className={styles.buyConfiguration}>
            <li>Terms of Use</li>
            <li>Licensing Types</li>
            <li>Payment Methods</li>
            <li>Help and Contact</li>
          </ul>

          <div className={styles.buyTable}>
            <div className={styles.buyTableButtons}>
              <Button 
                  lable={"Protest Grotesk"} 
                  subclass={"secondary"} 
              /> 
              <Button 
                  lable={"Protest Grotesk Mono"} 
                  subclass={"quaternary"} 
              /> 
              <Button 
                  lable={"Giallo Roman"} 
                  subclass={"quaternary"} 
              /> 
             <Button 
                  lable={"Giallo Semimono"} 
                  subclass={"quaternary"} 
              /> 
             <Button 
                  lable={"Giallo Mono"} 
                  subclass={"quaternary"} 
              />       
             <Button 
                  lable={"Skyline"} 
                  subclass={"quaternary"} 
              /> 
              <Button 
                  lable={"Automat"} 
                  subclass={"quaternary"} 
              />                                    
            </div>

            <div className={styles.buyTableContent}>
                <p className={styles.buyConfigurationHead}>Bundles</p>
                <p>Protest Grotesk Full Family</p>
            </div>

          </div>

        </div>


      </div>
  )
};

export default Buy;
