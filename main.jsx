import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Toaster } from 'react-hot-toast';
import 'animate.css';

// Landing page
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { PaymentProvider } from './context/PaymentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PaymentProvider>
          <App />
        </PaymentProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
