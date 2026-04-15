import { config } from "../config";
import { useScrollReveal } from "../hooks/useAnimations";

/* ── step icon lookup ── */
const stepIcons = [
  /* 01 Consultation */
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
  /* 02 Design & Planning */
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>,
  /* 03 Budgeting */
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>,
  /* 04 Execution */
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743" /></svg>,
  /* 05 Handover */
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>,
];

export default function Process() {
  const [titleRef, titleVisible] = useScrollReveal(0.3);

  return (
    <section className="section-blend relative py-24 md:py-32 overflow-hidden">
      <div className="section-surface absolute inset-0" />
      <div className="absolute inset-0 texture-cross" />

      {/* Ambient decorations */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-300/8 dark:bg-brand-400/4 rounded-full blur-3xl" />
      <div
        className="absolute bottom-20 right-[5%] w-64 h-64 bg-brand-200/10 dark:bg-brand-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-[3%] w-48 h-48 bg-brand-300/8 dark:bg-brand-400/4 rounded-full blur-3xl animate-float-reverse" />
      {/* Accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />

      <div className="relative z-10 w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">
            Our <span className="text-gradient">Process</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-300/40 via-brand/50 to-brand-300/40 dark:from-brand-400/20 dark:via-brand-400/30 dark:to-brand-400/20" />

          <div className="flex flex-col gap-10 md:gap-12">
            {config.process.map((step, idx) => (
              <TimelineStep
                key={step.step}
                step={step}
                index={idx}
                icon={stepIcons[idx]}
                isLast={idx === config.process.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index, icon, isLast }) {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* ── Timeline node ── */}
      <div className="relative z-10 flex-shrink-0">
        <div className="group relative">
          {/* glow ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-300 to-brand-700 opacity-20 blur-md group-hover:opacity-50 transition-opacity duration-500" />
          {/* main node */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand to-brand-700 flex items-center justify-center text-white font-display font-bold text-sm md:text-lg shadow-lg shadow-brand/30 ring-4 ring-white/90 dark:ring-slate-900/90">
            {step.step}
          </div>
        </div>
      </div>

      {/* ── Card ── */}
      <div className="flex-1 pb-2">
        <div className="glass-card rounded-2xl p-6 sm:p-8 group hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

          {/* Hover accent border */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1.5px rgba(212, 155, 0, 0.25)" }}
          />

          <div className="relative z-10">
            {/* Header row: icon + badge + title */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand/15 to-brand-700/10 dark:from-brand-400/15 dark:to-brand-600/10 flex items-center justify-center text-brand dark:text-brand-300 group-hover:scale-110 group-hover:from-brand/25 group-hover:to-brand-700/20 transition-all duration-300">
                  {icon}
                </div>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand/60 dark:text-brand-400/50 sm:hidden">
                  Step {step.step}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-semibold tracking-[0.15em] uppercase text-brand/50 dark:text-brand-400/40 border border-brand/20 dark:border-brand-400/20 rounded-full px-2.5 py-0.5">
                  Step {step.step}
                </span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
