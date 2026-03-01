# SimplyVastuShastra

## Current State
New project. No existing code. A full-stack Caffeine app with Motoko backend and React frontend will be created from scratch.

## Requested Changes (Diff)

### Add
- Full single-page website for SimplyVastuShastra — a Vastu Shastra consultancy and education brand by Charru Gupta
- Sticky responsive navigation with logo, nav links, and "Book Consultation" CTA
- Hero section with mandala pattern overlay, headline, subheadline, dual CTAs, trust indicators
- About section with image placeholder, bio, credentials, signature element
- Services section with 5 service cards (Residential, Commercial, Industrial, Online, Health/Wealth/Relationships) each with icon, description, benefits, and Book Now CTA
- Courses section with feature highlights grid and 3 course cards (Beginner, Advanced, Professional) with price/duration/features and Enroll Now CTA
- Why Choose Us section with 5 feature blocks
- Testimonials section with 5 client cards (Priya Sharma, Rajesh Verma, Sunita Patel, Amit Kumar, Meera Joshi) with star ratings
- Blog section with 5 SEO-targeted article cards in a 3-col grid
- Contact section with a validated form (Name, Email, Phone, Service dropdown, Message) and contact info panel
- Floating WhatsApp button always visible
- Footer with logo, quick links, services list, social icons, copyright
- Backend: contact form submission storage and retrieval
- SEO: meta title, meta description, semantic HTML, Schema.org LocalBusiness markup

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan

### Backend
1. Define `ContactSubmission` type: id, name, email, phone, service, message, timestamp
2. Expose `submitContact(name, email, phone, service, message)` update call — stores submission, returns Ok/Err
3. Expose `getSubmissions()` query — returns list of all submissions (admin use)

### Frontend
1. Configure Tailwind with custom brand color tokens (beige, gold palette, brown shades)
2. Add Google Fonts: Playfair Display, Inter, Cormorant Garamond via index.html
3. Set global CSS: smooth scroll, base text color, font families
4. Add SEO meta tags and LocalBusiness JSON-LD schema in index.html
5. Create component files:
   - `Header.tsx` — sticky nav, logo with Om symbol, hamburger mobile menu, scroll shadow
   - `Hero.tsx` — gradient background, inline SVG mandala overlay, headline, CTAs, trust indicators, floating SVG decor
   - `About.tsx` — two-column layout, image placeholder with gold frame, bio text, credential badges, signature
   - `Services.tsx` — 5 cards grid with icons, descriptions, bullet benefits, Book Now buttons
   - `Courses.tsx` — feature highlights icon grid, 3 course cards, Enroll Now CTA
   - `WhyChooseUs.tsx` — 5 feature blocks with icons
   - `Testimonials.tsx` — 5 star-rated client cards
   - `Blog.tsx` — 5 article cards in 3-col grid with category tags
   - `Contact.tsx` — two-column layout, validated form wired to backend submitContact, contact info panel
   - `FloatingWhatsApp.tsx` — fixed bottom-right WhatsApp button
   - `Footer.tsx` — logo, links, services, social icons, copyright
6. Implement Framer Motion scroll-triggered fade-in-up animations on each section
7. Wire contact form to backend `submitContact` actor call
8. Validate form fields before submission (name required, email format, phone format)
