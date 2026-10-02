# Luxury Portfolio

A luxury editorial-style portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **shadcn/ui**. Implements a complete luxury design system: alabaster/charcoal/gold palette, serif display typography, extreme type scale, asymmetric grids, and smooth editorial animations.

## Features

- **Editorial hero section** — full-viewport hero with mixed italic serif headlines in gold
- **Asymmetric 3-column features grid** with grayscale-to-color image transitions (1500–2000ms)
- **Dark inverted stats section** with animated counters
- **About section** with drop cap, vertical text labels, and layered shadows
- **Testimonials** with gold left-border slide animations and multi-layer interactions
- **Journal section** with 7/5 asymmetric grid layout
- **FAQ accordion** with gold accents
- **Newsletter CTA + footer** with underline-style inputs
- **Custom animations** — fadeInUp, goldSlide, custom scrollbar, gold selection color, visible vertical grid lines, noise texture overlay
- **10 AI-generated editorial images** (hero portrait, craft/interior/detail features, blog images, testimonial avatars) in `public/images/`

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui components, Framer Motion
- **Fonts:** Playfair Display (serif display) + Inter (sans) via `next/font/google`
- **Extras:** Prisma (schema present for future DB use), standalone server build config

## Quick Start

```bash
npm install
npm run dev        # dev server on http://localhost:3000
npm run build      # production build
npm start          # run standalone production server
```

> Lint passes clean and the dev server returns HTTP 200.

## Project Structure

```
src/
  app/
    page.tsx        # full landing page (8 sections)
    layout.tsx      # root layout, fonts, noise overlay, metadata
    globals.css     # luxury design tokens + custom animations
    api/route.ts    # placeholder API route (stub)
  components/       # shadcn/ui components
  hooks/            # custom hooks
  lib/              # utilities
public/
  images/           # 10 AI-generated editorial images
prisma/             # Prisma schema (optional future use)
mini-services/     # scaffold for mini services
examples/          # websocket example scaffold
.zscripts/         # helper scripts
```

## Environment Variables

Optional (only needed if wiring up the Prisma/database layer):

| Variable       | Description                  |
|----------------|------------------------------|
| `DATABASE_URL` | Database connection string   |

## Deployment

- Static marketing content — deployable as a **static export** to Cloudflare Pages or Netlify (`output: "export"` in `next.config.ts`).
- Or run the **standalone server** build (`npm run build && npm start`) behind Caddy (a `Caddyfile` is included).

---

Built by [Girish Lade](https://ladestack.in)
