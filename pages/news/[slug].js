import { useState } from "react";
import JournalEntry from "../../components/JournalEntry";
import React from "react";

import dynamic from "next/dynamic";

import client from "../../client";
const Checkout = dynamic(() => import("../../components/Checkout/Checkout"));

export async function getStaticPaths() {
  const res = await client.fetch(`*[_type == "journal"]`);
  const data = await res;

  const paths = data.map((journal) => {
    return { params: { slug: journal.slug.current.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const journal = await client.fetch(`
  *[slug.current == "${slug}"]{..., "introImage": introImage{..., "asset": asset->{...}}, "content": content[]{..., asset->{...}}}`);

  const links = await client.fetch(`  *[_type == "journal"]  {
    titel, slug
      }`);

  return {
    props: {
      journal,
      links,
    },
    revalidate: 10,
  };
}

const single = ({
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
      <JournalEntry
        entry={journal[0]}
        cart={cart}
        dark={dark}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setShowCheckout={setShowCheckout}
      />
    </>
  );
};

export default single;
