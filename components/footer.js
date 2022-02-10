import React from 'react';
import Styles from '../styles/Footer.module.css'
import Button from '../components/Button'

const footer = () => {
  return (
    <div className={Styles.footer}>
        {/* <div className={Styles.logo}>STEREO</div> */}
        <div className={Styles.footerInfo}>
          
            <p>Contact us</p>            
            <p>FAQs</p>
            <p>Licensing</p>
            <p>Payment Methods</p>
            <p><br/> </p>
            <p>Imprint</p>
            <p>Privacy Policy</p>
            <p><br/> </p>
            <p>© {new Date().getFullYear()} Stereo Typefaces™. All rights reserved.</p>

        </div>

        <div className={Styles.footerNewsletter}>
          
          <p>Sign up to our newsletter to receive information regarding exclusive font previews, new releases, special events, and seasonal sale offers.</p>            
          <p><br/> </p>
          <p>Email Address</p>
          <hr/>
          <p><br/> </p>
          <p>Name</p>
          <hr/>
          <p><br/> </p>
          <Button 
            lable="submit" />

      </div>
    </div>)
}

export default footer;
