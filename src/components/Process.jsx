import { config } from '../config';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Process() {
  const [titleRef, titleVisible] = useScrollReveal(0.3);

  return (
    <section className="section-blend relative py-24 md:py-32 overflow-hidden">
      <div className="section-surface absolute inset-0" />
      <div className="absolute inset-0 texture-cross" />

      {/* Spotlight from top center */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-300/8 dark:bg-brand-400/4 rounded-full blur-3xl" />
      {/* Floating orbs */}
      <div className="absolute bottom-20 right-[5%] w-64 h-64 bg-brand-200/10 dark:bg-brand-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-[3%] w-48 h-48 bg-brand-300/8 dark:bg-brand-400/4 rounded-full blur-3xl animate-float-reverse" />
      {/* Accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">
            Our{' '}
            <span className="text-gradient">Process</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.process.map((step, idx) => (
            <ProcessStep key={step.step} step={step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connector line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-brand-200 to-transparent dark:from-brand-800 dark:to-transparent" />
      )}

      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 h-full">
        {/* Step number */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-brand-700 flex items-center justify-center text-white font-display font-bold text-xl mb-5 shadow-lg shadow-brand/30 group-hover:shadow-brand/50 group-hover:scale-110 transition-all duration-300">
          {step.step}
        </div>
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">
          {step.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
          {step.description}
        </p>
      </div>
    </div>
  );
}
