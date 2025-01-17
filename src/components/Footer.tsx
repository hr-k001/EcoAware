import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl">EcoAware</span>
            </div>
            <p className="text-green-100">
              Empowering individuals with knowledge to combat climate change and
              protect our planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className="hover:text-green-200 transition-colors"
                >
                  Take the Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/tools"
                  className="hover:text-green-200 transition-colors"
                >
                  Carbon Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hkraj9105@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 - 7563 04 xxxx</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Chandigarh, Punjab</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-green-100 mb-4">
              Subscribe to our newsletter for the latest climate news.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-green-700 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-500 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=100010973268450"
                className="hover:text-green-200 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/himanshu_raj_9105/"
                className="hover:text-green-200 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="text-green-100 text-sm">
              © {currentYear} EcoAware. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
