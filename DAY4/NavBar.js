import React from 'react';
import '../Assets/styles/NavBar.css';
import profile from'../Assets/profile.png';


const NavBar = () => {
  return (
    <nav className="jobseeker-navbar">
      
      <ul className="jobseeker-navbar__list">
      <li className="jobseeker-navbar__item">
      <span>ATS</span>
        </li>
        <li className="jobseeker-navbar__item">
       <a href='#'>Home</a> 
        </li>
        <li className="jobseeker-navbar__item">
        <a href='#'>MyApplications</a> 
        </li>
        <li className="jobseeker-navbar__item">
        <a href='#'>Find Jobs</a> 
        </li> 
        <li className="jobseeker-navbar__item">
        <a href='#'>Services</a> 
        </li>
        
        <li className="jobseeker-navbar__item">
        <a href='#'>Help&Support</a> 
        </li>
        
      <li className="jobseeker-navbar__item">
      <img src ={profile}></img>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
