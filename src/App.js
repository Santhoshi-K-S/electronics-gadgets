import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutProduct from "./components/AboutProduct";
import HomePage from "./components/HomePage";
import ChatWindow from "./components/ChatWindow";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutProduct />} />
        <Route path="/chat" element={<ChatWindow />} />
      </Routes>
    </Router>
  );
};

export default App;
