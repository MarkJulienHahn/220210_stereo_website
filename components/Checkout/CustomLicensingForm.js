import { useState, useEffect } from "react";

import styles from "../../styles/Buy.module.css";
import styles2 from "../../styles/Forms.module.css";

import Button from "../Button";
import Checkbox from "./Checkbox";

const licenseArray = [
  "Font Customization",
  "Trademarked Logo",
  "Social Media",
  "Online Advertising",
  "Out-of-Home",
  "TV, Cinema",
  "Streaming",
  "Merchandise",
  "Political Use",
  "Religious Use",
  "Non-Profit",
];

const explaination = [<>Please provide the title of your project.</>];

const CustomLicensingForm = ({
  virtualCart,
  setShowCheckoutStep5,
  setShowCheckoutCustomForm,
}) => {
  const [licenses, setLicenses] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [industry, setIndustry] = useState("");
  const [employees, setEmployees] = useState(null);
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const [explIndex, setExplIndex] = useState(null);
  const [valid, setValid] = useState([]);

  const [customLicenseData, setCustomLicenseData] = useState({});

  const updateCustomData = (license) => {
    setLicenses([...licenses, license]);
  };

  const nextStep = () => {
    setShowCheckoutStep5(true), setShowCheckoutCustomForm(false);
  };

  const handleSubmit = async () => {
    fetch("/api/customLicenseRequest", {
      method: "post",
      body: JSON.stringify(customLicenseData),
    }).then(nextStep());
  };

  useEffect(() => {
    setCustomLicenseData({
      projectName: projectName,
      licenses: licenses.map((item) => item + ", "),
      industry: industry,
      employees: employees,
      description: description,
      company: company,
      email: email,
      telephone: telephone,
      typefaces: virtualCart.map(
        (item) => item.product_name + ", " + item.license + " / "
      ),
    }),
      virtualCart.length &&
      projectName &&
      employees &&
      licenses &&
      company &&
      description &&
      email
        ? setValid(true)
        : setValid(false);
  }, [
    licenses,
    projectName,
    industry,
    employees,
    description,
    email,
    company,
    telephone,
    virtualCart,
  ]);

  return (
    <>
      {explIndex != null && (
        <div className={styles.explainationWrapper}>
          <p>{explaination[explIndex]}</p>
        </div>
      )}

      <div className={styles.customForm}>
        <div className={styles.buyConfigurationHead}>Custom Licensing</div>
        <input
          className={styles2.inputField}
          placeholder={"Project Name*"}
          label={"Project Name"}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <input
          className={styles2.inputField}
          placeholder={"Number of Employees*"}
          label={"Number of Employees"}
          type="number"
          min="1"
          max="100000"
          onChange={(e) => setEmployees(e.target.value)}
          required
        />
        <input
          className={styles2.inputField}
          placeholder={"Industry"}
          label={"Industry"}
          onChange={(e) => setIndustry(e.target.value)}
        />

        <textarea
          className={styles2.inputFieldBig}
          placeholder={
            "Please give us a brief description of the project, that you would like to use the font for."
          }
          label={"Number of Employees"}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div className={styles.customCheckboxesWrapper}>
          <div className={styles.buyConfigurationHead}>License Extension</div>
          {licenseArray.map((license, i) => (
            <Checkbox
              key={i}
              setLicenses={setLicenses}
              licenses={licenses}
              updateCustomData={updateCustomData}
              license={license}
              setExplIndex={setExplIndex}
            />
          ))}
        </div>

        <div className={styles.customCompanyWrapper}>
          <div className={styles.buyConfigurationHead}>Sender Information</div>
          <input
            className={styles2.inputField}
            placeholder={"Company / User*"}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className={styles2.inputField}
            placeholder={"Email*"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles2.inputField}
            placeholder={"Phone"}
            type="tel"
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>

        <Button
          lable={"Send Custom Request"}
          onClick={valid ? handleSubmit : () => {}}
          subclass={valid ? "blue" : "quaternaryMuted"}
        />
      </div>
    </>
  );
};

export default CustomLicensingForm;
