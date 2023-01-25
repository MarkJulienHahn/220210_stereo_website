import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import { commerce } from "../lib/commerce";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Cookie from "../components/Cookie";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cookieSeen, setCookieSeen] = useState();
  const [fadeCookie, setFadeCookie] = useState(false);

  const location = useRouter();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [live, setLive] = useState(null);
  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const dark = {
    color: "white",
    background: "#0A0A0A",
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 1000 });

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    setLoading(true);
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
    setLoading(false);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleUpdateCartPrice = async (productId, subtotal) => {
    const { cart } = await commerce.cart.update(productId, { subtotal });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    setLoading(true);
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
    setLoading(false);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCouponCode = async (checkoutTokenId, discountCode) => {
    const coupon = await commerce.checkout
      .checkDiscount(checkoutTokenId, {
        code: discountCode,
      })
      .then((response) =>
        console.log(response.valid, response.type, response.value)
      );

    setCart(cart);
  };

  const getLiveObject = async (checkoutTokenId) => {
    const token = await commerce.checkout.getLive(checkoutTokenId);
    setLive(token);
  };

  const acceptCookie = async () => {
    setFadeCookie(true),
      await setTimeout(function () {
        setCookieSeen(true);
      }, 300);
    localStorage.setItem("cookieSeen", "true");
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    refreshCart();
    const data = localStorage.getItem("cookieSeen");
    if (data) {
      setCookieSeen(data);
    }
  }, []);

  return (
    <div style={darkMode ? {dark} : {}}>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: "EUR",
        }}
      />

      {!cookieSeen ? (
        <div
          className="cookieWrapper"
          style={fadeCookie ? { opacity: 0 } : { opacity: 1 }}
        >
          <Cookie acceptCookie={acceptCookie} />
        </div>
      ) : (
        ""
      )}

      <Nav darkMode={darkMode}/>

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <Layout>
            <Component
              {...pageProps}
              products={products}
              cart={cart}
              live={live}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
              handleAddToCart={handleAddToCart}
              handleUpdateCartPrice={handleUpdateCartPrice}
              handleCouponCode={handleCouponCode}
              getLiveObject={getLiveObject}
              setCart={setCart}
              loading={loading}
              setOrder={setOrder}
              refreshCart={refreshCart}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              dark={dark}
            />
            <Analytics />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
