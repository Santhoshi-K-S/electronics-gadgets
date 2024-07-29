// FeaturedProducts.js
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/FeaturedProduct.scss";
import axios from "axios";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://electronics-gadgets-serv.vercel.app/api/featuredProducts")
      .then((response) => {
        setFeaturedProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);

  return (
    <section className="featured-products">
      <Carousel
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
      >
        {featuredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="legend">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProducts;
