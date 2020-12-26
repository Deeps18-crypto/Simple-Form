import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import "./Form.css";
import axios from "axios";
import Spinner from "../Spinner";
import {useHistory} from "react-router-dom"

function Form() {
  const [loading, setloading] = useState(false);
  const history = useHistory()
  const style = {
    root: {
      width: "50%",
      marginLeft: "1em",
      marginTop: "1em",
    },
  };

  const useStyle = makeStyles(style);
  const classes = useStyle();

  const validate = (values) => {
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "Required";
    } else if (values.name.length <= 3) {
      errors.name = "should be greater than three character";
    }
    if (!values.email.trim()) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "email address is invalid";
    }
    if (!values.phone.trim()) {
      errors.phone = "Required";
    } else if (values.phone.length > 10) {
      errors.phone = "invalid number";
    } else if (values.phone.length < 10) {
      errors.phone = "invalid number";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit: (inputdata) => {
      setloading(true);
      axios
        .post(
          "https://simple-form-17f62-default-rtdb.firebaseio.com/data.json",
          inputdata
        )
        .then((response) => {
          setloading(false);
          history.push("/table")
        });
    },
  });

  let load = (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="form__form"
    >
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        className={classes.root}
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && (
        <p className="form__para">{formik.errors.name}</p>
      )}

      <TextField
        label="email"
        name="email"
        variant="outlined"
        className={classes.root}
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="form__para">{formik.errors.email}</p>
      )}

      <TextField
        label="Phone"
        variant="outlined"
        name="phone"
        className={classes.root}
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone && (
        <p className="form__para">{formik.errors.phone}</p>
      )}

      <div className="form__button">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
  if (loading) {
    load = <Spinner />;
  }
  return <div className="form">{load}</div>;
}
export default Form;
