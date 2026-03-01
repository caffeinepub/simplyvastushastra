import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const anchorLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isOnHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally re-run on pathname change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    if (isOnHomePage) {
      // Smooth scroll on homepage
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage + anchor
      navigate({ to: "/" });
      // After navigation, scroll will be handled by the hash
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-[0_2px_24px_rgba(44,24,16,0.14)]" : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(255,248,231,0.97)"
          : "rgba(255,248,231,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
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
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {anchorLinks.map(({ href, label }) => (
            <li key={href}>
              <button
                type="button"
                onClick={() => handleAnchorClick(href)}
                className="text-brown-medium hover:text-gold font-medium text-sm transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
              </button>
            </li>
          ))}
          <li>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname.startsWith("/blogs")
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleAnchorClick("#contact")}
            className="hidden md:inline-flex btn-gold-magnetic px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_2px_12px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Consultation
          </button>

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
            {anchorLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  type="button"
                  onClick={() => handleAnchorClick(href)}
                  className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/blogs"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  location.pathname.startsWith("/blogs")
                    ? "text-gold bg-gold/5"
                    : "text-brown-medium hover:text-gold hover:bg-gold/5"
                }`}
              >
                Blog
              </Link>
            </li>
            <li className="pt-2">
              <button
                type="button"
                onClick={() => handleAnchorClick("#contact")}
                className="w-full text-center btn-gold px-5 py-3 rounded-full text-sm font-semibold"
              >
                Book Consultation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
