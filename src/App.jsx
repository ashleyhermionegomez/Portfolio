import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import ResumeModal from './components/ResumeModal';
import BackToTop from './components/BackToTop';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState('');

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenContactWithService = (serviceName = '') => {
    setContactInitialService(serviceName);
    setIsContactOpen(true);
  };

  // Smooth scroll for all anchor links
  React.useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white font-sans relative">
      
      {/* Global Header */}
      <Header
        onOpenContact={() => handleOpenContactWithService('')}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        <Hero
          onOpenContact={() => handleOpenContactWithService('')}
          onOpenResume={() => setIsResumeOpen(true)}
          scrollToPortfolio={scrollToPortfolio}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <PortfolioGrid
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <AboutSection
          onOpenContact={() => handleOpenContactWithService('')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <SkillsSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenContact={() => handleOpenContactWithService('')}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        onInquire={(service) => handleOpenContactWithService(service)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setContactInitialService('');
        }}
        initialService={contactInitialService}
      />

      {/* Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Back to Top Button */}
      <BackToTop />

    </div>
  );
}
