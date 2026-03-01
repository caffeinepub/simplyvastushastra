import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#courses", label: "Courses" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  "Residential Vastu",
  "Commercial Vastu",
  "Industrial Vastu",
  "Online Consultation",
  "Health & Wellness",
];

const socialLinks = [
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaYoutube, label: "YouTube", href: "#" },
  { Icon: FaFacebook, label: "Facebook", href: "#" },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919871718653" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#2C1810" }} aria-label="Site footer">
      {/* Gold top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-gold text-3xl font-serif"
                aria-hidden="true"
              >
                ॐ
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-cream font-bold text-lg">
                  SimplyVastu
                </span>
                <span className="font-serif text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                  Shastra
                </span>
              </div>
            </div>
            <p className="text-brown-light text-sm leading-relaxed mb-5">
              Transforming Homes, Transforming Lives
            </p>
            <p className="font-accent italic text-brown-light/80 text-sm">
              "Ancient wisdom for modern living"
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="font-serif text-cream font-bold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-gold/40 text-xs" aria-hidden="true">
                      ›
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-serif text-cream font-bold mb-5 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-gold/40 text-xs" aria-hidden="true">
                      ›
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-cream font-bold mb-5 text-sm uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6" aria-label="Social media links">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-brown-text transition-all duration-300"
                >
                  <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-brown-light text-sm">
                📧 hello@simplyvastushastra.com
              </p>
              <p className="text-brown-light text-sm">
                📍 India (Online &amp; In-Person)
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{ background: "rgba(201,168,76,0.15)" }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brown-light">
          <p>
            © {currentYear} SimplyVastuShastra. All rights reserved. Made with{" "}
            <span className="text-gold" aria-label="love">
              ❤️
            </span>{" "}
            for Vastu Lovers
          </p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
