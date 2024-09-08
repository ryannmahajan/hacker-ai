import React from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import step1 from '../../components/icons/add_new.png';
import step2 from '../../components/icons/data-processing.png';
import step3 from '../../components/icons/summ-removebg-preview.png';
import logo from '../../components/icons/ByteBook_LOGO (2).png';

import hero from '../../components/icons/image__1_-removebg-preview (1).png';
interface HomePageProps {
  someNumber: number;
}
const HomePage: React.FC<HomePageProps> = ({ someNumber }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo3">
          <img src={logo} alt="Healthcare Logo" id='img-10'/>
        </div>
        <nav className="navbar">
  <ul id='lisele2'>
    <Link to="/home"><li className='lisele1'>Home</li></Link>
    <a onClick={() => scrollToSection('about')}><li className='lisele1'>About</li></a>
    <a onClick={() => scrollToSection('contact')}><li className='lisele1'>Contact</li></a>
    <Link to="/liver_reports"><li className='lisele1'>Liver Reports</li></Link>
    <Link to="/blood_reports"><li className='lisele1'>Blood Reports</li></Link>
  </ul>
</nav>

      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Accurate Summaries of Your Health</h1>
          <p>Upload your test results and get instant, precise health summaries.</p>
          <Link to='/add_report'><button className="upload-btn">Upload Test Results</button></Link>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Hero section" />
        </div>
      </section>


      <section className="steps">
        <h2>How It Works</h2>
        <div className="steps-list">
          <div className="step-item">
            <img src={step1} alt="Step 1 - Upload Test" />
            <h3>1. Upload Your Test Results</h3>
            <p>Easily upload your health test reports from any device.</p>
          </div>
          <div className="step-item">
            <img src={step2} alt="Step 2 - Processing" />
            <h3>2. We Process the Data</h3>
            <p>Our AI analyzes your data and generates a summary based on global standards.</p>
          </div>
          <div className="step-item">
            <img src={step3} alt="Step 3 - Receive Summary" />
            <h3>3. Receive Your Summary</h3>
            <p>Get a concise, accurate summary with actionable insights for your health.</p>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2>What Our Customers Say</h2>
        <div className="reviews-list">
          <div className="review-item">
            <p>"Great service! Fast and accurate results!"</p>
          </div>
          <div className="review-item">
            <p>"I loved the detailed summary I received!"</p>
          </div>
          <div className="review-item">
            <p>"Highly recommend this to everyone."</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <div className="team-list">
          <div className="team-member">
            <h3>Navkirat Singh</h3>
            <p>Team Lead, Backend Specialist</p>
          </div>
          <div className="team-member">
            <h3>Harnoor Singh</h3>
            <p>Frontend Specialist</p>
          </div>
          <div className="team-member">
            <h3>Ryann Mahajan</h3>
            <p>Backend Specialist</p>
          </div>
          <div className="team-member">
            <h3>Sarah Jain</h3>
            <p>Frontend Specialist</p>
          </div>
          <div className="team-member">
            <h3>Sanya</h3>
            <p>Machine Learning & Backend</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2024 Healthcare Services. All rights reserved.</p>
      </footer>
    </div>
  );

};

export default HomePage;
