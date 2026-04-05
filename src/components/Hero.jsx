import { config } from '../config';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={config.hero.backgroundImage}
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand/10 dark:bg-brand/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 tracking-wider uppercase">
              Est. {config.company.founded} — Trusted by 500+ families
            </span>
          </div>

          {/* Heading */}
          {config.hero.heading.map((line, idx) => (
            <h1
              key={idx}
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
            >
              {idx === 1 ? (
                <span className="text-gradient">{line}</span>
              ) : (
                <span className="text-slate-900 dark:text-white">{line}</span>
              )}
            </h1>
          ))}

          {/* Subheading */}
          <p
            className={`mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {config.hero.subheading}
          </p>

          {/* CTA */}
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand to-brand-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-brand/30 hover:shadow-brand/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">{config.hero.cta}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              <span className="absolute inset-0 shimmer-bg" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 glass px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-300 text-slate-700 dark:text-slate-200"
            >
              {config.hero.ctaSecondary}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-brand rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
