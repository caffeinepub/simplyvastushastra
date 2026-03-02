# SimplyVastuShastra — Vastu Experience Centre Premium Overhaul

## Current State
The `/vastu-experience-centre` page exists with these sections: ParallaxHero, StatsStrip, StorySection (timeline), ScienceSection (myth vs science cards), WhatVastuIsSection (4 principles), TransformationStories (3 case studies), FinalCTA. The design is functional but not world-class. It uses emoji icons, basic card layouts, and lacks the immersive, editorial luxury feel worthy of the best Vastu experience in the world. The data is factually sound.

## Requested Changes (Diff)

### Add
- Cinematic full-bleed section with ambient video-like animated background for the hero
- "The Ancient Codex" section — large typographic pull-quote moments with Sanskrit text and translations
- Immersive "Direction Energy Map" interactive visual — an animated octagonal Vastu Purusha Mandala graphic
- "Meet Your Guide" bridge section — Charru Gupta introduction with credential strip
- Premium floating nav pills for section jumping inside the Experience Centre
- Dramatic chapter-title transitions between sections (numbered, editorial)
- Rich animated particle/star fields and parallax depth layers
- World-class typography — Fraunces for display, General Sans for body
- Animated number counters using Intersection Observer

### Modify
- Hero: Full viewport cinematic immersion, layered parallax Om watermark + mandala, dramatic gold gradient text animation, ambient glow rings with stagger
- Stats Strip: Transform into floating cards with depth shadows and count-up numbers
- Timeline section: Redesign with large editorial chapter numbers, full-bleed alternating image-and-text layout style
- Science cards: Full redesign with split-screen Myth/Science layout, dramatic reveal animations, no emoji — use SVG icons
- Principles: Redesign as large "codex pages" with illustrated borders and key Sanskrit terms
- Transformation stories: Before/After redesign with dramatic visual contrast treatment
- Final CTA: Cinematic dark gold section with floating particles and mandala motif

### Remove
- All emoji icons from content sections (replace with SVG or pure CSS)
- Generic rounded-2xl/white card aesthetic throughout
- Flat colour backgrounds — replace all with rich layered gradients

## Implementation Plan
1. Generate 2 hero images for the Experience Centre (ambient Vastu architecture visual)
2. Rebuild entire VastuExperienceCentrePage.tsx with all new sections and premium design
3. Ensure correct factual data throughout (6000 BCE origin, science explanations, case studies)
4. Add Fraunces + General Sans fonts properly via @font-face if not already present
5. Verify all links, WhatsApp number, and CTAs are correct
