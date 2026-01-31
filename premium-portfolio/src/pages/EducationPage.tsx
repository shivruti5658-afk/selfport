import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const EducationPage: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology – Aerospace Engineering",
      institution: "Uttaranchal University",
      status: "Pursuing",
      performance: "~95%",
      duration: "2021 - Present",
      description: "Comprehensive undergraduate program covering aerodynamics, propulsion systems, space mechanics, and aerospace structures with strong emphasis on computational methods and practical applications.",
      highlights: [
        "Exceptional academic performance with ~95% aggregate",
        "Advanced coursework in CFD, FEA, and propulsion systems",
        "Active participation in research projects and technical competitions",
        "Leadership roles in technical clubs and societies"
      ],
      keyCourses: [
        "Computational Fluid Dynamics",
        "Aerodynamics",
        "Rocket Propulsion",
        "Space Mechanics",
        "Aerospace Structures",
        "Flight Dynamics"
      ]
    },
    {
      degree: "Intermediate of Science (I.Sc.)",
      institution: "A.N. College",
      status: "Completed",
      performance: "92%",
      duration: "2019 - 2021",
      description: "Foundation in physics, chemistry, and mathematics with focus on engineering preparation and advanced problem-solving skills.",
      highlights: [
        "Strong foundation in physical sciences and mathematics",
        "Advanced problem-solving and analytical skills",
        "Preparation for competitive engineering entrance exams",
        "Active participation in science exhibitions and competitions"
      ],
      keyCourses: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "English"
      ]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence Award",
      description: "Awarded for outstanding performance in aerospace engineering coursework.",
      year: "2023"
    },
    {
      title: "Research Publication",
      description: "Multiple patents filed for innovative aerospace and IoT-based systems.",
      year: "2022-2023"
    },
    {
      title: "Academic Scholarship",
      description: "Merit-based scholarship in engineering program.",
      year: "2021-2024"
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
            delay={50}
          >
            Education
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={100}
          >
            Academic foundation and educational journey in aerospace engineering
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Education Timeline */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-blue-400 text-center"
            delay={150}
          >
            Academic Journey
          </AnimatedText>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`relative ${index === 0 ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30' : 'bg-gray-900/50 border border-gray-800'} rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300`}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                        : 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
                    }`}>
                      {edu.status}
                    </span>
                    {index === 0 && (
                      <span className="px-3 py-1 bg-yellow-900/50 text-yellow-400 rounded-full text-xs border border-yellow-400/30">
                        PRIMARY
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <AnimatedText 
                      className="text-2xl font-bold text-blue-400"
                      delay={200 + index * 50}
                    >
                      {edu.performance}
                    </AnimatedText>
                    <AnimatedText 
                      className="text-sm text-gray-400"
                      delay={250 + index * 50}
                    >
                      {edu.duration}
                    </AnimatedText>
                  </div>
                </div>

                {/* Degree and Institution */}
                <div className="mb-6">
                  <AnimatedText 
                    className="text-2xl font-bold text-white mb-2"
                    delay={300 + index * 50}
                  >
                    {edu.degree}
                  </AnimatedText>
                  <AnimatedText 
                    className="text-lg text-blue-400 mb-4"
                    delay={350 + index * 50}
                  >
                    {edu.institution}
                  </AnimatedText>
                  <AnimatedText 
                    className="text-gray-300 leading-relaxed"
                    delay={400 + index * 50}
                  >
                    {edu.description}
                  </AnimatedText>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-3"
                    delay={450 + index * 50}
                  >
                    Key Highlights
                  </AnimatedText>
                  <div className="grid gap-2 md:grid-cols-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <AnimatedText 
                          className="text-gray-300"
                          delay={500 + index * 50 + idx * 25}
                        >
                          {highlight}
                        </AnimatedText>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Courses */}
                <div>
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-3"
                    delay={550 + index * 50}
                  >
                    Key Courses
                  </AnimatedText>
                  <div className="flex flex-wrap gap-2">
                    {edu.keyCourses.map((course, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-purple-900/50 text-purple-400 rounded-full text-sm border border-purple-400/30"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-purple-400 text-center"
            delay={250}
          >
            Academic Achievements
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <span className="text-sm text-gray-400">{achievement.year}</span>
                </div>
                <AnimatedText 
                  className="text-xl font-bold text-white mb-3"
                  delay={600 + index * 100}
                >
                  {achievement.title}
                </AnimatedText>
                <AnimatedText 
                  className="text-gray-300"
                  delay={700 + index * 100}
                >
                  {achievement.description}
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection 
        direction="center" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={250}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={300}
            >
              Continuous Learning & Growth
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8"
              delay={350}
            >
              My educational journey is complemented by continuous learning through research, projects, and professional development in aerospace engineering.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experience"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                View Experience
              </Link>
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Research Work
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default EducationPage;
