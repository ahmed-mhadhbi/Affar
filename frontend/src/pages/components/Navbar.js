import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css'; 


const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Affar</h1>
        <div>
          <Link to="/" className="text-white px-4 hover:underline">Home</Link>
          <Link to="/listings" className="text-white px-4 hover:underline">
            Listings 
          </Link>
          <Link to="/profile" className="text-white px-4 hover:underline">Profile</Link>
          <Link to="/about" className="text-white px-4 hover:underline">About</Link>
          <Link to="/contact" className="text-white px-4 hover:underline">Contact</Link>
          <button
            onClick={() => {
              localStorage.removeItem('token'); 
              window.location.href = '/login'; 
            }}
            className="text-white px-4 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
