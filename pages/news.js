import React from "react";
import Journal from "../components/Journal";
import Footer from "../components/Footer";
import client from "../client";
import Head from "next/head";

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
    <div style={darkMode ? dark : {}}>
      <Head>
        <title>Feed | Stereo Typefaces®</title>
        <meta
          name="description"
          content="This is a news feed where current typography updates and information gets posted regularly. Here you can find out about new typeface releases and stay up-to-date about."
        />
      </Head>
      <Journal
        journal={journal}
        cart={cart}
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
      <div style={{ padding: "0 var(--margin-M)" }}>
        <Footer />
      </div>
    </div>
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
