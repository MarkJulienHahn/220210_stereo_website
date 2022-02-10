import { useState} from 'react'
import Styles from '../styles/Information.module.css'

const infoSmall = {
    width: "50vw",
    fontSize: "12.5px",
    lineHeight: "16px",
    letterSpacing: "1px",
  }

  const infoBig = {
    width: "100%",
    fontSize: "20pt",
    lineHeight: "22pt",
    letterSpacing: "-0.5px",
    fontVariationSettings: `'wdth' 300`}


const Infocontainer = ( props ) => {

    const [isActive, setActive] = useState(props.big);
    
    const ToggleClass = () => {
        setActive(!isActive);
    };
  



  return (
    <>
        <div className={Styles.infoContainer}>
            <div className={Styles.infoHeader}>
                <p>{isActive ? "→" : "←"} {props.head}</p>
            </div>
            <div className={Styles.infoContent} style={isActive ? infoSmall : infoBig} onClick={ToggleClass}>
                <p>{props.body}</p>
            </div>
        </div>
    </>
    )
}   

export default Infocontainer;
