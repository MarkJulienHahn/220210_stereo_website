import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { commerce } from "../lib/commerce";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Layout from "../components/Layout";
import Nav from "../components/Nav";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const location = useRouter();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [live, setLive] = useState(null);
  const [order, setOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

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

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();

      const orderData = {
        firstName: incomingOrder.customer.firstname,
        lastName: incomingOrder.customer.lastname,
        email: incomingOrder.customer.email,
        adress: incomingOrder.shipping.street,
        zip: incomingOrder.shipping.postal_zip_code,
        city: incomingOrder.shipping.town_city,
        country: incomingOrder.shipping.country,
        state: incomingOrder.shipping.county_state,
        items: incomingOrder.order.line_items.map(
          (item) =>
            ` ${item.product_name}, ${
              products.find((el) => el.name === item.product_name).licence
            }, ${item.line_total_with_tax.formatted_with_code}\r\n`
        ),
        discount:
          incomingOrder.order.discount.amount_saved?.formatted_with_code,
        total: incomingOrder.order_value.formatted_with_code,
        tax: incomingOrder.tax.amount.formatted_with_code,
        link: incomingOrder.fulfillment.digital.downloads.map((el) =>
          el.packages.map((el) => ` ${el.access_link}`)
        ),
        paymentMethod: `${incomingOrder.transactions[0].payment_source.brand}, 
          ${incomingOrder.transactions[0].payment_source.payments_source_type}, 
          **** ${incomingOrder.transactions[0].payment_source.gateway_reference}`,
        id: incomingOrder.customer_reference,
      };

      await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(orderData),
      });
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  // Create a function that will generate the PayPal approval URL to be called when the checkout loads.
  async function getPaypalPaymentId(checkoutTokenId, orderDetails) {
    console.log(orderDetails)
    try {
      // Use a checkout token ID that was generated earlier, and any order details that may have been collected
      // on this page.
      const paypalAuth = await commerce.checkout.capture(checkoutTokenId, {
        ...orderDetails,
        // Include PayPal action:
        payment: {
          gateway: "paypal",
          paypal: {
            action: "authorize",
          },
        },
      });

      // If we get here, we can now push the user to the PayPal URL.
      // An example of rendering the PayPal button is below
      console.log(paypalAuth)
      const order = await commerce.checkout.capture(checkoutTokenId, {
        ...orderDetails,
        // We have now changed the action to "capture" as well as included the "payment_id and "payer_id"
        payment: {
          gateway: "paypal",
          paypal: {
            action: "capture",
            payment_id: paypalAuth.payment_id,
            payer_id: orderDetails.payer_id
          },
        },
      });
      await console.log(orderDetails)
      return;
    } catch (response) {
      // There was an issue with capturing the order with Commerce.js
      console.log(response);
      alert(response.message);
      return;
    } finally {
      // Any loading state can be removed here.
      
    }
  }

  // function renderPaypalButton(paypalAuth) {
  //   paypal.Button.render(
  //     {
  //       env: "sandbox", // Or 'sandbox',
  //       commit: true, // Show a 'Pay Now' button
  //       payment: function () {
  //         return paypalAuth.payment_id; // The payment ID from earlier
  //       },
  //       onAuthorize: function (data, actions) {
  //         // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
  //         captureOrder(data);
  //       },
  //       onCancel: function (data, actions) {
  //         // Handler if customer does not authorize payment
  //       },
  //     },
  //     "#paypal-button-container"
  //   );
  // }

  // Create a function that can be called when the PayPal payment has been authorized.
  // async function captureOrder() {
  //   try {
  //     // Complete capturing the order.
  //     const order = await commerce.checkout.capture(checkoutTokenId, {
  //       ...orderDetails,
  //       // We have now changed the action to "capture" as well as included the "payment_id and "payer_id"
  //       payment: {
  //         gateway: "paypal",
  //         paypal: {
  //           action: "capture",
  //           payment_id: "PAY-51028384J84281644LGFZXJQ",
  //           payer_id: "VE57TQRTVER5Y",
  //         },
  //       },
  //     });

  //     // If we get here, the order has been successfully captured and the order detail is part of the `order` variable
  //     console.log(order);
  //     return;
  //   } catch (response) {
  //     // There was an issue capturing the order with Commerce.js
  //     console.log(response);
  //     alert(response.message);
  //     return;
  //   } finally {
  //     // Any loading state can be removed here.
  //   }
  // }

  useEffect(async () => {
    fetchProducts();
    fetchCart();
    refreshCart();
    console.log(live);
  }, []);

  return (
    <>
      {/* <Script src={`https://www.paypalobjects.com/api/checkout.js`} /> */}

      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: "EUR",
        }}
      />
        <Nav />
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
                onCaptureCheckout={handleCaptureCheckout}
                handleCouponCode={handleCouponCode}
                getLiveObject={getLiveObject}
                setCart={setCart}
                loading={loading}
                commerce={commerce}
                getPaypalPaymentId={getPaypalPaymentId}
              />
            </Layout>
          </motion.div>
        </AnimatePresence>
      {/* </PayPalScriptProvider> */}
    </>
  );
}

export default MyApp;
