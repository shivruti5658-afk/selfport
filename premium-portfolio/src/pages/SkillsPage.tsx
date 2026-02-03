import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';
import AnimatedSkillBar from '../components/ui/AnimatedSkillBar';

interface Skill {
  name: string;
  level: number;
  logo?: string | null;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

const SkillsPage: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Aerospace Engineering",
      description: "Core aerospace engineering disciplines and analysis tools",
      skills: [
        { name: "Aerodynamics & CFD", level: 85 },
        { name: "Aircraft Structures & FEA", level: 80 },
        { name: "Flight Dynamics & Control", level: 78 },
        { name: "Propulsion Systems", level: 75 },
        { name: "Aircraft Design & Performance", level: 70 },
      ],
    },
    {
      category: "Engineering Software",
      description: "Professional engineering software and computational tools",
      skills: [
        { name: "ANSYS Fluent & CFD", level: 82, logo: null },
        { name: "ANSYS Mechanical", level: 78, logo: null },
        { name: "MATLAB & Simulink", level: 85, logo: null },
        { name: "SolidWorks", level: 80, logo: "SOLIDWORKS_LOGO.jpg" },
        { name: "CATIA", level: 75, logo: "CATIA_LOGO.jpg" },
        { name: "AutoCAD", level: 70, logo: "AUTOCAD_LOGO.jpg" },
      ],
    },
    {
      category: "Programming & Analysis",
      description: "Technical programming and data analysis skills",
      skills: [
        { name: "Python for Engineering", level: 88 },
        { name: "MATLAB Programming", level: 85 },
        { name: "Data Analysis & Visualization", level: 82 },
        { name: "C++ Programming", level: 65 },
      ],
    },
    {
      category: "Web Development",
      description: "Modern web and application development skills",
      skills: [
        { name: "HTML/CSS/JavaScript", level: 75 },
        { name: "React & Frontend", level: 70 },
        { name: "Node.js & Backend", level: 68 },
        { name: "Responsive Design", level: 78 },
      ],
    },
    {
      category: "Research & Laboratory",
      description: "Experimental methods and research capabilities",
      skills: [
        { name: "Wind Tunnel Testing", level: 75 },
        { name: "Technical Report Writing", level: 85 },
        { name: "Data Analysis & Interpretation", level: 80 },
        { name: "Experimental Design", level: 70 },
      ],
    },
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent"
            delay={0}
            splitWords
          >
            Technical Skills
          </AnimatedText>
          <AnimatedText 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Comprehensive skill set spanning aerospace engineering and software development
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Skills Grid */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-slate-600/50 transition-all duration-300"
              >
                <AnimatedText 
                  className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6"
                  delay={0}
                >
                  {category.category}
                </AnimatedText>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      {skill.logo && (
                        <img 
                          src={`/src/assets/${skill.logo}`} 
                          alt={`${skill.name} Logo`} 
                          className="w-5 h-5 mr-2 rounded object-contain"
                        />
                      )}
                      <div className="flex-1">
                        <AnimatedSkillBar
                          skill={skill.name}
                          level={skill.level}
                          color={categoryIndex === 0 ? "blue" : categoryIndex === 1 ? "cyan" : categoryIndex === 2 ? "purple" : categoryIndex === 3 ? "green" : "yellow"}
                          delay={400 + categoryIndex * 100 + skillIndex * 50}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Academic Projects Section */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-400 text-center"
            delay={0}
          >
            Key Academic Projects
          </AnimatedText>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-slate-600/50 transition-all duration-300">
              <AnimatedText 
                className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3"
                delay={0}
              >
                Aircraft Wing Analysis
              </AnimatedText>
              <AnimatedText 
                className="text-gray-300 text-sm leading-relaxed"
                delay={0}
              >
                Structural and aerodynamic analysis of aircraft wing using ANSYS CFD and FEA for B.Tech coursework.
              </AnimatedText>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-slate-600/50 transition-all duration-300">
              <AnimatedText 
                className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3"
                delay={0}
              >
                UAV Design Project
              </AnimatedText>
              <AnimatedText 
                className="text-gray-300 text-sm leading-relaxed"
                delay={0}
              >
                Design and optimization of single and dual-propeller UAV systems for enhanced performance.
              </AnimatedText>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-slate-600/50 transition-all duration-300">
              <AnimatedText 
                className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3"
                delay={0}
              >
                Rocket Parameter Tool
              </AnimatedText>
              <AnimatedText 
                className="text-gray-300 text-sm leading-relaxed"
                delay={0}
              >
                Developed computational tool for rocket performance calculations using Python and MATLAB.
              </AnimatedText>
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
          <div className="bg-gradient-to-r from-yellow-900/20 to-blue-900/20 border border-yellow-400/30 rounded-lg p-6 sm:p-8 lg:p-12">
            <AnimatedText 
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white"
              delay={0}
              splitWords
            >
              Ready to Apply These Skills
            </AnimatedText>
            <AnimatedText 
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8"
              delay={0}
            >
              I'm always looking for opportunities to apply my technical expertise to challenging aerospace engineering projects.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                Get In Touch
              </Link>
              <Link
                to="/experience"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default SkillsPage;
