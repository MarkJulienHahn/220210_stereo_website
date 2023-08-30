import React, { useEffect, useState } from "react";
import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const BuyProtest = ({
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

  const studentPacks = products.filter((x) =>
    x.categories.find((y) => y.name === "Student Packs")
  );

  const items = virtualCart;

  console.log(studentPacks);

  useEffect(() =>
    priceFactor4 != 1
      ? setDiscountPrice(priceFactor1 + priceFactor2 + priceFactor3)
      : setDiscountPrice(null)
  );

  return (
    <div>
      <p className={styles.buyConfigurationHead}>Student Packs</p>

      <div className={styles.buySectionWrapper}>
        {studentPacks.map((product, i) => (
          <div key={i}>
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
                            1,
                            product.name,
                            product.price.raw,
                            720,
                            licenseType
                          );
                      }
                    : () => onRemoveFromVirtualCart(product.id)
                }
              >
                <ProductChoice
                  product={product}
                  name={product.name}
                  price={"EUR 50.00"}
                  discountPrice={"EUR 720.00"}
                  items={items}
                  cart={cart}
                  virtualCart={virtualCart}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyProtest;
