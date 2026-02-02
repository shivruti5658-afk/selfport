import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const ResearchPage: React.FC = () => {
  const researchAreas = [
    {
      title: "Hybrid Rocket Propulsion",
      description: "Advanced research on hybrid rocket engines using paraffin-based fuels and various oxidizers. Focus on optimizing combustion efficiency, regression rates, and overall performance characteristics for next-generation launch vehicle propulsion systems.",
      status: "Active",
      progress: 85,
      technologies: ["CFD Analysis", "Experimental Testing", "Combustion Modeling", "Performance Optimization"],
      publications: 3,
      patents: 1
    },
    {
      title: "Launch Vehicle Aerodynamics",
      description: "Comprehensive study of atmospheric effects on launch vehicle trajectories and stability. Development of wind gust characterization models and trajectory optimization algorithms for enhanced launch reliability.",
      status: "Active",
      progress: 75,
      technologies: ["Wind Tunnel Testing", "CFD Simulation", "Trajectory Analysis", "Atmospheric Modeling"],
      publications: 2,
      patents: 1
    },
    {
      title: "UAV Swarm Intelligence",
      description: "Research into coordinated control systems for multiple UAV operations using swarm intelligence algorithms. Development of autonomous navigation, collision avoidance, and mission planning systems for complex aerial operations.",
      status: "Planning",
      progress: 40,
      technologies: ["Swarm Algorithms", "Path Planning", "Control Systems", "Machine Learning"],
      publications: 1,
      patents: 0
    },
    {
      title: "Space Debris Mitigation",
      description: "Innovative approaches to orbital debris tracking, characterization, and removal systems. Development of predictive models for debris behavior and active removal technologies for sustainable space operations.",
      status: "Planning",
      progress: 30,
      technologies: ["Orbital Mechanics", "Tracking Systems", "Removal Technologies", "Space Law"],
      publications: 0,
      patents: 2
    }
  ];

  const researchMethodologies = [
    {
      name: "Computational Analysis",
      description: "Advanced CFD and FEA simulations for aerospace applications",
      tools: ["ANSYS Fluent", "OpenFOAM", "MATLAB", "Python"]
    },
    {
      name: "Experimental Testing",
      description: "Wind tunnel testing and propulsion system experiments",
      tools: ["Wind Tunnel", "Propulsion Test Stand", "Data Acquisition", "Instrumentation"]
    },
    {
      name: "Data Science",
      description: "Machine learning and statistical analysis for aerospace data",
      tools: ["Python", "TensorFlow", "Scikit-learn", "Pandas"]
    },
    {
      name: "Systems Integration",
      description: "Hardware-software integration for aerospace systems",
      tools: ["Embedded Systems", "IoT", "Control Systems", "Real-time Systems"]
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            delay={0}
            splitWords
          >
            Research & Development
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Cutting-edge research initiatives advancing aerospace engineering technology and innovation
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Research Areas */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-purple-400 text-center"
            delay={0}
          >
            Current Research Areas
          </AnimatedText>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex-1">
                    <AnimatedText 
                      className="text-xl sm:text-2xl font-bold text-white mb-2"
                      delay={400 + index * 100}
                    >
                      {area.title}
                    </AnimatedText>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      area.status === 'Active' 
                        ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                        : area.status === 'Planning'
                        ? 'bg-orange-900/50 text-orange-400 border border-orange-400/30'
                        : 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <AnimatedText 
                      className="text-2xl font-bold text-purple-400"
                      delay={0}
                    >
                      {area.progress}%
                    </AnimatedText>
                    <div className="text-sm text-gray-400">Progress</div>
                  </div>
                </div>
                
                <AnimatedText 
                  className="text-gray-300 leading-relaxed mb-6"
                  delay={0}
                >
                  {area.description}
                </AnimatedText>
                
                <div className="mb-6">
                  <AnimatedText 
                    className="text-sm font-semibold text-blue-400 mb-3"
                    delay={0}
                  >
                    Technologies
                  </AnimatedText>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-blue-900/50 text-blue-400 rounded text-xs border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <AnimatedText 
                      className="text-xl font-bold text-green-400"
                      delay={0}
                    >
                      {area.publications}
                    </AnimatedText>
                    <div className="text-sm text-gray-400">Publications</div>
                  </div>
                  <div>
                    <AnimatedText 
                      className="text-xl font-bold text-yellow-400"
                      delay={0}
                    >
                      {area.patents}
                    </AnimatedText>
                    <div className="text-sm text-gray-400">Patents</div>
                  </div>
                  <div>
                    <AnimatedText 
                      className="text-xl font-bold text-purple-400"
                      delay={0}
                    >
                      {area.progress}%
                    </AnimatedText>
                    <div className="text-sm text-gray-400">Complete</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research Methodologies */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-blue-400 text-center"
            delay={0}
          >
            Research Methodologies
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {researchMethodologies.map((method, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">🔬</div>
                <AnimatedText 
                  className="text-lg font-bold text-white mb-2"
                  delay={0}
                >
                  {method.name}
                </AnimatedText>
                <AnimatedText 
                  className="text-gray-300 text-sm"
                  delay={0}
                >
                  {method.description}
                </AnimatedText>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {method.tools.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-blue-900/50 text-blue-400 rounded text-xs border border-blue-400/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research Impact */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={0}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={0}
              splitWords
            >
              Research Impact & Future Directions
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              delay={0}
            >
              My research focuses on practical applications that advance aerospace technology while maintaining academic rigor. 
              Current work aims to bridge the gap between theoretical research and industrial implementation, 
              contributing to India's space program and global aerospace innovation.
            </AnimatedText>
            <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-purple-400 mb-2"
                  delay={0}
                >
                  Innovation
                </AnimatedText>
                <div className="text-sm text-gray-400">Pushing boundaries</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-blue-400 mb-2"
                  delay={0}
                >
                  Application
                </AnimatedText>
                <div className="text-sm text-gray-400">Real-world solutions</div>
              </div>
              <div className="text-center">
                <AnimatedText 
                  className="text-2xl font-bold text-green-400 mb-2"
                  delay={0}
                >
                  Collaboration
                </AnimatedText>
                <div className="text-sm text-gray-400">Industry partnerships</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View Publications
              </Link>
              <Link
                to="/patents"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg hover:from-pink-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              >
                View Patents
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default ResearchPage;
