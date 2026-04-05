import { useState, useEffect } from 'react';
import { config } from '../config';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 p-3 md:p-4 transition-all duration-500">
      <nav
        className={`rounded-2xl px-5 py-3 md:px-8 md:py-4 flex justify-between items-center max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-2xl'
            : 'glass'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-amber-500 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-brand/30 group-hover:shadow-brand/50 transition-shadow duration-300">
            S
          </div>
          <span className="text-xl font-bold tracking-tight font-display hidden sm:block">
            <span className="text-brand dark:text-brand-300">{config.company.name.split(' ')[0]}</span>{' '}
            <span className="text-slate-700 dark:text-slate-300">{config.company.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {config.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-300 hover:bg-brand-50/50 dark:hover:bg-brand-900/20 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <span className={`transition-transform duration-500 inline-block ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`}>
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              )}
            </span>
          </button>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-brand to-brand-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get Quote
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="glass-strong rounded-2xl p-4 max-w-7xl mx-auto space-y-1">
          {config.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand hover:bg-brand-50/50 dark:hover:bg-brand-900/20 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="block text-center bg-gradient-to-r from-brand to-brand-700 text-white px-5 py-3 rounded-xl font-medium shadow-lg mt-2">
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
