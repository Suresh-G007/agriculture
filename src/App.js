// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './Components/About';
import Login from './Components/Login';
import CropListApp from './Components/CropListApp'; // Import CropListApp

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crop_list" element={<CropListApp />} /> {/* Use CropListApp */}
      </Routes>
    </Router>
  );
}

export default App;
