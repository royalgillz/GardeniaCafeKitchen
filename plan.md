# Gardenia CafeKitchen - Revamp Plan

Live site: https://gardeniacafekitchen.netlify.app/

---

## Phase 1 - Bug Fixes and Polish (current)

### Bugs to Fix
- [x] ContactInfo: use `phone` prop dynamically instead of hardcoded string
- [x] ContactForm: integrate Formspree so submissions actually send emails
- [x] ContactForm: add success/error feedback message after submit
- [x] CategoryNavigation: replace magic-number scroll offsets with dynamic header height calculation
- [x] Header: remove commented-out logo import lines
- [x] ContactUs: remove commented-out Instagram/Twitter placeholders (or implement them)
- [x] HomePage: Testimonials section now live
- [x] AboutUsPage: TeamSection now live
- [x] CategoryNavigation: remove all commented-out offset lines
- [x] Add a 404 Not Found page / catch-all route
- [x] Fix favicon path for production

### Code Quality
- [x] Clean up unused component files: HighlightedPhoto, CallToAction, SocialMediaLinks, SocialMediaFeed, Slideshow, PhotoGrid
- [x] Clean up unused logo asset files in src/assets/
- [x] Implement Testimonials section on HomePage
- [x] Implement TeamSection on AboutUsPage
- [x] Add loading/success state to ContactForm

### UI Revamp (Phase 2 - COMPLETED)
- [x] Create reusable SectionHeader, Button, PageHero UI components
- [x] Add Google Fonts: Playfair Display + Lato
- [x] Full CSS overhaul with design tokens and modern styles
- [x] Hero: full-height (82vh) with dual CTA buttons
- [x] Highlights: icon-based feature cards with hover lift
- [x] Carousel: auto-advancing with dots and fade transition
- [x] Testimonials: live with star ratings
- [x] Opening Hours: split CTA section with Get Directions button
- [x] About page: vision/mission cards, icon-based values grid, team cards
- [x] Menu: PageHero banner, pill-style category nav, cleaner items
- [x] FilterBar: search icon, better styling
- [x] Contact: two-column layout with social links integrated
- [x] Gallery: combined slideshow+grid, lightbox on click, keyboard nav
- [x] Header: active link highlighting, Gallery link added, accessible buttons
- [x] Footer: dynamic copyright year, cleaner layout
- [x] Meta tags and SEO description in index.html

---

## Phase 2.5 - Menu & Site-Wide Redesign (COMPLETED)

### Menu Page (new layout inspired by app-style UI)
- [x] Sidebar category nav (sticky, 220px, shows item counts)
- [x] Category chip row (horizontal scroll, icon + label)
- [x] Popular dishes cards section (emoji placeholder, price, badge)
- [x] All-items compact row list for active category
- [x] Right info panel: cafe info + dietary filter tags
- [x] Mobile: sidebar becomes overlay drawer, info panel hidden
- [x] Topbar: sticky search bar with clear button
- [x] Remove old CategoryNav, CategorySection, SearchBar, MenuItem files

### Global Style Refresh
- [x] New design tokens: --surface, --surface-warm, --text-muted, --sage
- [x] Tighten radius tokens (sm: 8px, md: 14px, lg: 22px)
- [x] Cards site-wide: white bg + warm border + shadow
- [x] Section backgrounds: deliberate cream/surface-warm alternation
- [x] Feature icon circles: sage/green colour update
- [x] Header: subtle border refinement

### Additional Redesigns (COMPLETED)
- [x] Logo: rebuilt as inline SVG React component with 5-petal flower mark + Playfair Display wordmark, variant prop for light/dark backgrounds
- [x] Footer: collapsed from 4-column grid to compact single horizontal strip (logo + nav links + contact info + social icon)
- [x] Home page: replaced tall carousel with 3-column dish card grid; replaced dark Visit section with light two-card layout
- [x] Contact page: redesigned with 4 icon info cards band + form/map two-column layout
- [x] Gallery page: replaced dark brown gradient CTA with light surface-warm theme; grid section on cream background; SectionHeader for consistency

---

## Phase 2 - Feature Completions (near-term)

### SEO & Accessibility
- [x] Add proper meta tags (description, og:image, og:title, og:type, twitter card) in index.html
- [ ] Add ARIA labels to nav, buttons, form inputs
- [ ] Add alt text to all images
- [x] Create sitemap.xml

### UI Improvements
- [x] Add Gallery page - more images and better layout
- [ ] Add smooth scroll behavior for navigation links
- [x] Add active nav link highlighting based on current route
- [x] Add scroll-to-top floating button
- [x] Add page transition animations (fade + slide up on route change)

### Content
- [ ] Enable Instagram social links once account is active
- [x] Add more items to Fresh Salads menu (Smoked Salmon, Halloumi and Roasted Vegetable)
- [ ] Add real testimonials/reviews (at least 3-5)
- [ ] Add team section with real staff info
- [ ] Add more gallery photos

---

## Phase 3 - Full Product Features (medium-term)

### Reservations
- [ ] Table booking form (name, date, time, party size)
- [ ] Email confirmation for bookings
- [ ] Admin view for managing reservations

### Online Ordering
- [ ] Shopping cart (React Context or Redux)
- [ ] Menu item "Add to Cart" buttons
- [ ] Cart summary page
- [ ] Order notes / special requests field
- [ ] Order confirmation page

### User Accounts
- [ ] User registration and login (JWT or session-based)
- [ ] Order history per user
- [ ] Saved preferences / dietary requirements
- [ ] Loyalty points system

### Payment
- [ ] Stripe integration for online orders
- [ ] Order receipt via email

---

## Phase 4 - Advanced / Scale (long-term)

### Backend
- [ ] Node.js/Express or Next.js API
- [ ] PostgreSQL or MongoDB for data persistence
- [ ] Admin dashboard (menu management, order management)
- [ ] Image upload for menu items

### DevOps
- [ ] Docker containerisation
- [ ] Jenkins or GitHub Actions CI/CD pipeline
- [ ] Environment variable management (dev vs prod)
- [ ] Automated testing (Vitest + React Testing Library)

### AI Features
- [ ] AI-powered menu recommendations based on preferences
- [ ] Chatbot for FAQ / ordering assistance
- [ ] Smart search with natural language (e.g. "something vegetarian with eggs")

### Analytics
- [ ] Google Analytics integration
- [ ] Heatmap tracking (Hotjar or similar)
- [ ] Menu item popularity tracking

---

## Notes
- Keep CLAUDE.md and plan.md as local files (not committed to git)
- No em dashes in any website content
- No AI/Claude mentions in commit messages
- HashRouter is used for Netlify compatibility - do not switch to BrowserRouter without adding Netlify redirect rules
