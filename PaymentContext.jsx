import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const PaymentContext = createContext();

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};

export const PaymentProvider = ({ children }) => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [bankDetails, setBankDetails] = useState(null);

  // Load initial data only when user is available
  useEffect(() => {
    if (user) {
      loadUserData();
    } else {
      // Reset data when user is null
      setProjects([]);
      setPayments([]);
      setMilestones([]);
      setBankDetails(null);
    }
  }, [user]);

  const loadUserData = () => {
    // Mock data - in real app, this would come from API
    const mockProjects = [
      {
        id: 1,
        title: "E-commerce Website Development",
        description: "Need help building a React e-commerce site with Node.js backend",
        amount: 1500,
        professional: "Alex Johnson",
        status: "active",
        milestones: [
          { id: 1, name: "Database Design", amount: 500, status: "completed", dueDate: "2024-01-18" },
          { id: 2, name: "Frontend Development", amount: 500, status: "in-progress", dueDate: "2024-01-25" },
          { id: 3, name: "Testing & Deployment", amount: 500, status: "pending", dueDate: "2024-02-01" }
        ]
      },
      {
        id: 2,
        title: "Mobile App Development",
        description: "Looking for guidance on React Native app development",
        amount: 2500,
        professional: "Sarah Wilson",
        status: "pending",
        milestones: [
          { id: 4, name: "UI/UX Design", amount: 800, status: "pending", dueDate: "2024-01-20" },
          { id: 5, name: "Core Features", amount: 1200, status: "pending", dueDate: "2024-02-05" },
          { id: 6, name: "Testing & Launch", amount: 500, status: "pending", dueDate: "2024-02-15" }
        ]
      }
    ];

    const mockPayments = [
      {
        id: 1,
        projectId: 1,
        amount: 1500,
        status: "completed",
        method: "UPI",
        date: "2024-01-15",
        type: "payment" // payment or payout
      },
      {
        id: 2,
        projectId: 1,
        amount: 500,
        status: "completed",
        method: "Bank Transfer",
        date: "2024-01-18",
        type: "payout"
      }
    ];

    const mockMilestones = [
      {
        id: 1,
        projectId: 1,
        name: "Database Design",
        amount: 500,
        status: "completed",
        completedDate: "2024-01-18",
        professional: "Alex Johnson"
      },
      {
        id: 2,
        projectId: 1,
        name: "Frontend Development",
        amount: 500,
        status: "in-progress",
        dueDate: "2024-01-25",
        professional: "Alex Johnson"
      }
    ];

    setProjects(mockProjects);
    setPayments(mockPayments);
    setMilestones(mockMilestones);
  };

  const createPayment = async (projectId, amount, paymentMethod, upiId) => {
    const newPayment = {
      id: Date.now(),
      projectId,
      amount,
      status: "processing",
      method: paymentMethod,
      upiId,
      date: new Date().toISOString().split('T')[0],
      type: "payment"
    };

    setPayments(prev => [...prev, newPayment]);

    // Simulate payment processing
    setTimeout(() => {
      setPayments(prev => 
        prev.map(payment => 
          payment.id === newPayment.id 
            ? { ...payment, status: "completed" }
            : payment
        )
      );
    }, 3000);

    return newPayment;
  };

  const saveBankDetails = async (details) => {
    setBankDetails(details);
    // In real app, save to backend
    return { success: true };
  };

  const releaseMilestonePayment = async (milestoneId) => {
    const milestone = milestones.find(m => m.id === milestoneId);
    if (!milestone) return { success: false, error: "Milestone not found" };

    const newPayout = {
      id: Date.now(),
      projectId: milestone.projectId,
      amount: milestone.amount,
      status: "processing",
      method: "Bank Transfer",
      date: new Date().toISOString().split('T')[0],
      type: "payout",
      milestoneId
    };

    setPayments(prev => [...prev, newPayout]);

    // Update milestone status
    setMilestones(prev => 
      prev.map(m => 
        m.id === milestoneId 
          ? { ...m, status: "completed", completedDate: new Date().toISOString().split('T')[0] }
          : m
      )
    );

    // Simulate payout processing
    setTimeout(() => {
      setPayments(prev => 
        prev.map(payment => 
          payment.id === newPayout.id 
            ? { ...payment, status: "completed" }
            : payment
        )
      );
    }, 2000);

    return { success: true };
  };

  const getProjectById = (projectId) => {
    return projects.find(p => p.id === projectId);
  };

  const getPaymentsByProject = (projectId) => {
    return payments.filter(p => p.projectId === projectId);
  };

  const getMilestonesByProject = (projectId) => {
    return milestones.filter(m => m.projectId === projectId);
  };

  const getTotalEarnings = () => {
    return payments
      .filter(p => p.type === "payout" && p.status === "completed")
      .reduce((total, payment) => total + payment.amount, 0);
  };

  const getPendingPayouts = () => {
    return payments
      .filter(p => p.type === "payout" && p.status === "processing")
      .reduce((total, payment) => total + payment.amount, 0);
  };

  const value = {
    projects,
    payments,
    milestones,
    bankDetails,
    createPayment,
    saveBankDetails,
    releaseMilestonePayment,
    getProjectById,
    getPaymentsByProject,
    getMilestonesByProject,
    getTotalEarnings,
    getPendingPayouts
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
}; 