import { config } from '../config';

export default function Footer() {
  return (
    <footer className="section-blend relative pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div className="footer-surface absolute inset-0" />
      <div className="absolute inset-0 texture-grid" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-[1px] bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      {/* Subtle corner glow */}
      <div className="absolute -top-10 right-[10%] w-64 h-64 bg-brand-300/6 dark:bg-brand-400/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-amber-500 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-brand/30">
                S
              </div>
              <span className="text-xl font-bold tracking-tight font-display">
                <span className="text-brand dark:text-brand-300">{config.company.name.split(' ')[0]}</span>{' '}
                <span className="text-slate-700 dark:text-slate-300">{config.company.name.split(' ')[1]}</span>
              </span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
              {config.footer.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              {Object.entries(config.company.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 flex items-center justify-center hover:bg-brand hover:text-white text-slate-500 dark:text-slate-400 transition-all duration-300 text-xs font-bold uppercase"
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {config.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand-300 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {config.footer.services.map((svc) => (
                <li key={svc}>
                  <a href="#services" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand-300 transition-colors duration-300">
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li>{config.company.phone}</li>
              <li>{config.company.email}</li>
              <li>{config.company.address}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {config.company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
