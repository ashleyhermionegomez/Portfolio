import React from 'react';
import { artistProfile } from '../data/portfolioData';
import { Compass, Lightbulb, RefreshCw, Send, CheckCircle2, GraduationCap, Sparkles, BookOpen, Layers, Award, ShieldCheck, FileText, Play } from 'lucide-react';

export default function AboutSection({ onOpenContact, onOpenResume }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Creative Brief',
      desc: 'Analyzing brand positioning, target audience demographics, visual aesthetics, and project goals.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Concept & Grid Architecture',
      desc: 'Developing initial layout directions, exploring typographic hierarchy, color swatches, and structural grids.',
      icon: Lightbulb
    },
    {
      num: '03',
      title: 'Refinement & Iteration',
      desc: 'Polishing contrast ratios, aligning vector elements, perfecting kerning, and ensuring visual balance.',
      icon: RefreshCw
    },
    {
      num: '04',
      title: 'Production & Delivery',
      desc: 'Delivering production-ready assets: high-res print PDFs, vector SVGs, slide decks, and social media kits.',
      icon: Send
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#090d16]/70 border-t border-b border-slate-800/80">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Top Grid: Artist Identity Bento & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Designer Creative Identity Card (No Face) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-75" />
              
              <div className="relative rounded-3xl bg-[#0c111e] border border-slate-700/80 p-6 space-y-6 shadow-2xl">
                
                {/* Monogram Studio Header */}
                <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/25 shrink-0">
                    <span className="font-heading font-extrabold text-2xl tracking-wider">HG</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg leading-tight">
                      Graphic Artist Studio
                    </h3>
                    <p className="text-xs text-blue-400 font-mono mt-0.5">
                      Self-Taught Designer & IT Graduate
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 mt-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Available for Hiring
                    </span>
                  </div>
                </div>

                {/* Core Design Pillars */}
                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Core Design Competencies
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                      <div className="font-semibold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Brand Identity</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Logos, Guidelines & Systems</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                      <div className="font-semibold text-white flex items-center gap-1.5">
                        <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                        <span>Motion & Video</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Vertical Ads & Kinetic Reels</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                      <div className="font-semibold text-white flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Social Systems</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Carousels, Ads & Feed Kits</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                      <div className="font-semibold text-white flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        <span>Editorial Print</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Brochures & Multi-page PDFs</p>
                    </div>
                  </div>
                </div>

                {/* Verified Credentials */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-900/40 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-blue-300 font-semibold">
                    <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Academic & Professional Track Record</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Polytechnic University of the Philippines – Taguig (Diploma in IT, Oct 2026) with verified client internship contributions for Orlando Prestige Inc.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Biography & Recruiter Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Background & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Curious Learner. Detail-Obsessed Designer.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p>
                As a self-taught graphic artist with a technical background in Information Technology, I bring a unique blend of structural logic and creative intuition to visual design. My journey began through passionate independent study—mastering design fundamentals, color theory, typography hierarchy, and industry software through hands-on project creation.
              </p>
              <p>
                Being self-taught has forged strong discipline, high adaptability, and the ability to solve complex visual communication problems quickly. Whether designing complete brand guidelines, creating multi-slide educational carousels, or preparing print brochures for corporate clients, my objective is simple: create visuals that are both aesthetically compelling and strategically effective.
              </p>
            </div>

            {/* Core Candidate Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Rapid Self-Taught Learner</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Real Internship Experience</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Pixel-Perfect Grid Precision</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Proficient in Figma & Canva Pro</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all"
              >
                Send Me a Message
              </button>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Review CV</span>
              </button>
            </div>
          </div>

        </div>

        {/* Process Section */}
        <div id="process" className="space-y-10 pt-8">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Structured Design Workflow
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              How I approach every design deliverable—from the initial brief to final production-ready exports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-blue-500/30 group-hover:text-blue-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
