# Aarushi portfolio (Next.js)

Run locally:  `npm install` then `npm run dev` (http://localhost:3000)
Deploy:       push to GitHub and import the repo on vercel.com (zero config).

## Where to edit
- `src/data/site.ts`  — ALL content: links, email, photo, projects, experience, articles, toolkit.
- `public/`           — put photo.jpg and project screenshots here, then reference them as "/photo.jpg".
- `src/app/globals.css` — colors and styles (see the variables at the top).

## Add a project
Copy an entry in `projects` (site.ts) and give it a unique `slug`. The page /projects/<slug> is created automatically.
Fill in: demoVideo / overviewVideo (YouTube embed URLs like https://www.youtube.com/embed/ID), github, live, image, overview, results, learnings, arch.
