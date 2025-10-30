import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const API = 'http://localhost:5000/api';

const AdminPanel = () => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [tab, setTab] = useState('users');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${API}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        toast.success('Admin login successful!');
      } else {
        setError(data.error || 'Login failed');
        toast.error(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
      toast.error('Network error');
    }
  };

  // Fetch data after login
  useEffect(() => {
    if (!token) return;
    fetch(`${API}/admin/users`, { headers: { Authorization: token } })
      .then(res => res.json()).then(setUsers);
    fetch(`${API}/admin/payments`, { headers: { Authorization: token } })
      .then(res => res.json()).then(setPayments);
    fetch(`${API}/admin/milestones`, { headers: { Authorization: token } })
      .then(res => res.json()).then(setMilestones);
  }, [token]);

  const approvePayment = async (projectId) => {
    await fetch(`${API}/admin/approve-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ projectId })
    });
    fetch(`${API}/admin/payments`, { headers: { Authorization: token } })
      .then(res => res.json()).then(setPayments);
    toast.success('Payment approved!');
  };

  const releaseMilestone = async (projectId, milestoneId, professionalId, amount) => {
    await fetch(`${API}/admin/release-milestone`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ projectId, milestoneId, professionalId, amount })
    });
    fetch(`${API}/admin/milestones`, { headers: { Authorization: token } })
      .then(res => res.json()).then(setMilestones);
    toast.success('Milestone released!');
  };

  const handleLogout = () => {
    setToken(null);
    setUsername('');
    setPassword('');
    toast('Logged out');
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Toaster position="top-right" />
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="w-full mb-4 p-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-6 p-2 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Toaster position="top-right" />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-bold text-green-600">{users.length}</span>
          <span className="text-gray-600">Users</span>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-bold text-blue-600">{payments.length}</span>
          <span className="text-gray-600">Payments</span>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-bold text-purple-600">{milestones.length}</span>
          <span className="text-gray-600">Milestones</span>
        </div>
      </div>
      <div className="mb-6 flex gap-4">
        <button onClick={() => setTab('users')} className={`px-4 py-2 rounded ${tab==='users'?'bg-green-600 text-white':'bg-white border'}`}>Users</button>
        <button onClick={() => setTab('payments')} className={`px-4 py-2 rounded ${tab==='payments'?'bg-green-600 text-white':'bg-white border'}`}>Payments</button>
        <button onClick={() => setTab('milestones')} className={`px-4 py-2 rounded ${tab==='milestones'?'bg-green-600 text-white':'bg-white border'}`}>Milestones</button>
      </div>
      {tab==='users' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">All Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded shadow mb-8 table-auto">
              <thead className="bg-gray-100">
                <tr><th className="p-2">ID</th><th className="p-2">Name</th><th className="p-2">Email</th><th className="p-2">Type</th></tr>
              </thead>
              <tbody>
                {users.map(u => <tr key={u.id} className="even:bg-gray-50 hover:bg-green-50"><td className="p-2">{u.id}</td><td className="p-2">{u.name}</td><td className="p-2">{u.email}</td><td className="p-2">{u.userType}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab==='payments' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">User Payments</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded shadow mb-8 table-auto">
              <thead className="bg-gray-100">
                <tr><th className="p-2">User ID</th><th className="p-2">Project ID</th><th className="p-2">Amount</th><th className="p-2">Status</th><th className="p-2">Action</th></tr>
              </thead>
              <tbody>
                {payments.map(p => (
                  <tr key={p.projectId} className="even:bg-gray-50 hover:bg-green-50">
                    <td className="p-2">{p.userId}</td><td className="p-2">{p.projectId}</td><td className="p-2">{p.amount}</td><td className="p-2">{p.status}</td>
                    <td className="p-2">{p.status==='pending' && <button onClick={()=>approvePayment(p.projectId)} className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Approve</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab==='milestones' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Milestone Payments</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded shadow mb-8 table-auto">
              <thead className="bg-gray-100">
                <tr><th className="p-2">Project ID</th><th className="p-2">Milestone ID</th><th className="p-2">Professional ID</th><th className="p-2">Amount</th><th className="p-2">Status</th><th className="p-2">Action</th></tr>
              </thead>
              <tbody>
                {milestones.map(m => (
                  <tr key={m.milestoneId} className="even:bg-gray-50 hover:bg-green-50">
                    <td className="p-2">{m.projectId}</td><td className="p-2">{m.milestoneId}</td><td className="p-2">{m.professionalId}</td><td className="p-2">{m.amount}</td><td className="p-2">{m.status}</td>
                    <td className="p-2">{m.status!=='released' && <button onClick={()=>releaseMilestone(m.projectId, m.milestoneId, m.professionalId, m.amount)} className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Release</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel; 