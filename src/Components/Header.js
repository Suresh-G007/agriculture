// src/Header.js
import React from 'react';
import logo from './Images/bharatagrilogo.png';// Replace with the actual path to your logo
import '../Styles/FooterHeader.css'; // Import your custom CSS file for styling

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Bharat Agri Logo" className="logo" />
      <div className="settings">
        <i className="fas fa-user-circle">BharatAgri</i> {/* Font Awesome user-circle icon */}
      </div>
    </div>
  );
}

export default Header;
