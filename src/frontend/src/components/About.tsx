import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLeaf, FaStar } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const credentials = [
  "Certified Vastu Expert",
  "7+ Years Experience",
  "3000+ Students Trained",
];

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "1000+", label: "Consultations Done" },
  { value: "3000+", label: "Students Trained" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Subtle corner mandala */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none select-none -translate-y-1/4 translate-x-1/4"
        style={{ opacity: 0.04, color: "#C9A84C" }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {[0, 45, 90, 135].map((a) => (
            <line
              key={a}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${a} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Meet the Expert"
          headline="Charru Gupta — Your Vastu Expert"
          lead="Founder of SimplyVastuShastra, transforming spaces & lives since 2017."
          isInView={isInView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative frame behind */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl"
              style={{ border: "2px solid #C9A84C", opacity: 0.3 }}
              aria-hidden="true"
            />
            {/* Main image placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-center text-center"
              style={{
                background:
                  "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 40%, #EDE0C4 100%)",
                border: "3px solid #C9A84C",
              }}
            >
              {/* Decorative inner patterns */}
              <div
                className="absolute inset-4 pointer-events-none"
                style={{ opacity: 0.08, color: "#C9A84C" }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  {[0, 60, 120].map((a) => (
                    <line
                      key={a}
                      x1="100"
                      y1="10"
                      x2="100"
                      y2="190"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      transform={`rotate(${a} 100 100)`}
                    />
                  ))}
                </svg>
              </div>

              {/* Lotus SVG icon */}
              <div className="mb-4 text-gold" aria-hidden="true">
                <FaLeaf size={48} />
              </div>
              <p className="font-serif text-2xl font-bold text-brown-text">
                Charru Gupta
              </p>
              <p className="text-gold text-sm font-semibold tracking-wider mt-1">
                Founder, SimplyVastuShastra
              </p>
              <div className="flex gap-1 mt-3" aria-label="5 star rating">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <FaStar key={k} className="text-gold" size={14} />
                ))}
              </div>
              <p className="text-brown-light text-xs mt-2 italic">
                Vastu Expert &amp; Educator
              </p>

              {/* Stats strip at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 flex"
                aria-label="Expert statistics"
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex-1 py-3 text-center ${i < 2 ? "border-r border-gold/30" : ""}`}
                    style={{ background: "rgba(201,168,76,0.12)" }}
                  >
                    <div className="font-serif font-bold text-gold-dark text-lg">
                      {s.value}
                    </div>
                    <div className="text-brown-medium text-xs leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-6 leading-tight">
              7+ Years of{" "}
              <span className="text-gold-gradient">Proven Expertise</span>
              <br />
              in Vastu Shastra
            </h2>

            <div className="space-y-4 text-brown-medium leading-relaxed mb-6">
              <p>
                Charru Gupta is the founder of{" "}
                <strong className="text-brown-text">SimplyVastuShastra</strong>,
                a trusted name in scientific Vastu consultation and education
                across India. With over 7 years of dedicated experience, she has
                transformed 1000+ homes and businesses into harmonious,
                prosperous spaces.
              </p>
              <p>
                What sets Charru apart is her{" "}
                <strong className="text-brown-text">
                  practical, no-demolition approach
                </strong>{" "}
                — delivering powerful Vastu remedies through simple changes in
                colors, directions, and placements. No breaking walls, no
                expensive renovations.
              </p>
              <p>
                She has trained{" "}
                <strong className="text-brown-text">3000+ students</strong>{" "}
                through certified courses, turning Vastu enthusiasts into
                confident practitioners. Her mission is to make ancient Vastu
                wisdom accessible, logical, and life-changing for everyone.
              </p>
            </div>

            {/* Credentials */}
            <ul className="flex flex-wrap gap-3 mb-6" aria-label="Credentials">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="px-4 py-1.5 rounded-full border border-gold text-gold-deep text-sm font-semibold bg-gold/5 list-none"
                >
                  {c}
                </li>
              ))}
            </ul>

            {/* Signature */}
            <p className="font-accent text-xl italic text-brown-medium mb-8">
              "My mission is to bring harmony, health, and prosperity to every
              home through the timeless science of Vastu."
              <br />
              <strong className="text-brown-text not-italic font-semibold">
                — Charru Gupta, Founder
              </strong>
            </p>

            <a
              href="#contact"
              className="inline-flex btn-gold px-7 py-3.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-gold transition-all duration-300"
            >
              Know More About Charru →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
