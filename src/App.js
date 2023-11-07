import logo from './logo.svg';
import './css/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import your Sidebar component
import TemporaryDrawer from './components/TempDrawer';
import Home from './components/Home';
import About from './components/About';



function App() {
  return (

    <div className="App">
      <Router>
        {/* <Sidebar /> */}
        < TemporaryDrawer />
        <Routes>
          <Route path="/" element={<Home /> } exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
