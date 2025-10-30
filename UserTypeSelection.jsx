import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserRegistration from './UserRegistration';
import ProfessionalRegistration from './ProfessionalRegistration';
import Login from './Login';

const UserTypeSelection = () => {
  const [currentStep, setCurrentStep] = useState('selection');
  const [selectedType, setSelectedType] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const userTypes = [
    {
      id: 'user',
      title: 'Sign Up as User',
      description: 'Personal account for individuals looking to explore our platform',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-[#009f3d] to-[#00c04d]',
      buttonColor: 'bg-[#009f3d] hover:bg-[#007a30]'
    },
    {
      id: 'professional',
      title: 'Sign Up as Working Professional',
      description: 'Professional account with additional tools and features for career growth',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-[#007a30] to-[#009f3d]',
      buttonColor: 'bg-[#007a30] hover:bg-[#006127]'
    }
  ];

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentStep('registration');
  };

  const handleBackClick = () => {
    setCurrentStep('selection');
    setSelectedType(null);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login onBack={handleBackClick} />;
  }

  if (currentStep === 'registration') {
    if (selectedType === 'user') {
      return <UserRegistration onBack={handleBackClick} />;
    } else if (selectedType === 'professional') {
      return <ProfessionalRegistration onBack={handleBackClick} />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#009f3d] blur-3xl mix-blend-multiply opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00c04d] blur-3xl mix-blend-multiply opacity-30 animate-pulse delay-1000" />

      {/* Header */}
      <div className="text-center mb-12 z-10 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#009f3d] to-[#00c04d] flex items-center justify-center shadow-lg animate-zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 animate-slide-down">
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c04d] to-[#009f3d]">ProjectPilot</span>
        </h1>
        <p className="text-xl text-gray-300 animate-slide-down delay-100">Choose Your Role to Get Started</p>
        
        {/* Login Link */}
        <div className="mt-6 animate-slide-down delay-200">
          <button
            onClick={handleLoginClick}
            className="text-white hover:text-[#00c04d] transition-colors duration-300 underline"
          >
            Already have an account? Sign in here
          </button>
        </div>
      </div>

      {/* User Type Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full z-10">
        {userTypes.map((type, index) => (
          <div
            key={type.id}
            className={`w-full md:w-1/2 max-w-md relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ease-in-out 
              ${index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
          >
            {/* Card background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-80`} />
            
            {/* Animated overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm transition-all duration-500" />
            
            {/* Card content */}
            <div className="relative z-10 p-8 h-full flex flex-col">
              {/* Icon with animation */}
              <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${type.color} shadow-lg transition-all duration-300`}>
                {type.icon}
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-3">{type.title}</h2>
              <p className="text-gray-200 mb-8">{type.description}</p>
              
              {/* Button with shine effect */}
              <div className="mt-auto relative overflow-hidden rounded-lg group">
                <div className={`absolute inset-0 ${type.buttonColor} transition-all duration-300 group-hover:opacity-90`} />
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="absolute -inset-y-1/2 w-8 h-[200%] bg-white/30 rotate-12 transition-all duration-1000" />
                </div>
                <button
                  onClick={() => handleTypeSelect(type.id)}
                  className="relative w-full py-4 px-6 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Continue as {type.id === 'user' ? 'User' : 'Professional'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-400 text-sm z-10 animate-fade-in delay-300">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link to="/" className="hover:text-white transition-colors">Back to Home</Link>
          <Link to="/user/dashboard" className="hover:text-white transition-colors">User Dashboard</Link>
          <Link to="/professional/dashboard" className="hover:text-white transition-colors">Professional Dashboard</Link>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
        <p>© {new Date().getFullYear()} ProjectPilot. All rights reserved.</p>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-slide-down.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default UserTypeSelection; 