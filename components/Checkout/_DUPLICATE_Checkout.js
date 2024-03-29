import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import dynamic from "next/dynamic";

import styles from "../../styles/Buy.module.css";
import { commerce } from "../../lib/commerce";
import { rates } from "./taxRates";
import { useRouter } from "next/router";

import Button from "../Button";
import MouseButton from "../MouseButton";
import BigMouseButton from "../BigMouseButton";
import StatusBar from "./StatusBar";

import BuyGiallo from "./BuyGiallo";
import BuyProtest from "./BuyProtest";
import BuyProtestMono from "./BuyProtestMono";

import CheckoutFontPreview from "./CheckoutFontPreview";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../public/fonts/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const LicensingTerms = dynamic(() => import("./LicensingTerms"));

const CheckoutStep2 = dynamic(() => import("./CheckoutStep2"));
const CheckoutStep3 = dynamic(() => import("./CheckoutStep3"));
const CheckoutStep4 = dynamic(() => import("./CheckoutStep4"));

const explaination = [
  <>
    ⚠️ Special Offer ⚠️ <br />
    We support students by offering full families for only EUR 50. Only while
    stocks last!
  </>,
  <>
    &#8594; Desktop License
    <br />
    License to use desktop fonts to design, produce and edit printable and
    digital assets. Desktop licensing is calculated by the size of the
    organisation, that installs the font-file on their computer.
  </>,
  <>
    &#8594; Web License
    <br />
    License to use self-hosted webfonts for displaying dynamic text on specified
    website domains. Our package includes WOFF and WOFF2 font formats.
  </>,
  <>
    &#8594; Student License
    <br />
    By checking this, you confirm that you are currently registered at an
    educational institution. No need for proof right now – we might ask for it
    in the future, though.
  </>,
  <>
    &#8594; App License
    <br />
    Chose this license if you are using one of our typefaces for a mobile app or
    game application. This type of licence can’t be purchased via the website –
    you will be redirected to our custom request form.
  </>,
  <>
    &#8594; E-publishing License
    <br />
    Chose this license if you are using one of our typefaces for e-publishing.
    This type of licence can’t be purchased via the website – you will be
    redirected to our custom request form.
  </>,
  <>
    &#8594; Font Modification
    <br />
    Click here, if you would like to modify one of our fonts, for example for
    custom logo projects. In this case we will review your project and make a
    custom offer for you needs. In this case you will be redirected to our
    request form.
  </>,
];

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
  const [showFontList, setShowFontList] = useState(false);
  const [showLicensing, setShowLicensing] = useState(false);
  const [Processing, setProcessing] = useState(false);

  const [taxable, setTaxable] = useState(false);
  const [vatRate, setVatRate] = useState({});

  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const [buttonContent, setButtonContent] = useState(null);
  const [bigButtonContent, setBigButtonContent] = useState(null);
  const [showCoupon, setShowCoupon] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [showDesktop, setShowDesktop] = useState(false);
  const [showWeb, setShowWeb] = useState(false);

  const [priceFactor1, setPriceFactor1] = useState(0);
  const [priceFactor2, setPriceFactor2] = useState(0);
  const [priceFactor3, setPriceFactor3] = useState(0);
  const [priceFactor4, setPriceFactor4] = useState(0);
  const [priceFactor5, setPriceFactor5] = useState(0);
  const [priceFactor6, setPriceFactor6] = useState(0);
  const [priceFactor7, setPriceFactor7] = useState(0);

  const [LicenseUser, setLicenseUser] = useState([]);
  const [DesktopLicense, setDesktopLicense] = useState([]);
  const [WebLicense, setWebLicense] = useState("");
  const [InteractiveLicense, setInteractiveLicense] = useState("");
  const [SocialLicense, setSocialLicense] = useState("");
  const [LogoLicense, setLogoLicense] = useState("");
  const [VideoLicense, setVideoLicense] = useState("");
  const [NumEmployees, setNumEmployees] = useState("");

  const [explIndex, setExplIndex] = useState(null);
  const [licenseChoice, setLicenseChoice] = useState(false);

  const [animated, setAnimated] = useState(false);

  const { windowHeight, windowWidth } = useWindowDimensions();
  const [buyTableHeight, setBuyTableHeight] = useState(null);

  const [fontPreview, setFontPreview] = useState(null);

  const License = [
    `${DesktopLicense && `${DesktopLicense},`} ${
      WebLicense && `${WebLicense},`
    } ${InteractiveLicense && `${InteractiveLicense},`} ${
      SocialLicense && `${SocialLicense},`
    } ${LogoLicense && `${LogoLicense},`} ${
      VideoLicense && `${VideoLicense},`
    }`,
  ];

  const updateLicenseUser = (user) => {
    setLicenseUser(user);
  };

  const updateDesktopLicense = (license) => {
    setDesktopLicense(license);
  };
  const updateWebLicense = (license) => {
    setWebLicense(license);
  };
  const updateInteractiveLicense = (license) => {
    setInteractiveLicense(license);
  };
  const updateSocialLicense = (license) => {
    setSocialLicense(license);
  };
  const updateLogoLicense = (license) => {
    setLogoLicense(license);
  };
  const updateVideoLicense = (license) => {
    setVideoLicense(license);
  };
  const updateNumEmployees = (num) => {
    setNumEmployees(num);
  };

  const router = useRouter();

  useEffect(() => {
    if (priceFactor4 < 3) {
      updateSocialLicense(""),
        updateLogoLicense(""),
        updateVideoLicense(""),
        updatePriceFactor5(0),
        updatePriceFactor6(0),
        updatePriceFactor7(0);
    }
  }, [priceFactor4]);

  useEffect(() => {
    if (LicenseUser == "Student") {
      updateSocialLicense(""),
        updateLogoLicense(""),
        updateVideoLicense(""),
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
        LicenseUser !== "") ||
      (LicenseUser == "Student" &&
        priceFactor1 + priceFactor2 + priceFactor3 !== 0)
    )
      setLicenseChoice(true);
    else setLicenseChoice(false);
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
      updateDesktopLicense(""),
      updateWebLicense(""),
      updateInteractiveLicense(""),
      updateSocialLicense(""),
      updateLogoLicense(""),
      updateVideoLicense(""),
      updateLicenseUser("");
  };

  React.useEffect(() => {
    const data = localStorage.getItem("licenseUser");
    if (data) {
      setLicenseUser(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenseUser", JSON.stringify(LicenseUser));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenseDesktop");
    if (data) {
      setDesktopLicense(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenseDesktop", JSON.stringify(DesktopLicense));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenseWeb");
    if (data) {
      setWebLicense(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenseWeb", JSON.stringify(WebLicense));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenseApp");
    if (data) {
      setInteractiveLicense(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenseApp", JSON.stringify(InteractiveLicense));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenseSocial");
    if (data) {
      setSocialLicense(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenseSocial", JSON.stringify(SocialLicense));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenseLogo");
    if (data) {
      setLogoLicense(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenseLogo", JSON.stringify(LogoLicense));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("licenseVideo");
    if (data) {
      setVideoLicense(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("licenseVideo", JSON.stringify(VideoLicense));
  });

  React.useEffect(() => {
    localStorage.setItem("license", JSON.stringify(License));
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

  React.useEffect(() => {
    const data = localStorage.getItem("priceFactor1");
    if (data) {
      setPriceFactor1(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("priceFactor1", JSON.stringify(NumEmployees));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("priceFactor2");
    if (data) {
      setPriceFactor2(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("priceFactor2", JSON.stringify(NumEmployees));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("priceFactor3");
    if (data) {
      setPriceFactor3(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("priceFactor3", JSON.stringify(NumEmployees));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("priceFactor4");
    if (data) {
      setPriceFactor4(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("priceFactor4", JSON.stringify(NumEmployees));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("priceFactor5");
    if (data) {
      setPriceFactor5(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("priceFactor5", JSON.stringify(NumEmployees));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("priceFactor6");
    if (data) {
      setPriceFactor6(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("priceFactor6", JSON.stringify(NumEmployees));
  });

  React.useEffect(() => {
    const data = localStorage.getItem("priceFactor7");
    if (data) {
      setPriceFactor7(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("priceFactor7", JSON.stringify(NumEmployees));
  });

  const active = {
    color: "var(--primary)",
    opacity: 1,
  };

  const inactive = {
    color: "black",
    opacty: 1,
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
    opacity: 1,
  };

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

  let b64;

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      pdfMake.fonts = {
        protest: {
          normal: "ProtestGrotesk-Book.ttf",
          bold: "ProtestGrotesk-Book.ttf",
          italics: "ProtestGrotesk-Book.ttf",
          boldItalics: "ProtestGrotesk-Book.ttf",
        },
        giallo: {
          normal: "Giallo-Roman-400-Medium.ttf",
          bold: "Giallo-Roman-400-Medium.ttf",
          italics: "Giallo-Roman-400-Medium.ttf",
          boldItalics: "Giallo-Roman-400-Medium.ttf",
        },
        // example of usage fonts in collection
        Protest: {
          normal: ["ProtestGrotesk-Book.ttf"],
          bold: ["ProtestGrotesk-Book.ttf"],
        },
        Giallo: {
          normal: ["Giallo-Roman-400-Medium.ttf"],
          bold: ["Giallo-Roman-400-Medium.ttf"],
        },
      };

      const docDefinition = {
        pageSize: "A4",
        pageOrientation: "portrait",
        pageMargins: [60, 80, 20, 80],

        defaultStyle: {
          font: "Protest",
          bold: false,
        },

        header: {
          image:
            "data:image/png;base64,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",
          width: 250,
          style: "header",
        },

        footer: {
          columns: [
            {
              width: "37.5%",
              text: `STEREO TYPEFACES GBR
              GRONINGER STRASSE 48
              13347 BERLIN`,
              style: "footer",
            },
            {
              width: "30%",
              text: `IBAN DE69 1101 0101 5447 2439 65 
              BIC SOBK DEB2 XXX
              Solarisbank AG
              
              VAT-NR.: DE350313597`,
              style: "footer",
            },
            {
              width: "30%",
              text: `+49 (0) 152 035 693 05
                  SERVICE@STEREOTYPEFACES.COM
                  

                  © 2022 STEREO TYPEFACES™`,
              style: "footer",
            },
          ],
        },

        content: [
          {
            style: "textTop",
            text: `Dear ${incomingOrder.customer.firstname} ${incomingOrder.customer.lastname},

                Thank you for shopping at Stereo Typefaces. This is the receipt for your order ${incomingOrder.customer_reference}. This document serves as a verification of your license ownership, so please keep it, in case of further requests.

                Best,
                Stereo
              
              
              `,
          },

          {
            columns: [
              {
                width: "43%",
                text: `
                LICENSE OWNER DETAILS
                `,
                style: "captionStyle",
              },
              {
                width: "50%",
                text: `
                BILLING DETAILS
                `,
                style: "captionStyle",
              },
            ],
          },

          {
            columns: [
              {
                width: "43%",
                text: `${shippingData.companyLicense}
            ${shippingData.zipLicense} ${shippingData.cityLicense}
            ${shippingData.licenseCountry}

            ${shippingData.website ? shippingData.website : ""}
            `,
                style: "infoStyle",
              },
              {
                width: "50%",
                text: `${incomingOrder.customer.firstname} ${incomingOrder.customer.lastname}
            ${incomingOrder.shipping.street}
            ${incomingOrder.shipping.postal_zip_code} ${incomingOrder.shipping.town_city}
            Invoice-Nr: ${incomingOrder.customer_reference}
            
            



            `,
                style: "infoStyle",
              },
            ],
          },

          {
            text: `ORDER SUMMARY
            `,
            style: "captionStyle",
          },

          incomingOrder.order.line_items.map((item) => [
            {
              columns: [
                {
                  width: "80%",
                  text: [`${item.product_name}`],
                  style: "orderStyle",
                },
                {
                  width: "20%",
                  text: item.line_total_with_tax.formatted_with_code,
                  style: "textStyleColumnRight",
                },
              ],
            },
            {
              columns: [
                {
                  width: "80%",
                  text: [
                    `${
                      products.find((el) => el.name === item.product_name)
                        .license
                    }`,
                  ],
                  style: "orderStyleLicense",
                },
              ],
            },
          ]),

          {
            columns: [
              {
                width: "50%",
                text: [
                  `
                  
                  Total (incl. Tax)`,
                ],
                style: "orderStyle",
              },
              {
                width: "50%",
                text: [
                  `
                

                   
                  ${incomingOrder.order_value.formatted_with_code}`,
                ],
                style: "textStyleColumnRight",
              },
            ],
          },

          {
            columns: [
              {
                width: "50%",
                text: ["Tax"],
                style: "orderStyle",
              },
              {
                width: "50%",
                text: `
                 ${incomingOrder.tax.amount.formatted_with_code}`,
                style: "textStyleColumnRight",
              },
            ],
          },
        ],
        styles: {
          orderStyle: {
            fontSize: 17,
            lineHeight: 0.8,
            font: "Giallo",
            characterSpacing: -0.5,
          },
          orderStyleLicense: {
            fontSize: 17,
            lineHeight: 1.5,
            font: "Giallo",
            characterSpacing: -0.5,
            color: "#b3b3b3",
          },
          textStyle: {
            fontSize: 14,
            font: "Giallo",
          },
          textTop: {
            // margin: [0, 80, 0, 0],
            font: "Giallo",
          },
          textStyleColumnRight: {
            fontSize: 10,
            // font: "Giallo",
            alignment: "right",
          },
          captionStyle: {
            fontSize: 5,
            textTransform: "uppercase",
            characterSpacing: 0.7,
          },
          infoStyle: {
            fontSize: 9,
          },
          footer: {
            fontSize: 5,
            margin: [60, 0, 0, 100],
            characterSpacing: 0.7,
          },
          header: {
            margin: [20, 20, 20, 100],
            alignment: "center",
          },
        },
      };

      const pdfDocGenerator = pdfMake.createPdf(docDefinition);

      const getPdfData = pdfDocGenerator.getBase64((base64Data) => {
        b64 = base64Data;
      });

      await setProcessing(false);
      await nextStep();
      await handleEmptyCart();

      const orderData = await {
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
            ).license,
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
        attachment: b64,
      };

      await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(orderData),
      });
    } catch (error) {
      setErrorMessage("An Error occured");
      alert(
        "Uhh damn, something went wrong 😵‍💫 Please contact support, sorry for that!"
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
    setFadeCheckout(true), router.back();
    await setTimeout(function () {
      setShowCheckout(false);
    }, 300);
  };

  const checkoutOverview = useRef(null);
  const checkoutList = useRef(null);

  const scrollDown = () => {
    windowWidth > 1000 &&
      setTimeout(function () {
        checkoutOverview.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 2000);
  };

  const scrollUp = () => {
    windowWidth > 1000 &&
      checkoutList.current?.scrollIntoView({
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
    (licenseChoice && priceFactor4 > 1) || LicenseUser == "Student"
      ? setShowFontList(true)
      : setShowFontList(false);
  });

  useEffect(() => {
    router.pathname != "/checkout" &&
      router.push(`${router.pathname}/?checkout`, "/checkout");
    setBuyTableHeight(windowHeight - checkoutOverview?.current?.clientHeight);
  }, []);

  useEffect(() => {
    setBuyTableHeight(windowHeight - checkoutOverview?.current?.clientHeight);
  });

  return (
    <div>
      <div
        className={styles.buyBackground}
        style={fadeCheckout ? fade : notFade}
      ></div>

      <StatusBar
        showCheckoutStep1={showCheckoutStep1}
        showCheckoutStep2={showCheckoutStep2}
        showCheckoutStep3={showCheckoutStep3}
        showCheckoutStep4={showCheckoutStep4}
        showFontList={showFontList}
      />

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
              {/* <Button
                lable={"Empty Cart"}
                onClick={() => refreshCart()}
                subclass={
                  cart.line_items?.length ? "quaternary" : "quaternaryMuted"
                }
              /> */}
              {/* <Button
                lable={"Continue to Checkout"}
                onClick={
                  cart.line_items?.length && checkoutToken && live
                    ? () => {
                        step2();
                      }
                    : () => {}
                }
                subclass={
                  cart.line_items?.length && checkoutToken && live
                    ? "primary"
                    : "quaternaryMuted"
                }
              /> */}
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
            <MouseButton lable={buttonContent} animated={animated} />
            <BigMouseButton lable={bigButtonContent} />

            <div className={styles.buyTableWrapper}>
              <div className={styles.buyConfigurationWrapper}>
                <ul className={styles.buyConfiguration}>
                  <li className={styles.buyConfigurationHead}>
                    &#8594; Who is going to use the font?
                  </li>

                  <li
                    style={LicenseUser == "Designer" ? active : inactive}
                    onClick={
                      LicenseUser == "Designer"
                        ? () => updateLicenseUser("")
                        : () => updateLicenseUser("Designer")
                    }
                  >
                    Professional
                  </li>

                  <li
                    style={
                      LicenseUser == "Student?" || LicenseUser == "Student"
                        ? active
                        : inactive
                    }
                    onClick={
                      LicenseUser !== "Student?"
                        ? () => updateLicenseUser("Student?")
                        : () => updateLicenseUser("")
                    }
                    onMouseEnter={() => setExplIndex(0)}
                    onMouseLeave={() => setExplIndex(null)}
                  >
                    Student
                  </li>

                  {LicenseUser == "Student?" || LicenseUser == "Student" ? (
                    <div className={styles.buyConfigurationSection}>
                      <li className={styles.buyConfigurationHead}>
                        &#8594; Are you currently studying at a university?
                      </li>
                      <span className={styles.licenseTypeOuter}>
                        <span
                          onMouseEnter={() => setExplIndex(3)}
                          onMouseLeave={() => setExplIndex(null)}
                        >
                          <div
                            style={LicenseUser == "Student" ? active : inactive}
                            onClick={
                              LicenseUser == "Student?"
                                ? () => {
                                    updateLicenseUser("Student");
                                  }
                                : () => updateLicenseUser("")
                            }
                            className={styles.checkboxWrapper}
                          >
                            <div
                              className={styles.checkoutCheckbox}
                              style={{
                                background:
                                  LicenseUser == "Student" ? "black" : "none",
                              }}
                            ></div>
                            Yes, I am currently studying!
                          </div>
                        </span>
                      </span>
                    </div>
                  ) : (
                    ""
                  )}

                  {LicenseUser != "" &&
                    LicenseUser != "Student" &&
                    LicenseUser != "Student?" && (
                      <div className={styles.buyConfigurationSection}>
                        <li className={styles.buyConfigurationHead}>
                          &#8594; What will the font be used for?
                        </li>
                        <span className={styles.licenseTypeOuter}>
                          <span
                            className={styles.licenseTypeChoice}
                            onMouseEnter={() => setExplIndex(1)}
                            onMouseLeave={() => setExplIndex(null)}
                          >
                            <span
                              style={DesktopLicense ? active : inactive}
                              onClick={
                                priceFactor1 === 9
                                  ? () => {
                                      updatePriceFactor1(0);
                                      setShowDesktop(false);
                                    }
                                  : () => {
                                      updatePriceFactor1(9);
                                      setShowDesktop(true);
                                    }
                              }
                            >
                              Desktop ↓
                            </span>
                            {showDesktop && (
                              <>
                                <span
                                  style={priceFactor4 === 2 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 2
                                      ? () => {
                                          updatePriceFactor4(0);
                                          updateDesktopLicense("");
                                        }
                                      : () => {
                                          updatePriceFactor4(2),
                                            updateNumEmployees(5);
                                          updateDesktopLicense("Desktop");
                                        }
                                  }
                                >
                                  <span>S</span>
                                  <span className={styles.sizeWrapper}>
                                    1 – 5 Employees
                                  </span>
                                </span>
                                <span
                                  style={priceFactor4 === 3 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 3
                                      ? () => {
                                          updatePriceFactor4(0);
                                          updateDesktopLicense("");
                                        }
                                      : () => {
                                          updatePriceFactor4(3),
                                            updateNumEmployees(10);
                                          updateDesktopLicense("Desktop");
                                        }
                                  }
                                >
                                  <span>M</span>
                                  <span className={styles.sizeWrapper}>
                                    6 – 10 Employees
                                  </span>
                                </span>
                                <span
                                  style={priceFactor4 === 4 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 4
                                      ? () => {
                                          updatePriceFactor4(0);
                                          updateDesktopLicense("");
                                        }
                                      : () => {
                                          updatePriceFactor4(4),
                                            updateNumEmployees(25);
                                          updateDesktopLicense("Desktop");
                                        }
                                  }
                                >
                                  <span>XXL</span>
                                  <span className={styles.sizeWrapper}>
                                    51 – 85 Employees
                                  </span>
                                </span>
                                <span
                                  style={priceFactor4 === 4 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 4
                                      ? () => {
                                          updatePriceFactor4(0);
                                          updateDesktopLicense("");
                                        }
                                      : () => {
                                          updatePriceFactor4(4),
                                            updateNumEmployees(25);
                                          updateDesktopLicense("Desktop");
                                        }
                                  }
                                >
                                  <span>XXXL</span>
                                  <span className={styles.sizeWrapper}>
                                    86 – 100 Employees
                                  </span>
                                </span>
                                <span
                                  style={priceFactor4 === 4 ? active : inactive}
                                >
                                  Bigger (Direct Request)
                                </span>
                              </>
                            )}
                          </span>

                          <span
                            className={styles.licenseTypeChoice}
                            onMouseEnter={() => setExplIndex(2)}
                            onMouseLeave={() => setExplIndex(null)}
                          >
                            <span
                              style={WebLicense ? active : inactive}
                              onClick={
                                priceFactor2 === 14
                                  ? () => {
                                      updatePriceFactor2(0);
                                      setShowWeb(false);
                                    }
                                  : () => {
                                      updatePriceFactor2(14);
                                      setShowWeb(true);
                                    }
                              }
                            >
                              Web ↓
                            </span>

                            {showWeb && (
                              <>
                                <span
                                  style={priceFactor4 === 2 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 2
                                      ? () => {
                                          updatePriceFactor4(0);
                                        }
                                      : () => {
                                          updatePriceFactor4(2),
                                            updateNumEmployees(5);
                                        }
                                  }
                                >
                                  Small (1 – 5 Employees)
                                </span>
                                <span
                                  style={priceFactor4 === 3 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 3
                                      ? () => {
                                          updatePriceFactor4(0);
                                        }
                                      : () => {
                                          updatePriceFactor4(3),
                                            updateNumEmployees(10);
                                        }
                                  }
                                >
                                  Medium (6 – 21 Employees)
                                </span>
                                <span
                                  style={priceFactor4 === 4 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 4
                                      ? () => {
                                          updatePriceFactor4(0);
                                        }
                                      : () => {
                                          updatePriceFactor4(4),
                                            updateNumEmployees(25);
                                        }
                                  }
                                >
                                  Large (51 – 100 Employees)
                                </span>
                                <span
                                  style={priceFactor4 === 4 ? active : inactive}
                                  onClick={
                                    priceFactor4 === 4
                                      ? () => {
                                          updatePriceFactor4(0);
                                        }
                                      : () => {
                                          updatePriceFactor4(4),
                                            updateNumEmployees(25);
                                        }
                                  }
                                >
                                  X-Large (51 – 100 Employees)
                                </span>
                                <span
                                  style={priceFactor4 === 4 ? active : inactive}
                                >
                                  Bigger (Direct Request)
                                </span>
                              </>
                            )}
                          </span>
                        </span>

                        {showFontList && (
                          <>
                            <li className={styles.buyConfigurationHead}>
                              &#8594; Do you need any license extensions?
                            </li>
                            <div className={styles.licenseTypeOuter}>
                              <span
                                onMouseEnter={() => setExplIndex(4)}
                                onMouseLeave={() => setExplIndex(null)}
                                className={styles.licenseTypeChoice}
                              >
                                App / Game
                              </span>
                              <span
                                onMouseEnter={() => setExplIndex(5)}
                                onMouseLeave={() => setExplIndex(null)}
                                className={styles.licenseTypeChoice}
                              >
                                {" "}
                                E-Publishing
                              </span>
                              <span
                                onMouseEnter={() => setExplIndex(6)}
                                onMouseLeave={() => setExplIndex(null)}
                                className={styles.licenseTypeChoice}
                              >
                                Modification
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                </ul>

                {explIndex != null && (
                  <div className={styles.explainationWrapper}>
                    <p>{explaination[explIndex]}</p>
                  </div>
                )}

                <div className={styles.mobileLicensingButton}>
                  <Button
                    lable={"Licensing Terms"}
                    subclass={"quaternary"}
                    onClick={() => setShowLicensing(true)}
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}

              <CheckoutFontPreview
                fontPreview={fontPreview}
                setFontPreview={setFontPreview}
              />

              <div
                onMouseEnter={
                  !licenseChoice || !LicenseUser
                    ? () =>
                        updateButtonContent(
                          "Please complete your License Choice"
                        )
                    : () => {}
                }
                onMouseLeave={
                  !licenseChoice || !LicenseUser
                    ? () => updateButtonContent("")
                    : () => {}
                }
              >
                <div
                  style={showFontList ? buyActive : buyInactive}
                  className={styles.buyTableContent}
                >
                  {cart.line_items?.length ? (
                    <div className={styles.totalWrapper} ref={checkoutOverview}>
                      <div className={styles.buyConfigurationHead}>Cart</div>
                      <div className={styles.overviewItems}>
                        {cart.line_items?.map((item) => (
                          <>
                            <div
                              className={styles.productWrapper}
                              onClick={() => handleRemoveFromCart(item.id)}
                            >
                              <span className={styles.cartItem}>
                                — {item.name}
                                <br />
                                <span className={styles.licenseType}>
                                  {
                                    products.find((el) => el.name === item.name)
                                      .license
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

                      {cart.line_items?.length | undefined ? (
                        <>
                          <div className={styles.total}>
                            <span>&#8594; Total</span>
                            <span>EUR {cart.subtotal.formatted}</span>
                          </div>

                          <div className={styles.checkoutButton}>
                            <Button
                              lable={"Continue to Checkout"}
                              onClick={
                                cart.line_items?.length && checkoutToken && live
                                  ? () => {
                                      step2();
                                    }
                                  : () => {}
                              }
                              subclass={
                                cart.line_items?.length && checkoutToken && live
                                  ? "primary"
                                  : "quaternaryMuted"
                              }
                            />
                          </div>

                          <div className={styles.emptyCartMobile}>
                            <Button
                              lable={"Empty Cart"}
                              onClick={() => refreshCart()}
                              subclass={
                                cart.line_items?.length
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
                            cart.line_items?.length && checkoutToken && live
                              ? () => {
                                  step2();
                                }
                              : () => {}
                          }
                          subclass={
                            cart.line_items?.length && checkoutToken && live
                              ? "primary"
                              : "quaternaryMuted"
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div
                    className={styles.buyTable}
                    style={{
                      marginTop: cart.line_items?.length
                        ? checkoutOverview?.current?.clientHeight
                        : 0,
                      height: cart.line_items?.length
                        ? buyTableHeight - 116
                        : windowHeight - 116,
                    }}
                  >
                    <div className={styles.buyTableInner}>
                      <div
                        className={styles.buyConfigurationHead}
                        ref={checkoutList}
                      >
                        &#8594; Select a Typeface.
                      </div>
                      <div className={styles.fontChoice}>
                        <p
                          style={{
                            color:
                              showBuy == "Protest" ? "var(--primary)" : "black",
                          }}
                          onClick={() => setShowBuy("Protest")}
                        >
                          Protest Grotesk
                        </p>
                        <p
                          style={{
                            color:
                              showBuy == "Giallo" ? "var(--primary)" : "black",
                          }}
                          onClick={() => setShowBuy("Giallo")}
                        >
                          Giallo Roman
                        </p>
                        <p
                          style={{
                            color:
                              showBuy == "Protest Mono  "
                                ? "var(--primary)"
                                : "black",
                          }}
                          onClick={() => setShowBuy("Protest Mono")}
                        >
                          Protest Grotesk Mono
                        </p>
                      </div>

                      <div
                        style={
                          loading ? { pointerEvents: "none", opacity: 0.4 } : {}
                        }
                      >
                        {showBuy == "Protest" && (
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
                            licenseChoice={licenseChoice}
                            LicenseUser={LicenseUser}
                            onUpdateCartPrice={handleUpdateCartPrice}
                            License={License}
                            NumEmployees={NumEmployees}
                            scrollDown={scrollDown}
                            setFontPreview={setFontPreview}
                          />
                        )}

                        {showBuy == "Protest Mono" && (
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
                            licenseChoice={licenseChoice}
                            LicenseUser={LicenseUser}
                            onUpdateCartPrice={handleUpdateCartPrice}
                            License={License}
                            NumEmployees={NumEmployees}
                            scrollDown={scrollDown}
                            setFontPreview={setFontPreview}
                          />
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
                            licenseChoice={licenseChoice}
                            LicenseUser={LicenseUser}
                            onUpdateCartPrice={handleUpdateCartPrice}
                            License={License}
                            NumEmployees={NumEmployees}
                            scrollDown={scrollDown}
                            setFontPreview={setFontPreview}
                          />
                        )}
                      </div>

                      <div className={styles.cartHead}>
                        {cart.line_items?.length || ""
                          ? ""
                          : "Your cart is empty"}{" "}
                      </div>

                      <div
                        className={styles.totalWrapper}
                        ref={checkoutOverview}
                      >
                        <div className={styles.overviewItems}>
                          {cart.line_items?.map((item) => (
                            <>
                              <div
                                className={styles.productWrapper}
                                onClick={() => handleRemoveFromCart(item.id)}
                              >
                                <span className={styles.cartItem}>
                                  — {item.name}
                                  <br />
                                  <span className={styles.licenseType}>
                                    {
                                      products.find(
                                        (el) => el.name === item.name
                                      ).license
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

                        {cart.line_items?.length | undefined ? (
                          <>
                            <div className={styles.total}>
                              <span>&#8594; Total</span>
                              <span>EUR {cart.subtotal.formatted}</span>
                            </div>
                            <div className={styles.emptyCartMobile}>
                              <Button
                                lable={"Empty Cart"}
                                onClick={() => refreshCart()}
                                subclass={
                                  cart.line_items?.length
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
                              cart.line_items?.length && checkoutToken && live
                                ? () => {
                                    step2();
                                  }
                                : () => {}
                            }
                            subclass={
                              cart.line_items?.length && checkoutToken && live
                                ? "primary"
                                : "quaternaryMuted"
                            }
                          />
                        </div>
                      </div>
                    </div>
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
            WebLicense={WebLicense}
            taxable={taxable}
            setTaxable={setTaxable}
            rates={rates}
            vatRate={vatRate}
            setVatRate={setVatRate}
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
            taxable={taxable}
            setTaxable={setTaxable}
            vatRate={vatRate}
            setVatRate={setVatRate}
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
