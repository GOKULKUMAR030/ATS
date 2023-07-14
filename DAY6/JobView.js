import React from 'react';
import '../Assets/styles/JobDetails.css';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Apply from './Apply';
const JobDetails = () => {
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };
  return (
    <>
    <Navbar/>
    <div className="job-listing-container">
      <div className="job-carxd">
        <div className="job-header">
          <h2 className="job-title">Radio Jockey</h2>
        </div>
        <div className="job-description">
          <p>
          Hosting live / recorded shows this entails the person to make a broad format of the show, plan, monitor and make scripts which are in line with editorial guidelines & brand proposition.
Shoot, edit and post videos on various social media platforms to help them become influencers by gaining mass followers
Do voice overs for commercials, show promos, & stationality elements
Generate ideas for special events or specific days
Conduct content research / interviews / sound bytes for shows other than his / her own
Regularly track, monitor and analyse competing radio channels for music trends, content, show format, specials etc
Contribute to questionnaires for celebrity interviews & content of shows by doing Outdoor Broadcast (OBs)
All other tasks that may be assigned from time to time by the Programming Head / Producer
          </p>
        </div>
        <div className="job-details">
          <div className="company-info">
            <h3 className="company-name">Entertainment Network India Limited (ENIL)</h3>
            <p className='job-experience'>Experience of Work Expected: 0-5</p>
            <p className="company-address">Madurai, Tamil Nadu</p>
          </div>
          <div className="job-info">
            <p className="job-salary">Salary: Not disclosed</p>
            <button className="apply-btn" onClick={handleApplyClick}>Apply Now</button>
          </div>
        </div>
        <div className="job-requirements">
          <h3 className="section-title">Job Requirements</h3>
          <ul>
            <li>Excellent communication skills</li>
            <li>Strong on-air presence</li>
            <li>Knowledge of current music trends</li>
            <li>Ability to engage with listeners</li>
          </ul>
        </div>
        <div className="job-benefits">
          <h3 className="section-title">Benefits</h3>
          <ul>
            <li>Competitive salary package</li>
            <li>Opportunity to work with a leading media company</li>
            <li>Growth and career advancement</li>
            <li>Exciting and dynamic work environment</li>
          </ul>
        </div>
      </div>
      {showApplyForm && (
          <div className="overlay">
            <div className="apply-form-container">
              <Apply />
              <button className="close-btn" onClick={() => setShowApplyForm(false)}>
                Close
              </button>
            </div>
          </div>
        )}
    </div>
    </>
  );
};




export default JobDetails;
