import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';
import { pageLoadVariants, staggeredChildrenVariants, hoverVariants, getAnimationProps, ANIMATION_CONSTANTS } from '../lib/animations';

const HomePage: React.FC = () => {

  return (
    <AerospaceBackground>
      {/* Hero Section - Full Viewport Height */}
      <AnimatedSection 
        direction="center" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full"
          {...getAnimationProps(pageLoadVariants)}
        >
          {/* Premium Main Headline */}
          <motion.div 
            className="space-y-8 mb-12"
            variants={staggeredChildrenVariants}
          >
            <motion.div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-blue-600 blur-3xl opacity-20 animate-pulse"></div>
              <AnimatedText 
                className="relative text-6xl md:text-5xl lg:text-8xl font-bold text-white leading-tight cursor-default tracking-tight mt-12"
                delay={100}
              >
                Shivam Kumar
              </AnimatedText>
            </motion.div>
            
            {/* Professional Title */}
            <motion.div className="space-y-4" variants={staggeredChildrenVariants}>
              <AnimatedText 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-400 tracking-wide"
                delay={200}
              >
                Aerospace Engineering Undergraduate
              </AnimatedText>
              <AnimatedText 
                className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-400 tracking-wide"
                delay={300}
              >
                Propulsion & UAV Systems | Research-Oriented Technologist
              </AnimatedText>
            </motion.div>
            
            {/* Professional Tagline */}
            <AnimatedText 
              className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-light"
              delay={400}
            >
              Aerospace engineering student with hands-on experience in launch vehicle wind analysis, 
              propulsion research, UAV systems, and aerospace computation.
            </AnimatedText>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 mb-16 justify-center"
            variants={staggeredChildrenVariants}
          >
            <motion.div variants={staggeredChildrenVariants}>
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg shadow-lg inline-block"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
            
            <motion.div variants={staggeredChildrenVariants}>
              <Link
                to="/research-publications"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg inline-block"
              >
                <span className="relative z-10">View Research & Publications</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
            variants={staggeredChildrenVariants}
          >
            <motion.div className="text-center" variants={staggeredChildrenVariants}>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-sm text-gray-400">Academic Performance</div>
            </motion.div>
            <motion.div className="text-center" variants={staggeredChildrenVariants}>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-sm text-gray-400">Research Projects</div>
            </motion.div>
            <motion.div className="text-center" variants={staggeredChildrenVariants}>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-sm text-gray-400">Patents Filed</div>
            </motion.div>
            <motion.div className="text-center" variants={staggeredChildrenVariants}>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">ISRO</div>
              <div className="text-sm text-gray-400">Research Internship</div>
            </motion.div>
          </motion.div>

          {/* Key Expertise Areas */}
          <motion.div className="max-w-4xl mx-auto" variants={staggeredChildrenVariants}>
            <motion.h3 className="text-xl font-semibold text-white mb-6" variants={staggeredChildrenVariants}>Core Expertise</motion.h3>
            <motion.div className="flex flex-wrap justify-center gap-3" variants={staggeredChildrenVariants}>
              {[
                "Rocket Propulsion",
                "Aerodynamics", 
                "UAV Systems",
                "CFD Analysis",
                "Structural Analysis",
                "Space Vehicle Design"
              ].map((skill, index) => (
                <motion.span 
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400"
                  variants={staggeredChildrenVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <p className="text-gray-400 text-sm mb-2">Scroll to explore more</p>
          <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </AnimatedSection>

      {/* Additional Content Section */}
      <AnimatedSection 
        direction="up" 
        className="py-20 px-6"
        delay={100}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
            delay={200}
            splitWords
          >
            Professional Overview
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center"
            delay={300}
          >
            A highly motivated Aerospace Engineering undergraduate with exceptional academic performance 
            and practical experience in rocket propulsion, aerodynamics, UAV systems, and space vehicle analysis.
          </AnimatedText>

          <motion.div 
            className="grid gap-8 md:grid-cols-3 mb-16"
            variants={staggeredChildrenVariants}
          >
            <motion.div 
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center"
              variants={staggeredChildrenVariants}
              whileHover={{ scale: 1.02, borderColor: 'rgb(59, 130, 246)' }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Research Excellence</h3>
              <p className="text-gray-300">Cutting-edge research in propulsion systems and aerospace technology with multiple publications and patents.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center"
              variants={staggeredChildrenVariants}
              whileHover={{ scale: 1.02, borderColor: 'rgb(168, 85, 247)' }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
            >
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-white mb-3">Industry Experience</h3>
              <p className="text-gray-300">Hands-on experience at ISRO's Vikram Sarabhai Space Centre and leading aerospace organizations.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center"
              variants={staggeredChildrenVariants}
              whileHover={{ scale: 1.02, borderColor: 'rgb(250, 204, 21)' }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-3">Technical Innovation</h3>
              <p className="text-gray-300">Advanced computational skills and software development expertise for aerospace applications.</p>
            </motion.div>
          </motion.div>

          <motion.div className="text-center" variants={staggeredChildrenVariants}>
            <Link
              to="/about"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg shadow-lg"
              {...hoverVariants}
            >
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Key Achievements Section */}
      <AnimatedSection 
        direction="right" 
        className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center"
            delay={300}
            splitWords
          >
            Key Achievements
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
            delay={400}
          >
            Recognized excellence in academics, research, and innovation
          </AnimatedText>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">3</div>
              <div className="text-lg font-semibold text-white mb-2">Patents Filed</div>
              <div className="text-sm text-gray-400">Innovative aerospace and IoT solutions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">5+</div>
              <div className="text-lg font-semibold text-white mb-2">Publications</div>
              <div className="text-sm text-gray-400">Peer-reviewed research papers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-4">15+</div>
              <div className="text-lg font-semibold text-white mb-2">Projects</div>
              <div className="text-sm text-gray-400">Aerospace and software projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-4">95%</div>
              <div className="text-lg font-semibold text-white mb-2">Academic Score</div>
              <div className="text-sm text-gray-400">Consistent excellence</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects Section */}
      <AnimatedSection 
        direction="left" 
        className="py-20 px-6"
        delay={300}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center"
            delay={400}
            splitWords
          >
            Featured Projects
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
            delay={500}
          >
            Highlighting groundbreaking work in aerospace engineering and technology
          </AnimatedText>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-xs border border-green-400/30 mr-3">
                  ISRO VSSC
                </span>
                <span className="text-sm text-gray-400">2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Wind Gust Analysis</h3>
              <p className="text-gray-300 mb-4">High-altitude wind characterization for launch vehicle trajectory stability analysis at ISRO's Vikram Sarabhai Space Centre.</p>
              <Link to="/research-publications" className="text-green-400 hover:text-green-300 text-sm font-medium">
                View Project →
              </Link>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs border border-blue-400/30 mr-3">
                  Research
                </span>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hybrid Rocket Engine</h3>
              <p className="text-gray-300 mb-4">Numerical analysis of hybrid rocket engines using paraffin-based fuels with LOX/N₂O oxidizers for optimized performance.</p>
              <Link to="/research-publications" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Project →
              </Link>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-purple-900/50 text-purple-400 rounded-full text-xs border border-purple-400/30 mr-3">
                  Innovation
                </span>
                <span className="text-sm text-gray-400">2023</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Crop Protection</h3>
              <p className="text-gray-300 mb-4">Published patent for AI & IoT-based anti-crop damage system using computer vision and automated intervention mechanisms.</p>
              <Link to="/research-publications" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View Patent →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/miscellaneous-projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills & Expertise Section */}
      <AnimatedSection 
        direction="up" 
        className="py-20 px-6 bg-gradient-to-l from-blue-900/20 to-purple-900/20"
        delay={400}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center"
            delay={500}
            splitWords
          >
            Technical Expertise
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
            delay={600}
          >
            Comprehensive skill set spanning aerospace engineering and software development
          </AnimatedText>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                Aerospace & Engineering
              </h3>
              <div className="grid gap-3 ml-16">
                {["ANSYS CFD & FEA", "COMSOL Multiphysics", "XFLR5", "OpenRocket", "MATLAB/Simulink", "SolidWorks", "CATIA", "Fusion 360"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">💻</span>
                Software & Programming
              </h3>
              <div className="grid gap-3 ml-16">
                {["Python (NumPy, SciPy)", "JavaScript/TypeScript", "React/Node.js", "HTML/CSS", "Arduino IDE", "PCB Design", "EasyEDA", "AWS Cloud"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection 
        direction="center" 
        className="py-20 px-6"
        delay={500}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-900/20 to-blue-900/20 border border-yellow-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-4xl font-bold mb-6 text-white text-center"
              delay={600}
              splitWords
            >
              Ready to Collaborate?
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8 leading-relaxed text-center"
              delay={700}
            >
              I'm always open to discussing aerospace engineering challenges, research opportunities, 
              and innovative projects. Let's connect and explore how we can work together to advance 
              aerospace technology.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                Get In Touch
              </Link>
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
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

export default HomePage;
