import React from "react";
import styles from "../../styles/ProductChoice.module.css";

const ProductChoice = (props) => {
  let inCart = false;

  const items = props.cart.line_items;

  if (items.some((item) => item.product_id === props.product.id)) {
    inCart = true;
  }

  const added = {
    opacity: 1,
    pointerEvents: "none",
    color: "var(--primary)",
  };

  const enabled = {
    pointerEvents: "auto",
    color: "black",
  };

  const disabled = {
    pointerEvents: "none",
  };

  const primary = {
    color: "var(--primary)",
  };

  const normal = {
    color: "inherit",
  };

  const inBundle1 = props.bundle ? props.bundle.includes("Bundle 2") : null;
  const inBundle2 = props.bundle ? props.bundle.includes("Bundle 1") : null;
  const inBundle3 = props.bundle ? props.bundle.includes("Bundle 3") : null;

  const ItemNotInCart = () => (
    <>
      <div
        className={styles.notInCart}
        style={
          props.hoverFullFamily ||
          (inBundle1 && props.hoverBundle2) ||
          (inBundle2 && props.hoverBundle1) ||
          (inBundle3 && props.hoverBundle3) ||
          (props.addBundle1 && inBundle1) ||
          (props.addBundle2 && inBundle2) ||
          (props.addBundle3 && inBundle3) ||
          props.addFullFamily
            ? {pointerEvents: "none"}
            : normal
        }
      >
        <div
          style={props.licenceChoice && props.licenceUser ? enabled : disabled}
          className={styles.productWrapper}
        >
          <span
            style={
              props.hoverFullFamily ||
              (inBundle1 && props.hoverBundle2) ||
              (inBundle2 && props.hoverBundle1) ||
              (inBundle3 && props.hoverBundle3) ||
              (props.addBundle1 && inBundle1) ||
              (props.addBundle2 && inBundle2) ||
              (props.addBundle3 && inBundle3) ||
              props.addFullFamily
                ? primary
                : normal
            }
            className={styles.productName}
          >
            {props.name}
            <span className={styles.productDescription}></span>
          </span>
          <span style={normal} className={styles.productPrice}>
            {inCart ? "ADDED" : props.price}
          </span>
        </div>
      </div>
    </>
  );

  const ItemInCart = () => (
    <>
      <div className={styles.inCart}>
        <div style={added} className={styles.productWrapper}>
          <span className={styles.productName}>
            {props.name}
            <span className={styles.productDescription}></span>
          </span>
          <span style={primary} className={styles.productPrice}>
            {inCart ? "ADDED" : props.price}
          </span>
        </div>
      </div>
    </>
  );

  return <>{inCart ? <ItemInCart /> : <ItemNotInCart />}</>;
};

export default ProductChoice;
