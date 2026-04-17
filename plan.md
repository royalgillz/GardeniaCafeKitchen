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
- [ ] Clean up unused component files: HighlightedPhoto, CallToAction, SocialMediaLinks, SocialMediaFeed, Slideshow, PhotoGrid
- [ ] Clean up unused logo asset files in src/assets/
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

## Phase 2 - Feature Completions (near-term)

### SEO & Accessibility
- [ ] Add proper meta tags (description, og:image, og:title) in index.html
- [ ] Add ARIA labels to nav, buttons, form inputs
- [ ] Add alt text to all images
- [ ] Create sitemap.xml

### UI Improvements
- [ ] Add Gallery page - more images and better layout
- [ ] Add smooth scroll behavior for navigation links
- [ ] Add active nav link highlighting based on current route
- [ ] Add scroll-to-top floating button
- [ ] Add page transition animations

### Content
- [ ] Enable Instagram social links once account is active
- [ ] Add more items to Fresh Salads menu (currently only 3 items)
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
