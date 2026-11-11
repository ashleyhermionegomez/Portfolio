import React from 'react';
import { X, Printer, Download, Award, Briefcase, GraduationCap, Mail, Globe, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
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
      <div className="relative w-full max-w-4xl bg-[#0c111e] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        
        {/* Header Action Bar */}
        <div className="px-6 py-4 bg-[#07090e] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" />
            <h2 className="font-heading font-bold text-lg text-white">
              Curriculum Vitae / Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0c111e] text-slate-200" id="printable-resume">
          
          {/* Header Block (No Face Photo) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-5">
              {/* Designer Geometric Monogram Badge (Replaces Face Photo) */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-xl shadow-blue-600/25 shrink-0 border border-white/20">
                <span className="font-heading font-extrabold text-2xl tracking-wider">HG</span>
                <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-emerald-500 text-slate-950 border-2 border-[#0c111e]">
                  <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                </span>
              </div>

              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  Hermione Gomez
                </h1>
                <p className="text-sm text-blue-400 font-mono font-medium">
                  Graphic Artist & Visual Designer • Fresh Graduate (IT)
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" /> hermionegomez49@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" /> Metro Manila, Philippines (Open to Remote)
                  </span>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono font-semibold self-start sm:self-center">
              Available for Junior Roles
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Professional Summary & Career Objective
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Passionate self-taught graphic artist with an academic background in Information Technology from PUP Taguig. Combines structured design thinking with an eye for visual hierarchy, typography, and color harmony. Experienced in brand identity systems, social media campaigns, multi-page print collateral, and presentation decks through independent study and real client internship deliverables. Eager to contribute fresh creative energy to junior or entry-level design roles.
            </p>
          </div>

          {/* Experience & Creative Work */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Creative & Practical Experience
            </h3>

            <div className="space-y-6 border-l-2 border-slate-800 pl-4">
              
              {/* Internship Experience */}
              <div className="space-y-1.5 relative">
                <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-white text-base">Graphic Design Intern — Corporate Marketing & Training</h4>
                  <span className="text-xs font-mono text-amber-400 font-semibold">Internship</span>
                </div>
                <p className="text-xs text-blue-300 font-mono">Orlando Prestige Inc. & PUP Taguig TVET Materials</p>
                <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                  • Designed complete corporate pitch decks, company profile presentation, and distribution agreement collateral for Orlando Prestige Inc.<br />
                  • Produced multi-page technical brochures for welding and electronics curricula (BOSH Safety, Practical Skills, TechSkills) adhering to strict institutional layout guidelines.
                </p>
              </div>

              {/* Independent Practice */}
              <div className="space-y-1.5 relative">
                <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400" />
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-white text-base">Self-Taught Graphic Artist & Visual Designer</h4>
                  <span className="text-xs font-mono text-slate-400">2023 – Present</span>
                </div>
                <p className="text-xs text-blue-300 font-mono">Independent Creative Practice</p>
                <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                  • Curated a comprehensive 56-project portfolio covering brand identity packages (Matcha Mondays, Vantora), luxury campaign art (Lumière Botanica), and 10-slide educational carousels (AI Agents in Finance).<br />
                  • Proficient in modern design tools including Figma, Canva Pro, layout design, typography systems, and digital asset preparation through dedicated self-directed practice.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education & Training
              </h3>
              <div className="space-y-2.5 text-xs">
                <div>
                  <p className="font-bold text-white">Polytechnic University of the Philippines – Taguig</p>
                  <p className="text-slate-400">Diploma in Information Technology | 2023 – 2026</p>
                  <p className="text-slate-400">Graduated: October 1, 2026</p>
                </div>
                <div>
                  <p className="font-bold text-white">Self-Taught Visual Design Mastery</p>
                  <p className="text-slate-400">Independent study of layout theory, typography pairing, and color systems</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                Design Tool Suite & Competencies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {artistProfile.tools.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium">
                    {t.name}
                  </span>
                ))}
                {artistProfile.skills.slice(0, 4).map((sk, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-950/40 border border-blue-900/40 text-blue-300 text-xs font-medium">
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
