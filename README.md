# Finanshels Careers Website

A world-class, Apple-grade career website for Finanshels.com built with React, TailwindCSS, and premium UI components.

## 🎯 About Finanshels

Finanshels is a UAE-based fintech company (founded 2022) that automates accounting, tax, and compliance operations for 20M+ startups across MENA. Backed by MBRIF, in5 Tech, and Kube VC.

## ✨ Features

- **Premium Design**: Apple-inspired UI with clean aesthetics, high contrast, and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **TailwindCSS**: Utility-first styling with custom brand tokens
- **Form Validation**: Complete client-side validation for job applications
- **Smooth Animations**: Fade-in, slide-up effects for premium feel
- **SEO Friendly**: Semantic HTML and optimized structure

## 🛠 Tech Stack

- React 18
- React Router v6
- TailwindCSS
- Vite
- Lucide Icons
- Custom shadcn-style UI components

## 📄 Pages

1. **Home** - Hero, stats, teams, latest openings
2. **Jobs** - Searchable, filterable job listings
3. **Job Detail** - Full JD with application form in hero banner
4. **Life at Finanshels** - Culture, values, perks, team info

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/              # Base UI components (Button, Input, Card)
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── JobCard.jsx
│   ├── StatCard.jsx
│   └── TeamCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── JobDetail.jsx
│   └── Life.jsx
├── data/
│   └── jobs.js          # Job listings and team data
├── lib/
│   └── utils.js         # Utility functions
├── App.jsx
└── index.css
```

## 🎨 Design System

### Colors
- **Brand Black**: `#0B0B0C`
- **Brand Blue**: `#1E90FF`
- **Brand Grey**: `#F5F7FB`

### Typography
- Clean, geometric, Apple-style font stack
- Font sizes: 5xl-7xl for headlines, xl-2xl for body

### Components
- Rounded corners (rounded-2xl)
- Subtle shadows and hover effects
- Glassmorphism with backdrop-blur
- Smooth transitions (300ms)

## 📝 Customization

### Update Job Listings

Edit `src/data/jobs.js`:

```javascript
export const JOBS = [
  {
    id: "unique-job-id",
    title: "Job Title",
    location: "Dubai, UAE",
    team: "Growth",
    type: "Full-time",
    posted: "2025-11-02",
    intro: "Short description",
    jd: [
      { h: "What you'll do", bullets: [...] },
      { h: "What makes you a fit", bullets: [...] }
    ],
    benefits: [...]
  }
]
```

### Modify Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    black: '#0B0B0C',
    blue: '#1E90FF',
    grey: '#F5F7FB',
  }
}
```

## 🌟 Key Features

- **Application Form**: Full validation with error states
- **Search & Filters**: Filter jobs by team, location, and search terms
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: CSS animations for premium feel
- **Clean Code**: Modular, reusable components

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Links

- Main Website: [https://finanshels.com](https://finanshels.com)
- LinkedIn: [https://linkedin.com/company/finanshels](https://linkedin.com/company/finanshels)
- Email: careers@finanshels.com

## 📄 License

© 2025 Finanshels. All rights reserved.
