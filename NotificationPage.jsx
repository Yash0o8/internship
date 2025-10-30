import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Search, 
  Filter, 
  Check, 
  Trash2, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  ArrowLeft,
  MoreVertical,
  RefreshCw
} from 'lucide-react';
import axios from 'axios';
import Header from './common/Header';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [showActions, setShowActions] = useState(false);
  const navigate = useNavigate();

  // Mock data for demonstration
  const mockNotifications = [
    {
      id: 1,
      type: 'success',
      message: 'Your project "E-commerce Website" has been completed successfully!',
      timeAgo: '2 hours ago',
      isRead: false,
      category: 'project'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Payment for project "Mobile App Development" is due in 3 days',
      timeAgo: '1 day ago',
      isRead: true,
      category: 'payment'
    },
    {
      id: 3,
      type: 'info',
      message: 'New message from client regarding project requirements',
      timeAgo: '2 days ago',
      isRead: false,
      category: 'message'
    },
    {
      id: 4,
      type: 'error',
      message: 'Failed to upload project files. Please try again.',
      timeAgo: '3 days ago',
      isRead: true,
      category: 'system'
    },
    {
      id: 5,
      type: 'success',
      message: 'Your profile has been updated successfully',
      timeAgo: '1 week ago',
      isRead: true,
      category: 'profile'
    },
    {
      id: 6,
      type: 'info',
      message: 'New project matching your skills is available',
      timeAgo: '1 week ago',
      isRead: false,
      category: 'opportunity'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNotifications(mockNotifications);
      setFilteredNotifications(mockNotifications);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = notifications;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(notification =>
        notification.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (filterType !== 'all') {
      filtered = filtered.filter(notification => notification.type === filterType);
    }

    setFilteredNotifications(filtered);
  }, [notifications, searchTerm, filterType]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'success':
        return 'border-green-500 bg-green-50';
      case 'warning':
        return 'border-yellow-500 bg-yellow-50';
      case 'error':
        return 'border-red-500 bg-red-50';
      default:
        return 'border-blue-500 bg-blue-50';
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const deleteSelected = () => {
    setNotifications(prev => prev.filter(notification => !selectedNotifications.includes(notification.id)));
    setSelectedNotifications([]);
    setShowActions(false);
  };

  const toggleSelection = (id) => {
    setSelectedNotifications(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map(n => n.id));
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Bell className="w-8 h-8 text-green-600" />
                  Notifications
                  {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full animate-pulse">
                      {unreadCount} unread
                    </span>
                  )}
                </h1>
                <p className="text-gray-600 mt-1">Manage your notifications and stay updated</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                title="Refresh"
              >
                <RefreshCw className="w-5 h-5 text-gray-600" />
              </button>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Mark all read
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-slide-in-up">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="info">Info</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedNotifications.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 animate-slide-in-up">
            <div className="flex items-center justify-between">
              <span className="text-blue-800 font-medium">
                {selectedNotifications.length} notification(s) selected
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={deleteSelected}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Selected
                </button>
                <button
                  onClick={() => setSelectedNotifications([])}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in delay-200">
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="text-gray-500 mt-4">Loading notifications...</p>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="p-12 text-center">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
              <p className="text-gray-500">
                {searchTerm || filterType !== 'all' 
                  ? 'Try adjusting your search or filters' 
                  : 'You\'re all caught up!'
                }
              </p>
            </div>
          ) : (
            <>
              {/* List Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={selectedNotifications.length === filteredNotifications.length && filteredNotifications.length > 0}
                      onChange={selectAll}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {filteredNotifications.length} notification(s)
                    </span>
                  </div>
                  <button
                    onClick={() => setShowActions(!showActions)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="divide-y divide-gray-200">
                {filteredNotifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`p-6 hover:bg-gray-50 transition-all duration-200 cursor-pointer border-l-4 ${
                      notification.isRead ? 'border-transparent' : getTypeColor(notification.type)
                    } animate-slide-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        checked={selectedNotifications.includes(notification.id)}
                        onChange={(e) => {
                          e.stopPropagation();
                          toggleSelection(notification.id);
                        }}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                      />
                      
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${notification.isRead ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{notification.timeAgo}</span>
                            </div>
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {notification.category}
                            </span>
                          </div>
                          {!notification.isRead && (
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNotification(notification.id);
                        }}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200 text-red-600 hover:text-red-700"
                        title="Delete notification"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NotificationPage; 