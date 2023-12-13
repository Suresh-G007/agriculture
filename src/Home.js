// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home.css';
// import logo from './Images/bharatagrilogo.png';


const Home = () => {
  return (
    <div className="home-container">
      <div className="header-home">BharatAgri Header</div>
      <div className="main-content">
        <h1>Welcome to Bharat Agri!</h1>
        <p>BharatAgri is an app-based platform targeting millions of medium and large-scale farmers in India. They provide them with data-driven personalized consultancy using data science and real-time monitoring. The company's technology-driven advisory helps them increase their incomes by 30 to 40%.</p>
        <Link to="/login" className="login-button">Login</Link>
      </div>
      <div className="footer">BharatAgri Footer</div>
    </div>
  );
};

export default Home;
