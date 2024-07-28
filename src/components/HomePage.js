import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.scss";
import Navbar from "./Navbar.js";
import FeaturedProducts from "./FeaturedProducts.js";
import ItemDetails from "./ItemDetails.js";
import About from "./AboutProduct.js";
import Contact from "./Contact.js";

const HomePage = () => {
  return (
    <div className="home-page">
      <div id="home">
        <Navbar />
        <FeaturedProducts />
      </div>
      <div id="products">
        <ItemDetails />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
