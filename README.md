# Graphic Design Portfolio

This is my recently graduated partner Emily's portfolio. Emily wanted a super simple and sleek design with capacity for lots of images and content, and together we came up with this.

## Features

- Next.js + Vercel
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- Tailwind CSS ([v4 alpha](https://tailwindcss.com/blog/tailwindcss-v4-alpha))
- Vercel Speed Insights / Analytics

## Getting Started

### Clone and Deploy

Prerequisites: Node.js, npm, pnpm.

Clone this repo and install local dependencies.

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The site will be accessible at `http://localhost:3000`.

This site is deployed to [Vercel](https://vercel.com/templates) - ([Documentation](https://nextjs.org/docs/app/building-your-application/deploying)).

## Todo

- Build out components for repeated content
    - Homepage - link sections
    - About - lists
- Improve markup for tag section underneath titles (use ul element and CSS for tag separators)
- Add class `text-lg` to base style of `<p>` element, then fix any conflicts with smaller text use
- Investigate other methods of serving images as they are currently included in the repo which isn't ideal, and inflates the repo size and build cache significantly. Few options include Git LFS, Vercel Blob, Amazon S3/competing cloud object storage