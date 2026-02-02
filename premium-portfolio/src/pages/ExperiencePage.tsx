import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const ExperiencePage: React.FC = () => {
  const workExperience = [
    {
      title: "Academic Project - Wind Gust Characterization",
      company: "Vikram Sarabhai Space Centre (VSSC, ISRO)",
      period: "July 2025 - August 2025",
      location: "Thiruvananthapuram, India",
      type: "Academic Project",
      description: "2-month research project on wind gust characterization for launch vehicle analysis.",
      responsibilities: [
        "Applied data processing in CGS/STS division",
        "Modeled wind-induced disturbances"
      ],
      achievements: [
        "Characterized wind gust effects",
        "Enhanced stability predictions"
      ],
      technologies: ["MATLAB", "Simulink", "Data Processing", "Wind Analysis"],
      skills: ["Aerospace Engineering", "Data Analysis", "Trajectory Analysis"]
    },
    {
      title: "Product Designer",
      company: "CAD Modelling",
      period: "April 2025 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Industrial component design using CAD software.",
      responsibilities: [
        "Designed components using SolidWorks, AutoCAD, CATIA",
        "Delivered optimized designs on schedule"
      ],
      achievements: [
        "Delivered client projects",
        "High quality standards"
      ],
      technologies: ["SolidWorks", "AutoCAD", "CATIA", "CAD Design", "Manufacturing"],
      skills: ["Product Design", "CAD Modeling", "Requirements Analysis", "Design Execution"]
    },
    {
      title: "B.Tech Student Researcher",
      company: "Aircraft Wing Structural Analysis",
      period: "February 2025 - May 2025",
      location: "University Research Lab",
      type: "Research",
      description: "Aircraft wing structural analysis research.",
      responsibilities: [
        "Wind tunnel testing and ANSYS CFD simulations",
        "Evaluated structural loads and stress"
      ],
      achievements: [
        "Completed wing analysis",
        "Supported material selection"
      ],
      technologies: ["ANSYS CFD", "Wind Tunnel Testing", "Structural Analysis", "CFD Simulation"],
      skills: ["Structural Analysis", "CFD Simulation", "Aerospace Research", "Load Analysis"]
    },
    {
      title: "Assistant A.M.E",
      company: "Fly Dheera Pvt. Ltd",
      period: "2024",
      location: "Aviation Facility",
      type: "Internship",
      description: "Aircraft maintenance with DGCA procedures.",
      responsibilities: [
        "Maintained 2+ aircraft types",
        "Performed pre-flight checks and diagnostics"
      ],
      achievements: [
        "Improved efficiency by 15%",
        "DGCA compliance"
      ],
      technologies: ["Aircraft Maintenance", "DGCA Procedures", "Pre-flight Checks", "Diagnostics"],
      skills: ["Aircraft Maintenance", "Safety Compliance", "Technical Documentation", "Maintenance Planning"]
    },
    {
      title: "UAV Design and Simulation",
      company: "Aarsenalcorp Academic And Research Center",
      period: "May 2024 - June 2024",
      location: "Research Center",
      type: "Internship",
      description: "UAV design and manufacturing internship.",
      responsibilities: [
        "Designed aerodynamic components",
        "CAD modeling and structural analysis"
      ],
      achievements: [
        "Optimized UAV design",
        "Enhanced flight safety"
      ],
      technologies: ["UAV Design", "CAD Modeling", "Structural Analysis", "Aerodynamics"],
      skills: ["UAV Design", "Flight Safety", "Team Collaboration", "System Integration"]
    },
    {
      title: "Web Developer",
      company: "CLICK ASIA PVT. LTD",
      period: "2023 - 2024",
      location: "Remote",
      type: "Full-time",
      description: "Built responsive websites with mobile compatibility.",
      responsibilities: [
        "Built responsive websites",
        "Optimized site performance by 40%"
      ],
      achievements: [
        "20-50% traffic growth via SEO",
        "30% user engagement increase"
      ],
      technologies: ["Web Development", "Responsive Design", "SEO", "UI/UX", "Performance Optimization"],
      skills: ["Web Development", "UI/UX Design", "SEO Optimization", "Frontend Development"]
    },
    {
      title: "Digital Marketing",
      company: "CLICK ASIA PVT. LTD",
      period: "2023",
      location: "Remote",
      type: "Full-time",
      description: "Managed digital marketing campaigns.",
      responsibilities: [
        "SEO, PPC, and social media strategies",
        "Data-driven content and A/B testing"
      ],
      achievements: [
        "2.5x ROI on ad spends",
        "50% visibility increase"
      ],
      technologies: ["SEO", "PPC", "Social Media", "Analytics", "Content Marketing"],
      skills: ["Digital Marketing", "SEO Strategy", "PPC Campaigns", "Social Media Marketing"]
    }
  ];


  return (
    <AerospaceBackground>
      {/* Header Section */}
      <AnimatedSection 
        direction="center" 
        className="min-h-[60vh] sm:min-h-screen text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedText 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            delay={0}
            splitWords
          >
            Academic Experience & Research
          </AnimatedText>
          <AnimatedText 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Comprehensive experience in aerospace engineering, research internships, and technical leadership roles 
            across propulsion systems, structural analysis, and launch vehicle design.
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Work Experience */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-400 text-center"
            delay={0}
          >
            Academic Experience
          </AnimatedText>
          <div className="space-y-6 sm:space-y-8">
            {workExperience.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                        exp.type === 'Internship' 
                          ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                          : 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
                      }`}>
                        {exp.type}
                      </span>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <AnimatedText 
                      className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2"
                      delay={400 + index * 100}
                    >
                      {exp.title}
                    </AnimatedText>
                    <div className="flex items-center mb-2 sm:mb-4 text-gray-300 flex-wrap gap-x-4 gap-y-1">
                      <span className="mr-2">🏢</span>
                      <span className="mr-4">{exp.company}</span>
                      <span className="mr-2">📍</span>
                      <span>{exp.location}</span>
                    </div>
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed mb-4 sm:mb-6"
                      delay={500 + index * 100}
                    >
                      {exp.description}
                    </AnimatedText>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-2 sm:mb-3"
                    delay={0}
                  >
                    Key Responsibilities
                  </AnimatedText>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <AnimatedText 
                          className="text-gray-300 text-sm"
                          delay={0}
                        >
                          {resp}
                        </AnimatedText>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-2 sm:mb-3"
                    delay={0}
                  >
                    Key Achievements
                  </AnimatedText>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <AnimatedText 
                          className="text-gray-300 text-sm"
                          delay={0}
                        >
                          {achievement}
                        </AnimatedText>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div>
                    <AnimatedText 
                      className="text-lg font-semibold text-purple-400 mb-2 sm:mb-3"
                      delay={0}
                    >
                      Technologies Used
                    </AnimatedText>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-1 py-0.5 sm:px-2 sm:py-1 bg-purple-900/50 text-purple-400 rounded text-xs border border-purple-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <AnimatedText 
                      className="text-lg font-semibold text-yellow-400 mb-2 sm:mb-3"
                      delay={0}
                    >
                      Skills Developed
                    </AnimatedText>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-1 py-0.5 sm:px-2 sm:py-1 bg-yellow-900/50 text-yellow-400 rounded text-xs border border-yellow-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Statistics */}
      <AnimatedSection 
        direction="center" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-6 sm:p-8 lg:p-12">
            <AnimatedText 
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white"
              delay={0}
              splitWords
            >
              Academic Overview
            </AnimatedText>
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-4 max-w-4xl mx-auto">
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2"
                  delay={0}
                >
                  3+
                </AnimatedText>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2"
                  delay={0}
                >
                  3
                </AnimatedText>
                <div className="text-xs sm:text-sm text-gray-400">Research Internships</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2"
                  delay={0}
                >
                  15+
                </AnimatedText>
                <div className="text-xs sm:text-sm text-gray-400">Technical Skills</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2"
                  delay={0}
                >
                  ISRO
                </AnimatedText>
                <div className="text-xs sm:text-sm text-gray-400">Industry Collaboration</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get In Touch
              </Link>
              <Link
                to="/research-publications"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View Research
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default ExperiencePage;
