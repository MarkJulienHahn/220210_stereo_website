import React from 'react'

import styles from '../../styles/Licensing.module.css'

const LicensingTerms = ( {showLicensing, setShowLicensing} ) => {
  return (
    <div onClick={() => setShowLicensing(false)} className={styles.licensingWrapper}>
        <div className={styles.licensingContent}>
            <h1>COMPANY SIZE: ONE METRIC TO RULE THEM ALL</h1>
            <p>The company size of the client is the only metric you need to know in order to license fonts. You don’t have to gather any information about their web traffic, app downloads, etc.</p>

            <h1>CLIENT = LICENSE OWNER</h1>
            <p>So how does this work? Let’s sketch it out: imagine a designer is using our fonts to design some stuff for their client, Brand Company. The license price is based on Brand Company’s “Company Size”, which is the total number of people working for them. In this contract, Brand Company is the “License Owner” and the designer is a “Subcontractor” doing work for the License Owner. Whoever did the clicking, typing, paying, etc. to license the fonts is the “Buyer”. This means that if the Buyer is a designer who is using our fonts for a few clients, each of those clients needs to have their own license where they are the License Owner and the designer is a Subcontractor.<br/>
All this terminology can get a bit confusing, so in order to keep things simple, we’ll sometimes refer to the Buyer, the License Owner, and any Subcontractors interchangeably as “you”. “You” might, for example, be the Buyer and License Owner but not a Subcontractor, or “you” might be the Buyer and a Subcontractor but not the License Owner.</p>


            <h1>DESKTOP/PRINT LICENSE</h1>
            <p>With a desktop/print license you can install the fonts on all of your devices and use them to create printed and digital documents, objects, merchandise, signage, and similar things. As long as fewer than 50 people work for the License Owner, a desktop/print license also includes a logo/wordmark license. As long as fewer than 3 people work for the License Owner, a desktop/print license also includes a social media license and a video license.</p>  

            <h1>WEB LICENSE</h1>
            <p>With a web license you can use the fonts on one web domain with the @font-face CSS method. There’s no limit to the amount of web traffic, but if you want to use the fonts on another domain you’ll have to buy another separate web license. You can only use the WOFF and WOFF2 files that we gave you (not desktop fonts like OTF).</p>    

            <h1>INTERACTIVE LICENSE</h1>
            <p>With an app/game license, you can embed the fonts into one app (which could be a mobile app, web app, digital point of sale system, etc.) or game. If you want to use them for another app or game you’ll need to buy another separate app/game license.</p>               
        </div>
    </div>
  )
}

export default LicensingTerms