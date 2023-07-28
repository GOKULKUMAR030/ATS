import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import HrNavbar from './HrNavbar';
import { FaMapMarkerAlt } from 'react-icons/fa';

const UserStatistics = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [uniqueApplicantEmails, setUniqueApplicantEmails] = useState(0);
  const [lastThreeJobs, setLastThreeJobs] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchLastThreeJobs = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8181/api/jobs/lastThree",
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "cache-control": "no-cache",
              },
            }
          );
          setLastThreeJobs(response.data);
        } catch (error) {
          console.log("Error fetching last three jobs: " + error);
        }
      };

    const fetchUserStatistics = async () => {
      try {
        // Fetch total users count
        const usersResponse = await axios.get("http://localhost:8181/api/v1/users", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        setTotalUsers(usersResponse.data.length);

        // Fetch total applicants count
        const applicantsResponse = await axios.get("http://localhost:8181/resumes/totalResumes", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        setTotalApplicants(applicantsResponse.data);

        // Fetch unique applicant emails count
        const uniqueEmailsResponse = await axios.get("http://localhost:8181/resumes/uniqueApplicantEmailsCount", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        setUniqueApplicantEmails(uniqueEmailsResponse.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchLastThreeJobs(); 
    fetchUserStatistics();
  }, []);

  // Define the chart options and data
  const chartOptions = {
    chart: {
      id: "user-stats",
      type: "pie",
      height: 350,
    },
   
    labels: ["Total Users", "Total Applications", "Unique Applicant Emails"],
    
    colors: ['#0085ed', '#005aa0', '#002e53'], // Change colors for each slice
    dataLabels: {
      enabled: false,
      
    },
    legend: {
      show: true, // Set to true to display the legend
      position: 'bottom', // You can adjust the position of the legend
      fontSize: '14px', // Set the font size
      fontFamily: 'poppins', // Set the font family
      fontWeight: 'bold', // Set the font weight
      labels: {
        colors: ["#333", "#333", "#333"], // Set the color of each label
      },
    },
   
  };

  const chartData = [totalUsers, totalApplicants, uniqueApplicantEmails];

  return (
    <>
    <div>
      <HrNavbar />
      <h2>User Statistics:</h2>
      <ReactApexChart options={chartOptions} series={chartData} type="pie" height={350} style={{}} />
    </div>
    <div className="new-job-section">
          <h2>Explore New Jobs</h2>
          <div className="job-cards">
          {lastThreeJobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.jobTitle}</h3>
                <p>{job.dept}</p>
                <p>
                  <FaMapMarkerAlt className="icon" />
                  {job.location}
                </p>
                <div className="apply-link"style={{cursor:"pointer"}} onClick={()=>{
                 localStorage.setItem("job_id",job.id);
                 window.location.href="/vj";
               }
               }>View Jobs</div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default UserStatistics;
