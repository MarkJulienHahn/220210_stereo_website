import React, { useEffect, useState } from "react";
import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const BuyGiallo = ({
  licenseChoice,
  LicenseUser,
  products,
  onAddToCart,
  onRemoveFromCart,
  cart,
  priceFactor1,
  priceFactor2,
  priceFactor3,
  priceFactor4,
  // priceFactor5,
  // priceFactor6,
  // priceFactor7,
  License,
  NumEmployees,
  scrollDown,
  loading,
  setFontPreview,
}) => {
  const [hoverFullFamily, setHoverFullFamily] = useState(false);
  const [hoverBundle1, setHoverBundle1] = useState(false);
  const [hoverBundle2, setHoverBundle2] = useState(false);
  const [hoverBundle3, setHoverBundle3] = useState(false);

  const [addFullFamily, setAddFullFamily] = useState(false);
  const [addBundle1, setAddBundle1] = useState(false);
  const [addBundle2, setAddBundle2] = useState(false);
  const [addBundle3, setAddBundle3] = useState(false);

  const updateLicenseType = (name, license) => {
    products.find((el) => el.name === name).license =
      NumEmployees != "Student License"
        ? `${license} ${NumEmployees} Employees`
        : `${license} ${NumEmployees}`;
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

  const priceFactor = (priceFactor1 + priceFactor2 + priceFactor3) * priceFactor4;
  const items = cart.line_items;

  const clearBundle1 = () => {
    items.forEach((item) => {
      item.name.includes("Giallo Roman Light")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Book")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Bold")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Black")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Full Family")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Essential Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Starter Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
  };

  const clearBundle2 = () => {
    items.forEach((item) => {
      item.name.includes("Giallo Roman Regular")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Medium")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Heavy")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Full Family")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Deluxe Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Starter Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
  };

  const clearBundle3 = () => {
    items.forEach((item) => {
      item.name.includes("Giallo Roman Book")
        ? onRemoveFromCart(item.id)
        : () => {};
    });

    items.forEach((item) => {
      item.name.includes("Giallo Roman Bold")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Full Family")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Deluxe Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Giallo Roman Essential Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
  };

  const clearFullFamily = () => {
    items.forEach((item) => {
      item.name.includes("Giallo Roman") ? onRemoveFromCart(item.id) : () => {};
    });
  };

  const updateFullFamily = (i) => {
    setAddFullFamily(i),
      localStorage.setItem("GialloFullFamily", JSON.stringify(i));
  };

  const updateBundle1 = (i) => {
    setAddBundle1(i), localStorage.setItem("GialloBundle1", JSON.stringify(i));
  };

  const updateBundle2 = (i) => {
    setAddBundle2(i), localStorage.setItem("GialloBundle2", JSON.stringify(i));
  };

  const updateBundle3 = (i) => {
    setAddBundle3(i), localStorage.setItem("GialloBundle3", JSON.stringify(i));
  };

  useEffect(() => {
    !items.some((item) => item.product_id === gialloBundles[0].id)
      ? updateFullFamily(false)
      : "";
    !items.some((item) => item.product_id === gialloBundles[1].id)
      ? updateBundle1(false)
      : "";
    !items.some((item) => item.product_id === gialloBundles[2].id)
      ? updateBundle2(false)
      : "";
    !items.some((item) => item.product_id === gialloBundles[3].id)
      ? updateBundle3(false)
      : "";
  }, [cart]);

  useEffect(() => {
    const data = localStorage.getItem("GialloFullFamily");
    setAddFullFamily(JSON.parse(data));
    const data1 = localStorage.getItem("GialloBundle1");
    setAddBundle1(JSON.parse(data1));
    const data2 = localStorage.getItem("GialloBundle2");
    setAddBundle2(JSON.parse(data2));
    const data3 = localStorage.getItem("GialloBundle3");
    setAddBundle3(JSON.parse(data3));
  });

  const varObject = [
    { fontFamily: "Giallo", lable: "Giallo Roman Light", wght: 100 },
    { fontFamily: "Giallo", lable: "Giallo Roman Light", wght: 100, obli: 100 },
    { fontFamily: "Giallo", lable: "Giallo Roman Regular", wght: 200 },
    {
      fontFamily: "Giallo",
      lable: "Giallo Roman Regular",
      wght: 200,
      obli: 100,
    },
    { fontFamily: "Giallo", lable: "Giallo Roman Book", wght: 300 },
    { fontFamily: "Giallo", lable: "Giallo Roman Book", wght: 300, obli: 100 },
    { fontFamily: "Giallo", lable: "Giallo Roman Medium", wght: 400 },
    {
      fontFamily: "Giallo",
      lable: "Giallo Roman Medium",
      wght: 400,
      obli: 100,
    },
    { fontFamily: "Giallo", lable: "Giallo Roman Bold", wght: 500 },
    { fontFamily: "Giallo", lable: "Giallo Roman Bold", wght: 500, obli: 100 },
    { fontFamily: "Giallo", lable: "Giallo Roman Heavy", wght: 600 },
    { fontFamily: "Giallo", lable: "Giallo Roman Heavy", wght: 600, obli: 100 },
    { fontFamily: "Giallo", lable: "Giallo Roman Black", wght: 700 },
    { fontFamily: "Giallo", lable: "Giallo Roman Black", wght: 700, obli: 100 },
  ];

  return (
    <div
      onMouseEnter={() => {
        setHoverFullFamily(false),
          setHoverBundle1(false),
          setHoverBundle2(false);
        setHoverBundle3(false);
      }}
    >

      <div className={styles.buySectionWrapper}>
        <p className={styles.buyConfigurationHead}>Bundles</p>
        {/* FULL FAMILY */}
        <div
          item
          onClick={
            licenseChoice &&
            LicenseUser &&
            !items.some((item) => item.product_id === gialloBundles[0].id)
              ? async () => {
                  updateLicenseType(
                    gialloBundles[0].name,
                    License,
                    NumEmployees
                  ),
                    clearFullFamily();
                  onAddToCart(gialloBundles[0].id, 1 * priceFactor);
                  setTimeout(scrollDown(), 1000);
                  updateFullFamily(true);
                }
              : () => {
                  onRemoveFromCart(
                    items.find(
                      (item) => item.product_id === gialloBundles[0].id
                    ).id
                  );
                  updateFullFamily(false);
                }
          }
          onMouseEnter={() => setHoverFullFamily(true)}
          onMouseLeave={() => setHoverFullFamily(false)}
        >
          <ProductChoice
            product={gialloBundles[0]}
            name={gialloBundles[0]?.name}
            price={
              licenseChoice
                ? `EUR  ${gialloBundles[0]?.price.raw * priceFactor}`
                : "Please choose a license Type"
            }
            id={gialloBundles[0]?.id}
            cart={cart}
            licenseChoice={licenseChoice}
          />
        </div>
        {/* DELUXE */}
        <div
          item
          onClick={
            licenseChoice &&
            LicenseUser &&
            !items.some((item) => item.product_id === gialloBundles[1]?.id)
              ? () => {
                  updateLicenseType(
                    gialloBundles[1]?.name,
                    License,
                    NumEmployees
                  ),
                    clearBundle1(),
                    onAddToCart(gialloBundles[1]?.id, 1 * priceFactor);
                  setTimeout(scrollDown(), 1000);
                  updateBundle1(true);
                }
              : () => {
                  onRemoveFromCart(
                    items.find(
                      (item) => item.product_id === gialloBundles[1]?.id
                    ).id
                  );
                  updateBundle1(false);
                }
          }
          onMouseEnter={() => setHoverBundle1(true)}
          onMouseLeave={() => setHoverBundle1(false)}
        >
          <ProductChoice
            product={gialloBundles[1]}
            name={gialloBundles[1].name}
            price={
              licenseChoice
                ? `EUR  ${gialloBundles[1].price.raw * priceFactor}`
                : "Please choose a license Type"
            }
            id={gialloBundles[1].id}
            cart={cart}
            licenseChoice={licenseChoice}
          />
        </div>
        {/* ESSENTIAL */}
        <div
          item
          onClick={
            licenseChoice &&
            LicenseUser &&
            !items.some((item) => item.product_id === gialloBundles[2]?.id)
              ? () => {
                  updateLicenseType(
                    gialloBundles[2]?.name,
                    License,
                    NumEmployees
                  ),
                    clearBundle2(),
                    onAddToCart(gialloBundles[2]?.id, 1 * priceFactor);
                  setTimeout(scrollDown(), 1000);
                  updateBundle2(true);
                }
              : () => {
                  onRemoveFromCart(
                    items.find(
                      (item) => item.product_id === gialloBundles[2]?.id
                    ).id
                  );
                  updateBundle2(false);
                }
          }
          onMouseEnter={() => setHoverBundle2(true)}
          onMouseLeave={() => setHoverBundle2(false)}
        >
          <ProductChoice
            product={gialloBundles[2]}
            name={gialloBundles[2].name}
            price={
              licenseChoice
                ? `EUR  ${gialloBundles[2].price.raw * priceFactor}`
                : "Please choose a license Type"
            }
            id={gialloBundles[2].id}
            cart={cart}
            licenseChoice={licenseChoice}
          />
        </div>
        {/* STARTER */}
        <div
          item
          onClick={
            licenseChoice &&
            LicenseUser &&
            !items.some((item) => item.product_id === gialloBundles[3]?.id)
              ? () => {
                  updateLicenseType(
                    gialloBundles[3]?.name,
                    License,
                    NumEmployees
                  ),
                    clearBundle3(),
                    onAddToCart(gialloBundles[3]?.id, 1 * priceFactor);
                  setTimeout(scrollDown(), 1000);
                  updateBundle3(true);
                }
              : () => {
                  onRemoveFromCart(
                    items.find(
                      (item) => item.product_id === gialloBundles[3]?.id
                    ).id
                  );
                  updateBundle3(false);
                }
          }
          onMouseEnter={() => setHoverBundle3(true)}
          onMouseLeave={() => setHoverBundle3(false)}
        >
          <ProductChoice
            product={gialloBundles[3]}
            name={gialloBundles[3]?.name}
            price={
              licenseChoice
                ? `EUR  ${gialloBundles[3]?.price.raw * priceFactor}`
                : "Please choose a license Type"
            }
            id={gialloBundles[3]?.id}
            cart={cart}
            licenseChoice={licenseChoice}
          />
        </div>
      </div>
      <p className={styles.buyConfigurationHead}>Single Styles</p>
      <div className={styles.buySectionWrapper}>
        {gialloStyles.map((product, i) => (
          <div key={i} className={styles.choiceWrapper}>
            <div
              className={styles.varValues}
              onClick={() => {
                setFontPreview(varObject[i]);
              }}
            >
              SHOW
            </div>
            <div
              item
              onClick={
                licenseChoice &&
                LicenseUser &&
                !items.some((item) => item.product_id === product.id)
                  ? () => {
                      updateLicenseType(product.name, License, NumEmployees),
                        onAddToCart(product.id, 1 * priceFactor);
                      setTimeout(scrollDown(), 1000);
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
                  licenseChoice
                    ? `EUR  ${product.price.raw * priceFactor}`
                    : "Please choose a license Type"
                }
                items={items}
                cart={cart}
                hoverFullFamily={hoverFullFamily}
                hoverBundle1={hoverBundle1}
                hoverBundle2={hoverBundle2}
                hoverBundle3={hoverBundle3}
                bundle={product.extra_fields.map((a) => a.name)}
                related={product.related_products[0] || undefined}
                addFullFamily={addFullFamily}
                addBundle1={addBundle1}
                addBundle2={addBundle2}
                addBundle3={addBundle3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BuyGiallo;
