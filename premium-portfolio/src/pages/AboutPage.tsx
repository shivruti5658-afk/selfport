import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const AboutPage: React.FC = () => {
  const professionalSummary = {
    title: "Professional Overview",
    description: "I am a highly motivated Aerospace Engineering undergraduate with strong academic performance and practical experience in rocket propulsion, aerodynamics, UAV systems, and space vehicle analysis. My work spans academic research, ISRO-associated projects, and industry internships, with a focus on applying computational and experimental methods to real-world aerospace challenges.",
    keyHighlights: [
      "Strong academic performance with ~95% in B.Tech Aerospace Engineering",
      "Hands-on experience at ISRO's Vikram Sarabhai Space Centre (VSSC)",
      "Research-focused approach with multiple publications and patents",
      "Cross-disciplinary expertise in aerospace and software engineering",
      "Proven ability to deliver results in high-stakes aerospace environments"
    ]
  };

  const coreCompetencies = [
    {
      title: "Technical Excellence",
      description: "Advanced proficiency in aerospace computational tools, CFD analysis, and propulsion system design with a strong foundation in engineering principles.",
      icon: "🚀",
      skills: ["CFD/FEA Analysis", "Propulsion Systems", "Aerodynamics", "Structural Analysis"]
    },
    {
      title: "Research Innovation",
      description: "Demonstrated research capabilities through peer-reviewed publications, patent filings, and contributions to cutting-edge aerospace projects.",
      icon: "🔬",
      skills: ["Experimental Design", "Data Analysis", "Technical Writing", "Problem Solving"]
    },
    {
      title: "Project Management",
      description: "Experience leading technical projects from conception to completion, coordinating multidisciplinary teams and managing complex aerospace engineering workflows.",
      icon: "📋",
      skills: ["Team Leadership", "Resource Planning", "Risk Assessment", "Quality Control"]
    },
    {
      title: "Software Development",
      description: "Strong programming skills with expertise in developing custom software solutions for aerospace applications, including simulation tools and data analysis platforms.",
      icon: "💻",
      skills: ["Python/Matlab", "Web Development", "Database Design", "Algorithm Development"]
    }
  ];

  const professionalJourney = [
    {
      phase: "Academic Foundation",
      period: "2022 - 2026",
      description: "Building strong theoretical foundation in aerospace engineering with focus on propulsion systems, aerodynamics, and computational methods.",
      achievements: ["Dean's List", "Academic Excellence Awards", "Technical Competitions"]
    },
    {
      phase: "Research Experience",
      period: "2023 - Present",
      description: "Engaging in cutting-edge research projects in hybrid rocket propulsion, UAV systems, and aerospace computation with multiple publications.",
      achievements: ["Publications", "Patent Filings", "Conference Presentations"]
    },
    {
      phase: "Industry Exposure",
      period: "2023 - Present",
      description: "Gaining practical industry experience through internships and collaborative projects with leading aerospace organizations.",
      achievements: ["ISRO Internship", "Industry Projects", "Technical Certifications"]
    },
    {
      phase: "Technical Leadership",
      period: "2023 - Present",
      description: "Leading technical initiatives and contributing to complex aerospace engineering challenges with innovative solutions.",
      achievements: ["Project Leadership", "Technical Innovation", "Mentorship"]
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent"
            delay={0}
            splitWords
          >
            About Me
          </AnimatedText>
          <AnimatedText 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Objective-driven summary of my professional journey and capabilities in aerospace engineering
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Professional Summary */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/20 to-blue-900/20 border border-yellow-400/30 rounded-lg p-4 sm:p-6 lg:p-8">
            <AnimatedText 
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400"
              delay={0}
            >
              {professionalSummary.title}
            </AnimatedText>
            <AnimatedText 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8"
              delay={0}
            >
              {professionalSummary.description}
            </AnimatedText>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {professionalSummary.keyHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <AnimatedText 
                    className="text-gray-300"
                    delay={0}
                  >
                    {highlight}
                  </AnimatedText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Competencies */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-400"
            delay={0}
          >
            Core Competencies
          </AnimatedText>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {coreCompetencies.map((competency, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{competency.icon}</div>
                  <AnimatedText 
                    className="text-xl font-bold text-white"
                    delay={0}
                  >
                    {competency.title}
                  </AnimatedText>
                </div>
                <AnimatedText 
                  className="text-gray-300 mb-4 leading-relaxed"
                  delay={0}
                >
                  {competency.description}
                </AnimatedText>
                <div className="flex flex-wrap gap-2">
                  {competency.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm border border-blue-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Professional Journey */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-purple-400 text-center sm:text-left"
            delay={0}
          >
            Professional Journey
          </AnimatedText>
          <div className="relative">
            {/* Timeline - Mobile: Left aligned, Tablet/Medium: Left aligned with more space, Desktop: Center */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-12">
              {professionalJourney.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center md:justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Mobile/Tablet: Full width with left padding, Desktop: Alternating 5/12 width */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-6 md:pl-0`}>
                    <AnimatedText 
                      className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2"
                      delay={0}
                    >
                      {phase.phase}
                    </AnimatedText>
                    <AnimatedText 
                      className="text-xs sm:text-sm text-gray-400 mb-1"
                      delay={0}
                    >
                      {phase.period}
                    </AnimatedText>
                    <AnimatedText 
                      className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-4 leading-relaxed"
                      delay={0}
                    >
                      {phase.description}
                    </AnimatedText>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                      {phase.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 bg-purple-900/50 text-purple-400 rounded-full text-xs border border-purple-400/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Timeline dot - Mobile/Tablet: Left aligned, Desktop: Center */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-400 rounded-full border-2 sm:border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
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
              Let's Connect and Collaborate
            </AnimatedText>
            <AnimatedText 
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8"
              delay={0}
            >
              I'm always interested in discussing aerospace engineering challenges, research opportunities, and innovative projects.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default AboutPage;
