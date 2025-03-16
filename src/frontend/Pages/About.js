import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-page'>
      {/* About Section */}
      <div className='about-section'>
        <div className='about-content'>
          <h1 className='about-title'>ABOUT KAVYANJALI</h1>
          <p className='about-text'>
            Welcome to Kavyanjali, where passion meets creativity. We are dedicated to delivering exceptional experiences through our work. 
            Our team is committed to bringing innovative ideas to life, making a difference in the industry. From humble beginnings to becoming a 
            recognized name, we strive for excellence in everything we do.
          </p>
        </div>
        <div className='about-image'>
          <img src='./frontend/components/assets/KavLogo.jpg' alt='Kavyanjali Logo' />
        </div>
      </div>

      {/* Mission and Vision */}
      <div className='mission-vision'>
        <div className='mission'>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and businesses with cutting-edge solutions that foster growth and success. We believe in the power of innovation and strive to create impactful products.
          </p>
        </div>
        <div className='vision'>
          <h2>Our Vision</h2>
          <p>
            We envision a world where technology and creativity merge seamlessly to drive progress. Our goal is to be at the forefront of industry advancements, ensuring our solutions make a meaningful impact.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className='team-section'>
        <h2>Meet Our Team</h2>
        <div className='team-members'>
          <div className='team-card'>
            <img src='./frontend/components/assets/member1.jpg' alt='Team Member' />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className='team-card'>
            <img src='./frontend/components/assets/member2.jpg' alt='Team Member' />
            <h3>Jane Smith</h3>
            <p>Lead Designer</p>
          </div>
          <div className='team-card'>
            <img src='./frontend/components/assets/member3.jpg' alt='Team Member' />
            <h3>David Johnson</h3>
            <p>Head of Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
