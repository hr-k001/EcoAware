import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="font-bold text-xl">EcoAware</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
            <Link to="/quiz" className="hover:text-green-200 transition-colors">Quiz</Link>
            <Link to="/tools" className="hover:text-green-200 transition-colors">Tools</Link>
            <Link to="/about" className="hover:text-green-200 transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}