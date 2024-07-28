import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you! Fill out the form below and we will
            get in touch with you shortly.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
