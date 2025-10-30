import React, { useState, useEffect } from 'react';
import { FiCreditCard, FiSmartphone, FiCheckCircle, FiClock, FiDollarSign, FiShield, FiUser, FiCalendar } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { usePayment } from '../../context/PaymentContext';

const PaymentSystem = () => {
  const { user } = useAuth();
  const { 
    projects: contextProjects, 
    payments: contextPayments, 
    milestones: contextMilestones, 
    bankDetails: contextBankDetails, 
    createPayment, 
    saveBankDetails, 
    releaseMilestonePayment,
    getTotalEarnings,
    getPendingPayouts
  } = usePayment();
  const [activeTab, setActiveTab] = useState('user-payment');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [projectId, setProjectId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    bankName: ''
  });
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Milestone state
  const [milestoneId, setMilestoneId] = useState('');
  const [milestoneTitle, setMilestoneTitle] = useState('');
  const [milestoneDesc, setMilestoneDesc] = useState('');
  const [milestoneAmount, setMilestoneAmount] = useState('');
  const [professionalId, setProfessionalId] = useState('');
  const [milestoneMsg, setMilestoneMsg] = useState('');
  const [milestoneError, setMilestoneError] = useState('');
  const [milestones, setMilestones] = useState([]);

  // Use projects from context
  const projects = contextProjects.length > 0 ? contextProjects : [
    { id: 1, title: "E-commerce Website", amount: 1500, professional: "Alex Johnson", milestones: 3 },
    { id: 2, title: "Mobile App Development", amount: 2500, professional: "Sarah Wilson", milestones: 4 },
    { id: 3, title: "UI/UX Design", amount: 800, professional: "Mike Chen", milestones: 2 }
  ];

  // Use payments from context
  const paymentHistory = contextPayments.length > 0 ? contextPayments : [
    { id: 1, project: "E-commerce Website", amount: 1500, status: "completed", date: "2024-01-15", method: "UPI" },
    { id: 2, project: "Mobile App", amount: 1200, status: "pending", date: "2024-01-20", method: "UPI" },
    { id: 3, project: "UI Design", amount: 800, status: "completed", date: "2024-01-10", method: "UPI" }
  ];

  // Use milestones from context
  const milestonePayments = contextMilestones.length > 0 ? contextMilestones : [
    { id: 1, project: "E-commerce Website", milestone: "Database Setup", amount: 500, status: "paid", date: "2024-01-18" },
    { id: 2, project: "E-commerce Website", milestone: "Frontend Development", amount: 500, status: "pending", date: "2024-01-25" },
    { id: 3, project: "E-commerce Website", milestone: "Testing & Deployment", amount: 500, status: "pending", date: "2024-02-01" }
  ];

  const handleUserPayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      await createPayment(parseInt(projectId), parseFloat(amount), paymentMethod, upiId);
      setIsProcessing(false);
      setPaymentSuccess(true);
      // Reset form
      setAmount('');
      setUpiId('');
      setProjectId('');
    } catch (error) {
      setIsProcessing(false);
      alert('Payment failed. Please try again.');
    }
  };

  const handleBankDetailsSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveBankDetails(bankDetails);
      alert('Bank details saved successfully!');
    } catch (error) {
      alert('Failed to save bank details. Please try again.');
    }
  };

  const handleMilestoneApproval = async (milestoneId) => {
    try {
      await releaseMilestonePayment(milestoneId);
      alert('Milestone payment released successfully!');
    } catch (error) {
      alert('Failed to release payment. Please try again.');
    }
  };

  const upiApps = [
    { name: 'Google Pay', id: 'gpay', icon: '💰' },
    { name: 'PhonePe', id: 'phonepe', icon: '📱' },
    { name: 'Paytm', id: 'paytm', icon: '💳' },
    { name: 'BHIM UPI', id: 'bhim', icon: '🏦' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, amount, projectId })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setUserId(''); setAmount(''); setProjectId('');
      } else {
        setError(data.error || 'Payment failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  const handleMilestone = async (e) => {
    e.preventDefault();
    setMilestoneMsg('');
    setMilestoneError('');
    try {
      const res = await fetch('http://localhost:5000/api/milestone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, milestoneId, title: milestoneTitle, description: milestoneDesc, amount: milestoneAmount, professionalId })
      });
      const data = await res.json();
      if (res.ok) {
        setMilestoneMsg(data.message);
        setMilestoneId(''); setMilestoneTitle(''); setMilestoneDesc(''); setMilestoneAmount(''); setProfessionalId('');
        fetchMilestones();
      } else {
        setMilestoneError(data.error || 'Milestone creation failed');
      }
    } catch (err) {
      setMilestoneError('Network error');
    }
  };

  const fetchMilestones = async () => {
    if (!projectId) return;
    const res = await fetch(`http://localhost:5000/api/milestones/${projectId}`);
    const data = await res.json();
    setMilestones(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment System</h1>
          <p className="text-gray-600">Secure payments with milestone-based releases</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'user-payment', label: 'User Payments', icon: FiCreditCard },
                { id: 'professional-payout', label: 'Professional Payouts', icon: FiDollarSign },
                { id: 'payment-history', label: 'Payment History', icon: FiClock },
                { id: 'milestones', label: 'Milestone Payments', icon: FiCheckCircle }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#a7c957] text-[#a7c957]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* User Payment Tab */}
            {activeTab === 'user-payment' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Payment Form */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Make Payment</h2>
                    
                    <form onSubmit={handleUserPayment} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Project</label>
                        <select
                          value={projectId}
                          onChange={(e) => setProjectId(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
                          required
                        >
                          <option value="">Choose a project</option>
                          {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                              {project.title} - ${project.amount} ({project.professional})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amount (USD)</label>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
                          placeholder="Enter amount"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                        <div className="grid grid-cols-2 gap-3">
                          {upiApps.map((app) => (
                            <button
                              key={app.id}
                              type="button"
                              onClick={() => setPaymentMethod(app.id)}
                              className={`p-3 border rounded-lg flex items-center gap-2 transition-colors ${
                                paymentMethod === app.id
                                  ? 'border-[#a7c957] bg-[#a7c957] text-white'
                                  : 'border-gray-300 hover:border-[#a7c957]'
                              }`}
                            >
                              <span className="text-lg">{app.icon}</span>
                              <span className="text-sm font-medium">{app.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {paymentMethod === 'upi' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                          <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
                            placeholder="Enter UPI ID (e.g., user@upi)"
                            required
                          />
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full py-3 bg-[#a7c957] text-white rounded-lg font-medium hover:bg-[#8db446] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Processing Payment...
                          </>
                        ) : (
                          <>
                            <FiDollarSign size={16} />
                            Pay ${amount || '0'}
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Payment Info */}
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">How It Works</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <p className="font-medium text-blue-900">Pay Full Amount</p>
                            <p className="text-sm text-blue-700">Pay the complete project amount to ProjectPilot</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <p className="font-medium text-blue-900">Secure Escrow</p>
                            <p className="text-sm text-blue-700">Your payment is held securely until milestones are completed</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <p className="font-medium text-blue-900">Milestone Releases</p>
                            <p className="text-sm text-blue-700">Professional receives payment as milestones are approved</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Security Features</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <FiShield className="text-green-600" />
                          <span className="text-sm text-green-700">End-to-end encryption</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiShield className="text-green-600" />
                          <span className="text-sm text-green-700">PCI DSS compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiShield className="text-green-600" />
                          <span className="text-sm text-green-700">Secure payment gateway</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Success Modal */}
                {paymentSuccess && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiCheckCircle className="text-green-600" size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                      <p className="text-gray-600 mb-6">Your payment has been processed successfully. The professional will receive milestone payments as they complete their work.</p>
                      <button
                        onClick={() => setPaymentSuccess(false)}
                        className="px-6 py-3 bg-[#a7c957] text-white rounded-lg font-medium hover:bg-[#8db446] transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Professional Payout Tab */}
            {activeTab === 'professional-payout' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Bank Details Form */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Bank Account Details</h2>
                    
                    <form onSubmit={handleBankDetailsSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                        <input
                          type="text"
                          value={bankDetails.accountHolderName}
                          onChange={(e) => setBankDetails(prev => ({ ...prev, accountHolderName: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
                          placeholder="Enter account holder name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                        <input
                          type="text"
                          value={bankDetails.bankName}
                          onChange={(e) => setBankDetails(prev => ({ ...prev, bankName: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
                          placeholder="Enter bank name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                        <input
                          type="text"
                          value={bankDetails.accountNumber}
                          onChange={(e) => setBankDetails(prev => ({ ...prev, accountNumber: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
                          placeholder="Enter account number"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                        <input
                          type="text"
                          value={bankDetails.ifscCode}
                          onChange={(e) => setBankDetails(prev => ({ ...prev, ifscCode: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a7c957] focus:border-transparent"
                          placeholder="Enter IFSC code"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-[#a7c957] text-white rounded-lg font-medium hover:bg-[#8db446] transition-colors"
                      >
                        Save Bank Details
                      </button>
                    </form>
                  </div>

                  {/* Payout Info */}
                  <div className="space-y-6">
                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-yellow-900 mb-3">Payout Schedule</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-yellow-700">Processing Time</span>
                          <span className="font-medium text-yellow-900">2-3 business days</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-yellow-700">Minimum Payout</span>
                          <span className="font-medium text-yellow-900">$50</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-yellow-700">Transaction Fee</span>
                          <span className="font-medium text-yellow-900">2.5%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Available for Payout</h3>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-900">${getPendingPayouts()}</p>
                        <p className="text-sm text-blue-700">From completed milestones</p>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Request Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment History Tab */}
            {activeTab === 'payment-history' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Payment History</h2>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {paymentHistory.map((payment) => (
                          <tr key={payment.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{payment.project}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">${payment.amount}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                payment.status === 'completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {payment.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.method}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Milestone Payments Tab */}
            {activeTab === 'milestones' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Milestone Payments</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {milestonePayments.map((milestone) => (
                    <div key={milestone.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">{milestone.project}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          milestone.status === 'paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">{milestone.milestone}</p>
                        <p className="text-lg font-bold text-[#a7c957]">${milestone.amount}</p>
                        <p className="text-xs text-gray-500">Due: {milestone.date}</p>
                      </div>

                      {milestone.status === 'pending' && (
                        <button 
                          onClick={() => handleMilestoneApproval(milestone.id)}
                          className="mt-4 w-full px-4 py-2 bg-[#a7c957] text-white rounded-lg text-sm hover:bg-[#8db446] transition-colors"
                        >
                          Approve & Pay
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem; 