# Jonathan's Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) (App Router).

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run start` – serve the production build

## Structure

- `app/` – layout, page, global styles and favicon (`icon.png`)
- `components/` – one component per section (Marquee, Header, Hero, About, Work, Faq, Contact, Footer)
- `components/data.js` – shared content: nav links, socials, skills
- `assets/img/` – images

To add a project, add an entry to the `projects` array in `components/Work.js`.
