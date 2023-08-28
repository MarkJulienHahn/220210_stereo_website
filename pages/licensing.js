import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import client from "../client";

import Button from "../components/Button";
import Link from "next/link";
import Cartbutton from "../components/Cartbutton";
import LicensingContent from "../components/LicensingContent";
import Footer from "../components/Footer";

import { AnimatePresence, motion } from "framer-motion";

const Checkout = dynamic(() => import("../components/Checkout/Checkout"));

const Licensing = ({
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
  licensing
}) => {
  const location = useRouter();
  const [showCheckout, setShowCheckout] = useState(false);

  console.log(licensing);
  return (
    <main className="licensingMain">
      <Head>
        <title>Typefaces | Stereo Typefaces®</title>
        <meta name="keywords" content="web" />
      </Head>

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

      <AnimatePresence exitBeforeEnter>
        <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button lable={"Licensing Terms"} subclass={"quaternaryMuted"} />
        </div>

        <div className="buttonsRightWrapper">
          <Button
            lable={darkMode ? "Light" : "Dark"}
            subclass={!darkMode ? "secondary" : "quaternary"}
            onClick={() => setDarkMode(!darkMode)}
          />
          <Link href="/trials" scroll={false}>
            <a>
              <Button lable={"Trials"} subclass={"tertiary"} />
            </a>
          </Link>
          <Button
            lable={"Buy"}
            subclass={"primary"}
            onClick={cart?.line_items ? () => setShowCheckout(true) : () => {}}
          />
          {cart?.line_items?.length ? (
            <Cartbutton
              lable={`Cart [${cart?.total_unique_items}]`}
              subclass={"tertiary"}
              setShowCheckout={setShowCheckout}
              live={live}
              cart={cart}
            />
          ) : (
            ""
          )}
        </div>

        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <LicensingContent licensing={licensing} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Licensing;

export async function getServerSideProps() {
  const licensing = await client.fetch(`
  *[_type == "licensing"]|order(orderRank){...}`);

  return {
    props: {
      licensing,
    },
  };
}
