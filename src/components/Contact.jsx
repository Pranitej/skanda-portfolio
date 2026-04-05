import { config } from '../config';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 texture-dots" />
      <div className="absolute inset-0 texture-cross" />

      {/* Corner accent glows */}
      <div className="absolute -top-10 right-[5%] w-80 h-80 bg-brand-300/10 dark:bg-brand-400/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute -bottom-10 left-[10%] w-72 h-72 bg-brand-200/8 dark:bg-brand-500/4 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-[15%] w-48 h-48 bg-brand-400/6 dark:bg-brand-400/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-[1px] bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`glass-strong rounded-3xl p-8 md:p-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Info */}
            <div className="space-y-8">
              <div>
                <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
                  Let's Build Your{' '}
                  <span className="text-gradient">Dream Home</span>
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {config.company.description}
                </p>
              </div>

              <div className="space-y-4">
                <ContactDetail
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>}
                  label={config.company.phone}
                />
                <ContactDetail
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
                  label={config.company.email}
                />
                <ContactDetail
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                  label={config.company.address}
                />
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {Object.entries(config.company.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-300"
                  >
                    <span className="text-sm font-bold uppercase">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Full Name" type="text" placeholder="John Doe" />
                  <FormField label="Phone" type="tel" placeholder="+91 9876543210" />
                </div>
                <FormField label="Email" type="email" placeholder="john@example.com" />
                <FormField label="City" type="text" placeholder="Hyderabad" />
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-brand/30 focus:border-brand outline-none transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full relative bg-gradient-to-r from-brand to-brand-700 text-white py-4 rounded-xl font-semibold text-lg shadow-xl shadow-brand/30 hover:shadow-brand/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 shimmer-bg" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ icon, label }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand dark:text-brand-300 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-slate-700 dark:text-slate-300 font-medium">{label}</span>
    </div>
  );
}

function FormField({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-brand/30 focus:border-brand outline-none transition-all duration-300"
      />
    </div>
  );
}
