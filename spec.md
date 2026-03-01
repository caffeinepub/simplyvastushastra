# SimplyVastuShastra

## Current State
- Full-stack Vastu website with Motoko backend and React/Tailwind frontend.
- Sections: Header, Hero, About, Services, Courses, WhyChooseUs, Testimonials, Blog, Contact, FloatingWhatsApp, Footer.
- Blog section shows 5 card previews with "Read More" buttons that do nothing (no modal/page).
- Contact form submits to `actor.submitForm(...)` — stores in canister only; no email notification.
- WhatsApp number is placeholder `91XXXXXXXXXX` in FloatingWhatsApp.tsx, Contact.tsx, and Footer.tsx.
- About section has a placeholder image box (no real photo of Charru Gupta).
- Hero section has no Charru Gupta photo.
- Charru Gupta logo uploaded: `/assets/uploads/Black-and-Gold-Classy-Minimalist-Circular-Name-Logo-1.png`
- Charru Gupta photo has been staged and will be saved as `/assets/uploads/charru-gupta.png`.
- Backend has `submitForm` and `getAllSubmissions`. No email functionality (email feature is disabled on this plan).

## Requested Changes (Diff)

### Add
- Save Charru Gupta's photo to `/assets/uploads/charru-gupta.png`.
- Blog detail modal: clicking "Read More" on any blog card opens a full readable blog post in a modal/drawer with full article content. Each of the 5 posts needs 300-500 word full article content written on Vastu topics.
- Add Charru Gupta photo to the About section (replacing placeholder box).
- Add Charru Gupta photo to the Hero section (right side, editorial style).
- Store form submissions in canister (already done); since email is disabled, show clear success message.

### Modify
- WhatsApp number: replace all `91XXXXXXXXXX` with `919871718653` in FloatingWhatsApp.tsx, Contact.tsx, Footer.tsx.
- Phone number display: replace `+91 XXXXX XXXXX` with `+91 98717 18653` in Contact.tsx.
- About section: replace placeholder SVG/icon with actual `<img>` of Charru Gupta photo.
- Blog section: wire "Read More" buttons to open a blog detail modal with full article content.
- Contact section: after successful form submission, display "Your message has been received. Charru Gupta will contact you at charrugupta10@gmail.com" (note: actual email sending is not available on this plan, submissions are stored in the canister).

### Remove
- Placeholder icon (FaLeaf) and decorative SVG in About section image area.

## Implementation Plan
1. Save Charru Gupta photo from staged uploads into the correct public assets path.
2. Create a `BlogModal` component that renders full blog articles in a readable modal dialog.
3. Write full 300-500 word articles for all 5 blog posts.
4. Update `Blog.tsx` to use state for selected post and render `BlogModal`.
5. Update `About.tsx` to show `<img src="/assets/uploads/charru-gupta.png">` instead of placeholder.
6. Update `Hero.tsx` to add Charru Gupta photo on the right side.
7. Update `FloatingWhatsApp.tsx`: replace `91XXXXXXXXXX` → `919871718653`.
8. Update `Contact.tsx`: replace WhatsApp link and phone number display with real number.
9. Update `Footer.tsx`: replace WhatsApp link with real number.
10. Update Contact form success message to mention charrugupta10@gmail.com contact.
