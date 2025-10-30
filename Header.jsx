import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import NotificationDropdown from './NotificationDropdown';

const Header = ({ userType = 'user', onSearch, onNotificationClick, onProfileClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <div className="text-2xl font-bold text-[#a7c957]">ProjectPilot</div>
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 ml-8">
            <Link to="/about" className="text-gray-700 hover:text-[#a7c957] font-medium transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#a7c957] font-medium transition">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#a7c957] font-medium transition">Contact</Link>
          </nav>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search professionals or projects..."
              className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <NotificationDropdown role={userType} />

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setProfileDropdown(!profileDropdown)}
            >
              <div className="w-8 h-8 rounded-full bg-[#a7c957] flex items-center justify-center text-white">
                <FiUser size={16} />
              </div>
              <FiChevronDown size={16} />
            </button>

            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                <button 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a7c957]/10 w-full text-left"
                  onClick={() => { onProfileClick && onProfileClick('profile'); setProfileDropdown(false); }}
                >
                  Profile
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a7c957]/10 w-full text-left"
                  onClick={() => { onProfileClick && onProfileClick('payment'); setProfileDropdown(false); }}
                >
                  Payments
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a7c957]/10 w-full text-left"
                  onClick={() => { onProfileClick && onProfileClick('settings'); setProfileDropdown(false); }}
                >
                  Settings
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a7c957]/10 w-full text-left"
                  onClick={() => { onProfileClick && onProfileClick('logout'); setProfileDropdown(false); }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Nav Links */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2 mb-4">
            <Link to="/about" className="text-gray-700 hover:text-[#a7c957] font-medium transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#a7c957] font-medium transition">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#a7c957] font-medium transition">Contact</Link>
          </nav>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search professionals or projects..."
              className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 