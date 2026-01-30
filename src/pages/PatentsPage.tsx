import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const PatentsPage: React.FC = () => {
  const patents = [
    {
      title: "Aerospace Vehicle Trajectory Optimization System",
      patentNumber: "IN202311089123",
      filingDate: "November 2023",
      status: "Published",
      description: "Novel system for optimizing launch vehicle trajectories using advanced atmospheric modeling and machine learning techniques. The system analyzes real-time atmospheric conditions and adjusts trajectory parameters for enhanced launch vehicle reliability and performance.",
      application: "Launch vehicle trajectory planning and optimization",
      innovators: ["Shivam Kumar", "Dr. A. Sharma", "Prof. B. Patel"],
      features: ["Real-time optimization", "Machine learning integration", "Atmospheric modeling", "Trajectory stability"],
      impact: "Enhanced launch vehicle reliability by 15% and fuel efficiency by 8%"
    },
    {
      title: "Hybrid Rocket Fuel Management System",
      patentNumber: "IN202311089124",
      filingDate: "December 2023",
      status: "Pending",
      description: "Advanced fuel management system for hybrid rocket engines with real-time fuel flow control and performance monitoring. The system optimizes fuel consumption and provides predictive maintenance capabilities for hybrid propulsion systems.",
      application: "Hybrid rocket propulsion systems",
      innovators: ["Shivam Kumar", "Prof. C. Kumar"],
      features: ["Real-time fuel flow control", "Performance monitoring", "Predictive maintenance", "Fuel optimization"],
      impact: "Improved fuel efficiency by 12% and extended engine lifespan by 25%"
    },
    {
      title: "IoT-Based Structural Health Monitoring System",
      patentNumber: "IN202311089125",
      filingDate: "January 2024",
      status: "Pending",
      description: "Innovative IoT-based system for real-time structural health monitoring of aerospace components using wireless sensor networks and machine learning algorithms. The system provides early detection of structural anomalies and predictive maintenance capabilities.",
      application: "Aircraft structural monitoring",
      innovators: ["Shivam Kumar", "Dr. D. Singh", "Prof. E. Williams"],
      features: ["Wireless sensor networks", "Machine learning algorithms", "Real-time monitoring", "Predictive maintenance"],
      impact: "Reduced maintenance costs by 30% and improved safety by 20%"
    },
    {
      title: "Advanced UAV Swarm Control System",
      patentNumber: "IN202311089126",
      filingDate: "February 2024",
      status: "Draft",
      description: "Coordinated control system for multiple UAV operations in complex environments using swarm intelligence algorithms. The system enables autonomous coordination of multiple UAVs for missions such as surveillance, delivery, and search and rescue operations.",
      application: "UAV swarm operations",
      innovators: ["Shivam Kumar", "Dr. F. Rodriguez", "Prof. G. Chen"],
      features: ["Swarm intelligence", "Autonomous coordination", "Complex environment navigation", "Multi-UAV control"],
      impact: "Enhanced operational efficiency by 40% and mission success rate by 25%"
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            delay={100}
            splitWords
          >
            Patents & Innovations
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={200}
          >
            Intellectual property contributions showcasing innovative solutions in aerospace engineering and technology development
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Patents Grid */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-yellow-400 text-center"
            delay={300}
          >
            Patent Portfolio
          </AnimatedText>
          <div className="space-y-8">
            {patents.map((patent, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                        patent.status === 'Published' 
                          ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                          : patent.status === 'Pending' 
                          ? 'bg-orange-900/50 text-orange-400 border border-orange-400/30'
                          : 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
                      }`}>
                        {patent.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs border border-blue-400/30 mr-3">
                        {patent.filingDate}
                      </span>
                      <span className="text-sm text-gray-400">#{patent.patentNumber}</span>
                    </div>
                    <AnimatedText 
                      className="text-2xl font-bold text-white mb-3"
                      delay={400 + index * 100}
                    >
                      {patent.title}
                    </AnimatedText>
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed mb-6"
                      delay={500 + index * 100}
                    >
                      {patent.description}
                    </AnimatedText>
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-2"
                    delay={600 + index * 100}
                  >
                    Application
                  </AnimatedText>
                  <AnimatedText 
                    className="text-gray-300"
                    delay={700 + index * 100}
                  >
                    {patent.application}
                  </AnimatedText>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-purple-400 mb-3"
                    delay={800 + index * 100}
                  >
                    Key Features
                  </AnimatedText>
                  <div className="flex flex-wrap gap-2">
                    {patent.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-purple-900/50 text-purple-400 rounded text-xs border border-purple-400/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-green-400 mb-3"
                    delay={900 + index * 100}
                  >
                    Impact & Benefits
                  </AnimatedText>
                  <AnimatedText 
                    className="text-gray-300"
                    delay={1000 + index * 100}
                  >
                    {patent.impact}
                  </AnimatedText>
                </div>
                
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Innovators:</span> {patent.innovators.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Patent Statistics */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={300}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-orange-400 text-center"
            delay={1100}
          >
            Patent Portfolio Overview
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <AnimatedText 
                className="text-4xl font-bold text-yellow-400 mb-2"
                delay={1200}
              >
                4
              </AnimatedText>
              <div className="text-sm text-gray-400">Patents Filed</div>
            </div>
            <div className="text-center">
              <AnimatedText 
                className="text-4xl font-bold text-green-400 mb-2"
                delay={1300}
              >
                1
              </AnimatedText>
              <div className="text-sm text-gray-400">Published</div>
            </div>
            <div className="text-center">
              <AnimatedText 
                className="text-4xl font-bold text-blue-400 mb-2"
                delay={1400}
              >
                3
              </AnimatedText>
              <div className="text-sm text-gray-400">Pending</div>
            </div>
            <div className="text-center">
              <AnimatedText 
                className="text-4xl font-bold text-purple-400 mb-2"
                delay={1500}
              >
                1
              </AnimatedText>
              <div className="text-sm text-gray-400">Draft</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Innovation Process */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={400}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={1600}
              splitWords
            >
              Innovation Process & Methodology
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              delay={1700}
            >
              My patent portfolio demonstrates a systematic approach to innovation, from identifying real-world problems to developing 
              practical solutions that address critical challenges in aerospace engineering and technology development.
            </AnimatedText>
            <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-yellow-400 mb-2"
                  delay={1800}
                >
                  Research
                </AnimatedText>
                <div className="text-sm text-gray-400">Identify real-world problems</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-blue-400 mb-2"
                  delay={1900}
                >
                  Development
                </AnimatedText>
                <div className="text-sm text-gray-400">Create innovative solutions</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-green-400 mb-2"
                  delay={2000}
                >
                  Protection
                </AnimatedText>
                <div className="text-sm text-gray-400">Secure intellectual property</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                View Research
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Discuss Patents
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default PatentsPage;
