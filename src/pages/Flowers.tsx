// React
import React, { Component } from "react";
// Formik
import { useFormik } from "formik";
// Yup
import * as yup from "yup";
// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// TODO check validation for integer & field placeholder
const validationSchema = yup.object({
  flowersNumber: yup
    .number()
    .integer("Number of flowers should be a number")
    .required("The Number of flowers is required"),
});

export default () => {
  const formik = useFormik({
    initialValues: {
      flowersNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Typography variant="h1">Flowers</Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="flowersNumber"
          name="flowersNumber"
          label="Number of flowers"
          variant="outlined"
          value={formik.values.flowersNumber}
          // TODO learn onChange for react, formik error & helperText
          onChange={formik.handleChange}
          error={
            formik.touched.flowersNumber && Boolean(formik.errors.flowersNumber)
          }
          helperText={
            formik.touched.flowersNumber && formik.errors.flowersNumber
          }
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Generate
        </Button>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Copy to clipboard
        </Button>
      </form>
    </div>
  );
};
