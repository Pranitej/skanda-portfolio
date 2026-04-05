import { config } from "../config";
import { useScrollReveal } from "../hooks/useAnimations";

export default function Hero({ theme }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0">
        <img
          src={config.hero.backgroundImage}
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        {/* Premium gradient overlay for depth and professionalism */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/85 via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] dark:from-[#0f172a] via-transparent to-transparent" />
      </div>

      {/* Decorative Floating Elements - Subtle and Premium */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D49B00]/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#D49B00]/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-0"
      >
        <div className="max-w-3xl">
          {/* Badge - Refined with premium gold accent */}
          <div
            className={`inline-flex items-center gap-3 backdrop-blur-xl rounded-full px-5 py-2.5 mb-8 transition-all duration-700 ${
              theme === "dark"
                ? "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]"
                : "bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)]"
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#D49B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D49B00]"></span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-[#D49B00]">
              Est. {config.company.founded}
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span
              className={`text-xs font-medium tracking-wider ${theme === "dark" ? "text-white/70" : "text-white/90"}`}
            >
              Trusted by 500+ families
            </span>
          </div>

          {/* Heading with refined text styling */}
          {config.hero.heading.map((line, idx) => (
            <h1
              key={idx}
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
            >
              {idx === 1 ? (
                <span className="bg-gradient-to-r from-[#D49B00] via-[#FFC832] to-[#D49B00] bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                <span className="text-white">{line}</span>
              )}
            </h1>
          ))}

          {/* Subheading - Clean and legible */}
          <p
            className={`mt-6 text-base md:text-lg max-w-xl leading-relaxed font-light tracking-wide transition-all duration-700 ${
              theme === "dark" ? "text-white/70" : "text-white/80"
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {config.hero.subheading}
          </p>

          {/* CTA Buttons - Premium styling with refined interactions */}
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-5 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-[#D49B00] hover:bg-[#B58500] text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-[#D49B00]/20 hover:shadow-[#D49B00]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">{config.hero.cta}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#portfolio"
              className={`inline-flex items-center justify-center gap-2.5 backdrop-blur-sm border px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${
                theme === "dark"
                  ? "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.1)] text-white"
                  : "bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.3)] text-white"
              }`}
            >
              {config.hero.ctaSecondary}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Trust indicator - Added premium touch */}
          {/* <div
            className={`mt-12 flex items-center gap-6 transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#0A0A0A] ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-white/20 to-white/5"
                      : "bg-gradient-to-br from-white/40 to-white/20"
                  }`}
                />
              ))}
            </div>
            <div
              className={`text-xs ${theme === "dark" ? "text-white/50" : "text-white/70"}`}
            >
              <span className="text-[#D49B00] font-semibold">500+</span> happy
              homeowners
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator - Refined */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] sm:text-[11px] font-medium text-white/40 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-[#D49B00] to-transparent" />
        <div
          className={`w-4 h-4 sm:w-5 sm:h-5 border rounded-full flex items-center justify-center ${
            theme === "dark" ? "border-white/20" : "border-white/30"
          }`}
        >
          <div className="w-0.5 h-1.5 sm:h-2 bg-[#D49B00] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
