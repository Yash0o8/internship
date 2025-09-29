import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/services', label: 'Services', icon: '🛠️' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/notifications', label: 'Notifications', icon: '🔔' },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 mb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <h1 className="text-xl font-bold text-green-600">ProjectPilot</h1>
          </div>
          
          <div className="flex space-x-6">
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
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
