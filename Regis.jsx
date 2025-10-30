// import { useState } from 'react';

// const UserTypeSelection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const userTypes = [
//     {
//       id: 'user',
//       title: 'Sign Up as User',
//       description: 'Personal account for individuals looking to explore our platform',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       ),
//       color: 'from-[#009f3d] to-[#00c04d]',
//       buttonColor: 'bg-[#009f3d] hover:bg-[#007a30]'
//     },
//     {
//       id: 'professional',
//       title: 'Sign Up as Working Professional',
//       description: 'Professional account with additional tools and features for career growth',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       color: 'from-[#007a30] to-[#009f3d]',
//       buttonColor: 'bg-[#007a30] hover:bg-[#006127]'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#009f3d] blur-3xl mix-blend-multiply opacity-30 animate-pulse" />
//       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00c04d] blur-3xl mix-blend-multiply opacity-30 animate-pulse delay-1000" />

//       {/* Header */}
//       <div className="text-center mb-12 z-10 animate-fade-in">
//         <div className="flex justify-center mb-6">
//           <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#009f3d] to-[#00c04d] flex items-center justify-center shadow-lg animate-zoom-in">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//         </div>
//         <h1 className="text-4xl font-bold text-white mb-2 animate-slide-down">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c04d] to-[#009f3d]">Elevate</span></h1>
//         <p className="text-xl text-gray-300 animate-slide-down delay-100">Choose Your Role to Get Started</p>
//       </div>

//       {/* User Type Cards */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full z-10">
//         {userTypes.map((type, index) => (
//           <div
//             key={type.id}
//             onMouseEnter={() => setHoveredCard(type.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//             className={`w-full md:w-1/2 max-w-md relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ease-in-out 
//               ${hoveredCard && hoveredCard !== type.id ? 'opacity-80' : 'opacity-100'}
//               ${index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
//               ${hoveredCard === type.id ? 'transform -translate-y-2' : ''}`}
//           >
//             {/* Card background */}
//             <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-80`} />
            
//             {/* Animated overlay */}
//             <div className={`absolute inset-0 bg-white/5 backdrop-blur-sm transition-all duration-500 
//               ${hoveredCard === type.id ? 'scale-105' : 'scale-100'}`} />
            
//             {/* Card content */}
//             <div className="relative z-10 p-8 h-full flex flex-col">
//               {/* Icon with animation */}
//               <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${type.color} shadow-lg 
//                 transition-all duration-300 ${hoveredCard === type.id ? 'rotate-6 scale-110' : 'rotate-0 scale-100'}`}>
//                 {type.icon}
//               </div>
              
//               <h2 className="text-2xl font-bold text-white mb-3">{type.title}</h2>
//               <p className="text-gray-200 mb-8">{type.description}</p>
              
//               {/* Button with shine effect */}
//               <div className="mt-auto relative overflow-hidden rounded-lg group">
//                 <div className={`absolute inset-0 ${type.buttonColor} transition-all duration-300 group-hover:opacity-90`} />
//                 <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
//                   <div className={`absolute -inset-y-1/2 w-8 h-[200%] bg-white/30 rotate-12 transition-all duration-1000 
//                     ${hoveredCard === type.id ? 'translate-x-[150%]' : '-translate-x-[150%]'}`} />
//                 </div>
//                 <button
//                   className={`relative w-full py-4 px-6 text-white font-semibold rounded-lg transition-all duration-300 
//                     ${hoveredCard === type.id ? 'scale-[1.02]' : 'scale-100'}`}
//                 >
//                   Continue as {type.id === 'user' ? 'User' : 'Professional'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="mt-16 text-center text-gray-400 text-sm z-10 animate-fade-in delay-300">
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//           <a href="#" className="hover:text-white transition-colors">Contact Us</a>
//         </div>
//         <p>© {new Date().getFullYear()} Elevate. All rights reserved.</p>
//       </div>

