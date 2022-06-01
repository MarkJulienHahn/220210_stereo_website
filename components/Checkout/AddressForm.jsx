import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import { Grid } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import styles2 from "../../styles/Forms.module.css";

import Button from "../../components/Button";

import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken, next, cart }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [licenseCountry, setLicenseCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const [licenseInfo, setLicenseInfo] = useState(false);
  const methods = useForm();

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
    fetchShippingCountries(checkoutToken.id);
  }, []);

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

  return (
    <>
      <FormProvider {...methods}>
        <div className={styles2.billingHeader}>Billing Information</div>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" />
            <FormInput name="company" label="Company" />
            <FormInput name="email" label="Email" />
            <FormInput name="address1" label="Streetname, Nr." />
            <FormInput name="city" label="City" />
            <div className={styles2.inputLeftbound}>
              <FormInput name="zip" label="ZIP / Postal code" />
            </div>
            <Grid item xs={12} sm={6}>
              <div className={styles2.inputHeader}>Country</div>
              <select
                className={styles2.inputField}
                value={shippingCountry}
                fullwidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.label}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={styles2.inputHeader}>State / Subdivision</div>
              <select
                className={styles2.inputField}
                value={shippingSubdivision}
                fullwidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <option key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>
          <br />

          {shippingSubdivision && shippingCountry ? (
            <div style={{ display: "flex", justifyContent: "space-between " }}>
              <button className={styles2.payButton} type="submit">
                Continue to Payment
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between " }}>
              <button className={styles2.payButtonLocked}>
                Continue to Payment
              </button>
            </div>
          )}
        </form>

        <div className={styles2.licenseHeader}>License Information</div>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
              licenseCountry,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput name="companyLicense" label="Company / User" />
            <FormInput name="website" label="Website" />
            <FormInput name="cityLicense" label="City" />
            <FormInput name="zipLicense" label="ZIP / Porstal code" />
            <Grid item xs={12} sm={6}>
              <div className={styles2.inputHeader}>Country</div>
              <select
                className={styles2.inputField}
                value={licenseCountry}
                fullwidth
                onChange={(e) => setLicenseCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.label}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>
          <br />

          {shippingSubdivision && shippingCountry ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between ",
              }}
            >
              <button className={styles2.payButton} type="submit">
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
              <button className={styles2.payButtonLocked}>
                Continue to Payment
              </button>
            </div>
          )}
        </form>
      </FormProvider>

      {/* <div className={styles2.licenseButton}>
        <Button
          lable={`Licensing information is ${
            licenseInfo ? "same as" : "different from"
          } billing information`}
          subclass="quaternary"
          onClick={() => setLicenseInfo(!licenseInfo)}
        />
      </div> */}
    </>
  );
};

export default AddressForm;
