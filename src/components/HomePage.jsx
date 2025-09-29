import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const pages = [
    {
      path: '/services',
      title: 'Services',
      description: 'View our comprehensive services including secure payments, talent matching, and project management',
      icon: '🛠️',
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    {
      path: '/about',
      title: 'About Us',
      description: 'Learn about our mission, vision, leadership team, and why clients choose us',
      icon: 'ℹ️',
      color: 'bg-green-50 border-green-200 text-green-700'
    },
    {
      path: '/notifications',
      title: 'Notifications',
      description: 'View and manage your notifications and alerts',
      icon: '🔔',
      color: 'bg-purple-50 border-purple-200 text-purple-700'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to ProjectPilot
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive platform for secure freelancing and project management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className={`${page.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
          >
            <div className="text-4xl mb-4">{page.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{page.title}</h3>
            <p className="text-sm opacity-80">{page.description}</p>
            <div className="mt-4 text-sm font-medium">
              View Page →
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Platform Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">10,000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">$2M+</div>
            <div className="text-gray-600">Paid Out Securely</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">30+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">4.9/5</div>
            <div className="text-gray-600">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
