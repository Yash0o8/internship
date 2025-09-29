import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ServicesSection from './components/ServicesSection';
import AboutPage from './components/AboutPage';
import NotificationDropdown from './components/NotificationDropdown';
import NotificationsPage from './components/NotificationsPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="w-full flex justify-center">
        <Routes>
        {/* Main home page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Notification dropdown page */}
        <Route path="/notifications-dropdown" element={<NotificationDropdown />} />

        {/* Full notifications page */}
        <Route path="/notifications" element={<NotificationsPage />} />

        {/* Services and About pages */}
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
