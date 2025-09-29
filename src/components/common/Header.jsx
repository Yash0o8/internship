import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/services', label: 'Services', icon: '🛠️' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/notifications', label: 'Notifications', icon: '🔔' },
  ];

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🚀</span>
            <div>
              <h1 className="text-2xl font-bold text-green-600">ProjectPilot</h1>
              <p className="text-xs text-gray-500 -mt-1">Secure Freelancing Platform</p>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-green-100 text-green-700 font-semibold'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-green-100 text-green-700 font-semibold'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
