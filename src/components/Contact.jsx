import { config } from "../config";
import { useScrollReveal } from "../hooks/useAnimations";

const telHref = (num) => `tel:${num.replace(/\s+/g, "")}`;
const whatsappHref = (num) =>
  `https://wa.me/${num.replace(/[^\d]/g, "")}`;

export default function Contact() {
  const [titleRef, titleVisible] = useScrollReveal(0.3);
  const [ref, isVisible] = useScrollReveal(0.2);

  const { phones, email, showrooms, industryAddress, socials } =
    config.company;

  return (
    <section
      id="contact"
      className="section-blend relative py-24 md:py-32 overflow-hidden"
    >
      <div className="section-surface absolute inset-0" />
      <div className="absolute inset-0 texture-dots" />
      <div className="absolute inset-0 texture-cross" />

      {/* Corner accent glows */}
      <div className="absolute -top-10 right-[5%] w-80 h-80 bg-brand-300/10 dark:bg-brand-400/5 rounded-full blur-3xl animate-float-slow" />
      <div
        className="absolute -bottom-10 left-[10%] w-72 h-72 bg-brand-200/8 dark:bg-brand-500/4 rounded-full blur-3xl animate-float-reverse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 right-[15%] w-48 h-48 bg-brand-400/6 dark:bg-brand-400/3 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "5s" }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-[1px] bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-brand dark:text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
            Ready to start your dream project? Reach out to our team — we're
            here to bring your vision to life with precision, passion, and
            premium craftsmanship.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Top row — Phones + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Call Us */}
            <InfoCard
              label="Call Us"
              heading="Speak with our team"
              icon={<PhoneIcon />}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {phones.map((num) => (
                  <li key={num}>
                    <a
                      href={telHref(num)}
                      className="group/phone flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-brand-300 font-medium transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand/60 group-hover/phone:bg-brand transition-colors" />
                      <span className="tabular-nums">{num}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref(phones[0])}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand dark:text-brand-300 hover:gap-3 transition-all duration-300"
              >
                CHAT ON WHATSAPP
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </InfoCard>

            {/* Email Us */}
            <InfoCard
              label="Email Us"
              heading="Drop us a message"
              icon={<MailIcon />}
            >
              <a
                href={`mailto:${email}`}
                className="inline-block text-lg md:text-xl font-display font-semibold text-slate-800 dark:text-white hover:text-brand dark:hover:text-brand-300 transition-colors duration-300 break-all"
              >
                {email}
              </a>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We reply to every enquiry within one business day.
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand dark:text-brand-300 hover:gap-3 transition-all duration-300"
              >
                SEND AN EMAIL
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </InfoCard>
          </div>

          {/* Bottom row — Addresses */}
          {(() => {
            const total = showrooms.length + 1;
            const cols =
              total === 2 ? "md:grid-cols-2" :
              total === 3 ? "md:grid-cols-2 lg:grid-cols-3" :
              "md:grid-cols-2 lg:grid-cols-4";
            return (
              <div className={`grid grid-cols-1 ${cols} gap-6 md:gap-8`}>
                {showrooms.map((s) => (
                  <AddressCard key={s.label} data={s} icon={<StoreIcon />} />
                ))}
                <AddressCard data={industryAddress} icon={<FactoryIcon />} />
              </div>
            );
          })()}

          {/* Social Links */}
          <div className="mt-12 flex flex-col items-center gap-5">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Follow Us
            </span>
            <div className="flex gap-3">
              {Object.entries(socials).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-300"
                  >
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, heading, icon, children }) {
  return (
    <div className="group glass-strong rounded-3xl p-7 md:p-9 relative overflow-hidden hover:shadow-xl hover:shadow-brand/10 transition-all duration-500">
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-amber-500 flex items-center justify-center text-white shadow-lg shadow-brand/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {icon}
          </div>
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-brand dark:text-brand-300">
              {label}
            </span>
            <h3 className="mt-1 text-lg font-display font-bold text-slate-900 dark:text-white">
              {heading}
            </h3>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function AddressCard({ data, icon }) {
  return (
    <a
      href={data.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-strong rounded-3xl p-7 md:p-9 relative overflow-hidden hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-500 block"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-amber-500 flex items-center justify-center text-white shadow-lg shadow-brand/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {icon}
          </div>
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-brand dark:text-brand-300">
              {data.label}
            </span>
            <h3 className="mt-1 text-lg font-display font-bold text-slate-900 dark:text-white">
              Visit Us
            </h3>
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {data.line}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand dark:text-brand-300 group-hover:gap-3 transition-all duration-300">
          OPEN IN MAPS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9l2-5h14l2 5M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18M9 20v-6h6v6"
      />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21V10l6 3V10l6 3V7l6-3v17H3zM7 21v-4m5 4v-4m5 4v-4"
      />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  twitter: TwitterIcon,
};
