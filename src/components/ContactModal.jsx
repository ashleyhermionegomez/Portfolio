import React, { useState, useRef, useEffect } from 'react';
import { X, Send, CheckCircle, ChevronDown, Search } from 'lucide-react';
import confetti from 'canvas-confetti';

// Project type options
const PROJECT_TYPES = [
  { value: 'Short-Form Video Ads & Motion Design', label: 'Short-Form Video Ads & Motion Design' },
  { value: 'Brand Identity & Logo Concept', label: 'Brand Identity & Logo Concept' },
  { value: 'Social Media Campaign Graphics', label: 'Social Media Campaign Graphics' },
  { value: 'Presentation / Pitch Deck Layout', label: 'Presentation / Pitch Deck Layout' },
  { value: 'PDF & Editorial Design', label: 'PDF & Editorial Design' },
  { value: 'Infographic / Visual Assets', label: 'Infographic / Visual Assets' },
  { value: 'Product Advertisement Design', label: 'Product Advertisement Design' },
  { value: 'Corporate Brochure / Catalogue', label: 'Corporate Brochure / Catalogue' },
  { value: 'Web Banners & Digital Ads', label: 'Web Banners & Digital Ads' },
  { value: 'Junior Role Inquiry', label: 'Junior Role Inquiry / Full-time Role' },
  { value: 'Freelance Design Project', label: 'Freelance Design Project' },
  { value: 'Other / Not listed', label: 'Other / Not listed' },
];

function ProjectTypeCombobox({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = query.trim()
    ? PROJECT_TYPES.filter((opt) =>
        opt.label.toLowerCase().includes(query.toLowerCase())
      )
    : PROJECT_TYPES;

  const selected = PROJECT_TYPES.find((opt) => opt.value === value);

  const handleSelect = (opt) => {
    onChange(opt.value);
    setOpen(false);
    setQuery('');
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          if (!open) setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors flex items-center justify-between gap-2 text-left"
      >
        <span className={selected ? 'text-white' : 'text-slate-500'}>
          {selected ? selected.label : 'Select an opportunity or project type…'}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-xl bg-[#0c111e] border border-slate-700 shadow-2xl shadow-slate-950/80 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800">
            <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search project types…"
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
            />
          </div>

          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-xs text-slate-500 text-center">No match — select "Other / Not listed" below</li>
            ) : (
              filtered.map((opt) => (
                <li key={opt.value}>
                  <button
                    type="button"
                    onClick={() => handleSelect(opt)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${
                      value === opt.value
                        ? 'bg-blue-600/20 text-blue-300 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ContactModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || '',
    customService: '',
    timeline: '1–2 Weeks',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      // Find match or set custom
      const matched = PROJECT_TYPES.find(p => p.value.toLowerCase().includes(initialService.toLowerCase()));
      setFormData(prev => ({
        ...prev,
        service: matched ? matched.value : (initialService ? 'Other / Not listed' : prev.service),
        customService: matched ? '' : initialService
      }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const isOther = formData.service === 'Other / Not listed';

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalService = isOther
      ? formData.customService || 'Other / Not listed'
      : formData.service;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': '',
          name: formData.name,
          email: formData.email,
          service: finalService,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#06b6d4', '#6366f1', '#f59e0b'],
        });
      } else {
        alert(`Submission status: ${response.status}. You can also email directly at hermionegomez49@gmail.com`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Network issue. Please email hermionegomez49@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', service: '', customService: '', timeline: '1–2 Weeks', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">

      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0c111e] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto">

        {/* Gradient accent top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

        <div className="p-6 sm:p-8 space-y-6">

          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="font-heading font-extrabold text-xl text-white">
                Let's Connect & Collaborate
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Have an entry-level opening, junior design role, or freelance design project? Send a note and I'll respond promptly!
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all shrink-0 ml-4"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            /* Success state */
            <div className="py-10 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-heading">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-blue-300 font-semibold">{formData.name}</span>! I'll review your note and get back to you shortly at <span className="text-white">{formData.email}</span>.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-colors"
              >
                Back to Portfolio
              </button>
            </div>
          ) : (
            /* Form */
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              {/* Row 1 – Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Name / Company <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 – Project Type Combobox + Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Opportunity / Project Type <span className="text-blue-400">*</span>
                  </label>
                  <input type="hidden" name="service" value={isOther ? (formData.customService || 'Other / Not listed') : formData.service} />
                  <ProjectTypeCombobox
                    value={formData.service}
                    onChange={(val) => setFormData({ ...formData, service: val, customService: '' })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Timeline / Role Type
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option>Full-time Junior Role</option>
                    <option>Freelance Contract</option>
                    <option>Immediate / Urgent (&lt; 1 Week)</option>
                    <option>1–2 Weeks</option>
                    <option>Flexible Schedule</option>
                  </select>
                </div>
              </div>

              {/* Other free-text field */}
              {isOther && (
                <div className="space-y-1.5 animate-fade-in">
                  <label className="text-xs font-semibold text-slate-300">
                    Specify details <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tell me what role or design support you need…"
                    value={formData.customService}
                    onChange={(e) => setFormData({ ...formData, customService: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-blue-500/40 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              )}

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Your Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the position, design project, or questions you have…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !formData.service || (isOther && !formData.customService)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Transmitting…</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 fill-white" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
