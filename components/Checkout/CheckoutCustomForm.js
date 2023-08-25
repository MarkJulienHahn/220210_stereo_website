import Button from "../Button";

import styles from "../../styles/Buy.module.css";
import CustomLicensingForm from "./CustomLicensingForm";

const CheckoutCustomForm = ({
  virtualCart,
  setShowCheckoutStep1,
  setShowCheckoutStep5,
  setShowCheckoutCustomForm,
  handleEmptyCart,
  nonProfit,
  political,
  modification,
}) => {
  const stepBack = () => {
    setShowCheckoutCustomForm(false), setShowCheckoutStep1(true);
  };

  return (
    <>
      <div className={styles.buttonsLeftWrapper}>
        <Button
          lable={"Back"}
          onClick={() => {
            handleEmptyCart();
            stepBack();
          }}
          // onClick={
          //   cart.line_items.length || ""
          //     ? () => {
          //         refreshCart();
          //         setShowCheckoutStep2(false),
          //           setShowCheckoutStep1(true),
          //           getLiveObject(null);
          //       }
          //     : () => {}
          // }
          subclass={"secondary"}
        />
      </div>
      <div className={styles.customFormWrapper}>
        {virtualCart.length ? (
          <div className={styles.customFormTotal}>
            <div className={styles.buyConfigurationHead}>Cart</div>
            <div className={styles.overviewItems}>
              {virtualCart.map((item) => (
                <>
                  <div
                    className={styles.productWrapper}
                    //   onClick={() => handleRemoveFromVirtualCart(item.product_id)}
                  >
                    <span className={styles.cartItem}>
                      — {item.product_name}
                      <br />
                      <span className={styles.licenseType}>{item.license}</span>
                    </span>
                    <span className={styles.onRequest}>Price on Request</span>
                    <span className={styles.cartRemove}>
                      &#8594; Remove from Cart
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        <CustomLicensingForm
          virtualCart={virtualCart}
          setShowCheckoutCustomForm={setShowCheckoutCustomForm}
          setShowCheckoutStep5={setShowCheckoutStep5}
        />
      </div>
    </>
  );
};

export default CheckoutCustomForm;
