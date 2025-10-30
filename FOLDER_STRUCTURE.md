# ProjectPilot - Folder Structure Documentation

## Overview
This document outlines the organized folder structure for the ProjectPilot application, which separates user and professional roles while maintaining clean, reusable components.

## Folder Structure

```
src/
├── components/
│   ├── common/                    # Shared components used across the app
│   │   ├── index.js              # Export file for easy imports
│   │   ├── Header.jsx            # Common header with search and navigation
│   │   ├── Sidebar.jsx           # Dynamic sidebar based on user type
│   │   ├── Button.jsx            # Reusable button component with variants
│   │   ├── Card.jsx              # Reusable card component
│   │   └── Modal.jsx             # Reusable modal component
│   │
│   ├── auth/                     # Authentication related components
│   │   ├── UserTypeSelection.jsx # Role selection screen
│   │   ├── UserRegistration.jsx  # User registration form
│   │   └── ProfessionalRegistration.jsx # Professional registration form
│   │
│   ├── user/                     # User-specific components
│   │   ├── UserDashboard.jsx     # Main user dashboard
│   │   ├── UserProfilePage.jsx   # User profile management
│   │   ├── USer.jsx              # Legacy user component
│   │   ├── UpdatedUser.jsx       # Legacy updated user component
│   │   ├── UpUser.jsx            # Legacy up user component
│   │   ├── NUpUserprof.jsx       # Legacy new user profile component
│   │   └── UserRegistration.jsx  # Legacy user registration (moved to auth)
│   │
│   ├── professional/             # Professional-specific components
│   │   ├── ProfessionalDashboard.jsx # Main professional dashboard
│   │   ├── WorkingProfessional.jsx   # Legacy working professional component
│   │   ├── WorkingProf_Profile.jsx   # Legacy professional profile component
│   │   ├── Regis.jsx             # Legacy registration component
│   │   └── WFRegistration.jsx    # Legacy working professional registration
│   │
│   └── [legacy files]            # Old components that need to be cleaned up
│
├── assets/                       # Static assets
├── App.jsx                       # Landing page component
├── main.jsx                      # Main entry point
└── index.css                     # Global styles
```

## Component Organization

### Common Components (`/components/common/`)
These components are designed to be reused across different user types:

- **Header.jsx**: Responsive header with search, notifications, and profile dropdown
- **Sidebar.jsx**: Dynamic sidebar that changes based on user type (user/professional)
- **Button.jsx**: Reusable button with multiple variants (primary, secondary, outline, etc.)
- **Card.jsx**: Reusable card component with different padding and shadow options
- **Modal.jsx**: Reusable modal component for dialogs and popups

### Authentication Components (`/components/auth/`)
Components related to user authentication and registration:

- **UserTypeSelection.jsx**: Landing page for choosing between user and professional roles
- **UserRegistration.jsx**: Registration form for regular users
- **ProfessionalRegistration.jsx**: Registration form for professionals with additional fields

### User Components (`/components/user/`)
Components specific to regular users:

- **UserDashboard.jsx**: Main dashboard for users to manage projects and find professionals
- **UserProfilePage.jsx**: Profile management for users
- Legacy components: Various old user components that need to be cleaned up

### Professional Components (`/components/professional/`)
Components specific to working professionals:

- **ProfessionalDashboard.jsx**: Main dashboard for professionals to manage projects and availability
- **WorkingProfessional.jsx**: Legacy professional component
- **WorkingProf_Profile.jsx**: Legacy professional profile component
- Legacy components: Various old professional components that need to be cleaned up

## Key Features

### Role-Based Navigation
- The Sidebar component automatically adapts based on the `userType` prop
- Different menu items for users vs professionals
- Consistent navigation patterns across the application

### Reusable Components
- All common components are designed to be flexible and reusable
- Consistent styling using the project's color scheme (`#a7c957`)
- Responsive design that works on mobile and desktop

### Clean Imports
- Use the index.js file in common components for easy imports:
  ```javascript
  import { Header, Sidebar, Button, Card, Modal } from '../common';
  ```

## Usage Examples

### Using Common Components
```javascript
import { Header, Sidebar, Button, Card } from '../common';

// In your component
<Header 
  onSearch={(value) => console.log('Search:', value)}
  onNotificationClick={() => setNotificationsOpen(true)}
  onProfileClick={(action) => console.log('Profile action:', action)}
/>

<Sidebar 
  userType="user"
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>

<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

<Card padding="large" shadow="xl">
  Your content here
</Card>
```

### Switching Between User Types
```javascript
// For user dashboard
<Sidebar userType="user" />

// For professional dashboard  
<Sidebar userType="professional" />
```

## Migration Notes

### Legacy Components
The following legacy components are still present but should be cleaned up:
- `components/Regis.jsx` → Moved to `auth/UserTypeSelection.jsx`
- `components/UserRegistration.jsx` → Moved to `auth/UserRegistration.jsx`
- Various user and professional components in their respective folders

### Next Steps
1. Clean up legacy components that are no longer needed
2. Update imports in existing components to use the new structure
3. Add proper TypeScript types for better development experience
4. Implement proper routing between different user types
5. Add proper state management (Redux/Context) for user authentication

## Color Scheme
The application uses a consistent green color scheme:
- Primary: `#a7c957`
- Hover: `#8fb84a`
- Light: `#e9f5db`
- Background: `#f8f9fa`

## Responsive Design
All components are built with mobile-first responsive design using Tailwind CSS classes.