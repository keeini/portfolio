# Sean Kee Portfolio

A portfolio made for the Web Technologies course at Saint Louis University. The website presents my education, technical skills, professional experience, and selected projects.

## Features

- Home page with a personal introduction
- Experience page with education, skills, and work history
- Three projects displayed using reusable cards with filtering
- Individual project-detail pages
- Helpful messages for unknown pages and project URLs
- Contact links and a downloadable resume
- Persistent light and dark themes

## Projects Included

1. **Predicting Global Landslide Trends** — Machine learning and data visualization using NASA’s Global Landslide Catalog.
2. **Multimodal Digital Graphics on Touchscreens** — Accessible Android applications using haptic feedback, text-to-speech, and AI-assisted graph interpretation.
3. **Where’s Religion?** — Open-source contributions focused on improving website usability and layout.

## Running Locally

Run these commands on your machine's terminal.

```bash
git clone https://github.com/keeini/portfolio.git
cd portfolio
npm ci
npm run dev
```
Finally, open the URL listed in the terminal.

## Persistent Theme Extension

The Dark Theme toggle uses useState to track whether dark mode is selected, and its initial value comes from localStorage.

A useEffect updates the page’s data-theme attribute and saves the selected theme whenever it changes. CSS rules use this attribute to apply dark colors.

The toggle stays in the shared layout so it remains available across every page. The saved preference persists after navigation and refresh, but is specific to the browser and website address.

## Links

- **Live website:** https://keeini.github.io/portfolio/
