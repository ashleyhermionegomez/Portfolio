import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { artistProfile } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Identity Concept',
    budget: '$300 - $800',
    timeline: '1 Week',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit form data to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'name': formData.name,
          'email': formData.email,
          'service': formData.service,
          'timeline': formData.timeline,
          'message': formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        
        // Trigger festive celebratory confetti with purple colors
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#c084fc', '#818cf8', '#38bdf8']
        });
      } else {
        alert('Failed to send message. Please try again or email directly at hermionegomez49@gmail.com');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again or email directly at hermionegomez49@gmail.com');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-purple-900/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="font-heading font-extrabold text-xl text-white">
              Get in Touch
            </h2>
            <p className="text-xs text-slate-400">
              Send a project message or opportunity inquiry.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto border border-purple-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Message Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you for getting in touch, <span className="text-purple-300 font-semibold">{formData.name}</span>! I will review your message and reply back promptly.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            {/* Netlify Forms hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Project Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                >
                  <option>Brand Identity & Logo Concept</option>
                  <option>Social Media Campaign Graphics</option>
                  <option>Presentation / Pitch Deck Layout</option>
                  <option>PDF & Editorial Design</option>
                  <option>Infographic / Visual Assets</option>
                  <option>Junior Role Inquiry / Other</option>
                </select>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Timeline / Scope</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                >
                  <option>Urgent (&lt; 1 Week)</option>
                  <option>1-2 Weeks</option>
                  <option>Flexible Schedule</option>
                  <option>Full-time / Junior Hire</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-mono text-slate-300">Your Message *</label>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Write your message or project details here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Send Message</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
