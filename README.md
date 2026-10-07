# IEEE Pune Blockchain Group

A responsive, high-performance web portal for the **IEEE Pune Blockchain Group**, affiliated with the **IEEE Blockchain Technical Community** (Region 10 APAC) and **IEEE Pune Section**.

Cloned and enhanced from `https://ieee-bengaluru-bctc.vercel.app/` with full Pune Section alignment, event features, leadership contacts, and registration workflows.

---

## 🚀 Quick Start / Instant Preview

### Option A: Instant Local Preview (Zero Build Required)
You can directly open `index.html` in your browser, or run a local Python HTTP server:

```powershell
# From the project root:
python -m http.server 3000
```
Then visit: [http://localhost:3000](http://localhost:3000)

### Option B: Next.js 14 App Router Project (`nextjs-app/`)
If you have Node.js / npm installed and want to run or deploy the modular TypeScript / React codebase:

```powershell
cd nextjs-app
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
IEEE PUNE BLOCKCHAIN GROUP/
├── index.html                   # Production-ready static landing page
├── styles.css                   # Custom theme styles & component classes
├── app.js                       # Mobile drawer & form validation/submission logic
├── ieee-blockchain-logo.png     # Official IEEE Blockchain logo asset
├── favicon.ico                  # Site favicon
├── global_prompts.md            # Sovereign Core prompt history & memory
│
└── nextjs-app/                  # Full Next.js 14 App Router project
    ├── package.json             # Dependencies (Next.js, React, Tailwind, Lucide)
    ├── tailwind.config.js       # IEEE design tokens & colors
    ├── public/                  # Logo, favicon, and post media assets
    ├── data/
    │   └── activities.json      # Structured activity catalog & metadata
    ├── app/
    │   ├── layout.tsx           # SEO metadata, Inter font, HTML head
    │   ├── page.tsx             # Home: Hero & Focus Areas overview
    │   ├── about/page.tsx       # About page & mission
    │   ├── activities/page.tsx  # Activities Hub & program archives
    │   ├── gallery/page.tsx     # Authentic event photo gallery & lightbox
    │   ├── join/page.tsx        # Membership registration & onboarding
    │   ├── lab/page.tsx         # Blockchain & AI HPC research lab
    │   └── globals.css          # Tailwind directives & utility classes
    └── components/
        ├── Navbar.tsx           # Sticky nav & mobile accordion
        ├── Hero.tsx             # Gradient hero, badges, and stats
        ├── ActivitiesHub.tsx    # Multi-tab activity & program browser
        ├── ActivityDetail.tsx   # Detailed event inspection modal/panel
        ├── Breadcrumbs.tsx      # Navigation breadcrumbs
        ├── CollegeArchive.tsx   # College institutional archive
        ├── MediaResearch.tsx    # Research & media publications
        ├── Outreach.tsx         # Community outreach programs
        ├── Events.tsx           # Program browser with year & category filtering
        ├── Gallery.tsx          # Authentic media gallery grid
        ├── Lightbox.tsx         # Fullscreen lightbox viewer
        ├── FocusAreas.tsx       # Core focus areas
        ├── About.tsx            # About & audience grid
        ├── Leadership.tsx       # Group Chairs & Leads contact cards
        ├── JoinForm.tsx         # Validated registration form with states
        └── Footer.tsx           # Legal, affiliation, and copyright
```

---

## 🎨 Visual Identity & Colors

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `ieee-navy` | `#00274D` | Brand primary, headings, hero gradient start, footer |
| `ieee-blue` | `#00629B` | Accent blue, links, buttons, hero gradient middle |
| `chain-purple` | `#5B4FE9` | Gradient end, avatar badges |
| `chain-teal` | `#0FBFB8` | Event badges, accent tags |
| `ieee-gold` | `#F5A623` | Button hover state |

---

## 📝 Form Configuration & Google Sheets

The **Join the Community** registration form validates:
1. `Full Name` (required)
2. `Email Address` (required, regex checked)
3. `Phone Number` (optional)
4. `IEEE Membership Number` (optional)
5. `Category` (Student / Researcher / Academician / Industry Professional)
6. `Organization` (optional)
7. `Areas of Interest` (at least 1 must be selected)
8. `Message` (optional)

### Changing the Form Backend
In `app.js` (line 39) or `nextjs-app/components/JoinForm.tsx` (line 69), replace the endpoint URL with your own:
- **Google Apps Script Web App** (to log responses into a Google Sheet)
- **Formspree / Formkeep / Webhook**
- **Next.js Route Handler** (`/api/join`)

---

## 🌐 Deploying to Vercel

### Deploying the Static Site (Root)
1. Push this folder to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Leave Build Command empty (Vercel automatically detects static HTML/CSS/JS).
4. Click **Deploy**.

### Deploying the Next.js App
1. Set the **Root Directory** in Vercel project settings to `nextjs-app`.
2. Vercel will automatically detect Next.js and build it.
