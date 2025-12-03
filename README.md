# Finanshels Partnership Desk

A premium partnerships site for Finanshels that showcases referral, channel, and strategic programs with decision-ready proof, program details, and fast contact paths. Built with React, TailwindCSS, and Lucide icons.

## 🎯 About Finanshels

Finanshels is a UAE-based fintech company (founded 2022) that runs accounting, tax, audit, and compliance for thousands of businesses across MENA. Partners get transparent attribution, live payout visibility, and compliance-grade delivery.

## ✨ Highlights

- **Programs**: Referral, channel, and strategic partner motions with incentives, terms, and collaboration formats
- **Proof-first**: Quantified trust signals, guardrails, and leadership access called out on the home and program pages
- **Conversion-focused**: Clear CTAs to apply, talk to partnerships, or start a pilot on every hero and section
- **Premium UI**: Gradient + glassmorphism styling, motion tokens, and responsive layouts tuned for mobile and desktop
- **Content-first data**: Program cards, incentives, guardrails, and formats live in React arrays for quick edits

## 🛠 Tech Stack

- React 18 + Vite
- React Router v6
- TailwindCSS with extended brand tokens and animation keyframes
- Lucide React icons

## 📄 Pages

- **Home**: Partnership desk hero, proof points, program overview, commitments, and referral CTA
- **About**: Finanshels story, delivery model, and trust signals
- **Partnerships**: Full breakdown of referral, channel, and strategic programs with incentives, terms, guardrails, and collaboration formats
- **Services** (`/services` and `/strategize`): How the delivery pods, onboarding, and governance work
- **Contact**: Simple contact and CTA to talk to the partnerships team

## 🚀 Getting Started

```bash
npm install
npm run dev   # http://localhost:5173
```

Other scripts:

```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ui/           # Base UI primitives
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Partnerships.jsx
│   ├── Strategize.jsx
│   └── Contact.jsx
├── lib/
│   └── utils.js
├── App.jsx
└── index.css
```

## 🎨 Styling System

- Tailwind theme tokens in `tailwind.config.js` (`brand` colors, gradients, motion keyframes)
- Rounded corners (up to `rounded-3xl`), glass panels, and soft shadows for premium feel
- Motion utilities: fade, slide, float, glow animations for subtle emphasis

## ✏️ Content Edits

- Partnership program copy, incentives, and guardrails live in `src/pages/Partnerships.jsx`
- Home page proof points and CTA copy live in `src/pages/Home.jsx`
- Global nav/links come from `src/components/Navbar.jsx`

## 🔗 Links

- Main Website: [https://finanshels.com](https://finanshels.com)
- Partnerships: partners@finanshels.com
