# ProjectPilot - Professional Guidance Platform

A React-based web application that connects users seeking professional guidance with industry experts who can monetize their expertise.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd Projectpilot
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/                    # Authentication components
│   │   ├── UserTypeSelection.jsx
│   │   ├── UserRegistration.jsx
│   │   └── ProfessionalRegistration.jsx
│   ├── common/                  # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   └── Sidebar.jsx
│   ├── user/                    # User-specific components
│   │   ├── dashboard/
│   │   │   └── UserDashboard.jsx
│   │   ├── profile/
│   │   │   └── UserProfilePage.jsx
│   │   ├── UpUser.jsx
│   │   ├── UpdatedUser.jsx
│   │   └── NUpUserprof.jsx
│   └── professional/            # Professional-specific components
│       ├── dashboard/
│       │   └── ProfessionalDashboard.jsx
│       ├── profile/
│       │   └── WorkingProf_Profile.jsx
│       ├── WFRegistration.jsx
│       └── WorkingProfessional.jsx
├── App.jsx                      # Main application component with routing
└── main.jsx                     # Application entry point
```

## 🧭 Navigation Guide

### Available Routes

#### Landing Page
- **URL**: `/`
- **Description**: Main landing page with hero section, features, and testimonials
- **Navigation**: Click "Get Started" or "Sign Up" to go to authentication

#### Authentication
- **URL**: `/auth`
- **Description**: User type selection page (User vs Professional)
- **Navigation**: 
  - Choose "Sign Up as User" → User Registration
  - Choose "Sign Up as Working Professional" → Professional Registration

#### User Dashboard
- **URL**: `/user/dashboard`
- **Description**: Main dashboard for users seeking professional guidance
- **Features**:
  - View active projects
  - Find professionals
  - Post new projects
  - Track project progress

#### Professional Dashboard
- **URL**: `/professional/dashboard`
- **Description**: Main dashboard for professionals offering guidance
- **Features**:
  - View available projects
  - Manage active projects
  - Track completed projects
  - Update availability status

#### Additional User Routes
- `/user/profile` - User profile page
- `/user/up` - Updated user interface
- `/user/updated` - Alternative user interface
- `/user/nup` - New user profile interface

#### Additional Professional Routes
- `/professional/profile` - Professional profile page
- `/professional/registration` - Professional registration form
- `/professional/working` - Working professional interface

## 🎨 Features

### For Users (Seeking Guidance)
- **Project Management**: Create and track projects
- **Professional Search**: Find qualified experts
- **Progress Tracking**: Monitor project milestones
- **Communication**: Connect with professionals

### For Professionals (Offering Guidance)
- **Project Discovery**: Browse available projects
- **Profile Management**: Showcase skills and experience
- **Availability Control**: Set availability status
- **Project Tracking**: Manage active and completed projects

### Common Features
- **Responsive Design**: Works on desktop and mobile
- **Real-time Notifications**: Stay updated on project activities
- **Search Functionality**: Find projects or professionals
- **Modern UI**: Clean, intuitive interface with Tailwind CSS

## 🛠️ Technology Stack

- **Frontend**: React 19
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Vite
- **Carousel**: React Responsive Carousel
- **Animations**: Animate.css

## 🎯 Key Components

### Authentication Flow
1. **UserTypeSelection**: Choose between User and Professional accounts
2. **UserRegistration**: Standard user registration form
3. **ProfessionalRegistration**: Extended registration for professionals

### Dashboard Components
1. **UserDashboard**: Complete user interface with project management
2. **ProfessionalDashboard**: Professional interface with project discovery
3. **Sidebar**: Navigation menu for both user types
4. **Header**: Top navigation with search and notifications

### Common UI Components
1. **Button**: Reusable button component with multiple variants
2. **Card**: Container component for content sections
3. **Modal**: Popup dialogs for forms and confirmations
4. **Header**: Top navigation bar with search functionality

## 🔧 Development

### Adding New Routes
1. Import the component in `App.jsx`
2. Add a new `<Route>` element in the Routes component
3. Update navigation links as needed

### Styling
- Uses Tailwind CSS for styling
- Custom color scheme: `#a7c957` (green) as primary color
- Responsive design with mobile-first approach

### State Management
- Uses React hooks (useState, useEffect) for local state
- Component-based state management
- No external state management library required

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Notes

- All components are properly linked with React Router
- Navigation is consistent across all pages
- Responsive design works on all screen sizes
- Modern React patterns and best practices used
- Clean, maintainable code structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
