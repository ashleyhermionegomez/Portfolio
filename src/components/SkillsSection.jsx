import React from 'react';
import { artistProfile } from '../data/portfolioData';
import { Palette, Image, BookOpen, Layout, Sparkles, Target, Layers, Cpu, PenTool } from 'lucide-react';

export default function SkillsSection() {
  const iconMap = {
    Palette: Palette,
    Image: Image,
    BookOpen: BookOpen,
    Layout: Layout,
    Sparkles: Sparkles,
    Target: Target
  };

  const disciplines = [
    {
      title: "Brand Identity Concepts",
      desc: "Logo design, icon marks, color palette selection, typography pairings, and visual identity guides.",
      icon: Target
    },
    {
      title: "Social Media Campaign Graphics",
      desc: "Instagram post templates, LinkedIn carousels, promotional banners, and visual story graphics.",
      icon: Sparkles
    },
    {
      title: "Presentation & Slide Decks",
      desc: "Designing clean, modern presentation slides and pitch deck templates with consistent formatting.",
      icon: Layout
    },
    {
      title: "Editorial & Print Layout",
      desc: "PDF document layouts, brochure spreads, magazine covers, and digital publication designs.",
      icon: BookOpen
    },
    {
      title: "Data Visualization & Infographics",
      desc: "Transforming key statistics and steps into clean, intuitive infographic graphics.",
      icon: Layers
    },
    {
      title: "Vector Art & Asset Preparation",
      desc: "Creating vector graphics, icon sets, brand assets, and digital image edits.",
      icon: PenTool
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-purple-900/40 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Skills & Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Graphic Design Skills & Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software tools and creative disciplines I've learned and practice through project creation.
          </p>
        </div>

        {/* Design Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((d, idx) => {
            const IconC = d.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card space-y-3 border border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <IconC className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {d.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Software Tool Proficiency Cards */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Design Tool Suite
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Applications used for creating visual assets, vector graphics, and layouts. I can adapt to any tools you may want me to use.
              </p>
            </div>
            <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 text-xs font-mono border border-purple-500/20 w-fit">
              Self-Taught & Continuously Expanding
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {artistProfile.tools.map((tool, idx) => {
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center space-y-2 hover:border-purple-500/40 transition-all"
                >
                  <span className="font-bold text-sm text-white block truncate w-full">
                    {tool.name}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-[10px] font-mono text-purple-300">
                    {tool.level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
