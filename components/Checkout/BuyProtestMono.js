import React, { useState, useEffect } from "react";
import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const BuyProtestMono = ({
  licenceChoice,
  LicenceUser,
  products,
  onAddToCart,
  onUpdateCartQty,
  onRemoveFromCart,
  cart,
  priceFactor1,
  priceFactor2,
  priceFactor3,
  priceFactor4,
  priceFactor5,
  priceFactor6,
  Licence,
  NumEmployees,
  setVfconfig,
}) => {
  const [LineItem, setLineItem] = useState("");
  const [active, setActive] = useState(false);
  const [activeBundle1, setActiveBundle1] = useState(false);
  const [activeBundle2, setActiveBundle2] = useState(false);

  const updateLineItem = (id) => {
    setLineItem(id);
  };

  const lineItem = cart.line_items.find((item) => item.product_id === LineItem);

  const updateLicenceType = (name, licence) => {
    products.find(
      (el) => el.name === name
    ).licence = `${licence} / ${NumEmployees} Employees`;
  };

  function isProtest(obj) {
    return obj.categories[0].name === "Protest Grotesk";
  }

  function isStyle(obj) {
    return obj.categories[1].name === "Styles";
  }

  function isBundle(obj) {
    return obj.categories[1].name === "Bundles";
  }

  const protest = products.filter(isProtest);
  const protestStyles = protest.filter(isStyle);
  const protestBundles = protest.filter(isBundle);

  const priceFactor =
    (priceFactor1 + priceFactor2 + priceFactor3 + priceFactor5 + priceFactor6) *
    priceFactor4;

  const items = cart.line_items;


  return (
    <div onMouseEnter={() => {setActive(false), setActiveBundle1(false), setActiveBundle2(false)}}>
      <p className={styles.buyConfigurationHead}>Bundles</p>

      {/* FULL FAMILY */}

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === protestBundles[0].id)
            ? () => {
                updateLicenceType(
                  protestBundles[0].name,
                  Licence,
                  NumEmployees
                ),
                  onAddToCart(protestBundles[0].id, 1 * priceFactor);
              }
            : () =>
                onRemoveFromCart(
                  items.find((item) => item.product_id === protestBundles[0].id)
                    .id
                )
        }
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <ProductChoice
          product={protestBundles[0]}
          name={protestBundles[0].name}
          price={
            licenceChoice
              ? `EUR  ${protestBundles[0].price.raw * priceFactor}`
              : "Please choose a license Type"
          }
          id={protestBundles[0].id}
          cart={cart}
          licenceChoice={licenceChoice}
        />
      </div>

      {/* BUNDLE 1 */}

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === protestBundles[2].id)
            ? () => {
                updateLicenceType(
                  protestBundles[2].name,
                  Licence,
                  NumEmployees
                ),
                  onAddToCart(protestBundles[2].id, 1 * priceFactor);
              }
            : () =>
                onRemoveFromCart(
                  items.find((item) => item.product_id === protestBundles[2].id)
                    .id
                )
        }
        onMouseEnter={() => setActiveBundle1(true)}
        onMouseLeave={() => setActiveBundle1(false)}
      >
        <ProductChoice
          product={protestBundles[2]}
          name={protestBundles[2].name}
          price={
            licenceChoice
              ? `EUR  ${protestBundles[2].price.raw * priceFactor}`
              : "Please choose a license Type"
          }
          id={protestBundles[2].id}
          cart={cart}
          licenceChoice={licenceChoice}
        />
      </div>

      {/* BUNDLE 2 */}

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === protestBundles[1].id)
            ? () => {
                updateLicenceType(
                  protestBundles[1].name,
                  Licence,
                  NumEmployees
                ),
                  onAddToCart(protestBundles[1].id, 1 * priceFactor);
              }
            : () =>
                onRemoveFromCart(
                  items.find((item) => item.product_id === protestBundles[1].id)
                    .id
                )
        }
        onMouseEnter={() => setActiveBundle2(true)}
        onMouseLeave={() => setActiveBundle2(false)}
      >
        <ProductChoice
          product={protestBundles[1]}
          name={protestBundles[1].name}
          price={
            licenceChoice
              ? `EUR  ${protestBundles[1].price.raw * priceFactor}`
              : "Please choose a license Type"
          }
          id={protestBundles[1].id}
          cart={cart}
          licenceChoice={licenceChoice}
        />
      </div>

      <p className={styles.buyConfigurationHead}>Single Styles</p>

      {protestStyles.map((product) => (
        <>
          <div
            item
            onClick={
              licenceChoice &&
              LicenceUser &&
              !items.some((item) => item.product_id === product.id)
                ? () => {
                    updateLicenceType(product.name, Licence, NumEmployees),
                      onAddToCart(product.id, 1 * priceFactor);
                  }
                : () =>
                    onRemoveFromCart(
                      items.find((item) => item.product_id === product.id).id
                    )
            }
          >
            <ProductChoice
              product={product}
              name={product.name}
              price={
                licenceChoice
                  ? `EUR  ${product.price.raw * priceFactor}`
                  : "Please choose a license Type"
              }
              id={product.id}
              cart={cart}
              active={active}
              activeBundle1={activeBundle1}
              activeBundle2={activeBundle2}
              bundle={product.extra_fields[0].name}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default BuyProtestMono;
