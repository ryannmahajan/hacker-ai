import React from 'react';
import './LandingPage.css'; 
import logo from './icons/doctor.jpg'; // Import the logo image
import userIcon from './icons/User_logo.png'; // Import the user image


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-box">
        <h1 className="animated-text">Welcome to Our Healthcare Service</h1>
        <p className="animatedd-text">Providing top-notch healthcare services tailored to your needs.Providing top-notch healthcare services tailored to your needs.
        Providing top-notch healthcare services tailored to your needs.
        Providing top-notch healthcare services tailored to your needs.
        </p>
      
        <button className="get-started-button">Get Started</button>
      </div>
      <div className="image-box">
        
        <img src={logo} alt="Logo" ></img>
        {/* <img src={userIcon} alt="User Icon" className="user-icon" /> */}
        
      </div>

      
    </div>
  );
};

export default LandingPage;
