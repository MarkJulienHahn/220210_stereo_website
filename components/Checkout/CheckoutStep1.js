import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from '../../styles/Buy.module.css';
import { commerce } from '../../lib/commerce';

import Button from '../Button'

const BuyProtest = dynamic(() => import("./BuyProtest"))
const BuyGiallo = dynamic(() => import("./BuyGiallo"))

const Coupon = dynamic(() => import("../Coupon"))


const CheckoutStep1 = ( { showCoupon, showCheckoutStep2,setShowCheckoutStep1, setShowCheckoutStep2, products, cart, live, onAddToCart, handleEmptyCart, handleUpdateCartQty, handleRemoveFromCart, handleUpdateCartPrice, loading }) => {

  const [showBuyProtest, setShowBuyProtest] = useState(true);
  const [showBuyGiallo, setShowBuyGiallo] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [buttonStateGiallo, setButtonStateGiallo] = useState("quaternary");
  const [buttonStateProtest, setButtonStateProtest] = useState("secondary");

  const [checkoutToken, setCheckoutToken] = useState(null);

  const [priceFactor1, setPriceFactor1] = useState(1)
  const [priceFactor2, setPriceFactor2] = useState(0)
  const [priceFactor3, setPriceFactor3] = useState(0)
  const [priceFactor4, setPriceFactor4] = useState(0)



  const [DesktopLicence, setDesktopLicence] = useState([]);
  const [WebLicence, setWebLicence] = useState("");
  const [InteractiveLicence, setInteractiveLicence] = useState("");
  const [NumEmployees, setNumEmployees] = useState("");

  const Licence = [`${DesktopLicence} ${WebLicence} ${InteractiveLicence}`]

  const updateDesktopLicence = (licence) => {
    setDesktopLicence(licence)
  }
  const updateWebLicence = (licence) => {
    setWebLicence(licence)
  }
  const updateInteractiveLicence = (licence) => {
    setInteractiveLicence(licence)
  }

  const updateNumEmployees = (num) => {
    setNumEmployees(num)
  }

  const showProtest = () => {
      setShowBuyProtest(true),
      setShowBuyGiallo(false),
      setButtonStateProtest("secondary"),
      setButtonStateGiallo("quaternary")
  }

  const showGiallo = () => {
    setShowBuyProtest(false),
    setShowBuyGiallo(true),
    setButtonStateProtest("quaternary"),
    setButtonStateGiallo("secondary")
  }

  const showCouponInput = () => {
    setShowCoupon(true)
  }


  const updatePriceFactor1 = (fact1) => {
    setPriceFactor1(fact1)
  }
  const updatePriceFactor2 = (fact2) => {
    setPriceFactor2(fact2)
  }
  const updatePriceFactor3 = (fact3) => {
    setPriceFactor3(fact3)
  }
  const updatePriceFactor4 = (fact4) => {
    setPriceFactor4(fact4)
  }


  const licenceChoice = priceFactor1+priceFactor2+priceFactor3 && priceFactor4 ? true : false;

  React.useEffect(() => {
    const data = localStorage.getItem('storage1');
    if (data) {
    setPriceFactor1(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("storage1", JSON.stringify(priceFactor1));
  });

  React.useEffect(() => {
    const data = localStorage.getItem('storage2');
    if (data) {
    setPriceFactor2(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("storage2", JSON.stringify(priceFactor2));
  });

  React.useEffect(() => {
    const data = localStorage.getItem('storage3');
    if (data) {
    setPriceFactor3(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("storage3", JSON.stringify(priceFactor3));
  });

  React.useEffect(() => {
    const data = localStorage.getItem('storage4');
    if (data) {
    setPriceFactor4(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("storage4", JSON.stringify(priceFactor4));
  });

  React.useEffect(() => {
    const data = localStorage.getItem('licenceDesktop');
    if (data) {
    setDesktopLicence(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("licenceDesktop", JSON.stringify(DesktopLicence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem('licenceWeb');
    if (data) {
    setWebLicence(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("licenceWeb", JSON.stringify(WebLicence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem('licenceApp');
    if (data) {
    setInteractiveLicence(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("licenceApp", JSON.stringify(InteractiveLicence));
  });

  React.useEffect(() => {
    localStorage.setItem("licence", JSON.stringify(Licence));
  });

  React.useEffect(() => {
    const data = localStorage.getItem('Number of Employees');
    if (data) {
    setNumEmployees(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("Number of Employees", JSON.stringify(NumEmployees));
  });


  const CheckoutStep2 = dynamic(() => import("./CheckoutStep2"))


  const active = {
    color: "var(--primary)"
  }

  const inactive = {
    color: "black"
  }

  const buyInactive = {
    opacity: 0.3,
    pointerEvents: "none"
  }

  const buyActive = {
    opacity: 1,
    pointerEvents: "auto"
  }

  const disabled = {
    pointerEvents: "none",
    opacity: 0.3
  }

  const enabled = {
    pointerEvents: "auto",
    opacity: 1
  }

  return (

    <>

        {showCoupon && live.discount.length == 0 &&
        <Coupon 
          handleCouponCode={handleCouponCode} 
          checkoutToken={checkoutToken}
          setShowCoupon={setShowCoupon}
          getLiveObject={getLiveObject}
        />}

        <div className="buttonsRightWrapper">
              <Button 
                  lable={"Continue to Checkout"} 
                  onClick={cart.line_items.length  && checkoutToken ? () => {setShowCheckoutStep2(true), setShowCheckoutStep1(true)} : () => {}}
                  subclass={ cart.line_items.length  || "" ? "primary" : "quaternary"} 
            />   
        </div> 

        <div className={styles.buyTableWrapper}>

          <div className={styles.buyConfigurationWrapper}>



            <ul className={styles.buyConfiguration}>
              <li className={styles.buyConfigurationHead}> [ 1 ] LICENSE TYPE</li>
              <li className={styles.buyConfigurationHead}>&#8594; License End User</li>
              <li style={inactive}>Designer</li>
              <li style={inactive}>Client</li>
              <li className={styles.buyConfigurationHead}>&#8594; License Type</li>
              <li style={priceFactor1 === 7 ? active : inactive} 
                onClick={priceFactor1 === 7 ? () => {updatePriceFactor1(0), updateDesktopLicence("")} : () => {updatePriceFactor1(7), updateDesktopLicence("Desktop")}}>Desktop Licence</li>
              <li style={priceFactor2 === 11 ? active : inactive} 
                onClick={priceFactor2 === 11 ? () => {updatePriceFactor2(0), updateWebLicence("")} : () => {updatePriceFactor2(11), updateWebLicence("Web")}}>Web Licence</li>
              <li style={priceFactor3 === 24 ? active : inactive} 
                onClick={priceFactor3 === 24 ? () => {updatePriceFactor3(0), updateInteractiveLicence("")} : () => {updatePriceFactor3(24), updateInteractiveLicence("Interactive")}}>Interactive Licence</li>
              <li className={styles.buyConfigurationHead}>&#8594; Company Size</li>
              <li style={priceFactor4 === 2 ? active : inactive} 
                onClick={priceFactor4 === 2 ? () => {updatePriceFactor4(0)} : () => {updatePriceFactor4(2), updateNumEmployees(5)}}>Up to 5 employees</li>
              <li style={priceFactor4 === 3 ? active : inactive} 
                onClick={priceFactor4 === 3 ? () => {updatePriceFactor4(0)} : () => {updatePriceFactor4(3), updateNumEmployees(10)}}>Up to 10 employees</li>
              <li style={priceFactor4 === 5 ? active : inactive} 
                onClick={priceFactor4 === 5 ? () => {updatePriceFactor4(0)} : () => {updatePriceFactor4(5), updateNumEmployees(25)}}>Up to 25 employees</li>
              <li style={priceFactor4 === 7 ? active : inactive} 
                onClick={priceFactor4 === 7 ? () => {updatePriceFactor4(0)} : () => {updatePriceFactor4(7), updateNumEmployees(100)}}>Up to 100 employees</li>
              <li style={priceFactor4 === 14 ? active : inactive} 
                onClick={priceFactor4 === 14 ? () => {updatePriceFactor4(0)} : () => {updatePriceFactor4(14), updateNumEmployees(500)}}>Up to 500 employees</li>
              <li style={priceFactor4 === 40 ? active : inactive} 
                onClick={priceFactor4 === 40 ? () => {updatePriceFactor4(0)} : () => {updatePriceFactor4(40), updateNumEmployees(1500)}}>Up to 1500 employees</li>

            </ul>

          </div>

          <div className={styles.buyTable}>
            <p className={styles.buyHead}> [ 2 ] TYPEFACE</p>
            <div className={styles.buyTableButtons}>
              <Button 
                  lable={"Protest Grotesk"} 
                  subclass={buttonStateProtest} 
                  onClick={() => showProtest()}
              /> 
              <Button 
                  lable={"Protest Grotesk Mono"} 
                  subclass={"quaternary"} 
              /> 
              <Button 
                  lable={"Giallo Roman"} 
                  subclass={buttonStateGiallo}
                  onClick={() => showGiallo()}
              /> 
             <Button 
                  lable={"Giallo Semimono"} 
                  subclass={"quaternary"} 
              /> 
             <Button 
                  lable={"Giallo Mono"} 
                  subclass={"quaternary"} 
              />       
             <Button 
                  lable={"Skyline"} 
                  subclass={"quaternary"} 
              /> 
              <Button 
                  lable={"Automat"} 
                  subclass={"quaternary"} 
              />                                    
            </div>

            <div style={licenceChoice ? buyActive : buyInactive} className={styles.buyTableContent}>

              {showBuyProtest && <BuyProtest 
                products={products} 
                onAddToCart={onAddToCart} 
                handleEmptyCart={handleEmptyCart} 
                onRemoveFromCart={handleRemoveFromCart} 
                onUpdateCartQty={handleUpdateCartQty}
                cart={cart}
                checkoutToken={checkoutToken}
                priceFactor1={priceFactor1}
                priceFactor2={priceFactor2}
                priceFactor3={priceFactor3}
                priceFactor4={priceFactor4}
                licenceChoice={licenceChoice}
                onUpdateCartPrice={handleUpdateCartPrice}
                Licence={Licence}
                NumEmployees={NumEmployees}/>}
                
              {/* {showBuyGiallo && <BuyGiallo 
                products={products} 
                onAddToCart={onAddToCart} 
                handleEmptyCart={handleEmptyCart} 
                onRemoveFromCart={onRemoveFromCart} 
                onUpdateCartQty={onUpdateCartQty}
                cart={cart}
                priceFactor1={priceFactor1}
                priceFactor2={priceFactor2}
                priceFactor3={priceFactor3}
                priceFactor4={priceFactor4}
                onUpdateCartPrice={onUpdateCartPrice}/>} */}

            </div>    

                  <p className={styles.cartHead}> { cart.line_items.length || "" ? "CART" : "YOUR CART IS EMPTY"} </p>     
                  <div className={styles.totalWrapper}>

                    <div>
                        {cart.line_items.map((item) => (
                          <>
                            <div className={styles.productWrapper} onClick={() => handleRemoveFromCart(item.id)}>

                              <span className={styles.cartItem}>
                              —   {item.name}<br/>
                                <span className={styles.licenceType}>
                                  {products.find(el => el.name === item.name).licence}
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

                    <div>{loading ? "Calculating..." : ""}</div>

                    { live.discount.length !== 0 ? 

                    <>
                      <div className={styles.totalDiscount}>
                            <span>Discount</span>
                            <span>— EUR {live.discount.amount_saved?.formatted}</span>
                        </div>

                      <div className={styles.total}>
                        <span>Total (incl. Tax)</span>
                        <span>EUR {live.total.formatted}</span>
                      </div>
                    </>

                    :

                    <div className={styles.total}>
                    <span>Total (incl. Tax)</span>
                    <span>EUR {cart.subtotal.formatted}</span>
                    </div>

                    }

                  </div>

            </div>

          </div>

          {showCheckoutStep2 && <CheckoutStep2 
            products={products} 
            cart={cart}
            live={live}
            checkoutToken={checkoutToken}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            handleUpdateCartQty={handleUpdateCartQty}
            setShowCheckoutStep2={setShowCheckoutStep2}
            setShowCheckoutStep1={setShowCheckoutStep1}
            loading={loading}/>} 



    </>
  )
};

export default CheckoutStep1;
