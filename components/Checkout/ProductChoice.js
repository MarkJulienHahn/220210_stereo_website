import { NoEncryption } from '@material-ui/icons'
import React from 'react'
import styles from '../../styles/ProductChoice.module.css'

const ProductChoice = ( props ) => {

  let inCart = false

  const items = props.cart.line_items

  if(items.some(item => item.product_id === props.product.id)){
    inCart = true
  }


  const added = {
    opacity: 1,
    pointerEvents: 'none',
    color: "var(--primary)"
  }

  const enabled = {
    pointerEvents: "auto",
    color: "black"
  }

  const disabled = {
    pointerEvents: 'none'
  }

  const primary = {
    color: "var(--primary)",
  }

  const normal = {
    color: "inherit",
  }



  const ItemNotInCart = ( ) => (
    <>
      <div className={styles.notInCart}>
        <div style={props.licenceChoice ? enabled : disabled} className={styles.productWrapper}>
          <span className={styles.productName}>
              {props.name}
              <span className={styles.productDescription}>
              </span>
          </span>
          <span style={normal} className={styles.productPrice}>
              {inCart ? 'ADDED' : props.price}
          </span>
        </div>
      </div>

    </>
  )

  const ItemInCart = ( ) => (
    <>
      <div className={styles.inCart}>
        <div style={added} className={styles.productWrapper}>
          <span className={styles.productName}>
              {props.name}
              <span className={styles.productDescription}>
              </span>
          </span>
          <span style={primary} className={styles.productPrice}>
            {inCart ? 'ADDED' : props.price}
          </span>
        </div>
      </div>
    </>
  )

  return (
    <>

        { inCart ? <ItemInCart/> : <ItemNotInCart/>}
        {/* { props.licenceChoice ? "ayayayayaya" : ""} */}
      {/* 
        <div style={inCart ? disabled : enabled} className={styles.productWrapper}>
            <span className={`product${props.className}`}>
                {props.name}
                <span className={styles.productDescription}>
                  {props.priceFactor1 == 1 ? "  Desktop  " : ""}
                  {props.priceFactor2 == 2 ? "  Web" : ""}
                  {props.priceFactor3 == 3 ? "  App  " : ""}
                </span>
            </span>
            <span style={inCart ? primary : normal} className={styles.productPrice}>
                {props.price}
            </span>
        </div>
         */}
    </>    
  )
}

export default ProductChoice