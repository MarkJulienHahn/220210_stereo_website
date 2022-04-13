import React from 'react'
import ProductChoice from './ProductChoice'
import styles from '../../styles/Buy.module.css';

const BuyGiallo = ( { products, onAddToCart, onUpdateCartQty, onRemoveFromCart, cart, priceFactor1, priceFactor2, priceFactor3, priceFactor4, onUpdateCartPrice } ) => {

  function isGiallo(obj) {
    return obj.categories[0].name === "Giallo Roman";
  }

  function isStyle(obj) {
    return obj.categories[1].name === "Styles";
  }

  function isBundle(obj) {
    return obj.categories[1].name === "Bundles";
  }

  const giallo = products.filter(isGiallo)
  const gialloStyles = giallo.filter(isStyle)
  const gialloBundles = giallo.filter(isBundle)

  const x = priceFactor1+priceFactor2+priceFactor3+priceFactor4;

  const items = cart.line_items

  return (
    <div>

      <p className={styles.buyConfigurationHead}>Bundles</p>

      {gialloBundles.map((product) => (
            <>  
            <div item onClick={x == 1 || items.some(item => item.product_id === product.id) ? () => {} : () => {onAddToCart(product.id, 1*x)}}>
              <ProductChoice 
                product={product} 
                name={product.name} 
                price={x != 1 ? `EUR  ${product.price.raw*x}` : "Please choose a license Type"} 
                id={product.id}
                onAddToCart={onAddToCart}
                priceFactor1={priceFactor1}
                priceFactor2={priceFactor2}
                priceFactor3={priceFactor3}
                cart={cart}
              />
            </div>
          </>
          ))}

      <p className={styles.buyConfigurationHead}>Single Styles</p>

      {gialloStyles.map((product) => (
            <>  
            <div item onClick={x == 1 || items.some(item => item.product_id === product.id) ? () => {} : () => {onAddToCart(product.id, 1*x)}}>
              <ProductChoice 
                product={product} 
                name={product.name} 
                price={x != 1 ? `EUR  ${product.price.raw*x}` : "Please choose a license Type"} 
                id={product.id}
                onAddToCart={onAddToCart}
                priceFactor1={priceFactor1}
                priceFactor2={priceFactor2}
                priceFactor3={priceFactor3}
                cart={cart}
              />
            </div>
          </>
          ))}

    </div>
  )
}

export default BuyGiallo