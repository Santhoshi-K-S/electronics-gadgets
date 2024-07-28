import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutProduct from "./components/AboutProduct";
import LiveChat from "./components/LiveChat";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutProduct />} />
        <Route path="/chat" element={<LiveChat />} />
      </Routes>
    </Router>
  );
};

export default App;
