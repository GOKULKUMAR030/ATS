import React, { useState } from 'react';
import '../Assets/styles/Register.css';
import { Link } from 'react-router-dom';
import login_pic from "../Assets/login_pic.jpg";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNo: '',
    address: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // First Name validation
    if (formData.firstName.trim() === '') { 
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    // Last Name validation
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!formData.email.match(emailPattern)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long';
      isValid = false;
    }

    // Contact No validation
    if (formData.contactNo.trim() === '' ) {
      newErrors.contactNo = 'Invalid Contact Number';
      isValid = false;
    }

    // Address validation
    if (formData.address.trim() === '') {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform registration logic or API call
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mainr">
            
      <img src={login_pic} alt="Logo" className="logo" />
      <div className="register">
    <form onSubmit={(e) => {handleSubmit(e)}}>

      <h2>Registration </h2>
      <div className="form-row">
        <div className="form-group">
        
        <input
          type="text"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div style={{color:"red" , fontSize:"13px"}}>{errors.firstName}</div>}
      </div>

      <div className="form-group">
        
        <input
          type="text"
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div style={{color:"red" , fontSize:"13px"}}>{errors.lastName}</div>}
      </div>
    </div>
      <div className="form-row">
        <div className="form-group">
       
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{color:"red" , fontSize:"13px"}}>{errors.email}</div>}
      </div>

      <div className="form-group">
        
        <input
          type="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div style={{color:"red" , fontSize:"13px"}}>{errors.password}</div>}
      </div>
    </div>
      <div className="form-row">
        <div className="form-group">
        
        <input
          type="text"
          name="contactNo"
          placeholder='Mobile No'
          value={formData.contactNo}
          onChange={handleChange}
        />
        {errors.contactNo && <div style={{color:"red" , fontSize:"13px"}}>{errors.contactNo}</div>}
      </div>
     
      <div className="form-group">
      
        <input
          type="text"
          name="address"
          placeholder='Address'
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <div style={{color:"red" , fontSize:"13px"}}>{errors.address}</div>}
      </div>
    </div>
      <button >Register</button>
    </form>
    <p style={{marginLeft:"320px"}}>Don't you have an account? <Link to ="/">Signin</Link> </p>
  </div>
      </div>
  );
};

export default Register;
