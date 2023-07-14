import React, { useState } from 'react';
import '../Assets/styles/Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    jobTitle:'',
    email: '',
    mobileNo: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.jobTitle.trim() === '') {
      newErrors.jobTitle = 'Job title is required';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.mobileNo.trim() === '') {
      newErrors.mobileNo = 'Mobile number is required';
      isValid = false;
    } else if (!isValidMobileNo(formData.mobileNo)) {
      newErrors.mobileNo = 'Invalid mobile number';
      isValid = false;
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
      isValid = false;
    } else if (!isValidResumeFile(formData.resume)) {
      newErrors.resume = 'Invalid file format. Only doc, docx, and pdf files are allowed.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobileNo = (mobileNo) => {
    const mobileNoRegex = /^\d{10}$/;
    return mobileNoRegex.test(mobileNo);
  };

  const isValidResumeFile = (file) => {
    const allowedExtensions = ['.doc', '.docx', '.pdf'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    return allowedExtensions.includes(fileExtension);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="job-application-form">
      <h2>Job Application</h2>
      <form onSubmit={handleSubmit}>
        <h3>RadioJockey</h3>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder='email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            placeholder='Mobile No'
            value={formData.mobileNo}
            onChange={handleChange}
            className={errors.mobileNo ? 'error' : ''}
          />
          {errors.mobileNo && <span className="error">{errors.mobileNo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume (doc, docx, pdf)</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".doc,.docx,.pdf"
            onChange={handleFileChange}
            className={errors.resume ? 'error' : ''}
          />
          {errors.resume && <span className="error">{errors.resume}</span>}
        </div>
        
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
};

export default Apply;
