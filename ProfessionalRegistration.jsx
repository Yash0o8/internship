import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Button from '../common/Button';
import Card from '../common/Card';

const API_URL = 'http://localhost:5000/api';

const ProfessionalRegistration = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    profession: '',
    experience: '',
    skills: '',
    portfolio: '',
    certifications: '',
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.profession) {
      newErrors.profession = 'Profession is required';
    }

    if (!formData.experience) {
      newErrors.experience = 'Experience is required';
    }

    if (!formData.skills) {
      newErrors.skills = 'Skills are required';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        location: formData.location,
        profession: formData.profession,
        experience: formData.experience,
        skills: formData.skills.split(',').map(skill => skill.trim()),
        portfolio: formData.portfolio,
        certifications: formData.certifications,
        userType: 'professional'
      });

      toast.success('Registration successful! Please log in.');
      navigate('/auth');
      
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error.response?.data?.error || 'Registration failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Professional Registration
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                id="profession"
                required
                placeholder="e.g., Software Developer, UI/UX Designer"
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.profession ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.profession}
                onChange={handleChange}
              />
              {errors.profession && (
                <p className="mt-1 text-sm text-red-600">{errors.profession}</p>
              )}
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Years of Experience
              </label>
              <select
                name="experience"
                id="experience"
                required
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.experience ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              {errors.experience && (
                <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
              )}
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Skills (comma separated)
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                required
                placeholder="e.g., React, Node.js, UI/UX Design"
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.skills ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.skills}
                onChange={handleChange}
              />
              {errors.skills && (
                <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
              )}
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
                Portfolio URL
              </label>
              <input
                type="url"
                name="portfolio"
                id="portfolio"
                placeholder="https://your-portfolio.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957]"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">
                Certifications (optional)
              </label>
              <textarea
                name="certifications"
                id="certifications"
                rows="3"
                placeholder="List your relevant certifications"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957]"
                value={formData.certifications}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.password ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957] ${
                  errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location (Country, City)
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#a7c957] focus:border-[#a7c957]"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  required
                  className="h-4 w-4 text-[#a7c957] focus:ring-[#a7c957] border-gray-300 rounded"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900">
                  I accept the Terms and Conditions
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
              )}
            </div>

            <div className="flex space-x-3">
              {onBack && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={onBack}
                  className="flex-1"
                  disabled={loading}
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                className="flex-1"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register as Professional'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalRegistration; 