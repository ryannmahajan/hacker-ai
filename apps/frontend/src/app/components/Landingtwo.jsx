import React from 'react';
import './Landingtwo.css'; // Ensure this file contains the necessary styles

const MyPage = () => {
  return (
    <div className="container">
      <h1 className="title">Discover the Power of Healthcare AI</h1>
      <p className="description">
        Our AI project revolutionizes...
      </p>

      <ul className="features-list">
        <li>Real-time health monitoring and analytics</li>
        <li>Personalized health recommendations</li>
        <li>Advanced data security and privacy</li>
        <li>Seamless integration with existing health systems</li>
      </ul>

      <div className="button-container">
        <button className="view-reports-button" aria-label="View reports">
          View Reports
        </button>
        <button className="understand-reports-button" aria-label="Understand reports">
          Understand Reports
        </button>
      </div>

      
    </div>
  );
}

export default MyPage;
