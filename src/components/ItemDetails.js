import React, { useState, useEffect, useRef } from "react";
import "animate.css/animate.min.css";
import "../styles/ItemDetails.scss";
import axios from "axios";

const ItemDetails = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://electronics-gadgets-serv.vercel.app/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);
  return (
    <section className="item-details">
      {items.map((item, index) => (
        <ItemCard item={item} isEven={index % 2 === 0} />
      ))}
    </section>
  );
};

const ItemCard = ({ item, isEven }) => {
  const [activeTab, setActiveTab] = useState("details");
  const tabContentRef = useRef(null);
  const [tabContentHeight, setTabContentHeight] = useState("auto");
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (tabContentRef.current) {
      const activeTabContent = tabContentRef.current.querySelector(
        ".tab-content > .active-content"
      );
      setTabContentHeight(`${activeTabContent.offsetHeight}px`);
    }
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setActiveTab(tab);
      setFadeClass("fade-in");
    }, 300);
  };

  return (
    <div className={`item-card ${isEven ? "even" : "odd"}`}>
      <div
        className={`item-image-wrapper ${
          isEven ? "image-left" : "image-right"
        }`}
      >
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="usp">
          {item.uniqueSellingPoints.map((usp, idx) => (
            <span key={idx}>{usp}</span>
          ))}
        </div>
      </div>
      <div className="item-content">
        <h3>{item.name}</h3>
        <div className="tabs">
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => handleTabChange("details")}
          >
            Details
          </button>
          <button
            className={activeTab === "features" ? "active" : ""}
            onClick={() => handleTabChange("features")}
          >
            Features
          </button>
          <button
            className={activeTab === "benefits" ? "active" : ""}
            onClick={() => handleTabChange("benefits")}
          >
            Benefits
          </button>
        </div>
        <div
          className={`tab-content ${fadeClass}`}
          style={{ height: tabContentHeight }}
          ref={tabContentRef}
        >
          <div
            className={`tab-pane ${
              activeTab === "details" ? "active-content" : ""
            }`}
          >
            <p>{item.details}</p>
          </div>
          <div
            className={`tab-pane ${
              activeTab === "features" ? "active-content" : ""
            }`}
          >
            <ul>
              {item.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div
            className={`tab-pane ${
              activeTab === "benefits" ? "active-content" : ""
            }`}
          >
            <ul>
              {item.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
