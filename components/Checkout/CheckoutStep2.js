import { useState } from "react";

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
  handleEmptyCart,
  getLiveObject,
  checkoutToken,
  products,
  cart,
  next,
  live,
  WebLicense,
  taxable,
  setTaxable,
  rates,
  vatRate,
  setVatRate,
}) => {
  const [vatId, setVatId] = useState("");

  const stepBack = () => {
    setShowCheckoutStep2(false), setShowCheckoutStep1(true);
  };

  return (
    <>
      {showCoupon && live?.discount.length == 0 && (
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

          <Button
            lable={"Coupon code"}
            onClick={() => {
              setShowCoupon(true);
            }}
            subclass={live && !live?.discount.value ? "quaternary" : "quaternaryMuted"}
          />

      </div>

      <div className={styles.formsWrapper}>
        <div>
          <div className={styles.overviewTable}>
            <div className={styles.overviewWrapper}>
              <div className={styles.overviewItems}>
                <div className={styles.buyConfigurationHead}>Cart</div>
                {cart?.line_items?.map((item) => (
                  <>
                    <div className={styles.productWrapperOverview}>
                      <span className={styles.cartItem}>
                        — {item.name}
                        <br />
                        <span className={styles.licenseType}>
                          {products.find((el) => el.name === item.name).license}
                        </span>
                      </span>

                      <span className={styles.productPrice}>
                        EUR {item.line_total.formatted}
                      </span>
                    </div>
                  </>
                ))}
              </div>

              {live?.discount.value ? (
                <>
                  <div className={styles.totalDiscount}>
                    <span>Discount</span>
                    <span>— EUR {live.discount.amount_saved?.formatted}</span>
                  </div>

                  <div className={styles.total}>
                    <span>→ Total</span>
                    <span>EUR {live.total.formatted}</span>
                    {/* All EU customers can enter their VAT ID number to proceed
                    without a tax charge. If you don’t have a VAT ID number, or
                    if you are a private idividual, you may leave the last field
                    blank. */}
                  </div>
                  {/* <p className={styles.taxInformation}>
                    In case you are a private customer from within the EU and
                    you don’t have a VAT ID, taxes will be added according to
                    your billing country.
                  </p> */}
                </>
              ) : (
                <>
                  {taxable ? (
                    <>
                      <div className={styles.tax}>
                        <span>VAT ({vatRate.rateString})</span>
                        <span>
                          EUR&nbsp;
                          {(
                            cart.subtotal.raw * vatRate.rateDecimal
                          ).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className={styles.total}>
                        <span>→ Total</span>
                        <span>
                          EUR&nbsp;
                          {(
                            cart?.subtotal?.raw +
                            cart?.subtotal?.raw * vatRate.rateDecimal
                          ).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className={styles.total}>
                      <span>→ Total</span>
                      <span>EUR {cart?.subtotal?.formatted}</span>
                    </div>
                  )}

                  <p className={styles.taxInformation}>
                    In case you are a private customer from within the EU and
                    you don’t have a VAT ID, taxes will be added according to
                    your billing country.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.formTable}>
          {/* <p className={styles.buyHead}> [ 4 ] BILLING INFORMATION</p> */}

          <div className={styles.buyAdressContent}>
            <AddressForm
              checkoutToken={checkoutToken}
              WebLicense={WebLicense}
              next={next}
              setTaxable={setTaxable}
              setVatId={setVatId}
              vatId={vatId}
              setVatRate={setVatRate}
              rates={rates}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutStep2;
