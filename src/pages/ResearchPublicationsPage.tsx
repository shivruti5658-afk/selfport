import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const ResearchPublicationsPage: React.FC = () => {
  const researchProjects = [
    {
      title: "High-Altitude Wind Gust Characterization for Launch Vehicles",
      category: "Launch Vehicle Analysis",
      institution: "Vikram Sarabhai Space Centre (ISRO - VSSC)",
      duration: "July 2025 - August 2025",
      status: "Published",
      description: "Comprehensive research on atmospheric wind profile analysis and its impact on launch vehicle trajectory stability under real atmospheric uncertainties.",
      technicalDetails: [
        "Wind profile measurement and analysis",
        "Trajectory stability assessment",
        "Atmospheric uncertainty modeling",
        "CGS/STS Division collaboration"
      ],
      outcomes: "Supported trajectory stability assessment under real atmospheric uncertainties for enhanced launch vehicle reliability."
    },
    {
      title: "Hybrid Rocket Engine Numerical Analysis Using Paraffin-Based Fuels",
      category: "Propulsion Research",
      institution: "Propulsion Research Laboratory",
      duration: "2023 - 2024",
      status: "Published",
      description: "Advanced computational study of hybrid rocket engines using paraffin-based fuels with liquid oxygen and nitrous oxide oxidizers for performance optimization.",
      technicalDetails: [
        "Hybrid rocket propulsion modeling",
        "Combustion chamber analysis",
        "Fuel regression rate study",
        "Performance optimization"
      ],
      outcomes: "Developed optimized fuel formulations and combustion chamber designs for enhanced hybrid rocket performance."
    },
    {
      title: "Aircraft Structural Health Monitoring Using IoT Sensors",
      category: "Aerospace Structures",
      institution: "Aerospace Structures Lab",
      duration: "2022 - 2023",
      status: "Published",
      description: "Innovative IoT-based structural health monitoring system for aircraft components using wireless sensor networks and machine learning algorithms.",
      technicalDetails: [
        "IoT sensor integration",
        "Structural health monitoring",
        "Machine learning algorithms",
        "Wireless sensor networks"
      ],
      outcomes: "Created real-time monitoring system capable of detecting structural anomalies with 95% accuracy."
    }
  ];

  const patents = [
    {
      title: "Aerospace Vehicle Trajectory Optimization System",
      patentNumber: "IN202311089123",
      filingDate: "November 2023",
      status: "Published",
      description: "Novel system for optimizing launch vehicle trajectories using advanced atmospheric modeling and machine learning techniques.",
      application: "Launch vehicle trajectory planning and optimization",
      innovators: ["Shivam Kumar", "Dr. A. Sharma", "Prof. B. Patel"]
    },
    {
      title: "Hybrid Rocket Fuel Management System",
      patentNumber: "IN202311089124",
      filingDate: "December 2023",
      status: "Pending",
      description: "Advanced fuel management system for hybrid rocket engines with real-time fuel flow control and performance monitoring.",
      application: "Hybrid rocket propulsion systems",
      innovators: ["Shivam Kumar", "Prof. C. Kumar"]
    }
  ];

  const articlePublications = [
    {
      title: "Computational Analysis of Hybrid Rocket Propulsion Systems",
      type: "Journal Article",
      year: "2024",
      authors: "Shivam Kumar, et al.",
      description: "Comprehensive computational study of hybrid rocket propulsion systems focusing on fuel regression rates and combustion efficiency.",
      conference: "Journal of Propulsion and Power",
      publisher: "AIAA"
    },
    {
      title: "IoT-Based Structural Health Monitoring in Aerospace Applications",
      type: "Conference Paper",
      year: "2023",
      authors: "Shivam Kumar, et al.",
      description: "Innovative approach to structural health monitoring using IoT sensors and machine learning for aerospace applications.",
      conference: "International Conference on Aerospace Structures",
      location: "Bangalore, India"
    }
  ];

  const methodologies = [
    {
      name: "Computational Fluid Dynamics (CFD)",
      description: "Advanced numerical simulation techniques for fluid flow analysis, turbulence modeling, and heat transfer studies in aerospace applications.",
      applications: ["Aerodynamic Analysis", "Propulsion Systems", "Heat Transfer Analysis"]
    },
    {
      name: "Finite Element Analysis (FEA)",
      description: "Structural analysis techniques for stress analysis, vibration studies, and optimization of aerospace structures under various loading conditions.",
      applications: ["Structural Analysis", "Vibration Analysis", "Material Optimization"]
    },
    {
      name: "Experimental Methods",
      description: "Wind tunnel testing, propulsion testing, and material characterization techniques for validating computational models and experimental research.",
      applications: ["Wind Tunnel Testing", "Material Testing", "Propulsion Testing"]
    },
    {
      name: "Data Analysis & Optimization",
      description: "Statistical analysis, machine learning applications, and multi-objective optimization for aerospace design problems.",
      applications: ["Performance Optimization", "Data-Driven Design", "Machine Learning Integration"]
    }
  ];

  return (
    <AerospaceBackground>
      {/* Header Section */}
      <AnimatedSection 
        direction="center" 
        className="min-h-screen text-white px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedText 
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            delay={100}
            splitWords
          >
            Research & Publications
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={200}
          >
            Comprehensive overview of published research projects, patents, and innovative contributions to aerospace engineering
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Published Research Projects */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-blue-400 text-center"
            delay={300}
          >
            Research Projects
          </AnimatedText>
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                        project.status === 'Published' 
                          ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                          : 'bg-orange-900/50 text-orange-400 border border-orange-400/30'
                      }`}>
                        {project.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs border border-blue-400/30 mr-3">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-400">{project.duration}</span>
                    </div>
                    <AnimatedText 
                      className="text-2xl font-bold text-white mb-3"
                      delay={400 + index * 100}
                    >
                      {project.title}
                    </AnimatedText>
                    <div className="flex items-center mb-4 text-gray-300">
                      <span className="mr-2">📍</span>
                      <span className="mr-4">{project.institution}</span>
                    </div>
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed mb-6"
                      delay={500 + index * 100}
                    >
                      {project.description}
                    </AnimatedText>
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-3"
                    delay={600 + index * 100}
                  >
                    Technical Approach
                  </AnimatedText>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {project.technicalDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <AnimatedText 
                          className="text-gray-300 text-sm"
                          delay={700 + index * 100 + idx * 50}
                        >
                          {detail}
                        </AnimatedText>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <AnimatedText 
                    className="text-sm text-gray-300"
                    delay={800 + index * 100}
                  >
                    <span className="font-semibold">Outcomes:</span> {project.outcomes}
                  </AnimatedText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Patents Section */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={300}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-purple-400 text-center"
            delay={400}
          >
            Patents & Innovations
          </AnimatedText>
          <div className="grid gap-6">
            {patents.map((patent, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <AnimatedText 
                      className="text-xl font-semibold text-white mb-2"
                      delay={500 + index * 100}
                    >
                      {patent.title}
                    </AnimatedText>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span>📄 {patent.patentNumber}</span>
                      <span>📅 {patent.filingDate}</span>
                    </div>
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed mb-3"
                      delay={600 + index * 100}
                    >
                      {patent.description}
                    </AnimatedText>
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Application:</span> {patent.application}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ml-4 ${
                    patent.status === 'Published' 
                      ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                      : 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
                  }`}>
                    {patent.status}
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Innovators:</span> {patent.innovators.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Article Publications */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={400}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-green-400 text-center"
            delay={500}
          >
            Article Publications
          </AnimatedText>
          <div className="grid gap-6">
            {articlePublications.map((article, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-xs border border-green-400/30 mr-3">
                        {article.type}
                      </span>
                      <span className="text-sm text-gray-400">{article.year}</span>
                    </div>
                    <AnimatedText 
                      className="text-xl font-bold text-white mb-2"
                      delay={600 + index * 100}
                    >
                      {article.title}
                    </AnimatedText>
                    <AnimatedText 
                      className="text-sm text-gray-400 mb-3"
                      delay={700 + index * 100}
                    >
                      {article.authors}
                    </AnimatedText>
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed mb-3"
                      delay={800 + index * 100}
                    >
                      {article.description}
                    </AnimatedText>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div><span className="font-medium">Conference:</span> {article.conference}</div>
                      {article.location && <div><span className="font-medium">Location:</span> {article.location}</div>}
                      {article.publisher && <div><span className="font-medium">Publisher:</span> {article.publisher}</div>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research Methodologies */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={500}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-yellow-400 text-center"
            delay={600}
          >
            Research Methodologies
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-2">
            {methodologies.map((method, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300"
              >
                <AnimatedText 
                  className="text-xl font-semibold text-white mb-3"
                  delay={700 + index * 100}
                >
                  {method.name}
                </AnimatedText>
                <AnimatedText 
                  className="text-gray-300 mb-4 leading-relaxed"
                  delay={800 + index * 100}
                >
                  {method.description}
                </AnimatedText>
                <div className="flex flex-wrap gap-2">
                  {method.applications.map((app, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-yellow-900/50 text-yellow-400 rounded text-xs border border-yellow-400/30"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research Impact */}
      <AnimatedSection 
        direction="center" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={600}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={700}
              splitWords
            >
              Research Impact
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              delay={800}
            >
              My research contributions span computational fluid dynamics, propulsion systems, and aerospace materials science. 
              Work conducted at premier institutions including ISRO's Vikram Sarabhai Space Centre has directly contributed to 
              launch vehicle trajectory analysis and optimization.
            </AnimatedText>
            <div className="grid gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl font-bold text-blue-400 mb-2"
                  delay={900}
                >
                  11+
                </AnimatedText>
                <div className="text-sm text-gray-400">Total Publications</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl font-bold text-purple-400 mb-2"
                  delay={1000}
                >
                  3
                </AnimatedText>
                <div className="text-sm text-gray-400">Patents Filed</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl font-bold text-green-400 mb-2"
                  delay={1100}
                >
                  5
                </AnimatedText>
                <div className="text-sm text-gray-400">Research Projects</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl font-bold text-yellow-400 mb-2"
                  delay={1200}
                >
                  ISRO
                </AnimatedText>
                <div className="text-sm text-gray-400">Research Collaboration</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/experience"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                View Experience
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Discuss Research
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default ResearchPublicationsPage;
