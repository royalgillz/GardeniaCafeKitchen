# Gardenia CafeKitchen

Website for Gardenia CafeKitchen, a neighbourhood cafe located at Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia.

**Live site:** https://gardeniacafekitchen.netlify.app/

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18.3.1 (functional components + hooks) |
| Build tool | Vite 5.4.10 |
| Routing | react-router-dom v6 with HashRouter |
| Icons | react-icons v5 |
| Smooth scroll | react-scroll v1.9 (menu category nav) |
| Deployment | Netlify (auto-deploy from main branch) |

---

## Project Structure

```
src/
  App.jsx / App.css         # Root component and global styles
  index.css                 # CSS custom properties and theme tokens
  main.jsx                  # React entry point
  assets/
    menuData.js             # Menu data source of truth
    gallery/                # Gallery images
  Components/
    layout/
      Header.jsx            # Sticky nav with hamburger mobile menu
      Footer.jsx            # Compact single-strip footer
    ui/
      Button.jsx            # Reusable button with variant + size props
      Logo.jsx              # Inline SVG logo with light/default variant
      PageHero.jsx          # Shared hero banner component
      SectionHeader.jsx     # Titled section header with divider
      ScrollToTopButton.jsx # Floating scroll-to-top button
    AppRoutes.jsx           # All route definitions
    ScrollToTop.js          # Scroll restoration on route change
  pages/
    home/                   # Home page sections
    menu/                   # Menu page with sidebar layout
    about/                  # About Us page
    contact/                # Contact form + map + info cards
    gallery/                # Slideshow + photo grid + lightbox
```

## Pages

| Route | Page |
|-------|------|
| `/#/` | Home |
| `/#/about-us` | About Us |
| `/#/menu` | Menu |
| `/#/gallery` | Gallery |
| `/#/contact-us` | Contact |

---

## Design Tokens

Defined in `src/index.css`:

```css
--surface: #ffffff
--surface-warm: #f4efe6
--cream: #fdf6e3
--text-muted: #8a7060
--sage: #a3b89a
--green: #7c8a70
--orange: #f9a03f
--dark-orange: #d45113
--brown: #813405
--sandy-brown: #f2b05a
```

---

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint check
```

---

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To activate it:

1. Create a free account at https://formspree.io
2. Create a new form and copy the endpoint ID
3. In `src/pages/contact/ContactForm.jsx`, replace `YOUR_FORM_ID` with your actual form ID

---

## Deployment

Deployed on Netlify via continuous deployment from the `main` branch on GitHub. Every push to `main` triggers an automatic redeploy.

HashRouter is used for Netlify compatibility. Do not switch to BrowserRouter without adding a `_redirects` file or equivalent Netlify redirect rule.

---

## Cafe Details

- **Address:** Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia
- **Phone:** +61 8 9407 8749
- **Email:** info@gardeniacafe.kitchen
- **Hours:** Monday to Saturday, 8:00 AM to 2:00 PM (closed Sundays)
- **Facebook:** https://www.facebook.com/profile.php?id=100094037439165
