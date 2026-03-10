# SimplyVastuShastra

## Current State
The site is a single-page app (SPA) with all sections (Hero, About, Services, Courses, WhyChooseUs, Testimonials, Blog, Contact, etc.) on the homepage. Separate pages exist for: /blogs, /blogs/:slug, /vastu-experience-centre, /services/:slug (4 service types), /vastu-consultant/:slug (city pages), /areas-we-serve.

The Services dropdown in the Header currently shows 4 services: Online Vastu Consultation, Home Vastu Consultation, Office Vastu Consultation, Industrial Vastu Consultation.

## Requested Changes (Diff)

### Add
- `/about` — standalone About page (uses About component content, full page with hero banner)
- `/services` — standalone Services overview page (3 services only: Residential, Commercial, Industrial)
- `/services/residential-vastu` — dedicated Residential Vastu page
- `/services/commercial-vastu` — dedicated Commercial Vastu page  
- `/services/industrial-vastu` — dedicated Industrial Vastu page
- `/courses` — standalone Courses page (uses Courses component content, full page)
- `/contact` — standalone Contact page (uses Contact component content, full page)

### Modify
- Header: Change all anchor-scroll nav links to real page routes:
  - About → /about
  - Services dropdown → only 3 services: Residential (/services/residential-vastu), Commercial (/services/commercial-vastu), Industrial (/services/industrial-vastu)
  - Courses → /courses
  - Contact → /contact (also update Book Consultation CTA button)
- Services component: Update "Book Now" buttons to link to /contact
- Header mobile menu: Same routing changes
- Remove "Online Vastu Consultation" from SERVICE_LINKS (only Residential, Commercial, Industrial remain)

### Remove
- Old service slugs: online-vastu-consultation, home-vastu-consultation, office-vastu-consultation, industrial-vastu-consultation from the dropdown (replace with residential-vastu, commercial-vastu, industrial-vastu)

## Implementation Plan
1. Create AboutPage.tsx wrapping the About component with a page hero banner
2. Create ServicesPage.tsx as standalone page with all 3 services
3. Create individual service pages: ResidentialVastuPage.tsx, CommercialVastuPage.tsx, IndustrialVastuPage.tsx  
4. Create CoursesPage.tsx wrapping the Courses component
5. Create ContactPage.tsx wrapping the Contact component
6. Update router.tsx to add all new routes
7. Update Header.tsx SERVICE_LINKS and change nav links from anchor-scroll to page routes
8. Keep homepage as-is with all sections intact for SEO
