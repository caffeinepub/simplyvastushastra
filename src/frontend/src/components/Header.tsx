import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#courses", label: "Courses" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(44,24,16,0.12)]"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="SimplyVastuShastra Home"
        >
          <span
            className="text-3xl text-gold font-serif leading-none select-none"
            aria-hidden="true"
          >
            ॐ
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-brown-text font-bold text-base md:text-lg tracking-wide">
              SimplyVastu
            </span>
            <span className="font-serif text-gold text-xs md:text-sm font-semibold tracking-[0.15em] uppercase">
              Shastra
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-brown-medium hover:text-gold font-medium text-sm transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex btn-gold px-5 py-2 rounded-full text-sm shadow-sm hover:shadow-gold"
          >
            Book Consultation
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-brown-text hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream/98 border-t border-gold/20 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className="block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block text-center btn-gold px-5 py-3 rounded-full text-sm font-semibold"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
