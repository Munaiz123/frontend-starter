import logo from './logo.svg';
import './css/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (

    <div className="App">
      <Router>
        < NavBar />
        <Routes>
          <Route path="/" element={<Home /> } exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
