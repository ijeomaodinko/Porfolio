import React from 'react';
import './contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <div className="contact-title">
        <h2>Say Hello</h2>
        <p>Get in touch for professional collaboration</p>
      </div>
      <div className="contact-form">
        <form  action="https://formspree.io/f/meqnzbev" target="_blank" method="post" > 
          <div className="form-group">
            <input type="text" id="username" name="username" maxlength="30" placeholder='Name' required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder='Email' required />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows="4" placeholder='Write a message' required></textarea>
          </div>
          <button type="submit">Get In It Touch</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
