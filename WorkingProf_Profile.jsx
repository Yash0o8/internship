  import { useState, useEffect } from 'react';

  const WorkingProfessional_Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [availability, setAvailability] = useState('Available');
    const [showInterestModal, setShowInterestModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [skillFilters, setSkillFilters] = useState([]);
    const [dateFilter, setDateFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);

    // Sample data
    const guideProfile = {
      name: "Alex Johnson",
      role: "Full Stack Developer Mentor",
      about: "I specialize in mentoring developers in full-stack JavaScript development, with over 5 years of experience building web applications. I've helped 50+ students successfully complete their projects and land jobs.",
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "API Development", "Project Management"],
      rating: 4.8,
      reviews: 42,
      completedProjects: 38,
      certifications: [
        "AWS Certified Developer",
        "MERN Stack Certification",
        "Scrum Master Certified"
      ],
      portfolioLinks: [
        { name: "GitHub", url: "github.com/alexjohnson" },
        { name: "LinkedIn", url: "linkedin.com/in/alexjohnson" },
        { name: "Personal Website", url: "alexjohnson.dev" }
      ]
    };

    const allAvailableProjects = [
      {
        id: 1,
        title: "E-commerce Website Development",
        description: "Need help building a React e-commerce site with Node.js backend",
        skills: ["React", "Node.js", "MongoDB", "Payment Integration"],
        postedBy: "Sarah Miller",
        postedDate: "2023-05-10",
        budget: "₹15,000 - ₹20,000"
      },
      {
        id: 2,
        title: "API Integration Project",
        description: "Looking for guidance on integrating third-party APIs into my application",
        skills: ["JavaScript", "API Development", "Authentication", "REST"],
        postedBy: "Michael Chen",
        postedDate: "2023-05-05",
        budget: "₹8,000 - ₹12,000"
      },
      {
        id: 3,
        title: "Task Management App",
        description: "Need mentorship in building a task management application with React and Firebase",
        skills: ["React", "Firebase", "State Management"],
        postedBy: "David Wilson",
        postedDate: "2023-05-15",
        budget: "₹10,000 - ₹15,000"
      },
      {
        id: 4,
        title: "Data Visualization Dashboard",
        description: "Seeking guidance on creating interactive charts and graphs with D3.js",
        skills: ["JavaScript", "D3.js", "Data Visualization"],
        postedBy: "Emma Thompson",
        postedDate: "2023-05-12",
        budget: "₹12,000 - ₹18,000"
      }
    ];

    const activeProjects = [
      {
        id: 1,
        title: "Task Management App",
        student: "David Wilson",
        progress: 65,
        milestones: [
          { name: "Database Design", status: "completed", feedback: "Schema looks solid" },
          { name: "Backend API", status: "in-progress", feedback: "Working on authentication" },
          { name: "Frontend UI", status: "pending", feedback: "" }
        ],
        nextMeeting: "May 15, 2023 - 3:00 PM"
      }
    ];

    const completedProjects = [
      {
        id: 1,
        title: "Weather Application",
        student: "Emma Thompson",
        completedDate: "April 10, 2023",
        rating: 5,
        feedback: "Alex was extremely helpful in guiding me through the API integration challenges. His explanations were clear and he was always available when I needed help."
      }
    ];

    // All unique skills from available projects
    const allSkills = [...new Set(allAvailableProjects.flatMap(project => project.skills))];

    useEffect(() => {
      filterProjects();
    }, [searchQuery, skillFilters, dateFilter]);

    const filterProjects = () => {
      let results = [...allAvailableProjects];

      // Apply search query filter
      if (searchQuery) {
        results = results.filter(project =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.postedBy.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Apply skill filters
      if (skillFilters.length > 0) {
        results = results.filter(project =>
          skillFilters.every(filter => project.skills.includes(filter))
        );
      }

      // Apply date filter
      if (dateFilter !== 'all') {
        const now = new Date();
        const cutoffDate = new Date();
        
        if (dateFilter === 'week') {
          cutoffDate.setDate(now.getDate() - 7);
        } else if (dateFilter === 'month') {
          cutoffDate.setMonth(now.getMonth() - 1);
        }
        
        results = results.filter(project => {
          const projectDate = new Date(project.postedDate);
          return projectDate >= cutoffDate;
        });
      }

      setFilteredProjects(results);
    };

    const toggleSkillFilter = (skill) => {
      if (skillFilters.includes(skill)) {
        setSkillFilters(skillFilters.filter(s => s !== skill));
      } else {
        setSkillFilters([...skillFilters, skill]);
      }
    };

    const handleShowInterest = (project) => {
      setSelectedProject(project);
      setShowInterestModal(true);
    };

    const submitInterest = () => {
      // API call would go here
      setShowInterestModal(false);
      alert(`Interest shown for project: ${selectedProject.title}`);
    };

    return (
      <div className="min-h-screen bg-gray-50" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#a7c957' }}>Project Pilot</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700">Dashboard</button>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="px-6 py-4 flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-gray-500">
                  AJ
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{guideProfile.name}</h2>
                    <p className="text-lg" style={{ color: '#a7c957' }}>{guideProfile.role}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: availability === 'Available' ? '#a7c957' : '#f59e0b',
                        color: 'white'
                      }}>
                      {availability}
                    </div>
                    <button 
                      onClick={() => setAvailability(availability === 'Available' ? 'Busy' : 'Available')}
                      className="ml-2 px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                      {availability === 'Available' ? 'Set to Busy' : 'Set to Available'}
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">{guideProfile.about}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('profile')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'profile' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                style={activeTab === 'profile' ? { borderColor: '#a7c957', color: '#a7c957' } : {}}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('available')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'available' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                style={activeTab === 'available' ? { borderColor: '#a7c957', color: '#a7c957' } : {}}
              >
                Available Projects ({allAvailableProjects.length})
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'active' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                style={activeTab === 'active' ? { borderColor: '#a7c957', color: '#a7c957' } : {}}
              >
                Active Projects ({activeProjects.length})
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'completed' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                style={activeTab === 'completed' ? { borderColor: '#a7c957', color: '#a7c957' } : {}}
              >
                Completed Projects ({completedProjects.length})
              </button>
            </nav>
          </div>

          {/* Profile Tab Content */}
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="md:col-span-2 space-y-6">
                {/* Skills Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {guideProfile.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                        style={{ backgroundColor: '#e9f5db' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ratings & Reviews */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Ratings & Reviews</h3>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl font-bold mr-2">{guideProfile.rating}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(guideProfile.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="ml-2 text-gray-600">({guideProfile.reviews} reviews)</div>
                  </div>
                  <div className="space-y-4">
                    {completedProjects.map((project) => (
                      <div key={project.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{project.title}</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < project.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mt-1">{project.feedback}</p>
                        <p className="text-sm text-gray-500 mt-2">Completed on {project.completedDate}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Stats */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Mentorship Stats</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Completed Projects</p>
                      <p className="text-2xl font-bold">{guideProfile.completedProjects}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Average Rating</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold mr-2">{guideProfile.rating}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(guideProfile.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {guideProfile.certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 mr-2" style={{ color: '#a7c957' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio Links */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio Links</h3>
                  <ul className="space-y-2">
                    {guideProfile.portfolioLinks.map((link, index) => (
                      <li key={index}>
                        <a href={`https://${link.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Available Projects Tab Content */}
          {activeTab === 'available' && (
            <div className="space-y-6">
              {/* Search and Filter Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search Bar */}
                  <div className="md:col-span-2">
                    <label htmlFor="search" className="sr-only">Search projects</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="search"
                        className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Search projects by title, description or user..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Date Filter */}
                  <div>
                    <label htmlFor="date-filter" className="block text-sm font-medium text-gray-700 mb-1">Posted Date</label>
                    <select
                      id="date-filter"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                    >
                      <option value="all">All Time</option>
                      <option value="week">Last Week</option>
                      <option value="month">Last Month</option>
                    </select>
                  </div>
                </div>

                {/* Skills Filter */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {allSkills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => toggleSkillFilter(skill)}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${skillFilters.includes(skill) ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {skill}
                        {skillFilters.includes(skill) && (
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects List */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Available Projects</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Showing {filteredProjects.length} of {allAvailableProjects.length} projects
                    </p>
                  </div>
                  {skillFilters.length > 0 && (
                    <button 
                      onClick={() => setSkillFilters([])}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                
                {filteredProjects.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {filteredProjects.map((project) => (
                      <li key={project.id} className="px-6 py-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                            <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {project.skills.map((skill, index) => (
                                <span 
                                  key={index} 
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    skillFilters.includes(skill) ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="flex items-center text-sm text-gray-500">
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {project.postedBy}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(project.postedDate).toLocaleDateString()}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {project.budget}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-4">
                            <button
                              onClick={() => handleShowInterest(project)}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white"
                              style={{ backgroundColor: '#a7c957' }}
                            >
                              Show Interest
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-12 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {searchQuery || skillFilters.length > 0 || dateFilter !== 'all'
                        ? "Try adjusting your search or filter criteria"
                        : "There are currently no available projects matching your skills"}
                    </p>
                    {(searchQuery || skillFilters.length > 0 || dateFilter !== 'all') && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery('');
                          setSkillFilters([]);
                          setDateFilter('all');
                        }}
                        className="mt-4 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white"
                        style={{ backgroundColor: '#a7c957' }}
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Active Projects Tab Content */}
          {activeTab === 'active' && (
            <div className="space-y-6">
              {activeProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-500 mr-3">Progress: {project.progress}%</span>
                        <div className="w-32 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="h-2.5 rounded-full" 
                            style={{ 
                              width: `${project.progress}%`,
                              backgroundColor: '#a7c957'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Mentoring: {project.student}</p>
                  </div>
                  <div className="px-6 py-4">
                    <h4 className="text-md font-medium text-gray-900 mb-3">Milestones</h4>
                    <div className="space-y-4">
                      {project.milestones.map((milestone, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${
                            milestone.status === 'completed' ? 'bg-green-100' : 
                            milestone.status === 'in-progress' ? 'bg-yellow-100' : 'bg-gray-100'
                          }`}>
                            {milestone.status === 'completed' ? (
                              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : milestone.status === 'in-progress' ? (
                              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <h5 className="text-sm font-medium text-gray-900">{milestone.name}</h5>
                            <p className={`text-sm ${
                              milestone.status === 'completed' ? 'text-green-600' : 
                              milestone.status === 'in-progress' ? 'text-yellow-600' : 'text-gray-500'
                            }`}>
                              {milestone.status === 'completed' ? 'Completed' : 
                              milestone.status === 'in-progress' ? 'In Progress' : 'Pending'}
                            </p>
                            {milestone.feedback && (
                              <div className="mt-1 p-2 bg-gray-50 rounded">
                                <p className="text-sm text-gray-600">Your feedback: {milestone.feedback}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Next meeting scheduled:</p>
                        <p className="text-sm font-medium text-gray-900">{project.nextMeeting}</p>
                      </div>
                      <div className="flex space-x-3">
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <svg className="-ml-0.5 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Chat
                        </button>
                        <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white"
                          style={{ backgroundColor: '#a7c957' }}
                        >
                          <svg className="-ml-0.5 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Video Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Completed Projects Tab Content */}
          {activeTab === 'completed' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Completed Projects</h3>
                <p className="mt-1 text-sm text-gray-500">Projects you've successfully mentored</p>
              </div>
              <ul className="divide-y divide-gray-200">
                {completedProjects.map((project) => (
                  <li key={project.id} className="px-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                          <div className="flex ml-2">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < project.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Completed on {project.completedDate}</p>
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{project.feedback}</p>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4 flex space-x-3">
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <svg className="-ml-0.5 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Details
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>

        {/* Show Interest Modal */}
        {showInterestModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Show Interest in Project</h3>
                  <p className="text-sm text-gray-500 mb-2">You're about to show interest in:</p>
                  <h4 className="text-md font-medium text-gray-900 mb-4">{selectedProject?.title}</h4>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Initial Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Briefly explain why you're a good fit for this project..."
                    ></textarea>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={submitInterest}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
                    style={{ backgroundColor: '#a7c957' }}
                  >
                    Submit Interest
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowInterestModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default WorkingProfessional_Profile;