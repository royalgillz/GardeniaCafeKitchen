# Gardenia CafeKitchen - CLAUDE.md

## Project Overview
A React + Vite cafe website for Gardenia CafeKitchen, a real cafe located at Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia. The live site is deployed on Netlify at https://gardeniacafekitchen.netlify.app/

## Tech Stack
- **Frontend:** React 18.3.1 (functional components + hooks)
- **Build Tool:** Vite 5.4.10
- **Routing:** react-router-dom v6 with HashRouter (URL format: `#/page`)
- **Icons:** react-icons v5
- **Smooth Scroll:** react-scroll v1.9 (used only in menu category nav)
- **Deployment:** Netlify (auto-deploy from main branch)

## Project Structure
```
src/
  App.jsx / App.css       # Root component and global styles
  index.css               # CSS custom properties / theme variables
  main.jsx                # React entry point
  assets/
    menuData.js           # All menu data (source of truth for menu page)
    gallery/              # Gallery images
  Components/
    Header.jsx            # Sticky nav with hamburger mobile menu
    Footer.jsx            # Footer with links and social icons
    AppRoutes.jsx         # All route definitions (HashRouter)
    ScrollToTop.js        # Scroll restoration on route change
    home/                 # Home page components
    menu/                 # Menu page + filtering + category nav
    about/                # About Us page
    contactus/            # Contact form + map + info
    gallery/              # Slideshow + photo grid
```

## Routes
| Path | Component |
|------|-----------|
| `/` | HomePage |
| `/about-us` | AboutUsPage |
| `/menu` | MenuPage |
| `/gallery` | GalleryPage |
| `/contact-us` | ContactUsPage |

## CSS Theme (index.css variables)
```css
--light-green: #ddf9c1
--light-yellow: #f8dda4
--orange: #f9a03f
--dark-orange: #d45113
--brown: #813405
--green: #7c8a70      /* header background */
--sandy-brown: #f2b05a
```

## Key Design Rules
- No em dashes anywhere in website content
- No AI/Claude mentions in git commits
- CLAUDE.md and plan.md stay local (not pushed, but NOT in .gitignore either)
- Logo: `src/assets/Apronlogo.png` is the canonical logo

## Contact Details (real)
- Address: Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia
- Phone: +61 8 9407 8749
- Email: info@gardeniacafe.kitchen
- Hours: Mon - Sat 8:00 AM - 2:00 PM
- Facebook: https://www.facebook.com/profile.php?id=100094037439165

## Known Bugs (see plan.md for fix status)
1. ContactForm only logs to console - needs Formspree integration
2. ContactInfo hardcodes phone number instead of using the `phone` prop
3. CategoryNavigation has fragile magic-number scroll offsets
4. Multiple commented-out dead code blocks throughout components
5. Testimonials and TeamSection components built but never rendered

## Development Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## Commit Convention
- No AI/Claude mentions
- Descriptive imperative messages (e.g. "Fix contact form phone prop", "Add testimonials section")
