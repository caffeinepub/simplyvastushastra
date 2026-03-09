import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SERVICE_LINKS = [
  {
    slug: "online-vastu-consultation",
    label: "Online Vastu Consultation",
  },
  {
    slug: "home-vastu-consultation",
    label: "Home Vastu Consultation",
  },
  {
    slug: "office-vastu-consultation",
    label: "Office Vastu Consultation",
  },
  {
    slug: "industrial-vastu-consultation",
    label: "Industrial Vastu Consultation",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLLIElement>(null);

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
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    if (isOnHomePage) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/" });
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const isServiceActive = location.pathname.startsWith("/services/");

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
          data-ocid="nav.link"
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
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Home */}
          <li>
            <button
              type="button"
              onClick={() => handleAnchorClick("#home")}
              className="text-brown-medium hover:text-gold font-medium text-sm transition-colors duration-200 relative group"
              data-ocid="nav.link"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </button>
          </li>

          {/* About */}
          <li>
            <button
              type="button"
              onClick={() => handleAnchorClick("#about")}
              className="text-brown-medium hover:text-gold font-medium text-sm transition-colors duration-200 relative group"
              data-ocid="nav.link"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </button>
          </li>

          {/* Services Dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 font-medium text-sm transition-colors duration-200 relative group ${
                isServiceActive
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              data-ocid="nav.dropdown_menu"
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-200 ${
                  isServiceActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            <div
              onMouseLeave={() => setServicesOpen(false)}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl overflow-hidden transition-all duration-200 origin-top ${
                servicesOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              }`}
              style={{
                background: "rgba(255,248,231,0.98)",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow:
                  "0 8px 32px rgba(44,24,16,0.12), 0 2px 8px rgba(201,168,76,0.1)",
                backdropFilter: "blur(12px)",
              }}
              role="menu"
            >
              {/* All services link at top */}
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(false);
                  handleAnchorClick("#services");
                }}
                className="w-full text-left flex items-center gap-3 px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 transition-colors duration-200 text-xs font-bold uppercase tracking-wider border-b"
                style={{ borderColor: "rgba(201,168,76,0.15)" }}
                role="menuitem"
              >
                <span className="text-gold/50" aria-hidden="true">
                  ☰
                </span>
                All Services Overview
              </button>
              {SERVICE_LINKS.map(({ slug, label }) => (
                <Link
                  key={slug}
                  to="/services/$slug"
                  params={{ slug }}
                  className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === `/services/${slug}`
                      ? "text-gold bg-gold/5"
                      : "text-brown-medium hover:text-gold hover:bg-gold/5"
                  }`}
                  role="menuitem"
                  data-ocid="nav.link"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#C9A84C" }}
                    aria-hidden="true"
                  />
                  {label}
                </Link>
              ))}
            </div>
          </li>

          {/* Courses */}
          <li>
            <button
              type="button"
              onClick={() => handleAnchorClick("#courses")}
              className="text-brown-medium hover:text-gold font-medium text-sm transition-colors duration-200 relative group"
              data-ocid="nav.link"
            >
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </button>
          </li>

          {/* Blog */}
          <li>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname.startsWith("/blogs")
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>

          {/* Areas We Serve */}
          <li>
            <Link
              to="/areas-we-serve"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === "/areas-we-serve"
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              Areas We Serve
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>

          {/* Contact */}
          <li>
            <button
              type="button"
              onClick={() => handleAnchorClick("#contact")}
              className="text-brown-medium hover:text-gold font-medium text-sm transition-colors duration-200 relative group"
              data-ocid="nav.link"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </button>
          </li>
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleAnchorClick("#contact")}
            className="hidden md:inline-flex btn-gold-magnetic px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_2px_12px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            data-ocid="nav.primary_button"
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
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream/98 border-t border-gold/20 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {/* Home */}
            <li>
              <button
                type="button"
                onClick={() => handleAnchorClick("#home")}
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Home
              </button>
            </li>

            {/* About */}
            <li>
              <button
                type="button"
                onClick={() => handleAnchorClick("#about")}
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                About
              </button>
            </li>

            {/* Services with submenu */}
            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  isServiceActive
                    ? "text-gold bg-gold/5"
                    : "text-brown-medium hover:text-gold hover:bg-gold/5"
                }`}
                aria-expanded={mobileServicesOpen}
                data-ocid="nav.dropdown_menu"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileServicesOpen ? "max-h-64" : "max-h-0"
                }`}
              >
                <ul className="pl-4 space-y-1 py-1">
                  {SERVICE_LINKS.map(({ slug, label }) => (
                    <li key={slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                          location.pathname === `/services/${slug}`
                            ? "text-gold bg-gold/5"
                            : "text-brown-medium hover:text-gold hover:bg-gold/5"
                        }`}
                        data-ocid="nav.link"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#C9A84C" }}
                          aria-hidden="true"
                        />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Courses */}
            <li>
              <button
                type="button"
                onClick={() => handleAnchorClick("#courses")}
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Courses
              </button>
            </li>

            {/* Blog */}
            <li>
              <Link
                to="/blogs"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  location.pathname.startsWith("/blogs")
                    ? "text-gold bg-gold/5"
                    : "text-brown-medium hover:text-gold hover:bg-gold/5"
                }`}
                data-ocid="nav.link"
              >
                Blog
              </Link>
            </li>

            {/* Areas We Serve */}
            <li>
              <Link
                to="/areas-we-serve"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  location.pathname === "/areas-we-serve"
                    ? "text-gold bg-gold/5"
                    : "text-brown-medium hover:text-gold hover:bg-gold/5"
                }`}
                data-ocid="nav.link"
              >
                Areas We Serve
              </Link>
            </li>

            {/* Contact */}
            <li>
              <button
                type="button"
                onClick={() => handleAnchorClick("#contact")}
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Contact
              </button>
            </li>

            <li className="pt-2">
              <button
                type="button"
                onClick={() => handleAnchorClick("#contact")}
                className="w-full text-center btn-gold px-5 py-3 rounded-full text-sm font-semibold"
                data-ocid="nav.primary_button"
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
