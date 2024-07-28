import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../styles/AboutProduct.scss";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h2>About NextGen Gadgets</h2>
          <p>
            NextGen Gadgets is a leading innovator in consumer electronics. Our
            mission is to bring the latest technology to your fingertips, making
            your life easier, more enjoyable, and more connected. We pride
            ourselves on our commitment to quality, innovation, and customer
            satisfaction.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to transform the way people interact with technology.
            We strive to design and develop products that are not only advanced
            and functional but also stylish and user-friendly. By focusing on
            customer needs and emerging trends, we aim to stay ahead of the
            curve and offer the best tech solutions available.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
          <h3>Core Values</h3>
          <ul>
            <li>
              Innovation: We embrace creativity and encourage new ideas to bring
              groundbreaking products to market.
            </li>
            <li>
              Quality: We are dedicated to delivering products that meet the
              highest standards of excellence.
            </li>
            <li>
              Customer Focus: Our customers are at the heart of everything we
              do. We strive to exceed their expectations.
            </li>
            <li>
              Integrity: We conduct our business with honesty and integrity,
              building trust with our customers and partners.
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
