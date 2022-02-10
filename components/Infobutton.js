import { useState } from 'react';
import styles from '../styles/Button.module.css';

function Infobutton ( props ) {

  const [isActive, setActive] = useState();
    
  const ToggleClass = () => {
      setActive(!isActive);
  };

  const style01 = {
    height: "25px",
    textTransform: "uppercase",
    fontSize: "7.5pt"
  }

  const style02 = {
    height: "auto",
    width: "400px",
    lineHeight: "17pt",
    fontSize: "12pt",
    letterSpacing: "-0px"
  }
  

  return (
  <div 
    id={props.subclass} 
    style={isActive ? style02 : style01} 
    className={styles.infoButton} 
    onMouseEnter={ToggleClass} 
    onMouseLeave={ToggleClass}>
      {isActive ? props.content : props.lable}
  </div>
  );
}

export default Infobutton;
