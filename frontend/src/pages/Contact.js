import React from 'react';
import 'C:/Users/Ahmed/Desktop/app Web Store/frontend/src/styles/ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-headline">Contact Us</h1>
      <p className="contact-subhead">
        We’d love to hear from you! Whether you have a question, need support, or want to discuss a project, our team is here to help.
      </p>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-card">
          <h3>Email</h3>
          <p>ahmed.mhadhbil.75@gmail.com</p>
        </div>
        <div className="info-card">
          <h3>Phone</h3>
          <p>+216 55026231</p>
        </div>
        <div className="info-card">
          <h3>Address</h3>
          <p>citee zouhour, Nabeul</p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        className="contact-form"
        action="https://formsubmit.co/ahmed.mhadhbil.75@gmail.com" // Replace with your Formsubmit email
        method="POST"
      >
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/listings" /> {/* Redirect after submission */}

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;