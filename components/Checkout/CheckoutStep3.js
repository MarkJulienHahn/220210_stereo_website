import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import PaymentForm from "./PaymentForm";
import Button from "../Button";

import styles from "../../styles/Buy.module.css";
const Coupon = dynamic(() => import("../Coupon"));

const CheckoutStep3 = ({
  setShowCoupon,
  showCoupon,
  handleCouponCode,
  setShowCheckoutStep3,
  setShowCheckoutStep2,
  checkoutToken,
  products,
  cart,
  nextStep,
  shippingData,
  onCaptureCheckout,
  getPaypalPaymentId,
  getLiveObject,
  live,
  setProcessing,
  Processing
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

      <div className="buttonsLeftWrapper">
        <Button
          lable={"Back to Overview"}
          onClick={
            cart.line_items.length || ""
              ? () => {
                  setShowCheckoutStep3(false),
                    setShowCheckoutStep2(true),
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

      <p className={styles.buyHead}> [ 3 ] ORDER REVIEW</p>

      <div className={styles.formsWrapper}>
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

        <div className={styles.formTable}>
          <p className={styles.buyHead}> [ 5 ] PAYMENT</p>

          <div className={styles.buyTableContent}>
            <PaymentForm
            Processing={Processing}
              setProcessing={setProcessing}
              checkoutToken={checkoutToken}
              nextStep={nextStep}
              shippingData={shippingData}
              onCaptureCheckout={onCaptureCheckout}
              live={live}
              getPaypalPaymentId={getPaypalPaymentId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutStep3;
