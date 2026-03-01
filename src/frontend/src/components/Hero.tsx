import { motion } from "framer-motion";
import MandalaSVG from "./MandalaSVG";

const trustItems = [
  { value: "7+", label: "Years Experience" },
  { value: "1000+", label: "Consultations" },
  { value: "3000+", label: "Students" },
  { value: "5★", label: "Rated" },
];

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #FFF8E7 0%, #F5F0E8 55%, #EDE0C4 100%)",
      }}
    >
      {/* Gold top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C9A84C 20%, #D4AF37 50%, #C9A84C 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Large Om watermark — pure atmosphere */}
      <div
        className="hero-om-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] select-none"
        aria-hidden="true"
      >
        ॐ
      </div>

      {/* Refined mandala — right side, asymmetric */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[560px] h-[560px] pointer-events-none select-none"
        style={{ opacity: 0.07, color: "#C9A84C" }}
        aria-hidden="true"
      >
        <MandalaSVG />
      </div>

      {/* Smaller accent mandala — bottom left */}
      <div
        className="absolute bottom-12 left-8 w-28 h-28 md:w-44 md:h-44 pointer-events-none select-none"
        style={{ opacity: 0.09, color: "#B8860B" }}
        aria-hidden="true"
      >
        <MandalaSVG />
      </div>

      {/* Main content — left-aligned for editorial weight */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase border border-gold/40 text-gold-deep bg-white/60 backdrop-blur-sm shadow-sm">
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold inline-block"
                aria-hidden="true"
              />
              Ancient Wisdom · Modern Solutions
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold inline-block"
                aria-hidden="true"
              />
            </span>
          </motion.div>

          {/* H1 — dramatic 3-line typographic stanza */}
          <motion.h1
            className="font-serif leading-[1.08] tracking-tight mb-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {/* Line 1 — large & dark */}
            <span className="block text-[2.6rem] md:text-[3.8rem] lg:text-[5rem] font-bold text-brown-text">
              Transform Your
            </span>
            {/* Line 2 — accent gold gradient, slightly larger */}
            <span className="block text-[3rem] md:text-[4.4rem] lg:text-[5.8rem] font-bold text-gold-gradient leading-[1.05]">
              Home &amp; Life
            </span>
            {/* Line 3 — lighter weight, slightly smaller, italic feel */}
            <span className="block text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] font-normal text-brown-medium leading-snug mt-1">
              with Scientific Vastu Solutions
            </span>
          </motion.h1>

          {/* Subheadline in Cormorant Garamond — accent font for spiritual tone */}
          <motion.p
            className="font-accent text-xl md:text-2xl text-brown-medium leading-relaxed mb-10 italic max-w-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          >
            Professional Vastu Consultation &amp; Certified Courses
            <br />
            <span className="not-italic font-semibold text-brown-text text-lg md:text-xl">
              by Charru Gupta
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => handleScrollTo("#contact")}
              className="btn-gold px-9 py-4 rounded-full text-[15px] font-semibold shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.55)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Consultation
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo("#courses")}
              className="btn-gold-outline px-9 py-4 rounded-full text-[15px] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(201,168,76,0.2)] transition-all duration-300"
            >
              Explore Courses
            </button>
          </motion.div>

          {/* Trust indicators — horizontal strip, left-aligned */}
          <motion.div
            className="flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46, ease: "easeOut" }}
          >
            {trustItems.map((item, i) => (
              <div key={item.label} className="flex items-center gap-3">
                <div>
                  <div className="font-serif text-2xl md:text-3xl font-bold text-gold-dark leading-none">
                    {item.value}
                  </div>
                  <div className="text-brown-medium text-xs font-medium mt-0.5 tracking-wide">
                    {item.label}
                  </div>
                </div>
                {i < trustItems.length - 1 && (
                  <span
                    className="text-gold/40 text-2xl font-thin hidden sm:block ml-2"
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cinematic scroll indicator — bottom center */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-brown-light text-[10px] tracking-[0.22em] uppercase font-medium">
          Discover More
        </span>
        <div className="w-[1px] h-12 relative overflow-hidden rounded-full bg-gold/15">
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gold to-transparent rounded-full"
            animate={{ y: ["0%", "200%"] }}
            transition={{
              duration: 1.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatDelay: 0.2,
            }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(237,224,196,0.45))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
