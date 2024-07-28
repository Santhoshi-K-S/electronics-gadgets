import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">NextGenGadgets</div>
      <ul className="navbar-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><a href="/chat">Chat</a></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
