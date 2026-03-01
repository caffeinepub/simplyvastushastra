import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Delhi",
    initials: "PS",
    text: "After getting Vastu consultation for my home, we experienced a remarkable improvement in family harmony and finances within just 3 months!",
    service: "Residential Vastu",
  },
  {
    name: "Rajesh Verma",
    city: "Mumbai",
    initials: "RV",
    text: "My business was stagnating for 2 years. After implementing Vastu changes, we saw 40% growth in just 6 months. Highly recommend Charru ji!",
    service: "Commercial Vastu",
  },
  {
    name: "Sunita Patel",
    city: "Bangalore",
    initials: "SP",
    text: "I was skeptical at first, but the practical approach and no-demolition solutions convinced me. Our home feels so much more peaceful now.",
    service: "Residential Vastu",
  },
  {
    name: "Amit Kumar",
    city: "Pune",
    initials: "AK",
    text: "The online consultation was so convenient. Charru ji analyzed our floor plan and gave specific remedies. We saw positive changes in 2 weeks!",
    service: "Online Consultation",
  },
  {
    name: "Meera Joshi",
    city: "Hyderabad",
    initials: "MJ",
    text: "I enrolled in the Professional Vastu Course and it completely changed my career. Now I have my own Vastu practice with 50+ clients!",
    service: "Vastu Course",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #F0E8D4 40%, #EDE0C4 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          headline="Real Stories, Real Transformations"
          lead="Voices from families and businesses we've helped across India."
          subtitle="Join 1000+ clients who experienced the power of Vastu."
          isInView={isInView}
        />

        {/* Testimonial Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={itemVariants}
              className="card-elevated rounded-2xl p-6 flex flex-col"
            >
              {/* Top row: stars + service badge + verified */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                    <FaStar
                      key={k}
                      className="text-gold"
                      size={13}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-gold-deep bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase">
                    {t.service}
                  </span>
                  <span className="text-[10px] text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full font-semibold">
                    ✓ Verified
                  </span>
                </div>
              </div>

              {/* Large decorative open-quote */}
              <div
                className="font-serif select-none leading-none mb-1"
                style={{
                  fontSize: "5rem",
                  color: "#C9A84C",
                  opacity: 0.18,
                  lineHeight: "0.7",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
                aria-hidden="true"
              >
                &#8220;
              </div>

              {/* Testimonial text */}
              <blockquote className="text-brown-medium text-sm leading-relaxed flex-1 mb-5 font-accent italic text-[0.9rem]">
                {t.text}
              </blockquote>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8860B 100%)",
                    boxShadow: "0 0 0 2px rgba(201,168,76,0.3)",
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-brown-text text-sm leading-tight">
                    {t.name}
                  </p>
                  <p className="text-brown-light text-xs">{t.city}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
