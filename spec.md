# SimplyVastuShastra

## Current State
- Single-page React app with sections: Hero, About, Services, Courses, WhyChooseUs, Testimonials, Blog (cards + modal), Contact, Footer.
- Blog section shows 5 posts as cards; clicking opens a modal. No dedicated blog page.
- `index.html` has basic title, description, one OG tag, and a minimal LocalBusiness schema. No canonical URL, no robots meta, no sitemap, no keywords meta, no geo meta tags.
- No React Router — all navigation is anchor-scroll based.
- Header links use `#blog` anchor to scroll to the blog section.

## Requested Changes (Diff)

### Add
- **React Router** (`react-router-dom`) — add BrowserRouter in `main.tsx` so routes work.
- **Dedicated `/blogs` page** (`src/frontend/src/pages/BlogsPage.tsx`) — full-page blog listing with all posts, category filters, search bar, SEO-optimized H1, meta description, and structured `Article` schema data per post. Each post has its own URL slug (`/blogs/top-10-vastu-tips`, etc.) rendered via a nested route.
- **Individual blog post page** (`src/frontend/src/pages/BlogPostPage.tsx`) — full article view at `/blogs/:slug` with dynamic `<title>`, meta description, Open Graph, and JSON-LD `BlogPosting` schema. Back button returns to `/blogs`.
- **`sitemap.xml`** in `public/` listing all main routes and all blog post URLs with `lastmod` and `changefreq`.
- **`robots.txt`** in `public/` allowing all crawlers and pointing to sitemap.
- **SEO enhancements to `index.html`**:
  - Expanded `<title>` with primary keywords.
  - `<meta name="keywords">` with 50+ Vastu-related keywords.
  - `<meta name="robots" content="index, follow">`.
  - `<meta name="geo.region" content="IN">`, `<meta name="geo.placename" content="India">`.
  - Canonical `<link rel="canonical">`.
  - Expanded Open Graph tags (og:image, og:url, og:site_name, og:locale).
  - Twitter Card tags.
  - Enhanced JSON-LD schema: `LocalBusiness` + `Person` + `WebSite` with `SearchAction`.
  - `<meta name="author" content="Charru Gupta">`.
- **Blog nav link** in Header and Footer pointing to `/blogs` (not `#blog`).
- **"View All Blogs" button** on the homepage Blog section linking to `/blogs`.
- Blog post `data` file (`src/frontend/src/data/blogPosts.ts`) — extract all blog content here so it is shared between homepage Blog section, BlogsPage, and BlogPostPage. Add `slug`, `date`, `author`, `metaDescription`, `keywords` fields to each post.
- Add 5 more blog posts covering: Vastu for bedroom, Vastu for north-facing house, Vastu for money and wealth, Vastu remedies without demolition, Vastu for newly married couples.

### Modify
- `Blog.tsx` — import posts from `blogPosts.ts`, add "View All Blogs →" CTA link at bottom of section.
- `BlogModal.tsx` — still used on homepage for quick preview; keep as is.
- `Header.tsx` — Blog nav link now navigates to `/blogs` page using React Router `<Link>`. Also handle `#home`, `#about`, etc. — on the homepage these remain anchor links; on sub-pages they navigate to `/#home`, etc.
- `Footer.tsx` — Blog quick link updated to `/blogs`.
- `App.tsx` — wrap with `<Routes>`: `/` renders the existing homepage, `/blogs` renders `BlogsPage`, `/blogs/:slug` renders `BlogPostPage`. Shared layout (Header, FloatingWhatsApp, Footer, ScrollToTop) wraps all routes.
- `main.tsx` — wrap app in `<BrowserRouter>`.

### Remove
- Nothing removed; existing blog modal on homepage stays for quick-read UX.

## Implementation Plan
1. Install `react-router-dom` if not already present.
2. Create `src/frontend/src/data/blogPosts.ts` with all 10 posts (5 existing + 5 new), each with `slug`, `title`, `category`, `excerpt`, `readTime`, `content`, `date`, `author`, `metaDescription`, `keywords[]`, `coverImage`.
3. Create `src/frontend/src/pages/BlogsPage.tsx` — full blog listing with search + category filter, SEO head tags via a `useEffect` that sets `document.title` and meta description, JSON-LD `ItemList` schema.
4. Create `src/frontend/src/pages/BlogPostPage.tsx` — renders full article, sets dynamic document.title + meta description + JSON-LD `BlogPosting` schema on mount, Back button.
5. Update `App.tsx` to use React Router `<Routes>` with a shared layout.
6. Update `main.tsx` to add `<BrowserRouter>`.
7. Update `Blog.tsx` to import from `blogPosts.ts` and add "View All Blogs" link.
8. Update `Header.tsx` — Blog link → `/blogs`, home-page anchors work correctly on both routes.
9. Update `Footer.tsx` — Blog link → `/blogs`.
10. Upgrade `index.html` with full SEO meta tags, keywords, geo tags, canonical, OG/Twitter, and enhanced JSON-LD.
11. Create `public/sitemap.xml` and `public/robots.txt`.
