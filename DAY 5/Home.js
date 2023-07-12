import React from "react";
import { FaUser } from "react-icons/fa";
import "../Assets/styles/Home.css";
import {BsArrowBarRight} from 'react-icons/bs';
import Footer from "./Footer";
import Navbar from "./NavBar";
function HomePage() {
  const recentJobs = [
    {
      id: 1,
      title: "Front-end Developer",
      company: "ABC Company",
      location: "New York, USA",
    },
    {
      id: 5,
      title: "Front-end Developer",
      company: "ABC Company",
      location: "New York, USA",
    },
    {
      id: 2,
      title: "Full-stack Developer",
      company: "XYZ Inc.",
      location: "San Francisco, USA",
    },
    // Add more recent job objects as needed
  ];

  const appliedJobsCount = 5; // Number of jobs applied

  const recommendedJobs = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Design Co.",
      location: "Los Angeles, USA",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Data Corp.",
      location: "Chicago, USA",
    },
    // Add more recommended job objects as needed
  ];

  const appliedJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "New York, USA",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "San Francisco, USA",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Data Analytics Co.",
      location: "Seattle, USA",
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Creative Studio",
      location: "Los Angeles, USA",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      company: "Digital Marketing Agency",
      location: "Chicago, USA",
    },
  ];

  return (
    <>
      <Navbar/>
    <div className="home-page">
      <h1>Welcome, Job Seeker!</h1>

      <div className="profile-card">
        <div className="profile-details">
          <FaUser size={38} />
          <div className="profile-info">
            <h3>John Doe</h3>
            <p>Email: johndoe@example.com</p>
            <p>Location: New York, USA</p>
            <p>Skills: React, JavaScript, HTML, CSS</p>
            <button>Edit profile</button>
          </div>
        </div>
      </div>

      <div className="job-section">
        <h2>Recent Jobs</h2>
        <div className="job-cards">
          {recentJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="applied-jobs">
        <h2>Jobs Applied</h2>
        <div className="job-cards">
          {appliedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
        <p>You have applied for {appliedJobsCount} jobs.</p>
      </div>

      <div className="job-section">
        <h2>Recommended Jobs</h2>
        <div className="job-cards">
          {recommendedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div></>
  );
}

export default HomePage;
