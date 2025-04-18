import React from 'react';
import 'C:/Users/Ahmed/Desktop/app Web Store/frontend/src/styles/about-us.css'; // Import the CSS file

const About = () => {
  return (
    <div className="container mx-auto p-6">
        <link rel="stylesheet" href="about-us.css"></link>
        
  <h1 class="about-headline">About Us</h1>

  <div class="about-section">
    <h2>Who We Are</h2>
    <p>At M-IT, we are passionate about delivering innovative technology solutions that empower businesses to thrive in a digital world. Founded by Ahmed Mhadhbi, we have built a reputation for excellence, reliability, and a customer-first approach. Our mission is to simplify technology so you can focus on what matters most—growing your business.</p>
  </div>

  <div class="about-section">
    <h2>Our Story</h2>
    <p>M-IT was born out of a vision to bridge the gap between cutting-edge technology and everyday business needs. Ahmed Mhadhbi, our founder, recognized the challenges businesses face in navigating the complexities of IT. With a deep understanding of technology and a commitment to solving real-world problems, Ahmed established M-IT to provide tailored solutions that drive success.</p>
  </div>

  <div class="about-section mission-values">
    <div>
      <h3>Our Mission</h3>
      <p>To empower businesses with technology that works as hard as they do.</p>
    </div>
    <div>
      <h3>Our Values</h3>
      <p>Integrity, innovation, and putting our customers at the heart of everything we do.</p>
    </div>
  </div>

  <div class="about-section">
    <h2>What We Do</h2>
    <p>At M-IT, we specialize in providing comprehensive IT services, including software development, IT consulting, cybersecurity, and cloud solutions. Whether you’re a small business or a large enterprise, we have the expertise to help you leverage technology for growth, efficiency, and security.</p>
  </div>

  <div class="about-section team-section">
    <h2>Meet the Team</h2>
    <div class="team-members">
      <div class="team-member">
        
        <h4>Ahmed Mhadhbi</h4>
        <p>Founder & CEO</p>
      </div>
     
    </div>
  </div>

  <div class="cta-section">
    <h2>Let’s Build the Future Together</h2>
    <button class="cta-button">Get in Touch</button>
  </div>
</div>
  );
};

export default About;
