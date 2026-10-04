import React, { useState, useEffect } from 'react';
import { Palette, Menu, X, FileText, Mail, Sparkles } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function Header({ onOpenContact, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'My Approach', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-purple-950/60 py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
            <Palette className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-lg tracking-tight text-white block leading-none">
              ARTIST<span className="text-purple-400">.PORTFOLIO</span>
            </span>
            <span className="text-[11px] text-slate-400 tracking-wider font-mono uppercase block mt-1">
              Self-Taught & Fresh Grad
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-purple-900/30 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-purple-300 rounded-full hover:bg-purple-950/50 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-purple-900/40 rounded-xl transition-all"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Resume / CV</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-purple-900/40 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-purple-400 hover:bg-slate-900 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-xl"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              View Resume / CV
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-purple-600 rounded-xl"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
