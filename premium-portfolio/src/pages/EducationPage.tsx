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
      institution: "A.N. College, Patna",
      status: "Completed",
      performance: "67.4%",
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
    },
    {
      degree: "Secondary School Examination (SSE)",
      institution: "D.A.V Public School",
      status: "Completed",
      performance: "88%",
      duration: "2017 - 2019",
      description: "Comprehensive secondary education with strong foundation in sciences, mathematics, and languages, preparing for higher secondary education in science stream.",
      highlights: [
        "Strong academic performance with 88% aggregate",
        "Excellent foundation in science and mathematics",
        "Active participation in co-curricular activities",
        "Development of analytical and problem-solving skills"
      ],
      keyCourses: [
        "Science",
        "Mathematics",
        "Social Studies",
        "English",
        "Hindi/Sanskrit",
        "Computer Applications"
      ]
    }
  ];

  const achievements = [
    {
      title: "Program Management Excellence Award",
      description: "Awarded medal for exceptional leadership and management of programs as core managing committee member.",
      year: "2024"
    },
    {
      title: "Research Publication",
      description: "Multiple patents filed for innovative aerospace and IoT-based systems.",
      year: "2022-2025"
    },
    {
      title: "Academic Scholarship",
      description: "Merit-based scholarship in engineering program.",
      year: "2022-2024"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            delay={0}
          >
            Education
          </AnimatedText>
          <AnimatedText 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Academic foundation and educational journey in aerospace engineering
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Education Timeline */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-400 text-center"
            delay={0}
          >
            Academic Journey
          </AnimatedText>
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`relative ${index === 0 ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30' : 'bg-gray-900/50 border border-gray-800'} rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-400/50 transition-all duration-300`}
              >
                {/* Status Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                        : 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
                    }`}>
                      {edu.status}
                    </span>
                    {index === 0 && (
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-yellow-900/50 text-yellow-400 rounded-full text-xs border border-yellow-400/30">
                        PRIMARY
                      </span>
                    )}
                  </div>
                  <div className="text-right sm:text-left">
                    <AnimatedText 
                      className="text-xl sm:text-2xl font-bold text-blue-400"
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
                <div className="mb-4 sm:mb-6">
                  <AnimatedText 
                    className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2"
                    delay={0}
                  >
                    {edu.degree}
                  </AnimatedText>
                  <AnimatedText 
                    className="text-base sm:text-lg text-blue-400 mb-2 sm:mb-4"
                    delay={0}
                  >
                    {edu.institution}
                  </AnimatedText>
                  <AnimatedText 
                    className="text-gray-300 leading-relaxed"
                    delay={0}
                  >
                    {edu.description}
                  </AnimatedText>
                </div>

                {/* Highlights */}
                <div className="mb-4 sm:mb-6">
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-2 sm:mb-3"
                    delay={0}
                  >
                    Key Highlights
                  </AnimatedText>
                  <div className="grid gap-2 md:grid-cols-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
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

                {/* Key Courses */}
                <div>
                  <AnimatedText 
                    className="text-lg font-semibold text-white mb-2 sm:mb-3"
                    delay={0}
                  >
                    Key Courses
                  </AnimatedText>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    {edu.keyCourses.map((course, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-purple-900/50 text-purple-400 rounded-full text-xs sm:text-sm border border-purple-400/30"
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
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-purple-400 text-center"
            delay={0}
          >
            Academic Achievements
          </AnimatedText>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🏆</span>
                  </div>
                  <span className="text-sm text-gray-400">{achievement.year}</span>
                </div>
                <AnimatedText 
                  className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3"
                  delay={0}
                >
                  {achievement.title}
                </AnimatedText>
                <AnimatedText 
                  className="text-gray-300"
                  delay={0}
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
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-6 sm:p-8 lg:p-12">
            <AnimatedText 
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white"
              delay={0}
            >
              Continuous Learning & Growth
            </AnimatedText>
            <AnimatedText 
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8"
              delay={0}
            >
              My educational journey is complemented by continuous learning through research, projects, and professional development in aerospace engineering.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/experience"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                View Experience
              </Link>
              <Link
                to="/research-publications"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
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
