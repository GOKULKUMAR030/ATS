import React from 'react';
import '../Assets/styles/sidebar.css';
import NavBar from './NavBar';

const Sidebar = () => {
  return (
    <div className='mains'>
        <NavBar/>
    <div className="sidebar">
      
      <div className="sidebar__menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Applications</a>
          </li>
          <li>
            <a href="#">My Jobs</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
     
    </div>
    </div>
  );
};

export default Sidebar;
