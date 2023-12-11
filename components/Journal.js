import { useState } from "react";
import JournalPreview from "./JournalPreview";

import Button from "./Button";
import Cartbutton from "./Cartbutton";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";

const Checkout = dynamic(() => import("../components/Checkout/Checkout"));
const Journal = ({
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
  const location = useRouter();
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
      <AnimatePresence exitBeforeEnter>
        <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button lable={"News"} subclass={"quaternaryMuted"} />
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
            onClick={cart.line_items ? () => setShowCheckout(true) : () => {}}
          />
          {cart.line_items?.length ? (
            <Cartbutton
              lable={`Cart [${cart.total_unique_items}]`}
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
          <div className="journalWrapper" style={darkMode ? dark : {}}>
            {journal.map((entry, i) => (
              <JournalPreview key={i} entry={entry} />
              // <JournalEntry key={i} entry={entry} />
            ))}


          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Journal;
