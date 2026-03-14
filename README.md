# portfolio2

React + Vite portfolio with the same UI/content, now refactored into reusable components and data-driven sections.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `src/components/layout`: shared layout blocks (navbar, divider, footer)
- `src/components/sections`: one component per nav section
- `src/data/content.js`: editable arrays/objects for skills, projects, journey, and links
- `src/hooks/useRevealAnimation.js`: scroll reveal behavior
