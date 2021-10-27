import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    name: '',
    emailField: '',
    pswField: ''
  },
  onSubmit: values =>{
    console.log('form:', values);
  },
  validate: values =>{
    let errors = {};
    if(!values.name) errors.name = 'Field required';

    if(!values.emailField) {errors.emailError = 'Field required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailError = 'Username should be an email'};

    if(!values.pswField) errors.pswError = 'Field required';
    if(values.name && values.emailField && values.pswField) {alert ("Login Successful")};

    return errors;

  }





});

<div></div>
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
          <div>Name</div>
          <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
          {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
          <div>Email</div>
          <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div>: null}
          <div>Password</div>
          <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div>: null}
          <button id="submitBtn" type="submit">submit</button>

        </form>
    </div>
  );
}

export default App;
