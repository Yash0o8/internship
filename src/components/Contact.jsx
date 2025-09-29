import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Remove this line if Link is not used
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Header from './common/Header';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Toaster position="top-right" />
      <div className="pt-8 pb-16 px-2 sm:px-4 md:px-8 lg:px-32">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4 animate-slide-in-down">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6 animate-fade-in delay-100">
            We'd love to hear from you! Reach out for support, partnership, or just to say hello.
          </p>
        </section>

        {/* Contact Info & Form */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center animate-slide-in-left">
            <h2 className="text-2xl font-bold text-green-700 mb-6">Get in Touch</h2>
            <div className="flex items-center mb-4 text-gray-700">
              <FaEnvelope className="text-green-600 mr-3 text-xl animate-float-once" />
              <span>support@projectpilot.com</span>
            </div>
            <div className="flex items-center mb-4 text-gray-700">
              <FaPhone className="text-green-600 mr-3 text-xl animate-float-once delay-100" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center mb-8 text-gray-700">
              <FaMapMarkerAlt className="text-green-600 mr-3 text-xl animate-float-once delay-200" />
              <span>123 Greenway Ave, New York, NY</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-green-600 hover:text-green-800 transition animate-fade-in delay-200"><FaLinkedin size={24} /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-green-600 hover:text-green-800 transition animate-fade-in delay-300"><FaTwitter size={24} /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-green-600 hover:text-green-800 transition animate-fade-in delay-400"><FaFacebook size={24} /></a>
            </div>
          </div>
          {/* Contact Form */}
          <form className="bg-white rounded-2xl shadow-lg p-8 animate-slide-in-right" onSubmit={handleSubmit} noValidate>
            <h2 className="text-2xl font-bold text-green-700 mb-6">Send a Message</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600`}
                placeholder="Your Name"
                required
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600`}
                placeholder="you@email.com"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600`}
                rows={5}
                placeholder="How can we help you?"
                required
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-green-800 transition animate-fade-in delay-200">Send Message</button>
          </form>
        </section>

        {/* Map or Additional Info */}
        <section className="bg-green-50 rounded-2xl p-8 text-center mb-16 shadow-inner animate-fade-in delay-200">
          <h4 className="text-2xl font-bold text-green-700 mb-2">Our Office</h4>
          <p className="text-gray-700 max-w-2xl mx-auto mb-4">Visit us or send us a message anytime. We're here to help you succeed!</p>
          <div className="w-full h-64 rounded-lg overflow-hidden mt-4 shadow-lg">
            <iframe
              title="ProjectPilot Office Location"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>

        {/* Custom Animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.7s ease-out forwards;
          }
          .animate-fade-in.delay-100 { animation-delay: 0.1s; }
          .animate-fade-in.delay-200 { animation-delay: 0.2s; }
          .animate-fade-in.delay-300 { animation-delay: 0.3s; }
          .animate-fade-in.delay-400 { animation-delay: 0.4s; }
          @keyframes slideInLeft {
            from { transform: translateX(-40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          @keyframes slideInRight {
            from { transform: translateX(40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-right {
            animation: slideInRight 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          @keyframes slideInDown {
            from { transform: translateY(-40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-in-down {
            animation: slideInDown 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          @keyframes floatOnce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .animate-float-once {
            animation: floatOnce 1.2s cubic-bezier(0.4,0,0.2,1) 1;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Contact;