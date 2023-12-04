import React from "react";
import Journal from "../components/Journal";

import client from "../client";

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
  dark,
}) => {
  return (
    <>
      <Journal
        journal={journal}
        cart={cart}
        dark={dark}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        products={products}
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
        loading={loading}
        checkoutToken={checkoutToken}
        getPaypalPaymentId={getPaypalPaymentId}
        refreshCart={refreshCart}
        font={""}
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
