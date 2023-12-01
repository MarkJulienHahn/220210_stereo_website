import { useState } from "react";
import React from "react";
import Journal from "../components/Journal";
import dynamic from "next/dynamic";

import client from "../client";

const Checkout = dynamic(() => import("../components/Checkout/Checkout"));

const journal = ({
  journal,
  cart,
  products,
  checkoutToken,
  handleAddToCart,
  handleEmptyCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleUpdateCartPrice,
  onCaptureCheckout,
  setCart,
  handleCouponCode,
  loading,
  getLiveObject,
  live,
  getPaypalPaymentId,
  refreshCart,
  darkMode,
  setDarkMode,
  dark
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  return (
    <>
      {showCheckout && (
        <Checkout
          products={products}
          cart={cart}
          live={live}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleUpdateCartPrice={handleUpdateCartPrice}
          onCaptureCheckout={onCaptureCheckout}
          handleCouponCode={handleCouponCode}
          getLiveObject={getLiveObject}
          setCart={setCart}
          setShowCheckout={setShowCheckout}
          showCheckout={showCheckout}
          loading={loading}
          checkoutToken={checkoutToken}
          getPaypalPaymentId={getPaypalPaymentId}
          refreshCart={refreshCart}
          font={""}
        />
      )}
      <Journal
        journal={journal}
        cart={cart}
        dark={dark}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setShowCheckout={setShowCheckout}
      />
    </>
  );
};

export default journal;

export async function getServerSideProps() {
  const journal = await client.fetch(`
  *[_type == "journal"]{..., "introImage": introImage{..., "asset": asset->{...}}, "content": content[]{..., asset->{...}}}`);

  return {
    props: {
      journal,
    },
  };
}
