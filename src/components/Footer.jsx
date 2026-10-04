import React from 'react';
import { Palette, ArrowUp, Linkedin, Dribbble, Instagram, Heart } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function Footer({ onOpenContact, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-purple-950/40 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Callout Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-600/15 via-slate-900 to-slate-900 border border-purple-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
              Open For Opportunities
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Looking for a Fresh Creative Perspective?
            </h3>
            <p className="text-sm text-slate-300 font-light">
              I'm open to entry-level graphic artist roles, junior positions, and freelance client projects!
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-purple-600/30 shrink-0 transition-all"
          >
            Get In Touch
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
                <Palette className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                ARTIST<span className="text-purple-400">.PORTFOLIO</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Self-taught graphic artist & fresh graduate creating clean visual identity, social media graphics, and digital designs.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-purple-300 transition-colors">Portfolio Showcase</a></li>
              <li><a href="#about" className="hover:text-purple-300 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-purple-300 transition-colors">Skills & Software</a></li>
              <li><a href="#process" className="hover:text-purple-300 transition-colors">Design Workflow</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Quick Actions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenContact} className="hover:text-purple-300 transition-colors text-left">
                  Send Message
                </button>
              </li>
              <li>
                <button onClick={onOpenResume} className="hover:text-purple-300 transition-colors text-left">
                  View Resume (CV)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Back to Top */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Connect & Back To Top
            </h4>
            <div className="flex items-center gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-purple-300 hover:bg-slate-800 border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-purple-300 hover:bg-slate-800 border border-slate-800">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-purple-300 hover:bg-slate-800 border border-slate-800">
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 hover:bg-purple-600 hover:text-white border border-purple-500/20 transition-all ml-auto"
                title="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Self-Taught Graphic Artist Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Created with <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" /> & Passion for Graphic Design
          </p>
        </div>

      </div>
    </footer>
  );
}
