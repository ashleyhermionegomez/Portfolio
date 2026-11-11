import React from 'react';
import { artistProfile } from '../data/portfolioData';
import { Palette, Image, BookOpen, Layout, Sparkles, Target, Layers, Cpu, PenTool, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const disciplines = [
    {
      title: "Brand Identity Systems",
      desc: "Logo design, icon marks, brand guidelines, color palette selection, typography systems, and mockups.",
      icon: Target
    },
    {
      title: "Social Media Kits & Ads",
      desc: "Multi-slide LinkedIn carousels, Instagram feed kits, promotional ad graphics, and story campaigns.",
      icon: Sparkles
    },
    {
      title: "Executive Slide Decks",
      desc: "Clean pitch decks, corporate roadmaps, client presentations, and structured sales slide decks.",
      icon: Layout
    },
    {
      title: "Editorial & Print Layout",
      desc: "A4 multi-page brochures, event flyers, tri-fold brochures, PDF documents, and print-ready files.",
      icon: BookOpen
    },
    {
      title: "Data Visualization & Charts",
      desc: "Transforming complex statistics, step-by-step workflows, and data into engaging infographics.",
      icon: Layers
    },
    {
      title: "Vector Art & Asset Production",
      desc: "Precision vector illustrations, icon sets, social assets, and professional image retouching.",
      icon: PenTool
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical & Creative Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Design Capabilities & Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software competencies and visual design disciplines mastered through continuous learning and project execution.
          </p>
        </div>

        {/* Design Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((d, idx) => {
            const IconC = d.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card space-y-3 border border-slate-800/80 bg-[#0c111e]/70 hover:border-blue-500/40"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
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
        <div className="p-8 rounded-3xl bg-[#0c111e]/80 border border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Industry Software Toolkit
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Applications used for vector creation, photo manipulation, slide design, and brand collateral.
              </p>
            </div>
            <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 text-xs font-mono border border-blue-500/20 w-fit">
              Fast Adaptability to Any Team Tooling
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {artistProfile.tools.map((tool, idx) => {
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#07090e] border border-slate-800 flex flex-col items-center text-center space-y-2 hover:border-blue-500/40 hover:-translate-y-1 transition-all"
                >
                  <span className="font-bold text-sm text-white block truncate w-full">
                    {tool.name}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[10px] font-mono text-blue-300 border border-blue-500/20">
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
