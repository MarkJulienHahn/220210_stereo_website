import React, { useEffect, useState } from "react";
import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const varBundleObject = [
  [
    {
      bundle: true,

      styles: [
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Light",
          wght: 100,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Light Italic",
          wght: 100,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Regular",
          wght: 200,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Regular Italic",
          wght: 200,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Book",
          wght: 300,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Book Italic",
          wght: 300,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Medium",
          wght: 400,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Medium Italic",
          wght: 400,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Bold",
          wght: 500,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Bold Italic",
          wght: 500,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Heavy",
          wght: 600,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Heavy Italic",
          wght: 600,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Black",
          wght: 700,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Black Italic",
          wght: 700,
          ital: 100,
        },
      ],
    },
  ],

  [
    {
      bundle: true,

      styles: [
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Light",
          wght: 100,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Light Italic",
          wght: 100,
          ital: 100,
        },

        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Book",
          wght: 300,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Book Italic",
          wght: 300,
          ital: 100,
        },

        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Bold",
          wght: 500,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Bold Italic",
          wght: 500,
          ital: 100,
        },

        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Black",
          wght: 700,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Black Italic",
          wght: 700,
          ital: 100,
        },
      ],
    },
  ],

  [
    {
      bundle: true,

      styles: [
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Regular",
          wght: 200,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Regular Italic",
          wght: 200,
          ital: 100,
        },

        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Medium",
          wght: 400,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Medium Italic",
          wght: 400,
          ital: 100,
        },

        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Heavy",
          wght: 600,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Heavy Italic",
          wght: 600,
          ital: 100,
        },
      ],
    },
  ],
];

const varObject = [
  {
    fontFamily: "Giallo",
    lable: "Giallo Roman Light",
    wght: 100,
    oblBundle: true,
  },
  {
    fontFamily: "Giallo",
    lable: "Giallo Roman Regular",
    wght: 200,
    oblBundle: true,
  },

  {
    fontFamily: "Giallo",
    lable: "Giallo Roman Book",
    wght: 300,
    oblBundle: true,
  },

  {
    fontFamily: "Giallo",
    lable: "Giallo Roman Medium",
    wght: 400,
    oblBundle: true,
  },

  {
    fontFamily: "Giallo",
    lable: "Giallo Roman Bold",
    wght: 500,
    oblBundle: true,
  },

  {
    fontFamily: "Giallo",
    lable: "Giallo Roman Heavy",
    wght: 600,
    oblBundle: true,
  },

  {
    fontFamily: "Giallo",
    lable: "Giallo Roman Black",
    wght: 700,
    oblBundle: true,
  },
];

