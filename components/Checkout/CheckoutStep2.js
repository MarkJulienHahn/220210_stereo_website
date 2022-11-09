import React from "react";
import dynamic from "next/dynamic";

import AddressForm from "./AddressForm";
import Button from "../Button";

import styles from "../../styles/Buy.module.css";
const Coupon = dynamic(() => import("../Coupon"));

const CheckoutStep2 = ({
  setShowCoupon,
  showCoupon,
  handleCouponCode,
  setShowCheckoutStep1,
  setShowCheckoutStep2,
  getLiveObject,
  checkoutToken,
  products,
  cart,
  next,
  live,
}) => {
  return (
    <>
      {showCoupon && live.discount.length == 0 && (
        <Coupon
          handleCouponCode={handleCouponCode}
          checkoutToken={checkoutToken}
          setShowCoupon={setShowCoupon}
          getLiveObject={getLiveObject}
        />
      )}
      <div className={styles.buttonsLeftWrapper}>
        <Button
          lable={"Back"}
          onClick={
            cart.line_items.length || ""
              ? () => {
                  setShowCheckoutStep2(false),
                    setShowCheckoutStep1(true),
                    getLiveObject(null);
                }
              : () => {}
          }
          subclass={"secondary"}
        />
        <Button
          lable={"Coupon code"}
          onClick={() => {
            setShowCoupon(true);
          }}
          subclass={"quaternary"}
        />
      </div>

      <div className={styles.formsWrapper}>
        <div>

          <p className={styles.buyHead}> [ 3 ] ORDER REVIEW</p>
          <div className={styles.overviewTable}>
            <div className={styles.overviewWrapper}>
              <div className={styles.overviewItems}>
                {cart.line_items.map((item) => (
                  <>
                    <div className={styles.productWrapperOverview}>
                      <span className={styles.cartItem}>
                        — {item.name}
                        <br />
                        <span className={styles.licenceType}>
                          {products.find((el) => el.name === item.name).licence}
                        </span>
                      </span>

                      <span className={styles.productPrice}>
                        EUR {item.line_total.formatted}
                      </span>
                    </div>
                  </>
                ))}
              </div>

              {live.discount.length !== 0 ? (
                <>
                  <div className={styles.totalDiscount}>
                    <span>Discount</span>
                    <span>— EUR {live.discount.amount_saved?.formatted}</span>
                  </div>

                  <div className={styles.total}>
                    <span>Total (incl. Tax)</span>
                    <span>EUR {live.total.formatted}</span>
                  </div>
                </>
              ) : (
                <div className={styles.total}>
                  <span>Total (incl. Tax)</span>
                  <span>EUR {cart.subtotal.formatted}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.formTable}>
          <p className={styles.buyHead}> [ 4 ] BILLING INFORMATION</p>

          <div className={styles.buyAdressContent}>
            <AddressForm checkoutToken={checkoutToken} next={next} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutStep2;
