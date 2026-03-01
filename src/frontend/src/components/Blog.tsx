import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import BlogModal, { type BlogPost } from "./BlogModal";
import SectionHeader from "./SectionHeader";

const posts: BlogPost[] = [
  {
    category: "Vastu Tips",
    title: "Top 10 Vastu Tips for a Happy and Prosperous Home",
    excerpt:
      "Discover the most effective Vastu principles that can bring harmony, prosperity, and happiness to your home. Simple, practical, and powerful.",
    readTime: "5 min read",
    content: (
      <div className="blog-content">
        <p>
          Vastu Shastra is the ancient Indian science of architecture and energy
          alignment. When your home's design and placement align with natural
          energies, it creates an environment of harmony, health, and abundance.
          Here are 10 powerful, practical Vastu tips you can implement right
          now.
        </p>

        <h3>1. Main Entrance: Face North or East</h3>
        <p>
          The main entrance is the mouth of your home — it's where energy
          enters. A north- or east-facing entrance invites prosperity and
          positive solar energy. Keep it well-lit, clean, and clutter-free.
          Avoid placing shoes, broken items, or dustbins near the entrance.
        </p>

        <h3>2. Master Bedroom in the South-West</h3>
        <p>
          The south-west zone represents stability and grounding energy. Placing
          the master bedroom here promotes stability in relationships, restful
          sleep, and a sense of security. The head of the bed should ideally
          face south or east.
        </p>

        <h3>3. Kitchen in the South-East (Fire Zone)</h3>
        <p>
          The south-east corner is governed by the fire element, making it the
          ideal zone for the kitchen. The cook should face east while cooking,
          which activates positive solar energy. Avoid placing the kitchen in
          the north-east, as this can affect the health of the family.
        </p>

        <h3>4. Bathrooms — Keep Them Isolated</h3>
        <p>
          Bathrooms should ideally be located in the north-west or west zone.
          Never place them in the north-east (Brahmasthan zone) or south-west,
          as these placements can drain positive energy. Always keep bathroom
          doors closed and ensure they are well-ventilated.
        </p>

        <h3>5. No Mirrors Facing the Bed</h3>
        <p>
          Mirrors facing the bed are one of the most common Vastu doshas in
          Indian homes. They can cause restlessness, disturbed sleep, and
          relationship problems. If you can't remove the mirror, cover it while
          sleeping with a cloth or curtain.
        </p>

        <h3>6. Protect the Brahmasthan (Centre of the Home)</h3>
        <p>
          The centre of any home or plot is called the Brahmasthan — the sacred
          energetic nucleus. It should always be kept open, clean, and free of
          heavy furniture, pillars, toilets, or staircase. A cluttered
          Brahmasthan leads to confusion and health issues in the family.
        </p>

        <h3>7. Use the Right Colors for Each Room</h3>
        <p>
          Colors carry vibrations. Yellow and off-white for the north-east
          (meditation, learning), greens for the east (health), earthy tones for
          the south-west (stability), and light blues or whites for the north
          (wealth zone). Avoid red in bedrooms — it increases aggression.
        </p>

        <h3>8. Proper Lighting — Especially in the North-East</h3>
        <p>
          The north-east is the zone of divine energy and should be well-lit and
          bright. Dark north-east corners can block prosperity. Install soft,
          warm lights in this zone. Ensure all bulbs are working — a flickering
          or dead bulb is a Vastu defect.
        </p>

        <h3>9. Tulsi and Money Plant — Nature's Vastu Remedies</h3>
        <p>
          Plants are powerful Vastu tools. Place a Tulsi plant in the east or
          north-east to purify the air and invite divine blessings. A money
          plant in the south-east attracts financial growth. Avoid cacti or
          thorny plants inside the home — they generate conflict energy.
        </p>

        <h3>10. Declutter Regularly — The Most Underrated Vastu Remedy</h3>
        <p>
          Clutter is stuck energy. Unused, broken, or old items block the flow
          of fresh energy in your home. Donate or discard items you haven't used
          in a year. Pay special attention to the north zone (wealth) — keeping
          it clear and organized opens pathways for financial flow.
        </p>

        <p>
          Implementing even 3-4 of these tips can create a noticeable shift in
          your home's energy. For a personalised analysis of your space, book a
          consultation with Charru Gupta at SimplyVastuShastra.
        </p>
      </div>
    ),
  },
  {
    category: "Online Consultation",
    title: "How Online Vastu Consultation Can Transform Your Life",
    excerpt:
      "Distance is no barrier to Vastu. Learn how expert online consultation delivers the same powerful results as in-person visits.",
    readTime: "4 min read",
    content: (
      <div className="blog-content">
        <p>
          In today's connected world, geography is no longer a barrier to
          accessing expert Vastu guidance. Online Vastu consultation has
          revolutionised how people experience the transformative power of this
          ancient science — making it accessible to anyone, anywhere in the
          world.
        </p>

        <h3>How Does Online Vastu Consultation Work?</h3>
        <p>
          An online Vastu session with Charru Gupta typically involves three key
          elements: a detailed floor plan of your home or office (even a
          hand-drawn sketch works), photographs of each room and the main
          entrance, and a one-on-one video call for discussion and
          personalisation. No physical visit is required — yet the analysis is
          just as thorough and accurate.
        </p>

        <h3>Is Online Vastu as Effective as In-Person?</h3>
        <p>
          Absolutely. Vastu principles are based on directions, zones, and
          placement — all of which can be assessed precisely from floor plans
          and photographs. The remedies — involving colours, furniture
          placement, element balancing, and directional corrections — are
          identical whether your consultant is physically present or not. What
          matters is the expertise of the practitioner, not their physical
          proximity.
        </p>

        <h3>What to Expect From a Session With Charru Gupta</h3>
        <p>
          When you book an online consultation, here's what happens: First, you
          share your floor plan and photos. Charru conducts a detailed zone-wise
          analysis of your space. Then comes a 60-90 minute video call where she
          explains every finding clearly and answers your questions. After the
          session, you receive a written report outlining all observations and
          remedies, along with a follow-up check-in to ensure everything is
          working.
        </p>

        <h3>Convenience Without Compromise</h3>
        <p>
          Online consultations mean you can access India's best Vastu expertise
          from your home in Delhi, Mumbai, Bangalore, or even from abroad. There
          are no travel delays, no scheduling complications, and the session can
          be recorded for your future reference. Families in the UK, USA,
          Canada, and Australia regularly take sessions with Charru via online
          mode.
        </p>

        <h3>Why Distance Doesn't Matter in Vastu</h3>
        <p>
          Vastu is a spatial science. The energy zones of a building are
          determined by compass directions and the placement of rooms — not by
          the physical presence of a consultant. A seasoned expert like Charru
          Gupta can identify energy imbalances, analyse directional doshas, and
          prescribe precise remedies purely through spatial data. The results
          speak for themselves — clients regularly report improvements in
          health, relationships, finances, and overall peace within weeks of
          implementing the recommendations.
        </p>

        <h3>Ready to Begin Your Transformation?</h3>
        <p>
          Booking an online Vastu consultation with SimplyVastuShastra is simple
          — just fill out the contact form with your details and preferred time,
          and Charru's team will get back to you within 24 hours to schedule
          your session. Your journey to a harmonious home begins today.
        </p>
      </div>
    ),
  },
  {
    category: "Business Vastu",
    title: "Vastu for Business Growth: Attract Success to Your Office",
    excerpt:
      "Your workspace energy directly impacts your business performance. Learn key Vastu principles for commercial spaces and watch your business thrive.",
    readTime: "6 min read",
    content: (
      <div className="blog-content">
        <p>
          The energy of your workplace directly influences the decisions made
          there, the productivity of your team, and the financial outcomes of
          your business. Vastu Shastra for commercial spaces is one of the
          fastest-growing areas of Vastu consultation — and for good reason. The
          results are often dramatic and swift.
        </p>

        <h3>Office Entrance: The Gateway to Business Success</h3>
        <p>
          The main entrance of your office should ideally face north or east.
          North is governed by Kubera, the deity of wealth, making it the most
          auspicious direction for business. The reception area should be
          welcoming, well-lit, and clutter-free. A positive first impression at
          the entrance sets the energetic tone for every client and visitor.
        </p>

        <h3>MD / Owner's Cabin: South-West for Authority</h3>
        <p>
          The business owner or MD's office should be located in the south-west
          corner of the premises. This zone is associated with stability,
          authority, and grounding energy. The owner should sit facing north or
          east while working — this posture aligns with wealth (north) and solar
          energy (east), both conducive to sharp decision-making and leadership.
        </p>

        <h3>Cash Locker and Finance: Always Face North</h3>
        <p>
          The cash locker, safe, or finance department should be placed on the
          south or south-west wall, with the door opening towards the north.
          This placement aligns the wealth storage with the north zone — ruled
          by Kubera — and is believed to continuously attract financial
          abundance. Never place the cash locker in the south-east or north-east
          corners.
        </p>

        <h3>Water Element in the North</h3>
        <p>
          The north zone governs career, wealth, and opportunities. Placing a
          water feature — an aquarium, small fountain, or even a water dispenser
          — in the north zone activates this area and keeps the flow of
          opportunities steady. Water symbolises the continuous movement of
          money and new business.
        </p>

        <h3>Avoid Broken Furniture and Clutter</h3>
        <p>
          Broken chairs, non-functional equipment, dead plants, or overstuffed
          storage create stagnant energy. In a business environment, stagnant
          energy translates directly to stalled growth, delayed payments, and
          team conflicts. Regularly audit your workspace and remove anything
          that no longer serves a purpose.
        </p>

        <h3>Team Seating Arrangements</h3>
        <p>
          Sales and marketing teams should ideally sit in the north-west, as
          this zone governs movement, communication, and travel — all essential
          for sales success. The accounts and finance team does well in the
          south-west for stability. Avoid placing employees with their backs to
          the main entrance, as it creates a subconscious sense of
          vulnerability.
        </p>

        <h3>Colors That Boost Productivity</h3>
        <p>
          Green is excellent for office spaces — it represents growth, calm, and
          focus. White and cream for walls create a neutral, productive
          atmosphere. Avoid heavy reds or dark greys in work areas. The north
          zone can be highlighted with blue to amplify career energy.
        </p>

        <h3>Reception Area: Your First Impression</h3>
        <p>
          The reception should be kept immaculately clean and welcoming. Place a
          water feature or flowering plants here. Ensure the logo or company
          name is prominently displayed on the east or north wall. Avoid
          clutter, broken items, or storage boxes in the reception — it sends
          the wrong message to both clients and the universe.
        </p>

        <p>
          Implementing these Vastu principles in your office can lead to
          improved team morale, faster business growth, better client
          relationships, and stronger financial performance. Contact
          SimplyVastuShastra for a comprehensive Business Vastu consultation
          today.
        </p>
      </div>
    ),
  },
  {
    category: "Expert Guide",
    title: "Why Charru Gupta is the Best Vastu Expert in India",
    excerpt:
      "With 7+ years of experience and 1000+ consultations, discover what makes SimplyVastuShastra unique in India's Vastu landscape.",
    readTime: "4 min read",
    content: (
      <div className="blog-content">
        <p>
          India has thousands of Vastu practitioners, but only a handful combine
          deep traditional knowledge with a modern, scientific, and practical
          approach. Charru Gupta of SimplyVastuShastra is one such rare expert —
          and her track record speaks louder than any advertisement.
        </p>

        <h3>7+ Years of Dedicated Practice</h3>
        <p>
          Charru Gupta has been practising Vastu Shastra for over seven years,
          having helped transform homes, offices, factories, and plots across
          India and internationally. Her journey began with a personal
          experience of how Vastu changes can bring dramatic improvements in
          health, relationships, and finances — and she has been dedicated to
          sharing that transformation with others ever since.
        </p>

        <h3>1000+ Successful Consultations</h3>
        <p>
          With over a thousand consultations completed across residential,
          commercial, and industrial projects, Charru has amassed a wealth of
          real-world experience. Each case is different — different floor plans,
          different family compositions, different challenges — and this
          diversity has made her expertise deep, nuanced, and reliable.
        </p>

        <h3>The No-Demolition Philosophy</h3>
        <p>
          What truly sets Charru apart is her no-demolition approach. Many Vastu
          "experts" recommend costly structural changes — breaking walls,
          relocating kitchens, shifting bathrooms. Charru firmly believes that
          85-90% of Vastu doshas can be corrected through simple, non-invasive
          remedies: colour changes, strategic furniture placement, use of
          elements and symbols, and directional corrections. This philosophy
          makes quality Vastu accessible to everyone, not just those with
          renovation budgets.
        </p>

        <h3>Certified Vastu Practitioner and Educator</h3>
        <p>
          Charru is a certified Vastu practitioner with formal training in the
          ancient texts and their modern applications. Beyond consultation, she
          is deeply passionate about education — having trained over 3,000
          students through her online and offline Vastu courses. Her courses are
          known for being practical, jargon-free, and immediately applicable to
          real-world situations.
        </p>

        <h3>A Personalised, Scientific Approach</h3>
        <p>
          Every consultation begins with a thorough listening session —
          understanding the family's composition, current challenges, and
          aspirations. Charru then analyses the floor plan using Vastu Purush
          Mandala, the 16-zone compass system, and the Panchtatva (5 elements)
          framework. The result is a highly personalised set of remedies — not a
          generic checklist.
        </p>

        <h3>Accessible Online and Offline</h3>
        <p>
          Based in India but serving clients globally, Charru offers both
          in-person site visits (primarily in Delhi NCR and surrounding regions)
          and comprehensive online consultations via video call. This
          flexibility means anyone, anywhere can access her expertise.
        </p>

        <h3>What Clients Experience</h3>
        <p>
          Clients regularly share stories of dramatic improvements after
          implementing Charru's recommendations: a stalled business that started
          growing, a health issue that improved after bedroom placement changed,
          a marriage that became more harmonious after simple bedroom Vastu
          corrections. These aren't coincidences — they are the result of
          restoring natural energy flow within the home.
        </p>

        <p>
          If you are looking for a Vastu expert who combines deep knowledge with
          a compassionate, practical, and accessible approach, Charru Gupta at
          SimplyVastuShastra is your answer. Book your consultation today.
        </p>
      </div>
    ),
  },
  {
    category: "Vastu Guide",
    title: "Complete Guide to Vastu Consultant Services in India",
    excerpt:
      "A comprehensive overview of professional Vastu consultation services and how to choose the right expert for your home or business.",
    readTime: "7 min read",
    content: (
      <div className="blog-content">
        <p>
          Vastu Shastra is experiencing a remarkable renaissance across India
          and the world. More and more homeowners, business professionals, and
          builders are seeking professional Vastu guidance before constructing,
          buying, or renovating spaces. But with so many practitioners in the
          market, how do you choose the right one? This comprehensive guide will
          walk you through everything you need to know.
        </p>

        <h3>What Does a Vastu Consultation Include?</h3>
        <p>
          A professional Vastu consultation is a detailed, systematic analysis
          of your space. It includes: a zone-wise analysis of your floor plan
          using the 16-zone Vastu compass system, identification of Vastu doshas
          (energy imbalances) in each zone, assessment of room placements (where
          is the kitchen, master bedroom, bathroom, etc.), analysis of the main
          entrance direction, review of the five elements balance (earth, water,
          fire, air, space), and specific, actionable remedies for each issue
          found.
        </p>

        <h3>Types of Vastu Consultations</h3>
        <p>
          <strong>Residential Vastu:</strong> For homes, apartments, and
          individual plots. Covers all aspects from entrance to bedroom, kitchen
          to children's room. The goal is to create a space that promotes
          health, harmony, relationships, and financial growth for the entire
          family.
        </p>
        <p>
          <strong>Commercial Vastu:</strong> For offices, shops, restaurants,
          and other commercial spaces. Focuses on maximising productivity,
          attracting clients, and enhancing financial performance.
        </p>
        <p>
          <strong>Industrial Vastu:</strong> For factories, warehouses, and
          manufacturing units. Addresses issues related to workforce harmony,
          production efficiency, and safety.
        </p>
        <p>
          <strong>Land/Plot Vastu:</strong> Conducted before purchase or
          construction to ensure the land's shape, slope, surroundings, and
          energy are favourable.
        </p>

        <h3>What to Look for in a Vastu Expert</h3>
        <p>
          Choose a certified Vastu practitioner with formal training — not
          someone who has merely read a few books or watched online videos. Look
          for experience (at least 5+ years and 500+ consultations), a
          systematic and scientific approach, willingness to explain the reasons
          behind each recommendation, and an emphasis on practical, non-invasive
          remedies before suggesting structural changes.
        </p>

        <h3>Common Myths vs Facts About Vastu</h3>
        <p>
          <strong>Myth:</strong> Vastu requires breaking walls and major
          renovations.
          <br />
          <strong>Fact:</strong> 85% of Vastu issues can be resolved through
          colour, furniture placement, elements, and symbols — no demolition
          needed.
        </p>
        <p>
          <strong>Myth:</strong> Vastu is just superstition.
          <br />
          <strong>Fact:</strong> Vastu is a spatial science based on directions,
          the movement of the sun, magnetic fields, and the five elements. Its
          principles align with modern research in environmental psychology and
          biophilic design.
        </p>
        <p>
          <strong>Myth:</strong> You need to believe in Vastu for it to work.
          <br />
          <strong>Fact:</strong> Vastu is about environmental energy, not faith.
          Just as air conditioning works whether you believe in it or not, Vastu
          energy flows regardless of belief.
        </p>

        <h3>How to Prepare for Your Consultation</h3>
        <p>
          For the best experience, have ready: a floor plan of your home or
          office (hand-drawn is fine), the compass direction of your main
          entrance, photographs of key rooms, a list of challenges you are
          currently facing (health, finances, relationships, etc.), and any
          specific questions you have in mind.
        </p>

        <h3>Expected Outcomes</h3>
        <p>
          Most clients begin to notice changes within 21-40 days of implementing
          Vastu recommendations. Improvements are commonly reported in: sleep
          quality, relationship harmony, financial flow, mental clarity and
          focus, health and energy levels, and overall sense of peace and
          well-being at home.
        </p>

        <p>
          Investing in a professional Vastu consultation is one of the highest
          ROI decisions you can make for your home or business. The cost of a
          consultation is a fraction of the value it can unlock in your life.
          Begin your Vastu journey today with SimplyVastuShastra.
        </p>
      </div>
    ),
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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
              className="card-elevated rounded-2xl overflow-hidden group flex flex-col cursor-pointer"
              onClick={() => setSelectedPost(post)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
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

      {/* Blog Article Modal */}
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
