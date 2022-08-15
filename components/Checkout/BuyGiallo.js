import React, { useState } from "react";
import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const BuyGiallo = ({
  licenceChoice,
  LicenceUser,
  products,
  onAddToCart,
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
}) => {
  const [active, setActive] = useState(false);
  const [activeBundle1, setActiveBundle1] = useState(false);
  const [activeBundle2, setActiveBundle2] = useState(false);

  const updateLicenceType = (name, licence) => {
    products.find(
      (el) => el.name === name
    ).licence = `${licence} / ${NumEmployees} Employees`;
  };

  const giallo = products.filter((x) =>
  x.categories.find((y) => y.name === "Giallo Roman")
);

const gialloStyles = giallo.filter((x) =>
  x.categories.find((y) => y.name === "Styles")
);

const gialloBundles = giallo.filter((x) =>
  x.categories.find((y) => y.name === "Bundles")
);

  const priceFactor =
    (priceFactor1 + priceFactor2 + priceFactor3 + priceFactor5 + priceFactor6) *
    priceFactor4;

  const items = cart.line_items;

  console.log(giallo, gialloStyles, gialloBundles);

  return (
    <div
      onMouseEnter={() => {
        setActive(false), setActiveBundle1(false), setActiveBundle2(false);
      }}
    >
      <p className={styles.buyConfigurationHead}>Bundles</p>

      {/* FULL FAMILY */}

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === gialloBundles[0].id)
            ? () => {
                updateLicenceType(gialloBundles[0].name, Licence, NumEmployees),
                  onAddToCart(gialloBundles[0].id, 1 * priceFactor);
              }
            : () =>
                onRemoveFromCart(
                  items.find((item) => item.product_id === gialloBundles[0].id)
                    .id
                )
        }
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <ProductChoice
          product={gialloBundles[0]}
          name={gialloBundles[0].name}
          price={
            licenceChoice
              ? `EUR  ${gialloBundles[0].price.raw * priceFactor}`
              : "Please choose a license Type"
          }
          id={gialloBundles[0].id}
          cart={cart}
          licenceChoice={licenceChoice}
        />
      </div>

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === gialloBundles[2].id)
            ? () => {
                updateLicenceType(gialloBundles[2].name, Licence, NumEmployees),
                  onAddToCart(gialloBundles[2].id, 1 * priceFactor);
              }
            : () =>
                onRemoveFromCart(
                  items.find((item) => item.product_id === gialloBundles[2].id)
                    .id
                )
        }
        onMouseEnter={() => setActiveBundle1(true)}
        onMouseLeave={() => setActiveBundle1(false)}
      >
      <ProductChoice
          product={gialloBundles[2]}
          name={gialloBundles[2].name}
          price={
            licenceChoice
              ? `EUR  ${gialloBundles[2].price.raw * priceFactor}`
              : "Please choose a license Type"
          }
          id={gialloBundles[2].id}
          cart={cart}
          licenceChoice={licenceChoice}
        /> 
      </div>

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === gialloBundles[1].id)
            ? () => {
                updateLicenceType(gialloBundles[1].name, Licence, NumEmployees),
                  onAddToCart(gialloBundles[1].id, 1 * priceFactor);
              }
            : () =>
                onRemoveFromCart(
                  items.find((item) => item.product_id === gialloBundles[1].id)
                    .id
                )
        }
        onMouseEnter={() => setActiveBundle2(true)}
        onMouseLeave={() => setActiveBundle2(false)}
      >
        <ProductChoice
          product={gialloBundles[1]}
          name={gialloBundles[1].name}
          price={
            licenceChoice
              ? `EUR  ${gialloBundles[1].price.raw * priceFactor}`
              : "Please choose a license Type"
          }
          id={gialloBundles[1].id}
          cart={cart}
          licenceChoice={licenceChoice}
        />
      </div>

      <p className={styles.buyConfigurationHead}>Single Styles</p>

      {gialloStyles.map((product) => (
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
              // bundle={product.extra_fields[0].name || undefined}
              related={product.related_products[0] || undefined}
            />
          </div>
        </>
      ))}
    </div>
  );
};
export default BuyGiallo;
