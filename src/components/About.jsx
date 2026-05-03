import { config } from '../config';
import { useScrollReveal } from '../hooks/useAnimations';

export default function About() {
  const [titleRef, titleVisible] = useScrollReveal(0.3);
  const [storyRef, storyVisible] = useScrollReveal(0.15);

  const { about, company } = config;

  return (
    <section id="about" className="section-blend relative py-24 md:py-32 overflow-hidden">
      <div className="section-surface absolute inset-0" />
      <div className="absolute inset-0 texture-dots" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-300/10 dark:bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-400/8 dark:bg-brand-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 animate-float-reverse" />
      <div className="absolute top-1/2 left-[60%] w-64 h-64 bg-brand-200/10 dark:bg-brand-400/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            {about.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">
            {about.heading.split(' ')[0]}{' '}
            <span className="text-gradient">{about.heading.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        {/* Story + Mission */}
        <div
          ref={storyRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Story card */}
          <div className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/30 shadow-lg shadow-brand/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-brand dark:text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
              {about.story}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-700 flex items-center justify-center text-white font-display font-bold shadow-lg shadow-brand/30">
                {company.founded}
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Year Founded</span>
            </div>
          </div>

          {/* Mission card */}
          <div className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/30 shadow-lg shadow-brand/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-brand dark:text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
              {about.mission}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand dark:text-brand-300 font-semibold group/link hover:gap-3 transition-all duration-300 pt-2"
            >
              Work With Us
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.values.map((value, idx) => (
            <ValueCard key={value.title} value={value} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 h-full">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-brand-700 flex items-center justify-center text-white font-display font-bold text-xl mb-5 shadow-lg shadow-brand/30 group-hover:shadow-brand/50 group-hover:scale-110 transition-all duration-300">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">
          {value.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
          {value.description}
        </p>
      </div>
    </div>
  );
}
