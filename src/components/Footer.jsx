import React from 'react';
import { Palette, Layers, Mail, FileText, ArrowUp, Sparkles, GraduationCap } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function Footer({ onOpenContact, onOpenResume }) {
  return (
    <footer id="contact" className="bg-[#07090e] border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Callout Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0c111e] to-[#0c111e] border border-blue-500/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider border border-blue-500/20">
              Open For Junior Roles & Freelance Design
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Looking for a Dedicated Creative Perspective?
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Available immediately for entry-level graphic artist roles, junior brand positions, and freelance client design projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Review CV</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          
          {/* Col 1: Studio Monogram & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/20">
                HG
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                HERMIONE<span className="text-blue-400 font-light">.DESIGN</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Self-taught graphic artist and IT graduate crafting clean visual identity, social media systems, and editorial print design.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-blue-300 transition-colors">Featured Works</a></li>
              <li><a href="#about" className="hover:text-blue-300 transition-colors">About & Story</a></li>
              <li><a href="#skills" className="hover:text-blue-300 transition-colors">Skills & Software</a></li>
              <li><a href="#process" className="hover:text-blue-300 transition-colors">Design Workflow</a></li>
            </ul>
          </div>

          {/* Col 3: Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Core Deliverables
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Brand Identity & Logo Systems</li>
              <li>LinkedIn Carousels & Social Sets</li>
              <li>Corporate Slide Decks & Pitches</li>
              <li>Print Brochures & Multi-Page PDFs</li>
            </ul>
          </div>

          {/* Col 4: Recruiter Quick Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Recruiter Quick Actions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenContact} className="hover:text-blue-300 transition-colors text-left flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> Send Inquiry
                </button>
              </li>
              <li>
                <button onClick={onOpenResume} className="hover:text-blue-300 transition-colors text-left flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-400" /> View / Print Resume (CV)
                </button>
              </li>
              <li className="pt-1 text-[11px] text-slate-500 font-mono">
                hermionegomez49@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hermione Gomez • Graphic Artist & Visual Designer. All rights reserved.</p>
          <p className="font-mono text-[11px]">Crafted with Figma, React & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
