# Kushal Bhatta — Portfolio

A personal portfolio built with React, TypeScript, Vite and Framer Motion.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing the site

**All text, links, projects, experience, education and skills live in one file: [`content/portfolio.json`](content/portfolio.json).**
Edit it, commit, push — Vercel rebuilds the site automatically. You never need to touch the React code.

Files (images, videos, CV) go in `public/`. In the JSON, refer to them with a path starting at `/`, without `public`:
`public/projects/mcqprep/home.jpg` → `"/projects/mcqprep/home.jpg"`.

| What | Where |
| --- | --- |
| CV | `public/cv/Kushal_CV.pdf` → `"profile.resume"` |
| Profile photo | `public/images/profile.jpg` → `"profile.photo"` (remove the field to show your initials instead) |
| Project screenshots / videos | `public/projects/<project-slug>/` |
| Accent colour | `"site.accent"` (any CSS colour, e.g. `"#1d4ed8"`) |
| Tab title & search description | `"site.title"`, `"site.description"` |
| Site address (used in link previews) | `"site.url"` — also update `public/robots.txt` and `public/sitemap.xml` if it changes |

### Add a project

Copy one of the objects in `"projects"` and change it. Only `slug`, `title` and `summary` are required:

```json
{
  "slug": "my-new-app",
  "title": "My New App",
  "summary": "One or two sentences shown on the card.",
  "meta": "Full-stack web app · MERN",
  "featured": true,
  "tags": ["React", "API"],
  "cover": "/projects/my-new-app/home.png",
  "description": "Longer paragraph shown when the project is opened.",
  "features": ["What it does #1", "What it does #2"],
  "stack": ["React", "Node.js", "MongoDB"],
  "stats": [{ "label": "Users", "value": "1,000+" }],
  "links": {
    "demo": "https://my-new-app.vercel.app",
    "live": "https://my-new-app.com",
    "github": "https://github.com/kushal721/my-new-app"
  },
  "video": { "src": "/projects/my-new-app/demo.mp4", "poster": "/projects/my-new-app/home.png" },
  "images": [
    { "src": "/projects/my-new-app/home.png", "caption": "Home page" },
    { "src": "/projects/my-new-app/dashboard.png", "caption": "Dashboard" }
  ]
}
```

- **Demo video:** either a file (`"video": { "src": "/projects/.../demo.mp4" }`) or a YouTube video (`"video": { "youtube": "VIDEO_ID" }` — the part after `watch?v=`). It plays first in the project's gallery.
- **Live demo button:** fill in `links.demo` and/or `links.live`. Empty or missing links are hidden.
- **Charts as covers:** add `"coverFit": "contain"` so the whole image shows instead of being cropped.
- **Order:** projects appear in the order they are listed.

### Experience, education, skills

- `"experience"`: one entry per company, with one or more `"roles"` (newest first). `"current": true` adds a "Current" badge.
- `"education"`: `degree` and `school` are required; `location`, `period` and `details` are optional.
- `"skills"`: groups of `{ "title", "items" }`. Every item also appears in the scrolling ticker.
- `"interests"`: shown as highlighted chips under the skills.
- `"highlights"`: the four boxes under the intro. `icon` is one of: `BarChart3`, `Bot`, `Brain`, `Code2`, `Database`, `LayoutDashboard`, `Layers`, `LineChart`, `ScanEye`, `ShieldCheck`, `Sparkles`, `Workflow`.

Any section whose list is empty is hidden, along with its menu link.

### Contact

`"contact"` holds your email, GitHub, LinkedIn and an optional `phone` (left empty — it is only shown when filled in), plus the heading and text of the contact section.

### If the build fails

`npm run build` checks `portfolio.json` against the expected format. If you misspell a field name or forget a required one, the error names the field. JSON also needs double quotes everywhere and no trailing comma after the last item in a list. Run `npm run build` locally before pushing to catch these.

## Deploying on Vercel

Import the repository in Vercel; it detects Vite automatically (build command `npm run build`, output folder `dist`). No extra configuration is needed.

## License

The code is released under the [MIT License](LICENSE). The personal content — CV, photos, project screenshots and the text in `content/portfolio.json` — belongs to Kushal Bhatta and is not covered by that license.
