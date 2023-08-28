import { useState, useEffect } from "react";
import styles from "../styles/Coupon.module.css";

import Button from "../components/Button";

const Coupon = ({
  checkoutToken,
  setShowCoupon,
  handleCouponCode,
  getLiveObject,
}) => {
  const [value, setValue] = useState();
  const [result, setResult] = useState(null);

  const updateValue = () => {
    setValue(value);
  };

  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

  const submitCode = async (first, second) => {
    setResult("...checking");
    await handleCouponCode(first, second);
    await getLiveObject(checkoutToken.id);
    if (checkoutToken.discount.length) {
      setTimeout(notValid, 1500);
    } else {
      setResult("Not valid, sorry!");
      setTimeout(notValid, 1500);
    }
  };

  const notValid = () => {
    setShowCoupon(false), setValue(false);
  };

  useEffect(() => {
    updateValue();
    return () => {
      setValue({});
    };
  }, [value]);

  return (
    <>
      <div className={styles.couponInput}>
        <div className={"buttonsLeftWrapper"}>
          <Button
            lable={"Back"}
            subclass={"secondary"}
            onClick={() => setShowCoupon(false)}
          />
        </div>

        <div className={styles.buttonsRightWrapper}>
          <Button
            lable={"Submit"}
            subclass={!value ? "quaternary" : "primary"}
            onClick={
              value
                ? () => {
                    submitCode(checkoutToken.id, value);
                  }
                : () => {}
            }
          />
        </div>
        {!result ? (
          <input
            autoFocus
            placeholder="discount code"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        ) : (
          <div className={styles.couponInput}>{result}</div>
        )}
      </div>
    </>
  );
};

export default Coupon;
