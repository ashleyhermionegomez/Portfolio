import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Download, Award, GraduationCap, HeartHandshake, ChevronDown, MousePointer2 } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function Hero({ onOpenContact, onOpenResume, scrollToPortfolio }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Purple Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-purple-300">
                Fresh Graduate • Open for Junior & Freelance Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Bringing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-400">Fresh Ideas</span> & Creative Energy To Design.
              </h1>
              <p className="font-serif-accent italic text-xl sm:text-2xl text-slate-300 font-normal">
                "As a self-taught artist, every project is a story of continuous learning and growth."
              </p>
            </div>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Hi! I'm a passionate self-taught graphic artist and recent graduate. I love turning concepts into clean, vibrant visual stories—from brand identity concepts and social media assets to presentations and layout designs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToPortfolio}
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Explore My Works</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-purple-900/50 rounded-xl backdrop-blur-md transition-all"
              >
                <HeartHandshake className="w-4 h-4 text-purple-400" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Stats Bar */}
            <div className="pt-8 border-t border-purple-950/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {artistProfile.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs text-purple-300/80 uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Artist Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              {/* Decorative Purple Glow Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-900 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl bg-slate-900 border border-purple-900/60 p-3 shadow-2xl overflow-hidden group">
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src={artistProfile.profilePic}
                    alt={artistProfile.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Artist Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-purple-500/20 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-white text-base">
                        Graphic Artist
                      </h3>
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-xs text-purple-300 font-mono">
                      Self-Taught & Fresh Graduate
                    </p>
                  </div>
                </div>

                {/* Quick Info bar */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Ready for Junior Roles
                  </span>
                  <button
                    onClick={onOpenResume}
                    className="text-purple-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Download className="w-3 h-3" /> View Resume
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors group"
          aria-label="Scroll down to portfolio"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll Down</span>
          <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
}
