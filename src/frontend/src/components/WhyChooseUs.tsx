import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  FaMedal,
  FaNetworkWired,
  FaRupeeSign,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const reasons = [
  {
    icon: FaUserCheck,
    title: "Personalized Consultation",
    desc: "Tailored solutions specific to your home, business & life goals. No generic advice — every recommendation is crafted for your unique space.",
  },
  {
    icon: FaRupeeSign,
    title: "Affordable & Practical Remedies",
    desc: "Cost-effective solutions that fit every budget. We believe Vastu benefits should be accessible to all, not just the privileged few.",
  },
  {
    icon: FaTools,
    title: "No Demolition Solutions",
    desc: "Simple changes like color, placement & directions — not a single wall needs to come down. Transform your space without any structural changes.",
  },
  {
    icon: FaMedal,
    title: "Experienced & Certified Expert",
    desc: "7+ years of proven expertise and certified training. Charru Gupta brings rigorous academic knowledge and real-world experience.",
  },
  {
    icon: FaNetworkWired,
    title: "Strong Student Community",
    desc: "Join 3000+ practitioners and support network. You're never alone on your Vastu journey — our community is always there for you.",
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

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-us"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative bg */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Our Difference"
          headline="Why Choose SimplyVastuShastra?"
          lead="Practical. Scientific. Life-changing."
          subtitle="We don't just consult — we transform spaces and the lives within them."
          isInView={isInView}
        />

        {/* Feature blocks */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="card-elevated rounded-xl p-6 group relative overflow-hidden"
              >
                {/* Subtle gold accent bar — only 2px, visually part of card not a stripe */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                >
                  <Icon className="text-gold" size={20} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brown-text mb-2 group-hover:text-gold-dark transition-colors">
                  {reason.title}
                </h3>
                <p className="text-brown-medium text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Decorative CTA block to fill the grid */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.35)",
              boxShadow:
                "0 2px 8px rgba(44,24,16,0.05), inset 0 1px 0 rgba(255,248,231,0.6)",
            }}
          >
            <div className="text-4xl mb-3 leading-none" aria-hidden="true">
              ॐ
            </div>
            <p className="font-serif text-brown-text font-bold text-lg mb-2">
              Ready to Transform?
            </p>
            <p className="text-brown-medium text-sm mb-4">
              Begin your Vastu journey today
            </p>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-gold px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:shadow-gold transition-all duration-300"
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
