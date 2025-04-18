import React from 'react';
import About from './pages/About'; // Import About component
import Contact from './pages/Contact'; // Import Contact component
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Listings from './pages/Listings';
import Profile from './pages/Profile';

const App = () => {
  const location = useLocation(); // Get the current route

  const showNavbarRoutes = ['/listings', '/profile'];

  const showNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};


const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
