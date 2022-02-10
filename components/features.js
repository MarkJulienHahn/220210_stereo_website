import React, { useState } from 'react';
import styles from '../styles/Features.module.css'

const Features = ( name ) => {

    const [val, updateVal] = useState(0);

    function setVal(i) {
        updateVal(i)
    }  

    const style01 = {
        opacity: `${val[0]}`
    }

    const style02 = {
        opacity: `${val[1]}`
    }


    console.log(name[Object.keys(name)[1]])

    const featureStyleBefore = {
        fontVariationSettings: `'wght' ${name[Object.keys(name)[2]]}, 'wdth' 50`,
      }

    const featureStyleAfter = {
        fontFeatureSettings: `"${name[Object.keys(name)[4]]}"`
      }

    return ( 
        <>
            <div className={styles.feature} style={featureStyleBefore}>
                <div 
                    onMouseEnter={() => setVal(1)} 
                    onMouseLeave={() => setVal(0)}>

                    <span 
                        style={featureStyleBefore} 
                        className={styles.featureBefore}>
                        onHover={}

                    {name[Object.keys(name)[{val}]]}
                    </span>
                </div>
            </div>
        </>
    )
};

export default Features;
