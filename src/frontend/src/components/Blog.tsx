import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const posts = [
  {
    category: "Vastu Tips",
    title: "Top 10 Vastu Tips for a Happy and Prosperous Home",
    excerpt:
      "Discover the most effective Vastu principles that can bring harmony, prosperity, and happiness to your home. Simple, practical, and powerful.",
    readTime: "5 min read",
  },
  {
    category: "Online Consultation",
    title: "How Online Vastu Consultation Can Transform Your Life",
    excerpt:
      "Distance is no barrier to Vastu. Learn how expert online consultation delivers the same powerful results as in-person visits.",
    readTime: "4 min read",
  },
  {
    category: "Business Vastu",
    title: "Vastu for Business Growth: Attract Success to Your Office",
    excerpt:
      "Your workspace energy directly impacts your business performance. Learn key Vastu principles for commercial spaces and watch your business thrive.",
    readTime: "6 min read",
  },
  {
    category: "Expert Guide",
    title: "Why Charru Gupta is the Best Vastu Expert in India",
    excerpt:
      "With 7+ years of experience and 1000+ consultations, discover what makes SimplyVastuShastra unique in India's Vastu landscape.",
    readTime: "4 min read",
  },
  {
    category: "Vastu Guide",
    title: "Complete Guide to Vastu Consultant Services in India",
    excerpt:
      "A comprehensive overview of professional Vastu consultation services and how to choose the right expert for your home or business.",
    readTime: "7 min read",
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

const articleColors = [
  { from: "#FFF8E7", to: "#EDE0C4" },
  { from: "#F5F0E8", to: "#E8D8B0" },
  { from: "#FFF3D4", to: "#F0E0B0" },
  { from: "#FFF8E7", to: "#EDE0C4" },
  { from: "#F5F0E8", to: "#E8D8B0" },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="blog"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Subtle bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Blog & Insights"
          headline="Vastu Insights & Tips"
          lead="Practical wisdom from 7+ years of Vastu practice."
          subtitle="Expert knowledge to help you harness the power of Vastu."
          isInView={isInView}
        />

        {/* Blog Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="card-elevated rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Placeholder image */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${articleColors[i].from} 0%, ${articleColors[i].to} 100%)`,
                }}
                role="img"
                aria-label={`Decorative image for ${post.title}`}
              >
                {/* Mandala decoration */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ opacity: 0.12, color: "#C9A84C" }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 200 200"
                    className="w-40 h-40"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="55"
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
                    {[0, 60, 120].map((a) => (
                      <line
                        key={a}
                        x1="100"
                        y1="20"
                        x2="100"
                        y2="180"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        transform={`rotate(${a} 100 100)`}
                      />
                    ))}
                  </svg>
                </div>
                {/* Om symbol */}
                <span
                  className="relative z-10 font-serif text-6xl select-none"
                  style={{ color: "#C9A84C", opacity: 0.6 }}
                  aria-hidden="true"
                >
                  ॐ
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gold-deep bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-brown-light">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-brown-text mb-2 leading-snug group-hover:text-gold-dark transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-brown-medium text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button
                  type="button"
                  className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors inline-flex items-center gap-1 group/link w-fit"
                  aria-label={`Read more: ${post.title}`}
                >
                  Read More
                  <span
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
