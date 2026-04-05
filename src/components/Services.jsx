import { config } from '../config';
import { useScrollReveal } from '../hooks/useAnimations';

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: '100ms' }}
    >
      {/* Image — wrapped in glass-card for visible frost effect */}
      <div className={`relative overflow-hidden rounded-3xl glass-card p-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
        {/* Overlay badge */}
        <div className="absolute top-6 left-6 glass rounded-xl px-3 py-1.5">
          <span className="text-xs font-semibold text-brand dark:text-brand-300 tracking-wider uppercase">
            {service.id.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? 'md:order-2' : 'md:order-1'} space-y-4`}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/30 shadow-lg shadow-brand/10">
          <span className="text-brand dark:text-brand-300 font-bold text-lg">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
          {service.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-brand dark:text-brand-300 font-semibold group/link hover:gap-3 transition-all duration-300"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const [titleRef, titleVisible] = useScrollReveal(0.3);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient + textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900" />
      <div className="absolute inset-0 texture-dots" />
      <div className="absolute inset-0 texture-diagonal" />

      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-300/10 dark:bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400/8 dark:bg-brand-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float-reverse" />
      {/* Center glow */}
      <div className="absolute top-1/2 right-[5%] w-72 h-72 bg-brand-200/10 dark:bg-brand-400/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 md:mb-24 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">
            Our Premium{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Every space we design tells a unique story — yours.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16 md:space-y-28">
          {config.services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
