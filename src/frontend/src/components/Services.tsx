import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBuilding,
  FaHeart,
  FaHome,
  FaIndustry,
  FaLaptop,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: FaHome,
    title: "Residential Vastu",
    problem: "Is your home feeling stressful or unlucky?",
    help: "Vastu aligns your living space with natural energies to create a sanctuary of peace, health, and prosperity for your family.",
    benefits: [
      "Harmonious family life",
      "Improved health & wealth",
      "Positive energy flow",
    ],
  },
  {
    icon: FaBuilding,
    title: "Commercial & Office Vastu",
    problem: "Struggling with business stagnation?",
    help: "Transform your workplace into a powerhouse of productivity and success by harmonizing the energy of your commercial space.",
    benefits: ["Business growth", "Team productivity", "Financial prosperity"],
  },
  {
    icon: FaIndustry,
    title: "Industrial Vastu",
    problem: "Facing operational challenges?",
    help: "Optimize your industrial setup with Vastu principles to ensure smooth workflows, worker safety, and increased output.",
    benefits: ["Smooth operations", "Worker safety", "Increased output"],
  },
  {
    icon: FaLaptop,
    title: "Online Vastu Consultation",
    problem: "Can't visit in person?",
    help: "Get expert Vastu guidance from anywhere in the world. Distance is no barrier to transformation.",
    benefits: [
      "Consult from anywhere",
      "Detailed floor plan analysis",
      "Video call session",
    ],
  },
  {
    icon: FaHeart,
    title: "Vastu for Health, Wealth & Relationships",
    problem: "Life feels out of balance?",
    help: "Address specific life challenges with targeted Vastu solutions for health, financial growth, and harmonious relationships.",
    benefits: [
      "Health improvements",
      "Wealth attraction",
      "Relationship harmony",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="section-padding bg-beige relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
          transform: "translate(-35%, 35%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Services"
          headline="Vastu Consultation Services"
          lead="Ancient guidance refined for every modern space."
          subtitle="Tailored solutions for homes, offices, industries and more."
          isInView={isInView}
        />

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className={`card-elevated rounded-2xl p-6 flex flex-col group ${
                  isLast && services.length % 3 === 2 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Icon */}
                <div className="mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    <Icon
                      className="text-gold"
                      style={{ fontSize: "1.25rem" }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-[1.1rem] font-bold text-brown-text mb-2 group-hover:text-gold-dark transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="font-accent italic text-brown-medium text-sm mb-3 leading-relaxed">
                  {service.problem}
                </p>
                <p className="text-brown-medium text-sm leading-relaxed mb-4">
                  {service.help}
                </p>

                {/* Benefits */}
                <ul
                  className="space-y-2 mb-5 flex-1"
                  aria-label={`${service.title} benefits`}
                >
                  {service.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-brown-medium"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.12)" }}
                        aria-hidden="true"
                      >
                        <span className="text-gold text-[8px] font-bold">
                          ✦
                        </span>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-gold-outline px-5 py-2.5 rounded-full text-sm font-semibold w-full text-center mt-auto"
                  aria-label={`Book ${service.title} consultation`}
                >
                  Book Now
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
