import { useState, useEffect } from "react";
import { config } from "../config";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    config.nav.links[0]?.href.replace("#", "") || "home",
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = config.nav.links.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    // Active band sits ~halfway down the viewport — reliable on every screen
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the active band
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top > b.boundingClientRect.top ? b : a,
          );
          setActiveSection(top.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));

    // Bottom-of-page fallback: last section becomes active when we hit bottom
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearBottom) setActiveSection(ids[ids.length - 1]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed w-full z-50 p-3 md:p-4 transition-all duration-500">
      <nav
        className={`rounded-2xl px-5 py-3 md:px-8 md:py-4 flex justify-between items-center max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? theme === "dark"
              ? "bg-[rgba(10,10,10,0.3)] backdrop-blur-2xl shadow-2xl border border-[rgba(255,255,255,0.15)]"
              : "bg-[rgba(255,255,255,0.3)] backdrop-blur-2xl shadow-2xl border border-[rgba(255,255,255,0.2)]"
            : theme === "dark"
              ? "bg-[rgba(10,10,10,0.3)] backdrop-blur-2xl border border-[rgba(255,255,255,0.12)] shadow-lg"
              : "bg-[rgba(255,255,255,0.3)] backdrop-blur-2xl border border-[rgba(255,255,255,0.2)] shadow-lg"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#D49B00] to-[#B58500] flex items-center justify-center text-white font-display font-bold text-lg shadow-lg transition-shadow duration-300 ${
              theme === "dark"
                ? "shadow-[rgba(212,155,0,0.3)] group-hover:shadow-[rgba(212,155,0,0.5)]"
                : "shadow-[rgba(212,155,0,0.2)] group-hover:shadow-[rgba(212,155,0,0.4)]"
            }`}
          >
            S
          </div>
          <span className="text-base sm:text-xl font-bold tracking-tight font-display">
            <span className="text-[#D49B00]">
              {config.company.name.split(" ")[0]}
            </span>{" "}
            <span
              className={theme === "dark" ? "text-white/90" : "text-slate-800"}
            >
              {config.company.name.split(" ")[1]}
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {config.nav.links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#FFD700] via-[#F0B100] to-[#D49B00] bg-clip-text text-transparent"
                    : theme === "dark"
                      ? "text-white/80 hover:text-[#D49B00] hover:bg-[rgba(255,255,255,0.15)]"
                      : "text-slate-700 hover:text-[#D49B00] hover:bg-[rgba(0,0,0,0.08)]"
                }`}
              >
                {link.label}
                <span
                  className={`pointer-events-none absolute left-1/2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-[#FFD700] via-[#F0B100] to-[#D49B00] shadow-[0_0_8px_rgba(212,155,0,0.6)] transition-all duration-300 -translate-x-1/2 ${
                    isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-xl backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 ${
              theme === "dark"
                ? "bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] hover:border-[#D49B00]/50"
                : "bg-[rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.15)] hover:border-[#D49B00]/50"
            }`}
            aria-label="Toggle theme"
          >
            <span
              className={`transition-transform duration-500 inline-block ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#D49B00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </span>
          </button>

          <a
            href="#contact"
            className={`hidden sm:flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md ${
              theme === "dark"
                ? "bg-[rgba(212,155,0,0.85)] hover:bg-[#D49B00] shadow-[rgba(212,155,0,0.4)] hover:shadow-[rgba(212,155,0,0.6)] border border-[rgba(255,255,255,0.1)]"
                : "bg-[rgba(212,155,0,0.85)] hover:bg-[#D49B00] shadow-[rgba(212,155,0,0.3)] hover:shadow-[rgba(212,155,0,0.5)] border border-[rgba(255,255,255,0.3)]"
            }`}
          >
            Get Quote
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 rounded-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
              theme === "dark"
                ? "bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] hover:border-[#D49B00]/50"
                : "bg-[rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.15)] hover:border-[#D49B00]/50"
            }`}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  theme === "dark" ? "bg-white/80" : "bg-slate-700"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  theme === "dark" ? "bg-white/80" : "bg-slate-700"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  theme === "dark" ? "bg-white/80" : "bg-slate-700"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
      >
        <div
          className={`rounded-2xl p-4 max-w-7xl mx-auto space-y-1 backdrop-blur-2xl ${
            theme === "dark"
              ? "bg-[rgba(10,10,10,0.85)] border border-[rgba(255,255,255,0.15)] shadow-2xl"
              : "bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.9)] shadow-2xl"
          }`}
        >
          {config.nav.links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`relative block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#FFD700] via-[#F0B100] to-[#D49B00] bg-clip-text text-transparent"
                    : theme === "dark"
                      ? "text-white/80 hover:text-[#D49B00] hover:bg-[rgba(255,255,255,0.15)]"
                      : "text-slate-700 hover:text-[#D49B00] hover:bg-[rgba(0,0,0,0.08)]"
                }`}
              >
                {link.label}
                <span
                  className={`pointer-events-none absolute left-4 bottom-2.5 h-[2px] rounded-full bg-gradient-to-r from-[#FFD700] via-[#F0B100] to-[#D49B00] shadow-[0_0_8px_rgba(212,155,0,0.6)] transition-all duration-300 ${
                    isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[rgba(212,155,0,0.9)] hover:bg-[#D49B00] text-white px-5 py-3 rounded-xl font-medium shadow-lg shadow-[rgba(212,155,0,0.3)] mt-2 transition-all duration-300 backdrop-blur-md border border-[rgba(255,255,255,0.1)]"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
