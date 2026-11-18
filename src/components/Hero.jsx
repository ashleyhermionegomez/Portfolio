import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Download, Award, ChevronDown, Layers, Eye, Palette, Briefcase, ExternalLink } from 'lucide-react';
import { artistProfile, portfolioProjects } from '../data/portfolioData';

export default function Hero({ onOpenContact, onOpenResume, scrollToPortfolio, onSelectProject }) {
  // Flagship projects for the interactive hero reel
  const heroProjects = [
    portfolioProjects.find(p => p.id === 'matcha-mondays') || portfolioProjects[0],
    portfolioProjects.find(p => p.id === 'lumiere-botanica') || portfolioProjects[1],
    portfolioProjects.find(p => p.id === 'vantora-identity') || portfolioProjects[2],
    portfolioProjects.find(p => p.id === 'orlando-corporate-profile') || portfolioProjects[3]
  ].filter(Boolean);

  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const currentShowcase = heroProjects[activeHeroIdx] || heroProjects[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Mesh Glow Effects */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-blue-300">
                Fresh Graduate • Open for Junior Roles & Freelance Design
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Transforming Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">High-Impact</span> Visual Systems.
              </h1>
              <p className="font-serif-accent italic text-xl sm:text-2xl text-slate-300 font-normal">
                "Where visual storytelling meets structured grid discipline."
              </p>
            </div>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Hi! I'm a self-taught graphic artist and IT fresh graduate from PUP Taguig. I specialize in crafting clean brand identities, social media marketing kits, editorial PDF layouts, and executive slide presentations with intentional typography and color harmony.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToPortfolio}
                className="flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Explore Showcase ({portfolioProjects.length} Works)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl backdrop-blur-md transition-all hover:border-blue-500/40"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>View Resume / CV</span>
              </button>
            </div>

            {/* Recruiter Stats Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white font-heading">
                  {portfolioProjects.length} Works
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                  Curated Showcase
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-amber-400 font-heading">
                  {portfolioProjects.filter(p => p.internship).length} Deliverables
                </div>
                <div className="text-[11px] text-amber-400/80 uppercase tracking-wider font-mono">
                  Campus & Client Works
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white font-heading">
                  Self-Taught
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                  Continuous Learner
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white font-heading">
                  PUP Taguig '26
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                  Diploma in IT
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Design Studio Showcase (No Face) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              {/* Decorative Blue & Cyan Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-500 rounded-3xl blur-2xl opacity-40 animate-pulse-slow"></div>

              {/* Main Showcase Artboard Card */}
              <div className="relative rounded-3xl bg-[#0c111e] border border-slate-700/80 p-4 shadow-2xl overflow-hidden group">
                
                {/* Top Studio Artboard Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="text-[11px] font-mono text-slate-400 ml-1">artboard_preview.canvas</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 text-[10px] font-mono border border-blue-500/20">
                    Featured Spotlight
                  </span>
                </div>

                {/* Project Image Canvas */}
                <div 
                  onClick={() => onSelectProject && onSelectProject(currentShowcase)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 mt-3 cursor-pointer group/art"
                >
                  <img
                    src={currentShowcase.thumbnail}
                    alt={currentShowcase.title}
                    className="w-full h-full object-cover object-center group-hover/art:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-85" />
                  
                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/art:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Case Study</span>
                    </div>
                  </div>

                  {/* Top Badges on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                      {currentShowcase.categoryLabel}
                    </span>
                    {currentShowcase.internship ? (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-amber-500/90 text-slate-950 backdrop-blur-md flex items-center gap-1 font-mono">
                        <Briefcase className="w-3 h-3" /> Internship
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-950/85 text-slate-300 border border-slate-700 backdrop-blur-md flex items-center gap-1">
                        <Layers className="w-3 h-3 text-blue-400" />
                        {currentShowcase.images.length} Assets
                      </span>
                    )}
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 border border-slate-800 backdrop-blur-md">
                    <h3 className="font-heading font-bold text-white text-sm truncate">
                      {currentShowcase.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      {currentShowcase.client} • {currentShowcase.year}
                    </p>
                  </div>
                </div>

                {/* Project Selector Switcher Dots */}
                <div className="mt-3 flex items-center justify-between text-xs pt-1">
                  <div className="flex items-center gap-1.5">
                    {heroProjects.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveHeroIdx(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === activeHeroIdx 
                            ? 'w-7 bg-blue-500' 
                            : 'w-2 bg-slate-700 hover:bg-slate-500'
                        }`}
                        title={p.title}
                        aria-label={`Show ${p.title}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject && onSelectProject(currentShowcase)}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-[11px] font-semibold hover:underline"
                  >
                    <span>Inspect Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Live Color Harmony Swatch Strip */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[10px] font-mono text-slate-400">Palette System:</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] border border-white/20" title="#1e3a8a Deep Cobalt" />
                    <span className="w-4 h-4 rounded-full bg-[#06b6d4] border border-white/20" title="#06b6d4 Cyan" />
                    <span className="w-4 h-4 rounded-full bg-[#f59e0b] border border-white/20" title="#f59e0b Champagne Amber" />
                    <span className="w-4 h-4 rounded-full bg-[#10b981] border border-white/20" title="#10b981 Mint" />
                    <span className="w-4 h-4 rounded-full bg-[#f1f5f9] border border-white/20" title="#f1f5f9 Paper White" />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
          aria-label="Scroll down to portfolio"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-blue-400">Scroll to Showcase</span>
          <div className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all animate-bounce">
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
      </div>
    </section>
  );
}
