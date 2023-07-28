import React, { useState } from 'react';
import '../Assets/styles/InterviewForm.css'; 
import HrNavbar from './HrNavbar';
import Footer from './Footer';
import axios from 'axios';

const InterviewForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    link: '',
    email:'',
    date: '',
    dept: '',
    time: '',
    mode: '',
    location: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.jobTitle.trim() === '') {
      newErrors.jobTitle = 'Job Title is required';
      isValid = false;
    }

    if (formData.link.trim() === '') {
      newErrors.link = 'Link is required';
      isValid = false;
    }

    if (formData.date.trim() === '') {
      newErrors.date = 'Date is required';
      isValid = false;
    }

    if (formData.dept.trim() === '') {
      newErrors.dept = 'Department is required';
      isValid = false;
    }

    if (formData.time.trim() === '') {
      newErrors.time = 'Time is required';
      isValid = false;
    }

    if (formData.mode.trim() === '') {
      newErrors.mode = 'Mode is required';
      isValid = false;
    }

    if (formData.location.trim() === '') {
      newErrors.location = 'Location is required';
      isValid = false;
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form or perform further actions
      console.log('Form submitted:', formData);
      // Reset the form
      setFormData({
        jobTitle: '',
        link: '',
        email:'',
        date: '',
        dept: '',
        time: '',
        mode: '',
        location: '',
      });
      setErrors({});

      // Send the interview data to the backend API
      const token = localStorage.getItem('token');
      axios
        .post('http://localhost:8181/api/interviews', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('Interview posted successfully:', response.data);
        })
        .catch((error) => {
          console.log('Error posting interview:', error);
        });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <HrNavbar />
      <div className="interview-form-container">
        <div className="interview-caxrd">
          <h2 >Interview Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Job Title:</label>
              <select
                    name="jobTitle"
                    placeholder="Job Title"
                    id="jobSelect"
                    className='jd'
                    value={formData.jobTitle}
                  onChange={handleChange} >
        <option style={{fontWeight:"bold"}} value="">Select Job Designation</option>
        <option value="Front-end Developer">Front-end Developer</option>
        <option value="Back-end Developer">Back-end Developer</option>
        <option value="Full-stack Developer">Full-stack Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Web Developer">Web Developer</option>
        <option value="Mobile App Developer">Mobile App Developer</option>
        <option value="React.js Developer">React.js Developer</option>
        <option value="Node.js Developer">Node.js Developer</option>
        <option value="Java Developer">Java Developer</option>
        <option value="Python Developer">Python Developer</option>
        <option value="PHP Developer">PHP Developer</option>
        <option value="Ruby on Rails Developer">Ruby on Rails Developer</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Machine Learning Engineer">Machine Learning Engineer</option>
        <option value="Artificial Intelligence (AI) Developer">Artificial Intelligence (AI) Developer</option>
        <option value="Quality Assurance (QA) Engineer">Quality Assurance (QA) Engineer</option>
        <option value="Database Administrator (DBA)">Database Administrator (DBA)</option>
        <option value="Cloud Solutions Architect">Cloud Solutions Architect</option>
        <option value="Systems Administrator">Systems Administrator</option>
        <option value="Network Engineer">Network Engineer</option>
        <option value="Security Analyst">Security Analyst</option>
        <option value="IT Support Specialist">IT Support Specialist</option>
        <option value="IT Project Manager">IT Project Manager</option>
        <option value="Business Analyst">Business Analyst</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Scrum Master">Scrum Master</option>
        <option value="Technical Writer">Technical Writer</option>
        <option value="IT Consultant">IT Consultant</option></select>
              {errors.jobTitle && <div className="error">{errors.jobTitle}</div>}
            </div>
            <div className="form-group">
              <label>Link:</label>
              <input
                type="text"
                name="link"
                placeholder="Link"
                value={formData.link}
                onChange={handleChange}
              />
              {errors.link && <div className="error">{errors.link}</div>}
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="text"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <div className="error">{errors.date}</div>}
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                name="dept"
                placeholder="Department"
                value={formData.dept}
                onChange={handleChange}
              />
              {errors.dept && <div className="error">{errors.dept}</div>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                style={{width:"80%"}}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Time:</label>
              <input
                type="text"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <div className="error">{errors.time}</div>}
            </div>
            <div className="form-group">
              <label>Mode:</label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                
              >
                <option value="" style={{ fontSize: '15px', fontWeight: 'bolder', color: 'black' }}>
                  Select Mode
                </option>
                <option value="InPerson" style={{ fontSize: '15px', fontWeight: 'bolder', color: 'black' }}>
                  In-Person
                </option>
                <option value="Virtual" style={{ fontSize: '15px', fontWeight: 'bolder', color: 'black' }}>
                  Virtual
                </option>
              </select>
              {errors.mode && <div className="error">{errors.mode}</div>}
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && <div className="error">{errors.location}</div>}
            </div>
            <button type="submit" className="cta-button">
              Post Interview
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterviewForm;
