import React, { useState, useEffect } from 'react';
import { Bell, Check, Eye, Clock, AlertCircle, CheckCircle, Info } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NotificationDropdown = ({ role }) => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setOpen(!open);

  // ✅ Fetch notifications based on role
  useEffect(() => {
    if (!role) return;

    setIsLoading(true);
    axios
      .get(`http://localhost:5000/api/notifications/${role}`)
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error("Error fetching notifications:", err))
      .finally(() => setIsLoading(false));
  }, [role]);

  // ✅ Mark all as read
  const markAllAsRead = () => {
    setIsLoading(true);
    axios
      .put(`http://localhost:5000/api/notifications/${role}/mark-read`)
      .then(() => {
        const updated = notifications.map((n) => ({ ...n, isRead: true }));
        setNotifications(updated);
      })
      .catch((err) => console.error("Error marking as read:", err))
      .finally(() => setIsLoading(false));
  };

  // ✅ Mark single notification as read
  const markAsRead = (notificationId) => {
    axios
      .put(`http://localhost:5000/api/notifications/${role}/${notificationId}/read`)
      .then(() => {
        const updated = notifications.map((n) => 
          n.id === notificationId ? { ...n, isRead: true } : n
        );
        setNotifications(updated);
      })
      .catch((err) => console.error("Error marking as read:", err));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={toggleDropdown} 
        className="relative p-2 focus:outline-none group transition-all duration-200 hover:bg-gray-100 rounded-lg"
      >
        <Bell className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-200" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 animate-slide-in-down">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-green-50 to-blue-50 rounded-t-xl">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Bell className="w-4 h-4 text-green-600" />
              Notifications
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount} new
                </span>
              )}
            </h3>
            <button
              onClick={markAllAsRead}
              disabled={isLoading || unreadCount === 0}
              className="text-green-600 text-sm hover:text-green-700 hover:underline transition-colors duration-200 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check className="w-3 h-3" />
              Mark all read
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-80 overflow-y-auto">
            {isLoading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
                <p className="text-sm text-gray-500 mt-2">Loading notifications...</p>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No notifications found.</p>
              </div>
            ) : (
              notifications.slice(0, 5).map((note, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer border-l-4 ${
                    note.isRead ? 'border-transparent' : 'border-green-500 bg-green-50'
                  } ${!note.isRead ? 'animate-fade-in' : ''}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => markAsRead(note.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(note.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm ${note.isRead ? 'text-gray-600' : 'text-gray-800 font-medium'}`}>
                        {note.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{note.timeAgo}</span>
                        </div>
                        {!note.isRead && (
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="text-center py-3 border-t border-gray-100 bg-gray-50 rounded-b-xl">
            <button
              className="text-green-600 text-sm hover:text-green-700 hover:underline transition-colors duration-200 flex items-center gap-1 mx-auto"
              onClick={() => {
                setOpen(false);
                navigate('/notifications');
              }}
            >
              <Eye className="w-3 h-3" />
              View all notifications
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpen(false)}
        />
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-in-down {
          animation: slideInDown 0.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NotificationDropdown;
