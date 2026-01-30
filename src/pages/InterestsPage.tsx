import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const InterestsPage: React.FC = () => {
  const interests = [
    {
      category: "3D Modeling",
      description: "Advanced 3D modeling and CAD design for aerospace components, assemblies, and systems using industry-standard software.",
      icon: "3D",
      color: "from-orange-400 to-red-500"
    },
    {
      category: "UAV Design & Development",
      description: "Comprehensive expertise in unmanned aerial vehicle systems, including aerodynamics, control systems, and mission planning.",
      icon: "UAV",
      color: "from-blue-400 to-cyan-500"
    },
    {
      category: "Propulsion Research",
      description: "Advanced research and development in solid, hybrid, liquid, and electric propulsion systems for space launch vehicles and spacecraft.",
      icon: "PR",
      color: "from-yellow-400 to-orange-500"
    },
    {
      category: "Aerospace Computational Interface Design",
      description: "Development of intuitive computational interfaces and software solutions for aerospace engineering applications and mission control systems.",
      icon: "CI",
      color: "from-purple-400 to-pink-500"
    },
    {
      category: "Component & Performance Analysis",
      description: "Physical and virtual analysis of aerospace components and systems performance under various operating conditions.",
      icon: "CP",
      color: "from-green-400 to-teal-500"
    },
    {
      category: "Aerospace Materials & Component Testing",
      description: "Experimental and computational analysis of aerospace materials and structures under extreme conditions and testing protocols.",
      icon: "MT",
      color: "from-indigo-400 to-blue-500"
    },
    {
      category: "Coding",
      description: "Software development and programming for aerospace applications, data analysis, and computational modeling.",
      icon: "CD",
      color: "from-gray-400 to-blue-500"
    },
    {
      category: "Communication Systems",
      description: "Advanced communication technologies for aerospace applications, including satellite communications and data links.",
      icon: "CS",
      color: "from-red-400 to-pink-500"
    },
    {
      category: "Satellite Observation",
      description: "Remote sensing applications and satellite-based monitoring systems for earth observation and space surveillance.",
      icon: "SO",
      color: "from-cyan-400 to-blue-500"
    },
    {
      category: "Satellite Data Analysis",
      description: "Advanced data processing and analysis techniques for satellite imagery and space-based observation data.",
      icon: "DA",
      color: "from-purple-400 to-indigo-500"
    },
    {
      category: "Web Development",
      description: "Full-stack web applications, progressive web apps, and modern UI/UX design with React, Node.js, and cloud technologies.",
      icon: "WEB",
      color: "from-green-400 to-blue-500"
    },
    {
      category: "App Development",
      description: "Cross-platform mobile applications, React Native development, and mobile-first design principles for iOS and Android.",
      icon: "APP",
      color: "from-pink-400 to-purple-500"
    }
  ];

  const researchFocus = [
    {
      title: "Hybrid Rocket Propulsion",
      description: "Optimization of paraffin-based fuels and oxidizer combinations for enhanced performance and reliability.",
      current: true
    },
    {
      title: "Launch Vehicle Aerodynamics",
      description: "Wind gust characterization and trajectory stability analysis for improved launch vehicle design.",
      current: true
    },
    {
      title: "UAV Swarm Intelligence",
      description: "Coordinated control systems for multiple UAV operations in complex environments.",
      current: false
    },
    {
      title: "Space Debris Mitigation",
      description: "Innovative approaches to orbital debris tracking and removal systems.",
      current: false
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            delay={100}
            splitWords
          >
            Areas of Interest
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={200}
          >
            Specialized focus areas driving my research and professional development in aerospace engineering
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Main Interest Areas */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-purple-400 text-center"
            delay={300}
          >
            Core Interest Areas
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${interest.color} bg-clip-text text-transparent`}>
                  {interest.icon}
                </div>
                <AnimatedText 
                  className="text-xl font-bold text-white mb-3"
                  delay={400 + index * 100}
                >
                  {interest.category}
                </AnimatedText>
                <AnimatedText 
                  className="text-gray-300 leading-relaxed"
                  delay={500 + index * 100}
                >
                  {interest.description}
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research Focus */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={300}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-blue-400 text-center"
            delay={600}
          >
            Research Focus Areas
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-2">
            {researchFocus.map((focus, index) => (
              <div 
                key={index}
                className={`bg-gray-900/50 border rounded-lg p-6 transition-all duration-300 ${
                  focus.current 
                    ? 'border-blue-400/50 hover:border-blue-400' 
                    : 'border-gray-800 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <AnimatedText 
                    className="text-xl font-bold text-white"
                    delay={700 + index * 100}
                  >
                    {focus.title}
                  </AnimatedText>
                  {focus.current && (
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs border border-blue-400/30">
                      Active
                    </span>
                  )}
                </div>
                <AnimatedText 
                  className="text-gray-300 leading-relaxed"
                  delay={800 + index * 100}
                >
                  {focus.description}
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Future Goals */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={400}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={900}
              splitWords
            >
              Future Aspirations
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              delay={1000}
            >
              My goal is to contribute to the advancement of aerospace technology through innovative research 
              and practical applications. I aim to work on cutting-edge propulsion systems, develop next-generation 
              UAV technologies, and contribute to India's space program while building expertise in computational 
              aerospace engineering.
            </AnimatedText>
            <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-purple-400 mb-2"
                  delay={1100}
                >
                  Innovation
                </AnimatedText>
                <div className="text-sm text-gray-400">Push technological boundaries</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-blue-400 mb-2"
                  delay={1200}
                >
                  Research
                </AnimatedText>
                <div className="text-sm text-gray-400">Advance scientific knowledge</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-green-400 mb-2"
                  delay={1300}
                >
                  Application
                </AnimatedText>
                <div className="text-sm text-gray-400">Create real-world impact</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Discuss Interests
              </Link>
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
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

export default InterestsPage;
