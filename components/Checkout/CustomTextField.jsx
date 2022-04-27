import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

import styles from '../../styles/Forms.module.css';

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
        const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                render={({ field }) => <input className={styles.inputField} {...field} placeholder={label} label={label} fullwidth   required/>}
                control={control}      
                name={name}
                label={label}
                requiered={required}
            />
        </Grid>
    );
}

export default FormInput;
