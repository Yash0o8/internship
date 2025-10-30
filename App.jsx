import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import 'animate.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Toaster } from 'react-hot-toast';

// Import all components
import UserTypeSelection from './components/auth/UserTypeSelection';
import UserRegistration from './components/auth/UserRegistration';
import ProfessionalRegistration from './components/auth/ProfessionalRegistration';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserDashboard from './components/user/UserDashboard';
import ProfessionalDashboard from './components/professional/ProfessionalDashboard';
// import UserProfilePage from './components/UserProfilePage'; // deleted
// import WorkingProf_Profile from './components/professional/profile/WorkingProf_Profile'; // deleted
import WFRegistration from './components/professional/WFRegistration';
import WorkingProfessional from './components/professional/WorkingProfessional';
// import UpUser from './components/user/UpUser'; // deleted
// import UpdatedUser from './components/user/UpdatedUser'; // deleted
// import NUpUserprof from './components/user/NUpUserprof'; // deleted
// import USer from './components/user/USer'; // deleted
import AboutPage from './components/AboutPage.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import Contact from './components/Contact.jsx';
import NotificationPage from './components/NotificationPage.jsx';
import PaymentSystem from './components/payment/PaymentSystem';
import AdminPanel from './components/admin/AdminPanel';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Move testimonials array before first useEffect
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      quote: "ProjectPilot connected me with an amazing marketing strategist who helped us revamp our entire campaign. The results were beyond expectations!",
      stars: 5
    },
    {
      name: "John Doe",
      role: "CEO",
      quote: "The platform made managing projects seamless. We saw a 30% increase in efficiency across our teams.",
      stars: 5
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      quote: "A game-changer in project management. I can't imagine working without it now!",
      stars: 4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const styles = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }

      @keyframes slide-in-left {
        0% { transform: translateX(-50%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }

      @keyframes slide-in-right {
        0% { transform: translateX(50%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }, []);

  // Landing page component
  const LandingPage = () => (
    <div className="bg-gray-50 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between h-16 md:h-20 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-green-600">ProjectPilot</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-green-600 text-sm font-medium">Home</Link>
                <Link to="/about" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">About</Link>
                <Link to="/services" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">Services</Link>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">Experts</a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">Contact</a>
                <Link to="/payment" className="text-green-600 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-300 text-sm font-medium">Pay Admin</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/auth" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/auth" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:scale-105">Sign Up</Link>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

     {/* Hero Section */}
     <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 px-2 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Text Section */}
                <div className="mb-8 lg:mb-0" style={{ animation: "slide-in-left 1s ease-out forwards" }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Accelerate Your Projects With <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Professional Guidance</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                        Connect with industry experts to guide your projects to success while allowing professionals to monetize their expertise.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-xs">
                        <Link to="/auth" className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 sm:px-8 py-3 rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 w-full">
                            Get Started
                        </Link>
                        <a href="#" className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 rounded-lg font-medium text-center hover:bg-green-600 hover:text-white transition duration-300 w-full">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center items-center" style={{ animation: "slide-in-right 1s ease-out forwards" }}>
                    <img 
                        src="https://placehold.co/600x500" 
                        alt="Hero illustration" 
                        className="rounded-xl shadow-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full w-full"
                        style={{ animation: "float 6s ease-in-out 1" }}
                    />
                    
                    {/* Fast Results */}
                    <div 
                        className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white p-2 sm:p-4 rounded-lg shadow-lg z-10"
                        style={{ animation: "float 4s ease-in-out 1" }}
                    >
                        <div className="flex items-center">
                            <div className="bg-green-600 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Fast Results</p>
                                <p className="text-xs text-gray-500">90% success rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Earn Money */}
                    <div 
                        className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 bg-white p-2 sm:p-4 rounded-lg shadow-lg z-10"
                        style={{ animation: "float 4s ease-in-out 1" }}
                    >
                        <div className="flex items-center">
                            <div className="bg-green-600 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Earn Money</p>
                                <p className="text-xs text-gray-500">Share your expertise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How ProjectPilot Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Simple steps to get professional guidance or share your expertise
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {[
                { number: '1', title: 'Create Your Profile', description: "Whether you're seeking guidance or offering expertise, start by creating your profile." },
                { number: '2', title: 'Connect with Experts', description: "Browse professionals or post your project needs and get matched with the right experts." },
                { number: '3', title: 'Start Collaborating', description: "Begin your project with secure communication and payment systems in place." }
              ].map((step, index) => (
                <div key={index} className="relative mb-10 lg:mb-0">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white left-0 top-0 transform -translate-y-1/2">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <div className="ml-16">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">{step.title}</h4>
                    <p className="mt-2 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose ProjectPilot
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'lightning', title: 'Fast Matching', description: 'Our AI-powered system quickly matches you with the most suitable professionals for your specific needs.' },
              { icon: 'lock', title: 'Secure Payments', description: 'Milestone-based payments ensure security for both clients and professionals throughout the project.' },
              { icon: 'shield-check', title: 'Quality Assurance', description: 'Rigorous vetting process ensures only qualified professionals with proven expertise join our platform.' },
              { icon: 'calendar', title: 'Flexible Scheduling', description: 'Book consultations and sessions at times that work for you, across different time zones.' },
              { icon: 'academic-cap', title: 'Diverse Expertise', description: 'Access professionals from various industries and specialties all in one place.' },
              { icon: 'check-circle', title: 'Satisfaction Guarantee', description: 'We stand behind every project with our satisfaction guarantee policy.' }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                <div className="rounded-md bg-green-600 p-3 inline-flex absolute -top-5 left-6 group-hover:bg-green-700 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon === 'lightning' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {feature.icon === 'lock' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    )}
                    {feature.icon === 'shield-check' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {feature.icon === 'calendar' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    )}
                    {feature.icon === 'academic-cap' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    )}
                    {feature.icon === 'check-circle' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your projects or share your expertise?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of professionals and businesses who are achieving more with ProjectPilot.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/auth" className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
                  Get Started as Client
                </Link>
                <Link to="/auth" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-center hover:bg-white hover:text-green-600 transition duration-300">
                  Join as Expert
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="https://placehold.co/500x350" alt="CTA illustration" className="rounded-xl shadow-2xl w-full animate-[float_6s_ease-in-out_1]" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Testimonials</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        What Our Clients Say
                    </p>
                </div>
                <div className="mt-16">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        autoPlay={true}
                        interval={4000}
                        transitionTime={700}
                        showStatus={false}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg transition duration-300">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="h-12 w-12 rounded-full" src="https://placehold.co/100" alt="Client" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                                        <div className="text-green-600">{testimonial.role}</div>
                                    </div>
                                </div>
                                <div className="mt-4 text-base text-gray-600">
                                    <p>"{testimonial.quote}"</p>
                                </div>
                                <div className="mt-4 flex">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ProjectPilot</h3>
              <p className="text-gray-400 text-sm">
                Connecting professionals with projects that need their expertise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 ProjectPilot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.75 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
      
      {/* Authentication Routes */}
      <Route path="/auth" element={<UserTypeSelection />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/user-registration" element={<UserRegistration />} />
      <Route path="/auth/professional-registration" element={<ProfessionalRegistration />} />
      
      {/* User Dashboard Routes */}
      <Route path="/user/dashboard" element={
        <ProtectedRoute requiredUserType="user">
          <UserDashboard />
        </ProtectedRoute>
      } />
      {/* <Route path="/user/profile" element={
        <ProtectedRoute requiredUserType="user">
          <UserProfilePage />
        </ProtectedRoute>
      } /> */}
      {/* Remove routes for deleted user dashboard/profile variants */}
      {/* <Route path="/user/up" ... /> */}
      {/* <Route path="/user/updated" ... /> */}
      {/* <Route path="/user/nup" ... /> */}
      {/* <Route path="/user/legacy" ... /> */}
      
      {/* Professional Dashboard Routes */}
      <Route path="/professional/dashboard" element={
        <ProtectedRoute requiredUserType="professional">
          <ProfessionalDashboard />
        </ProtectedRoute>
      } />
      {/* <Route path="/professional/profile" element={
        <ProtectedRoute requiredUserType="professional">
          <WorkingProf_Profile />
        </ProtectedRoute>
      } /> */}
      <Route path="/professional/registration" element={
        <ProtectedRoute requiredUserType="professional">
          <WFRegistration />
        </ProtectedRoute>
      } />
      <Route path="/professional/working" element={
        <ProtectedRoute requiredUserType="professional">
          <WorkingProfessional />
        </ProtectedRoute>
      } />

      {/* About Page Route */}
      <Route path="/about" element={<AboutPage />} />

      {/* Services Section Route */}
      <Route path="/services" element={<ServicesSection />} />

      {/* Contact Page Route */}
      <Route path="/contact" element={<Contact />} />

      {/* Notification Page Route */}
      <Route path="/notifications" element={<NotificationPage />} />

      {/* Payment System Routes */}
      <Route path="/payment" element={<PaymentSystem />} />
      <Route path="/user/payment" element={
        <ProtectedRoute requiredUserType="user">
          <PaymentSystem />
        </ProtectedRoute>
      } />
      <Route path="/professional/payment" element={
        <ProtectedRoute requiredUserType="professional">
          <PaymentSystem />
        </ProtectedRoute>
      } />

      {/* Admin Panel Route */}
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
    </>
  );
}

export default App;