//       {/* Custom animations in Tailwind config */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes zoomIn {
//           from { transform: scale(0); }
//           to { transform: scale(1); }
//         }
//         @keyframes slideDown {
//           from { transform: translateY(-20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes slideInLeft {
//           from { transform: translateX(-50px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes slideInRight {
//           from { transform: translateX(50px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.5s ease-out forwards;
//         }
//         .animate-zoom-in {
//           animation: zoomIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
//         }
//         .animate-slide-down {
//           animation: slideDown 0.5s ease-out forwards;
//         }
//         .animate-slide-down.delay-100 {
//           animation-delay: 0.1s;
//         }
//         .animate-slide-in-left {
//           animation: slideInLeft 0.6s ease-out forwards;
//         }
//         .animate-slide-in-right {
//           animation: slideInRight 0.6s ease-out forwards;
//         }
//         .animate-pulse {
//           animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UserTypeSelection;













// import { useState } from 'react';

// const UserTypeSelection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const userTypes = [
//     {
//       id: 'user',
//       title: 'Sign Up as User',
//       description: 'Personal account for individuals looking to explore our platform',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       ),
//       color: 'from-white to-[#00c04d]',
//       buttonColor: 'bg-[#00c04d] hover:bg-[#009f3d]'
//     },
//     {
//       id: 'professional',
//       title: 'Sign Up as Working Professional',
//       description: 'Professional account with additional tools and features for career growth',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       color: 'from-white to-[#00c04d]',
//       buttonColor: 'bg-[#00c04d] hover:bg-[#009f3d]'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-white flex flex-col items-center justify-center p-4 overflow-hidden">
//       <div className="text-center mb-12 z-10 animate-fade-in">
//         <h1 className="text-4xl font-bold text-black mb-2">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c04d] to-[#009f3d]">Elevate</span></h1>
//         <p className="text-xl text-gray-700">Choose Your Role to Get Started</p>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full z-10">
//         {userTypes.map((type) => (
//           <div
//             key={type.id}
//             onMouseEnter={() => setHoveredCard(type.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//             className={`w-full md:w-1/2 max-w-md relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-in-out 
//               ${hoveredCard && hoveredCard !== type.id ? 'opacity-80' : 'opacity-100'}
//               ${hoveredCard === type.id ? 'transform -translate-y-2' : ''}`}
//           >
//             <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-90 rounded-2xl`} />
//             <div className="relative z-10 p-8 h-full flex flex-col">
//               <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${type.color} shadow-lg 
//                 transition-all duration-300 ${hoveredCard === type.id ? 'rotate-6 scale-110' : 'rotate-0 scale-100'}`}>{type.icon}</div>
//               <h2 className="text-2xl font-bold text-black mb-3">{type.title}</h2>
//               <p className="text-gray-700 mb-8">{type.description}</p>
//               <button className={`relative w-full py-4 px-6 text-white font-semibold rounded-lg ${type.buttonColor} transition-all duration-300`}>Continue as {type.id === 'user' ? 'User' : 'Professional'}</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-16 text-center text-gray-500 text-sm z-10">
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
//           <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
//           <a href="#" className="hover:text-black transition-colors">Contact Us</a>
//         </div>
//         <p>© {new Date().getFullYear()} Elevate. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default UserTypeSelection;






















// import { useState } from 'react';

// const UserTypeSelection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const userTypes = [
//     {
//       id: 'user',
//       title: 'Sign Up as User',
//       description: 'Personal account for individuals looking to explore our platform',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       ),
//       color: 'bg-white',
//       buttonColor: 'bg-[#009f3d] hover:bg-[#008534] text-white'
//     },
//     {
//       id: 'professional',
//       title: 'Sign Up as Working Professional',
//       description: 'Professional account with additional tools and features for career growth',
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       color: 'bg-[#009f3d]',
//       buttonColor: 'bg-black hover:bg-gray-900 text-white'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 overflow-hidden">
//       {/* Header */}
//       <div className="text-center mb-12 z-10 animate-fade-in">
//         <div className="flex justify-center mb-6">
//           <div className="w-16 h-16 rounded-xl bg-[#009f3d] flex items-center justify-center shadow-lg animate-zoom-in">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//         </div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-slide-down">
//           Welcome to <span className="text-[#009f3d]">Elevate</span>
//         </h1>
//         <p className="text-xl text-gray-600 animate-slide-down delay-100">
//           Choose Your Role to Get Started
//         </p>
//       </div>

