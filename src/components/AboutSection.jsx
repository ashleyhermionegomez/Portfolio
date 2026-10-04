import React from 'react';
import { artistProfile } from '../data/portfolioData';
import { Compass, Lightbulb, RefreshCw, Send, CheckCircle2, GraduationCap, Sparkles, BookOpen } from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Inspiration',
      desc: 'Researching brand aesthetics, visual references, target audiences, and key messaging requirements.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Concept & Design Drafts',
      desc: 'Creating initial layout options, exploring color palettes, typography pairs, and visual elements.',
      icon: Lightbulb
    },
    {
      num: '03',
      title: 'Refinement & Feedback',
      desc: 'Fine-tuning details, grid alignment, visual contrast, and polishing artwork for optimum impact.',
      icon: RefreshCw
    },
    {
      num: '04',
      title: 'Final Export & Delivery',
      desc: 'Preparing clean vector files, social media templates, PDF documents, and presentation decks.',
      icon: Send
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-b border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Grid: Artist Bio & Visual Staging */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Artist Photo Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-indigo-600/20 rounded-3xl blur-xl opacity-60" />
              <div className="relative rounded-2xl bg-slate-900 border border-purple-900/50 p-4 space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={artistProfile.profilePic}
                    alt={artistProfile.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                  <h4 className="font-heading font-bold text-white text-base">Graphic Artist</h4>
                  <p className="text-xs text-purple-300 font-mono">Self-Taught & Fresh Graduate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-purple-900/40 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>My Design Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Driven by Passion, Curiosity & Continuous Growth.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p>
                As a self-taught graphic artist and fresh graduate, my creative journey is fueled by a genuine love for visual art and design. Through independent study, hands-on practice, and real project experimentation, I've developed a solid foundation in graphic design principles, brand identity, and digital layout.
              </p>
              <p>
                Being self-taught has taught me resourcefulness, adaptability, and an eagerness to learn new tools and techniques. I focus on creating clean, aesthetically balanced visuals that help brands and projects communicate effectively.
              </p>
            </div>

            {/* Core Qualities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Dedicated Self-Taught Learner</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Fresh Creative Perspective</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Clean & Modern Design Eye</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Eager to Collaborate & Grow</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/25 transition-all"
              >
                Send Me a Message
              </button>
            </div>
          </div>

        </div>

        {/* Process Section */}
        <div id="process" className="space-y-10 pt-10">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              My Design Workflow
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              How I approach every creative project step-by-step from initial concept to final export.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all space-y-4 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-purple-400/40 group-hover:text-purple-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400">
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
