import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-white">
          SAI ARTS
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
          <Link to="/works" className="hover:text-yellow-400 transition">Works</Link>
          <Link to="/feedback" className="hover:text-yellow-400 transition">Feedback</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;