import React, { useState, useEffect, useRef } from "react";
import { commerce } from "../../lib/commerce";
import { Grid } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import styles from "../../styles/Forms.module.css";
import styles2 from "../../styles/Buy.module.css";

import FormInput from "./CustomTextField";

const AddressForm = ({
  checkoutToken,
  next,
  WebLicense,
  setTaxable,
  setVatId,
  vatId,
  rates,
  setVatRate,
  LicenseUser,
}) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [licenseCountry, setLicenseCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const [licenseInfo, setLicenseInfo] = useState(false);
  const [vatValidationObject, setVatValidationObject] = useState({});

  const methods = useForm();
  var validate = require("validate-vat");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );
  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    shippingCountries == "" && fetchShippingCountries(checkoutToken?.id);
  });

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  useEffect(() => {
    (shippingCountry == "AT" && vatId.length <= 4) ||
    (shippingCountry == "BE" && vatId.length <= 4) ||
    (shippingCountry == "BG" && vatId.length <= 4) ||
    (shippingCountry == "CY" && vatId.length <= 4) ||
    (shippingCountry == "CZ" && vatId.length <= 4) ||
    (shippingCountry == "DK" && vatId.length <= 4) ||
    (shippingCountry == "EE" && vatId.length <= 4) ||
    (shippingCountry == "FI" && vatId.length <= 4) ||
    (shippingCountry == "FR" && vatId.length <= 4) ||
    (shippingCountry == "CR" && vatId.length <= 4) ||
    (shippingCountry == "GR" && vatId.length <= 4) ||
    (shippingCountry == "HU" && vatId.length <= 4) ||
    (shippingCountry == "IE" && vatId.length <= 4) ||
    (shippingCountry == "IT" && vatId.length <= 4) ||
    (shippingCountry == "LV" && vatId.length <= 4) ||
    (shippingCountry == "LT" && vatId.length <= 4) ||
    (shippingCountry == "LU" && vatId.length <= 4) ||
    (shippingCountry == "MT" && vatId.length <= 4) ||
    (shippingCountry == "NL" && vatId.length <= 4) ||
    (shippingCountry == "PL" && vatId.length <= 4) ||
    (shippingCountry == "PT" && vatId.length <= 4) ||
    (shippingCountry == "RO" && vatId.length <= 4) ||
    (shippingCountry == "SK" && vatId.length <= 4) ||
    (shippingCountry == "SI" && vatId.length <= 4) ||
    (shippingCountry == "ES" && vatId.length <= 4) ||
    (shippingCountry == "SE" && vatId.length <= 4) ||
    shippingCountry == "DE"
      ? setTaxable(true)
      : setTaxable(false);
  });

  useEffect(() => {
    setVatRate(rates.find((el) => el.short == shippingCountry));
  });

  // useEffect(() => {
  //   setVatValidationObject({ vat: vatId, country: shippingCountry });
  // }, [vatId || shippingCountry]);

  // fetch("/api/vatValidation", {
  //   method: "post",
  //   body: JSON.stringify(vatValidationObject),
  // })

  // console.log(vatValidationObject);

  // // validate(shippingCountry, vatId, function (err, validationInfo) {
  // //   console.log(validationInfo, shippingCountry, vatId);
  // // });

  return (
    <div className={styles.addressFormWrapper}>
      <FormProvider {...methods}>
        <div className={styles2.buyConfigurationHead}>Billing Information</div>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
              licenseCountry,
              vatId,
            })
          )}
        >
          <Grid container spacing={0.5}>
            <FormInput name="firstName" label="First name*" required={true} />
            <FormInput name="lastName" label="Last name*" required={true} />
            <FormInput name="company" label="Company*" required={true} />
            <FormInput name="email" label="Email*" required={true} />
            <FormInput
              name="address1"
              label="Streetname, Nr.*"
              required={true}
            />
            <FormInput name="city" label="City*" required={true} />
            <FormInput name="zip" label="ZIP*" required={true} />
            <input
              className={styles.inputField}
              name="vatId"
              placeholder="VAT ID Number"
              onChange={(e) => setVatId(e.target.value)}
            />

            <select
              className={styles.inputFieldOption}
              value={shippingCountry}
              fullwidth
              onChange={(e) => setShippingCountry(e.target.value)}
            >
              <option value="" disabled selected>
                Country*
              </option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.label}
                </option>
              ))}
            </select>

            <select
              className={styles.inputFieldOption}
              value={shippingSubdivision}
              fullwidth
              onChange={(e) => setShippingSubdivision(e.target.value)}
            >
              <option value="" disabled selected>
                State / Subdivision*
              </option>
              {subdivisions.map((subdivision) => (
                <option key={subdivision.id} value={subdivision.id}>
                  {subdivision.label}
                </option>
              ))}
            </select>
          </Grid>

          {shippingSubdivision && shippingCountry ? (
            <div style={{ display: "flex", justifyContent: "space-between " }}>
              <button className={styles.payButton} type="submit">
                Continue to Payment
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between " }}>
              <button className={styles.payButtonLocked}>
                Continue to Payment
              </button>
            </div>
          )}
        </form>
        <div
          className={`${styles2.buyConfigurationHead} ${styles.licenseHeader}`}
        >
          Licensing Information
        </div>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
              licenseCountry,
              vatId,
            })
          )}
        >
          <Grid container>
            <FormInput
              name="companyLicense"
              label={LicenseUser != "Student" ? "Company / User*" : "Full Name*"}
              required={true}
            />

            {LicenseUser == "Student" && (
              <FormInput
                name="university"
                label={"School / University*"}
                required={true}
              />
            )}

            {WebLicense == "Web" && (
              <FormInput
                name="website"
                label={WebLicense == "Web" ? "Website*" : "Website"}
                required={WebLicense == "Web" ? true : false}
              />
            )}

            <FormInput name="cityLicense" label="City*" required={true} />

            {WebLicense == "Web" ? (
              <FormInput name="zipLicense" label="ZIP*" required={true} />
            ) : (
              <FormInput name="zipLicense" label="ZIP*" required={true} />
            )}

            <select
              className={styles.inputFieldOption}
              value={licenseCountry}
              fullwidth
              onChange={(e) => setLicenseCountry(e.target.value)}
            >
              <option value="" disabled selected>
                Country*
              </option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.label}
                </option>
              ))}
            </select>

            <br />

            {shippingSubdivision && shippingCountry ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between ",
                }}
              >
                <button className={styles.payButton} type="submit">
                  Continue to Payment
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between ",
                }}
              >
                <button className={styles.payButtonLocked}>
                  Continue to Payment
                </button>
              </div>
            )}
          </Grid>
        </form>
      </FormProvider>

      {/* <div className={styles.licenseButton}>
        <Button
          lable={`Licensing information is ${
            licenseInfo ? "same as" : "different from"
          } billing information`}
          subclass="quaternary"
          onClick={() => setLicenseInfo(!licenseInfo)}
        />
      </div> */}
    </div>
  );
};

export default AddressForm;
