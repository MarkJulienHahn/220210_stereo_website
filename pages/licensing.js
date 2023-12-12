import client from "../client";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>Licensing | Stereo Typefaces®</title>
        <meta
          name="description"
          content="Here you find all the information about the  Stereo Typefaces® licensing system. A simple FAQ, answering all questions concerning typeface licenses and typography legal situations."
        />
      </Head>
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
    </>
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
