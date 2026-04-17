# Gardenia CafeKitchen

A React website for Gardenia CafeKitchen, a cafe in Currambine, Western Australia.

**Live site:** https://gardeniacafekitchen.netlify.app/

---

## Tech Stack

- React 18 + Vite
- react-router-dom v6 (HashRouter)
- react-icons
- react-scroll
- Deployed on Netlify

## Pages

| Page | Path |
|------|------|
| Home | `/#/` |
| About | `/#/about-us` |
| Menu | `/#/menu` |
| Gallery | `/#/gallery` |
| Contact | `/#/contact-us` |

## Getting Started

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To activate it:

1. Create a free account at https://formspree.io
2. Create a new form and copy the form endpoint ID
3. In `src/Components/contactus/ContactForm.jsx`, replace `YOUR_FORM_ID` with your actual form ID

## Project Structure

```
src/
  assets/         Images and menu data
  Components/
    home/         Home page sections
    menu/         Menu page with search and category nav
    about/        About Us page
    contactus/    Contact form, map, and info
    gallery/      Slideshow and photo grid
```

## Cafe Details

- **Address:** Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia
- **Phone:** +61 8 9407 8749
- **Email:** info@gardeniacafe.kitchen
- **Hours:** Monday to Saturday, 8:00 AM to 2:00 PM
- **Facebook:** https://www.facebook.com/profile.php?id=100094037439165
