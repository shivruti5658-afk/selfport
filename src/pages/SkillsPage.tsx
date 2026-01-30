import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';
import AnimatedSkillBar from '../components/ui/AnimatedSkillBar';

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      category: "Aerospace Engineering",
      skills: [
        { name: "ANSYS Fluent", level: 90 },
        { name: "ANSYS Mechanical", level: 85 },
        { name: "MATLAB", level: 88 },
        { name: "SolidWorks", level: 82 },
        { name: "CATIA", level: 78 },
        { name: "Python", level: 92 },
      ],
    },
    {
      category: "Software Development",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 93 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "HTML/CSS", level: 96 },
        { name: "Git", level: 88 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
      ],
    },
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent"
            delay={100}
            splitWords
          >
            Technical Skills
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={200}
          >
            Comprehensive skill set spanning aerospace engineering and software development
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Skills Grid */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300"
              >
                <AnimatedText 
                  className="text-2xl font-bold text-white mb-6"
                  delay={300 + categoryIndex * 100}
                >
                  {category.category}
                </AnimatedText>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <AnimatedSkillBar
                      key={skillIndex}
                      skill={skill.name}
                      level={skill.level}
                      color="cyan"
                      delay={400 + categoryIndex * 100 + skillIndex * 50}
                    />
                  ))}
                </div>
              </div>
            ))}
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
          <div className="bg-gradient-to-r from-yellow-900/20 to-blue-900/20 border border-yellow-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={500}
              splitWords
            >
              Ready to Apply These Skills
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8"
              delay={600}
            >
              I'm always looking for opportunities to apply my technical expertise to challenging aerospace engineering projects.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                Get In Touch
              </Link>
              <Link
                to="/experience"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
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
