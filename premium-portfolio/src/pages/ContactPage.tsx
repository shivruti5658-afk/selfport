import React from 'react';
import { Link } from 'react-router-dom';
import AerospaceBackground from '../components/ui/AerospaceBackground';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "shivam.kumar.virtual@gmail.com",
      link: "mailto:shivam.kumar.virtual@gmail.com",
      icon: "📧"
    },
    {
      type: "Phone",
      value: "+91 8825251672",
      link: "tel:+918825251672",
      icon: "📱"
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/shivamkumar",
      link: "https://www.linkedin.com/in/shivam-kumar1672/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNzY%2BYtmCQS%2B4HCeD0sgB6Q%3D%3D",
      icon: "💼"
    },
    {
      type: "Location",
      value: "Dehradun, India",
      link: "#",
      icon: "📍"
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            delay={0}
            splitWords
          >
            Contact & Professional Links
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0}
          >
            Let's connect and discuss opportunities in aerospace engineering, research, and innovation
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Contact Information & Form */}
      <AnimatedSection 
        direction="up" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <AnimatedText 
                className="text-3xl font-bold mb-8 text-blue-400"
                delay={0}
              >
                Get In Touch
              </AnimatedText>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">{contact.icon}</div>
                      <div className="flex-1">
                        <AnimatedText 
                          className="text-lg font-semibold text-white mb-1"
                          delay={0}
                        >
                          {contact.type}
                        </AnimatedText>
                        <a 
                          href={contact.link}
                          className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                          target={contact.type === 'Email' ? '_self' : '_blank'}
                          rel={contact.type === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <AnimatedText 
                className="text-3xl font-bold mb-8 text-purple-400"
                delay={0}
              >
                Send Message
              </AnimatedText>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Professional Networks */}
      <AnimatedSection 
        direction="left" 
        className="text-white px-4 sm:px-6 lg:px-8 py-20"
        delay={0}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold mb-8 text-green-400 text-center"
            delay={0}
          >
            Professional Networks
          </AnimatedText>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">🔬</div>
              <AnimatedText 
                className="text-xl font-bold text-white mb-2"
                delay={0}
              >
                ResearchGate
              </AnimatedText>
              <a
                href="https://www.researchgate.net/profile/Shivam-Kumar-1672"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                View Profile
              </a>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <AnimatedText 
                className="text-xl font-bold text-white mb-2"
                delay={0}
              >
                GitHub
              </AnimatedText>
              <a
                href="https://github.com/shivamkumar1672"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">📚</div>
              <AnimatedText 
                className="text-xl font-bold text-white mb-2"
                delay={0}
              >
                Academic Profile
              </AnimatedText>
              <a
                href="https://scholar.google.com/citations?user=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                View Publications
              </a>
            </div>
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
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-12">
            <AnimatedText 
              className="text-3xl font-bold mb-6 text-white"
              delay={0}
              splitWords
            >
              Let's Build Something Amazing Together
            </AnimatedText>
            <AnimatedText 
              className="text-xl text-gray-300 mb-8"
              delay={0}
            >
              I'm always excited to collaborate on challenging aerospace engineering projects, research initiatives, and innovative technological solutions. Let's discuss how we can work together to advance aerospace technology.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Back to Home
              </Link>
              <Link
                to="/research-publications"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
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

export default ContactPage;