//       {/* User Type Cards */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full z-10">
//         {userTypes.map((type, index) => (
//           <div
//             key={type.id}
//             onMouseEnter={() => setHoveredCard(type.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//             className={`w-full md:w-1/2 max-w-md relative overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 ease-in-out 
//               ${hoveredCard === type.id ? 'shadow-lg transform -translate-y-1' : 'shadow-md'}`}
//           >
//             {/* Card container */}
//             <div className={`${type.color} h-full p-8 flex flex-col`}>
//               {/* Icon */}
//               <div className={`w-20 h-20 rounded-xl mb-6 flex items-center justify-center 
//                 ${type.id === 'user' ? 'bg-[#009f3d] text-white' : 'bg-black text-white'}
//                 transition-all duration-300 ${hoveredCard === type.id ? 'rotate-6 scale-110' : ''}`}>
//                 {type.icon}
//               </div>
              
//               <h2 className={`text-2xl font-bold mb-3 ${type.id === 'professional' ? 'text-white' : 'text-gray-900'}`}>
//                 {type.title}
//               </h2>
//               <p className={`mb-8 ${type.id === 'professional' ? 'text-gray-200' : 'text-gray-600'}`}>
//                 {type.description}
//               </p>
              
//               {/* Button */}
//               <div className="mt-auto">
//                 <button
//                   className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 
//                     ${type.buttonColor} ${hoveredCard === type.id ? 'scale-[1.02]' : ''}`}
//                 >
//                   Continue as {type.id === 'user' ? 'User' : 'Professional'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="mt-16 text-center text-gray-500 text-sm z-10 animate-fade-in delay-300">
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           <a href="#" className="hover:text-[#009f3d] transition-colors">Privacy Policy</a>
//           <a href="#" className="hover:text-[#009f3d] transition-colors">Terms of Service</a>
//           <a href="#" className="hover:text-[#009f3d] transition-colors">Contact Us</a>
//         </div>
//         <p>© {new Date().getFullYear()} Elevate. All rights reserved.</p>
//       </div>

//       {/* Custom animations */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes zoomIn {
//           from { transform: scale(0); }
//           to { transform: scale(1); }
//         }
//         @keyframes slideDown {
//           from { transform: translateY(-20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.5s ease-out forwards;
//         }
//         .animate-zoom-in {
//           animation: zoomIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
//         }
//         .animate-slide-down {
//           animation: slideDown 0.5s ease-out forwards;
//         }
//         .animate-slide-down.delay-100 {
//           animation-delay: 0.1s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UserTypeSelection;
























import { useState } from 'react';

