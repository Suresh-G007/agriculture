// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css'; // Import your custom CSS file for styling

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'bharatagri' && password === '1234') {
      // Handle successful login
      alert('Login Successful!');
      // Navigate to the about page
      navigate('/crop_list');
    } else {
      // Handle login error
      setErrorMessage('Incorrect username or password.');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Login</h1>
      </header>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default LoginPage;
