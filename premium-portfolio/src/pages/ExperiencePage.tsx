import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const ExperiencePage: React.FC = () => {
  const workExperience = [
    {
      title: "Aerospace Engineering Intern - Launch Vehicle Design",
      company: "Vikram Sarabhai Space Centre (ISRO - VSSC)",
      period: "July 2025 - August 2025",
      location: "Thiruvananthapuram, India",
      type: "Internship",
      description: "Contributed to launch vehicle trajectory analysis and atmospheric wind profile characterization for enhanced flight stability.",
      responsibilities: [
        "Analyzed atmospheric wind profiles and their impact on launch vehicle trajectories",
        "Developed computational models for trajectory stability assessment under real atmospheric uncertainties",
        "Collaborated with CGS/STS Division on flight dynamics and control systems",
        "Prepared technical reports and presentations for senior engineering teams",
        "Utilized advanced simulation tools for launch vehicle performance optimization"
      ],
      achievements: [
        "Successfully modeled wind gust effects on launch vehicle stability",
        "Contributed to enhanced trajectory prediction algorithms",
        "Assisted in developing mitigation strategies for atmospheric disturbances",
        "Presented findings to ISRO's launch vehicle design team"
      ],
      technologies: ["MATLAB", "Simulink", "Flight Dynamics", "Atmospheric Modeling", "Data Analysis"],
      skills: ["Trajectory Analysis", "Computational Modeling", "Aerospace Engineering", "Technical Reporting"]
    }
  ];

  const technicalSkills = [
    {
      category: "Software & Tools",
      skills: ["ANSYS Fluent", "ANSYS Mechanical", "MATLAB", "Simulink", "XFLR5", "Python", "CFD", "FEA"]
    },
    {
      category: "Aerospace Engineering",
      skills: ["Flight Dynamics", "Propulsion Systems", "Structural Analysis", "Aerodynamics", "Trajectory Analysis"]
    },
    {
      category: "Research & Development",
      skills: ["Computational Modeling", "Experimental Testing", "Data Analysis", "Technical Writing", "Project Management"]
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
            Professional Experience & Research
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={200}
          >
            Comprehensive experience in aerospace engineering, research internships, and technical leadership roles 
            across propulsion systems, structural analysis, and launch vehicle design.
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Work Experience */}
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
            Professional Experience
          </AnimatedText>
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
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
                      className="text-2xl font-bold text-white mb-2"
                      delay={400 + index * 100}
                    >
                      {exp.title}
                    </AnimatedText>
                    <div className="flex items-center mb-4 text-gray-300">
                      <span className="mr-2">🏢</span>
                      <span className="mr-4">{exp.company}</span>
                      <span className="mr-2">📍</span>
                      <span>{exp.location}</span>
                    </div>
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed mb-6"
                      delay={500 + index * 100}
                    >
                      {exp.description}
                    </AnimatedText>
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-3"
                    delay={600 + index * 100}
                  >
                    Key Responsibilities
                  </AnimatedText>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <AnimatedText 
                          className="text-gray-300 text-sm"
                          delay={700 + index * 100 + idx * 50}
                        >
                          {resp}
                        </AnimatedText>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-3"
                    delay={800 + index * 100}
                  >
                    Key Achievements
                  </AnimatedText>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <AnimatedText 
                          className="text-gray-300 text-sm"
                          delay={900 + index * 100 + idx * 50}
                        >
                          {achievement}
                        </AnimatedText>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <AnimatedText 
                      className="text-lg font-semibold text-purple-400 mb-3"
                      delay={1000 + index * 100}
                    >
                      Technologies Used
                    </AnimatedText>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-purple-900/50 text-purple-400 rounded text-xs border border-purple-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <AnimatedText 
                      className="text-lg font-semibold text-yellow-400 mb-3"
                      delay={1100 + index * 100}
                    >
                      Skills Developed
                    </AnimatedText>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-yellow-900/50 text-yellow-400 rounded text-xs border border-yellow-400/30"
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

      {/* Technical Skills */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={400}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-green-400 text-center"
            delay={1200}
          >
            Technical Skills & Expertise
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-3">
            {technicalSkills.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <AnimatedText 
                  className="text-xl font-bold text-white mb-4"
                  delay={1300 + index * 100}
                >
                  {category.category}
                </AnimatedText>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-green-400 mr-2">▸</span>
                      <AnimatedText 
                        className="text-gray-300"
                        delay={1400 + index * 100 + idx * 50}
                      >
                        {skill}
                      </AnimatedText>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Statistics */}
      <AnimatedSection 
        direction="center" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={500}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={1500}
              splitWords
            >
              Professional Overview
            </AnimatedText>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              <div className="text-center">
                <AnimatedText 
                  className="text-4xl font-bold text-blue-400 mb-2"
                  delay={1600}
                >
                  5+
                </AnimatedText>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-4xl font-bold text-green-400 mb-2"
                  delay={1700}
                >
                  3
                </AnimatedText>
                <div className="text-sm text-gray-400">Research Internships</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-4xl font-bold text-purple-400 mb-2"
                  delay={1800}
                >
                  15+
                </AnimatedText>
                <div className="text-sm text-gray-400">Technical Skills</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-4xl font-bold text-yellow-400 mb-2"
                  delay={1900}
                >
                  ISRO
                </AnimatedText>
                <div className="text-sm text-gray-400">Industry Collaboration</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get In Touch
              </Link>
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
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
