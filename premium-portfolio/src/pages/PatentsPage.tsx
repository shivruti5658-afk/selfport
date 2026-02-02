import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const PatentsPage: React.FC = () => {
  const patents = [
    {
      title: "Anti crop instant damaging system(ACIDS) with integrated of AI and IOT",
      patentNumber: "Filed",
      filingDate: "2024",
      status: "Published",
      description: "Innovative AI and IoT integrated system for instant crop damage detection and prevention.",
      application: "Agricultural protection and crop monitoring",
      innovators: ["Research Team"],
      features: ["AI-based detection", "IoT integration", "Real-time monitoring", "Instant response system"],
      impact: "Revolutionary approach to crop protection with immediate damage detection and prevention"
    },
    {
      title: "IoT based heating slippers for home use",
      patentNumber: "Filed",
      filingDate: "2024",
      status: "Published",
      description: "Smart heating slippers with IoT connectivity for home comfort and health monitoring.",
      application: "Smart home and wearable technology",
      innovators: ["Research Team"],
      features: ["IoT connectivity", "Temperature control", "Health monitoring", "Smart home integration"],
      impact: "Innovative solution combining comfort technology with health monitoring capabilities"
    },
    {
      title: "IoT based battery power automatic heating container for food",
      patentNumber: "Filed",
      filingDate: "2024",
      status: "Published",
      description: "Battery-powered automatic heating container with IoT control for food preservation and warming.",
      application: "Food preservation and smart kitchen technology",
      innovators: ["Research Team"],
      features: ["Battery-powered heating", "IoT control", "Food preservation", "Automatic temperature regulation"],
      impact: "Smart kitchen solution for food safety and convenience with energy-efficient heating"
    },
    {
      title: "Smart waste detection and reporting system for urban roads using AI based image recognition",
      patentNumber: "Filed",
      filingDate: "2024",
      status: "Under Communication",
      description: "AI-powered waste detection system using image recognition for urban road maintenance.",
      application: "Smart city and waste management",
      innovators: ["Research Team"],
      features: ["AI image recognition", "Smart city integration", "Waste detection", "Automated reporting"],
      impact: "Advanced urban management system for efficient waste detection and reporting"
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            delay={0}
            splitWords
          >
            Patents & Innovations
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Intellectual property contributions showcasing innovative solutions in aerospace engineering and technology development
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Patents Grid */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-yellow-400 text-center"
            delay={0}
          >
            Patent Portfolio
          </AnimatedText>
          <div className="space-y-6 sm:space-y-8">
            {patents.map((patent, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                        patent.status === 'Published' 
                          ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                          : patent.status === 'Pending' 
                          ? 'bg-orange-900/50 text-orange-400 border border-orange-400/30'
                          : patent.status === 'Under Communication'
                          ? 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
                          : 'bg-gray-900/50 text-gray-400 border border-gray-400/30'
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
                      delay={0}
                    >
                      {patent.title}
                    </AnimatedText>
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed mb-6"
                      delay={0}
                    >
                      {patent.description}
                    </AnimatedText>
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-2"
                    delay={0}
                  >
                    Application
                  </AnimatedText>
                  <AnimatedText 
                    className="text-gray-300"
                    delay={0}
                  >
                    {patent.application}
                  </AnimatedText>
                </div>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-purple-400 mb-3"
                    delay={0}
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
                    delay={0}
                  >
                    Impact & Benefits
                  </AnimatedText>
                  <AnimatedText 
                    className="text-gray-300"
                    delay={0}
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
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-orange-400 text-center"
            delay={0}
          >
            Patent Portfolio Overview
          </AnimatedText>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <AnimatedText 
                className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2"
                delay={0}
              >
                4
              </AnimatedText>
              <div className="text-xs sm:text-sm text-gray-400">Patents Filed</div>
            </div>
            <div className="text-center">
              <AnimatedText 
                className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2"
                delay={0}
              >
                3
              </AnimatedText>
              <div className="text-xs sm:text-sm text-gray-400">Published</div>
            </div>
            <div className="text-center">
              <AnimatedText 
                className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2"
                delay={0}
              >
                1
              </AnimatedText>
              <div className="text-xs sm:text-sm text-gray-400">Under Communication</div>
            </div>
            <div className="text-center">
              <AnimatedText 
                className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2"
                delay={0}
              >
                2024
              </AnimatedText>
              <div className="text-xs sm:text-sm text-gray-400">Filing Year</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Innovation Process */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-400/30 rounded-lg p-6 sm:p-8 lg:p-12">
            <AnimatedText 
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white"
              delay={0}
              splitWords
            >
              Innovation Process & Methodology
            </AnimatedText>
            <AnimatedText 
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              delay={0}
            >
              My patent portfolio demonstrates a systematic approach to innovation, from identifying real-world problems to developing 
              practical solutions that address critical challenges in technology development and smart systems.
            </AnimatedText>
            <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
              <div className="text-center">
                <AnimatedText 
                  className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1 sm:mb-2"
                  delay={0}
                >
                  Research
                </AnimatedText>
                <div className="text-xs sm:text-sm text-gray-400">Identify real-world problems</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-xl sm:text-2xl font-bold text-blue-400 mb-1 sm:mb-2"
                  delay={0}
                >
                  Development
                </AnimatedText>
                <div className="text-xs sm:text-sm text-gray-400">Create innovative solutions</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-xl sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2"
                  delay={0}
                >
                  Protection
                </AnimatedText>
                <div className="text-xs sm:text-sm text-gray-400">Secure intellectual property</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
              <Link
                to="/research-publications"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                View Research
              </Link>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
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
