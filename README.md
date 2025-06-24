# Pavithra's Portfolio

## About
This is my personal portfolio website built with Next.js, React, and Tailwind CSS, and deployed on GitHub Pages. The site showcases my projects, skills, experience, education, hackathons, and more.

## Technologies Used
- **Next.js 15.2.4** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Radix UI & Shadcn UI** (component libraries)
- **GitHub Pages** (hosting)
- **pnpm** (package manager)

## Portfolio Deployment Instructions

### Prerequisites
- Node.js (18+ recommended)
- pnpm (recommended, or npm/yarn)

### Local Development
To run the project locally:
```bash
# Clone the repository
git clone https://github.com/pavithras15/Portfolio.git
cd Portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```
The development server will be available at http://localhost:3000

### Deployment Process

#### Option 1: Using the Deployment Script (Recommended)
If you have a deploy script, run:
```bash
pnpm build
# Ensure .nojekyll exists
touch out/.nojekyll
# Deploy to GitHub Pages
npx gh-pages -d out --dotfiles
```

#### Option 2: Manual Deployment
1. **Build the Static Site**
   ```bash
   pnpm build
   ```
2. **Ensure `.nojekyll` file exists**
   ```bash
   touch out/.nojekyll
   ```
3. **Deploy to GitHub Pages**
   ```bash
   npx gh-pages -d out --dotfiles
   ```
4. **Check GitHub Pages Settings**
   - Go to repository Settings → Pages
   - Ensure source is set to `gh-pages` branch and root (/) folder

### Viewing the Live Site
Visit: [https://pavithras15.github.io/Portfolio](https://pavithras15.github.io/Portfolio)

## Important Configuration Notes
- The `next.config.mjs` includes:
  - `output: 'export'` for static site generation
  - `images: { unoptimized: true }` for static image exports
  - `trailingSlash: true` for proper path resolution
  - `basePath` and `assetPrefix` set to `/Portfolio` for correct asset loading
- The `.nojekyll` file is critical for GitHub Pages to serve the `_next` directory correctly

## Troubleshooting
If CSS or assets are not loading correctly after deployment:
1. Ensure the `.nojekyll` file exists at the root of the `gh-pages` branch
2. Check that you've deployed with the `--dotfiles` flag
3. Allow 5-10 minutes for GitHub Pages to update completely
4. Double-check `basePath` and `assetPrefix` in `next.config.mjs`

## License
MIT
