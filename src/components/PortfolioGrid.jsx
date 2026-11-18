import React, { useState, useMemo } from 'react';
import { portfolioProjects, featuredProjectIds } from '../data/portfolioData';
import {
  ExternalLink, Layers, Sparkles, Eye, ChevronLeft, ChevronRight,
  GraduationCap, LayoutGrid, Palette, Share2, Presentation,
  Printer, ChartBar, Monitor, Flower, Coffee, Heart, Briefcase,
  Search, X, List, SlidersHorizontal, ArrowUpDown, CheckCircle2,
  Play, Film
} from 'lucide-react';

export default function PortfolioGrid({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('featured'); // Default to recruiter fast-track!
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [sortBy, setSortBy] = useState('curated'); // 'curated' | 'assets' | 'alpha'
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = viewMode === 'grid' ? 9 : 12;

  // Filter projects based on activeTab and searchQuery
  const filteredProjects = useMemo(() => {
    let list = [...portfolioProjects];

    // Filter by tab
    if (activeTab === 'featured') {
      list = list.filter(p => featuredProjectIds.includes(p.id) || p.featured);
    } else if (activeTab === 'video-ads') {
      list = list.filter(p => p.category === 'video-ads' || p.isVideo);
    } else if (activeTab === 'internship') {
      list = list.filter(p => p.internship || p.category === 'pup-taguig' || p.category === 'corporate-food');
    } else if (activeTab === 'social') {
      list = list.filter(p => p.category === 'social' || p.id === 'ai-can-code-pubmat');
    } else if (activeTab === 'all') {
      // Keep all
    } else {
      list = list.filter(p => p.category === activeTab);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.tools.some(t => t.toLowerCase().includes(q)) ||
        (p.internshipCompany && p.internshipCompany.toLowerCase().includes(q)) ||
        (p.isVideo && (q.includes('video') || q.includes('motion') || q.includes('ad') || q.includes('reel'))) ||
        (p.id === 'ai-can-code-pubmat' && (q.includes('pubmat') || q.includes('ai can code') || q.includes('seminar') || q.includes('itech') || q.includes('robot')))
      );
    }

    // Sort projects
    if (sortBy === 'assets') {
      list.sort((a, b) => b.images.length - a.images.length);
    } else if (sortBy === 'alpha') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [activeTab, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage) || 1;
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setActiveTab('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    const el = document.getElementById('portfolio');
    if (el) {
      const offset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'featured',     label: '⭐ Recruiter Fast-Track', count: featuredProjectIds.length, hint: 'Top Flagship Case Studies' },
    { id: 'all',          label: 'All Projects',           count: portfolioProjects.length, hint: `Complete ${portfolioProjects.length} Works` },
    { id: 'video-ads',    label: '🎬 Video & Motion Ads',  count: portfolioProjects.filter(p => p.category === 'video-ads' || p.isVideo).length, hint: `${portfolioProjects.filter(p => p.category === 'video-ads' || p.isVideo).length} High-Impact Motion Ads & Video Posters` },
    { id: 'internship',   label: '💼 Real Internship & Campus', count: portfolioProjects.filter(p => p.internship || p.category === 'pup-taguig' || p.category === 'corporate-food').length, hint: 'PUP Taguig, ITECH & Orlando Prestige' },
    { id: 'branding',     label: 'Brand Identity',         count: portfolioProjects.filter(p => p.category === 'branding').length, hint: 'Logos & Brand Guidelines' },
    { id: 'social',       label: 'Social Media & Ads',     count: portfolioProjects.filter(p => p.category === 'social').length, hint: 'Carousels, Campaigns & Posts' },
    { id: 'presentation', label: 'Presentations & Decks',  count: portfolioProjects.filter(p => p.category === 'presentation').length, hint: 'Pitch Decks & Roadmaps' },
    { id: 'print',        label: 'Print & Brochures',      count: portfolioProjects.filter(p => p.category === 'print').length, hint: 'Tri-folds, Banners & Flyers' },
    { id: 'infographic',  label: 'Infographics & Data',    count: portfolioProjects.filter(p => p.category === 'infographic').length, hint: 'Visual Data & Statistics' },
    { id: 'tech',         label: 'Tech & Product',         count: portfolioProjects.filter(p => p.category === 'tech').length, hint: 'App Graphics & SaaS Assets' },
    { id: 'food-beverage',label: 'Food & Beverage',        count: portfolioProjects.filter(p => p.category === 'food-beverage').length, hint: 'Packaging, Cafe & Restaurant' },
    { id: 'beauty',       label: 'Beauty & Skincare',      count: portfolioProjects.filter(p => p.category === 'beauty').length, hint: 'Luxury Cosmetics & Campaigns' },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Creative Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Design Portfolio Showcase
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore {portfolioProjects.length} curated visual projects spanning brand identity systems, social media kits, corporate slide presentations, and verified client internship deliverables.
          </p>
        </div>

        {/* Recruiter Fast-Track Callout Banner */}
        {activeTab === 'featured' && !searchQuery && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-slate-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm">
                  Recruiter Fast-Track Active
                </h4>
                <p className="text-xs text-slate-300">
                  Showing the 6 high-impact flagship case studies demonstrating end-to-end design thinking.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleTabChange('all')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors shrink-0"
            >
              Browse All {portfolioProjects.length} Works →
            </button>
          </div>
        )}

        {/* Search, Filter & View Controls Bar */}
        <div className="space-y-4">
          
          {/* Top Control Bar: Search + Sort + View Mode */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Instant Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by keyword, tool (Figma), or client…"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Right Tools: Sort & View Toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="curated">Curated Order</option>
                  <option value="assets">Most Assets First</option>
                  <option value="alpha">Alphabetical (A-Z)</option>
                </select>
              </div>

              {/* Grid vs Table View Mode */}
              <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Grid Card View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'table'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Recruiter Matrix / List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-2 overflow-x-auto scrollbar-thin">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const isFeatured = tab.id === 'featured';
              const isInternship = tab.id === 'internship';
              const isVideoAds = tab.id === 'video-ads';

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  title={tab.hint}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shrink-0 ${
                    isActive
                      ? isFeatured
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.03]'
                        : isVideoAds
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.03]'
                        : isInternship
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-[1.03]'
                        : 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-[1.03]'
                      : isVideoAds
                      ? 'bg-slate-900/80 text-cyan-300 border border-cyan-900/50 hover:border-cyan-500/50 hover:bg-slate-800'
                      : isInternship
                      ? 'bg-slate-900/80 text-amber-300/90 border border-amber-900/40 hover:border-amber-600/60 hover:bg-slate-800'
                      : isFeatured
                      ? 'bg-slate-900/80 text-blue-300 border border-blue-900/50 hover:border-blue-500/50 hover:bg-slate-800'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold leading-none ${
                    isActive
                      ? isInternship ? 'bg-slate-950/40 text-slate-900' : 'bg-white/20 text-white'
                      : isInternship
                      ? 'bg-amber-950/60 text-amber-300'
                      : isVideoAds
                      ? 'bg-cyan-950/60 text-cyan-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Filter Info & Reset Button */}
          {(searchQuery || activeTab !== 'featured') && (
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/60">
              <div className="flex items-center gap-2">
                <span>
                  Showing <strong className="text-white">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
                  {searchQuery && <> matching "<span className="text-blue-400">{searchQuery}</span>"</>}
                </span>
              </div>
              <button
                onClick={clearFilters}
                className="text-xs text-blue-400 hover:text-blue-300 underline font-semibold"
              >
                Reset to Recruiter Fast-Track
              </button>
            </div>
          )}

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center space-y-4 rounded-3xl bg-slate-900/40 border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-white text-lg">No matching projects found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No designs matched your current search. Try searching for "Figma", "Branding", "Social", or "Brochure".
              </p>
            </div>
            <button
              onClick={clearFilters}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* VIEW MODE 1: VISUAL GRID VIEW */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {currentProjects.map((project, index) => {
              const isFlagship = featuredProjectIds.includes(project.id);

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 hover:-translate-y-1.5 animate-slide-up relative bg-[#0b0f1a]/80"
                >
                  {/* Card Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className={`transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-4 py-2 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-xl ${
                        project.isVideo ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-cyan-600/30' : 'bg-blue-600 shadow-blue-600/30'
                      }`}>
                        {project.isVideo ? (
                          <>
                            <Play className="w-4 h-4 fill-white" />
                            <span>Play Video Ad</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            <span>Inspect Project</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                          {project.categoryLabel}
                        </span>
                        {project.isNew && (
                          <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-sm flex items-center gap-1 animate-pulse">
                            ✨ New
                          </span>
                        )}
                        {isFlagship && (
                          <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-blue-600 text-white shadow-sm flex items-center gap-1">
                            ⭐ Top Pick
                          </span>
                        )}
                      </div>
                      
                      {project.isVideo ? (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-950/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-md shrink-0">
                          <Film className="w-3 h-3 text-cyan-400" />
                          {project.duration || 'Motion Ad'}
                        </span>
                      ) : project.images.length > 1 ? (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-950/90 text-slate-300 border border-slate-700 backdrop-blur-md flex items-center gap-1.5 shrink-0">
                          <Layers className="w-3 h-3 text-blue-400" />
                          {project.images.length} Assets
                        </span>
                      ) : null}
                    </div>

                    {/* Bottom overlay badge for videos */}
                    {project.isVideo && (
                      <div className="absolute bottom-3 left-3 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/90 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono backdrop-blur-md shadow-lg">
                        <Play className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                        <span>Watch Video Ad</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-slate-900/30">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span className="truncate max-w-[200px]">{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Card Footer: Attribution & Tools */}
                    <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                      {project.internship && (
                        <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-medium">
                          <GraduationCap className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                          <span>Internship Work • <span className="font-semibold">{project.internshipCompany}</span></span>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tools.slice(0, 2).map((tool, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px] border border-slate-700/50">
                              {tool}
                            </span>
                          ))}
                          {project.tools.length > 2 && (
                            <span className="px-1.5 py-0.5 text-[10px] text-slate-500">
                              +{project.tools.length - 2}
                            </span>
                          )}
                        </div>

                        <span className="text-blue-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform text-xs">
                          {project.isVideo ? (
                            <>Watch <Play className="w-3 h-3 fill-current" /></>
                          ) : (
                            <>Inspect <ExternalLink className="w-3 h-3" /></>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: RECRUITER MATRIX / LIST VIEW (Recruiters love this) */}
        {viewMode === 'table' && filteredProjects.length > 0 && (
          <div className="rounded-2xl border border-slate-800 overflow-hidden bg-[#0c111e]/90 backdrop-blur-xl animate-fade-in shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900/80 border-b border-slate-800 text-slate-400 font-mono uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 font-semibold">Project Title</th>
                    <th className="py-3.5 px-4 font-semibold">Category</th>
                    <th className="py-3.5 px-4 font-semibold">Client / Context</th>
                    <th className="py-3.5 px-4 font-semibold">Key Tools</th>
                    <th className="py-3.5 px-4 font-semibold text-center">Deliverables</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {currentProjects.map((project) => {
                    const isFlagship = featuredProjectIds.includes(project.id);

                    return (
                      <tr
                        key={project.id}
                        onClick={() => onSelectProject(project)}
                        className="hover:bg-slate-800/40 cursor-pointer transition-colors group"
                      >
                        {/* Title & Thumbnail */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-10 rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-slate-800 relative">
                              <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              {project.isVideo && (
                                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-heading font-bold text-white group-hover:text-blue-400 transition-colors text-sm">
                                  {project.title}
                                </span>
                                {project.isNew && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                    ✨ New
                                  </span>
                                )}
                                {isFlagship && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-600/30 text-blue-300 border border-blue-500/30">
                                    ⭐ Top Pick
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-slate-400 line-clamp-1">
                                {project.shortDesc}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60">
                            {project.categoryLabel}
                          </span>
                        </td>

                        {/* Client / Context */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          {project.internship ? (
                            <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
                              <GraduationCap className="w-3.5 h-3.5" />
                              {project.internshipCompany}
                            </span>
                          ) : (
                            <span className="text-slate-300">{project.client}</span>
                          )}
                        </td>

                        {/* Tools */}
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {project.tools.slice(0, 2).map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Deliverables Count */}
                        <td className="py-3 px-4 text-center whitespace-nowrap font-mono text-slate-300">
                          {project.isVideo ? (
                            <span className="inline-flex items-center gap-1 text-cyan-300 font-semibold">
                              <Film className="w-3 h-3 text-cyan-400" />
                              {project.duration || 'Motion Ad'}
                            </span>
                          ) : (
                            <span>{project.images.length} {project.images.length === 1 ? 'Asset' : 'Assets'}</span>
                          )}
                        </td>

                        {/* Action */}
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProject(project);
                            }}
                            className={`px-3 py-1.5 rounded-lg transition-all text-xs font-semibold inline-flex items-center gap-1 ${
                              project.isVideo
                                ? 'bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white'
                                : 'bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white'
                            }`}
                          >
                            <span>{project.isVideo ? 'Watch' : 'Inspect'}</span>
                            {project.isVideo ? <Play className="w-3 h-3 fill-current" /> : <ExternalLink className="w-3 h-3" />}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="text-xs text-slate-400 font-mono">
              Showing {startIndex + 1}–{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2.5 rounded-xl transition-all ${
                  currentPage === 1
                    ? 'bg-slate-900/40 text-slate-600 cursor-not-allowed border border-slate-900'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 border border-slate-800'
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNum = index + 1;
                  const showPage = pageNum === 1 || 
                                   pageNum === totalPages || 
                                   Math.abs(pageNum - currentPage) <= 1;
                  
                  if (!showPage && pageNum === 2 && currentPage > 3) {
                    return <span key={pageNum} className="text-slate-600 px-1 text-xs">…</span>;
                  }
                  if (!showPage && pageNum === totalPages - 1 && currentPage < totalPages - 2) {
                    return <span key={pageNum} className="text-slate-600 px-1 text-xs">…</span>;
                  }
                  if (!showPage) return null;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      className={`min-w-[36px] h-9 rounded-xl font-semibold text-xs transition-all ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                          : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2.5 rounded-xl transition-all ${
                  currentPage === totalPages
                    ? 'bg-slate-900/40 text-slate-600 cursor-not-allowed border border-slate-900'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 border border-slate-800'
                }`}
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
