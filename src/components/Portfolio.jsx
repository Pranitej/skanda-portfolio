import { useState } from 'react';
import { config } from '../config';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Portfolio() {
  const [titleRef, titleVisible] = useScrollReveal(0.3);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(config.portfolio.map((p) => p.category))];
  const filtered = activeFilter === 'All' ? config.portfolio : config.portfolio.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">
            Featured{' '}
            <span className="text-gradient">Portfolio</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-brand to-brand-700 text-white shadow-lg shadow-brand/30'
                  : 'glass-card text-slate-600 dark:text-slate-300 hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
            <PortfolioCard key={project.title + idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project, index }) {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <span className="text-brand-300 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
          {project.category}
        </span>
        <h3 className="text-white text-xl font-display font-bold">{project.title}</h3>
      </div>
      {/* Always visible label at bottom */}
      <div className="absolute bottom-0 left-0 right-0 glass-strong rounded-b-3xl px-5 py-3 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{project.title}</h3>
      </div>
    </div>
  );
}
