import React, { useState } from 'react';

const mockProjects = [
  { id: 1, title: 'E-commerce Dashboard', status: 'active', progress: 65 },
  { id: 2, title: 'Portfolio Website', status: 'waiting', progress: 0 },
];
const mockPayments = [
  { id: 1, project: 'E-commerce Dashboard', amount: 500, status: 'Paid' },
  { id: 2, project: 'Portfolio Website', amount: 200, status: 'Pending' },
];
const mockMilestones = [
  { id: 1, project: 'E-commerce Dashboard', name: 'UI Design', status: 'completed' },
  { id: 2, project: 'E-commerce Dashboard', name: 'Backend API', status: 'in-progress' },
];

const UserDashboard = () => {
  const [tab, setTab] = useState('projects');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <div className="mb-6 flex gap-4">
        <button onClick={() => setTab('projects')} className={`px-4 py-2 rounded ${tab==='projects'?'bg-green-600 text-white':'bg-white border'}`}>Projects</button>
        <button onClick={() => setTab('payments')} className={`px-4 py-2 rounded ${tab==='payments'?'bg-green-600 text-white':'bg-white border'}`}>Payments</button>
        <button onClick={() => setTab('milestones')} className={`px-4 py-2 rounded ${tab==='milestones'?'bg-green-600 text-white':'bg-white border'}`}>Milestones</button>
        <button onClick={() => setTab('profile')} className={`px-4 py-2 rounded ${tab==='profile'?'bg-green-600 text-white':'bg-white border'}`}>Profile</button>
      </div>
      {tab==='projects' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <ul className="divide-y divide-gray-200">
            {mockProjects.map(p => (
              <li key={p.id} className="py-4 flex justify-between items-center">
                <span className="font-medium">{p.title}</span>
                <span className="text-sm text-gray-500">{p.status} ({p.progress}%)</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tab==='payments' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Payments</h2>
          <table className="w-full">
            <thead><tr><th>Project</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>
              {mockPayments.map(p => (
                <tr key={p.id} className="even:bg-gray-50">
                  <td className="p-2">{p.project}</td><td className="p-2">${p.amount}</td><td className="p-2">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab==='milestones' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Milestones</h2>
          <ul className="divide-y divide-gray-200">
            {mockMilestones.map(m => (
              <li key={m.id} className="py-4 flex justify-between items-center">
                <span>{m.project} - {m.name}</span>
                <span className="text-sm text-gray-500">{m.status}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tab==='profile' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile Summary</h2>
          <div>Name: John Doe</div>
          <div>Email: johndoe@example.com</div>
          <div>Role: User</div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard; 