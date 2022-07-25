import { useState } from "react";
import styles from "../styles/Button.module.css";

import Button from "../components/Button";

function Cartbutton({ cart, live, lable, subclass, setShowCheckout }) {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };

  const showCheckout = () => {
    setTimeout(function(){ setShowCheckout(true) }, 100)
  };

  const hidden = {
    transform: "translateX(600px)",
  };

  const visible = {
    transform: "translateY(0)",
  };

  return (
    <>
      <div
        style={!active ? hidden : visible}
        className={styles.cartOverlay}
        onClick={() => changeActive()}
      >
        <p className={styles.cartHead}>
          {" "}
          {cart.line_items?.length || "" ? "CART" : "YOUR CART IS EMPTY"}{" "}
        </p>

        <div className={styles.totalWrapper}>
          <div className={styles.overviewItems}>
            {cart.line_items?.map((item) => (
              <>
                <div className={styles.productWrapper}>
                  <span className={styles.cartItem}>
                    — {item.name}
                    <br />
                  </span>

                  <span className={styles.productPrice}>
                    EUR {item.line_total.formatted}
                  </span>
                </div>
              </>
            ))}
          </div>

          <div className={styles.total}>
            {!cart.line_items?.length || "" ? (
              ""
            ) : (
              <>
                <span>Total (incl. Tax)</span>
                <span>EUR {cart.subtotal?.formatted}</span>
              </>
            )}
          </div>
        </div>
        <div
          className={styles.checkoutButton}
          onClick={() => showCheckout()}
        >
          <button>{cart.line_items?.length || "" ? "CHECKOUT" : "ADD SOME FONTS"}</button>
        </div>
      </div>

      <div
        id={subclass}
        className={styles.button}
        onClick={() => changeActive()}
      >
        {lable}
      </div>
    </>
  );
}

export default Cartbutton;
