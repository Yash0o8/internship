import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    const storedUserType = localStorage.getItem('userType');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setUserType(storedUserType);
    }
    setLoading(false);
  }, []);

  const login = (userData, userToken, type) => {
    setUser(userData);
    setToken(userToken);
    setUserType(type);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userToken);
    localStorage.setItem('userType', type);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setUserType(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
  };

  const isAuthenticated = () => {
    return !!user && !!token;
  };

  const isUser = () => {
    return userType === 'user';
  };

  const isProfessional = () => {
    return userType === 'professional';
  };

  const value = {
    user,
    token,
    userType,
    loading,
    login,
    logout,
    isAuthenticated,
    isUser,
    isProfessional
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 