import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import { FaUsers, FaGlobe, FaHandshake, FaStar, FaShieldAlt, FaUserTie } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="pt-8 pb-16 px-2 sm:px-4 md:px-8 lg:px-32">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4 animate-slide-in-down">About ProjectPilot</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6 animate-fade-in delay-100">
            Empowering professionals and clients to connect, collaborate, and succeed—securely and globally.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm animate-float-once">
              <FaGlobe className="mr-2" /> 30+ Countries
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm animate-float-once delay-100">
              <FaUsers className="mr-2" /> 10,000+ Projects
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm animate-float-once delay-200">
              <FaStar className="mr-2" /> 4.9/5 User Rating
            </span>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600 animate-slide-in-left">
            <FaUserTie className="mx-auto text-3xl text-green-600 mb-3 animate-float-once" />
            <h3 className="font-bold text-xl mb-2 text-green-700">Our Mission</h3>
            <p className="text-gray-600">To create the most trusted platform for professionals to do their best work and for clients to find the right talent.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600 animate-fade-in delay-200">
            <FaGlobe className="mx-auto text-3xl text-green-600 mb-3 animate-float-once" />
            <h3 className="font-bold text-xl mb-2 text-green-700">Our Vision</h3>
            <p className="text-gray-600">A world where opportunity is borderless and every project is secure, fair, and successful.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600 animate-slide-in-right">
            <FaShieldAlt className="mx-auto text-3xl text-green-600 mb-3 animate-float-once" />
            <h3 className="font-bold text-xl mb-2 text-green-700">Our Values</h3>
            <p className="text-gray-600">Transparency, fairness, and security—empowering both professionals and clients to thrive.</p>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-8 animate-fade-in">Meet Our Leadership</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Sarah Ahmed", role: "Founder", initials: "SA" },
              { name: "Michael Johnson", role: "CTO", initials: "MJ" },
              { name: "Emma Patel", role: "Head of Community", initials: "EP" },
              { name: "David Rodriguez", role: "Head of Payments", initials: "DR" },
            ].map((person, i) => (
              <div key={person.name} className={`flex flex-col items-center bg-white rounded-xl shadow p-6 w-48 animate-fade-in delay-${i * 100}`}>
                <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold shadow-lg mb-3 animate-float-once">
                  {person.initials}
                </div>
                <div className="mt-1 text-lg font-semibold text-gray-800">{person.name}</div>
                <div className="text-sm text-gray-500">{person.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-8 animate-fade-in">Why Choose ProjectPilot?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaGlobe className="mx-auto text-2xl text-green-600 mb-2 animate-float-once" />, title: "Global Talent Pool", desc: "Access top professionals from around the world." },
              { icon: <FaHandshake className="mx-auto text-2xl text-green-600 mb-2 animate-float-once" />, title: "User-Friendly Platform", desc: "Designed for seamless collaboration and ease of use." },
              { icon: <FaShieldAlt className="mx-auto text-2xl text-green-600 mb-2 animate-float-once" />, title: "Reliable Support", desc: "Get help from our dedicated support team anytime." },
            ].map((box, i) => (
              <div key={box.title} className={`bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600 animate-fade-in delay-${i * 100}`}>
                {box.icon}
                <h4 className="font-bold text-green-700 text-lg mb-2">{box.title}</h4>
                <p className="text-gray-600 text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials & Numbers */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center animate-slide-in-left">
            <p className="text-gray-700 italic text-lg">"ProjectPilot helped me find long-term clients and manage payments seamlessly."</p>
            <div className="mt-6 font-semibold text-green-700">Ravi Kumar</div>
            <div className="text-sm text-gray-500">Freelance Developer</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col justify-center animate-slide-in-right">
            <h4 className="text-3xl font-extrabold text-green-700 mb-2">By the Numbers</h4>
            <ul className="mt-4 space-y-2 text-base text-gray-700">
              <li>✅ 10,000+ Projects Completed</li>
              <li>✅ $2M+ Paid Out via Secure Milestones</li>
              <li>✅ 30+ Countries</li>
              <li>✅ 4.9/5 Average User Rating</li>
            </ul>
          </div>
        </section>

        {/* Who We Are */}
        <section className="bg-green-50 rounded-2xl p-8 text-center mb-16 shadow-inner animate-fade-in delay-200">
          <h4 className="text-2xl font-bold text-green-700 mb-2">Who We Are</h4>
          <p className="text-gray-700 max-w-2xl mx-auto">
            ProjectPilot is a dedicated team building a reliable, secure platform for professionals and clients to grow together.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mt-10 animate-fade-in delay-300">
          <h2 className="text-green-700 font-extrabold text-2xl mb-4">Join Our Journey</h2>
          <Link
            to="/auth"
            className="mt-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition font-semibold text-lg shadow-lg inline-block"
          >
            Sign Up
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

export default AboutPage;