// User Registration Form Component
const UserRegistrationForm = ({ onBack }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">User Registration</h2>
      
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="John Doe"
            required
          />
        </div>
        
        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="john@example.com"
            required
          />
        </div>
        
        {/* Phone */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="+1 (123) 456-7890"
            required
          />
        </div>
        
        {/* Password */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="••••••••"
            required
          />
        </div>
        
        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="••••••••"
            required
          />
        </div>
        
        {/* Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
              placeholder="New York"
              required
            />
          </div>
        </div>
        
        {/* Terms Checkbox */}
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-[#009f3d] focus:ring-[#009f3d] border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I accept the <a href="#" className="text-[#009f3d] hover:underline">Terms and Conditions</a>
          </label>
        </div>
        
        {/* Form Actions */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#009f3d] text-white rounded-lg hover:bg-[#008534] transition-colors"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

// Professional Registration Form Component
const ProfessionalRegistrationForm = ({ onBack }) => {
  const [skills, setSkills] = useState('');
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Working Professional Registration</h2>
      
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="John Doe"
            required
          />
        </div>
        
        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="john@example.com"
            required
          />
        </div>
        
        {/* Phone */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="+1 (123) 456-7890"
            required
          />
        </div>
        
        {/* Password */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="••••••••"
            required
          />
        </div>
        
        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            placeholder="••••••••"
            required
          />
        </div>
        
        {/* Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
              placeholder="New York"
              required
            />
          </div>
        </div>
        
        {/* Professional Category */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="profession">
            Select Profession
          </label>
          <select
            id="profession"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009f3d]"
            required
          >
            <option value="">Select your profession</option>
            <option value="developer">Software Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Project Manager</option>
            <option value="analyst">Data Analyst</option>
            {/* Add more professions as needed */}
          </select>
        </div>
        
        {/* Terms Checkbox */}
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-[#009f3d] focus:ring-[#009f3d] border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I accept the <a href="#" className="text-[#009f3d] hover:underline">Terms and Conditions</a>
          </label>
        </div>
        
        {/* Form Actions */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Register as Professional
          </button>
        </div>
      </form>
    </div>
  );
};

// Main Component
const UserTypeSelection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState(null); // 'user' or 'professional'

  const userTypes = [
    {
      id: 'user',
      title: 'Sign Up as User',
      description: 'Personal account for individuals looking to explore our platform',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'bg-white',
      buttonColor: 'bg-[#009f3d] hover:bg-[#008534] text-white'
    },
    {
      id: 'professional',
      title: 'Sign Up as Working Professional',
      description: 'Professional account with additional tools and features for career growth',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-[#009f3d]',
      buttonColor: 'bg-black hover:bg-gray-900 text-white'
    }
  ];

  // Handle back button click
  const handleBackClick = () => {
    setSelectedUserType(null);
  };

  // If a user type is selected, show the appropriate registration form
  if (selectedUserType === 'user') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <UserRegistrationForm onBack={handleBackClick} />
      </div>
    );
  }

  if (selectedUserType === 'professional') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <ProfessionalRegistrationForm onBack={handleBackClick} />
      </div>
    );
  }

  // Show the user type selection screen if no type is selected
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 z-10 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-xl bg-[#009f3d] flex items-center justify-center shadow-lg animate-zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-slide-down">
          Welcome to <span className="text-[#009f3d]">Elevate</span>
        </h1>
        <p className="text-xl text-gray-600 animate-slide-down delay-100">
          Choose Your Role to Get Started
        </p>
      </div>

      {/* User Type Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full z-10">
        {userTypes.map((type) => (
          <div
            key={type.id}
            onMouseEnter={() => setHoveredCard(type.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`w-full md:w-1/2 max-w-md relative overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 ease-in-out 
              ${hoveredCard === type.id ? 'shadow-lg transform -translate-y-1' : 'shadow-md'}`}
          >
            {/* Card container */}
            <div className={`${type.color} h-full p-8 flex flex-col`}>
              {/* Icon */}
              <div className={`w-20 h-20 rounded-xl mb-6 flex items-center justify-center 
                ${type.id === 'user' ? 'bg-[#009f3d] text-white' : 'bg-black text-white'}
                transition-all duration-300 ${hoveredCard === type.id ? 'rotate-6 scale-110' : ''}`}>
                {type.icon}
              </div>
              
              <h2 className={`text-2xl font-bold mb-3 ${type.id === 'professional' ? 'text-white' : 'text-gray-900'}`}>
                {type.title}
              </h2>
              <p className={`mb-8 ${type.id === 'professional' ? 'text-gray-200' : 'text-gray-600'}`}>
                {type.description}
              </p>
              
              {/* Button */}
              <div className="mt-auto">
                <button
                  onClick={() => setSelectedUserType(type.id)}
                  className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 
                    ${type.buttonColor} ${hoveredCard === type.id ? 'scale-[1.02]' : ''}`}
                >
                  Continue as {type.id === 'user' ? 'User' : 'Professional'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-500 text-sm z-10 animate-fade-in delay-300">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#" className="hover:text-[#009f3d] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#009f3d] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#009f3d] transition-colors">Contact Us</a>
        </div>
        <p>© {new Date().getFullYear()} Elevate. All rights reserved.</p>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-slide-down.delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
};

export default UserTypeSelection;

