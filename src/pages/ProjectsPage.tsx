import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const projects = [
  {
    title: "Hypersonic CFD Simulator",
    shortDescription: "Advanced computational fluid dynamics tool for hypersonic vehicle design and analysis.",
    fullDescription: "Developed a high-fidelity CFD simulator specifically for hypersonic flows, incorporating real-gas effects, chemical reactions, and turbulence modeling. The tool has been used in multiple DARPA-funded projects and reduced simulation time by 60% compared to commercial alternatives.",
    technologies: ["C++", "OpenFOAM", "MPI", "Python"],
    category: "Aerospace",
    caseStudy: "#",
    sourceCode: "#",
    impact: "Used in 5+ research projects, published in 3 journals",
    featured: true,
  },
  {
    title: "Flight Trajectory Optimizer",
    shortDescription: "AI-powered trajectory planning system for reusable launch vehicles.",
    fullDescription: "Created an optimization framework using reinforcement learning and genetic algorithms to compute optimal ascent and descent trajectories for reusable rockets. The system accounts for atmospheric conditions, vehicle constraints, and mission objectives.",
    technologies: ["Python", "TensorFlow", "MATLAB", "Simulink"],
    category: "Aerospace",
    caseStudy: "#",
    sourceCode: "#",
    impact: "Improved payload capacity by 15%, reduced fuel consumption by 8%",
    featured: false,
  },
  {
    title: "UAV Swarm Control System",
    shortDescription: "Coordinated control system for multiple UAV operations in complex environments.",
    fullDescription: "Developed a distributed control system enabling coordinated flight of multiple UAVs using swarm intelligence algorithms. The system provides real-time collision avoidance, mission planning, and adaptive formation control.",
    technologies: ["Python", "ROS", "C++", "MATLAB"],
    category: "Robotics",
    caseStudy: "#",
    sourceCode: "#",
    impact: "Successfully tested with 10+ UAVs, 99% collision avoidance rate",
    featured: false,
  },
  {
    title: "Aerospace IoT Platform",
    shortDescription: "Comprehensive IoT platform for aerospace component monitoring and data analysis.",
    fullDescription: "Built an end-to-end IoT solution for real-time monitoring of aerospace components including sensors, actuators, and control systems. Features edge computing capabilities and predictive maintenance algorithms.",
    technologies: ["Python", "Node.js", "MongoDB", "AWS"],
    category: "IoT",
    caseStudy: "#",
    sourceCode: "#",
    impact: "Used by 10+ companies, 1000+ downloads on GitHub",
    featured: false,
  },
];

const ProjectsPage: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <AerospaceBackground>
      {/* Header Section */}
      <AnimatedSection 
        direction="center" 
        className="min-h-screen text-white px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedText 
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
            delay={100}
            splitWords
          >
            Selected Projects
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={200}
          >
            Innovative aerospace engineering projects showcasing technical excellence and real-world impact
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Project Cards (65%) */}
            <div className="lg:col-span-8 space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden cursor-pointer transition-all duration-500 bg-gray-900/50 rounded-xl border ${
                    hoveredIndex === index
                      ? "transform -translate-y-2 border-blue-500 bg-gray-800"
                      : "hover:transform hover:-translate-y-1 hover:border-blue-400 border-gray-800"
                  } ${project.featured ? 'ring-2 ring-blue-500/20' : ''}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/50 animate-pulse">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="p-8 space-y-6">
                    {/* Project Title */}
                    <div className="flex items-start justify-between">
                      <AnimatedText 
                        className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
                        delay={300 + index * 100}
                      >
                        {project.title}
                      </AnimatedText>
                      <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Description */}
                    <AnimatedText 
                      className="text-gray-300 leading-relaxed"
                      delay={400 + index * 100}
                    >
                      {expandedIndex === index ? project.fullDescription : project.shortDescription}
                    </AnimatedText>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle case study navigation
                        }}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700"
                      >
                        View Case Study
                      </button>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle source code navigation
                        }}
                        className="px-6 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 hover:border-gray-500"
                      >
                        Source Code
                      </button>
                    </div>

                    {/* Impact Metric */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <AnimatedText 
                          className="text-sm text-gray-400 font-medium"
                          delay={500 + index * 100}
                        >
                          <span className="text-white">Impact:</span> {project.impact}
                        </AnimatedText>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Visual Accent Panel (35%) */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {/* Innovation Card */}
                <div className="bg-gray-900/50 rounded-xl border border-blue-500/20 overflow-hidden">
                  <div className="p-6 space-y-6">
                    <AnimatedText 
                      className="text-xl font-bold text-blue-400"
                      delay={600}
                    >
                      Innovation Through Code
                    </AnimatedText>
                    <AnimatedText 
                      className="text-gray-300 text-sm leading-relaxed"
                      delay={700}
                    >
                      Each project represents a unique challenge at the intersection of aerospace engineering and software development, pushing the boundaries of what's possible.
                    </AnimatedText>

                    {/* Abstract Orbital Graphic */}
                    <div className="relative h-48 flex items-center justify-center">
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <circle
                            cx="100"
                            cy="100"
                            r="60"
                            fill="none"
                            stroke="rgba(59, 130, 246, 0.2)"
                            strokeWidth="1"
                            className="animate-spin"
                            style={{ animationDuration: "20s" }}
                          />
                          <circle
                            cx="100"
                            cy="100"
                            r="40"
                            fill="none"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="1"
                            className="animate-spin"
                            style={{
                              animationDuration: "15s",
                              animationDirection: "reverse",
                            }}
                          />
                          <circle
                            cx="100"
                            cy="100"
                            r="20"
                            fill="none"
                            stroke="rgba(59, 130, 246, 0.5)"
                            strokeWidth="2"
                          />
                          <circle
                            cx="100"
                            cy="60"
                            r="3"
                            fill="rgba(59, 130, 246, 0.8)"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Stats Card */}
                  <div className="bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="p-6 space-y-4">
                      <AnimatedText 
                        className="text-lg font-semibold text-white"
                        delay={800}
                      >
                        Project Metrics
                      </AnimatedText>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Total Projects</span>
                          <AnimatedText 
                            className="text-blue-400 font-bold"
                            delay={900}
                          >
                            {projects.length}
                          </AnimatedText>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Open Source</span>
                          <AnimatedText 
                            className="text-blue-400 font-bold"
                            delay={1000}
                          >
                            100%
                          </AnimatedText>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Avg. Impact</span>
                          <AnimatedText 
                            className="text-white font-bold"
                            delay={1100}
                          >
                            High
                          </AnimatedText>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection 
        direction="center" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={400}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={1200}
              splitWords
            >
              Building Tomorrow's Aerospace Solutions
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8"
              delay={1300}
            >
              Each project represents a step forward in aerospace innovation, combining cutting-edge technology 
              with practical engineering solutions to address real-world challenges.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Discuss Projects
              </Link>
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
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

export default ProjectsPage;
