import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

import styles from "../../styles/Forms.module.css";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={12}>
      <Controller
        render={({ field }) =>
          required ? (
            <input
              className={styles.inputField}
              {...field}
              placeholder={label}
              label={label}
              fullwidth
              required
            />
          ) : (
            <input
              className={styles.inputField}
              {...field}
              placeholder={label}
              label={label}
              fullwidth
            />
          )
        }
        control={control}
        name={name}
        label={label}
        requiered={required}
      />
    </Grid>
  );
};

export default FormInput;
