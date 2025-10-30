import React, { useState } from 'react';

const availableProjects = [
  { id: 1, title: 'E-commerce Website Development', description: 'React e-commerce site with Node.js backend', postedBy: 'Sarah Miller', postedDate: '2 days ago' },
  { id: 2, title: 'API Integration Project', description: 'Integrate third-party APIs', postedBy: 'Michael Chen', postedDate: '1 week ago' },
];
const activeProjects = [
  { id: 1, title: 'Task Management App', student: 'David Wilson', progress: 65, nextMeeting: 'May 15, 2023 - 3:00 PM' },
];
const completedProjects = [
  { id: 1, title: 'Weather Application', student: 'Emma Thompson', completedDate: 'April 10, 2023', rating: 5, feedback: 'Alex was extremely helpful in guiding me through the API integration challenges.' },
];

const ProfessionalDashboard = () => {
  const [tab, setTab] = useState('available');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Professional Dashboard</h1>
      <div className="mb-6 flex gap-4">
        <button onClick={() => setTab('available')} className={`px-4 py-2 rounded ${tab==='available'?'bg-green-600 text-white':'bg-white border'}`}>Available Projects</button>
        <button onClick={() => setTab('active')} className={`px-4 py-2 rounded ${tab==='active'?'bg-green-600 text-white':'bg-white border'}`}>Active Projects</button>
        <button onClick={() => setTab('completed')} className={`px-4 py-2 rounded ${tab==='completed'?'bg-green-600 text-white':'bg-white border'}`}>Completed Projects</button>
        <button onClick={() => setTab('profile')} className={`px-4 py-2 rounded ${tab==='profile'?'bg-green-600 text-white':'bg-white border'}`}>Profile</button>
      </div>
      {tab==='available' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Projects</h2>
          <ul className="divide-y divide-gray-200">
            {availableProjects.map(p => (
              <li key={p.id} className="py-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-500">{p.description}</div>
                <div className="text-xs text-gray-400">Posted by {p.postedBy} - {p.postedDate}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tab==='active' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <ul className="divide-y divide-gray-200">
            {activeProjects.map(p => (
              <li key={p.id} className="py-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-500">Student: {p.student}</div>
                <div className="text-xs text-gray-400">Progress: {p.progress}% | Next Meeting: {p.nextMeeting}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tab==='completed' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Completed Projects</h2>
          <ul className="divide-y divide-gray-200">
            {completedProjects.map(p => (
              <li key={p.id} className="py-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-500">Student: {p.student}</div>
                <div className="text-xs text-gray-400">Completed: {p.completedDate}</div>
                <div className="text-yellow-500">{'★'.repeat(p.rating)}{'☆'.repeat(5-p.rating)}</div>
                <div className="text-xs text-gray-600 mt-1">{p.feedback}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tab==='profile' && (
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile Summary</h2>
          <div>Name: Alex Johnson</div>
          <div>Email: alexjohnson@example.com</div>
          <div>Role: Professional</div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalDashboard; 