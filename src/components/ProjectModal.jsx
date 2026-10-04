import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Layers, Calendar, User, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

export default function ProjectModal({ project, onClose, onSelectProject }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setActiveImageIdx(0);
    setIsZoomed(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project) {
        setActiveImageIdx((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === 'ArrowLeft' && project) {
        setActiveImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentProjectIdx = portfolioProjects.findIndex((p) => p.id === project.id);
  const prevProject = portfolioProjects[(currentProjectIdx - 1 + portfolioProjects.length) % portfolioProjects.length];
  const nextProject = portfolioProjects[(currentProjectIdx + 1) % portfolioProjects.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Window */}
      <div className="relative w-full max-w-6xl bg-slate-900 border border-purple-900/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {project.categoryLabel}
            </span>
            <h2 className="font-heading font-bold text-lg sm:text-xl text-white truncate max-w-xs sm:max-w-md">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
              title="Toggle Full Screen Image View"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          
          {/* Left / Top Column: Gallery Lightbox Viewer */}
          <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 flex flex-col justify-between space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] flex items-center justify-center rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80">
              <img
                src={project.images[activeImageIdx]}
                alt={`${project.title} asset ${activeImageIdx + 1}`}
                className={`max-h-[60vh] w-auto max-w-full object-contain transition-all duration-300 ${
                  isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              {/* Prev / Next Image Overlay Buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length)}
                    className="absolute left-3 p-2.5 rounded-full bg-slate-950/80 text-slate-200 hover:text-purple-300 hover:bg-slate-950 border border-purple-900/40 backdrop-blur-md transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev + 1) % project.images.length)}
                    className="absolute right-3 p-2.5 rounded-full bg-slate-950/80 text-slate-200 hover:text-purple-300 hover:bg-slate-950 border border-purple-900/40 backdrop-blur-md transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Slide Counter Badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-950/85 text-xs font-mono text-slate-300 border border-slate-800 backdrop-blur-md flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>{activeImageIdx + 1} / {project.images.length}</span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-thin">
                {project.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      idx === activeImageIdx
                        ? 'border-purple-400 shadow-md shadow-purple-400/25 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right / Bottom Column: Project Metadata & Story */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 bg-slate-900/50 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Client & Metadata Specs */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-mono flex items-center gap-1">
                    <User className="w-3 h-3 text-purple-400" /> Project Context
                  </span>
                  <p className="font-semibold text-white truncate">{project.client}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-400" /> Year & Role
                  </span>
                  <p className="font-semibold text-white truncate">{project.year} • {project.role.split(' ')[0]}</p>
                </div>
              </div>

              {/* Design Story */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                  Project Description
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {project.fullDesc}
                </p>
              </div>

              {/* Key Visual Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                  Key Visual Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Tools & Discipline
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Project Switcher */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-medium">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-purple-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Project
              </button>
              
              <button
                onClick={() => onSelectProject(nextProject)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-purple-300 transition-colors"
              >
                Next Project <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
