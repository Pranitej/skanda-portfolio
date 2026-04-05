import { config } from "../config";
import { useScrollReveal, useCountUp } from "../hooks/useAnimations";

function StatItem({ stat, delay }) {
  const [ref, isVisible] = useScrollReveal(0.3);
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-brand dark:text-brand-300">
        {count}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 texture-dots" />

      {/* Floating gold orbs */}
      <div className="absolute -top-10 right-[10%] w-64 h-64 bg-brand-300/10 dark:bg-brand-400/5 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-10 left-[5%] w-80 h-80 bg-brand-400/8 dark:bg-brand-500/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
      {/* Radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-300/5 dark:bg-brand-400/3 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {config.stats.map((stat, idx) => (
              <StatItem key={idx} stat={stat} delay={idx * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
