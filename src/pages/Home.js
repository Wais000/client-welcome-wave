import React from 'react';
// import HeroSection from '../components/Hero/HeroSection';
import AccommodationList from '../features/accommodations/AccommodationList';
import HelpList from '../features/helps/HelpList';
import JobList from '../features/jobs/jobList';
import UserList from '../components/User/UserList';
import '../assets/styles/Home.css';


const Home = () => {
  return (
    <div className="hero-section">
      <div className="text-content">
        <h2>THE BEST WAY TO</h2>
        <h1>Find Your Perfect Home</h1>
      </div>
      <div className="searchContainer">
        <div className="itemSearch">
          <div className="selectContainer">
            <select className="dataSelect">
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
            </select>
          </div>
          <div className="inputField">
            <input style={{borderRadius:"0px",margin:"0px"}} type="text" placeholder="Search" className="inventoryTextField" id="unical-id-for-search-box" />
          </div>
          <div className="selectContainer">
            <select className="dataSelect">
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
              <option value="">Apartment</option>
            </select>
          </div>
          <button className="searchButton">Search</button>
        </div>
 
      </div>
      {/* <HeroSection/> */}
      <AccommodationList/>
      <HelpList/>
      <JobList/>
      <UserList/>
    </div>
  );
}

export default Home;
