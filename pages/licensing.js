import client from "../client";

import Licensing from "../components/Licensing";

const licensing = ({
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
  licensing,
  licensingIntrotext,
}) => {
  console.log(licensingIntrotext)

  return (
    <Licensing
      cart={cart}
      products={products}
      checkoutToken={checkoutToken}
      handleAddToCart={handleAddToCart}
      handleEmptyCart={handleEmptyCart}
      handleUpdateCartQty={handleUpdateCartQty}
      handleRemoveFromCart={handleRemoveFromCart}
      handleUpdateCartPrice={handleUpdateCartPrice}
      onCaptureCheckout={onCaptureCheckout}
      setCart={setCart}
      handleCouponCode={handleCouponCode}
      loading={loading}
      getLiveObject={getLiveObject}
      live={live}
      getPaypalPaymentId={getPaypalPaymentId}
      refreshCart={refreshCart}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      dark={dark}
      licensing={licensing}
      licensingIntrotext={licensingIntrotext[0]}
    />
  );
};

export default licensing;

export async function getServerSideProps() {
  const licensing = await client.fetch(`
  *[_type == "licensing"]{...}|order(orderRank)`);
  const licensingIntrotext = await client.fetch(`
  *[_type == "licensingIntrotext"]{...}`);

  return {
    props: {
      licensing,
      licensingIntrotext,
    },
  };
}
