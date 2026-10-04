import React from 'react';
import { X, Printer, Download, Award, Briefcase, GraduationCap, Mail, Globe } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Resume Card */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-purple-900/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-400" />
            <h2 className="font-heading font-bold text-lg text-white">
              Curriculum Vitae / Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span>Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200" id="printable-resume">
          
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-5">
              <img
                src={artistProfile.profilePic}
                alt="Artist Portrait"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-purple-400/50 shadow-lg"
              />
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  Graphic Artist Portfolio
                </h1>
                <p className="text-sm text-purple-300 font-mono font-medium">
                  {artistProfile.title}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-purple-400" /> hermionegomez49@gmail.com</span>
                  <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-purple-400" /> Open to Remote & On-site</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
              Biography & Objective
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Self-taught graphic artist and recent graduate eager to start a creative career in graphic design. Possesses strong practical skills in visual storytelling, Adobe Creative Cloud, Figma, layout design, and brand identity concepts. Motivated to contribute a fresh visual perspective to dynamic design teams and clients.
            </p>
          </div>

          {/* Experience & Projects Timeline */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Portfolio Projects & Creative Work
            </h3>

            <div className="space-y-6 border-l-2 border-slate-800 pl-4">
              <div className="space-y-1 relative">
                <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-400" />
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-white text-base">Self-Taught Graphic Artist & Freelancer</h4>
                  <span className="text-xs font-mono text-slate-400">Present</span>
                </div>
                <p className="text-xs text-purple-300 font-mono">Independent Creative Practice</p>
                <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                  Designed a comprehensive 12-project portfolio covering brand identity systems, social media marketing kits, presentation decks, editorial print layouts, and data infographics.
                </p>
              </div>

              <div className="space-y-1 relative">
                <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-white text-base">Brand & Content Design Projects</h4>
                  <span className="text-xs font-mono text-slate-400">Recent</span>
                </div>
                <p className="text-xs text-purple-300 font-mono">Self-Initiated Concept Works</p>
                <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                  Created brand packaging concepts (Matcha Mondays), corporate identity guidelines (Vantora), luxury beauty launch sets (Lumière Botanica), and educational LinkedIn carousels.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education & Learning
              </h3>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="font-bold text-white">Polytechnic University of the Philippines – Taguig Campus</p>
                  <p className="text-slate-400">Diploma in Information Technology | 2023 – 2026</p>
                  <p className="text-slate-400">Graduated October 1, 2026</p>
                </div>
                <div>
                  <p className="font-bold text-white">Self-Taught Graphic Design Journey</p>
                  <p className="text-slate-400">Independent study of design tools and visual communication</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                Design Competencies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {artistProfile.skills.map((sk, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-medium">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
