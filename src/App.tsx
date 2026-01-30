import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/ui/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ResearchPublicationsPage from './pages/ResearchPublicationsPage';
import SkillsPage from './pages/SkillsPage';
import InterestsPage from './pages/InterestsPage';
import MiscellaneousProjectsPage from './pages/MiscellaneousProjectsPage';
import ContactPage from './pages/ContactPage';
import { routeVariants, routeTransition } from './lib/animations';

const AppLayout = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="w-full">
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route 
              index 
              element={
                <motion.div
                  key="home"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <HomePage />
                </motion.div>
              } 
            />
            <Route 
              path="about" 
              element={
                <motion.div
                  key="about"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <AboutPage />
                </motion.div>
              } 
            />
            <Route 
              path="education" 
              element={
                <motion.div
                  key="education"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <EducationPage />
                </motion.div>
              } 
            />
            <Route 
              path="experience" 
              element={
                <motion.div
                  key="experience"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <ExperiencePage />
                </motion.div>
              } 
            />
            <Route 
              path="research-publications" 
              element={
                <motion.div
                  key="research-publications"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <ResearchPublicationsPage />
                </motion.div>
              } 
            />
            <Route 
              path="skills" 
              element={
                <motion.div
                  key="skills"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <SkillsPage />
                </motion.div>
              } 
            />
            <Route 
              path="interests" 
              element={
                <motion.div
                  key="interests"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <InterestsPage />
                </motion.div>
              } 
            />
            <Route 
              path="miscellaneous-projects" 
              element={
                <motion.div
                  key="miscellaneous-projects"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <MiscellaneousProjectsPage />
                </motion.div>
              } 
            />
            <Route 
              path="contact" 
              element={
                <motion.div
                  key="contact"
                  variants={routeVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={routeTransition}
                >
                  <ContactPage />
                </motion.div>
              } 
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
