import React from 'react';
import { FiHome, FiSearch, FiUser, FiBriefcase, FiSettings, FiLogOut, FiPlus, FiCheckCircle, FiClock } from 'react-icons/fi';

const Sidebar = ({ userType = 'user', activeTab, onTabChange, onMobileMenuClose }) => {
  const userMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome },
    { id: 'search', label: 'Find Professionals', icon: FiSearch },
    { id: 'projects', label: 'My Projects', icon: FiBriefcase },
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  const professionalMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome },
    { id: 'available', label: 'Available Projects', icon: FiSearch },
    { id: 'active', label: 'Active Projects', icon: FiClock },
    { id: 'completed', label: 'Completed Projects', icon: FiCheckCircle },
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  const menuItems = userType === 'professional' ? professionalMenuItems : userMenuItems;

  return (
    <div className="bg-white rounded-lg shadow p-1">
      <nav className="flex flex-col space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-[#a7c957] text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => {
                onTabChange(item.id);
                onMobileMenuClose && onMobileMenuClose();
              }}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
        
        {/* Special action button for users */}
        {userType === 'user' && (
          <button
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-left bg-[#a7c957] text-white hover:bg-[#8fb84a] transition-colors"
            onClick={() => {
              onTabChange('post-project');
              onMobileMenuClose && onMobileMenuClose();
            }}
          >
            <FiPlus size={20} />
            <span className="font-medium">Post a Project</span>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Sidebar; 