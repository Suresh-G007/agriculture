// src/Login.js
import React from 'react';
import LoginPage from './LoginPage';
import '../Styles/LoginPage.css';

function Login() {
  return (
    <div>
      <div className="header-list-login">BharatAgri Header</div>
      <LoginPage />
      <div className="footer">BharatAgri Footer</div>
    </div>
  );
}

export default Login;