const BuyGiallo = ({
  licenseChoice,
  LicenseUser,
  products,
  onAddToVirtualCart,
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
  NumEmployees,
  NumEmployeesDesktop,
  NumEmployeesWeb,
  NumEmployeesApp,
  scrollDown,
  setFontPreview,
  customForm,
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
    (priceFactor1 + priceFactor2 + priceFactor3) * priceFactor4;

  const items = virtualCart;

  const noHover = () => {
    setHoverFullFamily(false), setHoverBundle1(false), setHoverBundle2(false);
    setHoverBundle3(false);
  };

  const clearBundle1 = () => {
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Light")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Book")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Bold")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Black")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Full Family")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Essential Pack")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Starter Pack")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
  };

  const clearBundle2 = () => {
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Regular")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Medium")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Heavy")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Full Family")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Deluxe Pack")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman Starter Pack")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
    });
  };

  // const clearBundle3 = () => {
  //   items.forEach((item) => {
  //     item.product_name.includes("Giallo Roman Book")
  //       ? onRemoveFromVirtualCart(item.id)
  //       : () => {};
  //   });

  //   items.forEach((item) => {
  //     item.product_name.includes("Giallo Roman Bold")
  //       ? onRemoveFromVirtualCart(item.id)
  //       : () => {};
  //   });
  //   items.forEach((item) => {
  //     item.product_name.includes("Giallo Roman Full Family")
  //       ? onRemoveFromVirtualCart(item.id)
  //       : () => {};
  //   });
  //   items.forEach((item) => {
  //     item.product_name.includes("Giallo Roman Deluxe Pack")
  //       ? onRemoveFromVirtualCart(item.id)
  //       : () => {};
  //   });
  //   items.forEach((item) => {
  //     item.product_name.includes("Giallo Roman Essential Pack")
  //       ? onRemoveFromVirtualCart(item.id)
  //       : () => {};
  //   });
  // };

  const clearFullFamily = () => {
    items.forEach((item) => {
      item.product_name.includes("Giallo Roman")
        ? onRemoveFromVirtualCart(item.id)
        : () => {};
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
    // !items.some((item) => item.product_id === gialloBundles[3].id)
    //   ? updateBundle3(false)
    //   : "";
  }, [virtualCart]);

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

  useEffect(() => {
    setLicenseType(
      `${DesktopLicense && "Desktop (" + NumEmployeesDesktop + ") "} 
       ${WebLicense && "Web (" + NumEmployeesWeb + ") "} 
      ${AppLicense && "App (" + NumEmployeesApp + ") "}`
    );
  });

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
          <div className={styles.choiceWrapper}>
            <div
              className={styles.varValues}
              onClick={() => {
                setFontPreview(varBundleObject[0]);
              }}
            >
              SHOW
            </div>
            <div
              item
              onClick={
                licenseChoice &&
                LicenseUser &&
                !virtualCart.some(
                  (item) => item.product_id === gialloBundles[0].id
                )
                  ? async () => {
                      updateLicenseType(gialloBundles[0].name, NumEmployees),
                        clearFullFamily();
                      onAddToVirtualCart(
                        gialloBundles[0].id,
                        1 * priceFactor,
                        gialloBundles[0].name,
                        gialloBundles[0].price.raw * priceFactor,
                        gialloBundles[0].price.raw * discountPrice,
                        licenseType
                      );
                      updateFullFamily(true);
                    }
                  : () => {
                      onRemoveFromVirtualCart(gialloBundles[0].id);
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
                    ? `EUR  ${(
                        gialloBundles[0]?.price.raw * priceFactor
                      ).toFixed(2)}}`
                    : " "
                }
                discountPrice={
                  discountPrice &&
                  `EUR  ${(gialloBundles[0]?.price.raw * discountPrice).toFixed(
                    2
                  )}`
                }
                id={gialloBundles[0]?.id}
                cart={cart}
                licenseChoice={licenseChoice}
                virtualCart={virtualCart}
                customForm={customForm}
              />
            </div>
          </div>

          {/* DELUXE */}
          <div className={styles.choiceWrapper}>
            <div
              className={styles.varValues}
              onClick={() => {
                setFontPreview(varBundleObject[1]);
              }}
            >
              SHOW
            </div>
            <div
              item
              onClick={
                licenseChoice &&
                LicenseUser &&
                !virtualCart.some(
                  (item) => item.product_id === gialloBundles[1].id
                )
                  ? async () => {
                      updateLicenseType(gialloBundles[1].name, NumEmployees),
                        clearBundle1();
                      onAddToVirtualCart(
                        gialloBundles[1].id,
                        1 * priceFactor,
                        gialloBundles[1].name,
                        gialloBundles[1].price.raw * priceFactor,
                        gialloBundles[1].price.raw * discountPrice,
                        licenseType
                      );
                      updateBundle1(true);
                    }
                  : () => {
                      onRemoveFromVirtualCart(gialloBundles[1].id);
                      updateBundle1(false);
                    }
              }
              onMouseEnter={() => setHoverBundle1(true)}
              onMouseLeave={() => setHoverBundle1(false)}
            >
              <ProductChoice
                product={gialloBundles[1]}
                name={gialloBundles[1]?.name}
                price={
                  licenseChoice
                    ? `EUR  ${(
                        gialloBundles[1]?.price.raw * priceFactor
                      ).toFixed(2)}`
                    : " "
                }
                discountPrice={
                  discountPrice &&
                  `EUR  ${(gialloBundles[1]?.price.raw * discountPrice).toFixed(
                    2
                  )}`
                }
                id={gialloBundles[1]?.id}
                cart={cart}
                licenseChoice={licenseChoice}
                virtualCart={virtualCart}
                customForm={customForm}
              />
            </div>
          </div>

          {/* ESSENTIAL */}
          <div className={styles.choiceWrapper}>
            <div
              className={styles.varValues}
              onClick={() => {
                setFontPreview(varBundleObject[2]);
              }}
            >
              SHOW
            </div>
            <div
              item
              onClick={
                licenseChoice &&
                LicenseUser &&
                !virtualCart.some(
                  (item) => item.product_id === gialloBundles[2].id
                )
                  ? async () => {
                      updateLicenseType(gialloBundles[2].name, NumEmployees),
                        clearBundle2();
                      onAddToVirtualCart(
                        gialloBundles[2].id,
                        1 * priceFactor,
                        gialloBundles[2].name,
                        gialloBundles[2].price.raw * priceFactor,
                        gialloBundles[2].price.raw * discountPrice,
                        licenseType
                      );
                      updateBundle2(true);
                    }
                  : () => {
                      onRemoveFromVirtualCart(gialloBundles[2].id);
                      updateBundle2(false);
                    }
              }
              onMouseEnter={() => setHoverBundle2(true)}
              onMouseLeave={() => setHoverBundle2(false)}
            >
              <ProductChoice
                product={gialloBundles[2]}
                name={gialloBundles[2]?.name}
                price={
                  licenseChoice
                    ? `EUR  ${(
                        gialloBundles[1]?.price.raw * priceFactor
                      ).toFixed(2)}}`
                    : " "
                }
                discountPrice={
                  discountPrice &&
                  `EUR  ${(gialloBundles[2]?.price.raw * discountPrice).toFixed(
                    2
                  )}`
                }
                id={gialloBundles[2]?.id}
                cart={cart}
                licenseChoice={licenseChoice}
                virtualCart={virtualCart}
                customForm={customForm}
              />
            </div>
          </div>

          {/* STARTER */}

          {/* <div
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
                    onRemoveFromVirtualCart(
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
                  : " "
              }
              id={gialloBundles[3]?.id}
              cart={cart}
              licenseChoice={licenseChoice}
            />
          </div> */}
        </div>
      </div>

      {/* SINGLE STYLES */}

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
                !virtualCart?.some((item) => item.product_id === product.id)
                  ? () => {
                      updateLicenseType(product.name, NumEmployees),
                        onAddToVirtualCart(
                          product.id,
                          1 * priceFactor,
                          product.name,
                          product.price.raw * priceFactor,
                          product.price.raw * discountPrice,
                          licenseType
                        );
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
                    : " "
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
                customForm={customForm}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BuyGiallo;
