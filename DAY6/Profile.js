import React, { useState } from 'react';
import "../Assets/styles/profile.css";
import NavBar from './NavBar';
import { AiFillEdit } from 'react-icons/ai';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { RiCalendarLine, RiMedalLine, RiUserStarLine } from 'react-icons/ri';

function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    email: 'johndoe@example.com',
    contactNumber: '123-456-7890',
    college: 'ABC University',
    degree: 'Bachelor of Science',
    specialization: 'Computer Science',
    cgpa: 3.8,
    workExperience: '2 years',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    passingYear: 2020
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <>
    
          
      <NavBar/>
      <div className="profile-container">
        <h1>Job Seeker Profile</h1>
        <div className="profile">
          <div className="profile-section">
            <label><FaUser className="icon" /> First Name:</label>
            {editMode ? (
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.firstName}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaUser className="icon" /> Last Name:</label>
            {editMode ? (
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.lastName}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaMapMarkerAlt className="icon" /> Address:</label>
            {editMode ? (
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.address}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaEnvelope className="icon" /> Email:</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.email}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaPhone className="icon" /> Contact Number:</label>
            {editMode ? (
              <input
                type="text"
                name="contactNumber"
                value={profileData.contactNumber}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.contactNumber}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaGraduationCap className="icon" /> College:</label>
            {editMode ? (
              <input
                type="text"
                name="college"
                value={profileData.college}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.college}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaGraduationCap className="icon" /> Degree:</label>
            {editMode ? (
              <input
                type="text"
                name="degree"
                value={profileData.degree}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.degree}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiUserStarLine className="icon" /> Specialization:</label>
            {editMode ? (
              <input
                type="text"
                name="specialization"
                value={profileData.specialization}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.specialization}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiMedalLine className="icon" /> CGPA:</label>
            {editMode ? (
              <input
                type="number"
                name="cgpa"
                step="0.01"
                min="0"
                max="4"
                value={profileData.cgpa}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.cgpa}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiCalendarLine className="icon" /> Work Experience:</label>
            {editMode ? (
              <input
                type="text"
                name="workExperience"
                value={profileData.workExperience}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.workExperience}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiUserStarLine className="icon" /> Skills:</label>
            {editMode ? (
              <input
                type="text"
                name="skills"
                value={profileData.skills}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.skills.join(', ')}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiCalendarLine className="icon" /> Passing Year:</label>
            {editMode ? (
              <input
                type="text"
                name="passingYear"
                value={profileData.passingYear}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.passingYear}</span>
            )}
          </div>
          <div className="profile-buttons">
            {editMode ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
