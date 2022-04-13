import React, {useState, useEffect} from 'react';
import ProductChoice from './ProductChoice'
import styles from '../../styles/Buy.module.css';

const BuyProtest = ( { licenceChoice, products, onAddToCart, onUpdateCartQty, onRemoveFromCart, cart, priceFactor1, priceFactor2, priceFactor3, priceFactor4, Licence, NumEmployees } ) => {


  const [LineItem, setLineItem] = useState("");

  const updateLineItem = (id) => {
    setLineItem(id)
  }

  const lineItem = cart.line_items.find(item => item.product_id === LineItem)

  const updateLicenceType = (name, licence) => {
    products.find(el => el.name === name).licence = `${licence} / ${NumEmployees} Employees`
  }

  function isProtest(obj) {
    return obj.categories[0].name === "Protest Grotesk";
  }

  function isStyle(obj) {
    return obj.categories[1].name === "Styles";
  }

  function isBundle(obj) {
    return obj.categories[1].name === "Bundles";
  }

  const protest = products.filter(isProtest)
  const protestStyles = protest.filter(isStyle)
  const protestBundles = protest.filter(isBundle)

  const priceFactor = (priceFactor1+priceFactor2+priceFactor3)*priceFactor4;

  const items = cart.line_items




  return (
    <div>

        <p className={styles.buyConfigurationHead}>Bundles</p>

        {protestBundles.map((product) => (
        <>  
          <div item onClick={licenceChoice && !items.some(item => item.product_id === product.id) ? () => {updateLicenceType(product.name, Licence, NumEmployees), onAddToCart(product.id, 1*priceFactor)} : () => onRemoveFromCart(items.find(item => item.product_id === product.id).id)}>
            <ProductChoice 
              product={product} 
              name={product.name} 
              price={licenceChoice ? `EUR  ${product.price.raw*priceFactor}` : "Please choose a license Type"} 
              id={product.id}
              cart={cart}
              licenceChoice={licenceChoice}
            />
          </div>

        </>
        ))}

        <p className={styles.buyConfigurationHead}>Single Styles</p>

        {protestStyles.map((product) => (
          <>
          <div item onClick={licenceChoice && !items.some(item => item.product_id === product.id) ? () => {updateLicenceType(product.name, Licence, NumEmployees), onAddToCart(product.id, 1*priceFactor)} : () => onRemoveFromCart(items.find(item => item.product_id === product.id).id)}>
              <ProductChoice 
                product={product} 
                name={product.name} 
                price={licenceChoice ? `EUR  ${product.price.raw*priceFactor}` : "Please choose a license Type"} 
                id={product.id}
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

export default BuyProtest