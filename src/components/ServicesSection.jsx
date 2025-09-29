import React from "react";
import { FaShieldAlt, FaBriefcase, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="pt-8 pb-16 px-2 sm:px-4 md:px-8 lg:px-32">
        <section className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4 animate-fade-in">Our Comprehensive Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 animate-fade-in delay-100">
            We provide everything you need to successfully complete projects with trusted professionals, with secure payments at every milestone.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center border-t-4 border-green-600 animate-slide-in-left">
            <FaShieldAlt className="mx-auto text-4xl text-green-600 mb-4 animate-float-once" />
            <h3 className="text-xl font-bold mb-2 text-green-700">Secure Payment Escrow</h3>
            <p className="text-gray-600 mb-3">Funds are held securely until project milestones are completed.</p>
            <ul className="list-disc list-inside text-green-700 text-left inline-block mx-auto text-sm">
              <li>Milestone-based payments</li>
              <li>Dispute resolution</li>
              <li>Automatic release upon approval</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center border-t-4 border-green-600 animate-fade-in delay-200">
            <FaBriefcase className="mx-auto text-4xl text-green-600 mb-4 animate-float-once" />
            <h3 className="text-xl font-bold mb-2 text-green-700">Talent Matching</h3>
            <p className="text-gray-600 mb-3">AI-based match system to find the perfect freelancer.</p>
            <ul className="list-disc list-inside text-green-700 text-left inline-block mx-auto text-sm">
              <li>Skills-based matching</li>
              <li>Portfolio review</li>
              <li>Client rating system</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center border-t-4 border-green-600 animate-slide-in-right">
            <FaClipboardList className="mx-auto text-4xl text-green-600 mb-4 animate-float-once" />
            <h3 className="text-xl font-bold mb-2 text-green-700">Project Management</h3>
            <p className="text-gray-600 mb-3">Manage projects easily with built-in tools.</p>
            <ul className="list-disc list-inside text-green-700 text-left inline-block mx-auto text-sm">
              <li>Milestone tracking</li>
              <li>File sharing</li>
              <li>Real-time messaging</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 bg-green-50 p-10 rounded-2xl text-center shadow-inner animate-fade-in delay-300">
          <h3 className="text-2xl font-bold text-green-700 mb-2">Ready to Start Your Project?</h3>
          <p className="text-gray-700 mb-6">Join thousands of clients and freelancers who trust our platform.</p>
          <Link
            to="/auth"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition font-semibold text-lg shadow-lg inline-block"
          >
            Get Started Now
          </Link>
        </section>

        {/* Custom Animations */}
        <style jsx="true">{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.7s ease-out forwards;
            animation-fill-mode: both;
          }
          .animate-fade-in.delay-100 { animation-delay: 0.1s; }
          .animate-fade-in.delay-200 { animation-delay: 0.2s; }
          .animate-fade-in.delay-300 { animation-delay: 0.3s; }
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

export default ServicesSection;
