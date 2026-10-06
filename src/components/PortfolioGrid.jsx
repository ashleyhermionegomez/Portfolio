import React, { useState, useMemo } from 'react';
import { categories, portfolioProjects } from '../data/portfolioData';
import { ExternalLink, Layers, Sparkles, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PortfolioGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9; // Show 9 projects per page (3x3 grid)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    // Smooth scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const offset = 100;
      const elementPosition = portfolioSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-purple-900/40 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Works & Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A showcase of personal projects, brand design concepts, social media graphics, presentation layouts, and visual media.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const projectCount = cat.id === 'all' 
              ? portfolioProjects.length 
              : portfolioProjects.filter(p => p.category === cat.id).length;
            
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 scale-105 transform'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-purple-900/50'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {projectCount}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 animate-slide-up"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-purple-600/30">
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-slate-950/85 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                    {project.categoryLabel}
                  </span>
                  
                  {project.images.length > 1 && (
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-950/85 text-slate-300 border border-slate-700 backdrop-blur-md flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-purple-400" />
                      {project.images.length} Assets
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-slate-900/40">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Card Footer Tools & Action */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 2).map((tool, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px]">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="text-purple-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2.5 rounded-xl transition-all ${
                  currentPage === 1
                    ? 'bg-slate-900/50 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-purple-600 border border-slate-800 hover:border-purple-500'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNum = index + 1;
                  // Show first page, last page, current page, and pages around current
                  const showPage = pageNum === 1 || 
                                   pageNum === totalPages || 
                                   Math.abs(pageNum - currentPage) <= 1;
                  
                  if (!showPage && pageNum === 2 && currentPage > 3) {
                    return <span key={pageNum} className="text-slate-600 px-2">...</span>;
                  }
                  if (!showPage && pageNum === totalPages - 1 && currentPage < totalPages - 2) {
                    return <span key={pageNum} className="text-slate-600 px-2">...</span>;
                  }
                  if (!showPage) return null;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      className={`min-w-[40px] h-10 rounded-xl font-semibold text-sm transition-all ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                          : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2.5 rounded-xl transition-all ${
                  currentPage === totalPages
                    ? 'bg-slate-900/50 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-purple-600 border border-slate-800 hover:border-purple-500'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
