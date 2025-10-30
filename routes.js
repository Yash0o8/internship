const express = require('express');
const router = express.Router();

// In-memory demo data
const users = [];
const notifications = [
  { id: 1, user: 'user', type: 'info', message: 'Welcome to ProjectPilot!', isRead: false, timeAgo: 'just now' },
  { id: 2, user: 'professional', type: 'info', message: 'Welcome to ProjectPilot!', isRead: false, timeAgo: 'just now' }
];

// --- ADMIN PANEL ---
const admin = { username: 'admin', password: 'admin123', token: null };
const payments = [];
const milestones = [];

// User Registration
router.post('/register', (req, res) => {
  const { name, email, password, phone, location, profession, experience, skills, portfolio, certifications, userType } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ error: 'Email already registered' });
  }
  
  const user = {
    id: users.length + 1,
    name,
    email,
    password,
    phone,
    location,
    profession,
    experience,
    skills,
    portfolio,
    certifications,
    userType: userType || 'user',
    createdAt: new Date().toISOString()
  };
  
  users.push(user);
  return res.json({ message: 'Registration successful' });
});

// User Login
router.post('/login', (req, res) => {
  const { email, password, userType } = req.body;
  const user = users.find(u => u.email === email && u.password === password && u.userType === userType);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials or user type' });
  }
  
  // Generate a simple token (in production, use JWT)
  const token = `token_${user.id}_${Date.now()}`;
  
  return res.json({ 
    message: 'Login successful', 
    user: { 
      id: user.id,
      name: user.name, 
      email: user.email,
      userType: user.userType,
      profession: user.profession,
      experience: user.experience,
      skills: user.skills,
      portfolio: user.portfolio,
      certifications: user.certifications,
      location: user.location
    },
    token
  });
});

// Get Notifications
router.get('/notifications/:role', (req, res) => {
  const { role } = req.params;
  const userNotes = notifications.filter(n => n.user === role);
  res.json(userNotes);
});

// Mark All Notifications as Read
router.put('/notifications/:role/mark-read', (req, res) => {
  const { role } = req.params;
  notifications.forEach(n => { if (n.user === role) n.isRead = true; });
  res.json({ message: 'All notifications marked as read' });
});

// Mark Single Notification as Read
router.put('/notifications/:role/:id/read', (req, res) => {
  const { role, id } = req.params;
  const note = notifications.find(n => n.user === role && n.id == id);
  if (note) note.isRead = true;
  res.json({ message: 'Notification marked as read' });
});

// Contact Form
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }
  // In real app, send email or store message
  res.json({ message: 'Contact message received' });
});

// Admin Login
router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === admin.username && password === admin.password) {
    admin.token = `admin_token_${Date.now()}`;
    return res.json({ message: 'Admin login successful', token: admin.token });
  }
  return res.status(401).json({ error: 'Invalid admin credentials' });
});

// Middleware to check admin token
function requireAdmin(req, res, next) {
  const token = req.headers['authorization'];
  if (token === admin.token) return next();
  return res.status(403).json({ error: 'Unauthorized' });
}

// List all users (admin only)
router.get('/admin/users', requireAdmin, (req, res) => {
  res.json(users);
});

// User pays admin (simulate payment)
router.post('/pay', (req, res) => {
  const { userId, amount, projectId } = req.body;
  if (!userId || !amount || !projectId) return res.status(400).json({ error: 'Missing fields' });
  payments.push({ userId, amount, projectId, status: 'pending' });
  res.json({ message: 'Payment initiated, awaiting admin approval' });
});

// Admin approves user payment
router.post('/admin/approve-payment', requireAdmin, (req, res) => {
  const { projectId } = req.body;
  const payment = payments.find(p => p.projectId === projectId && p.status === 'pending');
  if (!payment) return res.status(404).json({ error: 'Payment not found' });
  payment.status = 'approved';
  res.json({ message: 'Payment approved' });
});

// Admin releases milestone payment to professional
router.post('/admin/release-milestone', requireAdmin, (req, res) => {
  const { projectId, milestoneId, professionalId, amount } = req.body;
  if (!projectId || !milestoneId || !professionalId || !amount) return res.status(400).json({ error: 'Missing fields' });
  milestones.push({ projectId, milestoneId, professionalId, amount, status: 'released' });
  res.json({ message: 'Milestone payment released to professional' });
});

// List all payments (admin only)
router.get('/admin/payments', requireAdmin, (req, res) => {
  res.json(payments);
});

// List all milestones (admin only)
router.get('/admin/milestones', requireAdmin, (req, res) => {
  res.json(milestones);
});

// Create a milestone for a project
router.post('/milestone', (req, res) => {
  const { projectId, milestoneId, title, description, amount, professionalId } = req.body;
  if (!projectId || !milestoneId || !title || !amount || !professionalId) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  milestones.push({ projectId, milestoneId, title, description, amount, professionalId, status: 'pending' });
  res.json({ message: 'Milestone created' });
});

// List milestones for a project
router.get('/milestones/:projectId', (req, res) => {
  const { projectId } = req.params;
  const projectMilestones = milestones.filter(m => m.projectId === projectId);
  res.json(projectMilestones);
});

module.exports = router; 