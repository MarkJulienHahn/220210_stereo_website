import React, { useEffect, useState } from "react";
import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const BuyProtest = ({
  licenseChoice,
  LicenseUser,
  products,
  onAddToCart,
  onAddToVirtualCart,
  onRemoveFromCart,
  onRemoveFromVirtualCart,
  cart,
  virtualCart,
  priceFactor1,
  priceFactor2,
  priceFactor3,
  priceFactor4,
  DesktopLicense,
  WebLicense,
  AppLicense,
  // License,
  NumEmployees,
  NumEmployeesDesktop,
  NumEmployeesWeb,
  NumEmployeesApp,
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

  const [discountPrice, setDiscountPrice] = useState();

  const [licenseType, setLicenseType] = useState();

  const updateLicenseType = (name, license) => {
    products.find((el) => el.name === name).license = `${
      DesktopLicense && "Desktop (" + NumEmployeesDesktop + ") "
    } 
     ${WebLicense && "Web (" + NumEmployeesWeb + ") "} 
    ${AppLicense && "App (" + NumEmployeesApp + ") "}`;
    // NumEmployees != "Student License"
    //   ? `${license} ${NumEmployees} Employees`
    //   : `${license} ${NumEmployees}`;
  };

  const protest = products.filter((x) =>
    x.categories.find((y) => y.name === "Protest Grotesk")
  );

  const protestStyles = protest.filter((x) =>
    x.categories.find((y) => y.name === "Styles")
  );

  const protestBundles = protest.filter((x) =>
    x.categories.find((y) => y.name === "Bundles")
  );

  const priceFactor =
    (priceFactor1 + priceFactor2 + priceFactor3) * priceFactor4;
  const items = cart.line_items;

  const noHover = () => {
    setHoverFullFamily(false), setHoverBundle1(false), setHoverBundle2(false);
    setHoverBundle3(false);
  };

  const clearBundle1 = () => {
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Regular")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Book")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Medium")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Bold")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Heavy")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Full Family")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Essential Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Starter Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
  };

  const clearBundle2 = () => {
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Regular")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Medium")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Heavy")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Full Family")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Deluxe Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Starter Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
  };

  const clearBundle3 = () => {
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Book")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Bold")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Full Family")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Deluxe Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.name.includes("Protest Grotesk Essential Pack")
        ? onRemoveFromCart(item.id)
        : () => {};
    });
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

  const updateBundle3 = (i) => {
    setAddBundle3(i), localStorage.setItem("PGBundle3", JSON.stringify(i));
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
    !items.some((item) => item.product_id === protestBundles[3].id)
      ? updateBundle3(false)
      : "";
  }, [cart]);

  useEffect(() => {
    const data = localStorage.getItem("PGfullFamily");
    setAddFullFamily(JSON.parse(data));
    const data1 = localStorage.getItem("PGBundle1");
    setAddBundle1(JSON.parse(data1));
    const data2 = localStorage.getItem("PGBundle2");
    setAddBundle2(JSON.parse(data2));
    const data3 = localStorage.getItem("PGBundle3");
    setAddBundle3(JSON.parse(data3));
  });

  useEffect(() => {
    setLicenseType(
      `${DesktopLicense && "Desktop (" + NumEmployeesDesktop + ") "} 
       ${WebLicense && "Web (" + NumEmployeesWeb + ") "} 
      ${AppLicense && "App (" + NumEmployeesApp + ") "}`
    );
  });

  const varObject = [
    { fontFamily: "Protest", lable: "Protest Grotesk Thin", wght: 40 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Thin",
      wght: 40,
      ital: 100,
    },
    { fontFamily: "Protest", lable: "Protest Grotesk Light", wght: 70 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Light",
      wght: 70,
      ital: 100,
    },
    { fontFamily: "Protest", lable: "Protest Grotesk Regular", wght: 100 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Regular",
      wght: 100,
      ital: 100,
    },
    { fontFamily: "Protest", lable: "Protest Grotesk Book", wght: 130 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Book",
      wght: 130,
      ital: 100,
    },
    { fontFamily: "Protest", lable: "Protest Grotesk Medium", wght: 160 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Medium",
      wght: 160,
      ital: 100,
    },
    { fontFamily: "Protest", lable: "Protest Grotesk Bold", wght: 190 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Bold",
      wght: 190,
      ital: 100,
    },
    { fontFamily: "Protest", lable: "Protest Grotesk Heavy", wght: 220 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Heavy",
      wght: 220,
      ital: 100,
    },
    { fontFamily: "Protest", lable: "Protest Grotesk Black", wght: 250 },
    {
      fontFamily: "Protest",
      lable: "Protest Grotesk Black",
      wght: 250,
      ital: 100,
    },
  ];

  useEffect(() =>
    priceFactor4 != 1
      ? setDiscountPrice(priceFactor1 + priceFactor2 + priceFactor3)
      : setDiscountPrice(null)
  );

  return (
    <div onMouseEnter={noHover}>
      <div className={styles.buySectionWrapper}>
        <p className={styles.buyConfigurationHead}>Bundles</p>

        {/* FULL FAMILY */}

        <div onMouseLeave={noHover}>
          <div
            item
            onClick={
              licenseChoice &&
              LicenseUser &&
              !items.some((item) => item.product_id === protestBundles[0].id)
                ? async () => {
                    updateLicenseType(
                      protestBundles[0].name,
                      // License,
                      NumEmployees
                    ),
                      clearFullFamily();
                    onAddToCart(protestBundles[0].id, 1 * priceFactor);
                    setTimeout(scrollDown(), 1000);
                    updateFullFamily(true);
                  }
                : () => {
                    onRemoveFromCart(
                      items.find(
                        (item) => item.product_id === protestBundles[0].id
                      ).id
                    );
                    updateFullFamily(false);
                  }
            }
            onMouseEnter={() => setHoverFullFamily(true)}
            onMouseLeave={() => setHoverFullFamily(false)}
          >
            <ProductChoice
              product={protestBundles[0]}
              name={protestBundles[0]?.name}
              price={
                licenseChoice
                  ? `EUR  ${(
                      protestBundles[0]?.price.raw * priceFactor
                    ).toFixed(2)}`
                  : "Please choose a license Type"
              }
              id={protestBundles[0]?.id}
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
              !items.some((item) => item.product_id === protestBundles[1].id)
                ? async () => {
                    updateLicenseType(
                      protestBundles[1].name,
                      // License,
                      NumEmployees
                    ),
                      onAddToCart(protestBundles[1].id, 1 * priceFactor);
                    setTimeout(scrollDown(), 1000);
                    clearBundle1();
                    updateBundle1(true);
                  }
                : () => {
                    onRemoveFromCart(
                      items.find(
                        (item) => item.product_id === protestBundles[1].id
                      ).id
                    );
                    updateBundle1(false);
                  }
            }
            onMouseEnter={() => setHoverBundle1(true)}
            onMouseLeave={() => setHoverBundle1(false)}
          >
            <ProductChoice
              product={protestBundles[1]}
              name={protestBundles[1]?.name}
              price={
                licenseChoice
                  ? `EUR  ${(
                      protestBundles[1]?.price.raw * priceFactor
                    ).toFixed(2)}`
                  : "Please choose a license Type"
              }
              id={protestBundles[1]?.id}
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
              !items.some((item) => item.product_id === protestBundles[2]?.id)
                ? () => {
                    updateLicenseType(
                      protestBundles[2]?.name,
                      // License,
                      NumEmployees
                    ),
                      clearBundle2(),
                      onAddToCart(protestBundles[2]?.id, 1 * priceFactor);
                    setTimeout(scrollDown(), 1000);
                    updateBundle2(true);
                  }
                : () => {
                    onRemoveFromCart(
                      items.find(
                        (item) => item.product_id === protestBundles[2]?.id
                      ).id
                    );
                    updateBundle2(false);
                  }
            }
            onMouseEnter={() => setHoverBundle2(true)}
            onMouseLeave={() => setHoverBundle2(false)}
          >
            <ProductChoice
              product={protestBundles[2]}
              name={protestBundles[2]?.name}
              price={
                licenseChoice
                  ? `EUR  ${(
                      protestBundles[2]?.price.raw * priceFactor
                    ).toFixed(2)}`
                  : "Please choose a license Type"
              }
              id={protestBundles[2]?.id}
              cart={cart}
              licenseChoice={licenseChoice}
            />
          </div>

          {/* STARTER */}

          {/* <div
            item
            onClick={
              licenseChoice &&
              LicenseUser &&
              !items.some((item) => item.product_id === protestBundles[3]?.id)
                ? () => {
                    updateLicenseType(
                      protestBundles[3]?.name,
                      // License,
                      NumEmployees
                    ),
                      clearBundle3(),
                      onAddToCart(protestBundles[3]?.id, 1 * priceFactor);
                    setTimeout(scrollDown(), 1000);
                    updateBundle3(true);
                  }
                : () => {
                    onRemoveFromCart(
                      items.find(
                        (item) => item.product_id === protestBundles[3]?.id
                      ).id
                    );
                    updateBundle3(false);
                  }
            }
            onMouseEnter={() => setHoverBundle3(true)}
            onMouseLeave={() => setHoverBundle3(false)}
          >
            <ProductChoice
              product={protestBundles[3]}
              name={protestBundles[3]?.name}
              price={
                licenseChoice
                  ? `EUR  ${(
                      protestBundles[3]?.price.raw * priceFactor
                    ).toFixed(2)}`
                  : "Please choose a license Type"
              }
              id={protestBundles[3]?.id}
              cart={cart}
              licenseChoice={licenseChoice}
            />
          </div> */}
        </div>
      </div>
      {/* SINGLE STYLE */}
      <div onMouseEnter={noHover}>
        <p className={styles.buyConfigurationHead}>Single Styles</p>

        <div className={styles.buySectionWrapper}>
          {protestStyles.map((product, i) => (
            <div onMouseEnter={noHover} key={i}>
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
                    !virtualCart?.some((item) => item.product_id === product.id)
                      ? () => {
                          updateLicenseType(
                            product.name,
                            // License,
                            NumEmployees
                          ),
                            onAddToVirtualCart(
                              product.id,
                              1 * priceFactor,
                              product.name,
                              product.price.raw * priceFactor,
                              product.price.raw * discountPrice,
                              licenseType
                            );
                          setTimeout(scrollDown(), 1000);
                        }
                      : () => onRemoveFromVirtualCart(product.id)
                  }
                >
                  <ProductChoice
                    product={product}
                    name={product.name}
                    price={
                      licenseChoice
                        ? `EUR  ${(product.price.raw * priceFactor).toFixed(2)}`
                        : "Please choose a license Type"
                    }
                    discountPrice={
                      discountPrice &&
                      `EUR  ${(product.price.raw * discountPrice).toFixed(2)}`
                    }
                    items={items}
                    cart={cart}
                    virtualCart={virtualCart}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyProtest;
