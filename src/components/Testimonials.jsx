import { useState } from "react";
import { config } from "../config";
import { useScrollReveal } from "../hooks/useAnimations";

export default function Testimonials() {
  const [titleRef, titleVisible] = useScrollReveal(0.3);
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const total = config.testimonials.length;

  const goTo = (idx) => {
    if (idx === active || fade) return;
    setFade(true);
    setTimeout(() => {
      setActive(idx);
      setFade(false);
    }, 250);
  };

  const next = () => goTo((active + 1) % total);
  const prev = () => goTo((active - 1 + total) % total);

  return (
    <section className="section-blend relative py-24 md:py-32 overflow-hidden">
      <div className="section-surface absolute inset-0" />
      <div className="absolute inset-0 texture-diagonal" />

      {/* Large radial glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-300/6 dark:bg-brand-400/3 rounded-full blur-3xl" />
      {/* Floating accent orbs */}
      <div
        className="absolute top-16 right-[12%] w-56 h-56 bg-brand-200/10 dark:bg-brand-500/5 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute bottom-16 left-[8%] w-72 h-72 bg-brand-300/8 dark:bg-brand-400/4 rounded-full blur-3xl animate-float-reverse" />
      {/* Corner accent sparkles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-brand-400/30 dark:bg-brand-300/20 rounded-full" />
      <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-brand-400/25 dark:bg-brand-300/15 rounded-full" />
      <div className="absolute bottom-20 right-16 w-2 h-2 bg-brand-400/20 dark:bg-brand-300/10 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto relative">
          {/* Prev Button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 lg:-translate-x-20 w-12 h-12 rounded-full glass-strong items-center justify-center text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-brand-300 hover:scale-110 hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 lg:translate-x-20 w-12 h-12 rounded-full glass-strong items-center justify-center text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-brand-300 hover:scale-110 hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center relative min-h-[440px] md:min-h-[420px] flex items-center justify-center">
            {/* Quote icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-amber-500 flex items-center justify-center shadow-lg shadow-brand/30 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
            </div>

            <div
              className={`w-full transition-all duration-300 ease-out ${
                fade ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 mt-2">
                {[...Array(config.testimonials[active].rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-light italic mb-8">
                "{config.testimonials[active].text}"
              </p>

              {/* Author */}
              <div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-amber-400 mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {config.testimonials[active].name.charAt(0)}
                </div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-lg">
                  {config.testimonials[active].name}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {config.testimonials[active].role}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Nav Buttons + Dots */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="md:hidden w-10 h-10 rounded-full glass-strong flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-brand-300 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex justify-center gap-3">
              {config.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    active === idx
                      ? "w-10 h-3 bg-gradient-to-r from-brand to-brand-700"
                      : "w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-brand-200 dark:hover:bg-brand-700"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="md:hidden w-10 h-10 rounded-full glass-strong flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-brand-300 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
