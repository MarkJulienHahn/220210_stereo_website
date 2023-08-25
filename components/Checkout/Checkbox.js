import { useState, useEffect } from "react";
import styles from "../../styles/Buy.module.css";

const Checkbox = ({ setLicenses, licenses, updateCustomData, license }) => {
  const [clicked, setClicked] = useState(false);

  const handleAddToList = () => {
    updateCustomData(license),
    setClicked(!clicked)
  };

  const handleRemoveFromList = () => {
    setLicenses(licenses.filter((item) => item !== license)),
    setClicked(!clicked)
  };

  return (
    <div
      className={styles.checkboxWrapper}
      onClick={!clicked ? handleAddToList : handleRemoveFromList}
    >
      <div
        className={styles.checkoutCheckbox}
        style={{
          background: clicked ? "black" : "none",
        }}
      ></div>
      {license}
    </div>
  );
};

export default Checkbox;
