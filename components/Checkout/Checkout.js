import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import styles from "../../styles/Buy.module.css";
import { commerce } from "../../lib/commerce";

import Button from "../Button";
import MouseButton from "../MouseButton";
import BigMouseButton from "../BigMouseButton";

import BuyGiallo from "./BuyGiallo";
import BuyProtest from "./BuyProtest";
import BuyProtestMono from "./BuyProtestMono";

const LicensingTerms = dynamic(() => import("./LicensingTerms"));

const CheckoutStep2 = dynamic(() => import("./CheckoutStep2"));
const CheckoutStep3 = dynamic(() => import("./CheckoutStep3"));
const CheckoutStep4 = dynamic(() => import("./CheckoutStep4"));

const Checkout = ({
  setShowCheckout,
  getPaypalPaymentId,
  products,
  cart,
  handleAddToCart,
  handleEmptyCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleUpdateCartPrice,
  handleCouponCode,
  setCart,
  loading,
  onCaptureCheckout,
  getLiveObject,
  live,
  refreshCart,
  setOrder,
  order,
  error,
  font,
}) => {
  const [showCheckoutStep1, setShowCheckoutStep1] = useState(true);
  const [showCheckoutStep2, setShowCheckoutStep2] = useState(false);
  const [showCheckoutStep3, setShowCheckoutStep3] = useState(false);
  const [showCheckoutStep4, setShowCheckoutStep4] = useState(false);
  const [fadeCheckout, setFadeCheckout] = useState(false);
  const [showBuy, setShowBuy] = useState(font);
  const [showLicensing, setShowLicensing] = useState(false);
  const [Processing, setProcessing] = useState(false);

  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const [buttonContent, setButtonContent] = useState(null);
  const [bigButtonContent, setBigButtonContent] = useState(null);
  const [showCoupon, setShowCoupon] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [priceFactor1, setPriceFactor1] = useState(1);
  const [priceFactor2, setPriceFactor2] = useState(0);
  const [priceFactor3, setPriceFactor3] = useState(0);
  const [priceFactor4, setPriceFactor4] = useState(0);
  const [priceFactor5, setPriceFactor5] = useState(0);
  const [priceFactor6, setPriceFactor6] = useState(0);
  const [priceFactor7, setPriceFactor7] = useState(0);

  const [LicenceUser, setLicenceUser] = useState([]);
  const [DesktopLicence, setDesktopLicence] = useState([]);
  const [WebLicence, setWebLicence] = useState("");
  const [InteractiveLicence, setInteractiveLicence] = useState("");
  const [SocialLicence, setSocialLicence] = useState("");
  const [LogoLicence, setLogoLicence] = useState("");
  const [VideoLicence, setVideoLicence] = useState("");
  const [NumEmployees, setNumEmployees] = useState("");

  const [licenceChoice, setLicenceChoice] = useState(false);

  const [animated, setAnimated] = useState(false);

  const Licence = [
    `${DesktopLicence} ${WebLicence} ${InteractiveLicence} ${SocialLicence} ${LogoLicence} ${VideoLicence}`,
  ];

  const updateLicenceUser = (user) => {
    setLicenceUser(user);
  };

  const updateDesktopLicence = (licence) => {
    setDesktopLicence(licence);
  };
  const updateWebLicence = (licence) => {
    setWebLicence(licence);
  };
  const updateInteractiveLicence = (licence) => {
    setInteractiveLicence(licence);
  };
  const updateSocialLicence = (licence) => {
    setSocialLicence(licence);
  };
  const updateLogoLicence = (licence) => {
    setLogoLicence(licence);
  };
  const updateVideoLicence = (licence) => {
    setVideoLicence(licence);
  };
  const updateNumEmployees = (num) => {
    setNumEmployees(num);
  };

  useEffect(() => {
    if (priceFactor4 < 3) {
      updateSocialLicence(""),
        updateLogoLicence(""),
        updateVideoLicence(""),
        updatePriceFactor5(0),
        updatePriceFactor6(0),
        updatePriceFactor7(0);
    }
  }, [priceFactor4]);

  useEffect(() => {
    if (LicenceUser == "Student") {
      updateSocialLicence(""),
        updateLogoLicence(""),
        updateVideoLicence(""),
        updatePriceFactor5(0),
        updatePriceFactor6(0),
        updatePriceFactor7(0);
      updatePriceFactor4(1);
      updateNumEmployees("Student License");
    }
  });

  useEffect(() => {
    if (
      (priceFactor1 +
        priceFactor2 +
        priceFactor3 +
        priceFactor5 +
        priceFactor6 +
        priceFactor7 &&
        priceFactor4 &&
        LicenceUser !== "") ||
      (LicenceUser == "Student" &&
        priceFactor1 + priceFactor2 + priceFactor3 !== 0)
    )
      setLicenceChoice(true);
    else setLicenceChoice(false);
  });

  const updateButtonContent = (input1) => {
    setButtonContent(input1);
  };
  const updateBigButtonContent = (input1) => {
    setBigButtonContent(input1);
  };

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          await setCheckoutToken(token);
          getLiveObject(token.id);
        } catch {
          // if (activeStep !== steps.length) navigate('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const updatePriceFactor1 = (fact1) => {
    setPriceFactor1(fact1);
  };
  const updatePriceFactor2 = (fact2) => {
    setPriceFactor2(fact2);
  };
  const updatePriceFactor3 = (fact3) => {
    setPriceFactor3(fact3);
  };
  const updatePriceFactor4 = (fact4) => {
    setPriceFactor4(fact4);
  };
  const updatePriceFactor5 = (fact5) => {
    setPriceFactor5(fact5);
  };
  const updatePriceFactor6 = (fact6) => {
    setPriceFactor6(fact6);
  };

  const updatePriceFactor7 = (fact7) => {
    setPriceFactor7(fact7);
  };

  const resetLicensing = () => {
    updatePriceFactor1(0),
      updatePriceFactor2(0),
      updatePriceFactor3(0),
      updatePriceFactor4(0),
      updatePriceFactor5(0),
      updatePriceFactor6(0),
      updatePriceFactor7(0),
      updateDesktopLicence(""),
      updateWebLicence(""),
      updateInteractiveLicence(""),
      updateSocialLicence(""),
      updateLogoLicence(""),
      updateVideoLicence(""),
      updateLicenceUser("");
  };

  React.useEffect(() => {
    const data = localStorage.getItem("storage1");
    if (data) {
      setPriceFactor1(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("storage1", JSON.stringify(priceFactor1));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("storage2");
    if (data) {
      setPriceFactor2(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("storage2", JSON.stringify(priceFactor2));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("storage3");
    if (data) {
      setPriceFactor3(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("storage3", JSON.stringify(priceFactor3));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("storage4");
    if (data) {
      setPriceFactor4(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("storage4", JSON.stringify(priceFactor4));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("storage5");
    if (data) {
      setPriceFactor5(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("storage5", JSON.stringify(priceFactor5));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("storage6");
    if (data) {
      setPriceFactor6(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("storage6", JSON.stringify(priceFactor6));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("storage7");
    if (data) {
      setPriceFactor7(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("storage7", JSON.stringify(priceFactor7));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenceUser");
    if (data) {
      setLicenceUser(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenceUser", JSON.stringify(LicenceUser));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenceDesktop");
    if (data) {
      setDesktopLicence(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenceDesktop", JSON.stringify(DesktopLicence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenceWeb");
    if (data) {
      setWebLicence(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenceWeb", JSON.stringify(WebLicence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenceApp");
    if (data) {
      setInteractiveLicence(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenceApp", JSON.stringify(InteractiveLicence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenceSocial");
    if (data) {
      setSocialLicence(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenceSocial", JSON.stringify(SocialLicence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenceLogo");
    if (data) {
      setLogoLicence(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenceLogo", JSON.stringify(LogoLicence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenceVideo");
    if (data) {
      setVideoLicence(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenceVideo", JSON.stringify(VideoLicence));
  });

  React.useEffect(() => {
    localStorage.setItem("licence", JSON.stringify(Licence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("Number of Employees");
    if (data) {
      setNumEmployees(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("Number of Employees", JSON.stringify(NumEmployees));
  });

  const active = {
    color: "var(--primary)",
    opacity: 1,
  };

  const inactive = {
    color: "black",
    opacty: 0.3,
  };

  const buyInactive = {
    opacity: 0.3,
    pointerEvents: "none",
  };

  const buyActive = {
    opacity: 1,
    pointerEvents: "auto",
  };

  const disabled = {
    pointerEvents: "none",
    opacity: 0.3,
  };

  const enabled = {
    // pointerEvents: "auto",
    opacity: 1,
  };

  const none = {};

  const nextStep = () => {
    setShowCheckoutStep3(false), setShowCheckoutStep4(true);
  };

  const next = (data) => {
    setShippingData(data);
    setShowCheckoutStep2(false), setShowCheckoutStep3(true);
  };

  const step2 = async () => {
    setShowCheckoutStep2(true);
    setShowCheckoutStep1(false);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      const orderData = {
        firstName: incomingOrder.customer.firstname,
        lastName: incomingOrder.customer.lastname,
        email: incomingOrder.customer.email,
        adress: incomingOrder.shipping.street,
        zip: incomingOrder.shipping.postal_zip_code,
        city: incomingOrder.shipping.town_city,
        country: incomingOrder.shipping.country,
        state: incomingOrder.shipping.county_state,
        line_items: incomingOrder.order.line_items,
        items: incomingOrder.order.line_items.map((item) => [
          {
            product_name: item.product_name,
          },
          {
            product_license: products.find(
              (el) => el.name === item.product_name
            ).licence,
          },
          { product_price: item.line_total_with_tax.formatted_with_code },
          {
            product_link: incomingOrder.fulfillment.digital.downloads.find(
              (el) => el.product_name === item.product_name
            ).packages[0].access_link,
          },
        ]),
        discount:
          incomingOrder.order.discount.amount_saved?.formatted_with_code,
        total: incomingOrder.order_value.formatted_with_code,
        tax: incomingOrder.tax.amount.formatted_with_code,
        link: incomingOrder.fulfillment.digital.downloads.map((el) =>
          el.packages.map((el) => ` ${el.access_link}`)
        ),
        paymentMethod: `${incomingOrder.transactions[0].payment_source.brand}, 
          ${incomingOrder.transactions[0].payment_source.payments_source_type}, 
          **** ${incomingOrder.transactions[0].payment_source.gateway_reference}`,
        id: incomingOrder.customer_reference,
        licensing: {
          company: shippingData.companyLicense,
          website: shippingData.website,
          city: shippingData.cityLicense,
          zip: shippingData.zipLicense,
          country: shippingData.licenseCountry,
        },
      };

      setProcessing(false);
      nextStep();
      handleEmptyCart();

      await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(orderData),
      });
    } catch (error) {
      setErrorMessage(error.data.error.message);
      alert(
        "Oops... This payment method is currently unavailable. Please contact support, sorry!"
      );
    }
  };

  const fade = {
    opacity: 0,
  };

  const notFade = {
    opacity: 1,
  };

  const fadeOutCheckout = async () => {
    setFadeCheckout(true),
      await setTimeout(function () {
        setShowCheckout(false);
      }, 300);
  };

  const checkoutOverview = useRef(null);
  const checkoutList = useRef(null);

  const scrollDown = () => {
    setTimeout(function () {
      checkoutOverview.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 2000);
  };

  const scrollUp = () => {
    checkoutList.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    loading
      ? (updateButtonContent("calculating"), setAnimated(true))
      : (updateButtonContent(""), setAnimated(false));
  }, [loading]);

  useEffect(() => {
    scrollUp();
  }, [showBuy]);

  return (
    <div>
      <div
        className={styles.buyBackground}
        style={fadeCheckout ? fade : notFade}
      ></div>
      <div className={styles.buyWrapper} style={fadeCheckout ? fade : notFade}>
        {!showCheckoutStep2 && !showCheckoutStep3 && !showCheckoutStep4 ? (
          <div className={styles.buttonsLeftWrapper}>
            <Button
              lable={"Back"}
              subclass={"secondary"}
              onClick={() => fadeOutCheckout(false)}
            />
            <Button
              lable={"Reset Licensing"}
              subclass={"quaternary"}
              onClick={() => resetLicensing()}
            />
            <Button
              lable={"Licensing Info"}
              subclass={"quaternary"}
              onClick={() => setShowLicensing(true)}
            />
          </div>
        ) : (
          ""
        )}

        {!showCheckoutStep2 && !showCheckoutStep3 && !showCheckoutStep4 ? (
          <>
            <div className={styles.buttonsRightWrapper}>
              <Button
                lable={"Empty Cart"}
                onClick={() => refreshCart()}
                subclass={
                  cart.line_items.length ? "quaternary" : "quaternaryMuted"
                }
              />
              <Button
                lable={"Continue to Checkout"}
                onClick={
                  cart.line_items.length && checkoutToken && live
                    ? () => {
                        step2();
                      }
                    : () => {}
                }
                subclass={
                  cart.line_items.length && checkoutToken && live
                    ? "primary"
                    : "quaternaryMuted"
                }
              />
            </div>
            {showLicensing && (
              <LicensingTerms
                showLicensing={showLicensing}
                setShowLicensing={setShowLicensing}
              />
            )}
          </>
        ) : (
          ""
        )}

        {showCheckoutStep1 ? (
          <>
            <MouseButton
              lable={buttonContent}
              animated={animated}
            />
            <BigMouseButton lable={bigButtonContent} />

            <div className={styles.buyTableWrapper}>
              <div className={styles.buyConfigurationWrapper}>
                <ul className={styles.buyConfiguration}>
                  <li className={styles.buyConfigurationHead}>
                    [ 1 ] LICENSE TYPE
                  </li>
                  <div
                    onMouseEnter={() =>
                      updateBigButtonContent(
                        <div>
                          <span style={{ fontVariationSettings: `"wght" 200` }}>
                            Client:
                          </span>{" "}
                          Choose this if you’re buying a license for your
                          client’s project.
                          <br />
                          <br />
                          <span style={{ fontVariationSettings: `"wght" 200` }}>
                            Designer:
                          </span>{" "}
                          Choose this for your own or your agency’s project.
                          <br />
                          <br />
                          <span style={{ fontVariationSettings: `"wght" 200` }}>
                            Student:
                          </span>{" "}
                          Choose this if you are a student and you want to use a
                          font for your personal project.
                        </div>
                      )
                    }
                    onMouseLeave={() => updateBigButtonContent("")}
                    style={{ paddingTop: "30px" }}
                  >
                    <li className={styles.buyConfigurationHead}>
                      &#8594; License Owner
                    </li>
                  </div>
                  <li
                    style={LicenceUser == "Client" ? active : inactive}
                    onClick={
                      LicenceUser !== "Client"
                        ? () => updateLicenceUser("Client")
                        : () => updateLicenceUser("")
                    }
                  >
                    Client
                  </li>
                  <li
                    style={LicenceUser == "Designer" ? active : inactive}
                    onClick={
                      LicenceUser == "Designer"
                        ? () => updateLicenceUser("")
                        : () => updateLicenceUser("Designer")
                    }
                  >
                    Designer
                  </li>

                  <li
                    style={LicenceUser == "Student" ? active : inactive}
                    onClick={
                      LicenceUser !== "Student"
                        ? () => updateLicenceUser("Student")
                        : () => updateLicenceUser("")
                    }
                  >
                    Student
                  </li>

                  <div
                    className={styles.buyConfigurationSection}
                    style={
                      !LicenceUser || LicenceUser == "Student"
                        ? disabled
                        : enabled
                    }
                  >
                    <div
                      onMouseEnter={() =>
                        updateBigButtonContent(
                          "The company size is definded by the total amount of people working for a specific company. If you are buying a license for a client, its the amount of people working for that entity and if you are buying the license for yourself it’s the number of people working for your design firm or agency."
                        )
                      }
                      onMouseLeave={() => updateBigButtonContent("")}
                    >
                      <li className={styles.buyConfigurationHead}>
                        &#8594; Company Size
                      </li>
                    </div>

                    <li
                      style={priceFactor4 === 2 ? active : inactive}
                      onClick={
                        priceFactor4 === 2
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(2), updateNumEmployees(5);
                            }
                      }
                    >
                      Up to 5 people
                    </li>
                    <li
                      style={priceFactor4 === 3 ? active : inactive}
                      onClick={
                        priceFactor4 === 3
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(3), updateNumEmployees(10);
                            }
                      }
                    >
                      Up to 10 people
                    </li>

                    <li
                      style={priceFactor4 === 4 ? active : inactive}
                      onClick={
                        priceFactor4 === 4
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(4), updateNumEmployees(25);
                            }
                      }
                    >
                      Up to 25 people
                    </li>
                    <li
                      style={priceFactor4 === 5 ? active : inactive}
                      onClick={
                        priceFactor4 === 5
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(5), updateNumEmployees(50);
                            }
                      }
                    >
                      Up to 50 people
                    </li>
                    <li
                      style={priceFactor4 === 6 ? active : inactive}
                      onClick={
                        priceFactor4 === 6
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(6), updateNumEmployees(100);
                            }
                      }
                    >
                      Up to 100 people
                    </li>
                    <li
                      style={priceFactor4 === 8 ? active : inactive}
                      onClick={
                        priceFactor4 === 8
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(8), updateNumEmployees(150);
                            }
                      }
                    >
                      Up to 150 people
                    </li>
                    <li
                      style={priceFactor4 === 11 ? active : inactive}
                      onClick={
                        priceFactor4 === 11
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(11), updateNumEmployees(250);
                            }
                      }
                    >
                      Up to 250 people
                    </li>
                    <li
                      style={priceFactor4 === 14 ? active : inactive}
                      onClick={
                        priceFactor4 === 14
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(14), updateNumEmployees(500);
                            }
                      }
                    >
                      Up to 500 people
                    </li>
                    <li
                      style={priceFactor4 === 24 ? active : inactive}
                      onClick={
                        priceFactor4 === 24
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(24), updateNumEmployees(1000);
                            }
                      }
                    >
                      Up to 1000 people
                    </li>
                    <li
                      style={priceFactor4 === 40 ? active : inactive}
                      onClick={
                        priceFactor4 === 40
                          ? () => {
                              updatePriceFactor4(0);
                            }
                          : () => {
                              updatePriceFactor4(40), updateNumEmployees(1500);
                            }
                      }
                    >
                      Up to 1500 people
                    </li>
                    <li
                      onMouseEnter={() => updateButtonContent("Custom Request")}
                      onMouseLeave={() => updateButtonContent("")}
                    >
                      <a href="mailto:licensing@stereotypefaces.com">
                        Over 1500 people
                      </a>
                    </li>
                  </div>

                  <div
                    className={styles.buyConfigurationSection}
                    style={
                      (priceFactor4 > 1 && LicenceUser) ||
                      LicenceUser == "Student"
                        ? enabled
                        : disabled
                    }
                  >
                    <div
                      onMouseEnter={() =>
                        updateBigButtonContent(
                          "Pick the appropriate license for your specific media application(s). If the company size of your project is not bigger than five (5), the Social Media, Logo and Video-licenses will be included in the Desktop license."
                        )
                      }
                      onMouseLeave={() => updateBigButtonContent("")}
                    >
                      <li className={styles.buyConfigurationHead}>
                        &#8594; License Type
                      </li>
                    </div>

                    <li
                      style={priceFactor1 === 9 ? active : inactive}
                      onClick={
                        priceFactor1 === 9
                          ? () => {
                              updatePriceFactor1(0), updateDesktopLicence("");
                            }
                          : () => {
                              updatePriceFactor1(9),
                                updateDesktopLicence("Desktop");
                            }
                      }
                    >
                      Desktop License
                    </li>

                    <li
                      style={priceFactor2 === 14 ? active : inactive}
                      onClick={
                        priceFactor2 === 14
                          ? () => {
                              updatePriceFactor2(0), updateWebLicence("");
                            }
                          : () => {
                              updatePriceFactor2(14), updateWebLicence("Web");
                            }
                      }
                    >
                      Web License
                    </li>

                    <li
                      style={priceFactor3 === 24 ? active : inactive}
                      onClick={
                        priceFactor3 === 24
                          ? () => {
                              updatePriceFactor3(0),
                                updateInteractiveLicence("");
                            }
                          : () => {
                              updatePriceFactor3(24),
                                updateInteractiveLicence("Interactive");
                            }
                      }
                    >
                      App/Game License
                    </li>

                    <div
                      onMouseEnter={
                        priceFactor4 == 2
                          ? () =>
                              updateButtonContent("Included in Desktop License")
                          : () => {}
                      }
                      onMouseLeave={() => updateButtonContent("")}
                    >
                      <div
                        style={
                          priceFactor4 == 2 || LicenceUser == "Student"
                            ? disabled
                            : enabled
                        }
                      >
                        <li
                          style={priceFactor5 === 8 ? active : none}
                          onClick={
                            priceFactor4 >= 3 && priceFactor5 === 8
                              ? () => {
                                  updatePriceFactor5(0),
                                    updateSocialLicence("");
                                }
                              : () => {
                                  updatePriceFactor5(8),
                                    updateSocialLicence("Social Media");
                                }
                          }
                        >
                          Social Media License
                        </li>

                        <li
                          style={priceFactor6 === 8 ? active : inactive}
                          onClick={
                            priceFactor6 === 8
                              ? () => {
                                  updatePriceFactor6(0), updateLogoLicence("");
                                }
                              : () => {
                                  updatePriceFactor6(8),
                                    updateLogoLicence("Logo");
                                }
                          }
                        >
                          Logo License
                        </li>
                        <li
                          style={priceFactor7 === 12 ? active : inactive}
                          onClick={
                            priceFactor7 === 12
                              ? () => {
                                  updatePriceFactor7(0), updateVideoLicence("");
                                }
                              : () => {
                                  updatePriceFactor7(12),
                                    updateVideoLicence("Video");
                                }
                          }
                        >
                          Video License
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
                <div className={styles.mobileLicensingButton}>
                  <Button
                    lable={"Licensing Terms"}
                    subclass={"quaternary"}
                    onClick={() => setShowLicensing(true)}
                  />
                </div>
              </div>

              <div className={styles.buyTable}>
                <p className={styles.buyHead} ref={checkoutList}>
                  [ 2 ] TYPEFACE
                </p>

                <div className={styles.buyTableButtons}>
                  <Button
                    lable={"Protest Grotesk"}
                    subclass={
                      showBuy == "Protest" ? "secondaryMuted" : "quaternary"
                    }
                    onClick={() => setShowBuy("Protest")}
                  />
                  <Button
                    lable={"Protest Grotesk Mono"}
                    subclass={
                      showBuy == "Protest Mono"
                        ? "secondaryMuted"
                        : "quaternary"
                    }
                    onClick={() => setShowBuy("Protest Mono")}
                  />
                  <Button
                    lable={"Giallo Roman"}
                    subclass={
                      showBuy == "Giallo" ? "secondaryMuted" : "quaternary"
                    }
                    onClick={() => setShowBuy("Giallo")}
                  />
                  <div
                    style={{ opacity: "0.6" }}
                    onMouseEnter={() => updateButtonContent("Coming Soon!")}
                    onMouseLeave={() => updateButtonContent("")}
                  >
                    <Button
                      lable={"Giallo Roman Mono"}
                      subclass={"quaternaryMuted"}
                    />
                  </div>

                  <div
                    style={{ opacity: "0.6" }}
                    onMouseEnter={() => updateButtonContent("Coming Soon!")}
                    onMouseLeave={() => updateButtonContent("")}
                  >
                    <Button lable={"Automat"} subclass={"quaternaryMuted"} />
                  </div>
                </div>

                <div
                  onMouseEnter={
                    !licenceChoice || !LicenceUser
                      ? () =>
                          updateButtonContent(
                            "Please complete your Licence Choice"
                          )
                      : () => {}
                  }
                  onMouseLeave={
                    !licenceChoice || !LicenceUser
                      ? () => updateButtonContent("")
                      : () => {}
                  }
                >
                  <div
                    style={
                      (licenceChoice && priceFactor4 > 1) ||
                      (LicenceUser == "Student" && licenceChoice)
                        ? buyActive
                        : buyInactive
                    }
                    className={styles.buyTableContent}
                  >
                    {showBuy == "Protest" && (
                      <div
                        style={
                          loading ? { pointerEvents: "none", opacity: 0.4 } : {}
                        }
                      >
                        <BuyProtest
                          products={products}
                          onAddToCart={handleAddToCart}
                          handleEmptyCart={handleEmptyCart}
                          onRemoveFromCart={handleRemoveFromCart}
                          onUpdateCartQty={handleUpdateCartQty}
                          cart={cart}
                          checkoutToken={checkoutToken}
                          priceFactor1={priceFactor1}
                          priceFactor2={priceFactor2}
                          priceFactor3={priceFactor3}
                          priceFactor4={priceFactor4}
                          priceFactor5={priceFactor5}
                          priceFactor6={priceFactor6}
                          priceFactor7={priceFactor7}
                          licenceChoice={licenceChoice}
                          LicenceUser={LicenceUser}
                          onUpdateCartPrice={handleUpdateCartPrice}
                          Licence={Licence}
                          NumEmployees={NumEmployees}
                          scrollDown={scrollDown}
                        />
                      </div>
                    )}
                    {showBuy == "Protest Mono" && (
                      <div
                        style={
                          loading ? { pointerEvents: "none", opacity: 0.4 } : {}
                        }
                      >
                        <BuyProtestMono
                          products={products}
                          onAddToCart={handleAddToCart}
                          handleEmptyCart={handleEmptyCart}
                          onRemoveFromCart={handleRemoveFromCart}
                          onUpdateCartQty={handleUpdateCartQty}
                          cart={cart}
                          checkoutToken={checkoutToken}
                          priceFactor1={priceFactor1}
                          priceFactor2={priceFactor2}
                          priceFactor3={priceFactor3}
                          priceFactor4={priceFactor4}
                          priceFactor5={priceFactor5}
                          priceFactor6={priceFactor6}
                          priceFactor7={priceFactor7}
                          licenceChoice={licenceChoice}
                          LicenceUser={LicenceUser}
                          onUpdateCartPrice={handleUpdateCartPrice}
                          Licence={Licence}
                          NumEmployees={NumEmployees}
                          scrollDown={scrollDown}
                        />
                      </div>
                    )}
                    {showBuy == "Giallo" && (
                      <BuyGiallo
                        products={products}
                        onAddToCart={handleAddToCart}
                        handleEmptyCart={handleEmptyCart}
                        onRemoveFromCart={handleRemoveFromCart}
                        onUpdateCartQty={handleUpdateCartQty}
                        cart={cart}
                        checkoutToken={checkoutToken}
                        priceFactor1={priceFactor1}
                        priceFactor2={priceFactor2}
                        priceFactor3={priceFactor3}
                        priceFactor4={priceFactor4}
                        priceFactor5={priceFactor5}
                        priceFactor6={priceFactor6}
                        priceFactor7={priceFactor7}
                        licenceChoice={licenceChoice}
                        LicenceUser={LicenceUser}
                        onUpdateCartPrice={handleUpdateCartPrice}
                        Licence={Licence}
                        NumEmployees={NumEmployees}
                        scrollDown={scrollDown}
                      />
                    )}
                  </div>
                </div>

                <p className={styles.cartHead}>
                  {cart.line_items.length || "" ? "CART" : "YOUR CART IS EMPTY"}{" "}
                </p>

                <div className={styles.totalWrapper} ref={checkoutOverview}>
                  <div className={styles.overviewItems}>
                    {cart.line_items.map((item) => (
                      <>
                        <div
                          className={styles.productWrapper}
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          <span className={styles.cartItem}>
                            — {item.name}
                            <br />
                            <span className={styles.licenceType}>
                              {
                                products.find((el) => el.name === item.name)
                                  .licence
                              }
                            </span>
                          </span>

                          <span className={styles.productPrice}>
                            EUR {item.line_total.formatted}
                          </span>
                          <span className={styles.cartRemove}>
                            &#8594; Remove
                          </span>
                        </div>
                      </>
                    ))}
                  </div>

                  {cart.line_items.length | undefined ? (
                    <>
                      <div className={styles.total}>
                        <span>Total (incl. Tax)</span>
                        <span>EUR {cart.subtotal.formatted}</span>
                      </div>
                      <div className={styles.emptyCartMobile}>
                        <Button
                          lable={"Empty Cart"}
                          onClick={() => refreshCart()}
                          subclass={
                            cart.line_items.length
                              ? "quaternary"
                              : "quaternaryMuted"
                          }
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  <div className={styles.buttonsMobileWrapper}>
                    <Button
                      lable={"Continue to Checkout"}
                      onClick={
                        cart.line_items.length && checkoutToken && live
                          ? () => {
                              step2();
                            }
                          : () => {}
                      }
                      subclass={
                        cart.line_items.length && checkoutToken && live
                          ? "primary"
                          : "quaternaryMuted"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {showCheckoutStep2 && (
          <CheckoutStep2
            products={products}
            cart={cart}
            live={live}
            checkoutToken={checkoutToken}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            handleUpdateCartQty={handleUpdateCartQty}
            setShowCheckoutStep2={setShowCheckoutStep2}
            setShowCheckoutStep1={setShowCheckoutStep1}
            setShowCoupon={setShowCoupon}
            showCoupon={showCoupon}
            handleCouponCode={handleCouponCode}
            getLiveObject={getLiveObject}
            next={next}
          />
        )}

        {showCheckoutStep3 && (
          <CheckoutStep3
            products={products}
            cart={cart}
            live={live}
            checkoutToken={checkoutToken}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            handleUpdateCartQty={handleUpdateCartQty}
            setShowCheckoutStep1={setShowCheckoutStep1}
            setShowCheckoutStep2={setShowCheckoutStep2}
            setShowCheckoutStep3={setShowCheckoutStep3}
            setShowCoupon={setShowCoupon}
            showCoupon={showCoupon}
            handleCouponCode={handleCouponCode}
            setCart={setCart}
            nextStep={nextStep}
            shippingData={shippingData}
            onCaptureCheckout={handleCaptureCheckout}
            getLiveObject={getLiveObject}
            getPaypalPaymentId={getPaypalPaymentId}
            Processing={Processing}
            setProcessing={setProcessing}
          />
        )}

        {showCheckoutStep4 && (
          <CheckoutStep4
            products={products}
            cart={cart}
            live={live}
            checkoutToken={checkoutToken}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            handleUpdateCartQty={handleUpdateCartQty}
            setShowCheckoutStep1={setShowCheckoutStep1}
            setShowCheckoutStep2={setShowCheckoutStep2}
            setShowCheckoutStep3={setShowCheckoutStep3}
            nextStep={nextStep}
            shippingData={shippingData}
            onCaptureCheckout={handleCaptureCheckout}
            setShowCheckout={setShowCheckout}
            refreshCart={refreshCart}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
