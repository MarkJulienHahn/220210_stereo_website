import { useState } from "react";
import Checkout from "../components/Checkout/Checkout";


const CheckoutPage = ({
  products,
  cart,
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
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  return (
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
  );
};

export default CheckoutPage;
