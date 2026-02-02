import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const MiscellaneousProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "UAV Propulsion Systems",
      category: "Aerospace Engineering",
      duration: "2025",
      description: "Design and analysis of UAV propulsion systems including single and dual propeller configurations. Optimized thrust-to-weight ratios and efficiency metrics.",
      technologies: ["SolidWorks", "ANSYS", "MATLAB", "CFD Analysis"],
      features: ["Propeller design", "Thrust optimization", "Efficiency analysis", "Structural validation"]
    },
    {
      title: "Rocket Parameter Calculation Tool",
      category: "Aerospace Software",
      duration: "2024",
      description: "Computational tool for calculating rocket performance parameters including thrust, specific impulse, delta-v, and trajectory characteristics. Implemented GUI for user-friendly operation.",
      technologies: ["Python", "Tkinter", "NumPy", "Matplotlib"],
      features: ["Performance calculations", "Trajectory analysis", "Data visualization", "Export capabilities"]
    },
    {
      title: "Mobile App Development",
      category: "Software Development",
      duration: "2022-2023",
      description: "Cross-platform mobile applications for various use cases including utility tools and educational apps. Focused on user experience and performance optimization.",
      technologies: ["React Native", "JavaScript", "Firebase", "REST APIs"],
      features: ["Cross-platform", "Real-time data", "Offline support", "Modern UI"]
    },
    {
      title: "Arduino Object-Following Car",
      category: "Robotics & Automation",
      duration: "2022",
      description: "Autonomous vehicle system using Arduino microcontroller with ultrasonic sensors for object detection and tracking. Implemented PID control for smooth movement and obstacle avoidance.",
      technologies: ["Arduino IDE", "Ultrasonic Sensors", "PID Control", "DC Motors"],
      features: ["Real-time object tracking", "Obstacle avoidance", "Speed control", "LED indicators"]
    },
    {
      title: "Radar System Using Arduino",
      category: "Electronics & Sensing",
      duration: "2022",
      description: "Compact radar system prototype using ultrasonic sensors and servo motor for 180-degree scanning. Developed visualization interface for distance mapping and object detection.",
      technologies: ["Arduino", "Ultrasonic Sensors", "Servo Motors", "Processing Visualization"],
      features: ["180-degree scanning", "Distance mapping", "Real-time visualization", "Alert system"]
    },
    
    
    
    {
      title: "Digital Marketing & Web Solutions",
      category: "Web Development",
      duration: "2021-2022",
      description: "Full-stack web development projects including e-commerce platforms, content management systems, and digital marketing tools with SEO optimization.",
      technologies: ["HTML/CSS/JavaScript", "React", "Node.js", "MongoDB"],
      features: ["Responsive design", "SEO optimization", "Performance analytics", "Content management"]
    }
  ];

  const technicalSkills = [
    {
      icon: "",
      title: "Hardware & Electronics",
      description: "Arduino & Embedded Systems, Sensor Integration, Circuit Design, PCB Development"
    },
    {
      icon: "",
      title: "Software Development",
      description: "Full-Stack Web Development, Mobile Application Development, Python Programming, Database Management"
    },
    {
      icon: "",
      title: "Aerospace Applications",
      description: "UAV System Design, Propulsion Analysis, Computational Tools, Performance Optimization"
    },
    {
      icon: "",
      title: "Communication & Research Presentation",
      description: "Technical Documentation, Research Papers, Conference Presentations, Data Visualization"
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            delay={0}
            splitWords
          >
            Miscellaneous Projects & Technical Work
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Diverse technical projects showcasing versatility across aerospace engineering, 
            robotics, software development, and digital innovation.
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-400 text-center"
            delay={0}
          >
            Featured Projects
          </AnimatedText>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-green-400/50 transition-all duration-300 h-full"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-xs border border-green-400/30">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-400">{project.duration}</span>
                  </div>
                  <AnimatedText 
                    className="text-xl font-bold text-white mb-3"
                    delay={0}
                  >
                    {project.title}
                  </AnimatedText>
                  <AnimatedText 
                    className="text-gray-300 leading-relaxed mb-4"
                    delay={0}
                  >
                    {project.description}
                  </AnimatedText>
                  <div className="mb-4">
                    <AnimatedText 
                      className="text-sm font-semibold text-blue-400 mb-2"
                      delay={0}
                    >
                      Technologies
                    </AnimatedText>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-900/50 text-blue-400 rounded text-xs border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <AnimatedText 
                      className="text-sm font-semibold text-purple-400 mb-2"
                      delay={0}
                    >
                      Key Features
                    </AnimatedText>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-purple-900/50 text-purple-400 rounded text-xs border border-purple-400/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technical Skills Section */}
      <AnimatedSection 
        direction="right" 
        className="text-white px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-400 text-center"
            delay={0}
          >
            Technical Expertise
          </AnimatedText>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 place-items-center">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <AnimatedText 
                  className={`text-lg font-bold mb-2 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-400 to-purple-500' :
                    index === 1 ? 'bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600' :
                    index === 2 ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-600' :
                    'bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600'
                  } bg-clip-text text-transparent`}
                  delay={0}
                >
                  {skill.title}
                </AnimatedText>
                <AnimatedText 
                  className="text-gray-300"
                  delay={0}
                >
                  {skill.description}
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
        delay={0}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={0}
              splitWords
            >
              Continuous Innovation & Learning
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8"
              delay={0}
            >
              I'm constantly exploring new technologies and working on innovative projects that bridge 
              the gap between aerospace engineering and cutting-edge software development.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Discuss Projects
              </Link>
              <Link
                to="/skills"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                View Skills
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </AerospaceBackground>
  );
};

export default MiscellaneousProjectsPage;
