# Global Prompt Memory & Patterns

## Interaction Log

### Entry 1
- **Timestamp**: 2026-10-06T20:29:00+05:30
- **Original Prompt**:
  > CREATE DETAILED PLAN TO https://ieee-bengaluru-bctc.vercel.app/ UNDERSTAND LAYOUT AND FIELD AND HOW IT IS STRUCTURE CLONE IT AND WE WILL CHAMGE NAME TO IEEE PUE BLOCKCHAIN GROUP
- **Enhanced Prompt**:
  > Conduct an in-depth reverse-engineering and architectural analysis of the live site at https://ieee-bengaluru-bctc.vercel.app/. Extract layout hierarchy, color palettes, visual tokens, component tree, form fields, validation logic, and submission mechanisms. Create an end-to-end execution blueprint to clone the application using Next.js 14 and Tailwind CSS, rebrand all assets and references from IEEE Bangalore Blockchain Group to IEEE Pune Blockchain Group, and prepare an interactive registration system.
- **User Preferences**:
  - Full-fidelity UI cloning with accurate branding.
  - Rebrand to IEEE Pune Blockchain Group.
  - Retain all functional sections, responsive states, and form fields.

### Entry 2
- **Timestamp**: 2026-10-06T20:45:00+05:30
- **Action**: Execution of Cloning & Rebranding Blueprint
- **Delivered Outputs**:
  - `index.html`: Complete standalone landing page with Inter typography, sticky navbar, mobile drawer, hero section with stats, about section, 4-card objectives, past events (IIBF 2023, IIBF 2024, ICDLT 2025 Pune), leadership cards, validated interactive registration form with feedback states, and footer.
  - `styles.css`: Custom IEEE brand colors, hero grid background, form controls, and checkbox card states.
  - `app.js`: Mobile drawer toggle, dynamic multi-select checkbox styles, full form validation (email regex, required fields), state machine (idle, submitting, success, error), and reset handlers.
  - `nextjs-app/`: Full Next.js 14 App Router project with TypeScript, Tailwind CSS, and modular React components.
  - `README.md`: Quick start guide, preview commands, and deployment instructions.
  - Version controlled in Git with initial commit.

### Entry 3
- **Timestamp**: 2026-10-06T22:01:00+05:30
- **Action**: GitHub Repository Connection & Deployment
- **Delivered Outputs**:
  - Created repository `ieee-pune-blockchain-group` under user account `abhishekeb211`.
  - Configured git remote origin to `https://github.com/abhishekeb211/ieee-pune-blockchain-group.git`.
  - Pushed `main` branch with all assets, components, Next.js application, and docs.
  - Ensured credentials were removed from disk remote configurations.

### Entry 4
- **Timestamp**: 2026-10-06T22:06:00+05:30
- **Original Prompt**:
  > CREATE PLAN IN DETAILED TO ADAPT theme prompt (IEEE / tech-community website theme: clean, compact, scannable, institutionally trustworthy, Outfit + Inter, IEEE Blues, no purple, no dark-mode-first, utility bar, compact density).
- **Enhanced Prompt**:
  > Develop a comprehensive engineering adaptation plan to migrate the existing IEEE Pune Blockchain Group portal to an institutionally trustworthy IEEE design system: apply Outfit (headings) and Inter (body), adopt the exact primary blues (#006699, #004b75, #002855, #001e3d), cyan accents (#0099d8, #00b4d8), gold highlights (#ffb81c), compact 1280px density (tight clamp padding, ~1.15rem card padding), 12px card radii, top navy utility bar, vector SVG icons replacing emojis, dark milestone ribbon, and dual-tier navy footer (#091a2b, #05101d).
- **User Preferences**:
  - Academic, institutional, clean, crisp engineering aesthetic.
  - No purple, no heavy glowing shadows, no oversized cards.
  - High scannability and compact density.

### Entry 5
- **Timestamp**: 2026-10-06T22:10:00+05:30
- **Action**: Execution of Institutional Theme Migration
- **Delivered Outputs**:
  - `styles.css`: Full color system (#006699 primary blue, #002855 deep navy, #001e3d near-black navy, #00b4d8 bright cyan, #ffb81c gold, #091a2b footer), Outfit & Inter typography, 1280px max width container, compact section padding, institutional top-accent card hover effects, soft blue focus rings.
  - `index.html`: Incorporated top navy utility bar, brand header with Outfit bold headings, compact hero, dark milestone stats ribbon, 4 SVG vector objective cards (replacing emojis), milestone event cards with cyan & gold chips, compact leadership profiles, pill-style selectable areas of interest, and dual-tier near-black footer.
  - `app.js`: Updated multi-select pill checkboxes and validated submission state handling.
  - `nextjs-app/`: 100% theme parity across Tailwind config, globals.css, layout.tsx, and all React components.
  - Verified zero purple instances, zero heavy glowing shadows, compact density clamp, and committed to Git.

### Entry 6
- **Timestamp**: 2026-10-06T22:50:00+05:30
- **Original Prompt**:
  > create detailed plan to use this data to links to scrap more on this topic to extract detailed more data and add to website later (content pack: IEEE Pune Blockchain Group about/mission/leadership/events 2024-2026/lab/media links)
- **Enhanced Prompt**:
  > Produce a verification-first plan to scrape the supplied seed links (IEEE, PCCOE, MMCOE sources), extract structured event/people/resource/media data with source citations and conflict handling, respect robots.txt and copyright, and stage a curated dataset for later website integration. No website edits in this phase.
- **User Preferences**:
  - Facts must be sourced; unverified claims excluded.
  - Data collection first, website integration later.
- **Findings logged**: Pack links carry utm_source tracking; site currently contains unverified placeholder leaders/emails and an unverified IEEE Pune Section domain (ieeepune.org vs ieeepunesection.org); participant-count conflict 112 vs 115 for the 2024 symposium.

### Entry 7
- **Timestamp**: 2026-10-06T22:55:00+05:30
- **Action**: Execution of Research Scraping, Verification Pipeline & Audit Logging
- **Delivered Outputs**:
  - Implemented polite Python scraper `research/scrape/scraper.py` with `.agent-system/` audit action logging.
  - Processed 16 seed URLs (PDFs and HTML), extracting full text and 273 high-resolution images from official institutional publications.
  - Verified official IEEE vTools record (Spoid: LGR00120BC) confirming Dr. Sonali D. Patil as Chair and `sonalimpatil@gmail.com` as contact.
  - Resolved domain discrepancy: `https://ieeepunesection.org/` is HTTP 200 OK (verified official), whereas `ieeepune.org` failed DNS resolution.
  - Reconciled 2024 symposium attendance conflict: PCCOE Samvaad Jan 2024 records 115 participants (68 external, 15 industry, 32 PCCOE); IEEE BCTC recorded 112. Safe public metric: 110+.
  - Curated 10 structured events across 2024, 2025, and 2026 in `events.json`.
  - Documented MMCOE Blockchain Server Room-Lab (19 GPU Server Rig) in `infrastructure.json`.
  - Generated `SOURCES.md`, `conflicts.md`, `gaps.md`, and `.agent-system/logs/audit/audit_scraping_run.md`.
