# The Handstand School — Complete Website Implementation

An interactive, responsive, multi-page website demonstration for **The Handstand School**, built with React, TypeScript, Vite, and React Router.

Designed specifically to translate finished design mockups into a Kajabi-aware architecture without breaking existing course portals, active subscriptions, or student login workflows.

---

## 🚀 Live Demo & Deployment

This project is pre-configured for **Netlify** with single-page app (SPA) rewrite rules in both `netlify.toml` and `public/_redirects`.

### Netlify Deployment Settings
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node Version:** 18+ / 20+

---

## 🛠️ Tech Stack & Architecture

- **React 19 & TypeScript:** Type-safe components and modular UI structure.
- **Vite:** Blazing fast builds and HMR.
- **React Router 7:** Seamless client-side routing across all primary and secondary routes.
- **Lucide Icons:** Crisp vector icons.
- **Pure Modern CSS:** Design tokens, CSS custom properties, and scoped styling without heavyweight CSS frameworks to ensure Kajabi theme isolation.

---

## 📁 Routes Included

- `/` — Homepage (Hero, Trust stats, 3 Ways to Train, Online Coaching, Certifications, Seminars, Foundations, Meet the Team, Testimonials, Footer)
- `/coaching` — Online Coaching Sales Page (5-Step Progression, What's Included, Skill Mastery, Beginner Reassurance, Coach Support System, Pricing Packages)
- `/intake` — 8-Section Student Intake Form with real-time validation and response summary
- `/events` — Live Seminars & Retreats (Upcoming event cards, In-person benefits, Notifications, Host a Seminar)
- `/event/washington-dc` — Individual Event Detail page with full 2-day curriculum breakdown
- `/pricing` — Dedicated Pricing Page with feature comparison matrix and interactive FAQ accordion
- `/about` — About the School, Founding Faculty, and Movement Philosophy
- `/certifications` — Teacher Training & Certification Curriculum with Waitlist
- `/login` — Simulated Student Member Portal Login

---

## ⚡ Kajabi Integration Blueprint

- **Custom Liquid Sections:** All components are designed as standalone blocks matching Kajabi's Premier / Encore schema.
- **Native Offer Binding:** Pricing CTA buttons link directly to Kajabi Offer Checkout URLs (`/offers/...`).
- **Student Intake Pipeline:** 8-section form maps to Kajabi Custom Form fields or Webhook triggers.
- **Zero Style Collision:** Scoped under custom properties so existing course players and portal navigation remain untouched.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

© 2027 The Handstand School. All rights reserved.
