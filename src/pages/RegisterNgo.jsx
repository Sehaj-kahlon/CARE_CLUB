import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
const Register = () => {
  const navigate = useNavigate();
  const [err, setError] = useState(null);
  const handleChangefunc = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/registerN", values);
      // console.log(res);
      navigate("/ngo");
    } catch (err) {
      setError(err.response.data);
    }
  };
  const { values, touched, errors, handleChange, handleBlur, setValues } = useFormik({
    initialValues: {
      username: "",
      mail: "",
      password: "",
      confirmPassword: "",
      service: "",
      NgoName: "",
      address: "",
      PinCode: "",
      city: "",
      state: "",
      country: "",
      contactNumber: "",
      test: "",
    },
    validationSchema: basicSchema,
    handleChangefunc,
    handleSubmit,
  });
  // console.log(errors);
  return (
    <div className="auth">
      <h1>REGISTER - NGO</h1>
      <form autoComplete="off">
        <label>Username</label>
        <input
          value={values.username}
          id="username"
          type="text"
          placeholder="ENTER USERNAME HERE"
          name="username"
          onBlur={handleBlur}
          onChange={handleChange}
          className={errors.username && touched.username ? "input-error" : ""}
        />
        {errors.username && touched.username ? (
          <div className="error">{errors.username} </div>
        ) : null}
        <label>E-Mail</label>
        <input
          value={values.mail}
          type="email"
          placeholder="ex: myname@gmail.com"
          name="mail"
          onBlur={handleBlur}
          onChange={handleChange}
          className={errors.mail && touched.mail ? "input-error" : ""}
        />
        {errors.mail && touched.mail ? <div className="error">{errors.mail} </div> : null}
        <label>Password</label>
        <input
          value={values.password}
          type="password"
          placeholder="ENTER A PASSWORD"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && touched.password ? (
          <div className="error">{errors.password} </div>
        ) : null}
        <input
          value={values.confirmPassword}
          type="password"
          placeholder="CONFIRM YOUR PASSWORD"
          name="confirmPassword"
          onBlur={handleBlur}
          onChange={handleChangefunc}
        />
        {errors.confirmPassword && touched.confirmPassword ? (
          <div className="error">{errors.confirmPassword} </div>
        ) : null}
        <label>NGO NAME</label>
        <input
          type="text"
          placeholder="ENTER THE FULL NAME OF THE NGO"
          name="NgoName"
          onChange={handleChangefunc}
        />
        <label>SERVICE : </label>
        <select
          // value={values.service}
          name="service"
          defaultValue={"DEFAULT"}
          onBlur={handleBlur}
          onChange={handleChangefunc}
        >
          <option value="DEFAULT" disabled>
            CHOOSE AN OPTION
          </option>
          <option value="FOOD">FOOD</option>
          <option value="CLOTHES" disabled={true}>
            CLOTHES
          </option>
          <option value="BOOKS" disabled={true}>
            BOOKS
          </option>
        </select>
        {errors.service && touched.service ? (
          <div className="error">{errors.confirmPassword} </div>
        ) : null}
        <label>ADDRESS</label>
        <textarea
          rows="2"
          cols="5"
          type="textarea"
          placeholder="CURRENT ADDRESS"
          name="address"
          onChange={handleChangefunc}
        ></textarea>
        <label>PIN-CODE</label>
        <input type="tel" placeholder="ENTER PIN_CODE" name="PinCode" onChange={handleChangefunc} />
        <label>CITY</label>
        <input type="text" placeholder="ENTER CITY" name="city" onChange={handleChangefunc} />
        <label>STATE</label>
        <input type="text" placeholder="ENTER STATE" name="state" onChange={handleChangefunc} />
        <label>COUNTRY</label>
        <input type="text" placeholder="ENTER COUNTRY" name="country" onChange={handleChangefunc} />
        <label>CONTACT-NUMBER</label>
        <input
          type="tel"
          placeholder="ONLY 10 DIGITS ALLOWED"
          name="contactNumber"
          onBlur={handleBlur}
          onChange={handleChangefunc}
        />
        {errors.contactNumber && touched.contactNumber ? (
          <div className="error">{errors.contactNumber} </div>
        ) : null}
        <span>
          <input
            value="true"
            type="checkbox"
            id="myCheck"
            name="test"
            onBlur={handleBlur}
            onChange={handleChangefunc}
          />
          &nbsp; &nbsp;
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1" className="relink">
            <u>Terms & Conditions </u>
          </a>
          {errors.test && touched.test ? <div className="error">{errors.test} </div> : null}
        </span>
        <button onClick={handleSubmit}>Register</button>
        {err ? <div className="error">{err}</div> : null}
        <span>
          Already have an Account?
          <Link to="/login" className="relink">
            &nbsp;<u>Login</u>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
