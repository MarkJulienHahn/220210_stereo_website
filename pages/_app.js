import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { commerce } from "../lib/commerce";

import Layout from '../components/Layout'
import Nav from '../components/Nav'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const location = useRouter();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false)


  const updateLoading = () => {
    setLoading()
  }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    setLoading(true);
    const { cart } = await commerce.cart.add(productId, quantity);
    
    setCart(cart); 
    setLoading(false)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
}

const handleUpdateCartPrice = async (productId, subtotal ) => {
  const { cart } = await commerce.cart.update(productId, { subtotal });

  setCart(cart);
}

const handleRemoveFromCart = async (productId) => {
    setLoading(true);
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
    setLoading(false)
}

const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
}

const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      console.log(incomingOrder)
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
        items: incomingOrder.order.line_items.map(el => ` ${el.product_name}`),
        singlePrice: incomingOrder.order.line_items.map(el => ` ${el.line_total_with_tax.formatted_with_code}`),
        total: incomingOrder.order_value.formatted_with_code,
        tax: incomingOrder.tax.amount.formatted_with_code,
        link: incomingOrder.fulfillment.digital.downloads.map(el => el.packages.map(el => ` ${el.access_link}`)),
        paymentMethod: 
          `${incomingOrder.transactions[0].payment_source.brand}, 
          ${incomingOrder.transactions[0].payment_source.payments_source_type}, 
          **** ${incomingOrder.transactions[0].payment_source.gateway_reference}`,
        id: incomingOrder.customer_reference
      }
    
      await fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify(orderData)
      })

  } catch (error) {
      setErrorMessage(error.data.error.message);
  }
}

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <>
      <Nav /> 
        <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div 
                    location={location} key={location.pathname}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <Layout>
              <Component {...pageProps}
                products={products}
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                handleAddToCart={handleAddToCart}
                handleUpdateCartPrice={handleUpdateCartPrice}
                onCaptureCheckout={handleCaptureCheckout}
                loading={loading}
                commerce={commerce}
                />
            </Layout>

          </motion.div>
        </AnimatePresence>


    </>
  
  )
}

export default MyApp
