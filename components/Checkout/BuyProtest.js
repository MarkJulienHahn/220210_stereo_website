import React, { useEffect, useState } from "react";
import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const BuyProtest = ({
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
  loading,
}) => {
  const [hoverFullFamily, setHoverFullFamily] = useState(false);
  const [hoverBundle1, setHoverBundle1] = useState(false);
  const [hoverBundle2, setHoverBundle2] = useState(false);

  const [addFullFamily, setAddFullFamily] = useState(false);
  const [addBundle1, setAddBundle1] = useState(false);
  const [addBundle2, setAddBundle2] = useState(false);

  const updateLicenceType = (name, licence) => {
    products.find(
      (el) => el.name === name
    ).licence = `${licence} / ${NumEmployees} Employees`;
  };

  function isProtest(obj) {
    return obj.categories[1].name === "Protest Grotesk";
  }

  function isStyle(obj) {
    return obj.categories[0].name === "Styles";
  }

  function isBundle(obj) {
    return obj.categories[0].name === "Bundles";
  }

  const protest = products.filter(isProtest);
  const protestStyles = protest.filter(isStyle);
  const protestBundles = protest.filter(isBundle);

  const priceFactor =
    (priceFactor1 + priceFactor2 + priceFactor3 + priceFactor5 + priceFactor6) *
    priceFactor4;

  const items = cart.line_items;

  const clearBundle1 = () => {
    items.forEach((item) =>
      item.product_id === "prod_ypbroE93pWo8n4"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_Kvg9l61kNq51bB"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_NqKE50NeZDwdgB"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_kpnNwA1JXrwmXB"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_8XO3wpMOVxoYAz"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_bO6J5aBOnAlEjp"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_9BAmwJAqK4leXd"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_mOVKl4a0nYwprR"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_eN1ql9KEg2oz3y"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_gnZO5kr82vo7MN"
        ? onRemoveFromCart(item.id)
        : () => {}
    );

    items.forEach((item) =>
      item.product_id === "prod_nPEVlN9q3z5a7d"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_VKXmwDEmWVorgD"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
  };

  const clearBundle2 = () => {
    items.forEach((item) =>
      item.product_id === "prod_ypbroE93pWo8n4"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_Kvg9l61kNq51bB"
        ? onRemoveFromCart(item.id)
        : () => {}
    );

    items.forEach((item) =>
      item.product_id === "prod_8XO3wpMOVxoYAz"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_bO6J5aBOnAlEjp"
        ? onRemoveFromCart(item.id)
        : () => {}
    );

    items.forEach((item) =>
      item.product_id === "prod_eN1ql9KEg2oz3y"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_gnZO5kr82vo7MN"
        ? onRemoveFromCart(item.id)
        : () => {}
    );

    items.forEach((item) =>
      item.product_id === "prod_nPEVlN9q3z5a7d"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
    items.forEach((item) =>
      item.product_id === "prod_RqEv5xzLr9wZz4"
        ? onRemoveFromCart(item.id)
        : () => {}
    );
  };

  const clearFullFamily = () => {
    items.forEach((item) => {
      item.name.includes("Protest Grotesk")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
  };

  const updateFullFamily = (i) => {
    setAddFullFamily(i),
      localStorage.setItem("PGfullFamily", JSON.stringify(i));
  };

  const updateBundle1 = (i) => {
    setAddBundle1(i), localStorage.setItem("PGBundle1", JSON.stringify(i));
  };

  const updateBundle2 = (i) => {
    setAddBundle2(i), localStorage.setItem("PGBundle2", JSON.stringify(i));
  };

  useEffect(() => {
    !items.some((item) => item.product_id === protestBundles[0].id)
      ? updateFullFamily(false)
      : "";
    !items.some((item) => item.product_id === protestBundles[1].id)
      ? updateBundle1(false)
      : "";
    !items.some((item) => item.product_id === protestBundles[2].id)
      ? updateBundle2(false)
      : "";
  }, [cart]);

  useEffect(() => {
    const data = localStorage.getItem("PGfullFamily");
    setAddFullFamily(JSON.parse(data));
    const data2 = localStorage.getItem("PGBundle1");
    setAddBundle1(JSON.parse(data2));
    const data3 = localStorage.getItem("PGBundle2");
    setAddBundle2(JSON.parse(data3));
  });

  return (
    <div
      onMouseEnter={() => {
        setHoverFullFamily(false),
          setHoverBundle1(false),
          setHoverBundle2(false);
      }}
    >
      <p className={styles.buyConfigurationHead}>Bundles</p>

      {/* FULL FAMILY */}

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === protestBundles[0].id)
            ? async () => {
                updateLicenceType(
                  protestBundles[0].name,
                  Licence,
                  NumEmployees
                ),
                  clearFullFamily();
                onAddToCart(protestBundles[0].id, 1 * priceFactor);

                updateFullFamily(true);
              }
            : () => {
                onRemoveFromCart(
                  items.find((item) => item.product_id === protestBundles[0].id)
                    .id
                );
                updateFullFamily(false);
              }
        }
        onMouseEnter={() => setHoverFullFamily(true)}
        onMouseLeave={() => setHoverFullFamily(false)}
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

      {/* DELUXE */}

      <div
        item
        onClick={
          licenceChoice &&
          LicenceUser &&
          !items.some((item) => item.product_id === protestBundles[1].id)
            ? async () => {
                updateLicenceType(
                  protestBundles[1].name,
                  Licence,
                  NumEmployees
                ),
                  onAddToCart(protestBundles[1].id, 1 * priceFactor);
                clearBundle1();
                updateBundle1(true);
              }
            : () => {
                onRemoveFromCart(
                  items.find((item) => item.product_id === protestBundles[1].id)
                    .id
                );
                updateBundle1(false);
              }
        }
        onMouseEnter={() => setHoverBundle2(true)}
        onMouseLeave={() => setHoverBundle2(false)}
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

      {/* ESSENTIAL */}

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
                  clearBundle2(),
                  onAddToCart(protestBundles[2].id, 1 * priceFactor);
                updateBundle2(true);
              }
            : () => {
                onRemoveFromCart(
                  items.find((item) => item.product_id === protestBundles[2].id)
                    .id
                );
                updateBundle2(false);
              }
        }
        onMouseEnter={() => setHoverBundle1(true)}
        onMouseLeave={() => setHoverBundle1(false)}
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
              items={items}
              cart={cart}
              hoverFullFamily={hoverFullFamily}
              hoverBundle1={hoverBundle1}
              hoverBundle2={hoverBundle2}
              bundle={product.extra_fields.map((a) => a.name)}
              related={product.related_products[0] || undefined}
              addFullFamily={addFullFamily}
              addBundle2={addBundle2}
              addBundle1={addBundle1}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default BuyProtest;
